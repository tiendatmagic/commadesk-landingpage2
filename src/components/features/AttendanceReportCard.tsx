'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { ChevronDownIcon } from '@/components/ui/UIIcons';

export function AttendanceReportCard() {
  const { t } = useLanguage();

  return (
    <div className="scroll-fade-up delay-75 bg-[#F8FAFC] rounded-2xl p-6 border border-slate-900/[0.08] flex flex-col justify-between">
      {/* Graphic: Time Logs & Velocity */}
      <div className="relative bg-white rounded-xl p-4 sm:p-5 border border-slate-900/[0.08] mb-6 shadow-[0_1px_2px_rgba(17,24,39,0.04)] overflow-hidden">
        <div className="relative z-10 flex items-center justify-between mb-4">
          <span className="text-[13px] font-medium text-[#111827]">Time logs &amp; velocity</span>
          <span className="font-mono text-[11px] font-medium text-[#4B5565] bg-[#F5F7FA] px-2 py-0.5 rounded-[6px] border border-slate-900/[0.08] inline-flex items-center gap-1">
            Weekly <ChevronDownIcon className="w-3 h-3 text-[#6B7487]" />
          </span>
        </div>

        {/* Mon-Fri Bars with single accent on peak */}
        <div className="relative z-10 h-28 flex items-end justify-between gap-2.5 pt-4 px-1">
          <div className="absolute top-8 left-9 right-2 border-b border-dashed border-slate-200 pointer-events-none" />

          <div className="flex flex-col justify-between h-20 font-mono tabular-nums text-[10px] text-[#6B7487] pr-1">
            <span>40h</span>
            <span>32h</span>
            <span>24h</span>
            <span>16h</span>
          </div>

          <div className="w-full flex flex-col items-center gap-1.5">
            <div
              className="chart-bar w-full bg-slate-200 rounded-t-[4px] h-12"
              style={{ transitionDelay: '120ms' }}
            />
            <span className="font-mono text-[11px] text-[#6B7487]">Mon</span>
          </div>
          <div className="w-full flex flex-col items-center gap-1.5">
            <div
              className="chart-bar w-full bg-slate-200 rounded-t-[4px] h-16"
              style={{ transitionDelay: '180ms' }}
            />
            <span className="font-mono text-[11px] text-[#6B7487]">Tue</span>
          </div>
          <div className="w-full flex flex-col items-center gap-1.5 relative">
            <span
              className="chart-badge absolute -top-6 font-mono tabular-nums text-[11px] font-medium bg-[#111827] text-white px-1.5 py-0.5 rounded-[4px] whitespace-nowrap"
              style={{ transitionDelay: '280ms' }}
            >
              +17%
            </span>
            <div
              className="chart-bar w-full bg-[#FF4D38] rounded-t-[4px] h-22"
              style={{ transitionDelay: '240ms' }}
            />
            <span className="font-mono text-[11px] font-medium text-[#111827]">Wed</span>
          </div>
          <div className="w-full flex flex-col items-center gap-1.5">
            <div
              className="chart-bar w-full bg-slate-200 rounded-t-[4px] h-14"
              style={{ transitionDelay: '300ms' }}
            />
            <span className="font-mono text-[11px] text-[#6B7487]">Thu</span>
          </div>
          <div className="w-full flex flex-col items-center gap-1.5">
            <div
              className="chart-bar w-full bg-slate-300 rounded-t-[4px] h-18"
              style={{ transitionDelay: '360ms' }}
            />
            <span className="font-mono text-[11px] text-[#6B7487]">Fri</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[18px] font-semibold text-[#111827] mb-1.5">{t.features.card1.title}</h3>
        <p className="text-[14px] text-[#4B5565] leading-relaxed">
          {t.features.card1.desc}
        </p>
      </div>
    </div>
  );
}
