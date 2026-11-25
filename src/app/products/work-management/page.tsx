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
          description: 'Kéo thả trực quan, phân loại mức ưu tiên và kiểm soát checklist công việc.',
          metricBadge: { label: 'Tối ưu luồng việc', value: '3x nhanh hơn' },
        },
        {
          id: 'gantt',
          tag: 'Lộ trình',
          title: 'Biểu Đồ Gantt',
          description: 'Theo dõi mốc tiến độ dự án và tự động cập nhật khi nhiệm vụ liên đới đổi lịch.',
          metricBadge: { label: 'Tiến độ', value: '100% chính xác' },
        },
        {
          id: 'my-work',
          tag: 'Cá nhân',
          title: 'Công Việc Của Tôi',
          description: 'Tổng hợp mọi đầu việc được giao từ nhiều dự án vào một màn hình duy nhất.',
          metricBadge: { label: 'Tập trung', value: '0 bỏ sót task' },
        },
        {
          id: 'time-logs',
          tag: 'Năng suất',
          title: 'Nhật Ký Thời Gian',
          description: 'Ghi nhận giờ làm việc, kiểm soát ngân sách và tự động đồng bộ sang bảng công.',
          metricBadge: { label: 'Năng suất', value: '+17% vượt kế hoạch' },
        },
        {
          id: 'sprints',
          tag: 'Agile',
          title: 'Quản Lý Sprint',
          description: 'Theo dõi biểu đồ Burndown, cân bằng tải công việc và nhịp bàn giao sprint.',
          metricBadge: { label: 'Chu kỳ', value: '2 tuần/sprint' },
        },
        {
          id: 'acceptance-budget',
          tag: 'Điều hành',
          title: 'Nghiệm Thu & Ngân Sách',
          description: 'Nghiệm thu trực tuyến, đối soát chi phí thực tế và báo cáo tiến độ đa dự án.',
          metricBadge: { label: 'Ngân sách', value: 'Thời gian thực' },
        },
      ]
    : [
        {
          id: 'kanban',
          tag: 'Visual Flow',
          title: 'Kanban Boards',
          description: 'Intuitive drag-and-drop task boards with priority tags and checklists.',
          metricBadge: { label: 'Efficiency', value: '3x Faster' },
        },
        {
          id: 'gantt',
          tag: 'Roadmap',
          title: 'Gantt Timeline',
          description: 'Interactive timelines with automated rescheduling when milestones shift.',
          metricBadge: { label: 'Accuracy', value: '100% On-Track' },
        },
        {
          id: 'my-work',
          tag: 'Personal Hub',
          title: 'My Work Hub',
          description: 'Aggregates all personal assignments across enterprise workspaces in one view.',
          metricBadge: { label: 'Focus', value: 'Zero Missed Tasks' },
        },
        {
          id: 'time-logs',
          tag: 'Productivity',
          title: 'Time Logs & Hours',
          description: 'Track subtask hours, monitor budgets, and auto-sync with timesheets.',
          metricBadge: { label: 'Velocity', value: '+17% Ahead' },
        },
        {
          id: 'sprints',
          tag: 'Agile Engine',
          title: 'Sprint Planning',
          description: 'Balance squad capacities with Burndown curves and release cadence.',
          metricBadge: { label: 'Cadence', value: 'Bi-weekly Sprints' },
        },
        {
          id: 'acceptance-budget',
          tag: 'Governance',
          title: 'Acceptance & Budget',
          description: 'Digital sign-offs with real-time budget vs actual expenditure tracking.',
          metricBadge: { label: 'Budget Control', value: 'Realtime Variance' },
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
              ? ['Lập kế hoạch chính xác.', 'Thực thi không gián đoạn.']
              : ['Plan with precision.', 'Execute without friction.']
          }
          subtitle={
            isVi
              ? 'Hợp nhất bảng việc Kanban, biểu đồ Gantt và nhật ký thời gian trên một nền tảng trực quan.'
              : 'Unify Kanban boards, Gantt timelines, and project time logs in one intuitive platform.'
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
          title={isVi ? 'Bộ công cụ quản lý dự án cấp doanh nghiệp' : 'Enterprise Project Management Suite'}
          subtitle={
            isVi
              ? 'Kiểm soát tiến độ, dự toán ngân sách và tăng tốc độ bàn giao cho toàn bộ đội ngũ.'
              : 'Accelerate delivery timelines and keep project budgets strictly on schedule.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Quản lý Công việc & Dự án' : 'Work & Projects'} />

        <Footer />
      </main>
    </>
  );
}
