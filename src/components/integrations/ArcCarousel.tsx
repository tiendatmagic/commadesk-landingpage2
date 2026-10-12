'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TextBlurWipe } from '@/components/ui/TextBlurWipe';
import { INTEGRATION_APPS } from '@/data/integrations';
import { useLanguage } from '@/i18n/LanguageContext';
import { CogIcon } from '@/components/ui/UIIcons';

import {
  WorkManagementLogo,
  HrWorkforceLogo,
  CommaMeetLogo,
  DocumentRegistryLogo,
  AiSmartCityLogo,
} from '@/components/ui/BrandLogos';

const APP_ICONS: Record<string, React.ReactNode> = {
  'work-management': (
    <WorkManagementLogo className="w-full h-full max-w-[42px] max-h-[42px] sm:max-w-[48px] sm:max-h-[48px] lg:max-w-[56px] lg:max-h-[56px] xl:max-w-[64px] xl:max-h-[64px]" />
  ),
  'hr-workforce': (
    <HrWorkforceLogo className="w-full h-full max-w-[42px] max-h-[42px] sm:max-w-[48px] sm:max-h-[48px] lg:max-w-[56px] lg:max-h-[56px] xl:max-w-[64px] xl:max-h-[64px]" />
  ),
  'comma-meet': (
    <CommaMeetLogo className="w-full h-full max-w-[42px] max-h-[42px] sm:max-w-[48px] sm:max-h-[48px] lg:max-w-[56px] lg:max-h-[56px] xl:max-w-[64px] xl:max-h-[64px]" />
  ),
  'operations-documents': (
    <DocumentRegistryLogo className="w-full h-full max-w-[42px] max-h-[42px] sm:max-w-[48px] sm:max-h-[48px] lg:max-w-[56px] lg:max-h-[56px] xl:max-w-[64px] xl:max-h-[64px]" />
  ),
  'ai-smart-city': (
    <AiSmartCityLogo className="w-full h-full max-w-[42px] max-h-[42px] sm:max-w-[48px] sm:max-h-[48px] lg:max-w-[56px] lg:max-h-[56px] xl:max-w-[64px] xl:max-h-[64px]" />
  ),
};

export function ArcCarousel() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(2); // CommaMeet ban đầu ở vị trí trung tâm
  const [windowWidth, setWindowWidth] = useState(1200);
  const [textVisible, setTextVisible] = useState(true);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  // Lấy kích thước màn hình
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Tự động xoay sau 2.0s
  const startTimer = useCallback(() => {
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    autoRotateRef.current = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % INTEGRATION_APPS.length);
        setTextVisible(true);
      }, 150);
    }, 2000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, [startTimer]);

  const handleTileClick = (index: number) => {
    if (index === currentIndex) return;
    setTextVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setTextVisible(true);
    }, 150);
    startTimer();
  };

  // Tính toán vị trí theo tỷ lệ parabolic arc
  const isLargeDesktop = windowWidth >= 1280;
  const isMediumDesktop = windowWidth >= 1024 && windowWidth < 1280;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  let stepX1 = 182;
  let stepX2 = 356;
  let dropY1 = 22;
  let dropY2 = 72;
  let rot1 = 8.5;
  let rot2 = 17;
  let scale0 = 1.05;
  let scale1 = 0.94;
  let scale2 = 0.84;

  if (isLargeDesktop) {
    stepX1 = 182;
    stepX2 = 356;
    dropY1 = 22;
    dropY2 = 72;
    rot1 = 8.5;
    rot2 = 17;
    scale0 = 1.05;
    scale1 = 0.94;
    scale2 = 0.84;
  } else if (isMediumDesktop) {
    stepX1 = 160;
    stepX2 = 314;
    dropY1 = 20;
    dropY2 = 66;
    rot1 = 8.5;
    rot2 = 17;
    scale0 = 1.05;
    scale1 = 0.94;
    scale2 = 0.84;
  } else if (isTablet) {
    stepX1 = 122;
    stepX2 = 238;
    dropY1 = 16;
    dropY2 = 52;
    rot1 = 8;
    rot2 = 16;
    scale0 = 1.04;
    scale1 = 0.92;
    scale2 = 0.8;
  } else {
    stepX1 = 82;
    stepX2 = 158;
    dropY1 = 12;
    dropY2 = 36;
    rot1 = 7;
    rot2 = 14;
    scale0 = 1.04;
    scale1 = 0.86;
    scale2 = 0.7;
  }

  const isDesktop = isLargeDesktop || isMediumDesktop;
  const baseTopY = isLargeDesktop ? -22 : isMediumDesktop ? -20 : -16;

  const currentApp = INTEGRATION_APPS[currentIndex];

  return (
    <section
      id="integrations"
      className="canvas-card scroll-mt-28 sm:scroll-mt-36 md:scroll-mt-40 bg-white rounded-[32px] sm:rounded-[44px] md:rounded-[48px] shadow-sm border border-slate-200/60 overflow-hidden relative flex flex-col justify-center pt-24 sm:pt-32 md:pt-36 pb-20 sm:pb-28 px-4 sm:px-10 lg:px-14 text-center"
    >
      {/* Icon bánh răng màu cam đỏ */}
      <div className="scroll-blur-reveal inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white text-[#FF5A43] mb-5 sm:mb-6 shadow-sm border border-slate-100 mx-auto">
        <CogIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Top Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 mx-auto">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A43]"></span>
        {t.integrations.badge}
      </div>

      {/* Heading */}
      <div className="scroll-blur-reveal delay-100">
        <TextBlurWipe
          as="h2"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-gray-900 tracking-tight max-w-3xl mx-auto leading-tight"
        >
          {language === 'vi'
            ? ['Mọi chức năng vận hành', <br key="br3" />, 'hợp nhất trên một nền tảng']
            : ['All critical enterprise functions', <br key="br3" />, 'united under one roof']}
        </TextBlurWipe>

        <p className="text-blur-wipe-sub mt-2.5 sm:mt-3 text-xs sm:text-base text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto">
          {t.integrations.subtitle}
        </p>
      </div>

      {/* 3D Arc Curved Carousel Container */}
      <div className="relative max-w-5xl xl:max-w-6xl mx-auto mt-12 sm:mt-16 flex flex-col items-center justify-center">
        <div
          id="arcContainer"
          className="relative w-full h-44 sm:h-52 md:h-60 lg:h-64 xl:h-72 flex items-center justify-center overflow-visible"
        >
          <div
            id="arcTrack"
            className="relative w-full max-w-[840px] md:max-w-[920px] lg:max-w-[1000px] xl:max-w-[1060px] h-40 sm:h-48 md:h-56 lg:h-60 xl:h-64 flex items-center justify-center"
          >
            {/* Left White Blur Shadow Mask */}
            <div className="pointer-events-none absolute -inset-y-4 left-0 w-16 sm:w-24 md:w-32 lg:w-36 xl:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-[22]" />

            {/* Right White Blur Shadow Mask */}
            <div className="pointer-events-none absolute -inset-y-4 right-0 w-16 sm:w-24 md:w-32 lg:w-36 xl:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-[22]" />

            {/* 5 Ứng dụng Arc Tiles */}
            {INTEGRATION_APPS.map((app, appIndex) => {
              let diff = (appIndex - currentIndex) % 5;
              if (diff < 0) diff += 5;
              const relIndex = diff > 2 ? diff - 5 : diff;

              let posX = 0;
              let posY = baseTopY;
              let rot = 0;
              let scale = 1;
              let zIndex = 10;
              let opacity = 1;

              if (relIndex === 0) {
                posX = 0;
                posY = baseTopY;
                rot = 0;
                scale = scale0;
                zIndex = 30;
                opacity = 1;
              } else if (Math.abs(relIndex) === 1) {
                posX = relIndex * stepX1;
                posY = baseTopY + dropY1;
                rot = relIndex * rot1;
                scale = scale1;
                zIndex = 25;
                opacity = 0.94;
              } else {
                posX = (relIndex > 0 ? 1 : -1) * stepX2;
                posY = baseTopY + dropY2;
                rot = (relIndex > 0 ? 1 : -1) * rot2;
                scale = scale2;
                zIndex = 10;
                opacity = isDesktop ? 0.68 : isTablet ? 0.55 : 0.42;
              }

              const appDisplayName = language === 'vi' ? (app.nameVi || app.name) : (app.nameEn || app.name);

              return (
                <div
                  key={app.id}
                  id={`arcTile${appIndex}`}
                  data-index={appIndex}
                  onClick={() => handleTileClick(appIndex)}
                  className="arc-tile cursor-pointer flex items-center justify-center select-none"
                  title={appDisplayName}
                  style={{
                    transform: `translate3d(calc(-50% + ${posX}px), calc(-50% + ${posY}px), 0) scale(${scale}) rotate(${rot}deg)`,
                    zIndex,
                    opacity,
                  }}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-[142px] xl:h-[142px] rounded-[20px] sm:rounded-[24px] md:rounded-[26px] lg:rounded-[28px] xl:rounded-[32px] bg-[#F1F3F5] hover:bg-[#E9ECEF] flex items-center justify-center p-3.5 sm:p-4 md:p-5 lg:p-6 xl:p-7 shadow-sm transition-all duration-300 border border-slate-200/50">
                    {APP_ICONS[app.id]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active App Label & Details */}
        <div
          id="activeAppDetails"
          className="mt-6 sm:mt-8 text-center transition-all duration-300 min-h-[56px]"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(4px)',
          }}
        >
          <h3
            id="activeAppName"
            className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight"
          >
            {language === 'vi' ? (currentApp.nameVi || currentApp.name) : (currentApp.nameEn || currentApp.name)}
          </h3>
          <p
            id="activeAppDesc"
            className="text-xs sm:text-sm font-normal text-gray-500 mt-1 max-w-xl mx-auto"
          >
            {language === 'vi' ? (currentApp.descVi || currentApp.desc) : (currentApp.descEn || currentApp.desc)}
          </p>
        </div>
      </div>
    </section>
  );
}
