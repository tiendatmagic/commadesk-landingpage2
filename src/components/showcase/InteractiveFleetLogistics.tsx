'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TruckIcon, BoxIcon, CheckIcon } from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface InteractiveFleetLogisticsProps {
  isVi: boolean;
}

export function InteractiveFleetLogistics({ isVi }: InteractiveFleetLogisticsProps) {
  const [activeTab, setActiveTab] = useState<'3d-fleet' | 'fleet' | 'inventory'>('3d-fleet');
  const [selectedVehicle, setSelectedVehicle] = useState<number>(0);

  const tabs = [
    {
      id: '3d-fleet' as const,
      label: isVi ? 'Bản Đồ Vệ Tinh 3D' : '3D GPS Map',
      icon: <TruckIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'fleet' as const,
      label: isVi ? 'Đội Xe Live' : 'Live Fleet',
      icon: <TruckIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'inventory' as const,
      label: isVi ? 'Kho SKU' : 'SKU Stock',
      icon: <BoxIcon className="w-3.5 h-3.5" />,
    },
  ];

  const vehicles = [
    {
      id: '29C-882.14',
      driver: isVi ? 'Nguyễn Văn Hùng' : 'Hung Nguyen',
      type: isVi ? 'Xe tải 2.5T' : '2.5T Truck',
      status: isVi ? 'Đang giao' : 'In Transit',
      speed: '48 km/h',
      route: isVi ? 'Kho Tổng -> Chi nhánh Cầu Giấy' : 'Main Hub -> Cau Giay Hub',
      eta: '18 phút',
      load: '82%',
      color: 'bg-emerald-500',
      textColor: 'text-emerald-700',
      badgeBg: 'bg-emerald-50 border-emerald-200',
    },
    {
      id: '51D-491.02',
      driver: isVi ? 'Trần Quốc Bảo' : 'Bao Tran',
      type: isVi ? 'Bán tải Van' : 'Van Courier',
      status: isVi ? 'Sẵn sàng' : 'Idle / Ready',
      speed: '0 km/h',
      route: isVi ? 'Bến xe Miền Đông' : 'East Terminal',
      eta: isVi ? 'Chờ lệnh' : 'Standby',
      load: '0%',
      color: 'bg-blue-500',
      textColor: 'text-blue-700',
      badgeBg: 'bg-blue-50 border-blue-200',
    },
    {
      id: '30F-120.88',
      driver: isVi ? 'Lê Hoàng Nam' : 'Nam Le',
      type: isVi ? 'Xe tải 5.0T' : '5.0T Heavy',
      status: isVi ? 'Đang bốc hàng' : 'Loading',
      speed: '0 km/h',
      route: isVi ? 'Kho Logistics Quang Minh' : 'Quang Minh Depot',
      eta: '35 phút',
      load: '65%',
      color: 'bg-amber-500',
      textColor: 'text-amber-700',
      badgeBg: 'bg-amber-50 border-amber-200',
    },
  ];

  const inventoryItems = [
    { sku: 'SKU-VPP-009', name: isVi ? 'Giấy In Double A A4' : 'A4 Printing Paper', stock: 240, min: 50, status: 'safe' },
    { sku: 'SKU-DEV-104', name: isVi ? 'Màn Hình Dell P2419H' : 'Dell Monitor 24"', stock: 4, min: 10, status: 'low' },
    { sku: 'SKU-VPP-032', name: isVi ? 'Mực In HP LaserJet Pro' : 'HP Toner Cartridge', stock: 18, min: 15, status: 'safe' },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'Hệ Thống Điều Phối Vận Tải GPS' : 'Fleet & Logistics Radar'}
      headerRight={
        <ShowcaseTabBar
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      }
    >
      {activeTab === '3d-fleet' && (
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
          <Image
            src="/showcase/tech_fleet_logistics.webp"
            alt="Futuristic 3D Smart Fleet Management and GPS Satellite Logistics"
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />

          {/* Floating Badge 1: Satellite Telemetry */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 animate-float bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg max-w-[220px] hidden sm:block">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span className="text-[11px] font-bold text-slate-900">
                {isVi ? 'Định Vị Vệ Tinh Thời Gian Thực' : 'Satellite Telemetry Grid'}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-1">
              <div className="bg-cyan-500 h-full w-[98%] rounded-full animate-pulse"></div>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">
              {isVi ? 'Độ chính xác GPS: sai số < 1.5m' : 'GPS Accuracy < 1.5m Tolerance'}
            </span>
          </div>

          {/* Floating Badge 2: Dispatch Optimization */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 animate-float-delayed bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg hidden sm:block">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                <CheckIcon className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900">
                  {isVi ? 'Điều Phối Chuyến Xe Tối Ưu' : 'AI Routing Optimization'}
                </p>
                <p className="text-[10px] text-emerald-600 font-semibold">
                  {isVi ? 'Tiết kiệm 22% chi phí nhiên liệu' : 'Reduces 22% Fuel & Transit Time'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'fleet' && (
        <div className="space-y-3">
          {/* Light Mode Mini Map View */}
          <div className="relative h-32 sm:h-36 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/90 p-3.5 overflow-hidden flex flex-col justify-between shadow-xs">
            {/* Subtle GIS map grid pattern */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            {/* Live GPS Route Coordinates */}
            <div className="relative z-10 flex items-center justify-between text-[11px]">
              <span className="font-mono text-slate-500 font-medium">GPS: 21.0285° N, 105.8542° E</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-[11px] font-bold shadow-2xs">
                {vehicles[selectedVehicle].speed}
              </span>
            </div>

            {/* Selected Vehicle Info Card */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${vehicles[selectedVehicle].color}`}></span>
                  {vehicles[selectedVehicle].id} • {vehicles[selectedVehicle].driver}
                </p>
                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                  {vehicles[selectedVehicle].route}
                </p>
              </div>
              <div className="text-right pl-3 shrink-0">
                <span className="text-[10px] text-slate-400 block font-medium">{isVi ? 'Dự kiến đến' : 'ETA'}</span>
                <span className="text-xs font-bold text-emerald-600">{vehicles[selectedVehicle].eta}</span>
              </div>
            </div>
          </div>

          {/* Vehicle List Cards (Light mode) */}
          <div className="grid grid-cols-3 gap-2">
            {vehicles.map((v, idx) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedVehicle(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedVehicle === idx
                    ? 'bg-white border-[#FF4D38] shadow-md shadow-[#FF4D38]/10 ring-2 ring-[#FF4D38]/20'
                    : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 truncate">{v.id}</span>
                  <span className={`w-2 h-2 rounded-full ${v.color}`}></span>
                </div>
                <p className="text-[10px] text-slate-500 truncate mt-0.5">{v.type}</p>
                <span className="text-[10px] font-semibold text-slate-700 mt-1 block">
                  {isVi ? 'Tải trọng' : 'Load'}: {v.load}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'inventory' && (
        /* Inventory Tab (Light mode) */
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 px-1 pb-1">
            <span>{isVi ? 'Danh mục SKU & Thiết bị' : 'SKU Item & Equipment'}</span>
            <span>{isVi ? 'Tồn kho / Ngưỡng tối thiểu' : 'Stock / Threshold'}</span>
          </div>
          {inventoryItems.map((item) => (
            <div
              key={item.sku}
              className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between hover:border-slate-300 transition-all"
            >
              <div>
                <span className="text-[10px] font-mono text-slate-400 font-semibold block">{item.sku}</span>
                <span className="text-xs font-bold text-slate-900">{item.name}</span>
              </div>
              <div className="text-right">
                <span className={`text-xs font-bold ${item.status === 'low' ? 'text-amber-600' : 'text-emerald-600'}`}>
                  {item.stock} {isVi ? 'cái' : 'units'}
                </span>
                <span className="text-[10px] text-slate-400 block font-medium">
                  {isVi ? 'Tối thiểu' : 'Min'}: {item.min}
                </span>
              </div>
            </div>
          ))}
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {isVi ? 'Cân đối phiếu nhập xuất tự động' : 'Automated voucher ledger balanced'}
            </span>
            <span className="text-emerald-700 font-bold bg-white px-2 py-0.5 rounded-md border border-emerald-200 text-[10px]">
              {isVi ? 'Đã đồng bộ' : 'Synced'}
            </span>
          </div>
        </div>
      )}

      {/* Bottom Light Footer */}
      <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-medium">
        <span>{isVi ? 'Tối ưu tuyến đường Goong GIS' : 'Goong GIS Route Engine'}</span>
        <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
          {isVi ? 'Tiết kiệm 22% chi phí' : '-22% Fuel Cost'}
        </span>
      </div>
    </ShowcaseCard>
  );
}
