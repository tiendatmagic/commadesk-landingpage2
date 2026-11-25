'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveCRMPipeline } from '@/components/showcase/InteractiveCRMPipeline';

export default function CRMHelpdeskPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveCRMPipeline isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'crm-pipeline',
          tag: 'Kinh doanh',
          title: 'Phễu Bán Hàng B2B',
          description: 'Theo dõi chu trình bán hàng từ cơ hội tiềm năng, báo giá đến dự báo doanh thu.',
          metricBadge: { label: 'Theo dõi', value: 'Theo từng giai đoạn' },
        },
        {
          id: 'helpdesk-queues',
          tag: 'Hỗ trợ',
          title: 'Hàng Đợi Ticket & SLA',
          description: 'Tiếp nhận sự cố, phân công tự động cho kỹ thuật viên và theo dõi đồng hồ cam kết SLA.',
          metricBadge: { label: 'Kiểm soát', value: 'Cảnh báo hạn SLA' },
        },
        {
          id: 'customer-360',
          tag: 'Khách hàng',
          title: 'Hồ Sơ Khách Hàng 360°',
          description: 'Tổng hợp hợp đồng, lịch sử giao dịch và nhật ký hỗ trợ trên một màn hình.',
          metricBadge: { label: 'Tổng hợp', value: 'Lịch sử đầy đủ' },
        },
        {
          id: 'hr-helpdesk-widget',
          tag: 'Hỗ trợ nội bộ',
          title: 'Kênh Hỗ Trợ HR Nội Bộ',
          description: 'Nhân viên gửi yêu cầu hỗ trợ về nhân sự, hành chính ngay trên không gian làm việc.',
          metricBadge: { label: 'Phân loại', value: 'Định tuyến tự động' },
        },
        {
          id: 'omnichannel',
          tag: 'Đa kênh',
          title: 'Tiếp Nhận Đa Kênh',
          description: 'Tự động tạo ticket từ Email, Chat trực tuyến và cổng tự phục vụ của khách hàng.',
          metricBadge: { label: 'Kênh nhận', value: 'Email, Chat & Cổng web' },
        },
        {
          id: 'knowledge-base',
          tag: 'Tri thức',
          title: 'Kho Tri Thức Tự Phục Vụ',
          description: 'Lưu trữ bài viết hướng dẫn xử lý thường gặp giúp khách hàng tự tra cứu và đánh giá CSAT.',
          metricBadge: { label: 'Tự phục vụ', value: 'Hướng dẫn & CSAT' },
        },
      ]
    : [
        {
          id: 'crm-pipeline',
          tag: 'Sales',
          title: 'B2B Sales Pipeline',
          description: 'Track deals from initial leads and proposals to closure with revenue forecasting.',
          metricBadge: { label: 'Tracking', value: 'Stage Pipeline' },
        },
        {
          id: 'helpdesk-queues',
          tag: 'Service Desk',
          title: 'Ticket Queues & SLA',
          description: 'Service desk ticket handling with automated routing and SLA countdown timers.',
          metricBadge: { label: 'Tracking', value: 'SLA Deadlines' },
        },
        {
          id: 'customer-360',
          tag: 'Customer',
          title: 'Customer 360° View',
          description: 'Unified customer record combining signed contracts, billing, and support history.',
          metricBadge: { label: 'Records', value: 'Full History' },
        },
        {
          id: 'hr-helpdesk-widget',
          tag: 'Internal Desk',
          title: 'Internal HR Support Desk',
          description: 'In-app HR request widget enabling employees to log and track workplace queries.',
          metricBadge: { label: 'Routing', value: 'Auto-Assigned' },
        },
        {
          id: 'omnichannel',
          tag: 'Omnichannel',
          title: 'Multi-Channel Ticket Intake',
          description: 'Convert incoming emails, live chat messages, and self-service portal forms into tickets.',
          metricBadge: { label: 'Channels', value: 'Mail, Chat & Portal' },
        },
        {
          id: 'knowledge-base',
          tag: 'Knowledge',
          title: 'Self-Service Knowledge Base',
          description: 'Publish help articles for common issues and collect post-resolution CSAT ratings.',
          metricBadge: { label: 'Support', value: 'Guides & CSAT' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Khách hàng & Hỗ trợ' : 'CRM & Helpdesk Module'}
          title={
            isVi
              ? ['Chăm sóc khách hàng bài bản', 'Quản lý cơ hội bán hàng B2B']
              : ['Structured customer support', 'Clear B2B sales pipelines']
          }
          subtitle={
            isVi
              ? 'Hợp nhất phễu kinh doanh B2B, hàng đợi ticket hỗ trợ theo SLA và kênh hỗ trợ nhân sự nội bộ trên một nền tảng.'
              : 'Manage B2B opportunity pipelines, SLA support queues, and internal HR service requests in one workspace.'
          }
          tags={
            isVi
              ? [
                  'Phễu bán hàng B2B',
                  'Hàng đợi Ticket',
                  'Đồng hồ đếm SLA',
                  'Hồ sơ khách hàng 360°',
                  'Tiếp nhận đa kênh',
                ]
              : [
                  'B2B Sales Pipeline',
                  'Support Queues',
                  'SLA Countdown',
                  'Customer 360°',
                  'Multi-Channel Intake',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Bộ công cụ quản lý khách hàng & Dịch vụ' : 'CRM & Service Desk Capabilities'}
          subtitle={
            isVi
              ? 'Theo dõi xuyên suốt từ cơ hội bán hàng đến tiếp nhận và xử lý yêu cầu hỗ trợ sau bán.'
              : 'Follow every account from initial sales deal to ongoing customer support requests.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Khách hàng & Hỗ trợ' : 'CRM & Helpdesk'} />

        <Footer />
      </main>
    </>
  );
}
