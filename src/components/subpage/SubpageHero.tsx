'use client';

import React from 'react';
import Link from 'next/link';
import { TextBlurWipe } from '@/components/ui/TextBlurWipe';
import { useLanguage } from '@/i18n/LanguageContext';

import { ArrowBackIcon, ArrowDownIcon, ArrowLeftIcon } from "@/components/ui/UIIcons";

interface SubpageHeroProps {
  categoryBadge: string;
  title: string | string[];
  subtitle: string;
  visualPreview: React.ReactNode;
  tags?: string[];
}

export function SubpageHero({
  categoryBadge,
  title,
  subtitle,
  visualPreview,
  tags = [],
}: SubpageHeroProps) {
  const { t, language } = useLanguage();

  return (
    <section className="canvas-card bg-white rounded-2xl sm:rounded-3xl shadow-[0_1px_2px_rgba(17,24,39,0.05)] border border-slate-900/[0.08] overflow-hidden relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12">
      {/* Top Bar */}
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 mb-8 sm:mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4B5565] hover:text-[#111827] transition-colors px-3 h-8 rounded-lg bg-[#F5F7FA] hover:bg-[#ECEFF4] border border-slate-900/[0.08]"
        >
          <ArrowBackIcon className="w-3.5 h-3.5" />
          <span>{t.subpages.backHome}</span>
        </Link>

        <span className="text-[13px] font-medium text-[#6B7487]">
          {categoryBadge}
        </span>
      </div>

      {/* Main Hero Header */}
      <div className="max-w-4xl mx-auto text-center is-revealed">
        <TextBlurWipe
          as="h1"
          className="is-revealed text-[32px] sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#111827] tracking-[-0.025em] leading-[1.08] break-words"
        >
          {Array.isArray(title) ? title : [title]}
        </TextBlurWipe>

        <p className="mt-4 text-[15px] sm:text-[18px] text-[#4B5565] font-normal leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* Feature Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 mb-7 max-w-3xl mx-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[12px] font-medium px-2.5 py-1 rounded-md bg-[#F5F7FA] text-[#4B5565] border border-slate-900/[0.08]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-4 mb-10 sm:mb-14 w-full max-w-xs sm:max-w-none mx-auto">
          <a
            href="#capabilities"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 px-6 rounded-[10px] text-white font-medium text-[14px] bg-[#FF4D38] hover:bg-[#E03E2A] transition-[background-color,transform] duration-150 active:scale-[0.98] text-center"
          >
            <span>{language === 'vi' ? 'Khám phá tính năng chi tiết' : 'Explore capabilities'}</span>
            <ArrowDownIcon className="w-4 h-4" />
          </a>
          <Link
            href="/#features"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 px-5 rounded-[10px] text-[#111827] font-medium text-[14px] bg-[#ECEFF4] hover:bg-slate-200/80 border border-slate-900/[0.08] transition-[background-color,transform] duration-150 active:scale-[0.98] text-center"
          >
            <ArrowLeftIcon className="w-4 h-4 text-[#6B7487]" />
            <span>{language === 'vi' ? 'Xem tất cả phân hệ' : 'All modules'}</span>
          </Link>
        </div>
      </div>

      {/* Product Preview Frame */}
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl bg-[#F5F7FA] border border-slate-900/[0.08] p-3 sm:p-4 shadow-[0_8px_24px_rgba(17,24,39,0.06)] overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-900/[0.06] px-1">
            <span className="text-[12px] font-medium text-[#111827] truncate">
              {categoryBadge}
            </span>
            <span className="font-mono text-[11px] text-[#6B7487]">
              CommaDesk Workspace
            </span>
          </div>

          <div className="bg-white rounded-xl p-2 sm:p-4 border border-slate-900/[0.06]">
            {visualPreview}
          </div>
        </div>
      </div>
    </section>
  );
}
