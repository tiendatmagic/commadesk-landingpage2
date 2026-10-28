'use client';

import React from 'react';
import { HeroDualOrbit } from './HeroDualOrbit';
import { TextBlurWipe } from '@/components/ui/TextBlurWipe';
import { useLanguage } from '@/i18n/LanguageContext';
import { UserIcon } from '@/components/ui/UIIcons';

export function Hero2Section() {
  const { t, language } = useLanguage();

  return (
    <section
      id="hero2Card"
      className="canvas-card scroll-mt-28 bg-white rounded-[24px] sm:rounded-[44px] md:rounded-[48px] shadow-sm border border-slate-200/60 overflow-hidden relative min-h-[460px] md:min-h-[520px] lg:min-h-[820px] xl:min-h-[960px] flex items-center justify-center px-4 sm:px-8 py-14 md:py-20 lg:py-0 text-center"
    >
      {/* 8 Orbiting Avatars Dual Wheel (Chỉ hiển thị từ lg: >= 1024px, tự thích ứng biên độ khi < 1280px) */}
      <HeroDualOrbit />

      {/* Center Content: Icon Tím, Tiêu đề, Phụ đề, Nút CTA */}
      <div className="relative z-20 max-w-[420px] xl:max-w-[560px] mx-auto px-2 sm:px-4">
        {/* Category Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-3.5 mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></span>
          {t.hero2.badge}
        </div>

        {/* Center Icon: Purple User Profile */}
        <div className="scroll-blur-reveal w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-lg shadow-indigo-100/80 flex items-center justify-center text-[#7C3AED] mx-auto mb-4 sm:mb-6 border border-slate-100">
          <UserIcon className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        {/* Typography & CTA */}
        <div className="scroll-blur-reveal delay-100">
          <TextBlurWipe
            as="h2"
            className="text-3xl sm:text-4xl lg:text-[40px] xl:text-6xl font-black text-gray-900 tracking-tight leading-[1.12] xl:leading-[1.08] break-words"
          >
            {language === 'vi'
              ? ['Một không gian', <br key="br2" />, 'cho toàn đội ngũ']
              : ['One workspace', <br key="br2" />, 'for your team']}
          </TextBlurWipe>

          <p className="text-blur-wipe-sub mt-3 sm:mt-4 text-xs sm:text-sm xl:text-base text-gray-500 font-normal leading-relaxed max-w-sm xl:max-w-md mx-auto">
            {t.hero2.subtitle}
          </p>

          <div className="mt-6 sm:mt-8 flex justify-center w-full max-w-xs sm:max-w-none mx-auto">
            <a
              href="#features"
              className="inline-flex items-center justify-center w-full sm:w-auto px-7 sm:px-8 py-3 rounded-xl sm:rounded-2xl text-white font-medium text-xs sm:text-sm bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] shadow-lg shadow-indigo-300/40 transition-all duration-300 active:scale-95 text-center"
            >
              {language === 'vi' ? 'Khám phá Không gian làm việc' : 'Explore Workspace'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
