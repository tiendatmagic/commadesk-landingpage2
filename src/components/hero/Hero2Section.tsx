'use client';

import React from 'react';
import { HeroDualOrbit } from './HeroDualOrbit';
import { TextBlurWipe } from '@/components/ui/TextBlurWipe';
import { useLanguage } from '@/i18n/LanguageContext';

export function Hero2Section() {
  const { t, language } = useLanguage();

  return (
    <section
      id="hero2Card"
      className="canvas-card scroll-mt-24 bg-white rounded-2xl sm:rounded-3xl shadow-[0_1px_2px_rgba(17,24,39,0.05)] border border-slate-900/[0.08] overflow-hidden relative min-h-[440px] md:min-h-[500px] lg:min-h-[760px] xl:min-h-[860px] flex items-center justify-center px-4 sm:px-8 py-14 md:py-20 lg:py-0 text-center"
    >
      {/* 8 Orbiting Avatars Dual Wheel */}
      <HeroDualOrbit />

      {/* Center Content */}
      <div className="relative z-20 max-w-[440px] xl:max-w-[540px] mx-auto px-2 sm:px-4">
        <p className="text-[13px] font-medium text-[#6B7487] mb-3">
          {t.hero2.badge}
        </p>

        <div className="scroll-blur-reveal">
          <TextBlurWipe
            as="h2"
            className="text-[32px] sm:text-4xl lg:text-[44px] xl:text-[52px] font-semibold text-[#111827] tracking-[-0.025em] leading-[1.08] break-words"
          >
            {language === 'vi'
              ? ['Một không gian', <br key="br2" />, 'cho toàn đội ngũ']
              : ['One workspace', <br key="br2" />, 'for your team']}
          </TextBlurWipe>

          <p className="text-blur-wipe-sub mt-4 text-[14px] sm:text-[16px] text-[#4B5565] font-normal leading-relaxed max-w-md mx-auto">
            {t.hero2.subtitle}
          </p>

          <div className="mt-7 flex justify-center w-full max-w-xs sm:max-w-none mx-auto">
            <a
              href="#features"
              className="inline-flex items-center justify-center w-full sm:w-auto h-11 px-6 rounded-[10px] text-white font-medium text-[14px] bg-[#111827] hover:bg-[#1F2937] transition-[background-color,transform] duration-150 active:scale-[0.98] text-center"
            >
              {language === 'vi' ? 'Khám phá Không gian làm việc' : 'Explore workspace'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
