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
      badge: isVi ? 'Mới nhất' : 'Latest',
      badgeColor: 'bg-emerald-50 text-[#16A34A] border-emerald-200/80',
      summary: {
        vi: 'Ra mắt 5 phân hệ: Kho SKU & Tài sản, CMS kéo thả, KiotViet POS Sync, Khảo sát eNPS và Phê duyệt tập trung.',
        en: '5 core modules: SKU Inventory & Assets, Visual CMS, KiotViet POS Sync, eNPS Surveys, and Approvals.',
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
      badge: isVi ? 'Cập nhật nền tảng' : 'Platform update',
      badgeColor: 'bg-[#F5F7FA] text-[#4B5565] border-slate-900/[0.08]',
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
            vi: 'Nhận diện biển số và chấm công sinh trắc học < 85ms qua camera VMS.',
            en: 'Sub-85ms plate and biometric recognition across VMS cameras.',
          },
        },
      ],
    },
    {
      version: 'v2.2.0',
      date: isVi ? 'Tháng 08, 2026' : 'August 2026',
      badge: isVi ? 'Bảo mật & Ứng dụng' : 'Security & app parity',
      badgeColor: 'bg-[#F5F7FA] text-[#4B5565] border-slate-900/[0.08]',
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

  const filteredReleases = releases
    .map((release) => ({
      ...release,
      highlights: release.highlights.filter((item) => {
        if (activeFilter === 'all') return true;
        return item.category === activeFilter;
      }),
    }))
    .filter((release) => release.highlights.length > 0 || activeFilter === 'all');

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6">
        <section className="canvas-card bg-white rounded-2xl sm:rounded-3xl shadow-[0_1px_2px_rgba(17,24,39,0.05)] border border-slate-900/[0.08] overflow-hidden relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-[13px] font-medium text-[#6B7487] mb-2">
              {isVi ? 'Nhật ký phát hành' : 'Changelog'}
            </p>

            <h1 className="text-[32px] sm:text-5xl font-semibold tracking-[-0.025em] text-[#111827] mb-4 leading-[1.08]">
              {isVi ? 'Lịch sử cập nhật & nâng cấp' : 'Release notes & changelog'}
            </h1>

            <p className="text-[15px] sm:text-[17px] text-[#4B5565] leading-relaxed">
              {isVi
                ? 'Theo dõi các cải tiến, phân hệ mới và nâng cấp bảo mật định kỳ của CommaDesk.'
                : 'Product updates, new modules, and security enhancements across CommaDesk.'}
            </p>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 h-9 rounded-[10px] text-[13px] font-medium transition-colors cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#111827] text-white'
                    : 'bg-[#F5F7FA] border border-slate-900/[0.08] text-[#4B5565] hover:text-[#111827]'
                }`}
              >
                {isVi ? 'Tất cả' : 'All updates'}
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('feature')}
                className={`inline-flex items-center gap-1.5 px-3.5 h-9 rounded-[10px] text-[13px] font-medium transition-colors cursor-pointer ${
                  activeFilter === 'feature'
                    ? 'bg-[#111827] text-white'
                    : 'bg-[#F5F7FA] border border-slate-900/[0.08] text-[#4B5565] hover:text-[#111827]'
                }`}
              >
                <SparklesIcon className="w-3.5 h-3.5" />
                <span>{isVi ? 'Tính năng mới' : 'New features'}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('security')}
                className={`inline-flex items-center gap-1.5 px-3.5 h-9 rounded-[10px] text-[13px] font-medium transition-colors cursor-pointer ${
                  activeFilter === 'security'
                    ? 'bg-[#111827] text-white'
                    : 'bg-[#F5F7FA] border border-slate-900/[0.08] text-[#4B5565] hover:text-[#111827]'
                }`}
              >
                <ShieldCheckIcon className="w-3.5 h-3.5" />
                <span>{isVi ? 'Bảo mật & RBAC' : 'Security & RBAC'}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('enhancement')}
                className={`inline-flex items-center gap-1.5 px-3.5 h-9 rounded-[10px] text-[13px] font-medium transition-colors cursor-pointer ${
                  activeFilter === 'enhancement'
                    ? 'bg-[#111827] text-white'
                    : 'bg-[#F5F7FA] border border-slate-900/[0.08] text-[#4B5565] hover:text-[#111827]'
                }`}
              >
                <ZapIcon className="w-3.5 h-3.5" />
                <span>{isVi ? 'Hiệu năng' : 'Enhancements'}</span>
              </button>
            </div>
          </div>

          {/* Timeline Stream */}
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredReleases.map((release) => (
              <div
                key={release.version}
                className="p-6 sm:p-8 rounded-2xl bg-[#F5F7FA] border border-slate-900/[0.08] space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-900/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono tabular-nums text-[22px] font-semibold text-[#111827]">
                      {release.version}
                    </span>
                    <span className={`text-[12px] font-medium px-2.5 py-0.5 rounded-md border ${release.badgeColor}`}>
                      {release.badge}
                    </span>
                  </div>
                  <span className="font-mono text-[12px] text-[#6B7487]">
                    {release.date}
                  </span>
                </div>

                <p className="text-[14px] sm:text-[15px] text-[#111827] leading-relaxed">
                  {isVi ? release.summary.vi : release.summary.en}
                </p>

                <div className="space-y-2.5">
                  {release.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-slate-900/[0.08] space-y-1"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                            item.category === 'feature'
                              ? 'bg-[#FF4D38]/10 text-[#C8321F]'
                              : item.category === 'security'
                              ? 'bg-[#ECEFF4] text-[#111827]'
                              : 'bg-emerald-50 text-[#16A34A]'
                          }`}
                        >
                          {item.category === 'feature'
                            ? isVi ? 'Tính năng' : 'Feature'
                            : item.category === 'security'
                            ? isVi ? 'Bảo mật' : 'Security'
                            : isVi ? 'Hiệu năng' : 'Performance'}
                        </span>
                        <h3 className="text-[14px] font-semibold text-[#111827]">
                          {isVi ? item.title.vi : item.title.en}
                        </h3>
                      </div>
                      <p className="text-[13px] text-[#4B5565] leading-relaxed">
                        {isVi ? item.desc.vi : item.desc.en}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="max-w-4xl mx-auto mt-10 p-6 sm:p-8 rounded-2xl bg-[#F5F7FA] border border-slate-900/[0.08] text-center space-y-3">
            <h2 className="text-[20px] font-semibold text-[#111827]">
              {isVi ? 'Tìm hiểu chi tiết tính năng nghiệp vụ' : 'Explore feature guides and operations'}
            </h2>
            <p className="text-[14px] text-[#4B5565] max-w-xl mx-auto">
              {isVi
                ? 'Tham khảo cẩm nang hướng dẫn sử dụng và quy trình vận hành cho doanh nghiệp.'
                : 'Read user guides and operational workflows tailored for your teams.'}
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/docs"
                className="inline-flex items-center justify-center h-10 px-5 rounded-[10px] bg-[#FF4D38] hover:bg-[#E03E2A] text-white text-[13px] font-medium transition-colors"
              >
                {isVi ? 'Xem cẩm nang tính năng' : 'Feature handbook'}
              </Link>
              <Link
                href="/deployment"
                className="inline-flex items-center justify-center h-10 px-5 rounded-[10px] bg-white border border-slate-900/[0.08] text-[#111827] text-[13px] font-medium hover:bg-[#ECEFF4] transition-colors"
              >
                {isVi ? 'Mô hình triển khai' : 'Deployment options'}
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
