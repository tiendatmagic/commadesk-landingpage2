'use client';

import React, { useState } from 'react';
import { LandmarkIcon, CameraIcon, OrgOrbitRaysGraphic } from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface Props {
  isVi?: boolean;
}

export function InteractiveOrgOrbit({ isVi }: Props) {
  const [activeTab, setActiveTab] = useState<'orbit' | 'attendance'>('orbit');
  const [activeShift, setActiveShift] = useState<'morning' | 'night' | 'remote'>('morning');

  const tabs = [
    { id: 'orbit' as const, label: isVi ? 'Sơ đồ phân cấp' : 'Org hierarchy' },
    { id: 'attendance' as const, label: isVi ? 'Chấm công theo ca' : 'Shift attendance' },
  ];

  const shiftStats = {
    morning: { rate: '98.6%', count: '1,420 active', gps: 'Hanoi HQ Geofence' },
    night: { rate: '99.4%', count: '380 active', gps: '24/7 Security & Ops' },
    remote: { rate: '100%', count: '650 active', gps: 'Verified GPS & Face ID' },
  };

  return (
    <ShowcaseCard
      title={isVi ? 'Sơ đồ tổ chức & Chấm công đa ca' : 'Org Hierarchy & Biometric Shifts'}
      headerRight={
        <ShowcaseTabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      }
    >
      {activeTab === 'orbit' && (
        <div className="flex flex-col items-center justify-center relative min-h-[340px] sm:min-h-[380px] bg-white rounded-xl border border-slate-900/[0.08] p-4 sm:p-6 overflow-hidden">
          <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full border border-dashed border-slate-200 pointer-events-none" />
          <div className="absolute w-[190px] h-[190px] sm:w-[240px] sm:h-[240px] rounded-full border border-dashed border-slate-200 pointer-events-none" />

          <OrgOrbitRaysGraphic />

          {/* Central Hub Node */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-slate-900/[0.12] shadow-[0_8px_24px_rgba(17,24,39,0.06)] flex flex-col items-center justify-center p-2 text-center">
              <div className="w-8 h-8 rounded-lg bg-[#111827] text-white flex items-center justify-center mb-1">
                <LandmarkIcon className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-semibold text-[#111827] leading-tight">
                {isVi ? 'Ban điều hành' : 'Executive board'}
              </span>
              <span className="font-mono text-[10px] text-[#6B7487]">
                {isVi ? 'Trụ sở chính' : 'Headquarters'}
              </span>
            </div>
          </div>

          {/* Department Nodes */}
          {[
            {
              role: isVi ? 'Khối Kỹ thuật' : 'Engineering',
              lead: isVi ? 'Nguyễn Văn Minh' : 'Minh Nguyen',
              avatar: '/avatars/elena_rostova_hd.webp',
              pos: 'top-3 sm:top-6 right-3 sm:right-8',
              badge: 'Sprint 14',
            },
            {
              role: isVi ? 'Khối Vận hành' : 'Operations',
              lead: isVi ? 'Trần Quốc Huy' : 'Huy Tran',
              avatar: '/avatars/james_carter_hd.webp',
              pos: 'top-3 sm:top-6 left-3 sm:left-8',
              badge: 'SLA active',
            },
            {
              role: isVi ? 'Khối Nhân sự' : 'People Ops',
              lead: isVi ? 'Phạm Thu Lan' : 'Lan Pham',
              avatar: '/avatars/david_chen_hd.webp',
              pos: 'bottom-3 sm:bottom-6 left-3 sm:left-8',
              badge: '1,420 staff',
            },
            {
              role: isVi ? 'Khối Dự án' : 'PMO Office',
              lead: isVi ? 'Lê Minh Thảo' : 'Thao Le',
              avatar: '/avatars/sophia_lin_hd.webp',
              pos: 'bottom-3 sm:bottom-6 right-3 sm:right-8',
              badge: '18 active',
            },
          ].map((node, i) => (
            <div
              key={i}
              className={`absolute ${node.pos} z-10 flex items-center gap-2 p-1.5 pr-3 rounded-xl bg-white border border-slate-900/[0.08] shadow-[0_2px_8px_rgba(17,24,39,0.05)]`}
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-900/[0.06] shrink-0 bg-[#F5F7FA]">
                <img
                  src={node.avatar}
                  alt={node.lead}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div>
                <p className="text-[12px] font-medium text-[#111827] leading-tight">{node.role}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[11px] text-[#6B7487]">{node.lead}</span>
                  <span className="font-mono tabular-nums text-[10px] text-[#4B5565] bg-[#F5F7FA] px-1.5 py-0.5 rounded">
                    {node.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'attendance' && (
        <div className="w-full max-w-2xl mx-auto p-5 sm:p-6 rounded-xl bg-white border border-slate-900/[0.08] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-900/[0.06]">
            <span className="text-[13px] font-semibold text-[#111827]">
              {isVi ? 'Chấm công sinh trắc học & GPS' : 'Biometric & GPS shift check-in'}
            </span>
            <span className="font-mono text-[12px] text-[#16A34A] font-medium">
              {shiftStats[activeShift].gps}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1 p-1 bg-[#F5F7FA] rounded-lg border border-slate-900/[0.06]">
            {[
              { id: 'morning', label: isVi ? 'Ca sáng' : 'Morning shift' },
              { id: 'night', label: isVi ? 'Ca đêm' : 'Night shift' },
              { id: 'remote', label: isVi ? 'Từ xa' : 'Remote hub' },
            ].map((s) => (
              <button
                type="button"
                key={s.id}
                onClick={() => setActiveShift(s.id as 'morning' | 'night' | 'remote')}
                className={`py-1.5 text-[12px] font-medium rounded-md transition-colors cursor-pointer ${
                  activeShift === s.id
                    ? 'bg-white text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.06)]'
                    : 'text-[#4B5565] hover:text-[#111827]'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.06] flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-[#111827] text-white flex items-center justify-center shrink-0">
              <CameraIcon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-medium text-[#111827]">
                  {isVi ? 'Chấm công nhận diện khuôn mặt' : 'Facial recognition check-in'}
                </p>
                <span className="text-[13px] font-semibold font-mono tabular-nums text-[#16A34A]">
                  {shiftStats[activeShift].rate}
                </span>
              </div>
              <p className="text-[12px] text-[#6B7487]">
                {isVi ? 'Kiểm tra thực thể sống chống giả mạo ảnh tĩnh' : 'Liveness detection with anti-spoofing'}
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-900/[0.06] flex items-center justify-between text-[12px] text-[#4B5565]">
            <span>{isVi ? 'Đồng bộ bảng công & tính lương:' : 'Automated payroll sync:'}</span>
            <span className="font-mono tabular-nums font-medium text-[#111827]">
              {shiftStats[activeShift].count}
            </span>
          </div>
        </div>
      )}
    </ShowcaseCard>
  );
}
