'use client';

import React from 'react';
import { TextBlurWipe } from '@/components/ui/TextBlurWipe';

export interface SubpageFeatureItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  metricBadge?: {
    value: string;
    label: string;
  };
}

interface SubpageFeaturesGridProps {
  badge: string;
  title: string;
  subtitle: string;
  features: SubpageFeatureItem[];
}

export function SubpageFeaturesGrid({
  badge,
  title,
  subtitle,
  features,
}: SubpageFeaturesGridProps) {
  return (
    <section
      id="capabilities"
      className="canvas-card scroll-mt-28 bg-white rounded-[24px] sm:rounded-[44px] md:rounded-[48px] shadow-sm border border-slate-200/60 overflow-hidden relative pt-12 sm:pt-28 pb-12 sm:pb-28 px-3 sm:px-10 lg:px-14"
    >
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></span>
          {badge}
        </div>
        <TextBlurWipe
          as="h2"
          className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
        >
          {title}
        </TextBlurWipe>
        <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-[1360px] mx-auto">
        {features.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl sm:rounded-3xl bg-slate-50/70 border border-slate-200/70 p-4 sm:p-6 md:p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF4D38] bg-[#FF4D38]/10 px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
                {item.icon && (
                  <div className="w-10 h-10 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-center text-slate-700 group-hover:text-[#FF4D38] transition-colors">
                    {item.icon}
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-950 tracking-tight group-hover:text-[#FF4D38] transition-colors">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm text-gray-500 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            {item.metricBadge && (
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-baseline justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  {item.metricBadge.label}
                </span>
                <span className="text-sm font-extrabold text-slate-900 bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                  {item.metricBadge.value}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
