#!/usr/bin/env python3
"""
AIDO Company Discovery Engine
==============================
새로운 AI 스타트업을 무료 소스에서 발견하고, 기존 DB와 대조해 신규 후보만 추출.

소스:
  - TechCrunch AI RSS
  - VentureBeat AI RSS
  - Y Combinator (최신 배치)
  - Hacker News "Who's Hiring" (매월 1일)

사용법:
  python3 scripts/discovery.py              # 주간 스캔
  python3 scripts/discovery.py --monthly    # 월간 (HN 포함)
  python3 scripts/discovery.py --yc         # YC 배치만
  python3 scripts/discovery.py --output json  # JSON 출력
"""

import argparse
import json
import os
import re
import sys
import time
from datetime import datetime, timedelta
from pathlib import Path
from urllib.request import urlopen, Request
from urllib.error import URLError
from html.parser import HTMLParser
import xml.etree.ElementTree as ET

# ─── 경로 설정 ──────────────────────────────────────────────────────────────
SCRIPT_DIR = Path(__file__).parent
REPO_ROOT = SCRIPT_DIR.parent
LOOKUP_FILE = SCRIPT_DIR / "company-lookup.json"
COMPANIES_DIR = REPO_ROOT / "src" / "data" / "companies"
QUEUE_FILE = REPO_ROOT / "RESEARCH_QUEUE.md"
DISCOVERY_LOG = SCRIPT_DIR / "discovery-log.json"


# ─── 기존 회사 로드 ─────────────────────────────────────────────────────────
def load_existing_companies() -> dict:
    """
    company-lookup.json에서 기존 회사 목록 로드.
    없으면 src/data/companies/*.ts 파일에서 직접 생성.
    Returns: {id: name, ...} 딕셔너리
    """
    if LOOKUP_FILE.exists():
        with open(LOOKUP_FILE) as f:
            data = json.load(f)
        return {c["id"]: c["name"] for c in data}

    # fallback: TS 파일에서 직접 파싱
    print("⚠️  company-lookup.json 없음, TS 파일에서 직접 생성...", file=sys.stderr)
    existing = {}
    for ts_file in COMPANIES_DIR.glob("*.ts"):
        if ts_file.name == "index.ts":
            continue
        content = ts_file.read_text()
        id_match = re.search(r"id: '([^']+)'", content)
        name_match = re.search(r"name: '([^']+)'", content)
        if id_match:
            existing[id_match.group(1)] = name_match.group(1) if name_match else id_match.group(1)
    return existing


def normalize_name(name: str) -> str:
    """회사명 정규화: 소문자, 특수문자 제거, 공백→하이픈"""
    name = name.lower().strip()
    name = re.sub(r"[^\w\s-]", "", name)
    name = re.sub(r"\s+", "-", name)
    name = re.sub(r"-+", "-", name)
    return name.strip("-")


def is_duplicate(candidate_name: str, existing: dict) -> bool:
    """기존 DB에 이미 있는 회사인지 확인"""
    normalized = normalize_name(candidate_name)
    for existing_id, existing_name in existing.items():
        if normalized == normalize_name(existing_id):
            return True
        if normalized == normalize_name(existing_name):
            return True
        # 부분 일치 (짧은 이름 오탐 방지: 최소 5자 이상)
        if len(normalized) >= 5 and len(normalize_name(existing_id)) >= 5:
            if normalized in normalize_name(existing_id) or normalize_name(existing_id) in normalized:
                return True
    return False


# ─── HTTP 유틸 ───────────────────────────────────────────────────────────────
def fetch_url(url: str, timeout: int = 15) -> str | None:
    """간단한 HTTP GET"""
    try:
        req = Request(url, headers={
            "User-Agent": "Mozilla/5.0 (compatible; AIDO-Discovery/1.0)"
        })
        with urlopen(req, timeout=timeout) as resp:
            return resp.read().decode("utf-8", errors="replace")
    except (URLError, Exception) as e:
        print(f"  ⚠️  fetch 실패 {url}: {e}", file=sys.stderr)
        return None


# ─── RSS 파싱 ────────────────────────────────────────────────────────────────
FUNDING_KEYWORDS = [
    "raises", "raise", "raised", "funding", "funded",
    "closes", "seed", "series a", "series b", "series c", "series d",
    "secures", "led by", "backed by", "valuation",
    "million", "billion", "$", "round", "investment", "investor",
    "venture", "capital", "startup", "launches",
]

EXCLUDE_KEYWORDS = [
    "layoff", "bankrupt", "shut down", "close down",
]

# 대형 테크 (이미 DB에 있거나 스타트업 아님)
BIG_TECH = {
    "apple", "google", "microsoft", "amazon", "meta", "openai",
    "tesla", "netflix", "uber", "lyft", "airbnb", "stripe",
}

AI_KEYWORDS = [
    "ai", "artificial intelligence", "machine learning", "ml",
    "llm", "large language model", "generative", "gpt",
    "deep learning", "neural", "automation", "robotics",
    "startup", "raises", "funding",
]

# 회사명 추출 패턴 (우선순위 순)
# 가짜 회사명 필터 (이런 단어로 시작하거나 포함하면 제외)
FAKE_NAME_PATTERNS = [
    r"^startups?\s*$",
    r"^companies",
    r"^building\s",
    r"^a\s+startup",
    r"^the\s+",
    r"directory$",
    r"^here\s+are",
    r"^european",
    r"^us.based",
    r"\d{4}$",           # 연도로 끝나는 것
    r"^how\s",
    r"^what\s",
    r"^why\s",
]


def is_valid_company_name(name: str) -> bool:
    """추출된 이름이 실제 회사명처럼 보이는지 검증"""
    name = name.strip()

    # 길이 체크
    if not (2 < len(name) < 45):
        return False

    # 단어 수 (일반적으로 1-4 단어)
    words = name.split()
    if len(words) > 5:
        return False

    # 소문자로만 이루어진 여러 단어 (문장 조각)
    if len(words) > 2 and name == name.lower():
        return False

    # 가짜 패턴 체크
    name_lower = name.lower()
    for pat in FAKE_NAME_PATTERNS:
        if re.search(pat, name_lower):
            return False

    # 특수문자 과다
    if len(re.findall(r"[^\w\s\.\-]", name)) > 2:
        return False

    return True


def extract_company_from_title(title: str) -> str | None:
    """뉴스 제목에서 회사명 추출"""

    # 패턴 1: "CompanyName, a [descriptor] startup, raises"
    m = re.match(r"^([A-Z][A-Za-z0-9\.\-]+(?:\s+[A-Z][A-Za-z0-9\.\-]+)?),?\s+(?:a\s+)?(?:[\w\s]+?\s+)?(?:startup|company),?\s+(?:raises?|closes?|secures?)", title, re.IGNORECASE)
    if m:
        candidate = m.group(1).strip()
        if is_valid_company_name(candidate):
            return candidate

    # 패턴 2: "CompanyName raises $X"
    m = re.match(r"^([A-Z][A-Za-z0-9\.\-]+(?:\s+[A-Z][A-Za-z0-9\.\-]*)?)\s+(?:raises?|closes?|secures?|lands?)\s+\$", title)
    if m:
        candidate = m.group(1).strip()
        if is_valid_company_name(candidate):
            return candidate

    # 패턴 3: "startup CompanyName raises" (startup X 패턴)
    m = re.search(r"startup\s+([A-Z][A-Za-z0-9\.\-]+(?:\s+[A-Z][A-Za-z0-9\.\-]*)?)\s+(?:raises?|closes?|secures?|is\b|has\b)", title)
    if m:
        candidate = m.group(1).strip()
        if is_valid_company_name(candidate):
            return candidate

    # 패턴 4: "bought/acquired AI startup CompanyName"
    m = re.search(r"(?:bought|acqui\w+)\s+(?:AI\s+)?(?:startup\s+)?([A-Z][A-Za-z0-9\.\-]+)", title)
    if m:
        candidate = m.group(1).strip()
        if is_valid_company_name(candidate):
            return candidate

    # 패턴 5: fallback — 첫 단어가 대문자이고 funding 키워드 앞
    for kw in ["raises", "raise", "raised", "closes", "secures", "lands"]:
        if kw in title.lower():
            parts = re.split(kw, title, flags=re.IGNORECASE)
            candidate = parts[0].strip().rstrip(" ,.-:")
            # prefix 제거
            candidate = re.sub(r"^(?:AI\s+startup|startup|company|the|a|an)\s+", "", candidate, flags=re.IGNORECASE)
            candidate = candidate.strip()
            if is_valid_company_name(candidate):
                return candidate

    return None


def fetch_url_with_redirect(url: str, timeout: int = 15) -> str | None:
    """308/301/302 redirect를 직접 처리하는 HTTP GET"""
    import http.client
    from urllib.parse import urlparse

    max_redirects = 5
    current_url = url

    for _ in range(max_redirects):
        parsed = urlparse(current_url)
        is_https = parsed.scheme == "https"
        host = parsed.netloc
        path = parsed.path or "/"
        if parsed.query:
            path += "?" + parsed.query

        try:
            if is_https:
                conn = http.client.HTTPSConnection(host, timeout=timeout)
            else:
                conn = http.client.HTTPConnection(host, timeout=timeout)

            conn.request("GET", path, headers={
                "User-Agent": "Mozilla/5.0 (compatible; AIDO-Discovery/1.0)",
                "Accept": "*/*",
            })
            resp = conn.getresponse()

            if resp.status in (301, 302, 307, 308):
                location = resp.getheader("Location", "")
                if not location:
                    break
                if location.startswith("/"):
                    current_url = f"{parsed.scheme}://{host}{location}"
                else:
                    current_url = location
                conn.close()
                continue

            if resp.status == 200:
                return resp.read().decode("utf-8", errors="replace")

            break
        except Exception as e:
            print(f"  ⚠️  fetch 실패 {current_url}: {e}", file=sys.stderr)
            break

    return None


def scan_rss(feed_url: str, source_name: str) -> list[dict]:
    """RSS 피드 스캔 → AI 스타트업 후보 추출"""
    print(f"  → {source_name} 스캔 중...")
    content = fetch_url_with_redirect(feed_url)
    if not content:
        return []

    candidates = []
    try:
        root = ET.fromstring(content)
        items = root.findall(".//item")

        for item in items[:30]:
            title_el = item.find("title")
            link_el = item.find("link")
            pub_el = item.find("pubDate")

            if title_el is None:
                continue

            title = title_el.text or ""
            link = link_el.text if link_el is not None else ""
            pub_date = pub_el.text if pub_el is not None else ""

            title_lower = title.lower()

            # 제외 키워드
            if any(kw in title_lower for kw in EXCLUDE_KEYWORDS):
                continue

            # AI OR 펀딩 관련 여부 (둘 중 하나면 OK)
            has_ai = any(kw in title_lower for kw in AI_KEYWORDS)
            has_funding = any(kw in title_lower for kw in FUNDING_KEYWORDS)

            if not (has_ai or has_funding):
                continue

            # 대형 테크 제외
            first_word = title_lower.split()[0] if title_lower.split() else ""
            if first_word in BIG_TECH:
                continue

            company = extract_company_from_title(title)
            if company:
                # 대형 테크 회사명이면 건너뜀
                if company.lower() in BIG_TECH:
                    continue
                candidates.append({
                    "name": company,
                    "source": source_name,
                    "url": link,
                    "date": pub_date,
                    "headline": title,
                    "confidence": "medium",
                })
    except ET.ParseError as e:
        print(f"  ⚠️  RSS 파싱 오류: {e}", file=sys.stderr)

    print(f"     → {len(candidates)}개 후보 발견")
    return candidates


# ─── YC 스캔 ────────────────────────────────────────────────────────────────
def scan_yc(batch: str | None = None) -> list[dict]:
    """
    Y Combinator AI 회사 스캔.
    HN의 'Launch HN: CompanyName (YC W26)' 패턴을 이용 — 정확도 95%+
    """
    if batch is None:
        year = datetime.now().year % 100
        month = datetime.now().month
        # W = 1~6월, S = 7~12월
        batch = f"W{year}" if month <= 6 else f"S{year}"

    print(f"  → YC {batch} Launch HN 스캔 중...")

    # HN Algolia API (무료, 인증 불필요)
    url = f"https://hn.algolia.com/api/v1/search?query=Launch+HN+YC+{batch}&tags=story&hitsPerPage=100"
    content = fetch_url_with_redirect(url)
    if not content:
        return []

    try:
        data = json.loads(content)
        hits = data.get("hits", [])
    except json.JSONDecodeError:
        return []

    candidates = []
    seen = set()

    # 패턴: "Launch HN: CompanyName (YC W26) – description"
    launch_hn_pattern = re.compile(
        r"Launch HN:\s*(.+?)\s*\(YC\s*" + re.escape(batch) + r"\)",
        re.IGNORECASE
    )

    for hit in hits:
        title = hit.get("title", "")
        m = launch_hn_pattern.search(title)
        if not m:
            continue

        company_name = m.group(1).strip()
        if company_name in seen or not is_valid_company_name(company_name):
            continue
        seen.add(company_name)

        # AI 관련 여부 — 제목 설명 부분 확인
        description = title.split("–")[-1] if "–" in title else title
        is_ai = any(kw in (title + description).lower() for kw in AI_KEYWORDS)

        candidates.append({
            "name": company_name,
            "source": f"YC {batch}",
            "url": hit.get("url") or f"https://news.ycombinator.com/item?id={hit.get('objectID')}",
            "date": datetime.now().strftime("%Y-%m-%d"),
            "headline": title[:100],
            "confidence": "high",
            "is_ai": is_ai,
        })

    # AI 회사 먼저, 나머지는 낮은 우선순위
    candidates.sort(key=lambda x: (0 if x.get("is_ai") else 1))

    print(f"     → {len(candidates)}개 YC 회사 발견 (AI: {sum(1 for c in candidates if c.get('is_ai'))}개)")
    return candidates


# ─── HN "Who's Hiring" 스캔 ─────────────────────────────────────────────────
def scan_hn_hiring() -> list[dict]:
    """Hacker News 최신 'Who is hiring?' 스레드 스캔"""
    print("  → HN Who's Hiring 스캔 중...")

    # HN Algolia API
    url = "https://hn.algolia.com/api/v1/search?query=Ask+HN+Who+is+hiring&tags=story&hitsPerPage=5"
    content = fetch_url(url)
    if not content:
        return []

    try:
        data = json.loads(content)
        hits = data.get("hits", [])
        if not hits:
            return []

        latest = hits[0]
        story_id = latest["objectID"]
        print(f"     스레드: {latest.get('title', '')} (id: {story_id})")

        # 댓글 가져오기
        comments_url = f"https://hn.algolia.com/api/v1/items/{story_id}"
        comments_content = fetch_url(comments_url)
        if not comments_content:
            return []

        comments_data = json.loads(comments_content)
        children = comments_data.get("children", [])

        candidates = []
        for comment in children[:200]:
            text = comment.get("text") or ""
            text_lower = text.lower()

            # AI 관련 여부
            if not any(kw in text_lower for kw in ["ai", "ml", "machine learning", "llm", "artificial"]):
                continue

            # 첫 줄에서 회사명 추출
            # 패턴: "CompanyName (YC W24) | Location | Remote | ..."
            lines = re.split(r"<br|\\n|\n", text)
            first_line = re.sub(r"<[^>]+>", "", lines[0]).strip() if lines else ""

            if not first_line:
                continue

            # 파이프 구분자 앞이 회사명
            company = first_line.split("|")[0].split("(")[0].strip()
            company = re.sub(r"\[(hiring|remote)\]", "", company, flags=re.IGNORECASE).strip()

            if 2 < len(company) < 60:
                candidates.append({
                    "name": company,
                    "source": "HN Who's Hiring",
                    "url": f"https://news.ycombinator.com/item?id={story_id}",
                    "date": datetime.now().strftime("%Y-%m-%d"),
                    "headline": first_line[:100],
                    "confidence": "medium",
                })

        print(f"     → {len(candidates)}개 후보 발견")
        return candidates

    except (json.JSONDecodeError, KeyError) as e:
        print(f"  ⚠️  HN 파싱 오류: {e}", file=sys.stderr)
        return []


# ─── 메인 ───────────────────────────────────────────────────────────────────
def run_discovery(monthly: bool = False, yc_only: bool = False) -> list[dict]:
    """전체 discovery 실행"""
    existing = load_existing_companies()
    print(f"📚 기존 DB: {len(existing)}개 회사")
    print()

    all_candidates = []

    if yc_only:
        all_candidates += scan_yc()
    else:
        print("🔍 주간 스캔:")
        all_candidates += scan_rss(
            "https://techcrunch.com/category/artificial-intelligence/feed/",
            "TechCrunch AI"
        )
        # TechCrunch 펀딩 전용 검색 RSS
        all_candidates += scan_rss(
            "https://techcrunch.com/?s=AI+startup+raises&feed=rss",
            "TechCrunch Funding"
        )
        all_candidates += scan_rss(
            "https://venturebeat.com/ai/feed/",
            "VentureBeat AI"
        )
        all_candidates += scan_yc()

        if monthly:
            print()
            print("🔍 월간 스캔 (추가):")
            all_candidates += scan_hn_hiring()

    print()
    print("🔎 중복 제거 & 필터링...")

    # 중복 제거 (후보 내 중복)
    seen_names = set()
    unique = []
    for c in all_candidates:
        key = normalize_name(c["name"])
        if key in seen_names or len(key) < 2:
            continue
        seen_names.add(key)
        unique.append(c)

    # 기존 DB 대조
    new_companies = []
    skipped = 0
    for c in unique:
        if is_duplicate(c["name"], existing):
            skipped += 1
        else:
            new_companies.append(c)

    print(f"  후보 {len(unique)}개 중 {skipped}개 기존 DB에 있음")
    print(f"  ✅ 신규 후보: {len(new_companies)}개")

    return new_companies


def save_to_queue(new_companies: list[dict]):
    """RESEARCH_QUEUE.md에 신규 후보 추가"""
    if not new_companies:
        return

    today = datetime.now().strftime("%Y-%m-%d")
    section = f"\n\n## 🆕 Discovery {today} ({len(new_companies)}개 신규)\n\n"
    section += "| Company | Source | URL | Confidence |\n"
    section += "|---------|--------|-----|------------|\n"

    for c in new_companies:
        section += f"| **{c['name']}** | {c['source']} | [{c.get('url','')[:50]}]({c.get('url','')}) | {c['confidence']} |\n"

    # RESEARCH_QUEUE.md 끝에 추가
    with open(QUEUE_FILE, "a") as f:
        f.write(section)

    print(f"\n📝 RESEARCH_QUEUE.md에 {len(new_companies)}개 추가됨")


def save_intake_json(new_companies: list[dict]) -> Path | None:
    """
    기존 파이프라인(sequential-company-research, autopilot)이 읽는
    intake JSON 포맷으로 저장.
    파일: src/data/research/new-company-intake-discovery-{date}.json
    """
    if not new_companies:
        return None

    today = datetime.now().strftime("%Y-%m-%d")
    batch_name = f"discovery-{today}"
    out_path = REPO_ROOT / "src" / "data" / "research" / f"new-company-intake-{batch_name}.json"

    # 우선순위: high confidence = P0, medium = P1, low = P2
    confidence_to_priority = {"high": "P0", "medium": "P1", "low": "P2"}

    items = []
    for i, c in enumerate(new_companies):
        items.append({
            "name": c["name"],
            "source": c.get("source", "discovery"),
            "priority": confidence_to_priority.get(c.get("confidence", "medium"), "P1"),
            "status": "queued",
            "dedupeCheckedAgainstRepo": True,
            "notes": c.get("headline", "")[:120] if c.get("headline") else "",
            "batch": batch_name,
            "order": i + 1,
            "discoveryUrl": c.get("url", ""),
        })

    p0 = sum(1 for x in items if x["priority"] == "P0")
    p1 = sum(1 for x in items if x["priority"] == "P1")
    p2 = sum(1 for x in items if x["priority"] == "P2")

    payload = {
        "generatedAt": datetime.now().isoformat(),
        "batch": batch_name,
        "count": len(items),
        "p0": p0,
        "p1": p1,
        "p2": p2,
        "items": items,
    }

    with open(out_path, "w") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)

    print(f"📦 Intake JSON 저장: {out_path.name} ({p0} P0 / {p1} P1 / {p2} P2)")
    return out_path


def save_log(new_companies: list[dict]):
    """discovery-log.json에 실행 기록"""
    log = []
    if DISCOVERY_LOG.exists():
        with open(DISCOVERY_LOG) as f:
            log = json.load(f)

    log.append({
        "run_at": datetime.now().isoformat(),
        "found": len(new_companies),
        "companies": new_companies,
    })

    # 최근 10회만 유지
    log = log[-10:]

    with open(DISCOVERY_LOG, "w") as f:
        json.dump(log, f, indent=2, ensure_ascii=False)


# ─── CLI ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="AIDO Company Discovery Engine")
    parser.add_argument("--monthly", action="store_true", help="HN Who's Hiring 포함 (월간 스캔)")
    parser.add_argument("--yc", action="store_true", help="YC 배치만 스캔")
    parser.add_argument("--output", choices=["text", "json", "queue"], default="text",
                        help="출력 형식 (text/json/queue)")
    parser.add_argument("--no-save", action="store_true", help="RESEARCH_QUEUE.md에 저장 안 함")
    args = parser.parse_args()

    print("=" * 60)
    print("  AIDO Company Discovery Engine")
    print(f"  {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 60)
    print()

    new_companies = run_discovery(monthly=args.monthly, yc_only=args.yc)

    if args.output == "json":
        print(json.dumps(new_companies, indent=2, ensure_ascii=False))
    elif args.output == "queue":
        if not args.no_save:
            save_to_queue(new_companies)
            save_log(new_companies)
    else:
        # 기본: 텍스트 출력
        print()
        print("─" * 60)
        print(f"신규 발견 회사 ({len(new_companies)}개):")
        print("─" * 60)
        for i, c in enumerate(new_companies, 1):
            print(f"{i:3}. {c['name']:<30} [{c['source']}] ({c['confidence']})")
            if c.get("headline"):
                print(f"     └ {c['headline'][:70]}")

        if not args.no_save and new_companies:
            print()
            save_to_queue(new_companies)
            save_intake_json(new_companies)   # ← 파이프라인 연결
            save_log(new_companies)

    print()
    print("✅ Discovery 완료")
