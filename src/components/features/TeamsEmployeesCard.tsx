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
    <div className="scroll-fade-up delay-300 bg-[#FAFAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      {/* Graphic: Vòng tròn 12 Avatar nhân sự xếp như mặt đồng hồ */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100 mb-6 flex items-center justify-center min-h-[170px] relative overflow-hidden shadow-xs">
        {/* Tâm: Icon 2 người màu đen teamwork */}
        <div className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center z-20 text-gray-800">
          <UsersIcon className="w-6 h-6 text-gray-800" />
        </div>

        {/* Vòng tròn 12 Avatar xoay chậm (animate-orbit-slow) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-slow">
          <div className="w-36 h-36 rounded-full relative">
            {ORBIT_AVATARS.map((av, idx) => (
              <div
                key={idx}
                className={`absolute ${av.pos} w-6 h-6 rounded-full border border-white shadow-2xs overflow-hidden`}
              >
                <Image
                  src={av.src}
                  alt={`Team avatar ${idx + 1}`}
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
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t.features.card5.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {t.features.card5.desc}
        </p>
      </div>
    </div>
  );
}
