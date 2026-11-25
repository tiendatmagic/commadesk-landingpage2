'use client';

import React from 'react';

export interface ShowcaseTabItem<T extends string = string> {
  id: T;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
}

export interface ShowcaseTabBarProps<T extends string = string> {
  tabs: ShowcaseTabItem<T>[];
  activeTab: T;
  onChange: (id: T) => void;
  className?: string;
  compact?: boolean;
}

export function ShowcaseTabBar<T extends string = string>({
  tabs,
  activeTab,
  onChange,
  className = '',
  compact = false,
}: ShowcaseTabBarProps<T>) {
  return (
    <div
      className={`flex items-center gap-1 p-1 bg-white rounded-[10px] border border-slate-900/[0.08] shadow-[0_1px_2px_rgba(17,24,39,0.04)] ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`inline-flex items-center gap-1.5 rounded-lg font-medium transition-colors duration-150 cursor-pointer ${
              compact ? 'px-2.5 py-1 text-[12px]' : 'px-3 py-1.5 text-[12.5px]'
            } ${
              isActive
                ? 'bg-[#111827] text-white'
                : 'text-[#4B5565] hover:text-[#111827] hover:bg-[#F5F7FA]'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                className={`font-mono tabular-nums text-[10px] font-medium px-1.5 py-0.5 rounded ${
                  isActive
                    ? 'bg-white/15 text-white'
                    : 'bg-[#ECEFF4] text-[#4B5565]'
                }`}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export interface ShowcaseCardProps {
  title?: string;
  liveIndicator?: boolean;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

export function ShowcaseCard({
  title,
  liveIndicator = false,
  headerRight,
  children,
  className = '',
  bodyClassName = '',
}: ShowcaseCardProps) {
  const hasHeader = Boolean(title || headerRight);

  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden bg-[#F5F7FA] p-3 sm:p-4 border border-slate-900/[0.08] text-left font-sans select-none ${className}`}
    >
      {hasHeader && (
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5 pb-3 border-b border-slate-900/[0.06]">
          {title ? (
            <div className="flex items-center gap-2">
              {liveIndicator && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              )}
              <span className="text-[13px] font-medium text-[#111827]">
                {title}
              </span>
            </div>
          ) : (
            <div />
          )}

          {headerRight && <div>{headerRight}</div>}
        </div>
      )}

      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
