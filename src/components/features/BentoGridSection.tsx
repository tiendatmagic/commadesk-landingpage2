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
      className="canvas-card scroll-mt-24 bg-white rounded-2xl sm:rounded-3xl shadow-[0_1px_2px_rgba(17,24,39,0.05)] border border-slate-900/[0.08] overflow-hidden relative pt-14 sm:pt-20 md:pt-24 pb-14 sm:pb-20 px-4 sm:px-8 lg:px-12"
    >
      {/* Section Header */}
      <div className="scroll-blur-reveal text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <p className="text-[13px] font-medium text-[#6B7487] mb-2">
          {t.features.sectionBadge}
        </p>
        <TextBlurWipe
          as="h2"
          className="text-[28px] sm:text-4xl md:text-[42px] font-semibold text-[#111827] tracking-[-0.02em] leading-[1.12]"
        >
          {t.features.title}
        </TextBlurWipe>
        <p className="text-blur-wipe-sub mt-3 text-[14px] sm:text-[16px] text-[#4B5565] max-w-xl mx-auto leading-relaxed">
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
