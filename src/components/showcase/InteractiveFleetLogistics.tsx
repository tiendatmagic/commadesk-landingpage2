'use client';

import React, { useState } from 'react';
import { TruckIcon, BoxIcon } from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface InteractiveFleetLogisticsProps {
  isVi: boolean;
}

export function InteractiveFleetLogistics({ isVi }: InteractiveFleetLogisticsProps) {
  const [activeTab, setActiveTab] = useState<'fleet' | 'inventory'>('fleet');
  const [selectedVehicle, setSelectedVehicle] = useState<number>(0);

  const tabs = [
    {
      id: 'fleet' as const,
      label: isVi ? 'Đội xe GPS' : 'Live fleet',
      icon: <TruckIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'inventory' as const,
      label: isVi ? 'Kho SKU' : 'SKU stock',
      icon: <BoxIcon className="w-3.5 h-3.5" />,
    },
  ];

  const vehicles = [
    {
      id: '29C-882.14',
      driver: isVi ? 'Nguyễn Văn Hùng' : 'Hung Nguyen',
      type: isVi ? 'Xe tải 2.5T' : '2.5T Truck',
      speed: '48 km/h',
      route: isVi ? 'Kho Tổng -> Chi nhánh Cầu Giấy' : 'Main Hub -> Cau Giay Hub',
      eta: isVi ? '18 phút' : '18 min',
      load: '82%',
      dotColor: 'bg-[#16A34A]',
    },
    {
      id: '51D-491.02',
      driver: isVi ? 'Trần Quốc Bảo' : 'Bao Tran',
      type: isVi ? 'Bán tải Van' : 'Van Courier',
      speed: '0 km/h',
      route: isVi ? 'Bến xe Miền Đông' : 'East Terminal',
      eta: isVi ? 'Chờ lệnh' : 'Standby',
      load: '0%',
      dotColor: 'bg-slate-400',
    },
    {
      id: '30F-120.88',
      driver: isVi ? 'Lê Hoàng Nam' : 'Nam Le',
      type: isVi ? 'Xe tải 5.0T' : '5.0T Heavy',
      speed: '0 km/h',
      route: isVi ? 'Kho Logistics Quang Minh' : 'Quang Minh Depot',
      eta: isVi ? '35 phút' : '35 min',
      load: '65%',
      dotColor: 'bg-[#D97706]',
    },
  ];

  const inventoryItems = [
    { sku: 'SKU-VPP-009', name: isVi ? 'Giấy in Double A A4' : 'A4 Printing Paper', stock: 240, min: 50, status: 'safe' },
    { sku: 'SKU-DEV-104', name: isVi ? 'Màn hình Dell P2419H' : 'Dell Monitor 24"', stock: 4, min: 10, status: 'low' },
    { sku: 'SKU-VPP-032', name: isVi ? 'Mực in HP LaserJet Pro' : 'HP Toner Cartridge', stock: 18, min: 15, status: 'safe' },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'Điều phối đội xe GPS & Kho vận' : 'Fleet Dispatch & GPS Tracking'}
      headerRight={
        <ShowcaseTabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      }
    >
      {activeTab === 'fleet' && (
        <div className="space-y-3">
          {/* Map Telemetry Card */}
          <div className="relative h-36 rounded-xl bg-white border border-slate-900/[0.08] p-4 overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 opacity-35 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 flex items-center justify-between text-[12px]">
              <span className="font-mono tabular-nums text-[#6B7487]">
                21.0285° N, 105.8542° E
              </span>
              <span className="font-mono tabular-nums text-[12px] font-medium text-[#16A34A] bg-white px-2 py-0.5 rounded border border-slate-900/[0.08]">
                {vehicles[selectedVehicle].speed}
              </span>
            </div>

            <div className="relative z-10 bg-white p-3 rounded-lg border border-slate-900/[0.08] flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-[#111827] flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${vehicles[selectedVehicle].dotColor}`} />
                  <span className="font-mono tabular-nums">{vehicles[selectedVehicle].id}</span>
                  <span className="font-normal text-[#4B5565] truncate">· {vehicles[selectedVehicle].driver}</span>
                </p>
                <p className="text-[12px] text-[#6B7487] truncate mt-0.5">
                  {vehicles[selectedVehicle].route}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[11px] text-[#6B7487] block">{isVi ? 'Dự kiến' : 'ETA'}</span>
                <span className="font-mono tabular-nums text-[12.5px] font-medium text-[#111827]">
                  {vehicles[selectedVehicle].eta}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {vehicles.map((v, idx) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedVehicle(idx)}
                className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                  selectedVehicle === idx
                    ? 'bg-white border-[#FF4D38]'
                    : 'bg-white border-slate-900/[0.08] hover:border-slate-900/[0.16]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono tabular-nums text-[12.5px] font-semibold text-[#111827] truncate">
                    {v.id}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${v.dotColor}`} />
                </div>
                <p className="text-[12px] text-[#6B7487] truncate mt-0.5">{v.type}</p>
                <span className="font-mono tabular-nums text-[11px] text-[#4B5565] mt-1 block">
                  {isVi ? 'Tải trọng' : 'Load'}: {v.load}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'inventory' && (
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-[12px] text-[#6B7487] px-1">
            <span>{isVi ? 'Danh mục SKU & Thiết bị' : 'SKU item & equipment'}</span>
            <span>{isVi ? 'Tồn kho / Tối thiểu' : 'Stock / Min'}</span>
          </div>
          {inventoryItems.map((item) => (
            <div
              key={item.sku}
              className="p-3 rounded-xl bg-white border border-slate-900/[0.08] flex items-center justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#6B7487] block">{item.sku}</span>
                <span className="text-[13px] font-medium text-[#111827]">{item.name}</span>
              </div>
              <div className="text-right font-mono tabular-nums">
                <span className={`text-[13px] font-semibold ${item.status === 'low' ? 'text-[#D97706]' : 'text-[#16A34A]'}`}>
                  {item.stock} {isVi ? 'đv' : 'units'}
                </span>
                <span className="text-[11px] text-[#6B7487] block">
                  {isVi ? 'Tối thiểu' : 'Min'}: {item.min}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-slate-900/[0.06] flex items-center justify-between text-[12px] text-[#6B7487]">
        <span>{isVi ? 'Bản đồ điều phối & theo dõi lộ trình' : 'Dispatch map & route tracking'}</span>
        <span className="font-mono tabular-nums font-medium text-[#16A34A]">
          {isVi ? 'Đối soát chi phí theo chuyến' : 'Per-trip cost ledger'}
        </span>
      </div>
    </ShowcaseCard>
  );
}
