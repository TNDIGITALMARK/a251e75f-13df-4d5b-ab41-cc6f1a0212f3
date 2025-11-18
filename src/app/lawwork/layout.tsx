import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LawWork - Legal Talent Matching Platform',
  description: 'Connect with elite legal talent effortlessly. Streamline your hiring process and build your dream legal team.',
};

export default function LawWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
