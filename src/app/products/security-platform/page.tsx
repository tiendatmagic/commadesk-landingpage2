'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveCasbinShield } from '@/components/showcase/InteractiveCasbinShield';

export default function SecurityPlatformPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveCasbinShield isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'enterprise-permissions',
          tag: 'Phân quyền đa tầng',
          title: 'Phân quyền đa tầng, linh hoạt theo mô hình doanh nghiệp',
          description:
            'Kiểm soát quyền truy cập xuyên suốt từ tổ chức, phòng ban đến từng vị trí và người dùng. Linh hoạt thiết lập chính sách phân quyền theo cơ cấu tổ chức và nhu cầu vận hành thực tế, đảm bảo quản trị tập trung nhưng vẫn trao quyền chủ động cho từng đơn vị.',
          metricBadge: { label: 'Cơ chế', value: 'Đa tầng linh hoạt' },
        },
        {
          id: 'multi-tenant',
          tag: 'Đa chi nhánh',
          title: 'Quản Trị Đa Doanh Nghiệp & Chi Nhánh',
          description:
            'Cô lập dữ liệu tuyệt đối giữa các công ty thành viên và chi nhánh, phân cấp điều hành tập trung nhưng vẫn tự chủ đơn vị.',
          metricBadge: { label: 'Cô lập dữ liệu', value: '100% Độc lập' },
        },
        {
          id: 'audit-trails',
          tag: 'Kiểm toán',
          title: 'Nhật Ký Hoạt Động & Lịch Sử Thay Đổi',
          description:
            'Ghi nhận minh bạch mọi thao tác của người dùng, lịch sử truy cập và chỉnh sửa dữ liệu, phục vụ đối soát và thanh tra.',
          metricBadge: { label: 'Toàn vẹn', value: 'Minh bạch 100%' },
        },
        {
          id: 'two-factor-auth',
          tag: 'Xác thực',
          title: 'Bảo Mật Đăng Nhập 2 Lớp & Thiết Bị',
          description:
            'Bảo vệ tài khoản với xác thực 2 lớp (OTP), quản lý phiên đăng nhập từ xa và định danh thiết bị làm việc an toàn.',
          metricBadge: { label: 'Bảo mật', value: 'Xác thực 2 lớp' },
        },
        {
          id: 'rest-api-webhooks',
          tag: 'Kết nối',
          title: 'Kết Nối & Tích Hợp Hệ Thống Sẵn Có',
          description:
            'Dễ dàng liên kết và đồng bộ dữ liệu hai chiều với phần mềm kế toán, hóa đơn điện tử, ERP và cổng thanh toán nội bộ.',
          metricBadge: { label: 'Tương thích', value: 'Mọi nền tảng' },
        },
        {
          id: 'deployment-modes',
          tag: 'Hạ tầng',
          title: 'Lựa Chọn Vận Hành Đám Mây Hoặc Máy Chủ Riêng',
          description:
            'Linh hoạt sử dụng trên Đám mây doanh nghiệp hoặc Cài đặt trên máy chủ nội bộ với đầy đủ ứng dụng Máy tính và Di động.',
          metricBadge: { label: 'Linh hoạt', value: 'Đám mây & Máy chủ riêng' },
        },
      ]
    : [
        {
          id: 'enterprise-permissions',
          tag: 'Access Governance',
          title: 'Multi-Tier Flexible Enterprise Permissions',
          description:
            'Control access seamlessly across organizations, departments, roles, and individual users. Flexibly define authorization policies aligned with corporate structure and operational needs, ensuring centralized governance while empowering business units.',
          metricBadge: { label: 'Model', value: 'Multi-Level & Flexible' },
        },
        {
          id: 'multi-tenant',
          tag: 'Multi-Branch',
          title: 'Corporate Multi-Unit Governance',
          description:
            'Strict logical data partitioning between subsidiaries and branches, enabling unified corporate management.',
          metricBadge: { label: 'Isolation', value: '100% Tenant Scoped' },
        },
        {
          id: 'audit-trails',
          tag: 'Auditing',
          title: 'Activity Logs & Tamper-Proof Audit',
          description:
            'Transparent logging of all user activities, data modifications, and privilege adjustments for compliance.',
          metricBadge: { label: 'Integrity', value: '100% Audited' },
        },
        {
          id: 'two-factor-auth',
          tag: 'Auth & Safety',
          title: 'Two-Factor Authentication & Device Trust',
          description:
            'Safeguard corporate accounts with 2FA/OTP login verification, remote session revoke, and trusted device binding.',
          metricBadge: { label: 'Protection', value: '2-Factor Auth' },
        },
        {
          id: 'rest-api-webhooks',
          tag: 'Integration',
          title: 'Ecosystem Connectivity & Open Data Sync',
          description:
            'Seamlessly connect and synchronize two-way data with external ERP, accounting, e-invoices, and corporate systems.',
          metricBadge: { label: 'Standard', value: 'Universal Sync' },
        },
        {
          id: 'deployment-modes',
          tag: 'Deployment',
          title: 'Flexible Cloud or On-Premises Hosting',
          description:
            'Choose between turnkey Cloud SaaS or private on-premises server hosting with native desktop and mobile parity.',
          metricBadge: { label: 'Options', value: 'Cloud & On-Prem' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Bảo mật & Nền tảng' : 'Security & Platform Module'}
          title={
            isVi
              ? ['Bảo mật cấp doanh nghiệp.', 'Hạ tầng mở rộng linh hoạt.']
              : ['Enterprise-grade security.', 'Scalable infrastructure.']
          }
          subtitle={
            isVi
              ? 'Phân quyền đa tầng linh hoạt theo mô hình doanh nghiệp, quản trị đa chi nhánh an toàn và bảo mật dữ liệu tuyệt đối.'
              : 'Multi-tier flexible permissions aligned with corporate structure, multi-branch governance, and complete data safety.'
          }
          tags={
            isVi
              ? [
                  'Phân quyền đa tầng linh hoạt',
                  'Quản trị đa chi nhánh',
                  'Nhật ký hoạt động minh bạch',
                  'Bảo mật đăng nhập 2 lớp',
                  'Tích hợp hệ thống mở',
                ]
              : [
                  'Multi-Tier Permissions',
                  'Multi-Branch Governance',
                  'Transparent Activity Logs',
                  'Two-Factor Authentication',
                  'Open Ecosystem Integration',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Nền tảng bảo mật & Hạ tầng công nghệ' : 'Enterprise Security & Technical Foundation'}
          subtitle={
            isVi
              ? 'Xây dựng theo tiêu chuẩn an ninh nghiêm ngặt, bảo vệ dữ liệu và triển khai linh hoạt.'
              : 'Engineered according to rigorous security standards with versatile cloud and on-prem deployments.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Bảo mật & Nền tảng' : 'Security & Platform'} />

        <Footer />
      </main>
    </>
  );
}
