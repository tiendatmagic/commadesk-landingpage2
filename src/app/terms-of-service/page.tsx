import type { Metadata } from 'next';
import { LegalDocumentView } from '@/components/legal/LegalDocumentView';

export const metadata: Metadata = {
  title: 'Terms of Service | CommaDesk',
  description:
    'Read the CommaDesk Terms of Service governing access to CommaDesk websites, cloud workspaces, desktop and mobile apps, and business modules.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms of Service | CommaDesk',
    description:
      'CommaDesk Terms of Service: customer data ownership, cloud and on-premises licensing, workspace security responsibilities, and service standards.',
    type: 'website',
  },
};

export default function TermsOfServicePage() {
  return <LegalDocumentView docKey="terms" />;
}
