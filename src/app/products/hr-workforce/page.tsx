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
          id: "org-tree",
          tag: "Tổ chức",
          title: "Sơ Đồ Tổ Chức",
          description:
            "Mô hình hóa cơ cấu công ty mẹ, chi nhánh và phòng ban với tuyến báo cáo nhiều cấp.",
          metricBadge: { label: "Cơ cấu", value: "Sơ đồ đa cấp" },
        },
        {
          id: "profile-360",
          tag: "Hồ sơ",
          title: "Hồ Sơ Nhân Sự 360°",
          description:
            "Quản lý hợp đồng lao động, thông tin ngân hàng lương, giảm trừ gia cảnh và danh bạ nhân sự.",
          metricBadge: { label: "Lưu trữ", value: "Hồ sơ số hóa" },
        },
        {
          id: "multi-shifts",
          tag: "Chấm công",
          title: "Chấm Công Đa Ca",
          description:
            "Chấm công nhận diện khuôn mặt tại Kiosk hoặc định vị GPS trên điện thoại theo từng ca làm việc.",
          metricBadge: { label: "Phương thức", value: "Khuôn mặt & GPS" },
        },
        {
          id: "approvals",
          tag: "Phê duyệt",
          title: "Duyệt Phép & Tăng Ca OT",
          description:
            "Định tuyến duyệt đơn nghỉ phép, công tác và làm thêm giờ kèm kiểm tra hạn mức quy định.",
          metricBadge: { label: "Quy trình", value: "Duyệt 2–3 cấp" },
        },
        {
          id: "payroll",
          tag: "Tính lương",
          title: "Tính Lương Tự Động",
          description:
            "Tổng hợp bảng công, tính thuế TNCN, bảo hiểm và phát hành phiếu lương trực tuyến cho từng nhân viên.",
          metricBadge: { label: "Tổng hợp", value: "Từ bảng công thực tế" },
        },
        {
          id: "hr-analytics",
          tag: "Báo cáo",
          title: "Báo Cáo Nhân Lực",
          description:
            "Thống kê cơ cấu nhân sự, tỷ lệ chuyên cần, biến động nghỉ việc và quy trình tiếp nhận nhân viên mới.",
          metricBadge: { label: "Báo cáo", value: "Theo kỳ & phòng ban" },
        },
      ]
    : [
        {
          id: "org-tree",
          tag: "Hierarchy",
          title: "Organization Chart",
          description:
            "Model holding companies, branches, and departments with clear multi-level reporting lines.",
          metricBadge: { label: "Structure", value: "Multi-Level Tree" },
        },
        {
          id: "profile-360",
          tag: "Profiles",
          title: "Employee 360° Files",
          description:
            "Maintain contracts, payroll bank accounts, tax dependents, and corporate directory lookups.",
          metricBadge: { label: "Records", value: "Digital Files" },
        },
        {
          id: "multi-shifts",
          tag: "Attendance",
          title: "Multi-Shift Clock-In",
          description:
            "Support rotating, split, and night shifts with facial Kiosk check-in and mobile GPS geofencing.",
          metricBadge: { label: "Methods", value: "Face & GPS" },
        },
        {
          id: "approvals",
          tag: "Approvals",
          title: "Leave & Overtime Routing",
          description:
            "Route leave, business trip, and overtime requests through managers with statutory limit checks.",
          metricBadge: { label: "Routing", value: "2–3 Step Flow" },
        },
        {
          id: "payroll",
          tag: "Compensation",
          title: "Automated Payroll",
          description:
            "Aggregate verified attendance entries, compute taxes and insurance, and issue digital payslips.",
          metricBadge: { label: "Calculation", value: "Work-Entry Linked" },
        },
        {
          id: "hr-analytics",
          tag: "Analytics",
          title: "Workforce Reports",
          description:
            "Track headcount distribution, attendance trends, turnover, and new-hire onboarding checklists.",
          metricBadge: { label: "Reports", value: "By Unit & Period" },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={
            isVi ? "Phân hệ Tổ chức & Nhân sự" : "HR & Workforce Module"
          }
          title={
            isVi
              ? ["Cơ cấu tổ chức rõ ràng", "Chấm công & Tính lương đồng bộ"]
              : ["Clear org hierarchy", "Connected attendance and payroll"]
          }
          subtitle={
            isVi
              ? "Quản lý sơ đồ tổ chức, hồ sơ nhân sự, chấm công đa ca và bảng lương trên cùng một hệ thống."
              : "Manage multi-level org charts, employee files, multi-shift attendance, and automated payroll in one place."
          }
          tags={
            isVi
              ? [
                  "Sơ đồ tổ chức",
                  "Hồ sơ nhân sự",
                  "Chấm công khuôn mặt & GPS",
                  "Duyệt phép & OT",
                  "Tính lương tự động",
                ]
              : [
                  "Org Chart",
                  "Employee Files",
                  "Face & GPS Check-in",
                  "Leave & OT",
                  "Automated Payroll",
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? "Khả năng cốt lõi" : "Core Capabilities"}
          title={
            isVi
              ? "Quản trị nhân sự từ hồ sơ đến bảng lương"
              : "End-to-End People Operations"
          }
          subtitle={
            isVi
              ? "Chuẩn hóa quy trình từ tiếp nhận nhân viên mới, phân ca chấm công đến tổng hợp bảng lương hàng tháng."
              : "Standardize onboarding, shift scheduling, leave approvals, and monthly payroll calculations."
          }
          features={features}
        />

        <SubpageCTA
          moduleName={isVi ? "Tổ chức & Nhân sự" : "HR & Workforce"}
        />

        <Footer />
      </main>
    </>
  );
}
