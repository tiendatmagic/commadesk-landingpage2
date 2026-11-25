'use client';

import React, { useState } from 'react';
import {
  PenToolIcon,
  StoreIcon,
  GlobeIcon,
  FacebookIcon,
  MessageSquareIcon,
  CheckIcon,
} from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface InteractiveSocialRetailProps {
  isVi: boolean;
}

export function InteractiveSocialRetail({ isVi }: InteractiveSocialRetailProps) {
  const [activeTab, setActiveTab] = useState<'composer' | 'kiotviet' | 'channels'>('composer');
  const [selectedChannel, setSelectedChannel] = useState<'facebook' | 'zalo'>('facebook');

  const tabs = [
    {
      id: 'composer' as const,
      label: isVi ? 'Soạn đăng đa kênh' : 'Post composer',
      icon: <PenToolIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'kiotviet' as const,
      label: isVi ? 'Đồng bộ KiotViet' : 'KiotViet sync',
      icon: <StoreIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'channels' as const,
      label: isVi ? 'Kênh kết nối' : 'Channels',
      icon: <GlobeIcon className="w-3.5 h-3.5" />,
    },
  ];

  const channels = [
    {
      id: 'facebook',
      name: 'Facebook Page Official',
      followers: '124,500',
      status: isVi ? 'Đã kết nối' : 'Connected',
      syncTime: isVi ? 'Vừa xong' : 'Just now',
      icon: FacebookIcon,
      badge: 'Meta Graph API v19',
    },
    {
      id: 'zalo',
      name: 'Zalo OA Doanh nghiệp',
      followers: '48,200',
      status: isVi ? 'Đã kết nối' : 'Connected',
      syncTime: isVi ? '1 phút trước' : '1m ago',
      icon: MessageSquareIcon,
      badge: 'Zalo Official Account',
    },
    {
      id: 'kiotviet',
      name: 'KiotViet POS Multi-Store',
      followers: isVi ? '5 chi nhánh' : '5 branches',
      status: isVi ? 'Đồng bộ 2 chiều' : 'Two-way sync',
      syncTime: 'Realtime',
      icon: StoreIcon,
      badge: 'KiotViet Open API',
    },
  ];

  const kiotvietProducts = [
    {
      code: 'SP-KV-1092',
      name: isVi ? 'Tai nghe Bluetooth Pro' : 'Wireless Pro Headphone',
      branches: isVi ? '5/5 cửa hàng' : '5/5 branches',
      posStock: 340,
      commadeskStock: 340,
    },
    {
      code: 'SP-KV-0481',
      name: isVi ? 'Bàn phím cơ không dây' : 'Mechanical Wireless Keyboard',
      branches: isVi ? '3/5 cửa hàng' : '3/5 branches',
      posStock: 85,
      commadeskStock: 85,
    },
    {
      code: 'SP-KV-9204',
      name: isVi ? 'Chuột công thái học' : 'Ergonomic Wireless Mouse',
      branches: isVi ? '5/5 cửa hàng' : '5/5 branches',
      posStock: 142,
      commadeskStock: 142,
    },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'Social Gateway & Đồng bộ KiotViet POS' : 'Social Gateway & KiotViet POS Sync'}
      headerRight={
        <ShowcaseTabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      }
    >
      {activeTab === 'composer' && (
        <div className="rounded-xl bg-white border border-slate-900/[0.08] p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-900/[0.06]">
            <span className="text-[13px] font-semibold text-[#111827]">
              {isVi ? 'Xuất bản nội dung đồng thời' : 'Multi-channel post composer'}
            </span>
            <div className="flex items-center gap-1 p-0.5 bg-[#F5F7FA] rounded-lg border border-slate-900/[0.06]">
              <button
                type="button"
                onClick={() => setSelectedChannel('facebook')}
                className={`px-2.5 py-1 text-[12px] font-medium rounded-md cursor-pointer transition-colors ${
                  selectedChannel === 'facebook'
                    ? 'bg-white text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.06)]'
                    : 'text-[#6B7487] hover:text-[#111827]'
                }`}
              >
                Facebook Page
              </button>
              <button
                type="button"
                onClick={() => setSelectedChannel('zalo')}
                className={`px-2.5 py-1 text-[12px] font-medium rounded-md cursor-pointer transition-colors ${
                  selectedChannel === 'zalo'
                    ? 'bg-white text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.06)]'
                    : 'text-[#6B7487] hover:text-[#111827]'
                }`}
              >
                Zalo OA
              </button>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.06] space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#111827] text-white font-semibold flex items-center justify-center text-[12px]">
                C
              </div>
              <div>
                <div className="text-[13px] font-semibold text-[#111827]">CommaDesk Official Store</div>
                <div className="text-[11px] text-[#6B7487]">
                  {selectedChannel === 'facebook'
                    ? 'Meta Graph API'
                    : 'Zalo OA Broadcast'}
                </div>
              </div>
            </div>

            <p className="text-[13px] text-[#4B5565] leading-relaxed">
              {isVi
                ? 'Ưu đãi tháng 10: Giảm 15% phụ kiện văn phòng và thiết bị công thái học tại toàn bộ 5 chi nhánh.'
                : 'October campaign: 15% off ergonomic desk accessories across all 5 retail locations.'}
            </p>

            <div className="p-2.5 rounded-lg bg-white border border-slate-900/[0.08] flex items-center justify-between text-[12px]">
              <span className="text-[#4B5565]">
                {isVi ? 'Đính kèm: 3 ảnh sản phẩm' : 'Attached: 3 product images'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#16A34A] font-medium">
                <CheckIcon className="w-3.5 h-3.5" />
                <span>{isVi ? 'Sẵn sàng đăng' : 'Ready to publish'}</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'kiotviet' && (
        <div className="space-y-2.5">
          <div className="p-3.5 rounded-xl bg-white border border-slate-900/[0.08] flex flex-wrap items-center justify-between gap-2">
            <span className="text-[13px] font-semibold text-[#111827]">
              {isVi ? 'Đồng bộ tồn kho POS KiotViet hai chiều' : 'Two-way KiotViet POS stock sync'}
            </span>
            <span className="font-mono text-[12px] font-medium text-[#16A34A]">
              Webhook 200 OK
            </span>
          </div>

          {kiotvietProducts.map((p) => (
            <div
              key={p.code}
              className="p-3.5 rounded-xl bg-white border border-slate-900/[0.08] flex items-center justify-between gap-3"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-medium text-[#111827]">{p.name}</span>
                  <span className="text-[11px] font-mono text-[#6B7487]">{p.code}</span>
                </div>
                <div className="text-[12px] text-[#6B7487] mt-0.5">{p.branches}</div>
              </div>
              <div className="text-right font-mono tabular-nums">
                <div className="text-[13px] font-semibold text-[#111827]">
                  {p.posStock} <span className="text-[11px] text-[#16A34A] font-medium">100% match</span>
                </div>
                <div className="text-[11px] text-[#6B7487] mt-0.5">
                  POS {p.posStock} = Desk {p.commadeskStock}
                </div>
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
              <div
                key={c.id}
                className="p-3.5 rounded-xl bg-white border border-slate-900/[0.08] flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F5F7FA] border border-slate-900/[0.08] flex items-center justify-center text-[#111827]">
                    <ChannelIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-[#111827]">{c.name}</div>
                    <div className="font-mono tabular-nums text-[12px] text-[#6B7487] mt-0.5">
                      {c.followers} · {c.badge}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[12px] font-medium text-[#16A34A]">{c.status}</span>
                  <div className="font-mono text-[11px] text-[#6B7487] mt-0.5">{c.syncTime}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-3 pt-3 border-t border-slate-900/[0.06] flex items-center justify-between text-[12px] text-[#6B7487]">
        <span>{isVi ? 'Kết nối Meta API & KiotViet Open API' : 'Meta API & KiotViet Open API'}</span>
        <span className="font-mono tabular-nums text-[#111827] font-medium">Latency: 120 ms</span>
      </div>
    </ShowcaseCard>
  );
}
