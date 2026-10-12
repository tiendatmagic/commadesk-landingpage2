'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveMeetCollab } from '@/components/showcase/InteractiveMeetCollab';

export default function CommunicationMeetPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveMeetCollab isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'commameet-webrtc',
          tag: 'Họp online',
          title: 'Họp Video CommaMeet',
          description: 'Họp video trực tuyến hình ảnh sắc nét, âm thanh rõ ràng và không giới hạn thời gian họp.',
          metricBadge: { label: 'Chất lượng', value: 'HD Siêu mượt' },
        },
        {
          id: 'matrix-chat',
          tag: 'Chat',
          title: 'Chat & Trao Đổi Nhóm Nội Bộ',
          description: 'Nhắn tin tức thì, chia sẻ tệp tin và tạo nhóm thảo luận riêng theo từng dự án hoặc phòng ban.',
          metricBadge: { label: 'Bảo mật', value: 'Mã hóa an toàn' },
        },
        {
          id: 'cms-portal',
          tag: 'Cổng tin',
          title: 'Cổng Tin Doanh Nghiệp',
          description: 'Xuất bản thông báo nội bộ, chính sách công ty và tin tức hoạt động trực quan.',
          metricBadge: { label: 'Tiếp cận', value: '100% nhân sự' },
        },
        {
          id: 'screen-share',
          tag: 'Hợp tác',
          title: 'Chia Sẻ & Bảng Trắng',
          description: 'Trình chiếu tài liệu, chia sẻ màn hình và vẽ sơ đồ trực tiếp trong cuộc họp.',
          metricBadge: { label: 'Tương tác', value: 'Thời gian thực' },
        },
        {
          id: 'surveys-feedback',
          tag: 'Khảo sát',
          title: 'Khảo Sát & Góp Ý Ẩn Danh',
          description: 'Thăm dò ý kiến nhân viên, đo lường gắn kết và tiếp nhận góp ý bảo mật.',
          metricBadge: { label: 'Bảo mật', value: 'Ẩn danh 100%' },
        },
        {
          id: 'push-notifications',
          tag: 'Thông báo',
          title: 'Thông Báo Tức Thì',
          description: 'Nhận thông báo quan trọng trên ứng dụng, nhắc việc tự động và liên kết thông báo qua Zalo, Telegram.',
          metricBadge: { label: 'Tốc độ', value: 'Thời gian thực' },
        },
      ]
    : [
        {
          id: 'commameet-webrtc',
          tag: 'Video',
          title: 'CommaMeet Video Calls',
          description: 'Enterprise HD video conferencing with crystal-clear audio and zero time limits.',
          metricBadge: { label: 'Quality', value: 'Ultra Smooth HD' },
        },
        {
          id: 'matrix-chat',
          tag: 'Chat',
          title: 'Team Chat & Group Messaging',
          description: 'Instant team channels, file sharing, and dedicated project discussion rooms with encryption.',
          metricBadge: { label: 'Security', value: 'Encrypted' },
        },
        {
          id: 'cms-portal',
          tag: 'Portal',
          title: 'Corporate Intranet Portal',
          description: 'Publish company news, policy announcements, and interactive articles easily.',
          metricBadge: { label: 'Reach', value: '100% Staff' },
        },
        {
          id: 'screen-share',
          tag: 'Collab',
          title: 'Screen Share & Whiteboard',
          description: 'HD screen presentation and interactive whiteboard brainstorming in meetings.',
          metricBadge: { label: 'Interactivity', value: 'Realtime' },
        },
        {
          id: 'surveys-feedback',
          tag: 'Surveys',
          title: 'Anonymous Feedback',
          description: 'Conduct eNPS surveys and collect confidential employee suggestions safely.',
          metricBadge: { label: 'Privacy', value: '100% Anonymous' },
        },
        {
          id: 'push-notifications',
          tag: 'Alerts',
          title: 'Multi-Channel Alerts',
          description: 'Instant in-app alerts, automated task reminders, and mobile push notifications.',
          metricBadge: { label: 'Speed', value: 'Instant' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Giao tiếp & Họp trực tuyến' : 'Comms & Meet Module'}
          title={
            isVi
              ? ['Họp video HD bảo mật.', 'Kết nối đội ngũ tức thì.']
              : ['Encrypted HD meetings.', 'Instant workforce collaboration.']
          }
          subtitle={
            isVi
              ? 'Họp video trực tuyến CommaMeet không giới hạn, kênh chat nội bộ và thông báo đẩy tức thì.'
              : 'Secure CommaMeet video conferencing with unlimited call time, encrypted channels, and instant alerts.'
          }
          visualPreview={visualPreview}
          tags={
            isVi
              ? ['Họp video HD', 'Chat nhóm nội bộ', 'Cổng tin tức', 'Khảo sát nhân viên', 'Thông báo tức thì']
              : ['HD Video Meetings', 'Team Group Chat', 'News Portal', 'Staff Surveys', 'Instant Alerts']
          }
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Năng lực cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Giao tiếp không khoảng cách' : 'Frictionless Communications'}
          subtitle={
            isVi
              ? 'Tăng tốc trao đổi thông tin và bảo mật tuyệt đối các cuộc họp chiến lược.'
              : 'Accelerate decision-making with high-fidelity meetings and encrypted collaboration.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Phân hệ Giao tiếp & CommaMeet' : 'CommaMeet & Comms'} />
        <Footer />
      </main>
    </>
  );
}
