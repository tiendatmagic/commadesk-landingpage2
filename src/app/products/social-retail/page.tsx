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
          description: 'Hội tụ Facebook Fanpage, Zalo OA và Webchat vào một màn hình làm việc chung.',
          metricBadge: { label: 'Kết nối', value: 'Facebook & Zalo OA' },
        },
        {
          id: 'post-composer',
          tag: 'Soạn thảo',
          title: 'Đăng Bài Đa Kênh',
          description: 'Soạn nội dung một lần, xem trước bố cục bài đăng và hẹn giờ đăng đồng thời lên các kênh.',
          metricBadge: { label: 'Xuất bản', value: 'Hẹn giờ đa kênh' },
        },
        {
          id: 'kiotviet-two-way-sync',
          tag: 'Bán lẻ POS',
          title: 'Đồng Bộ KiotViet',
          description: 'Đồng bộ hai chiều danh mục sản phẩm, bảng giá và đơn hàng tại quầy KiotViet.',
          metricBadge: { label: 'Chế độ', value: 'Đồng bộ hai chiều' },
        },
        {
          id: 'branch-stock-balance',
          tag: 'Tồn kho',
          title: 'Tồn Kho Chi Nhánh',
          description: 'Theo dõi tồn kho từng cửa hàng bán lẻ và tự động trừ kho khi có đơn hàng phát sinh.',
          metricBadge: { label: 'Kiểm soát', value: 'Theo từng cửa hàng' },
        },
        {
          id: 'social-monitoring',
          tag: 'Chất lượng',
          title: 'Đo Lường Hiệu Quả Tương Tác',
          description: 'Theo dõi tốc độ phản hồi tin nhắn của tư vấn viên và lịch sử chăm sóc khách hàng.',
          metricBadge: { label: 'Theo dõi', value: 'Lịch sử tư vấn' },
        },
        {
          id: 'omnichannel-orders',
          tag: 'Đơn hàng',
          title: 'Đơn Hàng Đa Kênh',
          description: 'Chốt đơn trực tiếp từ hội thoại mạng xã hội và chuyển sang bộ phận kho đóng gói giao hàng.',
          metricBadge: { label: 'Quy trình', value: 'Tạo đơn từ chat' },
        },
      ]
    : [
        {
          id: 'multi-channel-hub',
          tag: 'Omnichannel',
          title: 'Social Inbox Hub',
          description: 'Bring Facebook Pages, Zalo OA, and website chat into a single inbox for sales teams.',
          metricBadge: { label: 'Channels', value: 'Facebook & Zalo OA' },
        },
        {
          id: 'post-composer',
          tag: 'Composer',
          title: 'Multi-Channel Post Composer',
          description: 'Draft posts once, preview layouts, and schedule announcements across connected channels.',
          metricBadge: { label: 'Publishing', value: 'Scheduled Posts' },
        },
        {
          id: 'kiotviet-two-way-sync',
          tag: 'KiotViet Sync',
          title: 'POS Synchronization',
          description: 'Two-way sync of product catalogs, branch pricing, and KiotViet POS orders.',
          metricBadge: { label: 'Sync', value: 'Two-Way POS' },
        },
        {
          id: 'branch-stock-balance',
          tag: 'Inventory',
          title: 'Storefront Inventory',
          description: 'Monitor stock levels per store location with automatic deduction when orders close.',
          metricBadge: { label: 'Stock', value: 'Per-Branch Counts' },
        },
        {
          id: 'social-monitoring',
          tag: 'Quality',
          title: 'Engagement & Response Tracking',
          description: 'Monitor message response times and review customer conversation history across agents.',
          metricBadge: { label: 'Tracking', value: 'Response Metrics' },
        },
        {
          id: 'omnichannel-orders',
          tag: 'Orders',
          title: 'Order Fulfillment',
          description: 'Convert chat inquiries into confirmed orders and hand them directly to warehouse dispatch.',
          metricBadge: { label: 'Workflow', value: 'Chat to Order' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Mạng Xã Hội & Bán Lẻ' : 'Social & Retail Module'}
          title={
            isVi
              ? ['Kết nối mạng xã hội', 'Đồng bộ bán lẻ KiotViet']
              : ['Manage social channels', 'Sync KiotViet POS stock']
          }
          subtitle={
            isVi
              ? 'Cổng kết nối mạng xã hội tập trung, đăng bài đa kênh và tự động đồng bộ tồn kho hai chiều với KiotViet.'
              : 'Centralized social inbox, scheduled post composer, and two-way inventory sync with KiotViet POS.'
          }
          tags={
            isVi
              ? [
                  'Cổng mạng xã hội',
                  'Đăng bài đa kênh',
                  'Đồng bộ KiotViet POS',
                  'Tồn kho chi nhánh',
                  'Xử lý đơn hàng',
                ]
              : [
                  'Social Inbox',
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
          title={isVi ? 'Giải pháp bán lẻ & mạng xã hội hợp nhất' : 'Social Channels & Retail POS Sync'}
          subtitle={
            isVi
              ? 'Liên kết tiếp thị mạng xã hội, bán hàng tại quầy KiotViet và xuất kho chi nhánh trên cùng một màn hình.'
              : 'Connect social customer messages, in-store KiotViet POS sales, and branch inventory.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Mạng Xã Hội & Bán Lẻ KiotViet' : 'Social Gateway & Retail'} />

        <Footer />
      </main>
    </>
  );
}
