'use client';

import React from 'react';
import { TextBlurWipe } from '@/components/ui/TextBlurWipe';
import { AttendanceReportCard } from './AttendanceReportCard';
import { ManagersLeadersCard } from './ManagersLeadersCard';
import { LegalTeamsCard } from './LegalTeamsCard';
import { EmployeeDataCard } from './EmployeeDataCard';
import { TeamsEmployeesCard } from './TeamsEmployeesCard';
import { useLanguage } from '@/i18n/LanguageContext';

export function BentoGridSection() {
  const { t } = useLanguage();

  return (
    <section
      id="features"
      className="canvas-card scroll-mt-32 sm:scroll-mt-36 md:scroll-mt-40 bg-white rounded-[24px] sm:rounded-[44px] md:rounded-[48px] shadow-sm border border-slate-200/60 overflow-hidden relative pt-20 sm:pt-40 md:pt-44 pb-16 sm:pb-28 px-2.5 sm:px-10 lg:px-14"
    >
      {/* Section Header */}
      <div className="scroll-blur-reveal text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D38]"></span>
          {t.features.sectionBadge}
        </div>
        <TextBlurWipe
          as="h2"
          className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
        >
          {t.features.title}
        </TextBlurWipe>
        <p className="text-blur-wipe-sub mt-2.5 sm:mt-3 text-xs sm:text-base text-gray-500 max-w-2xl mx-auto">
          {t.features.subtitle}
        </p>
      </div>

      {/* Bento Grid 5 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-[1360px] mx-auto">
        <AttendanceReportCard />
        <ManagersLeadersCard />
        <LegalTeamsCard />
        <EmployeeDataCard />
        <TeamsEmployeesCard />
      </div>
    </section>
  );
}
