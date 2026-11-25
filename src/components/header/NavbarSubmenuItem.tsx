'use client';

import React from 'react';
import Link from 'next/link';
import { ModuleIcon } from '@/components/ui/ModuleIcon';
import { IconName } from '@/i18n/types';
import { ChevronDownIcon, GridIcon, LayersIcon, BookOpenIcon } from '@/components/ui/UIIcons';

export interface SubmenuItemData {
  id?: string;
  title: string;
  desc?: string;
  shortDesc?: string;
  href: string;
  iconName: IconName;
  badge?: string;
}

interface NavbarSubmenuItemProps {
  item: SubmenuItemData;
  onClick: () => void;
  variant?: 'desktop' | 'mobile';
}

export function NavbarSubmenuItem({ item, onClick, variant = 'desktop' }: NavbarSubmenuItemProps) {
  const description = item.desc || item.shortDesc;

  if (variant === 'mobile') {
    return (
      <Link
        href={item.href}
        onClick={onClick}
        className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-white text-slate-700 hover:text-gray-950 transition-colors border border-transparent hover:border-slate-200/80 text-left w-full"
      >
        <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 shadow-2xs text-[#FF4D38] group-hover:bg-[#FF4D38]/10 group-hover:border-[#FF4D38]/30 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
          <ModuleIcon name={item.iconName} className="w-3.5 h-3.5" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="block text-[13px] font-semibold text-slate-900 group-hover:text-[#FF4D38] truncate transition-colors">
            {item.title}
          </span>
          {description && (
            <p className="text-[11.5px] text-slate-500 line-clamp-2 mt-0.5 leading-snug break-words">
              {description}
            </p>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group flex items-start gap-3 p-2 sm:p-2.5 rounded-2xl hover:bg-slate-50/90 border border-transparent hover:border-slate-200/70 transition-colors text-left w-full"
    >
      <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-[#FF4D38] group-hover:bg-[#FF4D38]/10 group-hover:border-[#FF4D38]/30 flex items-center justify-center shrink-0 transition-colors mt-0.5">
        <ModuleIcon name={item.iconName} className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 min-w-0">
          <span className="text-[13.5px] font-bold text-gray-900 group-hover:text-[#FF4D38] transition-colors truncate">
            {item.title}
          </span>
        </div>
        {description && (
          <p className="text-[12px] text-slate-500 line-clamp-2 mt-0.5 leading-snug break-words">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}

interface MobileAccordionTriggerProps {
  type: 'modules' | 'solutions' | 'resources';
  title: string;
  count?: number;
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileAccordionTrigger({
  type,
  title,
  count,
  isOpen,
  onToggle,
}: MobileAccordionTriggerProps) {
  const renderIcon = () => {
    switch (type) {
      case 'modules':
        return <GridIcon className="w-4 h-4" />;
      case 'solutions':
        return <LayersIcon className="w-4 h-4" />;
      case 'resources':
        return <BookOpenIcon className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full group flex items-center justify-between px-3.5 py-2.5 rounded-2xl transition-colors cursor-pointer ${
        isOpen
          ? 'bg-slate-100/90 text-slate-950 font-bold'
          : 'text-slate-800 hover:bg-slate-100/80 active:bg-slate-200/60 font-semibold'
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200/70">
          {renderIcon()}
        </div>
        <span className="text-sm tracking-tight">{title}</span>
        {typeof count === 'number' && (
          <span className="font-mono tabular-nums text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-[#FF4D38]/10 text-[#FF4D38]">
            {count}
          </span>
        )}
      </div>
      <ChevronDownIcon
        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
          isOpen ? 'rotate-180 text-slate-900' : ''
        }`}
      />
    </button>
  );
}
