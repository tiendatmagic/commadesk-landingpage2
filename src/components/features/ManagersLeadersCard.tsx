'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { ClockIcon, BarChartIcon, TrendingUpIcon } from '@/components/ui/UIIcons';

export function ManagersLeadersCard() {
  const { t } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const badges = [
    {
      text: t.features.card2.badge1Title,
      icon: <ClockIcon className="w-4 h-4" />,
    },
    {
      text: t.features.card2.badge2Title,
      icon: <BarChartIcon className="w-4 h-4" />,
    },
    {
      text: t.features.card2.badge3Title,
      icon: <TrendingUpIcon className="w-4 h-4" />,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipping(true);

      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % badges.length);
        setIsFlipping(false);
      }, 220);
    }, 3400);

    return () => clearInterval(timer);
  }, [badges.length]);

  const badge = badges[currentIdx];

  return (
    <div className="scroll-fade-up delay-150 bg-[#F8FAFC] rounded-2xl p-6 border border-slate-900/[0.08] flex flex-col justify-between">
      {/* Graphic: Concentric Rings & Stacked Cards */}
      <div className="bg-white rounded-xl p-6 border border-slate-900/[0.08] mb-6 flex items-center justify-center min-h-[176px] relative overflow-hidden shadow-[0_1px_2px_rgba(17,24,39,0.04)]">
        {/* Static Concentric Circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-48 h-48 rounded-full border border-slate-900/[0.05]" />
          <div className="absolute w-32 h-32 rounded-full border border-slate-900/[0.06]" />
          <div className="absolute w-16 h-16 rounded-full border border-slate-900/[0.07]" />
        </div>

        {/* Stacked Cards */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-56 h-10 bg-[#F5F7FA] rounded-lg border border-slate-900/[0.06] -mb-7 scale-90 relative" />
          <div className="w-60 h-10 bg-[#ECEFF4] rounded-lg border border-slate-900/[0.08] -mb-7 scale-95 relative" />
          <div
            className="relative z-10 px-4 py-2.5 bg-white rounded-xl border border-slate-900/[0.1] shadow-[0_4px_14px_rgba(17,24,39,0.06)] flex items-center gap-3 transition-[transform,opacity] duration-200"
            style={{
              transform: isFlipping
                ? 'perspective(500px) rotateX(-70deg) scale(0.95)'
                : 'perspective(500px) rotateX(0deg) scale(1)',
              opacity: isFlipping ? 0 : 1,
            }}
          >
            <span className="w-8 h-8 rounded-lg bg-[#F5F7FA] border border-slate-900/[0.08] text-[#111827] flex items-center justify-center">
              {badge.icon}
            </span>
            <span className="text-[14px] font-medium text-[#111827] whitespace-nowrap">
              {badge.text}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[18px] font-semibold text-[#111827] mb-1.5">{t.features.card2.title}</h3>
        <p className="text-[14px] text-[#4B5565] leading-relaxed">
          {t.features.card2.desc}
        </p>
      </div>
    </div>
  );
}
