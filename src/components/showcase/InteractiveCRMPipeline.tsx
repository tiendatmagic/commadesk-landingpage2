'use client';

import React, { useState, useEffect } from 'react';
import {
  ZapIcon,
  MailIcon,
  MessageSquareIcon,
  GlobeIcon,
} from '@/components/ui/UIIcons';
import { ShowcaseCard } from '@/components/ui/ShowcaseCard';

interface Props {
  isVi?: boolean;
}

export function InteractiveCRMPipeline({ isVi }: Props) {
  const [slaSeconds, setSlaSeconds] = useState<number>(3542);
  const [activeStage, setActiveStage] = useState<number>(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlaSeconds((prev) => (prev > 0 ? prev - 1 : 3600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatSLA = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  return (
    <ShowcaseCard
      title={isVi ? 'CRM đa kênh & Kiểm soát SLA' : 'Omnichannel CRM & SLA Timer'}
      headerRight={
        <span className="font-mono tabular-nums text-[12px] text-[#6B7487]">
          ITIL SLA: 99.8%
        </span>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Omnichannel Ingestion + Pipeline */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-900/[0.08] p-5 space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-semibold text-[#111827]">
              {isVi ? 'Kênh tiếp nhận yêu cầu' : 'Incoming support channels'}
            </span>
            <span className="font-mono text-[12px] text-[#16A34A] font-medium">
              {isVi ? 'Hàng đợi trực tuyến' : 'Live queue'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { name: 'REST API', icon: ZapIcon, count: '14 req/s' },
              { name: 'Email ITIL', icon: MailIcon, count: '8 tk/min' },
              { name: 'Team chat', icon: MessageSquareIcon, count: '26 msg/s' },
              { name: 'Web forms', icon: GlobeIcon, count: '5 sub/min' },
            ].map((c, i) => {
              const IconComponent = c.icon;
              return (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.06] text-center"
                >
                  <div className="w-8 h-8 mx-auto rounded-lg bg-white border border-slate-900/[0.08] text-[#111827] flex items-center justify-center mb-2">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <p className="text-[12.5px] font-medium text-[#111827]">{c.name}</p>
                  <p className="text-[11px] text-[#6B7487] font-mono tabular-nums">{c.count}</p>
                </div>
              );
            })}
          </div>

          {/* B2B Sales Funnel Stages */}
          <div className="pt-3 border-t border-slate-900/[0.06]">
            <p className="text-[12.5px] font-medium text-[#4B5565] mb-2.5">
              {isVi ? 'Phễu cơ hội B2B:' : 'B2B enterprise pipeline stages:'}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-[#F5F7FA] rounded-xl border border-slate-900/[0.06]">
              {[
                { id: 1, label: isVi ? 'Tiềm năng' : 'Lead', val: '$120K' },
                { id: 2, label: isVi ? 'Đề xuất' : 'Proposal', val: '$340K' },
                { id: 3, label: isVi ? 'Đàm phán' : 'Negotiation', val: '$510K' },
                { id: 4, label: isVi ? 'Thành công' : 'Won', val: '$890K' },
              ].map((s) => (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => setActiveStage(s.id)}
                  className={`py-2 px-1 text-center rounded-lg transition-colors cursor-pointer ${
                    activeStage === s.id
                      ? 'bg-white shadow-[0_1px_2px_rgba(17,24,39,0.06)] text-[#111827] border border-slate-900/[0.08]'
                      : 'text-[#6B7487] hover:text-[#111827]'
                  }`}
                >
                  <p className="text-[11px] font-medium">{s.label}</p>
                  <p className="text-[13px] font-semibold text-[#FF4D38] font-mono tabular-nums mt-0.5">
                    {s.val}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ITIL SLA Countdown */}
        <div className="lg:col-span-5">
          <div className="h-full p-5 rounded-xl bg-white border border-slate-900/[0.08] flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-900/[0.06]">
              <span className="text-[13px] font-semibold text-[#111827]">
                {isVi ? 'Đồng hồ kiểm soát SLA' : 'SLA response timer'}
              </span>
              <span className="font-mono text-[11px] font-medium text-[#DC2626]">
                {isVi ? 'Ưu tiên P1' : 'Priority P1'}
              </span>
            </div>

            <div className="p-5 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.06] text-center">
              <span className="text-[12px] font-medium text-[#4B5565]">
                {isVi ? 'Thời gian còn lại trước ngưỡng SLA' : 'Time remaining to SLA breach'}
              </span>
              <p className="text-[32px] font-semibold text-[#111827] font-mono tabular-nums tracking-tight my-1.5">
                {formatSLA(slaSeconds)}
              </p>
              <div className="w-full bg-slate-200/80 h-1.5 rounded-full overflow-hidden mt-3">
                <div
                  className="bg-[#FF4D38] h-full rounded-full transition-[width] duration-1000"
                  style={{ width: `${(slaSeconds / 3600) * 100}%` }}
                />
              </div>
            </div>

            <p className="text-[12px] text-[#6B7487] text-center leading-relaxed">
              {isVi
                ? 'Tự động cảnh báo leo thang tới quản lý kỹ thuật khi thời gian còn dưới 15 phút.'
                : 'Automated escalation notifies engineering leads when timer drops under 15 minutes.'}
            </p>
          </div>
        </div>
      </div>
    </ShowcaseCard>
  );
}
