import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ZapIcon,
  MailIcon,
  MessageSquareIcon,
  GlobeIcon,
  CheckIcon,
} from '@/components/ui/UIIcons';

interface Props {
  isVi?: boolean;
}

export function InteractiveCRMPipeline({ isVi }: Props) {
  const [activeTab, setActiveTab] = useState<'3d-hub' | 'pipeline'>('3d-hub');
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
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100/60 p-2 sm:p-4 border border-slate-200/80">
      {/* Interactive Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2 sm:px-4 pt-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            {isVi ? 'Hệ Thống CRM Đa Kênh & Trạm Giải Quyết 3D' : '3D Omnichannel Resolution & CRM Sphere'}
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200/90 shadow-2xs w-full sm:w-auto justify-center sm:justify-start">
          <button
            onClick={() => setActiveTab('3d-hub')}
            className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-lg transition-all ${
              activeTab === '3d-hub'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-black hover:bg-slate-100'
            }`}
          >
            {isVi ? 'Trạm Xử Lý 3D' : '3D Resolution Hub'}
          </button>
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'pipeline'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-black hover:bg-slate-100'
            }`}
          >
            {isVi ? 'Phễu & Đồng Hồ SLA' : 'Funnel & SLA Engine'}
          </button>
        </div>
      </div>

      {/* Tab 1: 3D Omnichannel Resolution Sphere Image Showcase */}
      {activeTab === '3d-hub' && (
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
          <Image
            src="/showcase/tech_crm_helpdesk.webp"
            alt="Futuristic 3D Omnichannel CRM and Helpdesk Resolution Sphere"
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />

          {/* Floating Badge 1: Omnichannel Resolution */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 animate-float bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg max-w-[210px] hidden sm:block">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-[11px] font-bold text-slate-900">
                {isVi ? 'Hội Tụ Đa Kênh Tức Thì' : 'Omnichannel Ingestion'}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-1">
              <div className="bg-emerald-500 h-full w-[94%] rounded-full animate-pulse"></div>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">
              {isVi ? 'Email, Chat, Hotline & Web Portal' : 'Email, Chat, Voice & Portal Synced'}
            </span>
          </div>

          {/* Floating Badge 2: SLA Guarantee */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 animate-float-delayed bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg hidden sm:block">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center font-bold text-xs">
                <CheckIcon className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900">
                  {isVi ? 'Cam Kết SLA ITIL 99.8%' : 'ITIL SLA Compliance 99.8%'}
                </p>
                <p className="text-[10px] text-teal-600 font-semibold">
                  {isVi ? 'Cảnh báo leo thang thông minh' : 'Smart Auto-Escalation Protocol'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Existing Interactive Funnel & SLA Engine */}
      {activeTab === 'pipeline' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Col: Omnichannel Data Ingestion Stream Visual */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-7 shadow-sm space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping"></span>
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                {isVi ? 'Hội Tụ Kênh Đa Nền Tảng (Omnichannel Hub)' : 'Omnichannel Ingestion Stream'}
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
              {isVi ? 'Hàng đợi trực tuyến' : 'Live Queue'}
            </span>
          </div>

          {/* Incoming Channels Flow Cards with Optical Stream Lines */}
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 relative z-10">
              {[
                { name: 'REST API', icon: ZapIcon, color: 'from-amber-400 to-orange-500', count: '14 req/s' },
                { name: 'Email ITIL', icon: MailIcon, color: 'from-blue-400 to-indigo-500', count: '8 tk/min' },
                { name: 'Team Chat', icon: MessageSquareIcon, color: 'from-emerald-400 to-teal-500', count: '26 msg/s' },
                { name: 'Web Forms', icon: GlobeIcon, color: 'from-purple-400 to-pink-500', count: '5 sub/min' },
              ].map((c, i) => {
                const IconComponent = c.icon;
                return (
                  <div key={i} className="p-3 rounded-xl bg-slate-50/90 border border-slate-200/70 text-center hover:bg-white hover:shadow-md transition-all group">
                    <div className={`w-8 h-8 mx-auto rounded-lg bg-gradient-to-tr ${c.color} text-white flex items-center justify-center shadow-xs mb-1.5 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-xs font-bold text-slate-800">{c.name}</p>
                    <p className="text-[10px] text-slate-500 font-mono">{c.count}</p>
                  </div>
                );
              })}
            </div>
            {/* Optical Stream Flow Bar */}
            <div className="mt-2.5 h-1 w-full bg-slate-100 rounded-full overflow-hidden relative">
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-shimmer" style={{ animationDuration: '2s' }}></div>
            </div>
          </div>

          {/* Interactive B2B Sales Funnel Stages */}
          <div className="pt-2 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-700 mb-2">
              {isVi ? 'Phễu Cơ Hội Doanh Nghiệp (B2B Deal Pipeline):' : 'B2B Enterprise Pipeline Stages:'}
            </p>
            <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 rounded-xl">
              {[
                { id: 1, label: isVi ? 'Tiềm năng' : 'Lead', val: '$120K' },
                { id: 2, label: isVi ? 'Đề xuất' : 'Proposal', val: '$340K' },
                { id: 3, label: isVi ? 'Đàm phán' : 'Negotiation', val: '$510K' },
                { id: 4, label: isVi ? 'Thành công' : 'Won Deal', val: '$890K' },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStage(s.id)}
                  className={`py-2 px-1 text-center rounded-lg transition-all ${
                    activeStage === s.id
                      ? 'bg-white shadow-xs text-slate-900 border border-slate-200'
                      : 'text-slate-500 hover:text-black'
                  }`}
                >
                  <p className="text-[10px] uppercase font-bold">{s.label}</p>
                  <p className="text-xs font-black text-[#FF4D38] font-mono">{s.val}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: ITIL Ticket SLA Breaches Countdown */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                {isVi ? 'Đồng Hồ Kiểm Soát SLA' : 'Real-Time SLA Engine'}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700">
                {isVi ? 'MỨC KHẨN CẤP' : 'CRITICAL TIER'}
              </span>
            </div>

            {/* Countdown Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-tr from-rose-50 to-orange-50 border border-rose-200/60 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700">
                {isVi ? 'Thời Gian Còn Lại Trước Khi Vi Phạm SLA' : 'Countdown to SLA Breach'}
              </span>
              <p className="text-3xl font-black text-rose-950 font-mono tracking-tight my-1">
                {formatSLA(slaSeconds)}
              </p>
              <div className="w-full bg-rose-200/80 h-2 rounded-full overflow-hidden mt-3">
                <div
                  className="bg-rose-500 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${(slaSeconds / 3600) * 100}%` }}
                ></div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 text-center">
              {isVi
                ? 'Tự động leo thang cấp quyền (Auto-escalation) đến Giám đốc kỹ thuật khi còn dưới 15 phút.'
                : 'Automated supervisor escalation triggers when SLA timer drops under 15 minutes.'}
            </p>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
