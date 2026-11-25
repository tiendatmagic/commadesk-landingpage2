'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveSurveysFeedback } from '@/components/showcase/InteractiveSurveysFeedback';

export default function SurveysFeedbackPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveSurveysFeedback isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'survey-builder',
          tag: 'Tạo khảo sát',
          title: 'Trình Tạo Khảo Sát',
          description: 'Thiết kế khảo sát linh hoạt với thang điểm Likert, câu hỏi trắc nghiệm và điều kiện rẽ nhánh.',
          metricBadge: { label: 'Câu hỏi', value: 'Đa dạng định dạng' },
        },
        {
          id: 'survey-approval-workflow',
          tag: 'Kiểm duyệt',
          title: 'Phê Duyệt Nội Dung',
          description: 'Xét duyệt bộ câu hỏi qua HR hoặc Ban Giám Đốc trước khi phát hành tới toàn nhân viên.',
          metricBadge: { label: 'Quy trình', value: 'Duyệt trước khi gửi' },
        },
        {
          id: 'enps-analytics',
          tag: 'Chỉ số eNPS',
          title: 'Thống Kê Chỉ Số eNPS',
          description: 'Đo lường mức độ gắn kết, tổng hợp tỷ lệ tham gia và phản hồi theo từng phòng ban.',
          metricBadge: { label: 'Thống kê', value: 'Theo phòng ban' },
        },
        {
          id: 'confidential-mailbox',
          tag: 'Hộp thư bảo mật',
          title: 'Hòm Thư Góp Ý Lãnh Đạo',
          description: 'Kênh tiếp nhận tâm tư nhân viên với tùy chọn gửi ẩn danh để bảo vệ người đóng góp ý kiến.',
          metricBadge: { label: 'Chế độ', value: 'Ẩn danh tùy chọn' },
        },
        {
          id: 'sla-response-tracking',
          tag: 'Cam kết SLA',
          title: 'Theo Dõi Tiến Độ Phản Hồi',
          description: 'Cấp mã tra cứu riêng cho người gửi để theo dõi trạng thái xử lý và thời hạn phản hồi.',
          metricBadge: { label: 'Thời hạn', value: 'Mục tiêu 48h' },
        },
        {
          id: 'culture-retention',
          tag: 'Văn hóa',
          title: 'Cải Thiện Môi Trường Làm Việc',
          description: 'Tổng hợp đề xuất thực tế từ khảo sát để HR và quản lý lên kế hoạch cải tiến nội bộ.',
          metricBadge: { label: 'Hành động', value: 'Theo dõi xử lý' },
        },
      ]
    : [
        {
          id: 'survey-builder',
          tag: 'Builder',
          title: 'Visual Survey Designer',
          description: 'Create employee questionnaires with rating scales, multiple-choice items, and branching logic.',
          metricBadge: { label: 'Formats', value: 'Flexible Fields' },
        },
        {
          id: 'survey-approval-workflow',
          tag: 'Approvals',
          title: 'Pre-Broadcast Approvals',
          description: 'Review survey drafts with HR or management before publishing to staff.',
          metricBadge: { label: 'Workflow', value: 'Pre-Send Review' },
        },
        {
          id: 'enps-analytics',
          tag: 'eNPS',
          title: 'eNPS Engagement Reports',
          description: 'Track employee sentiment scores and response rates segmented by department.',
          metricBadge: { label: 'Metrics', value: 'By Department' },
        },
        {
          id: 'confidential-mailbox',
          tag: 'Confidential',
          title: 'Direct Leadership Mailbox',
          description: 'Provide a dedicated channel for staff to share suggestions with optional anonymity.',
          metricBadge: { label: 'Privacy', value: 'Optional Anonymity' },
        },
        {
          id: 'sla-response-tracking',
          tag: 'SLA',
          title: '48h Resolution Tracking',
          description: 'Give contributors a private lookup code to follow response progress against SLA targets.',
          metricBadge: { label: 'Window', value: '48h Target' },
        },
        {
          id: 'culture-retention',
          tag: 'Culture',
          title: 'Workplace Action Plans',
          description: 'Turn employee feedback into assigned follow-up items for HR and team managers.',
          metricBadge: { label: 'Follow-Up', value: 'Tracked Actions' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Khảo Sát & Góp Ý' : 'Surveys & Feedback Module'}
          title={
            isVi
              ? ['Lắng nghe đội ngũ', 'Cải thiện môi trường làm việc']
              : ['Listen to employee feedback', 'Act on workplace insights']
          }
          subtitle={
            isVi
              ? 'Tạo khảo sát nội bộ, theo dõi chỉ số eNPS theo phòng ban và tiếp nhận góp ý bảo mật gửi tới lãnh đạo.'
              : 'Internal pulse surveys, department eNPS reporting, and a confidential feedback mailbox for leadership.'
          }
          tags={
            isVi
              ? [
                  'Tạo khảo sát nội bộ',
                  'Phê duyệt nội dung',
                  'Chỉ số eNPS',
                  'Hộp thư góp ý ẩn danh',
                  'Theo dõi phản hồi 48h',
                ]
              : [
                  'Survey Builder',
                  'Editorial Approval',
                  'eNPS Reporting',
                  'Anonymous Mailbox',
                  '48h SLA Tracking',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Đo lường gắn kết & Tiếp nhận góp ý' : 'Employee Surveys & Feedback Handling'}
          subtitle={
            isVi
              ? 'Tạo kênh lắng nghe minh bạch giữa nhân viên và ban điều hành kèm lộ trình phản hồi rõ ràng.'
              : 'Give staff a structured channel to share feedback with clear follow-up tracking.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Khảo Sát & Hộp Thư Góp Ý' : 'Surveys & Culture Mailbox'} />

        <Footer />
      </main>
    </>
  );
}
