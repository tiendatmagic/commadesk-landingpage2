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
          description: 'Theo dõi chu trình bán hàng từ cơ hội tiềm năng đến dự báo doanh thu.',
          metricBadge: { label: 'Tăng trưởng', value: '+35% chốt deal' },
        },
        {
          id: 'helpdesk-queues',
          tag: 'Hỗ trợ ITIL',
          title: 'Hàng Đợi Ticket & SLA',
          description: 'Tiếp nhận sự cố, phân công tự động và đồng hồ đếm ngược vi phạm cam kết SLA.',
          metricBadge: { label: 'Tuân thủ SLA', value: '98.5% chuẩn hạn' },
        },
        {
          id: 'customer-360',
          tag: 'Khách hàng',
          title: 'Hồ Sơ Khách Hàng 360°',
          description: 'Tổng hợp hợp đồng, lịch sử giao dịch và nhật ký hỗ trợ trên một màn hình.',
          metricBadge: { label: 'Hài lòng CSAT', value: '4.9 / 5.0' },
        },
        {
          id: 'hr-helpdesk-widget',
          tag: 'Hỗ trợ nội bộ',
          title: 'Widget Hỗ Trợ HR',
          description: 'Gửi yêu cầu hỗ trợ nội bộ cho nhân sự ngay trên không gian làm việc.',
          metricBadge: { label: 'Xử lý', value: '< 1 giờ' },
        },
        {
          id: 'omnichannel',
          tag: 'Đa kênh',
          title: 'Tiếp Nhận Đa Kênh',
          description: 'Tự động tạo ticket từ Email, Chat trực tuyến và cổng tự phục vụ.',
          metricBadge: { label: 'Tốc độ', value: 'Thời gian thực' },
        },
        {
          id: 'knowledge-base',
          tag: 'Tri thức',
          title: 'Kho Tri Thức Tự Phục Vụ',
          description: 'Kho bài viết giải pháp tự phục vụ giúp giảm tải ticket trùng và khảo sát CSAT.',
          metricBadge: { label: 'Giảm tải', value: '-50% ticket trùng' },
        },
      ]
    : [
        {
          id: 'crm-pipeline',
          tag: 'Sales',
          title: 'B2B Sales Pipeline',
          description: 'Track deals from initial leads to closure with accurate revenue forecasting.',
          metricBadge: { label: 'Win Rate', value: '+35% Boost' },
        },
        {
          id: 'helpdesk-queues',
          tag: 'Service Desk',
          title: 'Ticket Queues & SLA',
          description: 'ITIL ticket handling with automated triage and SLA countdown timers.',
          metricBadge: { label: 'SLA Rate', value: '98.5% On-Time' },
        },
        {
          id: 'customer-360',
          tag: 'Customer',
          title: 'Customer 360° View',
          description: 'Unified customer dossier uniting signed contracts, billing, and support history.',
          metricBadge: { label: 'CSAT', value: '4.9 / 5.0' },
        },
        {
          id: 'hr-helpdesk-widget',
          tag: 'Internal Desk',
          title: 'Internal HR Widget',
          description: 'In-app HR request widget enabling rapid employee query resolution.',
          metricBadge: { label: 'Speed', value: '< 1 Hour' },
        },
        {
          id: 'omnichannel',
          tag: 'Omnichannel',
          title: 'Omnichannel Ingest',
          description: 'Ingest issues via mailboxes, chat widgets, self-service portals, and APIs.',
          metricBadge: { label: 'Ingest', value: 'Realtime' },
        },
        {
          id: 'knowledge-base',
          tag: 'Knowledge',
          title: 'Self-Service Knowledge',
          description: 'Deflect repetitive tickets with self-service resolution articles and CSAT.',
          metricBadge: { label: 'Deflection', value: '-50% Repetitive' },
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
              ? ['Dịch vụ xuất sắc.', 'Tăng trưởng doanh số bền vững.']
              : ['Exceptional service.', 'Accelerated enterprise sales.']
          }
          subtitle={
            isVi
              ? 'Hợp nhất phễu kinh doanh B2B, hàng đợi ticket ITIL và hỗ trợ nhân sự nội bộ trên một nền tảng.'
              : 'Unify B2B opportunity pipelines, ITIL service desk queues, and internal HR support in one connected suite.'
          }
          tags={
            isVi
              ? [
                  'Phễu bán hàng B2B',
                  'Hàng đợi ITIL',
                  'Đồng hồ đếm SLA',
                  'Hồ sơ khách hàng 360°',
                  'Tiếp nhận đa kênh',
                ]
              : [
                  'B2B Sales Pipeline',
                  'ITIL Service Desk',
                  'SLA Countdown',
                  'Customer 360°',
                  'Omnichannel Ingest',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Bộ giải pháp quan hệ khách hàng & Dịch vụ' : 'Enterprise CRM & Service Desk Suite'}
          subtitle={
            isVi
              ? 'Rút ngắn chu kỳ bán hàng và tối ưu hóa tốc độ giải quyết sự cố kỹ thuật.'
              : 'Shorten enterprise deal cycles and empower agents with automated workflows.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Khách hàng & Hỗ trợ' : 'CRM & Helpdesk'} />

        <Footer />
      </main>
    </>
  );
}
