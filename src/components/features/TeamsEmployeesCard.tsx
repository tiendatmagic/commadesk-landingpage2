'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';
import { UsersIcon } from '@/components/ui/UIIcons';

const ORBIT_AVATARS = [
  { src: '/avatars/hero2_1.webp', pos: 'top-0 left-1/2 -translate-x-1/2' },
  { src: '/avatars/hero2_2.webp', pos: 'top-[7%] right-[25%]' },
  { src: '/avatars/hero2_3.webp', pos: 'top-[25%] right-[7%]' },
  { src: '/avatars/hero2_4.webp', pos: 'top-1/2 right-0 -translate-y-1/2' },
  { src: '/avatars/hero2_5.webp', pos: 'bottom-[25%] right-[7%]' },
  { src: '/avatars/hero2_6.webp', pos: 'bottom-[7%] right-[25%]' },
  { src: '/avatars/hero2_7.webp', pos: 'bottom-0 left-1/2 -translate-x-1/2' },
  { src: '/avatars/hero2_8.webp', pos: 'bottom-[7%] left-[25%]' },
  { src: '/avatars/hero1_man.webp', pos: 'bottom-[25%] left-[7%]' },
  { src: '/avatars/hero1_woman.webp', pos: 'top-1/2 left-0 -translate-y-1/2' },
  { src: '/avatars/sarah_mitchell.webp', pos: 'top-[25%] left-[7%]' },
  { src: '/avatars/james_carter.webp', pos: 'top-[7%] left-[25%]' },
];

export function TeamsEmployeesCard() {
  const { t } = useLanguage();

  return (
    <div className="scroll-fade-up delay-300 bg-[#F8FAFC] rounded-2xl p-6 border border-slate-900/[0.08] flex flex-col justify-between">
      {/* Graphic: 12 Avatars Orbit Ring */}
      <div className="bg-white rounded-xl p-6 border border-slate-900/[0.08] mb-6 flex items-center justify-center min-h-[176px] relative overflow-hidden shadow-[0_1px_2px_rgba(17,24,39,0.04)]">
        <div className="w-11 h-11 rounded-full bg-white shadow-[0_1px_2px_rgba(17,24,39,0.06)] border border-slate-900/[0.08] flex items-center justify-center z-20 text-[#111827]">
          <UsersIcon className="w-5 h-5" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-slow">
          <div className="w-36 h-36 rounded-full relative">
            {ORBIT_AVATARS.map((av, idx) => (
              <div
                key={idx}
                className={`absolute ${av.pos} w-6 h-6 rounded-full border border-white shadow-[0_1px_2px_rgba(17,24,39,0.08)] overflow-hidden`}
              >
                <Image
                  src={av.src}
                  alt={`Team member ${idx + 1}`}
                  fill
                  sizes="24px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[18px] font-semibold text-[#111827] mb-1.5">{t.features.card5.title}</h3>
        <p className="text-[14px] text-[#4B5565] leading-relaxed">
          {t.features.card5.desc}
        </p>
      </div>
    </div>
  );
}
