import type { Language, ModuleMenuItem, LegalDocKey, LegalDocumentContent } from './types';
import { en, modulesEn, type TranslationSchema } from './locales/en';
import { vi, modulesVi } from './locales/vi';
import { legalEn } from './locales/legal/en';
import { legalVi } from './locales/legal/vi';

export type { Language, ModuleMenuItem, LegalDocKey, LegalDocumentContent, TranslationSchema };

export const MODULE_ITEMS: Record<Language, ModuleMenuItem[]> = {
  en: modulesEn,
  vi: modulesVi,
};

export const LEGAL_DOCS: Record<Language, Record<LegalDocKey, LegalDocumentContent>> = {
  en: legalEn,
  vi: legalVi,
};

export const translations = {
  en,
  vi,
} as const;
