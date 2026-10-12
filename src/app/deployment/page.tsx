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
            'Tải về và cài đặt dễ dàng trên Windows (.exe) và macOS. Mở nhiều cửa sổ làm việc đồng thời, nhận thông báo tức thì.',
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
          title: 'Nền Tảng Đám Mây Trực Tuyến',
          description:
            'Đăng nhập và làm việc ngay qua trình duyệt web mà không cần cài đặt phần mềm. Triển khai nhanh chóng trong ngày.',
          metricBadge: { label: 'Tiện lợi', value: 'Dùng ngay trên Web' },
        },
        {
          id: 'private-on-prem-server',
          tag: 'Máy chủ riêng',
          title: 'Cài Đặt Trên Máy Chủ Riêng',
          description:
            'Dành cho cơ quan hành chính và tập đoàn yêu cầu bảo mật cao: làm chủ 100% dữ liệu, vận hành độc lập trong mạng nội bộ.',
          metricBadge: { label: 'Chủ quyền', value: '100% Nội bộ' },
        },
        {
          id: 'multi-branch-sync',
          tag: 'Đa chi nhánh',
          title: 'Quản Trị Đa Chi Nhánh Hợp Nhất',
          description:
            'Dễ dàng kết nối trụ sở chính với hàng loạt chi nhánh, cửa hàng và kho bãi trên cùng một hệ thống duy nhất.',
          metricBadge: { label: 'Quy mô', value: 'Không giới hạn' },
        },
        {
          id: 'sla-uptime-guarantee',
          tag: 'Độ tin cậy',
          title: 'Cam Kết Hoạt Động Ổn Định 99.9%',
          description:
            'Hạ tầng dự phòng đa tầng tự phục hồi, dữ liệu được sao lưu định kỳ, cam kết vận hành liên tục không gián đoạn.',
          metricBadge: { label: 'Cam kết', value: '99.9% Uptime' },
        },
      ]
    : [
        {
          id: 'desktop-workstation',
          tag: 'Desktop',
          title: 'Dedicated Desktop Client',
          description:
            'Standalone installer for Windows (.exe) and macOS with multi-window support and instant desktop notifications.',
          metricBadge: { label: 'OS', value: 'Windows & macOS' },
        },
        {
          id: 'mobile-everywhere',
          tag: 'Mobile',
          title: 'Mobile App for On-the-Go Teams',
          description:
            'Available on App Store & Google Play: GPS check-in, AI Face clock-in, and 1-tap mobile approvals for leaders.',
          metricBadge: { label: 'Platform', value: 'iOS & Android' },
        },
        {
          id: 'cloud-saas-platform',
          tag: 'Cloud',
          title: 'Turnkey Enterprise Web Cloud',
          description:
            'Instant browser access via Chrome, Safari, or Edge without local setup. Deploy and onboard teams in hours.',
          metricBadge: { label: 'Access', value: 'Web Native' },
        },
        {
          id: 'private-on-prem-server',
          tag: 'Private Server',
          title: 'On-Premises Dedicated Server',
          description:
            'For public sector and enterprise compliance: complete data sovereignty and air-gapped internal LAN operations.',
          metricBadge: { label: 'Sovereignty', value: '100% In-House' },
        },
        {
          id: 'multi-branch-sync',
          tag: 'Multi-Branch',
          title: 'Unified Multi-Location Governance',
          description:
            'Seamlessly connect corporate headquarters with dozens of retail branches, warehouses, and remote hubs.',
          metricBadge: { label: 'Scale', value: 'Unlimited' },
        },
        {
          id: 'sla-uptime-guarantee',
          tag: 'Reliability',
          title: '99.9% High Availability SLA',
          description:
            'Self-healing redundant cloud infrastructure with automated backup routines ensuring 24/7 business continuity.',
          metricBadge: { label: 'Commitment', value: '99.9% Uptime' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Ứng Dụng & Mô Hình Triển Khai' : 'Apps & Deployment Models'}
          title={
            isVi
              ? ['Làm việc mọi lúc, mọi nơi.', 'Linh hoạt theo quy mô doanh nghiệp.']
              : ['Work anywhere, anytime.', 'Tailored to your business scale.']
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
