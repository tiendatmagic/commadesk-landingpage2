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
  ClockIcon,
  FileTextIcon,
  GlobeIcon,
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

      // Nếu đã cuộn chạm đáy trang, ưu tiên highlight mục cuối cùng đang hiển thị trong viewport
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

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        {/* 1. Legal Hero Canvas Card */}
        <section className="canvas-card bg-white rounded-[24px] sm:rounded-[44px] md:rounded-[48px] shadow-sm border border-slate-200/60 overflow-hidden relative pt-28 sm:pt-40 md:pt-44 pb-10 sm:pb-16 md:pb-20 px-3.5 sm:px-8 lg:px-14">
          {/* Top Breadcrumb & Category Badge */}
          <div className="max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-2.5 mb-8 sm:mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold text-gray-600 hover:text-black transition-colors px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-100 hover:bg-slate-200/80 shadow-2xs"
            >
              <ArrowBackIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>{t.subpages.backHome}</span>
            </Link>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FF4D38]/10 text-[#FF4D38] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <DocBadgeIcon className="w-3.5 h-3.5 shrink-0" />
              <span>{doc.badge}</span>
            </div>
          </div>

          {/* Center Title & Metadata */}
          <div className="max-w-5xl mx-auto text-center is-revealed">
            <TextBlurWipe
              as="h1"
              className="is-revealed text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.12] break-words"
            >
              {doc.title}
            </TextBlurWipe>

            <p className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
              {doc.subtitle}
            </p>

            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-[11px] sm:text-xs text-slate-700">
                <ClockIcon className="w-3.5 h-3.5 text-[#FF4D38] shrink-0" />
                <span className="text-slate-400 font-medium">
                  {doc.effectiveDateLabel}:
                </span>
                <span className="font-bold text-slate-900">{doc.effectiveDate}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-[11px] sm:text-xs text-slate-700">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-slate-400 font-medium">{doc.versionLabel}:</span>
                <span className="font-bold text-slate-900">{doc.version}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-[11px] sm:text-xs text-slate-700">
                <GlobeIcon className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span className="text-slate-400 font-medium">{doc.scopeLabel}:</span>
                <span className="font-bold text-slate-900">{doc.scope}</span>
              </div>
            </div>

            {/* Action Pills */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-9 w-full max-w-xs sm:max-w-none mx-auto">
              <a
                href="#legal-content"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-7 py-3 rounded-full text-white font-bold text-xs sm:text-sm bg-[#FF4D38] hover:bg-[#E03E2A] shadow-lg shadow-[#FF4D38]/20 transition-all active:scale-95"
              >
                <span>{doc.tocTitle}</span>
                <ChevronDownIcon className="w-4 h-4" />
              </a>

              <Link
                href={doc.switchDocHref}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-7 py-3 rounded-full text-slate-800 font-bold text-xs sm:text-sm bg-slate-100 hover:bg-slate-200/80 border border-slate-200/90 transition-all active:scale-95"
              >
                <span>{doc.switchDocLabel}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Core Summary Highlights */}
          <div className="max-w-[1360px] mx-auto mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-slate-100">
            <div className="text-center mb-5 sm:mb-7">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                {doc.highlightsTitle}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
              {doc.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl sm:rounded-3xl bg-slate-50/80 border border-slate-200/80 p-4 sm:p-6 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h2 className="text-sm sm:text-base font-bold text-gray-950 tracking-tight">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Legal Body Content Card (Sticky TOC + Clauses) */}
        <section
          id="legal-content"
          className="canvas-card scroll-mt-28 bg-white rounded-[24px] sm:rounded-[44px] md:rounded-[48px] shadow-sm border border-slate-200/60 overflow-x-clip relative p-4 sm:p-8 md:p-12 lg:p-14"
        >
          <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Sidebar Table of Contents */}
            <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-28 space-y-4">
              {/* Mobile/Tablet Accordion TOC */}
              <div className="lg:hidden rounded-2xl bg-slate-50 border border-slate-200/80 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsMobileTocOpen((prev) => !prev)}
                  aria-expanded={isMobileTocOpen}
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-xs sm:text-sm font-bold text-slate-900 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <FileTextIcon className="w-4 h-4 text-[#FF4D38]" />
                    <span>{doc.tocTitle}</span>
                  </span>
                  <ChevronDownIcon
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      isMobileTocOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isMobileTocOpen && (
                  <nav className="px-2 pb-3 pt-1 border-t border-slate-200/70 space-y-1">
                    {doc.sections.map((section) => {
                      const isActive = activeSectionId === section.id;
                      return (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          onClick={() => handleTocClick(section.id, true)}
                          className={`flex items-start gap-2.5 px-3 py-2 rounded-xl text-xs border transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D38]/35 ${
                            isActive
                              ? 'bg-white text-[#FF4D38] font-bold shadow-2xs border-slate-200/70'
                              : 'border-transparent text-slate-600 hover:bg-white/80 hover:text-slate-950 font-medium'
                          }`}
                        >
                          <span className="text-[10px] font-extrabold text-slate-400 mt-0.5 shrink-0">
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
              <div className="hidden lg:block rounded-3xl bg-slate-50/80 border border-slate-200/80 p-5 space-y-3">
                <div className="flex items-center justify-between px-2 pb-2 border-b border-slate-200/70">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    {doc.tocTitle}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-500">
                    {doc.sections.length}
                  </span>
                </div>

                <nav aria-label={doc.tocTitle} className="space-y-1">
                  {doc.sections.map((section) => {
                    const isActive = activeSectionId === section.id;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={() => handleTocClick(section.id)}
                        className={`flex items-start gap-2.5 px-3 py-2.5 rounded-2xl text-xs border transition-all outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D38]/35 ${
                          isActive
                            ? 'bg-white text-slate-950 font-bold shadow-xs border-slate-200/80'
                            : 'border-transparent text-slate-600 hover:bg-white/70 hover:text-slate-950 font-medium'
                        }`}
                      >
                        <span
                          className={`text-[10px] font-extrabold mt-0.5 shrink-0 ${
                            isActive ? 'text-[#FF4D38]' : 'text-slate-400'
                          }`}
                        >
                          {section.number}
                        </span>
                        <span className="leading-snug">{section.title}</span>
                      </a>
                    );
                  })}
                </nav>

                <div className="pt-3 border-t border-slate-200/70">
                  <Link
                    href={doc.switchDocHref}
                    className="flex items-center justify-between px-3 py-2.5 rounded-2xl bg-white hover:bg-slate-100/70 border border-slate-200/80 text-xs font-bold text-slate-800 transition-colors"
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
                  className="scroll-mt-28 sm:scroll-mt-32 pb-8 sm:pb-10 border-b border-slate-100 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start gap-3 mb-3.5 sm:mb-4">
                    <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#FF4D38]/10 text-[#FF4D38] text-xs font-extrabold shrink-0 mt-0.5">
                      {section.number}
                    </span>
                    <h2 className="text-lg sm:text-2xl font-extrabold text-gray-950 tracking-tight leading-snug break-words">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-3.5 sm:pl-11">
                    {section.paragraphs.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-sm sm:text-[15.5px] text-slate-600 leading-relaxed break-words"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-2.5 pt-1">
                        {section.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-sm sm:text-[15px] text-slate-700 leading-relaxed"
                          >
                            <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                            <span className="break-words min-w-0">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.callout && (
                      <div className="mt-4 rounded-2xl bg-slate-50/90 border border-slate-200/90 p-4 sm:p-5">
                        <div className="flex items-center gap-2 mb-1.5">
                          <ShieldCheckIcon className="w-4 h-4 text-[#6366F1] shrink-0" />
                          <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                            {section.callout.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words">
                          {section.callout.content}
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              ))}

              {/* Legal Contact & Governance Box */}
              <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 border border-slate-200/90 p-5 sm:p-8 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <h2 className="text-lg sm:text-xl font-extrabold text-gray-950 tracking-tight">
                      {doc.contactTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                      {doc.contactDesc}
                    </p>
                  </div>

                  <Link
                    href="/products/security-platform"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold border border-slate-200 shadow-2xs transition-all shrink-0"
                  >
                    <ShieldCheckIcon className="w-4 h-4 text-[#6366F1]" />
                    <span>{doc.securityCtaLabel}</span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-200/70">
                  <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 sm:p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      {doc.entityLabel}
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      {doc.entityValue}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 sm:p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      {doc.contactEmailLabel}
                    </div>
                    <a
                      href={`mailto:${doc.contactEmail}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF4D38] hover:underline break-all"
                    >
                      <MailIcon className="w-4 h-4 shrink-0" />
                      <span>{doc.contactEmail}</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs text-slate-500">
                  <span>
                    {isVi
                      ? 'Cần xem lại văn bản pháp lý còn lại?'
                      : 'Need to review the companion legal document?'}
                  </span>
                  <Link
                    href={doc.switchDocHref}
                    className="inline-flex items-center gap-1 font-bold text-slate-900 hover:text-[#FF4D38] transition-colors"
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
