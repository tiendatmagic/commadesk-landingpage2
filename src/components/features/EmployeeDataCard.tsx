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
      }, 300);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="scroll-fade-up delay-250 md:col-span-2 bg-[#FAFAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
      {/* Icon tài liệu đỏ cam góc trái */}
      <div className="absolute top-6 left-6 w-10 h-10 rounded-2xl bg-white border border-slate-100 shadow-md flex items-center justify-center text-red-500 z-20">
        <FileTextIcon className="w-5 h-5" />
      </div>

      {/* Graphic Grid: Slider trượt luân phiên */}
      <div className="relative bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 mb-6 pl-14 sm:pl-16 shadow-xs overflow-hidden">
        <div
          id="card4SlideTrack"
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 transition-all duration-500 ease-in-out"
          style={{
            opacity: animating ? 0.4 : 1,
            transform: animating
              ? isFlipped
                ? 'translateX(12px)'
                : 'translateX(-12px)'
              : 'translateX(0)',
          }}
        >
          {/* Sprint Completion Bar Chart Mini */}
          <div
            id="card4Training"
            className={`bg-slate-50/80 rounded-2xl p-3 border border-slate-100 flex flex-col justify-between ${
              isFlipped ? 'order-2' : 'order-1'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold text-gray-700">
              <span>{t.features.card4.tab1}</span>
              <div className="flex items-center gap-1 text-[9px]">
                <span className="text-gray-400">Daily</span>
                <span className="text-gray-400">Weekly</span>
                <span className="bg-slate-800 text-white px-1.5 py-0.5 rounded-full">Monthly</span>
              </div>
            </div>
            <div className="h-20 flex items-end justify-between gap-1.5 pt-2">
              <div className="flex flex-col justify-between h-full text-[8px] text-gray-300 pr-0.5">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
              </div>
              <div
                className="chart-bar w-full bg-slate-200 rounded-t-md h-8"
                style={{ transitionDelay: '200ms' }}
              />
              <div
                className="chart-bar w-full bg-slate-200 rounded-t-md h-12"
                style={{ transitionDelay: '300ms' }}
              />
              <div className="w-full flex flex-col items-center relative">
                <span
                  className="chart-badge absolute -top-5 text-[8px] font-bold bg-slate-800 text-white px-1 py-0.2 rounded-xs"
                  style={{ transitionDelay: '500ms' }}
                >
                  46%
                </span>
                <div
                  className="chart-bar w-full bg-gradient-to-t from-indigo-500 to-indigo-600 rounded-t-md h-16 shadow-xs"
                  style={{ transitionDelay: '450ms' }}
                />
              </div>
              <div
                className="chart-bar w-full bg-slate-200 rounded-t-md h-10"
                style={{ transitionDelay: '550ms' }}
              />
              <div
                className="chart-bar w-full bg-slate-200 rounded-t-md h-14"
                style={{ transitionDelay: '650ms' }}
              />
            </div>
          </div>

          {/* Workspace Members Directory Mini */}
          <div
            id="card4Employees"
            className={`bg-slate-50/80 rounded-2xl p-3 border border-slate-100 space-y-2 ${
              isFlipped ? 'order-1' : 'order-2'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold text-gray-700 pb-1 border-b border-slate-100">
              <span>{t.features.card4.tab2}</span>
              <span className="text-[10px] text-gray-400 font-normal">See all</span>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] font-semibold text-gray-500 overflow-x-auto">
              <span className="bg-slate-800 text-white px-2 py-0.5 rounded-full whitespace-nowrap">
                Engineering Dept.
              </span>
              <span className="bg-white px-2 py-0.5 rounded-full border border-slate-200 whitespace-nowrap">
                Product Ops
              </span>
              <span className="bg-white px-2 py-0.5 rounded-full border border-slate-200 whitespace-nowrap">
                Business
              </span>
            </div>
            <div className="space-y-1.5 pt-1">
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
                    <p className="text-[11px] font-semibold text-gray-800 leading-tight">
                      Willem Gray
                    </p>
                    <p className="text-[9px] text-gray-400">Visual Director</p>
                  </div>
                </div>
                <MailIcon className="w-3.5 h-3.5 text-slate-400" />
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
                    <p className="text-[11px] font-semibold text-gray-800 leading-tight">
                      Dimitri Ryabell
                    </p>
                    <p className="text-[9px] text-gray-400">PM/BA</p>
                  </div>
                </div>
                <MailIcon className="w-3.5 h-3.5 text-slate-400" />
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
                    <p className="text-[11px] font-semibold text-gray-800 leading-tight">
                      Olivia Klyver
                    </p>
                    <p className="text-[9px] text-gray-400">PM/BA</p>
                  </div>
                </div>
                <MailIcon className="w-3.5 h-3.5 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t.features.card4.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {t.features.card4.desc}
        </p>
      </div>
    </div>
  );
}
