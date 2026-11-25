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
          tag: 'Phân quyền',
          title: 'Phân quyền theo cơ cấu doanh nghiệp',
          description:
            'Kiểm soát quyền truy cập xuyên suốt từ công ty mẹ, chi nhánh, phòng ban đến từng vai trò nhân sự. Linh hoạt thiết lập phạm vi xem, sửa và phê duyệt theo đúng nhiệm vụ thực tế.',
          metricBadge: { label: 'Cơ chế', value: 'Theo vai trò & đơn vị' },
        },
        {
          id: 'multi-tenant',
          tag: 'Đa chi nhánh',
          title: 'Quản Trị Đa Doanh Nghiệp & Chi Nhánh',
          description:
            'Tách biệt dữ liệu giữa các công ty thành viên và chi nhánh, giúp ban điều hành tổng hợp báo cáo nhưng vẫn giữ độc lập từng đơn vị.',
          metricBadge: { label: 'Phạm vi', value: 'Độc lập theo đơn vị' },
        },
        {
          id: 'audit-trails',
          tag: 'Kiểm soát',
          title: 'Nhật Ký Hoạt Động & Lịch Sử Thay Đổi',
          description:
            'Ghi nhận minh bạch các thao tác truy cập, phê duyệt và chỉnh sửa hồ sơ quan trọng để phục vụ đối soát nội bộ.',
          metricBadge: { label: 'Lưu vết', value: 'Đầy đủ lịch sử' },
        },
        {
          id: 'two-factor-auth',
          tag: 'Xác thực',
          title: 'Bảo Mật Đăng Nhập 2 Lớp & Thiết Bị',
          description:
            'Bảo vệ tài khoản với xác thực 2 lớp (OTP), quản lý phiên đăng nhập từ xa và danh sách thiết bị làm việc tin cậy.',
          metricBadge: { label: 'Bảo mật', value: 'Xác thực 2 lớp' },
        },
        {
          id: 'rest-api-webhooks',
          tag: 'Kết nối',
          title: 'Đồng Bộ Phần Mềm Doanh Nghiệp',
          description:
            'Liên kết và đồng bộ dữ liệu hai chiều với phần mềm kế toán, hóa đơn điện tử, POS bán hàng và ERP đang dùng.',
          metricBadge: { label: 'Kết nối', value: 'Đồng bộ hai chiều' },
        },
        {
          id: 'deployment-modes',
          tag: 'Triển khai',
          title: 'Lựa Chọn Đám Mây Hoặc Máy Chủ Riêng',
          description:
            'Linh hoạt sử dụng trực tuyến trên đám mây hoặc cài đặt trên máy chủ nội bộ của doanh nghiệp cùng ứng dụng Máy tính và Di động.',
          metricBadge: { label: 'Tùy chọn', value: 'Cloud & Máy chủ riêng' },
        },
      ]
    : [
        {
          id: 'enterprise-permissions',
          tag: 'Access Control',
          title: 'Role & Unit-Based Permissions',
          description:
            'Control access across companies, branches, departments, and individual roles. Define view, edit, and approval scopes matched to your reporting structure.',
          metricBadge: { label: 'Model', value: 'Role & Unit Scoped' },
        },
        {
          id: 'multi-tenant',
          tag: 'Multi-Branch',
          title: 'Corporate Multi-Unit Governance',
          description:
            'Separate records cleanly across subsidiaries and branches while giving headquarters consolidated oversight.',
          metricBadge: { label: 'Isolation', value: 'Unit-Scoped Data' },
        },
        {
          id: 'audit-trails',
          tag: 'Auditing',
          title: 'Activity Logs & Change History',
          description:
            'Record user sign-ins, approvals, document updates, and permission changes for internal review and compliance.',
          metricBadge: { label: 'Traceability', value: 'Full History' },
        },
        {
          id: 'two-factor-auth',
          tag: 'Auth & Safety',
          title: 'Two-Factor Auth & Device Trust',
          description:
            'Protect accounts with 2FA verification, remote session sign-out, and trusted work device controls.',
          metricBadge: { label: 'Protection', value: '2-Factor Auth' },
        },
        {
          id: 'rest-api-webhooks',
          tag: 'Integration',
          title: 'Business Software Synchronization',
          description:
            'Connect and synchronize records with accounting tools, e-invoicing, POS systems, and existing ERP workflows.',
          metricBadge: { label: 'Sync', value: 'Two-Way Sync' },
        },
        {
          id: 'deployment-modes',
          tag: 'Deployment',
          title: 'Cloud or On-Premises Hosting',
          description:
            'Run on CommaDesk Cloud or deploy on your private company server with full Web, Desktop, and Mobile support.',
          metricBadge: { label: 'Options', value: 'Cloud & On-Prem' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Bảo mật & Phân quyền' : 'Security & Platform Module'}
          title={
            isVi
              ? ['Phân quyền chặt chẽ', 'Vận hành đa chi nhánh an toàn']
              : ['Scoped role permissions', 'Protected multi-branch data']
          }
          subtitle={
            isVi
              ? 'Phân quyền theo vai trò và đơn vị, quản trị đa chi nhánh tách biệt và lưu vết hoạt động minh bạch.'
              : 'Role-based permissions aligned with your org chart, branch-level data separation, and complete activity logs.'
          }
          tags={
            isVi
              ? [
                  'Phân quyền theo vai trò',
                  'Quản trị đa chi nhánh',
                  'Nhật ký hoạt động',
                  'Bảo mật đăng nhập 2 lớp',
                  'Đồng bộ phần mềm sẵn có',
                ]
              : [
                  'Role-Based Permissions',
                  'Multi-Branch Governance',
                  'Activity Logs',
                  'Two-Factor Auth',
                  'Business System Sync',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Kiểm soát truy cập & Bảo vệ dữ liệu' : 'Access Control & Data Protection'}
          subtitle={
            isVi
              ? 'Đảm bảo đúng người chỉ thấy đúng dữ liệu theo phạm vi phòng ban và chi nhánh được giao.'
              : 'Ensure every team member accesses only the modules and records authorized for their unit.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Bảo mật & Nền tảng' : 'Security & Platform'} />

        <Footer />
      </main>
    </>
  );
}
