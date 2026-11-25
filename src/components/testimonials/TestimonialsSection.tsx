'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TextBlurWipe } from '@/components/ui/TextBlurWipe';
import { TESTIMONIALS_DATA } from '@/data/testimonials';
import { EnvelopeGraphic } from './EnvelopeGraphic';
import { TestimonialCard } from './TestimonialCard';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/ui/UIIcons';

export function TestimonialsSection() {
  const { t, language } = useLanguage();
  const isVi = language === 'vi';
  const [hasFannedOut, setHasFannedOut] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollYRef = useRef(0);

  const stopAutoRotate = useCallback(() => {
    if (autoRotateTimerRef.current) {
      clearInterval(autoRotateTimerRef.current);
      autoRotateTimerRef.current = null;
    }
  }, []);

  const goToSlide = useCallback(
    (targetIdx: number) => {
      if (!hasFannedOut) {
        setHasFannedOut(true);
        return;
      }
      if (targetIdx === currentIdx || isTransitioning) return;

      setIsTransitioning(true);
      setCurrentIdx(targetIdx);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 650);
    },
    [hasFannedOut, currentIdx, isTransitioning]
  );

  const startAutoRotate = useCallback(() => {
    stopAutoRotate();
    if (!hasFannedOut) return;
    autoRotateTimerRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 4500);
  }, [hasFannedOut, stopAutoRotate]);

  const triggerFanOut = useCallback(() => {
    if (hasFannedOut) return;
    setHasFannedOut(true);

    setTimeout(() => {
      setCurrentIdx((prev) => (prev === 0 ? 1 : prev));
    }, 1200);
  }, [hasFannedOut]);

  const resetToEnvelope = useCallback(() => {
    stopAutoRotate();
    setHasFannedOut(false);
    setCurrentIdx(0);
  }, [stopAutoRotate]);

  useEffect(() => {
    if (hasFannedOut) {
      startAutoRotate();
    } else {
      stopAutoRotate();
    }
    return () => stopAutoRotate();
  }, [hasFannedOut, startAutoRotate, stopAutoRotate]);

  useEffect(() => {
    const stage = stageRef.current;
    const section = sectionRef.current;
    if (!stage || !section) return;

    const handleScroll = () => {
      const stageRect = stage.getBoundingClientRect();
      const windowH = window.innerHeight;
      const stageCenterY = stageRect.top + stageRect.height / 2;
      const windowCenterY = windowH / 2;
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollYRef.current;
      const isScrollingUp = currentScrollY < lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      const isInView =
        stageRect.top < windowH * 0.85 && stageRect.bottom > windowH * 0.15;

      if (!isInView) {
        if (stageRect.bottom < 0 || stageRect.top > windowH) {
          if (hasFannedOut) resetToEnvelope();
        }
        return;
      }

      if (!hasFannedOut) {
        if (
          isScrollingDown &&
          (stageCenterY <= windowCenterY + 40 || stageRect.top <= 120)
        ) {
          triggerFanOut();
        }
      } else {
        if (
          isScrollingDown &&
          stageCenterY <= windowCenterY - 40 &&
          !isTransitioning
        ) {
          const nextIdx = (currentIdx + 1) % TESTIMONIALS_DATA.length;
          goToSlide(nextIdx);
        } else if (isScrollingUp && stageCenterY >= windowCenterY + 80) {
          resetToEnvelope();
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const stageRect = stage.getBoundingClientRect();
      const windowH = window.innerHeight;
      const isInView =
        stageRect.top < windowH * 0.85 && stageRect.bottom > windowH * 0.15;
      if (!isInView) return;

      if (e.deltaY > 15) {
        if (!hasFannedOut) {
          triggerFanOut();
        } else if (!isTransitioning) {
          const nextIdx = (currentIdx + 1) % TESTIMONIALS_DATA.length;
          goToSlide(nextIdx);
        }
      } else if (e.deltaY < -15) {
        if (hasFannedOut) {
          if (currentIdx > 0 && !isTransitioning) {
            goToSlide(currentIdx - 1);
          } else if (currentIdx === 0 && stageRect.top > 40) {
            resetToEnvelope();
          }
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const deltaY = touchStartY - e.touches[0].clientY;
      const stageRect = stage.getBoundingClientRect();
      const windowH = window.innerHeight;
      const isInView =
        stageRect.top < windowH * 0.85 && stageRect.bottom > windowH * 0.15;
      if (!isInView) return;

      if (deltaY > 20) {
        if (!hasFannedOut) {
          triggerFanOut();
        } else if (!isTransitioning) {
          const nextIdx = (currentIdx + 1) % TESTIMONIALS_DATA.length;
          goToSlide(nextIdx);
        }
      } else if (deltaY < -20 && hasFannedOut) {
        if (currentIdx > 0 && !isTransitioning) {
          goToSlide(currentIdx - 1);
        } else if (currentIdx === 0 && stageRect.top > 40) {
          resetToEnvelope();
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    section.addEventListener('wheel', handleWheel, { passive: true });
    section.addEventListener('touchstart', handleTouchStart, { passive: true });
    section.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      section.removeEventListener('wheel', handleWheel);
      section.removeEventListener('touchstart', handleTouchStart);
      section.removeEventListener('touchmove', handleTouchMove);
    };
  }, [hasFannedOut, currentIdx, isTransitioning, triggerFanOut, goToSlide, resetToEnvelope]);

  const handleStageClick = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) return;

    if (!hasFannedOut) {
      triggerFanOut();
    } else {
      const nextIdx = (currentIdx + 1) % TESTIMONIALS_DATA.length;
      goToSlide(nextIdx);
      startAutoRotate();
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasFannedOut) {
      triggerFanOut();
      return;
    }
    const prevIdx =
      (currentIdx - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length;
    goToSlide(prevIdx);
    startAutoRotate();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasFannedOut) {
      triggerFanOut();
      return;
    }
    const nextIdx = (currentIdx + 1) % TESTIMONIALS_DATA.length;
    goToSlide(nextIdx);
    startAutoRotate();
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="canvas-card scroll-mt-24 bg-white rounded-2xl sm:rounded-3xl shadow-[0_1px_2px_rgba(17,24,39,0.05)] border border-slate-900/[0.08] relative pt-14 sm:pt-20 pb-14 sm:pb-20 px-4 sm:px-8 lg:px-12 text-center overflow-hidden min-h-[720px] lg:min-h-[780px] flex flex-col justify-center items-center"
    >
      {/* Section Header */}
      <div className="scroll-blur-reveal max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10">
        <p className="text-[13px] font-medium text-[#6B7487] mb-2">
          {t.testimonials.badge}
        </p>
        <TextBlurWipe
          as="h2"
          className="text-2xl sm:text-4xl md:text-[42px] font-semibold text-[#111827] tracking-[-0.025em] leading-[1.12]"
        >
          {t.testimonials.title}
        </TextBlurWipe>
        <p className="text-blur-wipe-sub mt-3 text-sm sm:text-base text-[#4B5565] max-w-2xl mx-auto leading-relaxed">
          {t.testimonials.subtitle}
        </p>
      </div>

      {/* Testimonials Stage */}
      <div
        ref={stageRef}
        id="fanOutStage"
        onClick={handleStageClick}
        onMouseEnter={stopAutoRotate}
        onMouseLeave={() => {
          if (hasFannedOut) startAutoRotate();
        }}
        className={`testi-stage relative max-w-[1400px] w-full mx-auto flex flex-col items-center justify-center min-h-[480px] sm:min-h-[500px] md:min-h-[520px] ${
          hasFannedOut ? 'is-fanout' : ''
        }`}
        title="Click to cycle customer stories"
      >
        <div className="relative w-full max-w-[1240px] h-[450px] sm:h-[480px] md:h-[500px] mx-auto flex items-center justify-center overflow-visible">
          <div
            id="leftTiltCard"
            className="testi-fanout-card absolute left-1/2 top-1/2 w-[275px] min-[390px]:w-[320px] sm:w-[380px] md:w-[410px] lg:w-[430px] h-[440px] sm:h-[490px] md:h-[520px] lg:h-[540px] rounded-2xl sm:rounded-3xl z-10 pointer-events-none"
          />

          <div
            id="rightTiltCard"
            className="testi-fanout-card absolute left-1/2 top-1/2 w-[275px] min-[390px]:w-[320px] sm:w-[380px] md:w-[410px] lg:w-[430px] h-[440px] sm:h-[490px] md:h-[520px] lg:h-[540px] rounded-2xl sm:rounded-3xl z-10 pointer-events-none"
          />

          <EnvelopeGraphic />

          {TESTIMONIALS_DATA.map((item, index) => {
            let statusClass = 'is-hidden';
            if (index === currentIdx) {
              statusClass = 'is-active';
            } else if (
              index ===
              (currentIdx - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length
            ) {
              statusClass = 'is-left';
            } else if (index === (currentIdx + 1) % TESTIMONIALS_DATA.length) {
              statusClass = 'is-right';
            }

            return (
              <TestimonialCard
                key={item.id}
                id={index === 0 ? 'cardSarah' : `cardTesti_${item.id}`}
                testimonial={item}
                statusClass={statusClass}
              />
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div
          id="testiNavControls"
          className="testi-nav-controls flex items-center justify-center gap-3 mt-8 sm:mt-10 relative z-30"
        >
          <button
            id="testiPrevBtn"
            type="button"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-10 h-10 rounded-[10px] bg-white hover:bg-[#F5F7FA] border border-slate-900/[0.08] shadow-[0_1px_2px_rgba(17,24,39,0.05)] flex items-center justify-center text-[#111827] transition-[background-color,transform] duration-150 active:scale-[0.97] cursor-pointer"
          >
            <ArrowLeftIcon className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2.5 px-3.5 h-10 bg-white rounded-[10px] border border-slate-900/[0.08] shadow-[0_1px_2px_rgba(17,24,39,0.05)]">
            <span className="font-mono tabular-nums text-[12px] font-medium text-[#6B7487] select-none">
              {currentIdx + 1}&nbsp;{t.testimonials.counterOf}&nbsp;{TESTIMONIALS_DATA.length}
            </span>

            <div className="flex items-center gap-1.5">
              {TESTIMONIALS_DATA.map((item, dotIdx) => {
                const nameText = isVi
                  ? item.nameVi || item.name
                  : item.nameEn || item.name;
                const labelText = isVi
                  ? item.companyVi || item.roleVi || item.role
                  : item.companyEn || item.roleEn || item.role;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToSlide(dotIdx);
                      startAutoRotate();
                    }}
                    className={`transition-[width,background-color] duration-200 rounded-full cursor-pointer ${
                      dotIdx === currentIdx
                        ? 'w-5 h-1.5 bg-[#FF4D38]'
                        : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to ${nameText}`}
                    title={`${nameText} (${labelText})`}
                  />
                );
              })}
            </div>
          </div>

          <button
            id="testiNextBtn"
            type="button"
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-10 h-10 rounded-[10px] bg-white hover:bg-[#F5F7FA] border border-slate-900/[0.08] shadow-[0_1px_2px_rgba(17,24,39,0.05)] flex items-center justify-center text-[#111827] transition-[background-color,transform] duration-150 active:scale-[0.97] cursor-pointer"
          >
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
