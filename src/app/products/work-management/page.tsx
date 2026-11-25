'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveKanbanFlow } from '@/components/showcase/InteractiveKanbanFlow';

export default function WorkManagementPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveKanbanFlow isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'kanban',
          tag: 'Trực quan',
          title: 'Bảng Việc Kanban',
          description: 'Kéo thả thẻ việc theo trạng thái, gắn nhãn ưu tiên và kiểm soát checklist đầu việc.',
          metricBadge: { label: 'Quy trình', value: 'Bảng Kanban đa cột' },
        },
        {
          id: 'gantt',
          tag: 'Lộ trình',
          title: 'Biểu Đồ Gantt',
          description: 'Theo dõi các mốc tiến độ, phụ thuộc công việc và điều chỉnh lịch trình khi có thay đổi.',
          metricBadge: { label: 'Lập lịch', value: 'Phụ thuộc mốc việc' },
        },
        {
          id: 'my-work',
          tag: 'Cá nhân',
          title: 'Công Việc Của Tôi',
          description: 'Gom toàn bộ đầu việc được giao từ nhiều dự án vào một danh sách cá nhân có nhắc hạn.',
          metricBadge: { label: 'Theo dõi', value: 'Danh sách hợp nhất' },
        },
        {
          id: 'time-logs',
          tag: 'Giờ công',
          title: 'Nhật Ký Thời Gian',
          description: 'Ghi nhận giờ làm theo từng đầu việc, đối soát ngân sách và đồng bộ sang bảng công.',
          metricBadge: { label: 'Liên kết', value: 'Đồng bộ bảng công' },
        },
        {
          id: 'sprints',
          tag: 'Agile',
          title: 'Quản Lý Sprint',
          description: 'Theo dõi biểu đồ Burndown, cân bằng khối lượng công việc và tiến độ bàn giao theo chu kỳ.',
          metricBadge: { label: 'Chu kỳ', value: 'Quản lý theo Sprint' },
        },
        {
          id: 'acceptance-budget',
          tag: 'Điều hành',
          title: 'Nghiệm Thu & Ngân Sách',
          description: 'Nghiệm thu trực tuyến theo cấp, đối soát chi phí thực tế và báo cáo tiến độ đa dự án.',
          metricBadge: { label: 'Kiểm soát', value: 'Dự toán & Thực chi' },
        },
      ]
    : [
        {
          id: 'kanban',
          tag: 'Visual Flow',
          title: 'Kanban Boards',
          description: 'Move tasks across workflow stages with priority labels, assignees, and checklists.',
          metricBadge: { label: 'Workflow', value: 'Multi-Stage Boards' },
        },
        {
          id: 'gantt',
          tag: 'Roadmap',
          title: 'Gantt Timeline',
          description: 'Schedule milestones, map task dependencies, and adjust timelines when dates shift.',
          metricBadge: { label: 'Scheduling', value: 'Task Dependencies' },
        },
        {
          id: 'my-work',
          tag: 'Personal Hub',
          title: 'My Work Hub',
          description: 'Collect personal assignments across all active projects into one prioritized daily list.',
          metricBadge: { label: 'View', value: 'Unified Task List' },
        },
        {
          id: 'time-logs',
          tag: 'Hours',
          title: 'Time Logs & Hours',
          description: 'Log time per subtask, monitor project budgets, and sync hours with monthly timesheets.',
          metricBadge: { label: 'Sync', value: 'Timesheet Linked' },
        },
        {
          id: 'sprints',
          tag: 'Agile',
          title: 'Sprint Planning',
          description: 'Balance team workload with Burndown charts and sprint completion tracking.',
          metricBadge: { label: 'Cadence', value: 'Sprint Tracking' },
        },
        {
          id: 'acceptance-budget',
          tag: 'Governance',
          title: 'Acceptance & Budget',
          description: 'Multi-level deliverable sign-offs with planned budget vs actual cost comparison.',
          metricBadge: { label: 'Control', value: 'Budget vs Actual' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Dự án & Công việc' : 'Work & Projects Module'}
          title={
            isVi
              ? ['Lập kế hoạch dự án rõ ràng', 'Theo dõi tiến độ từng đầu việc']
              : ['Plan projects clearly', 'Track progress to completion']
          }
          subtitle={
            isVi
              ? 'Hợp nhất bảng việc Kanban, biểu đồ Gantt, nhật ký giờ làm và nghiệm thu dự án trong cùng một không gian.'
              : 'Combine Kanban boards, Gantt timelines, task time logs, and project acceptance in one workspace.'
          }
          tags={
            isVi
              ? [
                  'Bảng Kanban kéo thả',
                  'Biểu đồ Gantt',
                  'Công việc của tôi',
                  'Nhật ký thời gian',
                  'Quản lý Sprint',
                ]
              : [
                  'Kanban Boards',
                  'Gantt Timeline',
                  'My Work Hub',
                  'Time Logs',
                  'Sprint Planning',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Công cụ quản lý dự án & công việc' : 'Project & Task Management'}
          subtitle={
            isVi
              ? 'Theo dõi tiến độ thực tế, kiểm soát ngân sách và phân bổ công việc đồng đều cho các phòng ban.'
              : 'Track deliverables, monitor project budgets, and coordinate tasks across departments.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Quản lý Công việc & Dự án' : 'Work & Projects'} />

        <Footer />
      </main>
    </>
  );
}
