'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';
import { InteractiveSocialRetail } from '@/components/showcase/InteractiveSocialRetail';

export default function SocialRetailPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveSocialRetail isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'multi-channel-hub',
          tag: 'Đa kênh MXH',
          title: 'Cổng Mạng Xã Hội',
          description: 'Hội tụ Facebook Fanpage, Zalo OA và Webchat vào một màn hình duy nhất.',
          metricBadge: { label: 'Kết nối mạng xã hội', value: 'Đa kênh Meta & Zalo' },
        },
        {
          id: 'post-composer',
          tag: 'Soạn thảo',
          title: 'Đăng Bài Đa Kênh',
          description: 'Soạn nội dung một lần, xem trước trực quan và hẹn giờ đăng bài đồng thời.',
          metricBadge: { label: 'Tốc độ', value: 'Nhanh hơn 4x' },
        },
        {
          id: 'kiotviet-two-way-sync',
          tag: 'Bán lẻ POS',
          title: 'Đồng Bộ KiotViet',
          description: 'Đồng bộ hai chiều danh mục sản phẩm, giá bán và đơn hàng thời gian thực.',
          metricBadge: { label: 'Độ trễ đồng bộ', value: '< 1.2 Giây' },
        },
        {
          id: 'branch-stock-balance',
          tag: 'Tồn kho',
          title: 'Tồn Kho Chi Nhánh',
          description: 'Theo dõi tồn kho từng điểm bán lẻ, tự động trừ kho khi phát sinh đơn hàng.',
          metricBadge: { label: 'Sai lệch số dư', value: 'Tuyệt đối 0%' },
        },
        {
          id: 'social-monitoring',
          tag: 'Chất lượng',
          title: 'Đo Lường Hiệu Quả Tương Tác',
          description: 'Giám sát tốc độ phản hồi tin nhắn, đo lường mức độ hài lòng và theo dõi lịch sử tư vấn bán hàng.',
          metricBadge: { label: 'Chất lượng', value: 'Đo lường 100%' },
        },
        {
          id: 'omnichannel-orders',
          tag: 'Đơn hàng',
          title: 'Đơn Hàng Đa Kênh',
          description: 'Chuyển hóa tin nhắn và tương tác thành đơn hàng, kích hoạt xuất kho tức thì.',
          metricBadge: { label: 'Tăng trưởng', value: '+28% Doanh thu' },
        },
      ]
    : [
        {
          id: 'multi-channel-hub',
          tag: 'Omnichannel',
          title: 'Social Gateway',
          description: 'Unify Facebook Fanpages, Zalo OA, and webchats into a single operational dashboard.',
          metricBadge: { label: 'Connected Channels', value: 'Meta & Zalo Native' },
        },
        {
          id: 'post-composer',
          tag: 'Composer',
          title: 'Post Composer',
          description: 'Draft campaigns once, preview live, and schedule simultaneous broadcasts.',
          metricBadge: { label: 'Velocity', value: '4x Faster' },
        },
        {
          id: 'kiotviet-two-way-sync',
          tag: 'KiotViet Sync',
          title: 'POS Synchronization',
          description: 'Real-time two-way sync of product catalogs, branch prices, and store orders.',
          metricBadge: { label: 'Sync Latency', value: '< 1.2 Seconds' },
        },
        {
          id: 'branch-stock-balance',
          tag: 'Inventory',
          title: 'Storefront Inventory',
          description: 'Track stock balances across locations with automatic deduction per sale.',
          metricBadge: { label: 'Oversell Risk', value: 'Zero Discrepancy' },
        },
        {
          id: 'social-monitoring',
          tag: 'Quality',
          title: 'Engagement & Response Analytics',
          description: 'Monitor customer engagement volume, response times, and omnichannel messaging quality.',
          metricBadge: { label: 'Quality', value: '100% Tracked' },
        },
        {
          id: 'omnichannel-orders',
          tag: 'Orders',
          title: 'Order Fulfillment',
          description: 'Convert social interactions into confirmed orders with automated dispatch.',
          metricBadge: { label: 'Conversion', value: '+28% Revenue' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Mạng Xã Hội & Bán Lẻ' : 'Social & Retail Module'}
          title={
            isVi
              ? ['Kết nối mạng xã hội.', 'Đồng bộ bán lẻ KiotViet.']
              : ['Unify social marketing.', 'Sync retail POS instantly.']
          }
          subtitle={
            isVi
              ? 'Cổng kết nối mạng xã hội tập trung, đăng bài đa kênh và tự động đồng bộ tồn kho hai chiều với KiotViet.'
              : 'Enterprise social broadcasting, multi-channel composer, and real-time retail synchronization with KiotViet POS.'
          }
          tags={
            isVi
              ? [
                  'Social Gateway',
                  'Đăng bài đa kênh',
                  'Đồng bộ KiotViet POS',
                  'Tồn kho chi nhánh',
                  'Xử lý đơn hàng',
                ]
              : [
                  'Social Gateway',
                  'Post Composer',
                  'KiotViet Sync',
                  'Branch Inventory',
                  'Order Pipeline',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Giải pháp bán lẻ & mạng xã hội hợp nhất' : 'Omnichannel Social & Retail Engine'}
          subtitle={
            isVi
              ? 'Xóa bỏ khoảng cách giữa tiếp thị số, bán lẻ tại quầy và xuất kho trung tâm.'
              : 'Unify social marketing, store point-of-sale transactions, and warehouse fulfillment.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Mạng Xã Hội & Bán Lẻ KiotViet' : 'Social Gateway & Retail'} />

        <Footer />
      </main>
    </>
  );
}
