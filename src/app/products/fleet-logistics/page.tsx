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
          title: 'Giám Sát GPS Trực Tiếp',
          description: 'Theo dõi hành trình, tốc độ và vị trí xe theo thời gian thực trên bản đồ điều phối.',
          metricBadge: { label: 'Theo dõi', value: 'Vị trí trực tiếp' },
        },
        {
          id: 'driver-pwa',
          tag: 'Tài xế',
          title: 'Ứng Dụng Cho Tài Xế',
          description: 'Ứng dụng di động giúp tài xế nhận lệnh chuyến, cập nhật lộ trình và chụp ảnh xác nhận giao hàng POD.',
          metricBadge: { label: 'Nền tảng', value: 'Android & iOS' },
        },
        {
          id: 'order-board',
          tag: 'Điều phối',
          title: 'Bảng Điều Phối Tuyến',
          description: 'Phân luồng xe, ghép đơn theo tuyến đường và theo dõi trạng thái giao nhận từng chặng.',
          metricBadge: { label: 'Điều phối', value: 'Đa điểm giao nhận' },
        },
        {
          id: 'fleet-ledger',
          tag: 'Chi phí',
          title: 'Sổ Cái Cước Vận Tải',
          description: 'Hạch toán xăng dầu, phí cầu đường bến bãi và đối soát công nợ theo từng chuyến.',
          metricBadge: { label: 'Quyết toán', value: 'Theo từng chuyến' },
        },
        {
          id: 'zones-rates',
          tag: 'Bảng giá',
          title: 'Cấu Hình Vùng Cước',
          description: 'Thiết lập biểu phí theo vùng địa lý và tải trọng xe để hệ thống tính cước tự động.',
          metricBadge: { label: 'Tính cước', value: 'Theo vùng & tải trọng' },
        },
        {
          id: 'storefront-logistics',
          tag: 'Tra cứu',
          title: 'Cổng Khách Hàng',
          description: 'Khách hàng đặt chuyến, theo dõi hành trình xe trên bản đồ và nhận thông báo khi giao hàng.',
          metricBadge: { label: 'Tra cứu', value: 'Theo mã vận đơn' },
        },
      ]
    : [
        {
          id: 'fleet-tracking',
          tag: 'GPS Tracking',
          title: 'Real-Time GPS Tracking',
          description: 'Live vehicle tracking, speed monitoring, and route history on the dispatch map.',
          metricBadge: { label: 'Updates', value: 'Live Location' },
        },
        {
          id: 'driver-pwa',
          tag: 'Driver',
          title: 'Driver Mobile App',
          description: 'Mobile app for drivers to accept dispatches, follow routes, and capture proof of delivery (POD).',
          metricBadge: { label: 'Platforms', value: 'iOS & Android' },
        },
        {
          id: 'order-board',
          tag: 'Dispatch',
          title: 'Route Dispatch Board',
          description: 'Assign vehicles, group multi-stop deliveries, and monitor leg-by-leg trip status.',
          metricBadge: { label: 'Routing', value: 'Multi-Stop Trips' },
        },
        {
          id: 'fleet-ledger',
          tag: 'Ledger',
          title: 'Freight Cost Ledger',
          description: 'Record fuel expenses, toll settlements, trip allowances, and client billing per trip.',
          metricBadge: { label: 'Accounting', value: 'Per-Trip Ledger' },
        },
        {
          id: 'zones-rates',
          tag: 'Tariffs',
          title: 'Zone & Rate Rules',
          description: 'Configure distance-based and weight-tiered tariff tables for automated trip quotes.',
          metricBadge: { label: 'Rates', value: 'Zone & Weight' },
        },
        {
          id: 'storefront-logistics',
          tag: 'Tracking',
          title: 'Shipment Tracking Portal',
          description: 'Self-service shipment booking, live map status, and delivery notifications for clients.',
          metricBadge: { label: 'Portal', value: 'Waybill Lookup' },
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
              ? ['Giám sát hành trình trực tiếp', 'Điều phối vận tải tập trung']
              : ['Live fleet GPS tracking', 'Organized route dispatch']
          }
          subtitle={
            isVi
              ? 'Giám sát GPS trực tiếp trên bản đồ, ứng dụng cho tài xế và sổ cái chi phí vận tải minh bạch theo từng chuyến.'
              : 'Live GPS map tracking, driver delivery app, proof of delivery, and transparent trip cost accounting.'
          }
          tags={
            isVi
              ? [
                  'Giám sát GPS trực tiếp',
                  'Ứng dụng tài xế',
                  'Bảng điều phối chuyến',
                  'Sổ cái cước xe',
                  'Bảng giá theo vùng',
                ]
              : [
                  'Real-Time GPS',
                  'Driver Mobile App',
                  'Dispatch Board',
                  'Freight Ledger',
                  'Zone Tariff Rules',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Vận hành đội xe & giao vận khép kín' : 'Fleet & Transport Operations'}
          subtitle={
            isVi
              ? 'Kiểm soát từng cung đường, xác nhận giao nhận tại điểm đến và đối soát chi phí theo chuyến.'
              : 'Track vehicle routes, record proof of delivery, and reconcile freight expenses per trip.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Vận Tải & Đội Xe Logistics' : 'Fleet & Logistics'} />

        <Footer />
      </main>
    </>
  );
}
