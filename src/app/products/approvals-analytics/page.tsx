'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveApprovalsAnalytics } from '@/components/showcase/InteractiveApprovalsAnalytics';

export default function ApprovalsAnalyticsPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveApprovalsAnalytics isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'unified-approval-inbox',
          tag: 'Hàng đợi',
          title: 'Hộp Thư Phê Duyệt',
          description: 'Gom toàn bộ đơn từ từ mọi phân hệ: nghỉ phép, cấp tài sản, phiếu kho và văn bản.',
          metricBadge: { label: 'Quy trình', value: 'Một hộp thư chung' },
        },
        {
          id: 'delegation-engine',
          tag: 'Ủy quyền',
          title: 'Ủy Quyền Vắng Mặt',
          description: 'Chuyển tiếp quyền duyệt cho cấp phó khi vắng mặt kèm hạn mức tài chính và thời gian hiệu lực.',
          metricBadge: { label: 'Kiểm soát', value: 'Theo hạn mức' },
        },
        {
          id: 'executive-kpi-radar',
          tag: 'Lãnh đạo',
          title: 'Dashboard Ban Lãnh Đạo',
          description: 'Tổng hợp tiến độ dự án, tình hình chấm công và cảnh báo trễ hạn của các phòng ban.',
          metricBadge: { label: 'Cập nhật', value: 'Theo thời gian thực' },
        },
        {
          id: 'acceptance-quality',
          tag: 'Nghiệm thu',
          title: 'Nghiệm Thu Công Việc',
          description: 'Đánh giá tỷ lệ nhiệm vụ hoàn thành đúng hạn và nghiệm thu việc kèm chứng từ.',
          metricBadge: { label: 'Theo dõi', value: 'Đúng hạn & chất lượng' },
        },
        {
          id: 'immutable-audit-trail',
          tag: 'Kiểm soát',
          title: 'Nhật Ký Phê Duyệt',
          description: 'Mọi thao tác duyệt, từ chối hay ủy quyền đều được ghi nhận người thực hiện và mốc thời gian.',
          metricBadge: { label: 'Lưu vết', value: 'Đầy đủ lịch sử' },
        },
        {
          id: 'sla-escalation',
          tag: 'Nhắc hạn',
          title: 'Cảnh Báo Hạn Duyệt SLA',
          description: 'Tự động gửi nhắc nhở và chuyển tiếp lên cấp quản lý khi phiếu đề xuất sắp quá hạn xử lý.',
          metricBadge: { label: 'Chủ động', value: 'Cảnh báo theo hạn' },
        },
      ]
    : [
        {
          id: 'unified-approval-inbox',
          tag: 'Inbox',
          title: 'Unified Approval Inbox',
          description: 'Aggregate pending approvals from all modules: leave requests, inventory vouchers, and document sign-offs.',
          metricBadge: { label: 'Workspace', value: 'Single Inbox' },
        },
        {
          id: 'delegation-engine',
          tag: 'Delegation',
          title: 'Absence Delegation',
          description: 'Delegate sign-off authority during absence, bounded by spending limits and active dates.',
          metricBadge: { label: 'Controls', value: 'Scoped Limits' },
        },
        {
          id: 'executive-kpi-radar',
          tag: 'Leadership',
          title: 'Executive KPI Dashboard',
          description: 'Track company-wide project progress, attendance rates, and upcoming deadline risks.',
          metricBadge: { label: 'Updates', value: 'Live Reports' },
        },
        {
          id: 'acceptance-quality',
          tag: 'Acceptance',
          title: 'Milestone Acceptance',
          description: 'Review task turnaround rates, milestone sign-offs, and supporting attachments.',
          metricBadge: { label: 'Tracking', value: 'On-Time Delivery' },
        },
        {
          id: 'immutable-audit-trail',
          tag: 'Audit',
          title: 'Approval Audit Log',
          description: 'Every approval, rejection, or delegation records the reviewer, decision, and timestamp.',
          metricBadge: { label: 'History', value: 'Full Traceability' },
        },
        {
          id: 'sla-escalation',
          tag: 'SLA',
          title: 'SLA Escalation Alerts',
          description: 'Send automated reminders and escalate requests when approvals approach their deadline.',
          metricBadge: { label: 'Alerts', value: 'Deadline Rules' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Phê Duyệt & Lãnh Đạo' : 'Approvals & Leadership Module'}
          title={
            isVi
              ? ['Một hộp thư phê duyệt chung', 'Toàn cảnh chỉ số điều hành']
              : ['Unified approval routing', 'Executive KPI visibility']
          }
          subtitle={
            isVi
              ? 'Một điểm đến duy nhất cho mọi quy trình phê duyệt nghỉ phép, tài sản, kho bãi và báo cáo điều hành.'
              : 'A single inbox for leave, asset, warehouse, and budget approvals paired with management KPI reports.'
          }
          tags={
            isVi
              ? [
                  'Hộp thư duyệt hợp nhất',
                  'Ủy quyền vắng mặt',
                  'Dashboard lãnh đạo',
                  'Nghiệm thu công việc',
                  'Cảnh báo hạn SLA',
                ]
              : [
                  'Unified Inbox',
                  'Absence Delegation',
                  'Executive KPIs',
                  'Milestone Acceptance',
                  'SLA Deadline Alerts',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Xóa bỏ điểm nghẽn ra quyết định' : 'Clear Approval Routing'}
          subtitle={
            isVi
              ? 'Giảm tồn đọng đơn từ và giúp ban lãnh đạo theo dõi tiến độ phê duyệt theo thời gian thực.'
              : 'Prevent approval backlogs and give managers clear visibility into pending requests.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Phê Duyệt & Báo Cáo Lãnh Đạo' : 'Approvals & Executive Intelligence'} />

        <Footer />
      </main>
    </>
  );
}
