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
          description: 'Thiết kế khảo sát linh hoạt: thang điểm Likert, trắc nghiệm và logic phân nhánh.',
          metricBadge: { label: 'Tùy biến', value: '10+ Loại trường' },
        },
        {
          id: 'survey-approval-workflow',
          tag: 'Kiểm duyệt',
          title: 'Phê Duyệt Nội Dung',
          description: 'Xét duyệt nội dung qua HR hoặc Ban Giám Đốc trước khi gửi đến toàn thể nhân viên.',
          metricBadge: { label: 'Kiểm duyệt', value: '100% chuẩn mực' },
        },
        {
          id: 'enps-analytics',
          tag: 'Chỉ số eNPS',
          title: 'Phân Tích eNPS Realtime',
          description: 'Đo lường mức độ gắn kết, phân loại nhóm ủng hộ và phản hồi theo từng phòng ban.',
          metricBadge: { label: 'Gắn kết', value: 'Realtime eNPS' },
        },
        {
          id: 'confidential-mailbox',
          tag: 'Hộp thư bảo mật',
          title: 'Hòm Thư Góp Ý Lãnh Đạo',
          description: 'Kênh tiếp nhận tâm tư nhân viên: gửi ẩn danh mã hóa hoàn toàn, chống lộ danh tính.',
          metricBadge: { label: 'Bảo mật', value: 'Mã hóa 100%' },
        },
        {
          id: 'sla-response-tracking',
          tag: 'Cam kết SLA',
          title: 'Theo Dõi Tiến Độ Phản Hồi',
          description: 'Cấp mã tra cứu bí mật cho người gửi và cam kết phản hồi giải quyết trong 48 giờ.',
          metricBadge: { label: 'Thời hạn', value: 'Cam kết 48h' },
        },
        {
          id: 'culture-retention',
          tag: 'Văn hóa',
          title: 'Gắn Kết & Giữ Chân Nhân Tài',
          description: 'Chuyển hóa dữ liệu khảo sát thành hành động cải thiện môi trường làm việc.',
          metricBadge: { label: 'Giữ chân', value: '+22% Gắn kết' },
        },
      ]
    : [
        {
          id: 'survey-builder',
          tag: 'Builder',
          title: 'Visual Survey Designer',
          description: 'Construct feedback questionnaires: Likert scales, multi-choice, and branching logic.',
          metricBadge: { label: 'Input Formats', value: '10+ Types' },
        },
        {
          id: 'survey-approval-workflow',
          tag: 'Approvals',
          title: 'Pre-Broadcast Approvals',
          description: 'Ensure survey rigor through integrated review routing before broadcast.',
          metricBadge: { label: 'Editorial', value: '100% Policy-Safe' },
        },
        {
          id: 'enps-analytics',
          tag: 'eNPS',
          title: 'Real-Time eNPS Radar',
          description: 'Track sentiment metrics and segment cohorts (Promoters, Passives, Detractors).',
          metricBadge: { label: 'Metric', value: 'Realtime eNPS' },
        },
        {
          id: 'confidential-mailbox',
          tag: 'Confidential',
          title: 'Direct Leadership Mailbox',
          description: 'Provide safe channels to voice concerns with cryptographically shielded anonymity.',
          metricBadge: { label: 'Privacy', value: '100% Zero-Leak' },
        },
        {
          id: 'sla-response-tracking',
          tag: 'SLA',
          title: '48h Resolution Tracking',
          description: 'Assign anonymous tracking IDs and guarantee audited 48-hour response closure.',
          metricBadge: { label: 'Window', value: '48h Target' },
        },
        {
          id: 'culture-retention',
          tag: 'Retention',
          title: 'Workplace Trust Drivers',
          description: 'Transform pulse data into concrete actions to foster psychological safety.',
          metricBadge: { label: 'Retention', value: '+22% Lift' },
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
              ? ['Lắng nghe tiếng nói.', 'Nâng tầm văn hóa tổ chức.']
              : ['Listen to employee voices.', 'Elevate workplace trust.']
          }
          subtitle={
            isVi
              ? 'Khảo sát trực quan, đo lường chỉ số eNPS thời gian thực và hòm thư góp ý bảo mật tới Lãnh đạo.'
              : 'Pulse surveys, real-time eNPS analytics, and encrypted direct leadership feedback mailboxes.'
          }
          tags={
            isVi
              ? [
                  'Tạo khảo sát kéo thả',
                  'Phê duyệt nội dung',
                  'Chỉ số eNPS Realtime',
                  'Hộp thư góp ý bảo mật',
                  'Cam kết giải quyết 48h',
                ]
              : [
                  'Visual Survey Builder',
                  'Editorial Approval',
                  'Real-Time eNPS',
                  'Encrypted Mailbox',
                  '48h SLA Tracking',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Đo lường gắn kết & Minh bạch ý kiến' : 'Measuring Engagement with Accountability'}
          subtitle={
            isVi
              ? 'Trao cho mọi nhân viên kênh lên tiếng an toàn và cung cấp bức tranh trung thực cho ban lãnh đạo.'
              : 'Give team members a safe voice and empower leadership with an unfiltered organizational pulse.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Khảo Sát & Hộp Thư Góp Ý' : 'Surveys & Culture Mailbox'} />

        <Footer />
      </main>
    </>
  );
}
