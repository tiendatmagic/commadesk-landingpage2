'use client';

import React, { useState } from 'react';
import { ZapIcon } from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface Props {
  isVi?: boolean;
}

export function InteractiveKanbanFlow({ isVi }: Props) {
  const [activeTab, setActiveTab] = useState<'sprint' | 'gantt'>('sprint');
  const [activeTask, setActiveTask] = useState<number>(2);

  const tabs = [
    { id: 'sprint' as const, label: isVi ? 'Bảng Sprint' : 'Sprint board' },
    { id: 'gantt' as const, label: isVi ? 'Lộ trình Gantt' : 'Gantt timeline' },
  ];

  const columns = [
    {
      id: 1,
      title: isVi ? 'Hàng đợi' : 'Backlog',
      count: isVi ? '4 việc' : '4 tasks',
      accent: 'bg-slate-400',
      pct: 25,
    },
    {
      id: 2,
      title: isVi ? 'Đang làm' : 'In progress',
      count: isVi ? '6 việc' : '6 tasks',
      accent: 'bg-[#FF4D38]',
      pct: 60,
    },
    {
      id: 3,
      title: isVi ? 'Đang duyệt' : 'In review',
      count: isVi ? '3 việc' : '3 tasks',
      accent: 'bg-amber-500',
      pct: 85,
    },
    {
      id: 4,
      title: isVi ? 'Hoàn thành' : 'Done',
      count: isVi ? '12 việc' : '12 tasks',
      accent: 'bg-[#16A34A]',
      pct: 100,
    },
  ];

  const ganttRows = [
    {
      label: isVi ? 'Q1: Chuẩn hóa quy trình Kanban đa phòng ban' : 'Q1: Multi-department Kanban rollout',
      progress: '90%',
      width: '90%',
      highlight: false,
    },
    {
      label: isVi ? 'Q2: Áp dụng phân quyền dự án theo chi nhánh' : 'Q2: Branch-scoped project permissions',
      progress: '75%',
      width: '75%',
      highlight: true,
    },
    {
      label: isVi ? 'Q3: Đồng bộ nhật ký giờ làm với bảng công' : 'Q3: Time log sync with payroll',
      progress: '55%',
      width: '55%',
      highlight: false,
    },
    {
      label: isVi ? 'Q4: Nghiệm thu tiến độ và đối soát ngân sách' : 'Q4: Milestone sign-off & budget audit',
      progress: '35%',
      width: '35%',
      highlight: false,
    },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'Bảng Kanban & Tiến độ dự án' : 'Sprint Kanban & Project Timeline'}
      headerRight={
        <ShowcaseTabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      }
    >
      {activeTab === 'sprint' && (
        <div className="w-full bg-white rounded-xl p-4 sm:p-6 border border-slate-900/[0.08]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {columns.map((col) => {
              const isSelected = activeTask === col.id;
              return (
                <button
                  type="button"
                  key={col.id}
                  onClick={() => setActiveTask(col.id)}
                  className={`p-4 rounded-xl border text-left transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? 'border-[#FF4D38] bg-[#FFF8F7]'
                      : 'border-slate-900/[0.08] hover:border-slate-900/[0.16] bg-[#F5F7FA]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-2 h-2 rounded-full ${col.accent}`} />
                    <p className="text-[13px] font-semibold text-[#111827]">{col.title}</p>
                  </div>
                  <p className="font-mono tabular-nums text-[12px] text-[#6B7487] pl-4">
                    {col.count}
                  </p>
                  <div className="w-full bg-slate-200/80 h-1.5 rounded-full overflow-hidden mt-3">
                    <div
                      className={`h-full rounded-full transition-[width] duration-300 ${
                        isSelected ? 'bg-[#FF4D38]' : 'bg-slate-400'
                      }`}
                      style={{ width: `${col.pct}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.08] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white border border-slate-900/[0.08] text-[#111827] flex items-center justify-center shrink-0">
                <ZapIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[13px] font-medium text-[#111827]">
                  {isVi ? 'Đồng bộ trạng thái thẻ theo thời gian thực' : 'Real-time Kanban status sync'}
                </p>
                <p className="text-[12px] text-[#6B7487]">
                  {isVi
                    ? 'Cập nhật tức thì tới toàn bộ thành viên tham gia dự án'
                    : 'Instant board updates across assigned project members'}
                </p>
              </div>
            </div>
            <span className="font-mono tabular-nums text-[12px] font-medium text-[#16A34A]">
              +17% vs last week
            </span>
          </div>
        </div>
      )}

      {activeTab === 'gantt' && (
        <div className="w-full bg-white rounded-xl p-4 sm:p-6 border border-slate-900/[0.08]">
          <div className="space-y-3">
            {ganttRows.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.06]">
                <div className="flex justify-between gap-3 text-[13px] font-medium text-[#111827] mb-2">
                  <span>{item.label}</span>
                  <span className="font-mono tabular-nums text-[#4B5565]">{item.progress}</span>
                </div>
                <div className="w-full bg-slate-200/80 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-[width] duration-300 ${
                      item.highlight ? 'bg-[#FF4D38]' : 'bg-[#111827]'
                    }`}
                    style={{ width: item.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </ShowcaseCard>
  );
}
