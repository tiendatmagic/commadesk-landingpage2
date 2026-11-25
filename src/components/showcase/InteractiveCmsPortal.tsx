'use client';

import React, { useState } from 'react';
import {
  PaletteIcon,
  NewspaperIcon,
  BarChartIcon,
  LaptopIcon,
  SmartphoneIcon,
  EyeIcon,
  MessageSquareIcon,
} from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface InteractiveCmsPortalProps {
  isVi: boolean;
}

export function InteractiveCmsPortal({ isVi }: InteractiveCmsPortalProps) {
  const [activeTab, setActiveTab] = useState<'builder' | 'articles' | 'analytics'>('builder');
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile'>('desktop');

  const tabs = [
    {
      id: 'builder' as const,
      label: isVi ? 'Trình dựng khối' : 'Page builder',
      icon: <PaletteIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'articles' as const,
      label: isVi ? 'Tòa soạn tin' : 'Articles',
      icon: <NewspaperIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'analytics' as const,
      label: isVi ? 'Thống kê' : 'Analytics',
      icon: <BarChartIcon className="w-3.5 h-3.5" />,
    },
  ];

  const blocks = [
    { id: 'hero', name: isVi ? 'Khối Hero Banner' : 'Hero banner block', type: 'Hero' },
    { id: 'news', name: isVi ? 'Lưới tin tức nội bộ' : 'Company news grid', type: 'Articles' },
    { id: 'events', name: isVi ? 'Lịch sự kiện doanh nghiệp' : 'Town hall calendar', type: 'Events' },
    { id: 'feedback', name: isVi ? 'Biểu mẫu góp ý' : 'Feedback form', type: 'Form' },
  ];

  const articles = [
    {
      id: 'art-01',
      title: isVi ? 'Thông điệp Tổng Giám đốc: Kế hoạch Q4' : 'CEO quarterly address: Q4 plan',
      category: isVi ? 'Tin lãnh đạo' : 'Executive news',
      views: '2,480',
      comments: '42',
      status: isVi ? 'Đã xuất bản' : 'Published',
      isDraft: false,
      date: '08/10/2026',
    },
    {
      id: 'art-02',
      title: isVi ? 'Chính sách phúc lợi & Khám sức khỏe 2026' : 'Annual health screening & benefits 2026',
      category: isVi ? 'Chính sách' : 'Culture',
      views: '1,890',
      comments: '18',
      status: isVi ? 'Đã xuất bản' : 'Published',
      isDraft: false,
      date: '05/10/2026',
    },
    {
      id: 'art-03',
      title: isVi ? 'Quy trình đăng ký văn phòng phẩm' : 'Stationery dispatch procedure',
      category: isVi ? 'Quy trình nội bộ' : 'Internal SOP',
      views: '940',
      comments: '6',
      status: isVi ? 'Bản nháp' : 'Draft',
      isDraft: true,
      date: '03/10/2026',
    },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'CMS Studio & Cổng thông tin nội bộ' : 'CMS Studio & Enterprise Intranet'}
      headerRight={
        <ShowcaseTabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      }
    >
      {activeTab === 'builder' && (
        <div className="rounded-xl bg-white border border-slate-900/[0.08] p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-900/[0.06]">
            <span className="text-[13px] font-medium text-[#111827]">
              {isVi ? 'Trình dựng trang theo khối' : 'Visual block composer'}
            </span>
            <div className="flex items-center gap-1 p-0.5 bg-[#F5F7FA] rounded-lg border border-slate-900/[0.06]">
              <button
                type="button"
                onClick={() => setActiveDevice('desktop')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[12px] font-medium rounded-md cursor-pointer transition-colors ${
                  activeDevice === 'desktop'
                    ? 'bg-white text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.06)]'
                    : 'text-[#6B7487] hover:text-[#111827]'
                }`}
              >
                <LaptopIcon className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveDevice('mobile')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[12px] font-medium rounded-md cursor-pointer transition-colors ${
                  activeDevice === 'mobile'
                    ? 'bg-white text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.06)]'
                    : 'text-[#6B7487] hover:text-[#111827]'
                }`}
              >
                <SmartphoneIcon className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>
          </div>

          <div
            className={`mx-auto transition-[max-width] duration-200 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.08] p-3 space-y-2 ${
              activeDevice === 'mobile' ? 'max-w-[290px]' : 'w-full'
            }`}
          >
            {blocks.map((b, i) => (
              <div
                key={b.id}
                className="p-2.5 rounded-lg border border-slate-900/[0.08] bg-white hover:border-[#FF4D38]/50 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-[12px] text-[#6B7487] font-mono tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="text-[13px] font-medium text-[#111827]">{b.name}</span>
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#F5F7FA] text-[#4B5565] border border-slate-900/[0.06]">
                  {b.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'articles' && (
        <div className="space-y-2.5">
          {articles.map((art) => (
            <div
              key={art.id}
              className="p-3.5 rounded-xl bg-white border border-slate-900/[0.08] space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-[#6B7487]">{art.category}</span>
                <span
                  className={`font-mono text-[11px] font-medium ${
                    art.isDraft ? 'text-[#D97706]' : 'text-[#16A34A]'
                  }`}
                >
                  {art.status}
                </span>
              </div>
              <div className="text-[13.5px] font-medium text-[#111827]">{art.title}</div>
              <div className="flex items-center gap-4 font-mono tabular-nums text-[12px] text-[#6B7487] pt-1.5 border-t border-slate-900/[0.06]">
                <span className="inline-flex items-center gap-1.5">
                  <EyeIcon className="w-3.5 h-3.5" />
                  <span>{art.views}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MessageSquareIcon className="w-3.5 h-3.5" />
                  <span>{art.comments}</span>
                </span>
                <span className="ml-auto">{art.date}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-white border border-slate-900/[0.08]">
              <div className="text-[12px] text-[#6B7487]">{isVi ? 'Tổng lượt đọc' : 'Total reads'}</div>
              <div className="font-mono tabular-nums text-[22px] font-semibold text-[#111827] mt-1">
                42,850
              </div>
              <div className="text-[12px] font-medium text-[#16A34A] mt-0.5">
                +24% {isVi ? 'so với tuần trước' : 'vs last week'}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-900/[0.08]">
              <div className="text-[12px] text-[#6B7487]">{isVi ? 'Thời gian đọc TB' : 'Avg read time'}</div>
              <div className="font-mono tabular-nums text-[22px] font-semibold text-[#111827] mt-1">
                3m 42s
              </div>
              <div className="text-[12px] text-[#6B7487] mt-0.5">
                {isVi ? 'Bản tin nội bộ' : 'Internal bulletins'}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-900/[0.08]">
              <div className="text-[12px] text-[#6B7487]">{isVi ? 'Tỷ lệ đọc' : 'Read rate'}</div>
              <div className="font-mono tabular-nums text-[22px] font-semibold text-[#111827] mt-1">
                88.4%
              </div>
              <div className="text-[12px] font-medium text-[#16A34A] mt-0.5">
                +4.2% {isVi ? 'tháng này' : 'this month'}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-900/[0.08] space-y-3">
            <div className="text-[13px] font-medium text-[#111827]">
              {isVi ? 'Chuyên mục được đọc nhiều nhất' : 'Top topic clusters'}
            </div>
            <div className="space-y-2.5">
              <div>
                <div className="flex justify-between text-[12px] mb-1 text-[#4B5565]">
                  <span>{isVi ? 'Thông điệp Ban lãnh đạo' : 'Executive strategy'}</span>
                  <span className="font-mono tabular-nums">94%</span>
                </div>
                <div className="w-full h-1.5 bg-[#ECEFF4] rounded-full overflow-hidden">
                  <div className="h-full bg-[#FF4D38] rounded-full" style={{ width: '94%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[12px] mb-1 text-[#4B5565]">
                  <span>{isVi ? 'Quy chế & Phúc lợi nhân sự' : 'HR benefits & SOP'}</span>
                  <span className="font-mono tabular-nums">78%</span>
                </div>
                <div className="w-full h-1.5 bg-[#ECEFF4] rounded-full overflow-hidden">
                  <div className="h-full bg-[#111827] rounded-full" style={{ width: '78%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-3 pt-3 border-t border-slate-900/[0.06] flex flex-wrap items-center justify-between gap-2 text-[12px] text-[#6B7487]">
        <span>
          {isVi
            ? 'Tương thích giao diện Web, Desktop và Mobile'
            : 'Responsive Web, Desktop, and Mobile portal'}
        </span>
        <span className="font-mono text-[#111827] font-medium">
          {isVi ? 'Cổng nội bộ: Đang mở' : 'Intranet: Active'}
        </span>
      </div>
    </ShowcaseCard>
  );
}
