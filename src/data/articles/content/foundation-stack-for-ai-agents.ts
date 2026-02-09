import { Article } from '../types';

export const foundationStackForAiAgents: Article = {
  slug: 'foundation-stack-for-ai-agents',
  title: 'The Foundation Stack for AI Agents: What\'s AWS to Agentic AI?',
  excerpt: 'An infrastructure stack is forming beneath AI agents -- memory, protocols, orchestration, trust, observability. Here is the layer-by-layer breakdown and where the biggest gaps remain.',
  publishedDate: '2026-02-09',
  author: {
    name: 'AIDO Research',
    role: 'AI Industry Analysis',
  },
  seo: {
    metaDescription: 'Layer-by-layer analysis of the emerging infrastructure stack for AI agents: memory (Mem0, Letta), protocols (MCP, A2A), orchestration (LangChain, CrewAI), and why the Agentic AI Foundation matters.',
    keywords: [
      'ai agent infrastructure',
      'MCP protocol',
      'A2A protocol',
      'agentic AI',
      'LangChain',
      'Mem0',
      'Letta',
      'AI orchestration',
      'Agentic AI Foundation',
      'developer tools',
      'ai memory layer',
      'CrewAI',
    ],
  },
  content: `In 2006, Amazon Web Services launched S3 and EC2. Within a decade, virtually every SaaS company on earth ran on top of that stack. AWS did not build the applications -- it built the foundation that made applications possible at scale.

Something structurally similar is happening in AI right now. Except this time the applications are not SaaS dashboards. They are autonomous agents -- systems that reason, remember, use tools, coordinate with other agents, and act on behalf of humans. And just like early SaaS needed compute, storage, and networking primitives, these agents need their own infrastructure stack: memory, protocols, orchestration, trust, observability, and knowledge.

The companies building these layers today are positioning themselves to become the AWS of agentic AI. Here is the stack, layer by layer.

## The Memory Layer: The Biggest Gap

Every useful human assistant remembers context. Your doctor remembers your history. Your accountant remembers last year's filing. But most AI agents today are stateless -- they forget everything between sessions.

This is the memory problem, and it is arguably the single largest infrastructure gap in the agentic stack.

**Mem0** is the most aggressive player here. The company raised a $24M Series A and now processes 186 million API calls per month. Mem0 became an official AWS Agent SDK partner, which signals enterprise readiness. Their approach: a managed memory layer that sits between the agent and its LLM, providing persistent user preferences, session history, and long-term facts that survive across conversations and tool calls.

**Letta** (formerly MemGPT) raised $10M in seed funding with Jeff Dean -- Google's legendary AI chief -- among the investors. Letta's approach is more research-driven, treating memory as an operating system primitive. Their MemGPT paper introduced the idea of virtual context management, where an agent manages its own memory hierarchy the way an OS manages virtual memory. It is technically elegant and targets developers who want fine-grained control.

**Zep** rounds out the memory layer with a focus on knowledge graphs for agent memory, extracting structured relationships from conversation history and making them queryable.

Here is the uncomfortable truth: none of these companies have achieved dominant scale. The "AWS S3 of agent memory" does not exist yet. S3 succeeded because it was dead simple, infinitely scalable, and universally adopted. Agent memory is still fragmented across proprietary formats, inconsistent APIs, and unproven durability guarantees. The company that solves memory with S3-level simplicity and reliability will own one of the most valuable layers in the entire stack.

## The Protocol Layer: MCP, A2A, and the Standards War That Wasn't

Every major platform shift needs communication standards. The web got HTTP. Email got SMTP. Mobile got REST APIs. Agentic AI is getting three protocols that, rather than competing, have carved out complementary territory.

**Model Context Protocol (MCP)**, created by [Anthropic](/company/anthropic), defines how agents connect to tools and data sources. Think of it as USB-C for AI -- a universal plug that lets any agent talk to any tool. MCP SDKs now see 97 million+ monthly downloads, making it the most widely adopted agent protocol by a wide margin. When an agent needs to read a database, call an API, or query a file system, MCP provides the standardized interface.

**Agent-to-Agent Protocol (A2A)**, created by Google, handles something MCP deliberately does not: how agents talk to each other. In a world where you might have a research agent, a coding agent, and a project management agent all working together, A2A defines how they discover each other's capabilities, delegate tasks, and share results. Over 100 companies have adopted A2A, including Salesforce, SAP, and ServiceNow.

**AGENTS.md**, introduced by [OpenAI](/company/openai), takes a different approach entirely. It is a simple markdown file (placed at the root of a repository or project) that describes to any visiting agent what the project is, what tools are available, and what conventions to follow. Think of it as robots.txt for AI agents -- a lightweight discovery mechanism.

The critical development: in December 2025, all three protocols were donated to the **Agentic AI Foundation** under the Linux Foundation. [Anthropic](/company/anthropic), Google, [OpenAI](/company/openai), Microsoft, Amazon, LangChain, and dozens of other companies became founding members.

This is a watershed moment. When the three largest AI labs voluntarily give up control of their protocols to a neutral foundation, it signals that the industry has learned from the browser wars. Instead of proprietary lock-in, the agentic era is starting with open standards. The analogy to HTTP's standardization under the W3C in the early web is almost exact.

The complementary nature matters: **MCP is agent-to-tool** (vertical integration with data and services), **A2A is agent-to-agent** (horizontal coordination between autonomous systems), and **AGENTS.md is agent-to-context** (discovery of what exists in an environment). Together, they form a complete communication layer.

## The Orchestration Layer: Wiring Agents Together

Protocols define how agents communicate. Orchestration defines what agents do, when, and in what order. This layer is the most crowded -- and the most valuable.

**LangChain** is the elephant in the room. The company's open-source framework for building LLM applications has become near-ubiquitous in AI development, with discussions of a valuation approaching $10 billion. LangGraph, their agent orchestration extension, lets developers define complex multi-step agent workflows as directed graphs. LangSmith, their observability product, provides tracing, evaluation, and monitoring. The full LangChain ecosystem -- framework, orchestration, and observability -- is the closest thing to a "full-stack" agent platform that exists today.

**CrewAI** took a different approach: multi-agent role-playing. Instead of defining explicit graphs, developers define agents with roles, goals, and backstories, then let them collaborate on tasks. It is more intuitive for non-technical users and has found strong adoption in enterprise automation. CrewAI's framework supports hierarchical and sequential agent processes, letting teams model complex workflows as crew collaborations.

**Relevance AI** raised a $24M Series B and processes 40,000+ agent executions per month. Their platform targets business users who want to deploy AI agents without writing code -- a no-code/low-code layer on top of the agent stack. This positioning matters because it expands the market beyond developers.

**Microsoft AutoGen** brings enterprise-grade multi-agent conversation frameworks. Backed by Microsoft Research, AutoGen enables agents to have structured conversations to solve tasks, with built-in support for human-in-the-loop workflows. The Microsoft backing gives it automatic distribution into enterprise environments already running Azure and Microsoft 365.

## The Trust and Identity Layer: The Unsexy Necessity

Agents that browse the web, execute code, manage files, and call APIs on your behalf need identity and access management. This layer barely existed 18 months ago.

**Beyond Identity** is building passwordless, certificate-based identity for autonomous systems -- including AI agents. When an agent acts on behalf of a user, how does the receiving system verify that the agent is authorized? Traditional OAuth flows assume a human is clicking "Allow." Agent identity requires something fundamentally different.

**Strata Identity** focuses on identity orchestration -- routing agent authentication through existing enterprise identity infrastructure (Okta, Azure AD, Ping) without requiring companies to rip and replace. For enterprises with complex identity stacks, this abstraction layer is critical.

**Nuggets** is building decentralized, self-sovereign identity for AI agents. Their vision: agents that carry verifiable credentials proving who they represent and what they are authorized to do, without relying on any central authority.

The trust layer is small today but will become critical as agents move from internal developer tools to customer-facing autonomous systems. The first major security breach caused by an unauthorized AI agent will accelerate this entire category overnight.

## The Observability Layer: Watching the Watchers

When a single API call becomes a chain of 15 agent steps, 40 tool calls, and 3 inter-agent handoffs, traditional application monitoring fails completely. Agent observability is an emerging category tackling this.

**Arize AI** raised a $70M Series C and has become the leading ML observability platform. Their product provides real-time monitoring, tracing, and evaluation for LLM and agent systems. Arize Phoenix, their open-source tracing tool, lets developers visualize the full execution path of an agent workflow -- every LLM call, tool invocation, and decision branch.

**Galileo AI** has raised $68M total and focuses on LLM evaluation and hallucination detection. For agents, their platform answers questions like: "Did the agent hallucinate a fact before making a decision?" and "Which step in the chain introduced the error?" This evaluation capability is critical for regulated industries where agent decisions have legal or financial consequences.

**Langfuse** is the open-source alternative, providing tracing, prompt management, and evaluation for LLM applications. With strong community adoption and a generous free tier, Langfuse has become the default choice for startups and smaller teams building agent systems.

## The Knowledge and Data Layer: Giving Agents Something to Think About

Agents need structured, queryable access to knowledge. This layer connects agents to the world's information in formats they can reason over.

**LlamaIndex** has become the standard framework for connecting LLMs to external data. Their indexing, retrieval, and query engine abstractions let developers build RAG (Retrieval-Augmented Generation) pipelines that give agents access to private documents, databases, and APIs. LlamaIndex sits naturally alongside LangChain -- LangChain orchestrates the agent, LlamaIndex manages the knowledge.

**Neo4j** has raised $325M+ and is leveraging its graph database for the agent era. Knowledge graphs -- where information is stored as entities and relationships rather than flat documents -- are proving especially valuable for agents that need to reason about connected concepts. When an agent needs to understand "Who reports to whom?" or "Which products depend on which components?", graph queries are orders of magnitude more effective than vector search alone.

## What This Means for Builders

The agentic infrastructure stack is forming in real time. Like the early cloud era, some layers are crowded (orchestration), some are nascent (trust/identity), and some have a clear gap waiting to be filled (memory).

**If you are picking a layer to build in**, here is the framework:

| Layer | Maturity | Competition | Opportunity |
|-------|----------|-------------|-------------|
| Memory | Early | Low-Medium | Highest -- no dominant player |
| Protocols | Standardizing | Consolidating | Build on MCP/A2A, don't compete |
| Orchestration | Growth | High | Vertical specialization |
| Trust/Identity | Nascent | Low | High -- first breach accelerates |
| Observability | Growth | Medium | Enterprise compliance focus |
| Knowledge/Data | Maturing | Medium | Domain-specific knowledge graphs |

The Agentic AI Foundation under the Linux Foundation changes the calculus for everyone. Open protocols mean that infrastructure companies compete on execution, not lock-in. Developers can adopt MCP for tool integration and A2A for agent coordination without betting on a single vendor.

The parallel to AWS is instructive. Amazon did not win because it was the only cloud provider. It won because it shipped reliable primitives faster than anyone else and made them trivially easy to adopt. The winners of the agentic infrastructure era will follow the same playbook: ship reliable primitives, make them easy to adopt, and let the ecosystem build on top.

The foundation is being poured right now. The question is not whether AI agents will need infrastructure. It is who will build the layers that last.

---

*Sources: [TechCrunch](https://techcrunch.com/2025/12/16/anthropic-google-and-openai-partner-to-form-a-new-post-under-the-linux-foundation/), [The Information](https://www.theinformation.com/articles/langchain-is-in-talks-for-new-funding-at-roughly-10-billion-valuation), [Mem0 Blog](https://mem0.ai/blog/mem0-aws-partnership), [Crunchbase](https://www.crunchbase.com/organization/arize-ai), [a]16z](https://a16z.com/announcement/investing-in-letta/), [Google Cloud Blog](https://cloud.google.com/blog/products/ai-machine-learning/a2a-a-new-era-of-agent-interoperability), [Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-launches-agentic-ai-initiative)*`,
  tags: ['ai-infrastructure', 'ai-agents', 'mcp', 'developer-tools', 'protocols', 'memory', 'orchestration'],
  category: 'analysis' as const,
  featured: true,
  readingTimeMinutes: 8,
};
