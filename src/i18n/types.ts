export type Language = 'en' | 'vi';

export type ModuleCategory = 'operations' | 'workforce' | 'comms' | 'commerce';

export type IconName =
  | 'Kanban'
  | 'Users'
  | 'Camera'
  | 'FileText'
  | 'HelpCircle'
  | 'Shield'
  | 'Truck'
  | 'Video'
  | 'Package'
  | 'Globe'
  | 'Share2'
  | 'ClipboardCheck'
  | 'FileCheck'
  | 'Store'
  | 'Building'
  | 'Landmark'
  | 'BookOpen'
  | 'Sparkles'
  | 'Code2'
  | 'Monitor';

export interface ModuleMenuItem {
  id: string;
  title: string;
  shortDesc: string;
  href: string;
  badge?: string;
  category?: ModuleCategory;
  iconName: IconName;
}

export type LegalDocKey = 'privacy' | 'terms';

export interface LegalHighlight {
  title: string;
  description: string;
}

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: {
    title: string;
    content: string;
  };
}

export interface LegalDocumentContent {
  badge: string;
  title: string[];
  subtitle: string;
  effectiveDateLabel: string;
  effectiveDate: string;
  versionLabel: string;
  version: string;
  scopeLabel: string;
  scope: string;
  switchDocLabel: string;
  switchDocHref: string;
  highlightsTitle: string;
  highlights: LegalHighlight[];
  tocTitle: string;
  sections: LegalSection[];
  contactTitle: string;
  contactDesc: string;
  contactEmailLabel: string;
  contactEmail: string;
  entityLabel: string;
  entityValue: string;
  securityCtaLabel: string;
}


