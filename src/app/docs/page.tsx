'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveDocsConsole } from '@/components/showcase/InteractiveDocsConsole';

export default function DocsPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveDocsConsole isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'project-management-guide',
          tag: 'Dự án',
          title: 'Quản Trị Dự Án & Tiến Độ',
          description:
            'Tổ chức công việc theo bảng Kanban, lập kế hoạch với sơ đồ Gantt và theo dõi tiến độ chi tiết đến từng nhân sự.',
          metricBadge: { label: 'Hiệu quả', value: '+35% Tốc độ bàn giao' },
        },
        {
          id: 'hr-payroll-guide',
          tag: 'Nhân sự',
          title: 'Vận Hành Nhân Sự & Chấm Công AI',
          description:
            'Quản lý hồ sơ nhân viên 360°, chấm công nhận diện khuôn mặt và tự động tính bảng lương không sai sót.',
          metricBadge: { label: 'Độ chính xác', value: '100% Tự động hóa' },
        },
        {
          id: 'digital-documents-guide',
          tag: 'Văn bản',
          title: 'Sổ Văn Bản Số & Ký Duyệt',
          description:
            'Quy trình tiếp nhận văn bản đến/đi, đánh số tự động theo quy định, ký số điện tử và lưu trữ số hóa an toàn.',
          metricBadge: { label: 'Tiêu chuẩn', value: 'Nghị định 30' },
        },
        {
          id: 'enterprise-permissions-docs',
          tag: 'Phân quyền',
          title: 'Phân Quyền Đa Tầng Theo Tổ Chức',
          description:
            'Thiết lập chính sách truy cập phân cấp từ trụ sở, chi nhánh đến từng phòng ban và vị trí chuyên môn.',
          metricBadge: { label: 'Cơ chế', value: 'Đa tầng linh hoạt' },
        },
        {
          id: 'camera-ai-guide',
          tag: 'An ninh AI',
          title: 'Camera AI & Giám Sát Thông Minh',
          description:
            'Kết nối camera giám sát hiện hữu, nhận diện khách quen/khách VIP, đếm lưu lượng và cảnh báo an ninh tức thì.',
          metricBadge: { label: 'Phản ứng', value: 'Thời gian thực' },
        },
        {
          id: 'open-integration-guide',
          tag: 'Kết nối',
          title: 'Kết Nối Dữ Liệu Doanh Nghiệp',
          description:
            'Dễ dàng kết nối và đồng bộ hai chiều với phần mềm kế toán, bán hàng POS, máy chấm công và cổng dịch vụ công.',
          metricBadge: { label: 'Tương thích', value: 'Mọi nền tảng' },
        },
      ]
    : [
        {
          id: 'project-management-guide',
          tag: 'Projects',
          title: 'Project & Milestone Governance',
          description:
            'Organize deliverables with Kanban boards, Gantt timelines, and monitor individual contributor velocity.',
          metricBadge: { label: 'Efficiency', value: '+35% Delivery Rate' },
        },
        {
          id: 'hr-payroll-guide',
          tag: 'Workforce',
          title: 'Smart HR & Automated Payroll',
          description:
            '360° employee directory, AI biometric clock-in, and automated timesheets without manual discrepancies.',
          metricBadge: { label: 'Accuracy', value: '100% Automated' },
        },
        {
          id: 'digital-documents-guide',
          tag: 'Documents',
          title: 'Document Registry & Digital Signing',
          description:
            'Standardized inbound and outbound dispatches, auto-numbering, cryptographic approvals, and archiving.',
          metricBadge: { label: 'Standard', value: 'Decree 30 Ready' },
        },
        {
          id: 'enterprise-permissions-docs',
          tag: 'Permissions',
          title: 'Multi-Tier Permission Policies',
          description:
            'Control access seamlessly across organizations, branches, departments, roles, and individual users.',
          metricBadge: { label: 'Model', value: 'Multi-Tier' },
        },
        {
          id: 'camera-ai-guide',
          tag: 'Vision AI',
          title: 'AI Cameras & Smart Operations',
          description:
            'Integrate existing CCTV streams, detect VIP visitors, license plates, and receive instant anomaly alerts.',
          metricBadge: { label: 'Response', value: 'Real-Time' },
        },
        {
          id: 'open-integration-guide',
          tag: 'Ecosystem',
          title: 'Enterprise Data Synchronization',
          description:
            'Seamlessly connect and sync two-way data with accounting software, retail POS, and corporate tools.',
          metricBadge: { label: 'Support', value: 'Universal Sync' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Cẩm Nang & Tính Năng Nghiệp Vụ' : 'Feature Handbook & Guides'}
          title={
            isVi
              ? ['Làm chủ nền tảng.', 'Tối ưu hóa vận hành.']
              : ['Master the platform.', 'Optimize operations.']
          }
          subtitle={
            isVi
              ? 'Khám phá đầy đủ tính năng và quy trình vận hành thực tế cho toàn bộ 14 phân hệ quản trị doanh nghiệp CommaDesk.'
              : 'Explore comprehensive features and real-world workflows across all 14 CommaDesk enterprise modules.'
          }
          tags={
            isVi
              ? [
                  'Quản trị dự án & Tiến độ',
                  'Chấm công AI & Tính lương',
                  'Sổ văn bản & Ký số',
                  'Phân quyền đa tầng',
                  'Camera AI thông minh',
                ]
              : [
                  'Project & Progress Hub',
                  'Smart HR & Payroll',
                  'Document Registry',
                  'Multi-Tier Permissions',
                  'Vision AI & Safety',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Danh mục tính năng' : 'Feature Categories'}
          title={isVi ? 'Cẩm nang nghiệp vụ doanh nghiệp' : 'Enterprise Operational Handbook'}
          subtitle={
            isVi
              ? 'Tất cả nghiệp vụ cần thiết được số hóa và kết nối liền mạch trên cùng một không gian làm việc duy nhất.'
              : 'Every critical enterprise workflow is digitized and seamlessly united in a single workspace.'
          }
          features={features}
        />

        <SubpageCTA
          moduleName={isVi ? 'Cẩm Nang & Hướng Dẫn Tính Năng' : 'Feature Handbook & Guides'}
        />
      </main>

      <Footer />
    </>
  );
}
