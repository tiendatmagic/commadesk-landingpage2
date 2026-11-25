import type { LegalDocKey, LegalDocumentContent } from '../../types';

export const legalEn: Record<LegalDocKey, LegalDocumentContent> = {
  privacy: {
    badge: 'Privacy & Data Protection',
    title: ['Privacy Policy', 'Data protection & handling'],
    subtitle:
      'How CommaDesk collects, protects, and handles personal and organizational operational data across Web, Desktop, Mobile, and On-Premises deployments.',
    effectiveDateLabel: 'Effective Date',
    effectiveDate: 'November 25, 2026',
    versionLabel: 'Version',
    version: '2.0',
    scopeLabel: 'Scope',
    scope: 'Web, Desktop & Mobile',
    switchDocLabel: 'Read Terms of Service',
    switchDocHref: '/terms-of-service',
    highlightsTitle: 'Core Privacy Commitments',
    highlights: [
      {
        title: 'Strict Organization Isolation',
        description:
          'Each company workspace is logically separated so subsidiary, branch, and user records remain private to your organization.',
      },
      {
        title: 'Zero Data Monetization',
        description:
          'We never sell, rent, or broker customer operational records, employee profiles, or business analytics to third-party advertisers.',
      },
      {
        title: 'Customer-Controlled Attendance & Cameras',
        description:
          'Facial check-in, GPS location verification, and camera monitoring operate strictly under organizational configuration and local compliance rules.',
      },
    ],
    tocTitle: 'On This Page',
    sections: [
      {
        id: 'scope-and-roles',
        number: '01',
        title: 'Scope & Data Controller Roles',
        paragraphs: [
          'This Privacy Policy explains how CommaDesk ("we", "our") handles information when you visit our public websites, evaluate the platform, or use CommaDesk applications across Web, Windows and macOS Desktop, and iOS and Android Mobile.',
          'For public website visitors and prospective inquiries, CommaDesk acts as the Data Controller. For organizations using CommaDesk for workforce, project, logistics, document registry, CRM, or camera operations, the subscribing organization acts as the Data Controller and CommaDesk acts as the Data Processor following your organization’s instructions.',
        ],
      },
      {
        id: 'information-we-collect',
        number: '02',
        title: 'Information We Collect',
        paragraphs: [
          'We collect only the information required to operate your selected business modules accurately and securely:',
        ],
        bullets: [
          'Account & Organization Details: Name, business email, job role, organizational unit, and role-based permission settings configured by your workspace administrator.',
          'Operational & Workspace Content: Tasks, project schedules, document registry records, warehouse stock logs, support tickets, fleet dispatches, and internal messages submitted by authorized users.',
          'Optional Attendance & Camera Modules (When Enabled by Customer): Clock-in timestamps, GPS check-in coordinates, facial check-in verification data, and authorized camera event logs.',
          'Security & Activity Logs: Sign-in sessions, trusted device verification, access activity, and audit records (access events, record updates, and permission changes) used to protect workspace integrity.',
          'Display Preferences: Browser settings such as your selected interface language (English or Vietnamese).',
        ],
        callout: {
          title: 'Public Website Visitors',
          content:
            'Browsing our public pages, feature handbook, and legal pages does not require registration. Only your chosen display language preference is remembered in your browser.',
        },
      },
      {
        id: 'how-we-use-data',
        number: '03',
        title: 'How We Use Information',
        paragraphs: [
          'CommaDesk processes personal and organizational data exclusively for legitimate operational and contractual purposes:',
        ],
        bullets: [
          'Providing workspaces, verifying sign-ins (including two-factor verification), and supporting multi-branch operations.',
          'Enforcing role-based access rules so team members only view modules and records authorized for their department or role.',
          'Generating operational reports, attendance summaries, payroll work entries, and approval deadline reminders configured by your organization.',
          'Detecting unauthorized sign-ins, supporting remote session revocation, and keeping reliable activity audit trails.',
          'Providing customer support, maintaining service reliability, and sending essential security or product notices.',
        ],
      },
      {
        id: 'third-party-integrations',
        number: '04',
        title: 'Third-Party Integrations & Data Sharing',
        paragraphs: [
          'We do not sell personal data. Information is shared only in the following strictly governed scenarios:',
        ],
        bullets: [
          'Customer-Authorized Integrations: Two-way synchronization with business software explicitly connected by your administrators (such as accounting tools, retail POS systems like KiotViet, or notification channels like Zalo and Telegram).',
          'Service & Hosting Providers: Trusted cloud hosting, encrypted storage, and email or notification delivery providers bound by strict confidentiality and data protection agreements.',
          'Legal & Regulatory Compliance: When required by applicable law, court order, or valid governmental request, with prior notice to the customer organization where legally permitted.',
        ],
      },
      {
        id: 'security-and-isolation',
        number: '05',
        title: 'Security Protection & Data Retention',
        paragraphs: [
          'CommaDesk applies layered safeguards across network connections, storage, and workspace access. Connections are encrypted in transit, account credentials are protected, and administrative changes are recorded in activity audit logs.',
          'For organizations requiring full data ownership or isolated internal networks, CommaDesk also supports Private Dedicated Server (On-Premises) deployment where all operational data remains inside your own infrastructure.',
          'We retain workspace data while your subscription remains active or as required by statutory retention rules (such as official document registry and payroll regulations). Upon contract termination, customers can export their records and request verified deletion within the agreed transition window.',
        ],
      },
      {
        id: 'your-privacy-rights',
        number: '06',
        title: 'Your Privacy Rights',
        paragraphs: [
          'Depending on your jurisdiction (including Vietnam’s Decree 13/2023/ND-CP on Personal Data Protection and equivalent privacy frameworks), you have the right to:',
        ],
        bullets: [
          'Request access to and a portable copy of your personal data processed within CommaDesk.',
          'Request correction of inaccurate or incomplete profile and personnel records.',
          'Request deletion, restriction, or objection to specific processing activities where applicable.',
          'Withdraw consent for optional features (such as facial or location-based check-in) through your organization’s administrator or use alternative check-in methods.',
        ],
        callout: {
          title: 'Organization Users',
          content:
            'If your account is managed by your employer or organization, please direct data access or correction requests to your Workspace Administrator first, as they manage your organizational records.',
        },
      },
      {
        id: 'updates-and-contact',
        number: '07',
        title: 'Policy Updates & Contact Information',
        paragraphs: [
          'We may update this Privacy Policy periodically to reflect new platform capabilities, regulatory changes, or security updates. Material updates will be posted directly on this page.',
          'If you have questions regarding privacy practices or data protection requests, please contact our Privacy & Compliance Team using the details below.',
        ],
      },
    ],
    contactTitle: 'Privacy & Data Protection Inquiries',
    contactDesc:
      'Need to submit a data access request, review privacy commitments, or verify compliance for your organization?',
    contactEmailLabel: 'Privacy Contact',
    contactEmail: 'privacy@commadesk.com',
    entityLabel: 'Data Controller / Publisher',
    entityValue: 'CommaDesk',
    securityCtaLabel: 'Explore Security & Permissions',
  },

  terms: {
    badge: 'Legal & Governance',
    title: ['Terms of Service', 'Platform usage guidelines'],
    subtitle:
      'The binding terms governing access to CommaDesk websites, cloud workspaces, desktop and mobile apps, and business modules.',
    effectiveDateLabel: 'Effective Date',
    effectiveDate: 'November 25, 2026',
    versionLabel: 'Version',
    version: '2.0',
    scopeLabel: 'Scope',
    scope: 'Web, Desktop & Mobile',
    switchDocLabel: 'Read Privacy Policy',
    switchDocHref: '/privacy-policy',
    highlightsTitle: 'Key Agreement Pillars',
    highlights: [
      {
        title: 'You Own Your Business Data',
        description:
          'Customer organizations retain full ownership and export rights over all projects, HR records, documents, and operational files.',
      },
      {
        title: 'Flexible Cloud & On-Premises',
        description:
          'Clear licensing coverage whether your teams operate on CommaDesk Cloud or Private Dedicated Server deployments.',
      },
      {
        title: 'Service Standards & Governance',
        description:
          'Transparent availability commitments, role-based access accountability, and clear acceptable-use rules.',
      },
    ],
    tocTitle: 'On This Page',
    sections: [
      {
        id: 'acceptance-of-terms',
        number: '01',
        title: 'Acceptance of Terms',
        paragraphs: [
          'By accessing or using CommaDesk’s public websites, reviewing product guides, or deploying the CommaDesk platform (across Web, Windows and macOS Desktop, or iOS and Android Mobile), you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy.',
          'If you are entering into these Terms on behalf of a company, government agency, or other legal entity ("Customer"), you represent that you have the authority to bind that organization and its authorized users.',
        ],
      },
      {
        id: 'service-scope-and-deployment',
        number: '02',
        title: 'Platform Scope & Deployment Models',
        paragraphs: [
          'CommaDesk provides an integrated business operations platform covering Work & Projects, HR & Workforce, Document Registry, Inventory & Fleet Logistics, CRM & Helpdesk, Internal Communications, Camera Monitoring, and Access Governance.',
        ],
        bullets: [
          'Cloud Edition: Hosted and maintained by CommaDesk with strict organization data isolation, scheduled backups, and regular feature updates.',
          'On-Premises / Dedicated Server Edition: Deployed within Customer-managed infrastructure under a separate Enterprise Agreement or Order Form.',
          'Public Website & Handbook Pages: Provided publicly for product information and compliance reference without warranty of specific module availability outside an active subscription.',
        ],
      },
      {
        id: 'accounts-and-security',
        number: '03',
        title: 'Workspace Accounts & Security Responsibilities',
        paragraphs: [
          'Customers are responsible for configuring role-based permissions, managing employee onboarding and offboarding access, and safeguarding administrator credentials.',
        ],
        bullets: [
          'Enforce strong password policies and Two-Factor Authentication (2FA) across privileged accounts.',
          'Promptly revoke access or active sessions when employees, contractors, or partners leave the organization.',
          'Notify CommaDesk promptly upon suspecting unauthorized workspace access or credential compromise.',
        ],
      },
      {
        id: 'data-ownership-and-ip',
        number: '04',
        title: 'Customer Data Ownership & Intellectual Property',
        paragraphs: [
          'As between CommaDesk and the Customer, Customer retains all right, title, and interest in and to all data, documents, media, employee records, and configurations uploaded or created within its workspace ("Customer Data").',
          'CommaDesk retains all intellectual property rights in the platform software, user interfaces, trademarks, logos, and documentation. Except for the limited right to use the Service during an active term, no ownership rights are transferred.',
        ],
        callout: {
          title: 'Zero Claim on Customer Content',
          content:
            'CommaDesk accesses Customer Data solely to deliver, protect, troubleshoot, and back up the Service—never to compete with your business or use your private records for unauthorized purposes.',
        },
      },
      {
        id: 'acceptable-use',
        number: '05',
        title: 'Acceptable Use & Compliance',
        paragraphs: [
          'Users and organizations agree not to misuse the platform or public website. Prohibited activities include:',
        ],
        bullets: [
          'Attempting to bypass organization data isolation, sign-in controls, or role-based permission boundaries.',
          'Uploading unlawful content, malicious files, or biometric and camera feeds without obtaining legally required employee or visitor notices and consents.',
          'Copying, reverse engineering, or reselling platform components without written authorization from CommaDesk.',
          'Disrupting platform availability through automated abuse, spam, or excessive automated traffic.',
        ],
      },
      {
        id: 'availability-and-disclaimers',
        number: '06',
        title: 'Service Availability, SLA & Disclaimers',
        paragraphs: [
          'For paid Enterprise Cloud subscriptions, CommaDesk targets high service availability excluding scheduled maintenance and force majeure events as detailed in your Order Form or Service Level Agreement.',
          'Except as expressly stated in a signed enterprise agreement, the public website and platform services are provided on an "AS IS" and "AS AVAILABLE" basis without implied warranties of merchantability or fitness for a particular purpose.',
        ],
      },
      {
        id: 'limitation-of-liability',
        number: '07',
        title: 'Limitation of Liability & Termination',
        paragraphs: [
          'To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, goodwill, or business interruption.',
          'CommaDesk may suspend or terminate access if a Customer materially breaches these Terms (including security or acceptable-use violations) and fails to cure within a reasonable notice period. Upon termination, Customers are provided a reasonable window to export Customer Data prior to secure deletion.',
        ],
      },
      {
        id: 'governing-law-and-contact',
        number: '08',
        title: 'Modifications, Governing Law & Contact',
        paragraphs: [
          'CommaDesk may revise these Terms from time to time. Continued use of the public website or platform after updated Terms take effect constitutes acceptance of the revised Terms.',
          'These Terms are governed by the laws applicable to the jurisdiction specified in your Enterprise Order Form (or, for general public website use, the laws of the Socialist Republic of Vietnam, without regard to conflict-of-law principles). For legal notices or contract questions, please reach out below.',
        ],
      },
    ],
    contactTitle: 'Legal & Compliance Department',
    contactDesc:
      'Have questions about business licensing, custom Data Processing Agreements (DPA), or legal terms?',
    contactEmailLabel: 'Legal Contact',
    contactEmail: 'legal@commadesk.com',
    entityLabel: 'Service Provider',
    entityValue: 'CommaDesk',
    securityCtaLabel: 'Explore Security & Permissions',
  },
};
