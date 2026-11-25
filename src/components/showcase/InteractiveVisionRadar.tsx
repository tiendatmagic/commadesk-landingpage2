'use client';

import React, { useState } from 'react';
import { CheckIcon } from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface Props {
  isVi?: boolean;
}

export function InteractiveVisionRadar({ isVi }: Props) {
  const [activeTab, setActiveTab] = useState<'anpr' | 'radar'>('anpr');

  const tabs = [
    { id: 'anpr' as const, label: isVi ? 'Nhật ký biển số ANPR' : 'ANPR plate log' },
    { id: 'radar' as const, label: isVi ? 'Bản đồ vùng quét' : 'Spatial radar' },
  ];

  const plateLogs = [
    {
      plate: '29A-992.84',
      time: '10:24:12',
      gate: isVi ? 'Cổng A (Khu Nam)' : 'Gate A (South)',
      status: isVi ? 'Đã cấp phép' : 'Approved',
      type: isVi ? 'Đội xe ban giám đốc' : 'Executive fleet',
    },
    {
      plate: '51G-771.02',
      time: '10:23:45',
      gate: isVi ? 'Cổng B (Khu Bắc)' : 'Gate B (North)',
      status: isVi ? 'Khách đăng ký' : 'Visitor pass',
      type: isVi ? 'Thẻ khách mời' : 'Guest access',
    },
    {
      plate: '30E-145.99',
      time: '10:22:18',
      gate: isVi ? 'Cổng A (Khu Nam)' : 'Gate A (South)',
      status: isVi ? 'Đã cấp phép' : 'Approved',
      type: isVi ? 'Bãi đỗ nhân viên' : 'Staff parking',
    },
    {
      plate: '43C-652.11',
      time: '10:21:04',
      gate: isVi ? 'Kho hàng Dock C' : 'Loading dock C',
      status: isVi ? 'Đã kiểm tra' : 'Inspected',
      type: isVi ? 'Xe tải Logistics' : 'Logistics truck',
    },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'Nhận diện biển số ANPR & Giám sát Camera' : 'ANPR Plate Recognition & Camera Grid'}
      headerRight={
        <ShowcaseTabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      }
    >
      {activeTab === 'anpr' && (
        <div className="w-full bg-white rounded-xl p-4 sm:p-5 border border-slate-900/[0.08]">
          <div className="space-y-2.5">
            {plateLogs.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-wrap items-center justify-between p-3 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.06] gap-3"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-white text-[#111827] font-mono tabular-nums font-medium text-[12px] border border-slate-900/[0.12]">
                    {item.plate}
                  </span>
                  <div>
                    <p className="text-[13px] font-medium text-[#111827]">{item.type}</p>
                    <p className="font-mono tabular-nums text-[12px] text-[#6B7487]">
                      {item.gate} · {item.time}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#16A34A]">
                  <CheckIcon className="w-3.5 h-3.5" />
                  <span>{item.status}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'radar' && (
        <div className="w-full bg-white text-[#111827] rounded-xl p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-900/[0.08]">
          {/* Clean Radar Scanner Disc */}
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 shrink-0 mx-auto flex items-center justify-center bg-[#F5F7FA] rounded-full border border-slate-900/[0.1] overflow-hidden">
            <div className="absolute inset-0 rounded-full border border-slate-900/[0.06]" />
            <div className="absolute inset-6 sm:inset-8 rounded-full border border-slate-900/[0.06]" />
            <div className="absolute inset-12 sm:inset-16 rounded-full border border-slate-900/[0.06]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF4D38] z-10" />

            <div
              className="absolute inset-0 rounded-full origin-center animate-spin"
              style={{
                animationDuration: '6s',
                background: 'conic-gradient(from 0deg, transparent 0deg 315deg, rgba(255, 77, 56, 0.16) 360deg)',
              }}
            />

            <div className="absolute top-12 left-14 w-2 h-2 rounded-full bg-[#16A34A]" />
            <div className="absolute bottom-14 right-14 w-2 h-2 rounded-full bg-[#FF4D38]" />
            <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-[#111827]" />
          </div>

          <div className="space-y-3 max-w-lg text-left">
            <span className="font-mono text-[12px] text-[#6B7487] block">
              {isVi ? 'Khu vực camera · 128 điểm' : 'Camera zones · 128 cameras'}
            </span>
            <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-[#111827]">
              {isVi ? 'Định vị không gian & Theo dõi luồng di chuyển' : 'Spatial mapping & multi-zone tracking'}
            </h3>
            <p className="text-[14px] text-[#4B5565] leading-relaxed">
              {isVi
                ? 'Kết hợp luồng camera đa điểm để theo dõi lưu lượng người và phương tiện, vẽ bản đồ mật độ và cảnh báo tức thì.'
                : 'Combine multi-camera feeds to plot density heatmaps, monitor vehicle gates, and log perimeter events.'}
            </p>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.06]">
                <span className="text-[12px] text-[#6B7487]">
                  {isVi ? 'Tổng số camera' : 'Active cameras'}
                </span>
                <p className="text-[18px] font-semibold text-[#111827] font-mono tabular-nums mt-0.5">
                  128 {isVi ? 'điểm' : 'cameras'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.06]">
                <span className="text-[12px] text-[#6B7487]">
                  {isVi ? 'Trạng thái' : 'Monitoring'}
                </span>
                <p className="text-[18px] font-semibold text-[#16A34A] font-mono tabular-nums mt-0.5">
                  24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </ShowcaseCard>
  );
}
