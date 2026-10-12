'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
  const [activeTab, setActiveTab] = useState<'3d-warehouse' | 'warehouses' | 'vouchers' | 'assets'>('3d-warehouse');
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const tabs = [
    {
      id: '3d-warehouse' as const,
      label: isVi ? 'Kho Thông Minh 3D' : '3D Warehouse',
      icon: <BoxIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'warehouses' as const,
      label: isVi ? 'Kho & SKU' : 'SKU Stock',
      icon: <BoxIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'vouchers' as const,
      label: isVi ? 'Phiếu Kho' : 'Vouchers',
      icon: <ClipboardListIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'assets' as const,
      label: isVi ? 'Tài Sản Serial' : 'Serial Assets',
      icon: <LaptopIcon className="w-3.5 h-3.5" />,
    },
  ];

  const inventoryStock = [
    {
      sku: 'SKU-LOG-204',
      name: isVi ? 'Thùng Carton Tiêu Chuẩn 5 Lớp' : '5-Ply Shipping Carton Box',
      warehouse: isVi ? 'Kho Tổng Quang Minh' : 'Quang Minh Central Hub',
      stock: 4850,
      min: 1000,
      status: 'safe',
      trend: '+12%',
      value: '24,250,000 đ',
    },
    {
      sku: 'SKU-DEV-882',
      name: isVi ? 'Màn Hình Dell UltraSharp U2723QE' : 'Dell UltraSharp 27" 4K',
      warehouse: isVi ? 'Kho Kỹ Thuật Tầng 4' : 'Engineering Dept Hub',
      stock: 3,
      min: 8,
      status: 'low',
      trend: '-62%',
      value: '43,500,000 đ',
    },
    {
      sku: 'SKU-VPP-114',
      name: isVi ? 'Hộp Mực HP LaserJet Toner 85A' : 'HP Toner Cartridge 85A',
      warehouse: isVi ? 'Kho Văn Phòng Phẩm Keangnam' : 'Keangnam Supplies Depot',
      stock: 28,
      min: 20,
      status: 'safe',
      trend: '+5%',
      value: '26,600,000 đ',
    },
  ];

  const vouchers = [
    {
      code: 'NK-2026-0814',
      type: isVi ? 'Phiếu Nhập Kho' : 'Inbound Receipt',
      source: isVi ? 'Nhà cung cấp Dell Vietnam' : 'Dell Vendor Official',
      itemsCount: '15 SKU',
      approval: isVi ? 'Đã duyệt 2/2 cấp' : 'Approved (2/2)',
      time: '14:20 Hôm nay',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      code: 'XK-2026-0492',
      type: isVi ? 'Phiếu Xuất Cấp Phát' : 'Asset Dispatch',
      source: isVi ? 'Phòng Kỹ Thuật & Phần Mềm' : 'Engineering Department',
      itemsCount: '4 Máy trạm',
      approval: isVi ? 'Chờ Kế toán trưởng' : 'Pending CFO',
      time: '11:05 Hôm nay',
      statusColor: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      code: 'CK-2026-0118',
      type: isVi ? 'Phiếu Chuyển Kho' : 'Inter-Warehouse Transfer',
      source: isVi ? 'Kho Tổng -> Chi Nhánh Đà Nẵng' : 'Main Hub -> Da Nang Hub',
      itemsCount: '120 Kiện',
      approval: isVi ? 'Đang vận chuyển' : 'In Transit',
      time: '08:45 Hôm nay',
      statusColor: 'bg-blue-50 text-blue-700 border-blue-200',
    },
  ];

  const serialAssets = [
    {
      serial: 'MBP-M3M-99104',
      model: 'MacBook Pro 16" M3 Max',
      holder: isVi ? 'Đặng Hoàng Sơn (Tech Lead)' : 'Son Dang (Tech Lead)',
      dept: 'Engineering Core',
      assignedDate: '15/01/2026',
      warranty: isVi ? 'Bảo hành đến 2028' : 'Warranty until 2028',
      health: '98%',
    },
    {
      serial: 'PRN-HP-55210',
      model: 'Máy In Laser HP Enterprise M608',
      holder: isVi ? 'Tầng 6 - Khối Vận Hành' : 'Floor 6 - Operations Hub',
      dept: 'Operations',
      assignedDate: '10/08/2025',
      warranty: isVi ? 'Bảo hành chính hãng' : 'OEM Certified',
      health: '92%',
    },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'Quản Trị Kho SKU & Tài Sản Doanh Nghiệp' : 'SKU Inventory & Asset Lifecycle'}
      headerRight={
        <ShowcaseTabBar
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      }
    >
      {activeTab === '3d-warehouse' && (
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
          <Image
            src="/showcase/tech_inventory_assets.webp"
            alt="Futuristic 3D Smart Warehouse and Automated Asset Tracking"
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />

          {/* Floating Badge 1: Robotic Matrix Storage */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 animate-float bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg max-w-[220px] hidden sm:block">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span className="text-[11px] font-bold text-slate-900">
                {isVi ? 'Kho Tự Động Hóa Robot' : 'Robotic Matrix Storage'}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-1">
              <div className="bg-amber-500 h-full w-[95%] rounded-full animate-pulse"></div>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">
              {isVi ? 'Quét RFID & Barcode Laser tức thì' : 'Instant Laser Barcode & RFID Sync'}
            </span>
          </div>

          {/* Floating Badge 2: Stock Accuracy */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 animate-float-delayed bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg hidden sm:block">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                <CheckIcon className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900">
                  {isVi ? 'Độ Chính Xác Tồn Kho 99.9%' : '99.9% Stock Accuracy'}
                </p>
                <p className="text-[10px] text-emerald-600 font-semibold">
                  {isVi ? 'Tự động cân đối phiếu nhập xuất' : 'Automated Ledger Reconciliation'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'warehouses' && (
        <div className="space-y-3">
          {/* Warehouse 3D Overview Card */}
          <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/90 p-4 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-900">
                  {isVi ? 'Cân Bằng Số Dư Kho Tức Thì (Real-Time Balances)' : 'Real-Time Inventory Balances'}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  3 {isVi ? 'Kho Hoạt Động' : 'Active Depots'}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-700">
                {isVi ? 'Tổng giá trị: 1.48 Tỷ VNĐ' : 'Total Value: $58.2K'}
              </span>
            </div>

            {/* Simulated 3D Stock Racks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-2">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-center">
                <div className="text-[10px] font-semibold text-slate-500 uppercase">{isVi ? 'Kho Tổng HN' : 'Main Hub'}</div>
                <div className="text-sm font-extrabold text-slate-900 mt-0.5">8,420 SKU</div>
                <div className="text-[10px] text-emerald-600 font-bold mt-1">94% {isVi ? 'Sức chứa' : 'Capacity'}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-center">
                <div className="text-[10px] font-semibold text-slate-500 uppercase">{isVi ? 'Kho Đà Nẵng' : 'Central Hub'}</div>
                <div className="text-sm font-extrabold text-slate-900 mt-0.5">3,110 SKU</div>
                <div className="text-[10px] text-emerald-600 font-bold mt-1">68% {isVi ? 'Sức chứa' : 'Capacity'}</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-amber-200 bg-amber-50/30 shadow-2xs text-center">
                <div className="text-[10px] font-semibold text-amber-700 uppercase">{isVi ? 'Kho TP.HCM' : 'South Hub'}</div>
                <div className="text-sm font-extrabold text-slate-900 mt-0.5">12,650 SKU</div>
                <div className="text-[10px] text-amber-600 font-bold mt-1">98% {isVi ? 'Cảnh báo đầy' : 'Near Full'}</div>
              </div>
            </div>
          </div>

          {/* SKU List with threshold alert */}
          <div className="space-y-2">
            {inventoryStock.map((item, idx) => (
              <div
                key={item.sku}
                onClick={() => setSelectedItem(idx)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  selectedItem === idx
                    ? 'bg-white border-[#FF4D38] shadow-sm'
                    : 'bg-white/80 border-slate-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                    item.status === 'low' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {item.status === 'low' ? <AlertTriangleIcon className="w-4 h-4" /> : <CheckIcon className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">{item.name}</span>
                      <span className="text-[10px] font-mono text-slate-400">{item.sku}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{item.warehouse}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-extrabold text-slate-900">
                    {item.stock.toLocaleString()} <span className="text-[10px] text-slate-500 font-normal">/ min {item.min}</span>
                  </div>
                  <div className={`text-[10px] font-bold ${item.status === 'low' ? 'text-amber-600' : 'text-emerald-600'}`}>
                    {item.status === 'low' ? (isVi ? 'Cảnh báo sắp hết' : 'Low Stock Warning') : (isVi ? 'Tồn an toàn' : 'Optimal Level')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'vouchers' && (
        <div className="space-y-2.5">
          <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs mb-2">
            <span className="text-xs font-bold text-slate-900">
              {isVi ? 'Quy Trình Duyệt Phiếu Kho Đa Cấp (Stock Voucher Workflow)' : 'Multi-Level Voucher Approvals'}
            </span>
            <p className="text-[11px] text-slate-500 mt-1">
              {isVi
                ? 'Tự động luân chuyển: Thủ kho đề xuất -> Quản lý duyệt -> Kế toán đối soát -> Tự động trừ tồn kho.'
                : 'Automated pipeline: Warehouse keeper initiates -> Manager approves -> CFO verifies -> Stock deducted.'}
            </p>
          </div>

          {vouchers.map((v) => (
            <div key={v.code} className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-900">{v.code}</span>
                  <span className="text-xs font-semibold text-slate-700">· {v.type}</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">{v.source} ({v.itemsCount})</div>
              </div>
              <div className="text-right">
                <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border ${v.statusColor}`}>
                  {v.approval}
                </span>
                <div className="text-[10px] text-slate-400 mt-1">{v.time}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'assets' && (
        <div className="space-y-2.5">
          <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs mb-2">
            <span className="text-xs font-bold text-slate-900">
              {isVi ? 'Quản Lý Tài Sản Serial & Thiết Bị Máy Móc' : 'Fixed Serial Assets & Machinery'}
            </span>
            <p className="text-[11px] text-slate-500 mt-1">
              {isVi
                ? 'Định danh duy nhất từng máy móc, mã serial, khấu hao, bàn giao cá nhân và lịch sử bảo trì.'
                : 'Individual tracking by serial number, warranty status, employee custody and maintenance history.'}
            </p>
          </div>

          {serialAssets.map((asset) => (
            <div key={asset.serial} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900">{asset.model}</span>
                  <span className="ml-2 text-[10px] font-mono text-slate-400">{asset.serial}</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {isVi ? 'Sức khỏe thiết bị' : 'Health'} {asset.health}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1 border-t border-slate-100">
                <div>
                  <span className="text-slate-400">{isVi ? 'Người giữ: ' : 'Custodian: '}</span>
                  <span className="font-semibold text-slate-800">{asset.holder}</span>
                </div>
                <div>
                  <span className="text-slate-400">{isVi ? 'Bảo hành: ' : 'Status: '}</span>
                  <span className="font-semibold text-slate-800">{asset.warranty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Status Ticker */}
      <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          {isVi ? 'Đồng bộ tự động cân bằng tồn kho theo phân quyền đa tầng' : 'Inventory auto-synced under multi-tier permissions'}
        </span>
        <span className="font-semibold text-slate-700">Audit Trail: OK</span>
      </div>
    </ShowcaseCard>
  );
}
