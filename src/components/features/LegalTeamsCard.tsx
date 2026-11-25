'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { ShieldCheckIcon } from '@/components/ui/UIIcons';

export function LegalTeamsCard() {
  const { t } = useLanguage();

  return (
    <div className="scroll-fade-up delay-200 bg-[#F5F7FA] rounded-2xl p-6 border border-slate-900/[0.08] hover:border-slate-900/[0.15] transition-colors duration-150 flex flex-col justify-between">
      {/* Graphic: Hairline grid + Two angled documents + Ink Shield tile */}
      <div className="bg-white rounded-xl p-6 border border-slate-900/[0.08] mb-6 flex items-center justify-center min-h-[172px] relative overflow-hidden shadow-[0_1px_2px_rgba(17,24,39,0.04)]">
        <div className="absolute inset-0 flex justify-between px-8 pointer-events-none opacity-60">
          <div className="w-px h-full bg-slate-900/[0.04]" />
          <div className="w-px h-full bg-slate-900/[0.04]" />
          <div className="w-px h-full bg-slate-900/[0.04]" />
          <div className="w-px h-full bg-slate-900/[0.04]" />
          <div className="w-px h-full bg-slate-900/[0.04]" />
        </div>

        <div className="absolute w-24 h-32 bg-[#F5F7FA] rounded-xl border border-slate-900/[0.08] shadow-[0_2px_8px_rgba(17,24,39,0.04)] transform -rotate-12 -translate-x-6 p-2.5 space-y-1.5">
          <div className="w-8 h-1.5 bg-slate-300 rounded-full" />
          <div className="w-14 h-1.5 bg-slate-200 rounded-full" />
          <div className="w-10 h-1.5 bg-slate-200 rounded-full" />
        </div>

        <div className="absolute w-24 h-32 bg-[#F5F7FA] rounded-xl border border-slate-900/[0.08] shadow-[0_2px_8px_rgba(17,24,39,0.04)] transform rotate-12 translate-x-6 p-2.5 space-y-1.5">
          <div className="w-8 h-1.5 bg-slate-300 rounded-full" />
          <div className="w-14 h-1.5 bg-slate-200 rounded-full" />
          <div className="w-10 h-1.5 bg-slate-200 rounded-full" />
        </div>

        <div className="relative z-20 w-13 h-13 rounded-xl bg-[#111827] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(17,24,39,0.16)] border border-white/20">
          <ShieldCheckIcon className="w-6 h-6" />
        </div>
      </div>

      <div>
        <h3 className="text-[18px] font-semibold text-[#111827] mb-1.5 tracking-[-0.01em]">
          {t.features.card3.title}
        </h3>
        <p className="text-[14px] text-[#4B5565] leading-relaxed">
          {t.features.card3.desc}
        </p>
      </div>
    </div>
  );
}
