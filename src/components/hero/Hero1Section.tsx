'use client';

import React from 'react';
import Link from 'next/link';
import { HeroGraphicNetwork } from './HeroGraphicNetwork';
import { TextBlurWipe } from '@/components/ui/TextBlurWipe';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowRightIcon } from '@/components/ui/UIIcons';

const FEATURE_HREFS = [
  '/deployment',
  '/products/security-platform',
  '/products/hr-workforce',
  '/products/work-management',
  '/products/fleet-logistics',
  '/products/communication-meet',
  '/products/operations-documents',
  '/products/ai-smart-city',
  '/products/cms-portal',
  '/products/approvals-analytics',
];

export function Hero1Section() {
  const { t } = useLanguage();

  return (
    <section
      id="hero1Card"
      className="canvas-card bg-white rounded-2xl sm:rounded-3xl shadow-[0_1px_2px_rgba(17,24,39,0.05)] border border-slate-900/[0.08] overflow-hidden relative pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 px-4 sm:px-6 md:px-8 text-center min-h-[78vh] sm:min-h-[84vh] flex flex-col justify-center"
    >
      {/* Central Graphic Network */}
      <HeroGraphicNetwork />

      {/* Typography & Actions */}
      <div className="scroll-blur-reveal max-w-5xl mx-auto px-1 sm:px-4 mt-6 sm:mt-8 w-full">
        <p className="text-[13px] font-medium text-[#6B7487] mb-3">
          {t.hero1.badge}
        </p>

        <TextBlurWipe
          as="h1"
          className="text-[36px] sm:text-5xl md:text-[56px] lg:text-[64px] font-semibold text-[#111827] tracking-[-0.03em] leading-[1.06] break-words"
        >
          {[t.hero1.headlinePart1, <br key="br1" />, t.hero1.headlinePart2]}
        </TextBlurWipe>

        <p className="text-blur-wipe-sub mt-4 text-[15px] sm:text-[18px] text-[#4B5565] font-normal leading-[1.55] max-w-[36rem] mx-auto">
          {t.hero1.subtitle}
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto">
          <a
            href="#features"
            className="inline-flex items-center justify-center h-11 sm:h-12 px-6 sm:px-7 rounded-[10px] text-white font-medium text-[15px] bg-[#FF4D38] hover:bg-[#E03E2A] shadow-[0_1px_2px_rgba(17,24,39,0.08)] transition-[background-color,transform] duration-150 active:scale-[0.98] text-center"
          >
            {t.hero1.requestDemo}
          </a>
          <a
            href="#hero2Card"
            className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-[10px] text-[#111827] font-medium text-[15px] bg-[#ECEFF4] hover:bg-slate-200/80 border border-slate-900/[0.08] transition-[background-color,transform] duration-150 active:scale-[0.98] text-center"
          >
            <span>{t.hero1.exploreFeatures}</span>
            <ArrowRightIcon className="w-4 h-4 text-[#6B7487]" />
          </a>
        </div>

        {/* Structured Capability Index (2x5 Hairline Grid, Non-Slop) */}
        {t.hero1.featuresTrack && t.hero1.featuresTrack.length > 0 && (
          <div className="mt-10 pt-6 border-t border-slate-900/[0.06] grid grid-cols-2 md:grid-cols-5 gap-2 max-w-5xl mx-auto">
            {t.hero1.featuresTrack.map((item, idx) => (
              <Link
                key={idx}
                href={FEATURE_HREFS[idx] ?? '/#features'}
                className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F7FA] hover:bg-white border border-slate-900/[0.06] hover:border-slate-900/[0.15] transition-colors duration-150 text-left min-w-0"
              >
                <span className="font-mono tabular-nums text-[11px] font-medium text-[#6B7487] group-hover:text-[#7C3AED] transition-colors shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-[12.5px] font-medium text-[#111827] truncate">
                  {item}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
