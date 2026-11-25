'use client';

import React from 'react';
import Image from 'next/image';
import { TestimonialItem } from '@/data/testimonials';
import { useLanguage } from '@/i18n/LanguageContext';
import { StarIcon } from '@/components/ui/UIIcons';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  id: string;
  statusClass: string;
}

export function TestimonialCard({ testimonial, id, statusClass }: TestimonialCardProps) {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const nameText = isVi ? (testimonial.nameVi || testimonial.name) : (testimonial.nameEn || testimonial.name);
  const roleText = isVi ? (testimonial.roleVi || testimonial.role) : (testimonial.roleEn || testimonial.role);
  const companyText = isVi ? (testimonial.companyVi || testimonial.company) : (testimonial.companyEn || testimonial.company);
  const quoteText = isVi ? (testimonial.quoteVi || testimonial.quote) : (testimonial.quoteEn || testimonial.quote);

  return (
    <div
      id={id}
      className={`testi-card-item ${statusClass} absolute left-1/2 top-1/2 z-20 w-[90vw] max-w-[340px] sm:max-w-[375px] md:max-w-[390px] bg-white rounded-2xl p-6 sm:p-7 text-center shadow-[0_8px_24px_rgba(17,24,39,0.08)] border border-slate-900/[0.08] select-text cursor-default`}
      onMouseUp={(e) => {
        const selection = window.getSelection();
        if (selection && selection.toString().trim().length > 0) {
          e.stopPropagation();
        }
      }}
    >
      <div className="w-16 h-16 mx-auto rounded-xl p-0.5 bg-white shadow-[0_1px_2px_rgba(17,24,39,0.06)] border border-slate-900/[0.08] overflow-hidden mb-3 relative">
        <Image
          src={testimonial.avatar}
          alt={nameText}
          fill
          sizes="64px"
          className="object-cover rounded-[10px]"
        />
      </div>

      <h4 className="text-[20px] font-semibold text-[#111827] tracking-[-0.01em] select-text cursor-text">
        {nameText}
      </h4>

      <p className="text-[13px] text-[#4B5565] font-normal mt-0.5 select-text cursor-text">
        {roleText}
      </p>

      {companyText && (
        <div className="mt-1.5 inline-flex items-center justify-center max-w-full">
          <span className="text-[12px] font-medium text-[#4B5565] bg-[#F5F7FA] border border-slate-900/[0.08] px-2.5 py-0.5 rounded-[6px] truncate select-text cursor-text">
            {companyText}
          </span>
        </div>
      )}

      <div className="flex items-center justify-center gap-1 my-3 text-amber-500 select-text">
        <StarIcon className="w-3.5 h-3.5 text-amber-500" />
        <StarIcon className="w-3.5 h-3.5 text-amber-500" />
        <StarIcon className="w-3.5 h-3.5 text-amber-500" />
        <StarIcon className="w-3.5 h-3.5 text-amber-500" />
        <StarIcon className="w-3.5 h-3.5 text-amber-500" />
        <span className="font-mono tabular-nums text-[12px] font-medium text-[#111827] ml-1.5">
          {testimonial.rating.toFixed(1)}
        </span>
      </div>

      <p className="text-[14px] text-[#4B5565] leading-relaxed font-normal select-text cursor-text line-clamp-4 sm:line-clamp-none">
        {quoteText}
      </p>
    </div>
  );
}
