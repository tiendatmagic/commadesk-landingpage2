'use client';

import React, { useState } from 'react';
import {
  BoxIcon,
  ClipboardListIcon,
  LaptopIcon,
  AlertTriangleIcon,
  CheckIcon,
} from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface InteractiveInventoryAssetsProps {
  isVi: boolean;
}

export function InteractiveInventoryAssets({ isVi }: InteractiveInventoryAssetsProps) {
  const [activeTab, setActiveTab] = useState<'warehouses' | 'vouchers' | 'assets'>('warehouses');
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const tabs = [
    {
      id: 'warehouses' as const,
      label: isVi ? 'Kho & SKU' : 'SKU stock',
      icon: <BoxIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'vouchers' as const,
      label: isVi ? 'Phiếu kho' : 'Vouchers',
      icon: <ClipboardListIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'assets' as const,
      label: isVi ? 'Tài sản serial' : 'Serial assets',
      icon: <LaptopIcon className="w-3.5 h-3.5" />,
    },
  ];

  const inventoryStock = [
    {
      sku: 'SKU-LOG-204',
      name: isVi ? 'Thùng Carton 5 lớp' : '5-Ply Shipping Carton Box',
      warehouse: isVi ? 'Kho Tổng Quang Minh' : 'Quang Minh Central Hub',
      stock: 4850,
      min: 1000,
      status: 'safe',
    },
    {
      sku: 'SKU-DEV-882',
      name: isVi ? 'Màn hình Dell UltraSharp 27" 4K' : 'Dell UltraSharp 27" 4K',
      warehouse: isVi ? 'Kho Kỹ thuật tầng 4' : 'Engineering Dept Hub',
      stock: 3,
      min: 8,
      status: 'low',
    },
    {
      sku: 'SKU-VPP-114',
      name: isVi ? 'Hộp mực HP LaserJet 85A' : 'HP Toner Cartridge 85A',
      warehouse: isVi ? 'Kho Văn phòng phẩm Keangnam' : 'Keangnam Supplies Depot',
      stock: 28,
      min: 20,
      status: 'safe',
    },
  ];

  const vouchers = [
    {
      code: 'NK-2026-0814',
      type: isVi ? 'Phiếu nhập kho' : 'Inbound receipt',
      source: isVi ? 'Nhà cung cấp Dell Vietnam' : 'Dell Vendor Official',
      itemsCount: '15 SKU',
      approval: isVi ? 'Đã duyệt 2/2 cấp' : 'Approved (2/2)',
      time: '14:20',
      tone: 'text-[#16A34A]',
    },
    {
      code: 'XK-2026-0492',
      type: isVi ? 'Phiếu xuất cấp phát' : 'Asset dispatch',
      source: isVi ? 'Phòng Kỹ thuật' : 'Engineering dept',
      itemsCount: isVi ? '4 máy trạm' : '4 workstations',
      approval: isVi ? 'Chờ Kế toán trưởng' : 'Pending CFO',
      time: '11:05',
      tone: 'text-[#D97706]',
    },
    {
      code: 'CK-2026-0118',
      type: isVi ? 'Phiếu chuyển kho' : 'Inter-warehouse transfer',
      source: isVi ? 'Kho Tổng -> Đà Nẵng' : 'Main Hub -> Da Nang',
      itemsCount: isVi ? '120 kiện' : '120 cases',
      approval: isVi ? 'Đang vận chuyển' : 'In transit',
      time: '08:45',
      tone: 'text-[#4B5565]',
    },
  ];

  const serialAssets = [
    {
      serial: 'MBP-M3M-99104',
      model: 'MacBook Pro 16" M3 Max',
      holder: isVi ? 'Đặng Hoàng Sơn (Tech Lead)' : 'Son Dang (Tech Lead)',
      warranty: isVi ? 'Bảo hành đến 2028' : 'Warranty until 2028',
      health: '98%',
    },
    {
      serial: 'PRN-HP-55210',
      model: 'HP Enterprise LaserJet M608',
      holder: isVi ? 'Tầng 6 - Khối Vận hành' : 'Floor 6 - Operations Hub',
      warranty: isVi ? 'Bảo hành chính hãng' : 'OEM certified',
      health: '92%',
    },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'Kho hàng SKU & Quản lý tài sản' : 'SKU Inventory & Serial Assets'}
      headerRight={
        <ShowcaseTabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      }
    >
      {activeTab === 'warehouses' && (
        <div className="space-y-3">
          <div className="rounded-xl bg-white border border-slate-900/[0.08] p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-[13px] font-semibold text-[#111827]">
                {isVi ? 'Số dư tồn kho theo chi nhánh' : 'Multi-location stock balances'}
              </span>
              <span className="font-mono tabular-nums text-[12px] font-medium text-[#111827]">
                {isVi ? 'Tổng giá trị: 1.48 Tỷ đ' : 'Total value: $58.2K'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-3 rounded-lg bg-[#F5F7FA] border border-slate-900/[0.06]">
                <div className="text-[12px] text-[#6B7487]">{isVi ? 'Kho Tổng HN' : 'Main hub'}</div>
                <div className="font-mono tabular-nums text-[16px] font-semibold text-[#111827] mt-0.5">
                  8,420 SKU
                </div>
                <div className="text-[12px] text-[#16A34A] mt-0.5">
                  94% {isVi ? 'sức chứa' : 'capacity'}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#F5F7FA] border border-slate-900/[0.06]">
                <div className="text-[12px] text-[#6B7487]">{isVi ? 'Kho Đà Nẵng' : 'Central hub'}</div>
                <div className="font-mono tabular-nums text-[16px] font-semibold text-[#111827] mt-0.5">
                  3,110 SKU
                </div>
                <div className="text-[12px] text-[#16A34A] mt-0.5">
                  68% {isVi ? 'sức chứa' : 'capacity'}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#FFF8F7] border border-[#FF4D38]/25">
                <div className="text-[12px] text-[#C8321F]">{isVi ? 'Kho TP.HCM' : 'South hub'}</div>
                <div className="font-mono tabular-nums text-[16px] font-semibold text-[#111827] mt-0.5">
                  12,650 SKU
                </div>
                <div className="text-[12px] text-[#C8321F] mt-0.5">
                  98% {isVi ? 'gần đầy' : 'near full'}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {inventoryStock.map((item, idx) => (
              <button
                type="button"
                key={item.sku}
                onClick={() => setSelectedItem(idx)}
                className={`w-full text-left p-3 rounded-xl border transition-colors cursor-pointer flex items-center justify-between ${
                  selectedItem === idx
                    ? 'bg-white border-[#FF4D38]'
                    : 'bg-white border-slate-900/[0.08] hover:border-slate-900/[0.16]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      item.status === 'low'
                        ? 'bg-amber-50 text-[#D97706]'
                        : 'bg-[#F5F7FA] text-[#16A34A]'
                    }`}
                  >
                    {item.status === 'low' ? (
                      <AlertTriangleIcon className="w-4 h-4" />
                    ) : (
                      <CheckIcon className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-medium text-[#111827]">{item.name}</span>
                      <span className="text-[11px] font-mono text-[#6B7487]">{item.sku}</span>
                    </div>
                    <div className="text-[12px] text-[#6B7487]">{item.warehouse}</div>
                  </div>
                </div>

                <div className="text-right font-mono tabular-nums">
                  <div className="text-[13px] font-semibold text-[#111827]">
                    {item.stock.toLocaleString()} <span className="text-[11px] text-[#6B7487] font-normal">/ {item.min}</span>
                  </div>
                  <div className={`text-[11px] font-medium ${item.status === 'low' ? 'text-[#D97706]' : 'text-[#16A34A]'}`}>
                    {item.status === 'low' ? (isVi ? 'Dưới định mức' : 'Low stock') : (isVi ? 'An toàn' : 'Optimal')}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'vouchers' && (
        <div className="space-y-2.5">
          {vouchers.map((v) => (
            <div
              key={v.code}
              className="p-3.5 rounded-xl bg-white border border-slate-900/[0.08] flex items-center justify-between gap-3"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-mono tabular-nums font-medium text-[#111827]">
                    {v.code}
                  </span>
                  <span className="text-[13px] font-medium text-[#4B5565]">· {v.type}</span>
                </div>
                <div className="text-[12px] text-[#6B7487] mt-0.5">
                  {v.source} ({v.itemsCount})
                </div>
              </div>
              <div className="text-right">
                <span className={`text-[12px] font-medium ${v.tone}`}>{v.approval}</span>
                <div className="font-mono tabular-nums text-[11px] text-[#6B7487] mt-0.5">{v.time}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'assets' && (
        <div className="space-y-2.5">
          {serialAssets.map((asset) => (
            <div
              key={asset.serial}
              className="p-4 rounded-xl bg-white border border-slate-900/[0.08] space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <span className="text-[13px] font-semibold text-[#111827]">{asset.model}</span>
                  <span className="ml-2 text-[11px] font-mono text-[#6B7487]">{asset.serial}</span>
                </div>
                <span className="font-mono tabular-nums text-[12px] font-medium text-[#16A34A]">
                  {isVi ? 'Sức khỏe' : 'Health'} {asset.health}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] text-[#4B5565] pt-2 border-t border-slate-900/[0.06]">
                <div>
                  <span className="text-[#6B7487]">{isVi ? 'Người giữ: ' : 'Custodian: '}</span>
                  <span className="font-medium text-[#111827]">{asset.holder}</span>
                </div>
                <div>
                  <span className="text-[#6B7487]">{isVi ? 'Bảo hành: ' : 'Status: '}</span>
                  <span className="font-medium text-[#111827]">{asset.warranty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-3 pt-3 border-t border-slate-900/[0.06] flex items-center justify-between text-[12px] text-[#6B7487]">
        <span>
          {isVi ? 'Cân bằng tồn kho tự động theo phân quyền' : 'Automated ledger sync with permissions'}
        </span>
        <span className="font-mono text-[#111827] font-medium">
          {isVi ? 'Đồng bộ tồn kho: Bật' : 'Stock sync: active'}
        </span>
      </div>
    </ShowcaseCard>
  );
}
