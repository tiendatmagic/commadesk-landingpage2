'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  PaletteIcon,
  NewspaperIcon,
  BarChartIcon,
  LaptopIcon,
  SmartphoneIcon,
  EyeIcon,
  MessageSquareIcon,
  TrendingUpIcon,
  CheckIcon,
} from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface InteractiveCmsPortalProps {
  isVi: boolean;
}

export function InteractiveCmsPortal({ isVi }: InteractiveCmsPortalProps) {
  const [activeTab, setActiveTab] = useState<'3d-portal' | 'builder' | 'articles' | 'analytics'>('3d-portal');
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile'>('desktop');

  const tabs = [
    {
      id: '3d-portal' as const,
      label: isVi ? 'Cổng Tri Thức 3D' : '3D Portal',
      icon: <PaletteIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'builder' as const,
      label: isVi ? 'Trình Dựng Khối' : 'Page Builder',
      icon: <PaletteIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'articles' as const,
      label: isVi ? 'Tòa Soạn Tin' : 'Articles',
      icon: <NewspaperIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'analytics' as const,
      label: isVi ? 'Thống Kê' : 'Analytics',
      icon: <BarChartIcon className="w-3.5 h-3.5" />,
    },
  ];

  const blocks = [
    { id: 'hero', name: isVi ? 'Khối Hero Banner Động' : 'Dynamic Hero Banner', type: 'Hero' },
    { id: 'news', name: isVi ? 'Lưới Tin Tức Nội Bộ' : 'Company News Grid', type: 'Articles' },
    { id: 'events', name: isVi ? 'Lịch Sự Kiện Doanh Nghiệp' : 'Town Hall Events Calendar', type: 'Events' },
    { id: 'feedback', name: isVi ? 'Form Thu Thập Góp Ý' : 'Public Feedback Form', type: 'Form' },
  ];

  const articles = [
    {
      id: 'art-01',
      title: isVi ? 'Thông điệp Tổng Giám đốc: Tầm nhìn Q4 & Kỷ nguyên AI' : 'CEO Quarterly Address: Q4 Vision & AI Evolution',
      category: isVi ? 'Tin Ban Lãnh Đạo' : 'Executive News',
      views: '2,480',
      comments: '42',
      status: isVi ? 'Đã xuất bản' : 'Published',
      date: '08/10/2026',
    },
    {
      id: 'art-02',
      title: isVi ? 'Chính sách Phúc lợi & Gói khám sức khỏe định kỳ 2026' : 'Annual Health Screening & Employee Benefits 2026',
      category: isVi ? 'Chính Sách & Văn Hóa' : 'Culture & Benefits',
      views: '1,890',
      comments: '18',
      status: isVi ? 'Đã xuất bản' : 'Published',
      date: '05/10/2026',
    },
    {
      id: 'art-03',
      title: isVi ? 'Hướng dẫn Quy trình Đăng ký Văn phòng phẩm mới' : 'Standard Operating Procedure: Stationery Dispatch',
      category: isVi ? 'Quy Trình Nội Bộ' : 'Internal SOP',
      views: '940',
      comments: '6',
      status: isVi ? 'Bản nháp' : 'Draft Review',
      date: '03/10/2026',
    },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'CMS Studio & Cổng Thông Tin Doanh Nghiệp' : 'CMS Studio & Enterprise Intranet'}
      headerRight={
        <ShowcaseTabBar
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      }
    >
      {activeTab === '3d-portal' && (
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
          <Image
            src="/showcase/tech_operations_documents.webp"
            alt="Futuristic 3D Enterprise Knowledge Hub and Digital Publishing"
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />

          {/* Floating Badge 1: Knowledge Hub */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 animate-float bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg max-w-[220px] hidden sm:block">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-violet-500"></span>
              <span className="text-[11px] font-bold text-slate-900">
                {isVi ? 'Thư Viện Tri Thức Doanh Nghiệp' : 'Enterprise Knowledge Hub'}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-1">
              <div className="bg-violet-500 h-full w-[95%] rounded-full animate-pulse"></div>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">
              {isVi ? 'Tìm kiếm toàn văn ngữ nghĩa AI' : 'Semantic AI Full-Text Search'}
            </span>
          </div>

          {/* Floating Badge 2: Visual Publishing */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 animate-float-delayed bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg hidden sm:block">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                <CheckIcon className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900">
                  {isVi ? 'Xuất Bản Không Cần Code' : 'No-Code Page Publishing'}
                </p>
                <p className="text-[10px] text-emerald-600 font-semibold">
                  {isVi ? 'Chuẩn Responsive Desktop & Mobile' : 'Responsive Desktop & Mobile Native'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'builder' && (
        <div className="space-y-3">
          {/* Builder Canvas Simulation */}
          <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/90 p-3 sm:p-4 shadow-xs">
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-900">
                  {isVi ? 'Trình Dựng Kéo Thả Trực Quan (No-Code Blocks)' : 'Visual Block Composer'}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
                  {isVi ? 'Kéo Thả Khối' : 'Drag & Drop'}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActiveDevice('desktop')}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-lg cursor-pointer transition-all ${
                    activeDevice === 'desktop' ? 'bg-[#FF4D38] text-white shadow-2xs' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <LaptopIcon className="w-3 h-3" />
                  <span>Desktop</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDevice('mobile')}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-lg cursor-pointer transition-all ${
                    activeDevice === 'mobile' ? 'bg-[#FF4D38] text-white shadow-2xs' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <SmartphoneIcon className="w-3 h-3" />
                  <span>Mobile</span>
                </button>
              </div>

            </div>

            {/* Simulated Live Preview */}
            <div className={`mx-auto transition-all duration-300 rounded-xl bg-white border border-slate-200 p-3 space-y-2.5 shadow-2xs ${
              activeDevice === 'mobile' ? 'max-w-[280px]' : 'w-full'
            }`}>
              {blocks.map((b, i) => (
                <div key={b.id} className="p-2.5 rounded-lg border border-dashed border-slate-300 bg-slate-50/70 hover:bg-white hover:border-[#FF4D38] transition-all flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-mono">#{i + 1}</span>
                    <span className="text-xs font-bold text-slate-800">{b.name}</span>
                  </div>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-200/80 text-slate-700 uppercase">
                    {b.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'articles' && (
        <div className="space-y-2.5">
          <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs mb-2 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-900">
                {isVi ? 'Quản Lý Bài Viết & Tòa Soạn Số' : 'Content Moderation & Publishing'}
              </span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {isVi ? 'Biên tập bài viết, duyệt bình luận và tự động đồng bộ Cổng nội bộ.' : 'Rich-text editing, comment filters and instant multi-portal broadcasting.'}
              </p>
            </div>
            <span className="text-[11px] font-bold px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
              + {isVi ? 'Tạo Bài Mới' : 'New Article'}
            </span>
          </div>

          {articles.map((art) => (
            <div key={art.id} className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {art.category}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  art.status === 'Bản nháp' || art.status === 'Draft Review'
                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}>
                  {art.status}
                </span>
              </div>
              <div className="text-xs font-bold text-slate-900">{art.title}</div>
              <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                <span className="inline-flex items-center gap-1">
                  <EyeIcon className="w-3 h-3 text-slate-400" />
                  <span>{art.views} {isVi ? 'lượt xem' : 'reads'}</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <MessageSquareIcon className="w-3 h-3 text-slate-400" />
                  <span>{art.comments} {isVi ? 'bình luận' : 'comments'}</span>
                </span>
                <span className="ml-auto text-slate-400">{art.date}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
              <div className="text-[10px] text-slate-500 font-semibold uppercase">{isVi ? 'Tổng Lượt Đọc' : 'Total Reads'}</div>
              <div className="text-sm font-extrabold text-slate-900 mt-1">42,850</div>
              <div className="text-[10px] font-bold text-emerald-600 mt-0.5 inline-flex items-center justify-center gap-1">
                <TrendingUpIcon className="w-3 h-3" />
                <span>+24% {isVi ? 'tuần này' : 'this week'}</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
              <div className="text-[10px] text-slate-500 font-semibold uppercase">{isVi ? 'Thời Gian Đọc TB' : 'Avg Read Time'}</div>
              <div className="text-sm font-extrabold text-slate-900 mt-1">3m 42s</div>
              <div className="text-[10px] font-bold text-blue-600 mt-0.5">Gắn kết cao</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
              <div className="text-[10px] text-slate-500 font-semibold uppercase">{isVi ? 'Tỷ Lệ Tương Tác' : 'Engagement Rate'}</div>
              <div className="text-sm font-extrabold text-slate-900 mt-1">88.4%</div>
              <div className="text-[10px] font-bold text-emerald-600 mt-0.5">Xuất sắc</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-xs font-bold text-slate-900 mb-2">
              {isVi ? 'Chuyên Mục Được Đọc Nhiều Nhất' : 'Top Performing Topic Clusters'}
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[11px] mb-1 font-semibold text-slate-700">
                  <span>{isVi ? 'Thông điệp Ban Lãnh Đạo & Chiến lược' : 'Executive Strategy'}</span>
                  <span>94%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#FF4D38] rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] mb-1 font-semibold text-slate-700">
                  <span>{isVi ? 'Quy chế & Chế độ Phúc lợi Nhân sự' : 'HR Benefits & Workplace SOP'}</span>
                  <span>78%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Status Ticker */}
      <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          {isVi ? 'Cổng thông tin tự động tương thích Responsive Web, Desktop & Mobile' : 'Responsive Web, Desktop & Mobile Portal Engine'}
        </span>
        <span className="font-semibold text-slate-700">Fast CDN Cache: Active</span>
      </div>
    </ShowcaseCard>
  );
}
