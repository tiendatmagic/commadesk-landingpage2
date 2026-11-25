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
          metricBadge: { label: 'Nghiệp vụ', value: 'Kanban & Gantt' },
        },
        {
          id: 'hr-payroll-guide',
          tag: 'Nhân sự',
          title: 'Vận Hành Nhân Sự & Chấm Công',
          description:
            'Quản lý hồ sơ nhân viên, chấm công nhận diện khuôn mặt và tổng hợp bảng công sang bảng lương tự động.',
          metricBadge: { label: 'Quy trình', value: 'Đồng bộ bảng lương' },
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
          title: 'Phân Quyền Theo Cơ Cấu Tổ Chức',
          description:
            'Thiết lập chính sách truy cập phân cấp từ trụ sở, chi nhánh đến từng phòng ban và vị trí chuyên môn.',
          metricBadge: { label: 'Phạm vi', value: 'Theo vai trò & đơn vị' },
        },
        {
          id: 'camera-ai-guide',
          tag: 'Giám sát',
          title: 'Camera & Kiểm Soát Ra Vào',
          description:
            'Kết nối camera giám sát hiện hữu, nhận diện khách mời, đếm lưu lượng và ghi nhận sự kiện an ninh tức thì.',
          metricBadge: { label: 'Giám sát', value: 'Theo thời gian thực' },
        },
        {
          id: 'open-integration-guide',
          tag: 'Kết nối',
          title: 'Đồng Bộ Phần Mềm Doanh Nghiệp',
          description:
            'Kết nối và đồng bộ hai chiều với phần mềm kế toán, bán hàng POS, máy chấm công và cổng thông tin nội bộ.',
          metricBadge: { label: 'Đồng bộ', value: 'Hai chiều' },
        },
      ]
    : [
        {
          id: 'project-management-guide',
          tag: 'Projects',
          title: 'Project & Milestone Tracking',
          description:
            'Organize deliverables with Kanban boards, Gantt timelines, and track task completion by team member.',
          metricBadge: { label: 'Workflow', value: 'Kanban & Gantt' },
        },
        {
          id: 'hr-payroll-guide',
          tag: 'Workforce',
          title: 'HR & Automated Payroll',
          description:
            'Employee directory, facial and GPS clock-in, and verified attendance entries synced directly to payroll.',
          metricBadge: { label: 'Workflow', value: 'Payroll Sync' },
        },
        {
          id: 'digital-documents-guide',
          tag: 'Documents',
          title: 'Document Registry & Digital Signing',
          description:
            'Standardized inbound and outbound dispatches, auto-numbering, digital sign-offs, and compliant archiving.',
          metricBadge: { label: 'Standard', value: 'Decree 30' },
        },
        {
          id: 'enterprise-permissions-docs',
          tag: 'Permissions',
          title: 'Organization-Scoped Permissions',
          description:
            'Configure access rules across organizations, branches, departments, roles, and individual team members.',
          metricBadge: { label: 'Model', value: 'Role-Based Access' },
        },
        {
          id: 'camera-ai-guide',
          tag: 'Vision',
          title: 'Cameras & Access Monitoring',
          description:
            'Connect existing camera feeds, identify visitors, track license plates, and log security events as they occur.',
          metricBadge: { label: 'Monitoring', value: 'Live Events' },
        },
        {
          id: 'open-integration-guide',
          tag: 'Integrations',
          title: 'Business Software Synchronization',
          description:
            'Connect and sync two-way records with accounting tools, retail POS systems, and attendance devices.',
          metricBadge: { label: 'Sync', value: 'Two-Way' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Cẩm Nang & Tính Năng Nghiệp Vụ' : 'Feature Handbook & Guides'}
          title={
            isVi
              ? ['Cẩm nang nghiệp vụ', 'Quy trình vận hành chuẩn hóa']
              : ['Operational handbook', 'Standardized business workflows']
          }
          subtitle={
            isVi
              ? 'Khám phá đầy đủ tính năng và quy trình vận hành thực tế cho toàn bộ 13 phân hệ quản trị doanh nghiệp CommaDesk.'
              : 'Explore practical features and day-to-day workflows across all 13 CommaDesk business modules.'
          }
          tags={
            isVi
              ? [
                  'Quản trị dự án & Tiến độ',
                  'Chấm công & Tính lương',
                  'Sổ văn bản & Ký số',
                  'Phân quyền theo vai trò',
                  'Camera giám sát thông minh',
                ]
              : [
                  'Project & Progress Hub',
                  'HR & Payroll',
                  'Document Registry',
                  'Role-Based Permissions',
                  'Camera Monitoring',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Danh mục tính năng' : 'Feature Categories'}
          title={isVi ? 'Cẩm nang nghiệp vụ doanh nghiệp' : 'Enterprise Operational Handbook'}
          subtitle={
            isVi
              ? 'Các quy trình nghiệp vụ trọng yếu được số hóa và liên kết chặt chẽ trên một không gian làm việc chung.'
              : 'Core business workflows digitized and connected in one shared workspace.'
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
