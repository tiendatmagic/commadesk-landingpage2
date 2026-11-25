import type { Metadata } from 'next';
import { LegalDocumentView } from '@/components/legal/LegalDocumentView';

export const metadata: Metadata = {
  title: 'Terms of Service | CommaDesk',
  description:
    'Read the CommaDesk Terms of Service governing access to our public websites, Cloud SaaS workspaces, Desktop and Mobile clients, and enterprise modules.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms of Service | CommaDesk',
    description:
      'CommaDesk Terms of Service: customer data ownership, cloud & on-premises licensing, security responsibilities, and enterprise SLA governance.',
    type: 'website',
  },
};

export default function TermsOfServicePage() {
  return <LegalDocumentView docKey="terms" />;
}
