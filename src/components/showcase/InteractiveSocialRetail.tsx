'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  PenToolIcon,
  StoreIcon,
  GlobeIcon,
  FacebookIcon,
  MessageSquareIcon,
  GiftIcon,
  CheckIcon,
} from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface InteractiveSocialRetailProps {
  isVi: boolean;
}

export function InteractiveSocialRetail({ isVi }: InteractiveSocialRetailProps) {
  const [activeTab, setActiveTab] = useState<'3d-retail' | 'composer' | 'kiotviet' | 'channels'>('3d-retail');
  const [selectedChannel, setSelectedChannel] = useState<'facebook' | 'zalo'>('facebook');

  const tabs = [
    {
      id: '3d-retail' as const,
      label: isVi ? 'Bán Lẻ Đa Kênh 3D' : '3D Retail Hub',
      icon: <StoreIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'composer' as const,
      label: isVi ? 'Soạn Đăng Đa Kênh' : 'Post Composer',
      icon: <PenToolIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'kiotviet' as const,
      label: isVi ? 'Đồng Bộ KiotViet' : 'KiotViet Sync',
      icon: <StoreIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'channels' as const,
      label: isVi ? 'Kênh Kết Nối' : 'Channels',
      icon: <GlobeIcon className="w-3.5 h-3.5" />,
    },
  ];

  const channels = [
    {
      id: 'facebook',
      name: 'Facebook Page Official',
      followers: '124,500',
      status: isVi ? 'Đang kết nối' : 'Connected',
      syncTime: 'Vừa xong',
      icon: FacebookIcon,
      badge: 'Meta Graph API v19',
    },
    {
      id: 'zalo',
      name: 'Zalo OA Doanh Nghiệp',
      followers: '48,200',
      status: isVi ? 'Đang kết nối' : 'Connected',
      syncTime: '1 phút trước',
      icon: MessageSquareIcon,
      badge: 'Zalo Official Account',
    },
    {
      id: 'kiotviet',
      name: 'KiotViet POS Multi-Store',
      followers: '5 Chi nhánh',
      status: isVi ? 'Đồng bộ tự động 2 chiều' : 'Bi-directional Sync',
      syncTime: 'Real-time',
      icon: StoreIcon,
      badge: 'KiotViet Open API',
    },
  ];

  const kiotvietProducts = [
    {
      code: 'SP-KV-1092',
      name: isVi ? 'Tai Nghe Bluetooth Không Dây Pro' : 'Wireless Pro Headphone',
      branches: isVi ? '5/5 Cửa hàng' : '5/5 Branches',
      posStock: 340,
      commadeskStock: 340,
      status: 'synced',
    },
    {
      code: 'SP-KV-0481',
      name: isVi ? 'Bàn Phím Cơ Không Dây RGB' : 'Mechanical RGB Keyboard',
      branches: isVi ? '3/5 Cửa hàng' : '3/5 Branches',
      posStock: 85,
      commadeskStock: 85,
      status: 'synced',
    },
    {
      code: 'SP-KV-9204',
      name: isVi ? 'Chuột Công Thái Học Không Dây' : 'Ergonomic Wireless Mouse',
      branches: isVi ? '5/5 Cửa hàng' : '5/5 Branches',
      posStock: 142,
      commadeskStock: 142,
      status: 'synced',
    },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'Social Gateway & Đồng Bộ Bán Lẻ KiotViet' : 'Social Gateway & KiotViet Retail Integration'}
      headerRight={
        <ShowcaseTabBar
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      }
    >
      {activeTab === '3d-retail' && (
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
          <Image
            src="/showcase/tech_inventory_assets.webp"
            alt="Futuristic 3D Smart Retail and Omnichannel Fulfillment"
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />

          {/* Floating Badge 1: KiotViet POS Sync */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 animate-float bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg max-w-[220px] hidden sm:block">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-[11px] font-bold text-slate-900">
                {isVi ? 'Đồng Bộ KiotViet POS Live' : 'KiotViet POS Realtime'}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-1">
              <div className="bg-blue-500 h-full w-[96%] rounded-full animate-pulse"></div>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">
              {isVi ? 'Tự động trừ tồn kho khi phát sinh đơn' : 'Auto-deduct stock on order completion'}
            </span>
          </div>

          {/* Floating Badge 2: Omnichannel Channels */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 animate-float-delayed bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg hidden sm:block">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                <CheckIcon className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900">
                  {isVi ? 'Đăng Bài Đa Kênh Tự Động' : 'Multi-Channel Auto-Publish'}
                </p>
                <p className="text-[10px] text-emerald-600 font-semibold">
                  {isVi ? 'Meta Facebook & Zalo Official Account' : 'Facebook & Zalo OA Connected'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'composer' && (
        <div className="space-y-3">
          <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/90 p-4 shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-900">
                {isVi ? 'Xuất Bản Nội Dung Đồng Thời Đa Nền Tảng' : 'Multi-Channel Live Post Composer'}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setSelectedChannel('facebook')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer ${
                    selectedChannel === 'facebook'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Facebook Page
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedChannel('zalo')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer ${
                    selectedChannel === 'zalo'
                      ? 'bg-blue-500 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Zalo OA
                </button>
              </div>
            </div>

            {/* Post Preview Simulation */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FF4D38]/10 text-[#FF4D38] font-extrabold flex items-center justify-center text-xs">
                  C
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">CommaDesk Official Store</div>
                  <div className="text-[10px] text-slate-400">
                    {selectedChannel === 'facebook' ? 'Đăng tự động qua Social Gateway' : 'Đăng qua Zalo OA Broadcast'}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-800 leading-relaxed pt-1 flex items-start gap-1.5">
                <GiftIcon className="w-4 h-4 text-[#FF4D38] shrink-0 mt-0.5" />
                <span>
                  {isVi
                    ? 'Ưu đãi độc quyền tháng này: Giảm ngay 15% cho toàn bộ phụ kiện văn phòng và trang thiết bị công thái học. Hàng chính hãng, bảo hành 2 năm!'
                    : 'Exclusive Monthly Campaign: Enjoy 15% off across all ergonomic office accessories and tech workstations. Verified warranty!'}
                </span>
              </p>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[11px]">
                <span className="text-slate-600 font-medium">
                  {isVi ? 'Đính kèm: 3 Ảnh sản phẩm + Nút Mua ngay' : 'Attached: 3 Product Assets + CTA'}
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                  <CheckIcon className="w-3.5 h-3.5" />
                  <span>Ready to Broadcast</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'kiotviet' && (
        <div className="space-y-2.5">
          <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs mb-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">
                {isVi ? 'Đồng Bộ Hai Chiều Tồn Kho & Đơn Hàng POS KiotViet' : 'Bi-directional Real-Time KiotViet Sync'}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                <span>Live Webhook 200 OK</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              {isVi
                ? 'Khi có đơn hàng bán lẻ tại quầy POS KiotViet, số lượng tồn kho trên CommaDesk tự động cân bằng tức thì trong < 1.2s.'
                : 'Whenever a POS sale occurs at any retail branch, CommaDesk inventory balance updates in < 1.2s.'}
            </p>
          </div>

          {kiotvietProducts.map((p) => (
            <div key={p.code} className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">{p.name}</span>
                  <span className="text-[10px] font-mono text-slate-400">{p.code}</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">{p.branches}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-extrabold text-slate-900">
                  {p.posStock} <span className="text-[10px] text-emerald-600 font-bold">Khớp 100%</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">POS: {p.posStock} = CP: {p.commadeskStock}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'channels' && (
        <div className="space-y-2.5">
          {channels.map((c) => {
            const ChannelIcon = c.icon;
            return (
              <div key={c.id} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                    <ChannelIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{c.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {c.followers} · <span className="font-mono text-slate-400">{c.badge}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {c.status}
                  </span>
                  <div className="text-[10px] text-slate-400 mt-1">{c.syncTime}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Bottom Status Ticker */}
      <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          {isVi ? 'Đảm bảo tuân thủ chính sách Meta API & KiotViet Open API' : 'Compliant with Meta API & KiotViet Open Protocols'}
        </span>
        <span className="font-semibold text-slate-700">Latency: 120ms</span>
      </div>
    </ShowcaseCard>
  );
}
