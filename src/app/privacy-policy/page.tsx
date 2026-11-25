import type { Metadata } from 'next';
import { LegalDocumentView } from '@/components/legal/LegalDocumentView';

export const metadata: Metadata = {
  title: 'Privacy Policy | CommaDesk',
  description:
    'Learn how CommaDesk collects, protects, and handles personal and organizational operational data across Web, Desktop, Mobile, and On-Premises deployments.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy | CommaDesk',
    description:
      'CommaDesk Privacy Policy: organization-level data isolation, customer-controlled attendance and camera settings, and business data protection commitments.',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return <LegalDocumentView docKey="privacy" />;
}
