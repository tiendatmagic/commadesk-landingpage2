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
          metricBadge: { label: 'Chất lượng', value: 'Video HD' },
        },
        {
          id: 'matrix-chat',
          tag: 'Chat',
          title: 'Chat & Trao Đổi Nhóm Nội Bộ',
          description: 'Nhắn tin tức thì, chia sẻ tệp tin và tạo nhóm thảo luận riêng theo từng dự án hoặc phòng ban.',
          metricBadge: { label: 'Bảo mật', value: 'Mã hóa nội bộ' },
        },
        {
          id: 'cms-portal',
          tag: 'Cổng tin',
          title: 'Cổng Tin Doanh Nghiệp',
          description: 'Xuất bản thông báo nội bộ, chính sách công ty và tin tức hoạt động trực quan.',
          metricBadge: { label: 'Phạm vi', value: 'Toàn nhân sự' },
        },
        {
          id: 'screen-share',
          tag: 'Hợp tác',
          title: 'Chia Sẻ & Bảng Trắng',
          description: 'Trình chiếu tài liệu, chia sẻ màn hình và vẽ sơ đồ trực tiếp trong cuộc họp.',
          metricBadge: { label: 'Tương tác', value: 'Trực tiếp' },
        },
        {
          id: 'surveys-feedback',
          tag: 'Khảo sát',
          title: 'Khảo Sát & Góp Ý Ẩn Danh',
          description: 'Thăm dò ý kiến nhân viên, đo lường gắn kết và tiếp nhận góp ý bảo mật.',
          metricBadge: { label: 'Riêng tư', value: 'Ẩn danh' },
        },
        {
          id: 'push-notifications',
          tag: 'Thông báo',
          title: 'Thông Báo Tức Thì',
          description: 'Nhận thông báo quan trọng trên ứng dụng, nhắc việc tự động và liên kết thông báo qua Zalo, Telegram.',
          metricBadge: { label: 'Kênh gửi', value: 'App, Zalo, Telegram' },
        },
      ]
    : [
        {
          id: 'commameet-webrtc',
          tag: 'Video',
          title: 'CommaMeet Video Calls',
          description: 'HD video conferencing for team meetings with clear audio and no session time limits.',
          metricBadge: { label: 'Quality', value: 'HD Video' },
        },
        {
          id: 'matrix-chat',
          tag: 'Chat',
          title: 'Team Chat & Group Messaging',
          description: 'Instant team channels, file sharing, and dedicated project discussion rooms.',
          metricBadge: { label: 'Security', value: 'Encrypted Chat' },
        },
        {
          id: 'cms-portal',
          tag: 'Portal',
          title: 'Corporate Intranet Portal',
          description: 'Publish company news, policy announcements, and internal bulletins in one place.',
          metricBadge: { label: 'Reach', value: 'All Staff' },
        },
        {
          id: 'screen-share',
          tag: 'Collab',
          title: 'Screen Share & Whiteboard',
          description: 'Present slides, share screens, and sketch diagrams together during meetings.',
          metricBadge: { label: 'Mode', value: 'Live Collaboration' },
        },
        {
          id: 'surveys-feedback',
          tag: 'Surveys',
          title: 'Anonymous Feedback',
          description: 'Run employee pulse surveys and collect confidential workplace suggestions safely.',
          metricBadge: { label: 'Privacy', value: 'Anonymous' },
        },
        {
          id: 'push-notifications',
          tag: 'Alerts',
          title: 'Multi-Channel Alerts',
          description: 'Instant in-app alerts, automated task reminders, and mobile push notifications.',
          metricBadge: { label: 'Delivery', value: 'Web & Mobile' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Giao tiếp & Họp trực tuyến' : 'Comms & Meet Module'}
          title={
            isVi
              ? ['Họp video HD bảo mật', 'Kết nối đội ngũ nhanh chóng']
              : ['Encrypted HD meetings', 'Direct team collaboration']
          }
          subtitle={
            isVi
              ? 'Họp video trực tuyến CommaMeet không giới hạn thời lượng, kênh chat theo phòng ban và thông báo công việc.'
              : 'CommaMeet video conferencing with unlimited call time, encrypted team channels, and instant task alerts.'
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
          title={isVi ? 'Giao tiếp & Hợp tác nội bộ' : 'Internal Meetings & Team Chat'}
          subtitle={
            isVi
              ? 'Giúp các phòng ban trao đổi nhanh chóng và bảo mật nội dung cuộc họp nội bộ.'
              : 'Keep project discussions, video calls, and company announcements in one workspace.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Phân hệ Giao tiếp & CommaMeet' : 'CommaMeet & Comms'} />
        <Footer />
      </main>
    </>
  );
}
