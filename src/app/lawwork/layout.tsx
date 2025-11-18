import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'LawWork - Legal Talent Matching Platform',
  description: 'Connect with elite legal talent effortlessly. Streamline your hiring process and build your dream legal team.',
};

export default function LawWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
