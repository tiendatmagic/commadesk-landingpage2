'use client';

import React from 'react';
import Image from 'next/image';
import { TestimonialItem } from '@/data/testimonials';
import { useLanguage } from '@/i18n/LanguageContext';
import { StarIcon } from '@/components/ui/UIIcons';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  id: string;
  statusClass: string; // 'is-active' | 'is-left' | 'is-right'
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
      className={`testi-card-item ${statusClass} absolute left-1/2 top-1/2 z-20 w-[88vw] max-w-[350px] sm:max-w-[375px] md:max-w-[390px] bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-7 text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-200/80 transition-all duration-700 will-change-transform select-text cursor-default`}
      onMouseUp={(e) => {
        const selection = window.getSelection();
        if (selection && selection.toString().trim().length > 0) {
          e.stopPropagation();
        }
      }}
    >
      <div className="w-16 h-16 sm:w-18 sm:h-18 mx-auto rounded-2xl p-0.5 bg-white shadow-md border border-slate-100 overflow-hidden mb-3 relative">
        <Image
          src={testimonial.avatar}
          alt={nameText}
          fill
          sizes="72px"
          className="object-cover rounded-xl"
        />
      </div>

      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight select-text cursor-text">
        {nameText}
      </h4>

      <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5 select-text cursor-text">
        {roleText}
      </p>

      {companyText && (
        <div className="mt-1 inline-flex items-center justify-center max-w-full">
          <span className="text-[10.5px] sm:text-[11.5px] font-semibold text-[#7C3AED] bg-purple-50/80 border border-purple-200/60 px-2.5 py-0.5 rounded-full truncate select-text cursor-text">
            {companyText}
          </span>
        </div>
      )}

      <div className="flex items-center justify-center gap-1 my-2.5 text-amber-400 select-text">
        <StarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
        <StarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
        <StarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
        <StarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
        <StarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
        <span className="text-xs sm:text-sm font-bold text-gray-800 ml-1.5">
          {testimonial.rating.toFixed(1)}
        </span>
      </div>

      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal select-text cursor-text line-clamp-4 sm:line-clamp-none">
        {quoteText}
      </p>
    </div>
  );
}
