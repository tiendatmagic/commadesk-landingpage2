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
        className="group flex items-start gap-2.5 p-2 rounded-lg hover:bg-white text-[#4B5565] hover:text-[#111827] transition-colors border border-transparent hover:border-slate-900/[0.06] text-left w-full"
      >
        <div className="w-7 h-7 rounded-md bg-white border border-slate-900/[0.08] text-[#6B7487] group-hover:text-[#FF4D38] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
          <ModuleIcon name={item.iconName} className="w-3.5 h-3.5" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="block text-[13px] font-medium text-[#111827] group-hover:text-[#FF4D38] truncate transition-colors">
            {item.title}
          </span>
          {description && (
            <p className="text-[12px] text-[#6B7487] line-clamp-2 mt-0.5 leading-snug break-words">
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
      className="group flex items-start gap-3 p-2 rounded-xl hover:bg-[#F5F7FA] border border-transparent hover:border-slate-900/[0.06] transition-colors text-left w-full"
    >
      <div className="w-8 h-8 rounded-lg bg-[#F5F7FA] group-hover:bg-white border border-slate-900/[0.08] text-[#4B5565] group-hover:text-[#FF4D38] flex items-center justify-center shrink-0 transition-colors mt-0.5">
        <ModuleIcon name={item.iconName} className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 min-w-0">
          <span className="text-[13.5px] font-medium text-[#111827] group-hover:text-[#FF4D38] transition-colors truncate">
            {item.title}
          </span>
        </div>
        {description && (
          <p className="text-[12px] text-[#6B7487] line-clamp-2 mt-0.5 leading-snug break-words">
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
      className={`w-full group flex items-center justify-between px-3 py-2 rounded-xl transition-colors cursor-pointer ${
        isOpen
          ? 'bg-[#F5F7FA] text-[#111827] font-medium'
          : 'text-[#4B5565] hover:bg-[#F5F7FA] hover:text-[#111827] font-medium'
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-8 h-8 rounded-lg bg-[#F5F7FA] text-[#4B5565] flex items-center justify-center shrink-0 border border-slate-900/[0.08]">
          {renderIcon()}
        </div>
        <span className="text-[14px]">{title}</span>
        {typeof count === 'number' && (
          <span className="font-mono tabular-nums text-[12px] text-[#6B7487]">
            ({count})
          </span>
        )}
      </div>
      <ChevronDownIcon
        className={`w-4 h-4 text-[#6B7487] transition-transform duration-150 ${
          isOpen ? 'rotate-180 text-[#111827]' : ''
        }`}
      />
    </button>
  );
}
