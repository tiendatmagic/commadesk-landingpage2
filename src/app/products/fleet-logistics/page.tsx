'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveFleetLogistics } from '@/components/showcase/InteractiveFleetLogistics';

export default function FleetLogisticsPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveFleetLogistics isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'fleet-tracking',
          tag: 'Định vị',
          title: 'Giám Sát GPS Live',
          description: 'Theo dõi hành trình, tốc độ và vị trí xe theo thời gian thực trên bản đồ GIS.',
          metricBadge: { label: 'Độ chính xác', value: 'Thời gian thực' },
        },
        {
          id: 'driver-pwa',
          tag: 'Tài xế',
          title: 'Ứng Dụng Driver PWA',
          description: 'Giao diện cho tài xế nhận lệnh chuyến, cập nhật lộ trình và ký nhận hàng POD.',
          metricBadge: { label: 'Nền tảng', value: 'Android & iOS' },
        },
        {
          id: 'order-board',
          tag: 'Điều phối',
          title: 'Bảng Điều Phối Tuyến',
          description: 'Phân luồng xe thông minh, ghép đơn tối ưu tuyến đường và hạn chế chạy rỗng.',
          metricBadge: { label: 'Đúng hạn', value: '98.5% On-time' },
        },
        {
          id: 'fleet-ledger',
          tag: 'Chi phí',
          title: 'Sổ Cái Cước Vận Tải',
          description: 'Hạch toán xăng dầu, phí cầu đường bến bãi và đối soát công nợ theo chuyến.',
          metricBadge: { label: 'Tiết kiệm', value: '-22% chi phí' },
        },
        {
          id: 'zones-rates',
          tag: 'Bảng giá',
          title: 'Cấu Hình Vùng Cước',
          description: 'Thiết lập biểu phí theo vùng địa lý và tải trọng xe, tự động tính cước tức thì.',
          metricBadge: { label: 'Tính cước', value: 'Tự động 100%' },
        },
        {
          id: 'storefront-logistics',
          tag: 'Tra cứu',
          title: 'Cổng Khách Hàng',
          description: 'Khách hàng tự đặt chuyến, theo dõi xe trên bản đồ và nhận thông báo khi giao.',
          metricBadge: { label: 'Trải nghiệm', value: 'Minh bạch 100%' },
        },
      ]
    : [
        {
          id: 'fleet-tracking',
          tag: 'Telemetry',
          title: 'Real-Time GPS Tracking',
          description: 'Live vehicle tracking, speed monitoring, and route breadcrumbs on GIS maps.',
          metricBadge: { label: 'Precision', value: 'Realtime' },
        },
        {
          id: 'driver-pwa',
          tag: 'Driver',
          title: 'Driver Mobile PWA',
          description: 'Mobile PWA for drivers to accept dispatches, navigate routes, and capture POD.',
          metricBadge: { label: 'Platforms', value: 'iOS & Android' },
        },
        {
          id: 'order-board',
          tag: 'Dispatch',
          title: 'Route Dispatch Board',
          description: 'Intelligent delivery dispatching, multi-stop routing, and deadhead reduction.',
          metricBadge: { label: 'On-time', value: '98.5% Rate' },
        },
        {
          id: 'fleet-ledger',
          tag: 'Ledger',
          title: 'Freight Cost Ledger',
          description: 'Fuel cost logging, toll settlements, trip stipends, and client billing audits.',
          metricBadge: { label: 'Savings', value: '-22% Spend' },
        },
        {
          id: 'zones-rates',
          tag: 'Tariffs',
          title: 'Zone Tariff Engines',
          description: 'Configure distance-based, weight-tiered tariff matrices with instant quotes.',
          metricBadge: { label: 'Rates', value: 'Automated' },
        },
        {
          id: 'storefront-logistics',
          tag: 'Storefront',
          title: 'Consignment Tracking',
          description: 'Self-service shipping booking, real-time vehicle breadcrumbs, and alerts.',
          metricBadge: { label: 'Visibility', value: '100% Transparent' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Vận Tải & Đội Xe' : 'Fleet & Logistics Module'}
          title={
            isVi
              ? ['Định vị thời gian thực.', 'Tối ưu hành trình vận tải.']
              : ['Real-time telemetry.', 'Intelligent route dispatch.']
          }
          subtitle={
            isVi
              ? 'Giám sát GPS thời gian thực trên bản đồ GIS, ứng dụng tài xế Driver PWA và sổ cái chi phí xe minh bạch.'
              : 'Real-time GPS GIS tracking, mobile Driver PWA dispatch, and transparent freight cost accounting.'
          }
          tags={
            isVi
              ? [
                  'Giám sát GPS Live',
                  'Driver PWA',
                  'Điều phối Order Board',
                  'Sổ cái cước xe',
                  'Bảng giá theo Zones',
                ]
              : [
                  'Real-Time GPS',
                  'Driver Mobile PWA',
                  'Dispatch Board',
                  'Freight Ledger',
                  'Dynamic Tariff Zones',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Vận hành đội xe & giao vận khép kín' : 'Enterprise Fleet & Transport Operations'}
          subtitle={
            isVi
              ? 'Kiểm soát từng cung đường, hạn chế xe chạy rỗng và minh bạch hóa chi phí vận tải.'
              : 'Gain minute-by-minute visibility into routes, reduce empty miles, and streamline accounting.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Vận Tải & Đội Xe Logistics' : 'Fleet & Logistics'} />

        <Footer />
      </main>
    </>
  );
}
