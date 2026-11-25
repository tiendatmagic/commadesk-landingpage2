'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveCmsPortal } from '@/components/showcase/InteractiveCmsPortal';

export default function CmsPortalPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveCmsPortal isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'visual-builder',
          tag: 'Dựng trang',
          title: 'Trình Dựng Kéo Thả',
          description: 'Sắp xếp các khối banner, tin tức và biểu mẫu trực quan cho trang cổng thông tin nội bộ.',
          metricBadge: { label: 'Thiết kế', value: 'Kéo thả theo khối' },
        },
        {
          id: 'intranet-portal',
          tag: 'Cổng thông tin',
          title: 'Cổng Nội Bộ Intranet',
          description: 'Kênh truyền thông chính thống cho thông điệp Lãnh đạo, vinh danh và văn hóa.',
          metricBadge: { label: 'Phạm vi', value: 'Toàn doanh nghiệp' },
        },
        {
          id: 'articles-newsroom',
          tag: 'Tòa soạn',
          title: 'Biên Tập Bài Viết',
          description: 'Soạn thảo bài viết đa phương tiện, phân loại chuyên mục và ghim thông báo nổi bật.',
          metricBadge: { label: 'Định dạng', value: 'Đa phương tiện' },
        },
        {
          id: 'media-library',
          tag: 'Media',
          title: 'Thư Viện Ảnh & Tài Liệu',
          description: 'Lưu trữ tập trung hình ảnh sự kiện, video đào tạo và tài liệu truyền thông dùng chung theo phòng ban.',
          metricBadge: { label: 'Quản lý', value: 'Kho media tập trung' },
        },
        {
          id: 'comment-moderation',
          tag: 'Kiểm duyệt',
          title: 'Kiểm Duyệt Bình Luận',
          description: 'Bộ lọc bình luận, duyệt phản hồi trước khi hiển thị và quản lý góp ý trên bài viết.',
          metricBadge: { label: 'Quy trình', value: 'Duyệt trước đăng' },
        },
        {
          id: 'cms-analytics',
          tag: 'Thống kê',
          title: 'Phân Tích Lượt Đọc',
          description: 'Theo dõi lượt xem, thời gian đọc trung bình và mức độ tương tác bài viết theo phòng ban.',
          metricBadge: { label: 'Chỉ số', value: 'Lượt đọc & tương tác' },
        },
      ]
    : [
        {
          id: 'visual-builder',
          tag: 'Visual Builder',
          title: 'Visual Page Builder',
          description: 'Assemble intranet portal pages using modular layout blocks for banners, news, and forms.',
          metricBadge: { label: 'Editing', value: 'Block Composer' },
        },
        {
          id: 'intranet-portal',
          tag: 'Intranet',
          title: 'Corporate Intranet',
          description: 'Central hub for leadership memos, employee spotlights, and company announcements.',
          metricBadge: { label: 'Reach', value: 'Company-Wide' },
        },
        {
          id: 'articles-newsroom',
          tag: 'Newsroom',
          title: 'Article Newsroom',
          description: 'Rich-text editorial workflow with categories, tags, and pinned announcements.',
          metricBadge: { label: 'Format', value: 'Rich Media' },
        },
        {
          id: 'media-library',
          tag: 'Assets',
          title: 'Media & Document Library',
          description: 'Centralized repository for event photos, training videos, and shared company brand files.',
          metricBadge: { label: 'Storage', value: 'Shared Library' },
        },
        {
          id: 'comment-moderation',
          tag: 'Moderation',
          title: 'Comment Moderation',
          description: 'Content filters and moderation queues for article comments and reader feedback.',
          metricBadge: { label: 'Workflow', value: 'Review Queue' },
        },
        {
          id: 'cms-analytics',
          tag: 'Analytics',
          title: 'Readership Analytics',
          description: 'Track page views, average reading time, and engagement trends across bulletins.',
          metricBadge: { label: 'Insights', value: 'Views & Reach' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ CMS Studio & Cổng Thông Tin' : 'CMS Studio & Portal Module'}
          title={
            isVi
              ? ['Xây dựng cổng nội bộ', 'Chia sẻ tin tức thống nhất']
              : ['Build company portals', 'Publish internal news clearly']
          }
          subtitle={
            isVi
              ? 'Trình dựng trang kéo thả, tòa soạn xuất bản tin tức nội bộ và thư viện media tập trung cho doanh nghiệp.'
              : 'Visual block page builder, internal newsroom, and centralized media library in one workspace.'
          }
          tags={
            isVi
              ? [
                  'Kéo thả khối giao diện',
                  'Cổng thông tin Intranet',
                  'Tòa soạn tin tức số',
                  'Thư viện Media',
                  'Thống kê lượt đọc',
                ]
              : [
                  'Block Page Builder',
                  'Intranet Portal',
                  'Internal Newsroom',
                  'Media Library',
                  'Readership Analytics',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Xuất bản nội dung & Truyền thông số' : 'Content Publishing & Intranet'}
          subtitle={
            isVi
              ? 'Giúp ban điều hành và truyền thông nội bộ phát hành bản tin, chính sách nhanh chóng tới toàn nhân sự.'
              : 'Help leadership and communications teams share updates and company policies across branches.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'CMS Studio & Cổng Thông Tin' : 'CMS Studio & Portal'} />

        <Footer />
      </main>
    </>
  );
}
