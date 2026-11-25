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
      className="canvas-card scroll-mt-24 bg-white rounded-2xl sm:rounded-3xl shadow-[0_1px_2px_rgba(17,24,39,0.05)] border border-slate-900/[0.08] overflow-hidden relative pt-14 sm:pt-20 pb-14 sm:pb-20 px-4 sm:px-8 lg:px-12"
    >
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
        <p className="text-[13px] font-medium text-[#6B7487] mb-2">
          {badge}
        </p>
        <TextBlurWipe
          as="h2"
          className="text-[28px] sm:text-4xl font-semibold text-[#111827] tracking-[-0.02em] leading-[1.12]"
        >
          {title}
        </TextBlurWipe>
        <p className="mt-3 text-[14px] sm:text-[16px] text-[#4B5565] max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-[1360px] mx-auto">
        {features.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl bg-[#F5F7FA] border border-slate-900/[0.08] p-6 hover:bg-white hover:border-slate-900/[0.15] transition-colors duration-150 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[12px] font-medium text-[#6B7487]">
                  {item.tag}
                </span>
                {item.icon && (
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-900/[0.08] flex items-center justify-center text-[#4B5565] group-hover:text-[#FF4D38] transition-colors">
                    {item.icon}
                  </div>
                )}
              </div>

              <h3 className="text-[18px] font-semibold text-[#111827] tracking-[-0.01em]">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] text-[#4B5565] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            {item.metricBadge && (
              <div className="mt-5 pt-3.5 border-t border-slate-900/[0.06] flex items-baseline justify-between">
                <span className="text-[12px] text-[#6B7487] font-normal">
                  {item.metricBadge.label}
                </span>
                <span className="font-mono tabular-nums text-[12.5px] font-medium text-[#111827]">
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
