'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { CheckCircleIcon } from '@/components/ui/UIIcons';

interface SubpageCTAProps {
  moduleName: string;
}

export function SubpageCTA({ moduleName }: SubpageCTAProps) {
  const { t, language } = useLanguage();

  return (
    <section
      id="demo"
      className="canvas-card scroll-mt-24 bg-white rounded-2xl sm:rounded-3xl border border-slate-900/[0.08] p-6 sm:p-12 md:p-16 relative overflow-hidden shadow-[0_1px_2px_rgba(17,24,39,0.05)] text-[#111827]"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-[13px] font-medium text-[#6B7487] mb-3">
          {language === 'vi'
            ? `Triển khai ${moduleName}`
            : `Deploy ${moduleName}`}
        </p>

        <h2 className="text-[28px] sm:text-4xl md:text-[42px] font-semibold tracking-[-0.02em] text-[#111827] leading-[1.12]">
          {t.subpages.readyToElevate}
        </h2>

        <p className="mt-4 text-[14px] sm:text-[16px] text-[#4B5565] font-normal leading-relaxed max-w-xl mx-auto">
          {t.subpages.ctaSubtitle}
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto">
          <Link
            href="/#features"
            className="inline-flex items-center justify-center w-full sm:w-auto h-11 px-6 rounded-[10px] bg-[#FF4D38] hover:bg-[#E03E2A] text-white font-medium text-[14px] transition-[background-color,transform] duration-150 active:scale-[0.98] text-center"
          >
            {language === 'vi' ? 'Khám phá tất cả các phân hệ' : 'Explore all modules'}
          </Link>
          <Link
            href="/#integrations"
            className="inline-flex items-center justify-center w-full sm:w-auto h-11 px-5 rounded-[10px] bg-[#ECEFF4] hover:bg-slate-200/80 text-[#111827] font-medium text-[14px] border border-slate-900/[0.08] transition-[background-color,transform] duration-150 active:scale-[0.98] text-center"
          >
            {language === 'vi' ? 'Các phân hệ tích hợp' : 'Integrations'}
          </Link>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-900/[0.06] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[13px] text-[#6B7487]">
          <span className="flex items-center gap-1.5">
            <CheckCircleIcon className="w-4 h-4 text-[#16A34A]" />
            {language === 'vi' ? 'Phân quyền theo vai trò' : 'Role-based permissions'}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircleIcon className="w-4 h-4 text-[#16A34A]" />
            {language === 'vi' ? 'Cô lập dữ liệu theo đơn vị' : 'Organization data isolation'}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircleIcon className="w-4 h-4 text-[#16A34A]" />
            {language === 'vi' ? 'Nhật ký phê duyệt & kiểm soát' : 'Activity logs & approvals'}
          </span>
        </div>
      </div>
    </section>
  );
}
