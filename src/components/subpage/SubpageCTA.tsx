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
      className="canvas-card scroll-mt-28 bg-white rounded-[24px] sm:rounded-[44px] md:rounded-[48px] border border-slate-200/80 p-5 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden shadow-xl shadow-slate-200/40 text-slate-900"
    >
      {/* Decorative Light Glows */}
      <div className="pointer-events-none absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#FF4D38]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-[#6366F1]/5 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-100 text-slate-800 text-[11px] sm:text-xs font-semibold mb-4 sm:mb-6 border border-slate-200/80">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>
            {language === 'vi'
              ? `Sẵn sàng triển khai ${moduleName}`
              : `Ready to deploy ${moduleName}`}
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950 leading-tight">
          {t.subpages.readyToElevate}
        </h2>

        <p className="mt-3 sm:mt-5 text-xs sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
          {t.subpages.ctaSubtitle}
        </p>

        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto">
          <Link
            href="/#features"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#FF4D38] hover:bg-[#E03E2A] text-white font-bold text-xs sm:text-base shadow-xl shadow-[#FF4D38]/25 transition-all active:scale-95 text-center"
          >
            {language === 'vi' ? 'Khám phá tất cả các phân hệ' : 'Explore All Modules'}
          </Link>
          <Link
            href="/#integrations"
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-semibold text-xs sm:text-base border border-slate-200 transition-all active:scale-95 text-center"
          >
            {language === 'vi' ? 'Hệ sinh thái tích hợp' : 'Ecosystem & Integrations'}
          </Link>
        </div>

        {/* Security badges guarantee */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
            {language === 'vi' ? 'Phân quyền đa tầng linh hoạt' : 'Multi-Tier Permissions'}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
            Multi-Tenant Isolation
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
            SOC2 &amp; ISO 27001 Ready
          </span>
        </div>
      </div>
    </section>
  );
}
