'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveDeploymentHub } from '@/components/showcase/InteractiveDeploymentHub';

export default function DeploymentPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveDeploymentHub isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'desktop-workstation',
          tag: 'Máy tính',
          title: 'Ứng Dụng Máy Tính Chuyên Dụng',
          description:
            'Cài đặt trực tiếp trên Windows và macOS. Mở nhiều cửa sổ làm việc song song và nhận thông báo tức thì.',
          metricBadge: { label: 'Tương thích', value: 'Windows & macOS' },
        },
        {
          id: 'mobile-everywhere',
          tag: 'Di động',
          title: 'Ứng Dụng Di Động Mọi Lúc Mọi Nơi',
          description:
            'Có sẵn trên App Store & Google Play: chấm công định vị GPS, nhận diện khuôn mặt và duyệt đề xuất 1 chạm cho lãnh đạo.',
          metricBadge: { label: 'Nền tảng', value: 'iOS & Android' },
        },
        {
          id: 'cloud-saas-platform',
          tag: 'Đám mây',
          title: 'Sử Dụng Trực Tiếp Trên Trình Duyệt',
          description:
            'Đăng nhập và làm việc ngay qua trình duyệt web mà không cần cài đặt phần mềm, phù hợp triển khai nhanh cho các đội ngũ.',
          metricBadge: { label: 'Truy cập', value: 'Trình duyệt Web' },
        },
        {
          id: 'private-on-prem-server',
          tag: 'Máy chủ riêng',
          title: 'Cài Đặt Trên Máy Chủ Riêng',
          description:
            'Dành cho cơ quan hành chính và tập đoàn yêu cầu chủ quyền dữ liệu: toàn bộ hồ sơ vận hành nằm trong mạng nội bộ của đơn vị.',
          metricBadge: { label: 'Chủ quyền', value: 'Lưu trữ nội bộ' },
        },
        {
          id: 'multi-branch-sync',
          tag: 'Đa chi nhánh',
          title: 'Quản Trị Đa Chi Nhánh Hợp Nhất',
          description:
            'Kết nối trụ sở chính với nhiều chi nhánh, cửa hàng và kho bãi trên cùng một không gian làm việc thống nhất.',
          metricBadge: { label: 'Phạm vi', value: 'Đa chi nhánh' },
        },
        {
          id: 'sla-uptime-guarantee',
          tag: 'Độ tin cậy',
          title: 'Sao Lưu & Vận Hành Liên Tục',
          description:
            'Sao lưu dữ liệu định kỳ, hỗ trợ khôi phục nhanh và đảm bảo hoạt động ổn định cho công việc hàng ngày.',
          metricBadge: { label: 'Vận hành', value: 'Sao lưu định kỳ' },
        },
      ]
    : [
        {
          id: 'desktop-workstation',
          tag: 'Desktop',
          title: 'Dedicated Desktop App',
          description:
            'Desktop client for Windows and macOS with multi-window workspace support and instant task notifications.',
          metricBadge: { label: 'OS', value: 'Windows & macOS' },
        },
        {
          id: 'mobile-everywhere',
          tag: 'Mobile',
          title: 'Mobile App for Field & Office Teams',
          description:
            'Available on App Store & Google Play: GPS check-in, face attendance, and 1-tap approvals for managers.',
          metricBadge: { label: 'Platform', value: 'iOS & Android' },
        },
        {
          id: 'cloud-saas-platform',
          tag: 'Cloud',
          title: 'Browser-Based Cloud Access',
          description:
            'Log in via Chrome, Safari, or Edge without local setup. Get departments working together quickly.',
          metricBadge: { label: 'Access', value: 'Web Browser' },
        },
        {
          id: 'private-on-prem-server',
          tag: 'Private Server',
          title: 'On-Premises Private Hosting',
          description:
            'For public sector and regulated organizations: keep all operational records strictly within your internal network.',
          metricBadge: { label: 'Ownership', value: 'In-House Hosting' },
        },
        {
          id: 'multi-branch-sync',
          tag: 'Multi-Branch',
          title: 'Unified Multi-Branch Governance',
          description:
            'Connect headquarters with retail stores, regional offices, and warehouses in a single workspace.',
          metricBadge: { label: 'Coverage', value: 'Multi-Branch' },
        },
        {
          id: 'sla-uptime-guarantee',
          tag: 'Reliability',
          title: 'Scheduled Backups & Continuity',
          description:
            'Regular automated backups and monitored service continuity to keep daily business operations running.',
          metricBadge: { label: 'Continuity', value: 'Scheduled Backups' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Ứng Dụng & Mô Hình Triển Khai' : 'Apps & Deployment Models'}
          title={
            isVi
              ? ['Làm việc mọi lúc, mọi nơi', 'Linh hoạt theo quy mô doanh nghiệp']
              : ['Work across devices', 'Fit to your organization']
          }
          subtitle={
            isVi
              ? 'Hỗ trợ đầy đủ ứng dụng Máy tính, Di động, Web trực tuyến với tùy chọn Đám mây tiêu chuẩn hoặc Cài đặt trên máy chủ riêng.'
              : 'Full support across Desktop, Mobile, and Web with flexible Cloud SaaS or Private On-Premises server options.'
          }
          tags={
            isVi
              ? [
                  'Ứng dụng Máy tính (Windows & Mac)',
                  'Ứng dụng Di động (iOS & Android)',
                  'Nền tảng Web trực tuyến',
                  'Đám mây Doanh nghiệp',
                  'Cài đặt Máy chủ riêng',
                ]
              : [
                  'Desktop App (Windows & Mac)',
                  'Mobile App (iOS & Android)',
                  'Browser Cloud Platform',
                  'Enterprise Cloud SaaS',
                  'Private Dedicated Server',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Nền tảng & Ứng dụng' : 'Platform & Apps'}
          title={isVi ? 'Mô hình triển khai toàn diện' : 'Comprehensive Deployment Models'}
          subtitle={
            isVi
              ? 'Lựa chọn phương thức vận hành phù hợp nhất với mô hình tổ chức và tiêu chuẩn bảo mật của bạn.'
              : 'Choose the optimal deployment method tailored to your organizational structure and security policies.'
          }
          features={features}
        />

        <SubpageCTA
          moduleName={isVi ? 'Ứng Dụng & Mô Hình Triển Khai' : 'Apps & Deployment Platform'}
        />
      </main>

      <Footer />
    </>
  );
}
