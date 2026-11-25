'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveOrgOrbit } from '@/components/showcase/InteractiveOrgOrbit';

export default function HrWorkforcePage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveOrgOrbit isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'org-tree',
          tag: 'Tổ chức',
          title: 'Sơ Đồ Tổ Chức',
          description: 'Mô hình hóa cơ cấu công ty mẹ, chi nhánh và phòng ban với tuyến báo cáo đa cấp.',
          metricBadge: { label: 'Mở rộng', value: 'Không giới hạn cấp' },
        },
        {
          id: 'profile-360',
          tag: 'Hồ sơ',
          title: 'Hồ Sơ Nhân Sự 360°',
          description: 'Số hóa hợp đồng lao động, thông tin thuế, bảo hiểm và danh bạ nhân sự tức thì.',
          metricBadge: { label: 'Số hóa', value: '100% Paperless' },
        },
        {
          id: 'multi-shifts',
          tag: 'Chấm công',
          title: 'Chấm Công Đa Ca',
          description: 'Chấm công nhận diện Face AI dưới 200ms, Kiosk và GPS chống gian lận.',
          metricBadge: { label: 'Chính xác', value: '99.98% chống gian lận' },
        },
        {
          id: 'approvals',
          tag: 'Phê duyệt',
          title: 'Duyệt Phép & Tăng Ca OT',
          description: 'Tự động định tuyến duyệt nghỉ phép, làm thêm giờ kèm kiểm soát thời hạn SLA.',
          metricBadge: { label: 'Thời gian duyệt', value: '< 2 giờ làm việc' },
        },
        {
          id: 'payroll',
          tag: 'Tính lương',
          title: 'Tính Lương Tự Động',
          description: 'Tổng hợp bảng công, tính thuế, bảo hiểm và phát hành phiếu lương bảo mật.',
          metricBadge: { label: 'Tốc độ', value: 'Từ 5 ngày xuống 1 giờ' },
        },
        {
          id: 'hr-analytics',
          tag: 'Báo cáo',
          title: 'Phân Tích Nhân Lực',
          description: 'Báo cáo cơ cấu nhân sự, biến động nghỉ việc và tự động hóa quy trình đón nhân sự mới.',
          metricBadge: { label: 'Tiêu chuẩn', value: 'Chuẩn kiểm toán' },
        },
      ]
    : [
        {
          id: 'org-tree',
          tag: 'Hierarchy',
          title: 'Org Chart Matrix',
          description: 'Model holding companies, subsidiaries, and departments with dynamic matrix trees.',
          metricBadge: { label: 'Scalability', value: 'Unlimited Depth' },
        },
        {
          id: 'profile-360',
          tag: 'Profiles',
          title: 'Employee 360° Files',
          description: 'Digitize contracts, salary accounts, tax records, and corporate directory lookups.',
          metricBadge: { label: 'Records', value: '100% Paperless' },
        },
        {
          id: 'multi-shifts',
          tag: 'Attendance',
          title: 'Multi-Shift Clock-In',
          description: 'High-speed Face AI (<200ms), tablet Kiosk, and GPS geofences against buddy punching.',
          metricBadge: { label: 'Anti-Spoofing', value: '99.98% Accuracy' },
        },
        {
          id: 'approvals',
          tag: 'Approvals',
          title: 'Leave & Overtime Routing',
          description: 'Automated approval routing with statutory overtime limit checks and SLA alerts.',
          metricBadge: { label: 'Turnaround', value: '< 2 Working Hours' },
        },
        {
          id: 'payroll',
          tag: 'Compensation',
          title: 'Automated Payroll Engine',
          description: 'Aggregate verified work entries, calculate taxes, insurance, and issue digital payslips.',
          metricBadge: { label: 'Speed', value: '5 Days to 1 Hr' },
        },
        {
          id: 'hr-analytics',
          tag: 'Analytics',
          title: 'Workforce Analytics',
          description: 'Workforce demographics, attendance trends, and automated paperless onboarding.',
          metricBadge: { label: 'Compliance', value: 'Audit-Ready' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Tổ chức & Nhân sự' : 'HR & Workforce Module'}
          title={
            isVi
              ? ['Cơ cấu minh bạch.', 'Vận hành nhân sự chuẩn xác.']
              : ['Transparent hierarchy.', 'Effortless workforce operations.']
          }
          subtitle={
            isVi
              ? 'Hợp nhất sơ đồ tổ chức, hồ sơ 360°, chấm công sinh trắc học và tính lương tự động trên một hệ thống duy nhất.'
              : 'Unify multi-level org charts, 360° employee dossiers, biometric attendance, and automated payroll in one platform.'
          }
          tags={
            isVi
              ? [
                  'Sơ đồ tổ chức',
                  'Hồ sơ 360°',
                  'Face AI & GPS',
                  'Duyệt phép & OT',
                  'Tính lương tự động',
                ]
              : [
                  'Org Matrix',
                  'Employee 360°',
                  'Face AI & GPS',
                  'Leave & OT',
                  'Automated Payroll',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Hệ điều hành nhân sự toàn diện' : 'Complete People Operations Suite'}
          subtitle={
            isVi
              ? 'Chuẩn hóa toàn bộ vòng đời nhân sự từ tiếp nhận, chấm công phân ca đến tính lương tự động.'
              : 'Standardize employee lifecycle from onboarding, multi-shift attendance, to automated payroll.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Tổ chức & Nhân sự' : 'HR & Workforce'} />

        <Footer />
      </main>
    </>
  );
}
