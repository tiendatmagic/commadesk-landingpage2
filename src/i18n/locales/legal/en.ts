import type { LegalDocKey, LegalDocumentContent } from '../../types';

export const legalEn: Record<LegalDocKey, LegalDocumentContent> = {
  privacy: {
    badge: 'Privacy & Data Protection',
    title: ['Privacy Policy.', 'Transparent by Design.'],
    subtitle:
      'How CommaDesk collects, isolates, protects, and processes personal and enterprise operational data across our Web, Desktop, Mobile, and On-Premises ecosystems.',
    effectiveDateLabel: 'Effective Date',
    effectiveDate: 'November 25, 2026',
    versionLabel: 'Version',
    version: 'v2.0 (Enterprise)',
    scopeLabel: 'Scope',
    scope: 'Public Web, Cloud SaaS, Desktop & Mobile',
    switchDocLabel: 'Read Terms of Service',
    switchDocHref: '/terms-of-service',
    highlightsTitle: 'Core Privacy Commitments',
    highlights: [
      {
        title: 'Strict Multi-Tenant Isolation',
        description:
          'Each enterprise workspace is logically partitioned so subsidiary, branch, and user data never leaks across organizations.',
      },
      {
        title: 'Zero Data Monetization',
        description:
          'We never sell, rent, or broker customer operational records, employee profiles, or analytics data to third-party advertisers.',
      },
      {
        title: 'Customer-Controlled Biometrics & GPS',
        description:
          'Face AI check-in, GPS geofencing, and camera analytics operate strictly under organizational configuration and local compliance rules.',
      },
    ],
    tocTitle: 'On This Page',
    sections: [
      {
        id: 'scope-and-roles',
        number: '01',
        title: 'Scope & Data Controller Roles',
        paragraphs: [
          'This Privacy Policy explains how CommaDesk Inc. ("CommaDesk", "we", "our") handles information when you visit our public websites (including this landing page), evaluate our platform, or use CommaDesk applications across Web Cloud, Windows/macOS Desktop, and iOS/Android Mobile.',
          'For public website visitors and prospective inquiries, CommaDesk acts as the Data Controller. For enterprise customers deploying CommaDesk for workforce, project, logistics, document registry, CRM, or AI Vision operations, the subscribing organization acts as the Data Controller and CommaDesk acts as the Data Processor acting solely on documented instructions.',
        ],
      },
      {
        id: 'information-we-collect',
        number: '02',
        title: 'Information We Collect',
        paragraphs: [
          'We collect only the information necessary to deliver a secure, responsive, and multi-module enterprise experience:',
        ],
        bullets: [
          'Account & Organization Metadata: Name, business email, job role, organizational unit, and multi-tier permission assignments configured by your workspace administrator.',
          'Operational & Workspace Content: Tasks, Kanban/Gantt items, document registry records, inventory SKU logs, helpdesk tickets, fleet dispatches, and internal communications submitted by authorized users.',
          'Optional Workforce & AI Modules (When Enabled by Customer): Attendance timestamps, GPS geofence coordinates at clock-in, facial recognition embeddings for Face AI attendance, and authorized camera stream events.',
          'Technical & Security Telemetry: Session tokens, device trust identifiers, IP addresses, browser/OS diagnostics, and immutable audit logs (HTTP, data delta, and permission changes) used to protect workspace integrity.',
          'Local Preferences: Non-tracking browser storage such as your selected interface language (English or Vietnamese) saved locally via localStorage.',
        ],
        callout: {
          title: 'Public Landing Page Visitors',
          content:
            'Browsing our public landing pages, product guides, and legal pages does not require registration. We only store lightweight client-side preferences (such as language selection) in your browser.',
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
          'Provisioning, authenticating (including 2FA/OTP verification), and maintaining multi-branch enterprise workspaces.',
          'Enforcing multi-tier access control policies so users only view modules and records authorized for their department or role.',
          'Generating real-time operational analytics, attendance summaries, payroll-ready work entries, and SLA alerts configured by your organization.',
          'Detecting anomalous access, preventing unauthorized sessions, and maintaining tamper-evident audit trails.',
          'Providing technical support, service reliability monitoring, and critical security or product update notices.',
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
          'Customer-Authorized Integrations: Two-way synchronization with external systems explicitly connected by your administrators (such as accounting/ERP tools, retail POS systems like KiotViet, or notification channels like Zalo/Telegram/Webhooks).',
          'Infrastructure Sub-Processors: Trusted cloud hosting, encrypted object storage, and email/notification delivery providers bound by strict confidentiality and data protection agreements.',
          'Legal & Regulatory Compliance: When required by applicable law, court order, or valid governmental request, with prior notice to the customer organization where legally permitted.',
        ],
      },
      {
        id: 'security-and-isolation',
        number: '05',
        title: 'Security Architecture & Data Retention',
        paragraphs: [
          'CommaDesk is engineered with defense-in-depth safeguards across transport, storage, and application layers. All traffic is encrypted in transit via TLS, passwords and authentication secrets are cryptographically hashed, and administrative actions are recorded in multi-layer audit logs.',
          'For organizations requiring full data sovereignty or air-gapped networks, CommaDesk also supports Private Dedicated Server (On-Premises) deployment where all operational data remains entirely within the customer’s internal infrastructure.',
          'We retain workspace data for as long as the customer subscription remains active or as required by statutory retention rules (such as official document registry and payroll regulations). Upon contract termination, customers may export their records and request verified deletion within the agreed transition window.',
        ],
      },
      {
        id: 'your-privacy-rights',
        number: '06',
        title: 'Your Privacy Rights',
        paragraphs: [
          'Depending on your jurisdiction (including Vietnam’s Decree 13/2023/ND-CP on Personal Data Protection, GDPR, and equivalent frameworks), you have the right to:',
        ],
        bullets: [
          'Request access to and a portable copy of your personal data processed by CommaDesk.',
          'Request correction of inaccurate or incomplete profile and personnel records.',
          'Request deletion, restriction, or objection to specific processing activities where applicable.',
          'Withdraw consent for optional features (such as biometric or location-based check-in) through your organization’s administrator or alternative check-in methods.',
        ],
        callout: {
          title: 'Enterprise End-Users',
          content:
            'If your account is managed by your employer or organization, please direct data access or correction requests to your Workspace Administrator first, as they control organizational records.',
        },
      },
      {
        id: 'updates-and-contact',
        number: '07',
        title: 'Policy Updates & Contact Information',
        paragraphs: [
          'We may update this Privacy Policy periodically to reflect new platform capabilities, regulatory changes, or security enhancements. Material updates will be posted on this page with an updated Effective Date and version number.',
          'If you have questions regarding privacy practices, sub-processors, or data protection requests, please contact our Privacy & Compliance Team using the details below.',
        ],
      },
    ],
    contactTitle: 'Privacy & Data Protection Inquiries',
    contactDesc:
      'Need to submit a data subject request, review security compliance, or verify our privacy posture for your organization?',
    contactEmailLabel: 'Privacy Contact',
    contactEmail: 'privacy@commadesk.com',
    entityLabel: 'Data Controller / Publisher',
    entityValue: 'CommaDesk Inc.',
    securityCtaLabel: 'Explore Security Architecture',
  },

  terms: {
    badge: 'Legal & Governance',
    title: ['Terms of Service.', 'Clear Enterprise Rules.'],
    subtitle:
      'The binding terms governing access to CommaDesk’s public websites, cloud SaaS workspaces, desktop/mobile clients, and enterprise module ecosystems.',
    effectiveDateLabel: 'Effective Date',
    effectiveDate: 'November 25, 2026',
    versionLabel: 'Version',
    version: 'v2.0 (Enterprise)',
    scopeLabel: 'Scope',
    scope: 'Public Web, Cloud SaaS & Enterprise Clients',
    switchDocLabel: 'Read Privacy Policy',
    switchDocHref: '/privacy-policy',
    highlightsTitle: 'Key Agreement Pillars',
    highlights: [
      {
        title: 'You Own Your Business Data',
        description:
          'Customer organizations retain 100% ownership and export rights over all projects, HR records, documents, and operational assets.',
      },
      {
        title: 'Flexible Cloud & On-Premises',
        description:
          'Clear licensing coverage whether your teams operate on CommaDesk Cloud SaaS or Private Dedicated Server deployments.',
      },
      {
        title: 'Enterprise SLA & Governance',
        description:
          'Transparent uptime commitments, role-based access accountability, and responsible acceptable-use standards.',
      },
    ],
    tocTitle: 'On This Page',
    sections: [
      {
        id: 'acceptance-of-terms',
        number: '01',
        title: 'Acceptance of Terms',
        paragraphs: [
          'By accessing or using CommaDesk’s public websites, requesting product evaluations, or deploying the CommaDesk platform (across Web, Windows/macOS Desktop, or iOS/Android Mobile), you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy.',
          'If you are entering into these Terms on behalf of a company, government agency, or other legal entity ("Customer"), you represent that you have the authority to bind that organization and its authorized users.',
        ],
      },
      {
        id: 'service-scope-and-deployment',
        number: '02',
        title: 'Platform Scope & Deployment Models',
        paragraphs: [
          'CommaDesk provides an integrated multi-module enterprise operating system covering Work & Projects, HR & Workforce, Operations & Document Registry, Inventory & Fleet Logistics, CRM & Helpdesk, Internal Communications, AI Vision, and Security Governance.',
        ],
        bullets: [
          'Cloud SaaS Edition: Hosted and maintained by CommaDesk with multi-tenant data isolation, automated backups, and continuous updates.',
          'On-Premises / Dedicated Server Edition: Deployed within Customer-managed infrastructure under a separate Enterprise Master Agreement or Order Form.',
          'Public Landing & Documentation Pages: Provided publicly for informational, evaluation, and compliance reference purposes without warranty of specific module availability outside an active subscription.',
        ],
      },
      {
        id: 'accounts-and-security',
        number: '03',
        title: 'Workspace Accounts & Security Responsibilities',
        paragraphs: [
          'Customers are responsible for configuring multi-tier permissions, managing user provisioning/deprovisioning, and safeguarding administrator credentials.',
        ],
        bullets: [
          'Enforce strong password policies and Two-Factor Authentication (2FA/OTP) across privileged accounts.',
          'Promptly revoke access or active sessions when employees, contractors, or partners leave the organization.',
          'Notify CommaDesk immediately upon suspecting unauthorized workspace access or credential compromise.',
        ],
      },
      {
        id: 'data-ownership-and-ip',
        number: '04',
        title: 'Customer Data Ownership & Intellectual Property',
        paragraphs: [
          'As between CommaDesk and the Customer, Customer retains all right, title, and interest in and to all data, documents, media, employee records, and configurations uploaded or generated within its workspace ("Customer Data").',
          'CommaDesk retains all intellectual property rights in the platform software, user interfaces, 3D visual assets, trademarks, logos, documentation, and underlying algorithms. Except for the limited right to use the Service during an active term, no ownership rights are transferred.',
        ],
        callout: {
          title: 'Zero Claim on Customer Content',
          content:
            'CommaDesk accesses Customer Data solely to deliver, secure, troubleshoot, and back up the Service—never to compete with or train unauthorized public models on your proprietary business records.',
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
          'Attempting to bypass multi-tenant isolation, authentication gates, rate limits, or permission boundaries.',
          'Uploading unlawful content, malware, or biometric/camera feeds without obtaining legally required employee or visitor notices/consents.',
          'Reverse engineering, scraping, decompiling, or reselling platform components without written authorization from CommaDesk.',
          'Disrupting platform availability through automated stress attacks, spam, or abusive webhook loops.',
        ],
      },
      {
        id: 'availability-and-disclaimers',
        number: '06',
        title: 'Service Availability, SLA & Disclaimers',
        paragraphs: [
          'For paid Enterprise Cloud subscriptions, CommaDesk targets high availability (99.9% uptime excluding scheduled maintenance and force majeure events) as detailed in your Order Form or Service Level Agreement.',
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
      'Have questions about enterprise licensing, custom Data Processing Agreements (DPA), or legal terms?',
    contactEmailLabel: 'Legal Contact',
    contactEmail: 'legal@commadesk.com',
    entityLabel: 'Service Provider',
    entityValue: 'CommaDesk Inc.',
    securityCtaLabel: 'Explore Security Architecture',
  },
};
