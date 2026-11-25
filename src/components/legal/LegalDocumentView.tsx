'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { TextBlurWipe } from '@/components/ui/TextBlurWipe';
import { useLanguage } from '@/i18n/LanguageContext';
import { LEGAL_DOCS, type LegalDocKey } from '@/i18n/translations';
import {
  ArrowBackIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  FileTextIcon,
  MailIcon,
  ShieldCheckIcon,
} from '@/components/ui/UIIcons';

interface LegalDocumentViewProps {
  docKey: LegalDocKey;
}

export function LegalDocumentView({ docKey }: LegalDocumentViewProps) {
  const { language, t } = useLanguage();
  const isVi = language === 'vi';
  const doc = LEGAL_DOCS[language][docKey];

  const [activeSectionId, setActiveSectionId] = useState<string>(
    doc.sections[0]?.id ?? ''
  );
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const manualScrollLockUntilRef = useRef<number>(0);

  useEffect(() => {
    setActiveSectionId(doc.sections[0]?.id ?? '');
  }, [docKey, doc.sections]);

  useEffect(() => {
    const getSections = () =>
      doc.sections
        .map((s) => document.getElementById(s.id))
        .filter((el): el is HTMLElement => el !== null);

    const updateActiveOnScroll = () => {
      if (Date.now() < manualScrollLockUntilRef.current) return;

      const elements = getSections();
      if (elements.length === 0) return;

      const scrollTop = window.scrollY;
      const viewportBottom = scrollTop + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (viewportBottom >= docHeight - 24) {
        setActiveSectionId(elements[elements.length - 1].id);
        return;
      }

      const offset = 150;
      let currentId = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= offset) {
          currentId = el.id;
        } else {
          break;
        }
      }
      setActiveSectionId(currentId);
    };

    updateActiveOnScroll();
    window.addEventListener('scroll', updateActiveOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveOnScroll);
  }, [doc.sections]);

  const handleTocClick = (sectionId: string, closeMobile = false) => {
    manualScrollLockUntilRef.current = Date.now() + 800;
    setActiveSectionId(sectionId);
    if (closeMobile) {
      setIsMobileTocOpen(false);
    }
  };

  const DocBadgeIcon = docKey === 'privacy' ? ShieldCheckIcon : FileTextIcon;

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 relative px-2.5 sm:px-6 lg:px-8 pb-6">
        {/* 1. Legal Hero Canvas Card */}
        <section className="canvas-card bg-white rounded-2xl sm:rounded-3xl shadow-[0_1px_2px_rgba(17,24,39,0.05)] border border-slate-900/[0.08] overflow-hidden relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-3 mb-8 sm:mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4B5565] hover:text-[#111827] transition-colors px-3 h-8 rounded-lg bg-[#F5F7FA] hover:bg-[#ECEFF4] border border-slate-900/[0.08]"
            >
              <ArrowBackIcon className="w-3.5 h-3.5 shrink-0" />
              <span>{t.subpages.backHome}</span>
            </Link>

            <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6B7487]">
              <DocBadgeIcon className="w-3.5 h-3.5 shrink-0" />
              <span>{doc.badge}</span>
            </span>
          </div>

          {/* Center Title & Metadata */}
          <div className="max-w-4xl mx-auto text-center is-revealed">
            <TextBlurWipe
              as="h1"
              className="is-revealed text-[32px] sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#111827] tracking-[-0.025em] leading-[1.08] break-words"
            >
              {doc.title}
            </TextBlurWipe>

            <p className="mt-4 text-[15px] sm:text-[18px] text-[#4B5565] font-normal leading-relaxed max-w-2xl mx-auto">
              {doc.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-7 w-full max-w-xs sm:max-w-none mx-auto">
              <a
                href="#legal-content"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 px-6 rounded-[10px] text-white font-medium text-[14px] bg-[#FF4D38] hover:bg-[#E03E2A] transition-[background-color,transform] duration-150 active:scale-[0.98]"
              >
                <span>{doc.tocTitle}</span>
                <ChevronDownIcon className="w-4 h-4" />
              </a>

              <Link
                href={doc.switchDocHref}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 px-5 rounded-[10px] text-[#111827] font-medium text-[14px] bg-[#ECEFF4] hover:bg-slate-200/80 border border-slate-900/[0.08] transition-[background-color,transform] duration-150 active:scale-[0.98]"
              >
                <span>{doc.switchDocLabel}</span>
                <ArrowRightIcon className="w-4 h-4 text-[#6B7487]" />
              </Link>
            </div>
          </div>

          {/* Core Summary Highlights */}
          <div className="max-w-[1360px] mx-auto mt-10 sm:mt-12 pt-8 border-t border-slate-900/[0.06]">
            <div className="text-center mb-5">
              <span className="text-[13px] font-medium text-[#6B7487]">
                {doc.highlightsTitle}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {doc.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#F5F7FA] border border-slate-900/[0.08] p-5 hover:bg-white hover:border-slate-900/[0.15] transition-colors duration-150"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <h2 className="text-[15px] font-semibold text-[#111827] tracking-[-0.01em]">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-[13.5px] text-[#4B5565] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Legal Body Content Card */}
        <section
          id="legal-content"
          className="canvas-card scroll-mt-24 bg-white rounded-2xl sm:rounded-3xl shadow-[0_1px_2px_rgba(17,24,39,0.05)] border border-slate-900/[0.08] overflow-x-clip relative p-4 sm:p-8 md:p-12"
        >
          <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Sidebar Table of Contents */}
            <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-24 space-y-4">
              {/* Mobile/Tablet Accordion TOC */}
              <div className="lg:hidden rounded-xl bg-[#F5F7FA] border border-slate-900/[0.08] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsMobileTocOpen((prev) => !prev)}
                  aria-expanded={isMobileTocOpen}
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-[13px] font-semibold text-[#111827] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <FileTextIcon className="w-4 h-4 text-[#FF4D38]" />
                    <span>{doc.tocTitle}</span>
                  </span>
                  <ChevronDownIcon
                    className={`w-4 h-4 text-[#6B7487] transition-transform duration-150 ${
                      isMobileTocOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isMobileTocOpen && (
                  <nav className="px-2 pb-3 pt-1 border-t border-slate-900/[0.06] space-y-1">
                    {doc.sections.map((section) => {
                      const isActive = activeSectionId === section.id;
                      return (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          onClick={() => handleTocClick(section.id, true)}
                          className={`flex items-start gap-2.5 px-3 py-2 rounded-lg text-[12.5px] border transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D38]/35 ${
                            isActive
                              ? 'bg-white text-[#FF4D38] font-medium border-slate-900/[0.08]'
                              : 'border-transparent text-[#4B5565] hover:bg-white/80 hover:text-[#111827]'
                          }`}
                        >
                          <span className="font-mono tabular-nums text-[11px] text-[#6B7487] mt-0.5 shrink-0">
                            {section.number}
                          </span>
                          <span className="leading-snug">{section.title}</span>
                        </a>
                      );
                    })}
                  </nav>
                )}
              </div>

              {/* Desktop Sticky TOC */}
              <div className="hidden lg:block rounded-2xl bg-[#F5F7FA] border border-slate-900/[0.08] p-4 space-y-3">
                <div className="flex items-center justify-between px-2 pb-2 border-b border-slate-900/[0.06]">
                  <span className="text-[12px] font-medium text-[#6B7487]">
                    {doc.tocTitle}
                  </span>
                  <span className="font-mono tabular-nums text-[12px] text-[#6B7487]">
                    ({doc.sections.length})
                  </span>
                </div>

                <nav aria-label={doc.tocTitle} className="space-y-0.5">
                  {doc.sections.map((section) => {
                    const isActive = activeSectionId === section.id;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={() => handleTocClick(section.id)}
                        className={`flex items-start gap-2.5 px-2.5 py-2 rounded-lg text-[12.5px] border transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D38]/35 ${
                          isActive
                            ? 'bg-white text-[#111827] font-medium border-slate-900/[0.08] shadow-[0_1px_2px_rgba(17,24,39,0.04)]'
                            : 'border-transparent text-[#4B5565] hover:bg-white/70 hover:text-[#111827]'
                        }`}
                      >
                        <span
                          className={`font-mono tabular-nums text-[11px] mt-0.5 shrink-0 ${
                            isActive ? 'text-[#FF4D38]' : 'text-[#6B7487]'
                          }`}
                        >
                          {section.number}
                        </span>
                        <span className="leading-snug">{section.title}</span>
                      </a>
                    );
                  })}
                </nav>

                <div className="pt-3 border-t border-slate-900/[0.06]">
                  <Link
                    href={doc.switchDocHref}
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-white hover:bg-[#ECEFF4] border border-slate-900/[0.08] text-[12.5px] font-medium text-[#111827] transition-colors"
                  >
                    <span>{doc.switchDocLabel}</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 text-[#FF4D38] shrink-0" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Legal Clauses Content */}
            <div className="lg:col-span-8 xl:col-span-9 min-w-0 space-y-8 sm:space-y-10">
              {doc.sections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 pb-8 sm:pb-10 border-b border-slate-900/[0.06] last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start gap-3 mb-3.5">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#F5F7FA] border border-slate-900/[0.08] text-[#FF4D38] font-mono tabular-nums text-[12px] font-medium shrink-0 mt-0.5">
                      {section.number}
                    </span>
                    <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111827] tracking-[-0.015em] leading-snug break-words">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-3.5 sm:pl-10">
                    {section.paragraphs.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-[14.5px] sm:text-[15.5px] text-[#4B5565] leading-relaxed break-words"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-2.5 pt-1">
                        {section.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-[14.5px] sm:text-[15px] text-[#111827] leading-relaxed"
                          >
                            <CheckCircleIcon className="w-4 h-4 text-[#16A34A] shrink-0 mt-1" />
                            <span className="break-words min-w-0">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.callout && (
                      <div className="mt-4 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.08] p-4 sm:p-5">
                        <div className="flex items-center gap-2 mb-1.5">
                          <ShieldCheckIcon className="w-4 h-4 text-[#111827] shrink-0" />
                          <h3 className="text-[14px] font-semibold text-[#111827]">
                            {section.callout.title}
                          </h3>
                        </div>
                        <p className="text-[13.5px] text-[#4B5565] leading-relaxed break-words">
                          {section.callout.content}
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              ))}

              {/* Legal Contact & Governance Box */}
              <div className="rounded-2xl bg-[#F5F7FA] border border-slate-900/[0.08] p-5 sm:p-7 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h2 className="text-[18px] sm:text-[20px] font-semibold text-[#111827] tracking-[-0.01em]">
                      {doc.contactTitle}
                    </h2>
                    <p className="text-[13.5px] text-[#4B5565] leading-relaxed max-w-xl">
                      {doc.contactDesc}
                    </p>
                  </div>

                  <Link
                    href="/products/security-platform"
                    className="inline-flex items-center justify-center gap-2 px-4 h-10 rounded-[10px] bg-white hover:bg-[#ECEFF4] text-[#111827] text-[13px] font-medium border border-slate-900/[0.08] transition-colors shrink-0"
                  >
                    <ShieldCheckIcon className="w-4 h-4 text-[#111827]" />
                    <span>{doc.securityCtaLabel}</span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-900/[0.06]">
                  <div className="rounded-xl bg-white border border-slate-900/[0.08] p-4">
                    <div className="text-[12px] font-medium text-[#6B7487] mb-1">
                      {doc.entityLabel}
                    </div>
                    <div className="text-[14px] font-semibold text-[#111827]">
                      {doc.entityValue}
                    </div>
                  </div>

                  <div className="rounded-xl bg-white border border-slate-900/[0.08] p-4">
                    <div className="text-[12px] font-medium text-[#6B7487] mb-1">
                      {doc.contactEmailLabel}
                    </div>
                    <a
                      href={`mailto:${doc.contactEmail}`}
                      className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#C8321F] hover:underline break-all"
                    >
                      <MailIcon className="w-4 h-4 shrink-0" />
                      <span>{doc.contactEmail}</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-[12.5px] text-[#6B7487]">
                  <span>
                    {isVi
                      ? 'Cần xem lại văn bản pháp lý còn lại?'
                      : 'Need to review the companion legal document?'}
                  </span>
                  <Link
                    href={doc.switchDocHref}
                    className="inline-flex items-center gap-1 font-medium text-[#111827] hover:text-[#FF4D38] transition-colors"
                  >
                    <span>{doc.switchDocLabel}</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
