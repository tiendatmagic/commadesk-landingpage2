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
          description: 'Kéo thả các khối giao diện banner, tin tức mà không cần viết mã HTML/CSS.',
          metricBadge: { label: 'Tốc độ', value: 'Trong 5 phút' },
        },
        {
          id: 'intranet-portal',
          tag: 'Cổng thông tin',
          title: 'Cổng Nội Bộ Intranet',
          description: 'Kênh truyền thông chính thống cho thông điệp Lãnh đạo, vinh danh và văn hóa.',
          metricBadge: { label: 'Tiếp cận', value: '100% công ty' },
        },
        {
          id: 'articles-newsroom',
          tag: 'Tòa soạn',
          title: 'Biên Tập Bài Viết',
          description: 'Soạn thảo rich-text hiện đại, quản lý danh mục đa cấp và bài viết ghim nổi bật.',
          metricBadge: { label: 'Định dạng', value: 'Đa phương tiện' },
        },
        {
          id: 'media-library',
          tag: 'Media',
          title: 'Quản Lý Kho Ảnh & Video',
          description: 'Lưu trữ ảnh sự kiện, tài liệu đào tạo đồng bộ trực tiếp với đám mây MinIO S3.',
          metricBadge: { label: 'Tốc độ', value: '< 80ms Cache' },
        },
        {
          id: 'comment-moderation',
          tag: 'Kiểm duyệt',
          title: 'Kiểm Duyệt Bình Luận',
          description: 'Bộ lọc bình luận thông minh, kiểm duyệt phản hồi và biểu mẫu thu thập ý kiến.',
          metricBadge: { label: 'Chuẩn mực', value: '100% kiểm duyệt' },
        },
        {
          id: 'cms-analytics',
          tag: 'Thống kê',
          title: 'Phân Tích Lượt Đọc',
          description: 'Theo dõi lượt xem, thời gian đọc và tỷ lệ tương tác bài viết thời gian thực.',
          metricBadge: { label: 'Tương tác', value: '+35% Gắn kết' },
        },
      ]
    : [
        {
          id: 'visual-builder',
          tag: 'No-Code',
          title: 'Visual Page Builder',
          description: 'Assemble portal pages using modular layout blocks without writing code.',
          metricBadge: { label: 'Speed', value: '< 5 Minutes' },
        },
        {
          id: 'intranet-portal',
          tag: 'Intranet',
          title: 'Corporate Intranet',
          description: 'Central hub for leadership memos, employee spotlights, and announcements.',
          metricBadge: { label: 'Reach', value: '100% Enterprise' },
        },
        {
          id: 'articles-newsroom',
          tag: 'Newsroom',
          title: 'Article Newsroom',
          description: 'Rich-text editorial engine, categories, tags, and sticky announcements.',
          metricBadge: { label: 'Media', value: 'Rich-Media' },
        },
        {
          id: 'media-library',
          tag: 'Assets',
          title: 'Digital Asset Library',
          description: 'Store event photos and videos backed directly by enterprise MinIO S3.',
          metricBadge: { label: 'Latency', value: '< 80ms Edge' },
        },
        {
          id: 'comment-moderation',
          tag: 'Moderation',
          title: 'Comment Moderation',
          description: 'Built-in profanity filters and moderation queues for comments and feedback.',
          metricBadge: { label: 'Safety', value: '100% Brand Safe' },
        },
        {
          id: 'cms-analytics',
          tag: 'Analytics',
          title: 'Readership Analytics',
          description: 'Track real-time page views, average reading time, and engagement trends.',
          metricBadge: { label: 'Engagement', value: '+35% Active' },
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
              ? ['Xây dựng cổng nội bộ.', 'Lan tỏa văn hóa thương hiệu.']
              : ['Build corporate portals.', 'Broadcast unified culture.']
          }
          subtitle={
            isVi
              ? 'Trình dựng trang kéo thả no-code, tòa soạn xuất bản tin tức nội bộ và quản lý thư viện media.'
              : 'Visual block composer, digital newsroom, and MinIO S3 media asset management in one suite.'
          }
          tags={
            isVi
              ? [
                  'Kéo thả khối giao diện',
                  'Cổng thông tin Intranet',
                  'Tòa soạn tin tức số',
                  'Thư viện Media S3',
                  'Thống kê độc giả CMS',
                ]
              : [
                  'Drag & Drop Blocks',
                  'Intranet Portal',
                  'Digital Newsroom',
                  'MinIO S3 Media',
                  'Readership Analytics',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Xuất bản nội dung & Truyền thông số' : 'Content Publishing & Communications'}
          subtitle={
            isVi
              ? 'Tiếng nói thương hiệu thống nhất, gắn kết nhân viên và lan tỏa văn hóa doanh nghiệp.'
              : 'Empower leadership with a unified brand voice and elevate employee engagement.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'CMS Studio & Cổng Thông Tin' : 'CMS Studio & Portal'} />

        <Footer />
      </main>
    </>
  );
}
