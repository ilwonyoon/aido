import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Applications',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ApplicationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
