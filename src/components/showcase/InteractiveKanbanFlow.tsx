'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckIcon, ZapIcon } from '@/components/ui/UIIcons';

interface Props {
  isVi?: boolean;
}

export function InteractiveKanbanFlow({ isVi }: Props) {
  const [activeTab, setActiveTab] = useState<'flow' | 'sprint' | 'gantt'>('flow');
  const [activeTask, setActiveTask] = useState<number>(1);

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100/60 p-2 sm:p-4 border border-slate-200/80">
      {/* Interactive Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2 sm:px-4 pt-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            {isVi ? 'Động Cơ Quản Trị Dự Án Quang Học' : 'Optical Project Flow Engine'}
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200/90 shadow-2xs w-full sm:w-auto justify-center sm:justify-start">
          <button
            onClick={() => setActiveTab('flow')}
            className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'flow'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-black hover:bg-slate-100'
            }`}
          >
            {isVi ? 'Luồng 3D' : '3D Flow'}
          </button>
          <button
            onClick={() => setActiveTab('sprint')}
            className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'sprint'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-black hover:bg-slate-100'
            }`}
          >
            {isVi ? 'Tiến Độ Sprint' : 'Sprint Velocity'}
          </button>
          <button
            onClick={() => setActiveTab('gantt')}
            className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'gantt'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-black hover:bg-slate-100'
            }`}
          >
            {isVi ? 'Biểu Đồ Gantt' : 'Gantt Timeline'}
          </button>
        </div>
      </div>

      {/* Main Content Showcase */}
      {activeTab === 'flow' && (
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
          <Image
            src="/showcase/tech_work_management.jpg"
            alt="Futuristic Work Management 3D Flow"
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />

          {/* Floating Badge 1: Velocity */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 animate-float bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg max-w-[200px] hidden sm:block">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-[11px] font-bold text-slate-900">
                {isVi ? 'Vận tốc Sprint 14' : 'Sprint 14 Velocity'}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-1">
              <div className="bg-emerald-500 h-full w-[84%] rounded-full animate-pulse"></div>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">
              {isVi ? '+17% Vượt tiến độ bàn giao' : '+17% Delivered ahead'}
            </span>
          </div>

          {/* Floating Badge 2: Casbin Verified */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 animate-float-delayed bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg hidden sm:block">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center font-bold text-xs">
                <CheckIcon className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900">
                  {isVi ? 'Phân quyền giao việc đa tầng' : 'Multi-Tier Task Permissions'}
                </p>
                <p className="text-[10px] text-slate-500">
                  {isVi ? 'Giao việc minh bạch chống can thiệp' : 'Tamper-proof Assignment'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'sprint' && (
        <div className="w-full bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                id: 1,
                title: isVi ? 'Hàng đợi (Backlog)' : 'Backlog (Epic)',
                count: isVi ? '4 Nhiệm vụ' : '4 Tasks',
                color: 'border-l-sky-500',
                pct: 25,
              },
              {
                id: 2,
                title: isVi ? 'Đang thực hiện' : 'In Progress',
                count: isVi ? '6 Nhiệm vụ' : '6 Tasks',
                color: 'border-l-amber-500',
                pct: 60,
              },
              {
                id: 3,
                title: isVi ? 'Kiểm tra & Review' : 'Code Review',
                count: isVi ? '3 Nhiệm vụ' : '3 Tasks',
                color: 'border-l-purple-500',
                pct: 85,
              },
              {
                id: 4,
                title: isVi ? 'Đã xong & Nghiệm thu' : 'Done & Verified',
                count: isVi ? '12 Nhiệm vụ' : '12 Tasks',
                color: 'border-l-emerald-500',
                pct: 100,
              },
            ].map((col) => (
              <div
                key={col.id}
                onClick={() => setActiveTask(col.id)}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  activeTask === col.id
                    ? 'border-[#FF4D38] bg-orange-50/30 shadow-md'
                    : 'border-slate-100 hover:border-slate-200 bg-slate-50/50'
                }`}
              >
                <div className={`border-l-4 ${col.color} pl-2 mb-2`}>
                  <p className="text-xs font-bold text-slate-900">{col.title}</p>
                  <p className="text-[11px] text-slate-500">{col.count}</p>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-full bg-[#FF4D38] rounded-full transition-all duration-500"
                    style={{ width: `${col.pct}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ZapIcon className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  {isVi ? 'Đồng bộ Kanban thời gian thực với WebSocket' : 'Real-time WebSocket Kanban Sync'}
                </p>
                <p className="text-[11px] text-slate-500">
                  {isVi ? 'Mọi thay đổi trạng thái thẻ được cập nhật tức thì tới toàn bộ đội ngũ' : 'Zero latency drag-and-drop state transitions across all connected clients'}
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
              60 FPS Smooth
            </span>
          </div>
        </div>
      )}

      {activeTab === 'gantt' && (
        <div className="w-full bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-md">
          <div className="space-y-3">
            {[
              {
                label: isVi ? 'Q1: Nền tảng quản trị công việc tập trung' : 'Q1: Centralized Workspace Platform',
                width: '90%',
                progress: '90%',
                color: 'bg-indigo-500',
              },
              {
                label: isVi ? 'Q2: Phân quyền đa tầng & Đa tổ chức' : 'Q2: Multi-Tier Permissions Enforcement',
                width: '75%',
                progress: '75%',
                color: 'bg-emerald-500',
              },
              {
                label: isVi ? 'Q3: Tích hợp Camera AI & Nhận diện xe' : 'Q3: Vision AI & Smart Detection',
                width: '55%',
                progress: '55%',
                color: 'bg-amber-500',
              },
              {
                label: isVi ? 'Q4: Triển khai vận hành & Kiểm toán' : 'Q4: Production Deployment & Auditing',
                width: '35%',
                progress: '35%',
                color: 'bg-rose-500',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex justify-between text-xs font-semibold text-slate-800 mb-2">
                  <span>{item.label}</span>
                  <span className="font-mono text-slate-600">{item.progress}</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-700`}
                    style={{ width: item.width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
