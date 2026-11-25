'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';
import { FileTextIcon, MailIcon } from '@/components/ui/UIIcons';

export function EmployeeDataCard() {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIsFlipped((prev) => !prev);
        setAnimating(false);
      }, 220);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="scroll-fade-up delay-250 md:col-span-2 bg-[#F8FAFC] rounded-2xl p-6 border border-slate-900/[0.08] flex flex-col justify-between relative overflow-hidden">
      {/* Leading Module Icon */}
      <div className="absolute top-6 left-6 w-10 h-10 rounded-xl bg-white border border-slate-900/[0.08] shadow-[0_1px_2px_rgba(17,24,39,0.05)] flex items-center justify-center text-[#FF4D38] z-20">
        <FileTextIcon className="w-5 h-5" />
      </div>

      {/* Graphic Grid */}
      <div className="relative bg-white rounded-xl p-4 sm:p-5 border border-slate-900/[0.08] mb-6 pl-14 sm:pl-16 shadow-[0_1px_2px_rgba(17,24,39,0.04)] overflow-hidden">
        <div
          id="card4SlideTrack"
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 transition-[transform,opacity] duration-300"
          style={{
            opacity: animating ? 0.5 : 1,
            transform: animating
              ? isFlipped
                ? 'translateX(8px)'
                : 'translateX(-8px)'
              : 'translateX(0)',
          }}
        >
          {/* Sprint Progress Mini */}
          <div
            id="card4Training"
            className={`bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-900/[0.06] flex flex-col justify-between ${
              isFlipped ? 'order-2' : 'order-1'
            }`}
          >
            <div className="flex items-center justify-between text-[12px] font-medium text-[#111827]">
              <span>{t.features.card4.tab1}</span>
              <div className="flex items-center gap-1.5 font-mono text-[10px]">
                <span className="text-[#6B7487]">Daily</span>
                <span className="text-[#6B7487]">Weekly</span>
                <span className="bg-[#111827] text-white px-2 py-0.5 rounded-[4px]">Monthly</span>
              </div>
            </div>
            <div className="h-20 flex items-end justify-between gap-1.5 pt-3">
              <div className="flex flex-col justify-between h-full font-mono tabular-nums text-[9px] text-[#6B7487] pr-1">
                <span>100%</span>
                <span>60%</span>
                <span>20%</span>
              </div>
              <div
                className="chart-bar w-full bg-slate-200 rounded-t-[3px] h-8"
                style={{ transitionDelay: '120ms' }}
              />
              <div
                className="chart-bar w-full bg-slate-200 rounded-t-[3px] h-12"
                style={{ transitionDelay: '180ms' }}
              />
              <div className="w-full flex flex-col items-center relative">
                <span
                  className="chart-badge absolute -top-5 font-mono tabular-nums text-[10px] font-medium bg-[#111827] text-white px-1.5 py-0.5 rounded-[4px]"
                  style={{ transitionDelay: '280ms' }}
                >
                  46%
                </span>
                <div
                  className="chart-bar w-full bg-[#FF4D38] rounded-t-[3px] h-16"
                  style={{ transitionDelay: '240ms' }}
                />
              </div>
              <div
                className="chart-bar w-full bg-slate-200 rounded-t-[3px] h-10"
                style={{ transitionDelay: '300ms' }}
              />
              <div
                className="chart-bar w-full bg-slate-200 rounded-t-[3px] h-14"
                style={{ transitionDelay: '360ms' }}
              />
            </div>
          </div>

          {/* Workspace Members Directory Mini */}
          <div
            id="card4Employees"
            className={`bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-900/[0.06] space-y-2.5 ${
              isFlipped ? 'order-1' : 'order-2'
            }`}
          >
            <div className="flex items-center justify-between text-[12px] font-medium text-[#111827] pb-1.5 border-b border-slate-900/[0.06]">
              <span>{t.features.card4.tab2}</span>
              <span className="text-[11px] text-[#6B7487]">See all</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-medium text-[#4B5565] overflow-x-auto">
              <span className="bg-[#111827] text-white px-2 py-0.5 rounded-[4px] whitespace-nowrap">
                Engineering Dept.
              </span>
              <span className="bg-white px-2 py-0.5 rounded-[4px] border border-slate-900/[0.08] whitespace-nowrap">
                Product Ops
              </span>
              <span className="bg-white px-2 py-0.5 rounded-[4px] border border-slate-900/[0.08] whitespace-nowrap">
                Business
              </span>
            </div>
            <div className="space-y-2 pt-0.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden relative shrink-0">
                    <Image
                      src="/avatars/hero2_1.webp"
                      alt="Willem Gray"
                      fill
                      sizes="24px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-[#111827] leading-tight">
                      Willem Gray
                    </p>
                    <p className="text-[10px] text-[#6B7487]">Visual Director</p>
                  </div>
                </div>
                <MailIcon className="w-3.5 h-3.5 text-[#6B7487]" />
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden relative shrink-0">
                    <Image
                      src="/avatars/hero2_7.webp"
                      alt="Dimitri Ryabell"
                      fill
                      sizes="24px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-[#111827] leading-tight">
                      Dimitri Ryabell
                    </p>
                    <p className="text-[10px] text-[#6B7487]">PM/BA</p>
                  </div>
                </div>
                <MailIcon className="w-3.5 h-3.5 text-[#6B7487]" />
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden relative shrink-0">
                    <Image
                      src="/avatars/hero2_3.webp"
                      alt="Olivia Klyver"
                      fill
                      sizes="24px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-[#111827] leading-tight">
                      Olivia Klyver
                    </p>
                    <p className="text-[10px] text-[#6B7487]">PM/BA</p>
                  </div>
                </div>
                <MailIcon className="w-3.5 h-3.5 text-[#6B7487]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[18px] font-semibold text-[#111827] mb-1.5">{t.features.card4.title}</h3>
        <p className="text-[14px] text-[#4B5565] leading-relaxed">
          {t.features.card4.desc}
        </p>
      </div>
    </div>
  );
}
