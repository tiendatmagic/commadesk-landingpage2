'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';
import { FlagVN, FlagUS } from '@/components/ui/FlagIcons';
import { ChevronDownIcon, CheckIcon } from '@/components/ui/UIIcons';

interface LanguageSelectorProps {
  variant?: 'pill' | 'minimal';
}

export function LanguageSelector({ variant = 'pill' }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const languages = [
    {
      code: 'en' as Language,
      label: 'English',
      Flag: FlagUS,
      short: 'EN',
    },
    {
      code: 'vi' as Language,
      label: 'Tiếng Việt',
      Flag: FlagVN,
      short: 'VI',
    },
  ];

  const current = languages.find((l) => l.code === language) || languages[0];
  const CurrentFlag = current.Flag;

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
        className={`flex items-center gap-1.5 transition-colors cursor-pointer h-9 ${
          variant === 'pill'
            ? 'px-2.5 rounded-[10px] bg-[#ECEFF4] hover:bg-slate-200/80 text-[#111827] text-[13px] font-medium border border-slate-900/[0.08]'
            : 'text-[#4B5565] hover:text-[#111827] text-[13px] font-medium px-2'
        }`}
      >
        <span className="inline-flex items-center justify-center w-4.5 h-3 rounded-[2px] overflow-hidden border border-black/10 shrink-0">
          <CurrentFlag className="w-full h-full object-cover" />
        </span>
        <span className="font-mono text-[12px] font-medium text-[#111827]">
          {current.short}
        </span>
        <ChevronDownIcon
          className={`w-3.5 h-3.5 text-[#6B7487] transition-transform duration-150 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            onTouchStart={() => setIsOpen(false)}
          />

          <div
            className="absolute right-0 mt-2 w-44 rounded-xl bg-white border border-slate-900/[0.08] shadow-[0_8px_24px_rgba(17,24,39,0.08)] py-1.5 z-50 origin-top-right overflow-hidden"
            role="menu"
          >
            <div className="px-3 py-1.5 text-[12px] font-medium text-[#6B7487] border-b border-slate-900/[0.06] mb-1">
              Language
            </div>
            {languages.map((item) => {
              const isSelected = item.code === language;
              const ItemFlag = item.Flag;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleSelect(item.code)}
                  className={`w-full text-left px-3 py-2 flex items-center justify-between text-[13px] font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#ECEFF4] text-[#111827]'
                      : 'text-[#4B5565] hover:bg-[#F5F7FA] hover:text-[#111827]'
                  }`}
                  role="menuitem"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center w-5 h-3.5 rounded-[2px] overflow-hidden border border-black/10 shrink-0">
                      <ItemFlag className="w-full h-full object-cover" />
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {isSelected && (
                    <CheckIcon className="w-4 h-4 text-[#FF4D38] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
