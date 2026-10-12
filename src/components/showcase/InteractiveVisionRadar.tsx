'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CarIcon, CheckIcon } from '@/components/ui/UIIcons';

interface Props {
  isVi?: boolean;
}

export function InteractiveVisionRadar({ isVi }: Props) {
  const [activeTab, setActiveTab] = useState<'city' | 'radar' | 'anpr'>('city');

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100/60 p-2 sm:p-4 border border-slate-200/80">
      {/* Interactive Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2 sm:px-4 pt-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            {isVi ? 'Hệ Thống Neural Vision & Giám Sát Đô Thị' : 'Neural Vision & Smart City Grid'}
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200/90 shadow-2xs w-full sm:w-auto justify-center sm:justify-start">
          <button
            onClick={() => setActiveTab('city')}
            className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'city'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-black hover:bg-slate-100'
            }`}
          >
            {isVi ? 'Không Gian 3D' : '3D City Grid'}
          </button>
          <button
            onClick={() => setActiveTab('radar')}
            className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'radar'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-black hover:bg-slate-100'
            }`}
          >
            {isVi ? 'Quét Radar 360°' : '360° Radar Scan'}
          </button>
          <button
            onClick={() => setActiveTab('anpr')}
            className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'anpr'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-black hover:bg-slate-100'
            }`}
          >
            {isVi ? 'Đọc Biển Số ANPR' : 'ANPR Plate Log'}
          </button>
        </div>
      </div>

      {/* Mode 1: 3D Smart City Grid Image Showcase */}
      {activeTab === 'city' && (
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
          <Image
            src="/showcase/tech_ai_smart_city.webp"
            alt="Futuristic Smart City AI Neural Vision"
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />

          {/* Floating Live Tag 1 */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 animate-float bg-white/95 backdrop-blur-md border border-cyan-200/80 rounded-2xl p-3 shadow-lg hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></span>
              <p className="text-[11px] font-bold text-slate-900">
                {isVi ? 'Luồng Camera AI Trực Tuyến' : 'Neural Camera Stream Active'}
              </p>
            </div>
            <p className="text-[10px] text-slate-500 mt-1">
              {isVi ? '24 Nút mạng Edge • Khớp mặt 99.4%' : '24 Edge Nodes • 99.4% Face Accuracy'}
            </p>
          </div>

          {/* Floating Live Tag 2: ANPR Lock */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 animate-float-delayed bg-white/95 backdrop-blur-md border border-emerald-200/80 rounded-2xl p-3 shadow-lg hidden sm:block">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                <CarIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900 font-mono">ANPR: 29A-992.84</p>
                <p className="text-[10px] text-emerald-600 font-semibold">
                  {isVi ? 'Khớp biển số Whitelist • Mở cổng tự động' : 'Matched Whitelist • Gate Opened'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Radar 360° Scan Interactive Canvas - 100% Pure Light Mode */}
      {activeTab === 'radar' && (
        <div className="w-full bg-gradient-to-br from-white via-cyan-50/40 to-slate-50 text-slate-900 rounded-2xl p-3.5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 border border-slate-200/90 shadow-md">
          {/* Light Radar Scanner Disc */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 shrink-0 mx-auto flex items-center justify-center bg-white/90 rounded-full border-2 border-cyan-200/90 shadow-inner overflow-hidden">
            {/* Concentric rings */}
            <div className="absolute inset-0 rounded-full border border-cyan-200/80"></div>
            <div className="absolute inset-6 sm:inset-8 rounded-full border border-cyan-300/70"></div>
            <div className="absolute inset-12 sm:inset-16 rounded-full border border-cyan-400/70"></div>
            <div className="absolute inset-18 sm:inset-24 rounded-full border border-cyan-500/80"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-cyan-600 shadow-[0_0_12px_rgba(6,182,212,0.6)] z-10"></div>

            {/* Rotating radar sweep line in Light Cyan tint */}
            <div
              className="absolute inset-0 rounded-full origin-center animate-spin"
              style={{
                animationDuration: '4s',
                background: 'conic-gradient(from 0deg, transparent 0deg 300deg, rgba(6, 182, 212, 0.32) 360deg)',
              }}
            ></div>

            {/* Target blips */}
            <div className="absolute top-12 left-16 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-md animate-ping"></div>
            <div className="absolute bottom-14 right-14 w-2.5 h-2.5 rounded-full bg-rose-500 shadow-md animate-ping"></div>
            <div className="absolute top-20 right-24 w-2.5 h-2.5 rounded-full bg-amber-500 shadow-md animate-ping"></div>
          </div>

          <div className="space-y-4 max-w-lg">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-100 text-cyan-900 border border-cyan-300/80 shadow-2xs inline-block">
              RADAR_SCANNER_v4.2 // ONLINE
            </span>
            <h3 className="text-xl font-bold tracking-tight text-slate-950">
              {isVi ? 'Định Vị Không Gian & Nhận Diện Đa Đối Tượng Thời Gian Thực' : 'Spatial Mapping & Real-Time Multi-Target Tracking'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isVi
                ? 'Thuật toán kết hợp luồng video đa kênh để theo dõi quỹ đạo di chuyển, vẽ bản đồ nhiệt mật độ 2D và phát hiện dị thường tức thì.'
                : 'Algorithms fuse multi-channel video streams to plot trajectory vectors, generate 2D density heatmaps, and trigger instant anomaly alerts.'}
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="text-slate-500 font-medium">
                  {isVi ? 'Tổng số camera:' : 'Total Cameras:'}
                </span>
                <p className="text-base font-bold text-cyan-700 font-mono mt-0.5">128 Feeds</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="text-slate-500 font-medium">
                  {isVi ? 'Độ trễ xử lý:' : 'Latency:'}
                </span>
                <p className="text-base font-bold text-emerald-700 font-mono mt-0.5">&lt; 45ms</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: ANPR Live Plate Log - Light Mode */}
      {activeTab === 'anpr' && (
        <div className="w-full bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-md">
          <div className="space-y-3">
            {[
              {
                plate: '29A-992.84',
                time: '10:24:12',
                gate: isVi ? 'Cổng A (Khu Nam)' : 'Gate A (South)',
                status: isVi ? 'Đã cấp phép' : 'Approved',
                type: isVi ? 'Đội xe ban giám đốc' : 'Executive Fleet',
              },
              {
                plate: '51G-771.02',
                time: '10:23:45',
                gate: isVi ? 'Cổng B (Khu Bắc)' : 'Gate B (North)',
                status: isVi ? 'Khách ghé thăm' : 'Visitor Access',
                type: isVi ? 'Thẻ khách mời' : 'Guest Pass',
              },
              {
                plate: '30E-145.99',
                time: '10:22:18',
                gate: isVi ? 'Cổng A (Khu Nam)' : 'Gate A (South)',
                status: isVi ? 'Đã cấp phép' : 'Approved',
                type: isVi ? 'Bãi đỗ nhân viên' : 'Staff Parking',
              },
              {
                plate: '43C-652.11',
                time: '10:21:04',
                gate: isVi ? 'Kho hàng Dock C' : 'Loading Dock C',
                status: isVi ? 'Đã kiểm tra' : 'Inspected',
                type: isVi ? 'Xe tải Logistics' : 'Logistics Truck',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-wrap items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1.5 rounded-lg bg-white text-slate-900 font-mono font-black text-xs tracking-wider border-2 border-slate-300 shadow-xs">
                    {item.plate}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{item.type}</p>
                    <p className="text-[11px] text-slate-500">{item.gate} • {item.time}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                  <CheckIcon className="w-3.5 h-3.5" />
                  <span>{item.status}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
