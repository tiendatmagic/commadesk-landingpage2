import type { Metadata } from 'next';
import { LegalDocumentView } from '@/components/legal/LegalDocumentView';

export const metadata: Metadata = {
  title: 'Privacy Policy | CommaDesk',
  description:
    'Learn how CommaDesk collects, isolates, protects, and processes personal and enterprise operational data across Web, Desktop, Mobile, and On-Premises deployments.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy | CommaDesk',
    description:
      'CommaDesk Privacy Policy: multi-tenant data isolation, customer-controlled biometrics and GPS, and enterprise data protection commitments.',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return <LegalDocumentView docKey="privacy" />;
}
