'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { SparklesIcon, ShieldCheckIcon, ZapIcon } from '@/components/ui/UIIcons';

interface ReleaseItem {
  version: string;
  date: string;
  badge: string;
  badgeColor: string;
  summary: {
    en: string;
    vi: string;
  };
  highlights: {
    category: 'feature' | 'enhancement' | 'security' | 'performance';
    title: { en: string; vi: string };
    desc: { en: string; vi: string };
  }[];
}

export default function ReleaseNotesPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';
  const [activeFilter, setActiveFilter] = useState<'all' | 'feature' | 'security' | 'enhancement'>('all');

  const releases: ReleaseItem[] = [
    {
      version: 'v2.4.0',
      date: isVi ? 'Tháng 10, 2026' : 'October 2026',
      badge: isVi ? 'Bản Mới Nhất' : 'Latest Release',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: {
        vi: 'Ra mắt 5 phân hệ: Kho SKU & Tài sản, CMS kéo thả, KiotViet POS Sync, Khảo sát eNPS và Phê duyệt tập trung.',
        en: '5 core pillars: SKU Inventory & Assets, Visual CMS, KiotViet POS Sync, eNPS Surveys, and Approvals.',
      },
      highlights: [
        {
          category: 'feature',
          title: {
            vi: 'Kho SKU & Tài sản serial',
            en: 'SKU Inventory & Fixed Assets',
          },
          desc: {
            vi: 'Cân bằng kho đa điểm, duyệt phiếu 2 cấp và cảnh báo tồn an toàn.',
            en: 'Multi-location balance, 2-step approvals, and safety stock alerts.',
          },
        },
        {
          category: 'feature',
          title: {
            vi: 'CMS Studio & Intranet',
            en: 'CMS Studio & Intranet',
          },
          desc: {
            vi: 'Dựng website kéo thả no-code, tòa soạn tin tức và thư viện media.',
            en: 'No-code visual page builder, newsroom, and media assets.',
          },
        },
        {
          category: 'feature',
          title: {
            vi: 'Đồng bộ POS KiotViet',
            en: 'KiotViet POS Sync',
          },
          desc: {
            vi: 'Tự động đồng bộ sản phẩm, giá bán và trừ kho < 1.2s khi bán tại quầy.',
            en: 'Real-time sync of items, prices, and stock deduction in < 1.2s.',
          },
        },
        {
          category: 'security',
          title: {
            vi: 'Ủy quyền & Hòm thư lãnh đạo',
            en: 'Approval Delegation & Mailbox',
          },
          desc: {
            vi: 'Ủy quyền duyệt theo hạn mức và tiếp nhận phản ánh ẩn danh bảo mật.',
            en: 'Threshold-based delegation and encrypted anonymous feedback.',
          },
        },
      ],
    },
    {
      version: 'v2.3.0',
      date: isVi ? 'Tháng 09, 2026' : 'September 2026',
      badge: isVi ? 'Cập Nhật Nền Tảng' : 'Platform Update',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: {
        vi: 'Chuẩn văn bản Nghị định 30, Face AI & ANPR biển số xe, CommaMeet video HD.',
        en: 'Decree 30 document registry, Face AI & ANPR recognition, and CommaMeet HD.',
      },
      highlights: [
        {
          category: 'feature',
          title: {
            vi: 'Sổ Văn bản Nghị định 30',
            en: 'Decree 30 Document Registry',
          },
          desc: {
            vi: 'Đánh số tự động, luân chuyển văn bản nội bộ và quản lý sổ chuẩn mực.',
            en: 'Auto numbering, internal dispatch, and decree-compliant books.',
          },
        },
        {
          category: 'performance',
          title: {
            vi: 'Face AI & ANPR Biển Số',
            en: 'Face AI & ANPR Recognition',
          },
          desc: {
            vi: 'Nhận diện biển số và chấm công sinh trắc học siêu tốc < 85ms qua camera VMS.',
            en: 'Sub-85ms plate and biometric recognition across VMS cameras.',
          },
        },
      ],
    },
    {
      version: 'v2.2.0',
      date: isVi ? 'Tháng 08, 2026' : 'August 2026',
      badge: isVi ? 'Bảo Mật & Ứng Dụng' : 'Security & App Parity',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      summary: {
        vi: 'Ra mắt Ứng dụng Máy tính Windows, Ứng dụng Di động và nâng cấp Phân quyền đa tầng doanh nghiệp.',
        en: 'Windows Desktop app, Mobile app, and enhanced multi-tier enterprise permissions.',
      },
      highlights: [
        {
          category: 'security',
          title: {
            vi: 'Phân quyền đa tầng & Bảo mật 2 lớp',
            en: 'Multi-Tier Permissions & 2FA Security',
          },
          desc: {
            vi: 'Thu hồi phiên đăng nhập từ xa, định danh thiết bị an toàn và nhật ký hoạt động minh bạch.',
            en: 'Remote session revoke, trusted device binding, and transparent audit logs.',
          },
        },
      ],
    },
  ];

  const filteredReleases = releases.map((release) => ({
    ...release,
    highlights: release.highlights.filter((item) => {
      if (activeFilter === 'all') return true;
      return item.category === activeFilter;
    }),
  })).filter((release) => release.highlights.length > 0 || activeFilter === 'all');

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 selection:bg-[#FF4D38] selection:text-white">
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20">
        {/* Header Breadcrumb & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF4D38]"></span>
            {isVi ? 'Nhật Ký Phát Hành' : "Changelog"}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            {isVi ? 'Lịch Sử Cập Nhật & Nâng Cấp' : 'Release Notes & Changelog'}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {isVi
              ? 'Khám phá các cải tiến, tính năng mới và nâng cấp bảo mật liên tục của CommaDesk.'
              : 'Continuous feature additions, module enhancements, and security updates for CommaDesk.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#FF4D38] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {isVi ? 'Tất cả thay đổi' : 'All Updates'}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('feature')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'feature'
                  ? 'bg-[#FF4D38] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>{isVi ? 'Tính năng mới' : 'New Features'}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('security')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'security'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <ShieldCheckIcon className="w-3.5 h-3.5" />
              <span>{isVi ? 'Bảo mật & RBAC' : 'Security & RBAC'}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('enhancement')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'enhancement'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <ZapIcon className="w-3.5 h-3.5" />
              <span>{isVi ? 'Cải tiến & Hiệu năng' : 'Enhancements'}</span>
            </button>
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="max-w-4xl mx-auto space-y-12">
          {filteredReleases.map((release) => (
            <div
              key={release.version}
              className="relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md shadow-slate-200/40 space-y-6"
            >
              {/* Release Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {release.version}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${release.badgeColor}`}>
                    {release.badge}
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  {release.date}
                </span>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {isVi ? release.summary.vi : release.summary.en}
              </p>

              {/* Highlights Cards */}
              <div className="space-y-3 pt-2">
                {release.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-1.5 hover:bg-white hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider ${
                        item.category === 'feature'
                          ? 'bg-rose-100 text-rose-700'
                          : item.category === 'security'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {item.category === 'feature' ? (isVi ? 'Tính năng' : 'Feature') : item.category === 'security' ? (isVi ? 'Bảo mật' : 'Security') : (isVi ? 'Hiệu năng' : 'Performance')}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">
                        {isVi ? item.title.vi : item.title.en}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-1">
                      {isVi ? item.desc.vi : item.desc.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Docs */}
        <div className="max-w-4xl mx-auto mt-16 p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 text-center shadow-xs space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            {isVi ? 'Tìm Hiểu Chi Tiết Về Tính Năng Nghiệp Vụ?' : 'Explore Feature Guides & Operations?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            {isVi
              ? 'Tham khảo cẩm nang hướng dẫn sử dụng và quy trình vận hành toàn diện cho doanh nghiệp.'
              : 'Explore comprehensive user guides and operational workflows tailored for your business.'}
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <Link
              href="/docs"
              className="px-5 py-2.5 rounded-full bg-[#FF4D38] text-white text-xs font-bold shadow-sm hover:bg-[#e03d29] transition-all"
            >
              {isVi ? 'Xem Cẩm Nang Tính Năng' : 'Explore Feature Handbook'}
            </Link>
            <Link
              href="/deployment"
              className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all"
            >
              {isVi ? 'Mô Hình Triển Khai' : 'Deployment Options'}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
