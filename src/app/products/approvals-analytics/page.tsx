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
          metricBadge: { label: 'Tập trung', value: '100% Một Inbox' },
        },
        {
          id: 'delegation-engine',
          tag: 'Ủy quyền',
          title: 'Ủy Quyền Vắng Mặt',
          description: 'Tự động ủy quyền duyệt cho cấp phó khi vắng mặt kèm hạn mức tài chính.',
          metricBadge: { label: 'Tắc nghẽn', value: 'Giảm 100%' },
        },
        {
          id: 'executive-kpi-radar',
          tag: 'Lãnh đạo',
          title: 'Dashboard Ban Lãnh Đạo',
          description: 'Góc nhìn vĩ mô 360° về nhịp đập doanh nghiệp: tiến độ sprint và rủi ro deadline.',
          metricBadge: { label: 'Tầm nhìn', value: 'Thời gian thực' },
        },
        {
          id: 'acceptance-quality',
          tag: 'Nghiệm thu',
          title: 'Nghiệm Thu Công Việc',
          description: 'Đánh giá tỷ lệ nhiệm vụ hoàn thành đúng hạn và nghiệm thu việc kèm chứng từ.',
          metricBadge: { label: 'Đúng hạn', value: '96.8% Milestones' },
        },
        {
          id: 'immutable-audit-trail',
          tag: 'Kiểm toán',
          title: 'Nhật Ký Kiểm Toán Số',
          description: 'Mọi thao tác duyệt, từ chối hay ủy quyền đều được lưu vết chữ ký số bất biến.',
          metricBadge: { label: 'Minh bạch', value: '100% Bất biến' },
        },
        {
          id: 'sla-escalation',
          tag: 'Cảnh báo',
          title: 'Cảnh Báo Hạn Duyệt SLA',
          description: 'Tự động nhắc nhở và leo thang cấp trên nếu yêu cầu vượt quá cam kết SLA.',
          metricBadge: { label: 'Tốc độ', value: 'Nhanh hơn 4x' },
        },
      ]
    : [
        {
          id: 'unified-approval-inbox',
          tag: 'Inbox',
          title: 'Unified Approval Inbox',
          description: 'Aggregate pending approvals from all modules: leave, inventory, and legal sign-offs.',
          metricBadge: { label: 'Consolidation', value: 'Single Inbox' },
        },
        {
          id: 'delegation-engine',
          tag: 'Delegation',
          title: 'Absence Delegation',
          description: 'Delegate sign-off authority during absence, bounded by spending limits and expiry.',
          metricBadge: { label: 'Bottlenecks', value: 'Zero Delays' },
        },
        {
          id: 'executive-kpi-radar',
          tag: 'Leadership',
          title: 'Executive C-Suite Radar',
          description: 'A 360° view over company health: delivery velocity, risks, and budget burn.',
          metricBadge: { label: 'Visibility', value: 'Live Telemetry' },
        },
        {
          id: 'acceptance-quality',
          tag: 'Acceptance',
          title: 'Milestone Acceptance',
          description: 'Measure task turnaround rates, team velocity trends, and verified sign-offs.',
          metricBadge: { label: 'Milestones', value: '96.8% On-Time' },
        },
        {
          id: 'immutable-audit-trail',
          tag: 'Audit',
          title: 'Audit Trail & Signatures',
          description: 'Every approval, rejection, or delegation is immutably timestamped and recorded.',
          metricBadge: { label: 'Audit', value: '100% Immutable' },
        },
        {
          id: 'sla-escalation',
          tag: 'SLA',
          title: 'SLA Escalation Alerts',
          description: 'Automatic urgency reminders and vertical escalations whenever approvals risk delay.',
          metricBadge: { label: 'Decisions', value: '4x Faster' },
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
              ? ['Một luồng phê duyệt duy nhất.', 'Toàn cảnh nhịp đập doanh nghiệp.']
              : ['Unified sign-off routing.', 'Real-time executive telemetry.']
          }
          subtitle={
            isVi
              ? 'Một điểm đến duy nhất cho mọi quy trình phê duyệt nghỉ phép, tài sản, kho bãi và chi phí.'
              : 'A single unified inbox for all enterprise approvals paired with executive productivity telemetry.'
          }
          tags={
            isVi
              ? [
                  'Hộp thư duyệt hợp nhất',
                  'Ủy quyền vắng mặt',
                  'Dashboard lãnh đạo 360°',
                  'Nghiệm thu công việc',
                  'Cảnh báo hạn SLA',
                ]
              : [
                  'Unified Inbox',
                  'Absence Delegation',
                  'Executive 360° Radar',
                  'Milestone Acceptance',
                  'SLA Escalation Triggers',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Xóa bỏ điểm nghẽn ra quyết định' : 'Eliminate Decision Bottlenecks'}
          subtitle={
            isVi
              ? 'Tăng tốc phê duyệt, chống tồn đọng đơn từ và trao cho lãnh đạo quyền kiểm soát toàn cảnh.'
              : 'Accelerate decision-making speed, prevent backlogs, and provide complete operational visibility.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Phê Duyệt & Báo Cáo Lãnh Đạo' : 'Approvals & Executive Intelligence'} />

        <Footer />
      </main>
    </>
  );
}
