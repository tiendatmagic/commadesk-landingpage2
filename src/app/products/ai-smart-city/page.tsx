'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveVisionRadar } from '@/components/showcase/InteractiveVisionRadar';

export default function AISmartCityPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveVisionRadar isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'face-recognition',
          tag: 'Khuôn mặt AI',
          title: 'Nhận Diện Khuôn Mặt',
          description: 'Nhận diện khuôn mặt dưới 200ms, chống giả mạo cho chấm công và đón tiếp VIP.',
          metricBadge: { label: 'Tốc độ', value: '< 200ms' },
        },
        {
          id: 'anpr',
          tag: 'Biển số xe',
          title: 'Nhận Diện Biển Số',
          description: 'Tự động đọc biển số xe và điều khiển barrier bãi đỗ xe thông minh.',
          metricBadge: { label: 'Chính xác', value: '99.4%' },
        },
        {
          id: 'vms',
          tag: 'Camera an ninh',
          title: 'Quản Lý Camera Tập Trung',
          description: 'Kết nối và quản lý tập trung toàn bộ hệ thống camera an ninh sẵn có, xem trực tiếp và tua lại sự kiện tức thì.',
          metricBadge: { label: 'Tương thích', value: 'Mọi dòng Camera' },
        },
        {
          id: 'heatmap',
          tag: 'Bản đồ nhiệt',
          title: 'Bản Đồ Nhiệt Mật Độ',
          description: 'Theo dõi luồng di chuyển và mật độ dừng chân để tối ưu không gian bán lẻ.',
          metricBadge: { label: 'Độ phân giải', value: 'Realtime 2D' },
        },
        {
          id: 'gis-map',
          tag: 'Đô thị số',
          title: 'Bản Đồ Số GIS',
          description: 'Bản đồ số định vị hệ thống camera, cảm biến IoT và cửa hàng thời gian thực.',
          metricBadge: { label: 'Định vị', value: 'Độ chính xác cao' },
        },
        {
          id: 'retail-events',
          tag: 'Bán lẻ',
          title: 'Phân Tích Khách Bán Lẻ',
          description: 'Đối soát lưu lượng khách với doanh thu POS thực tế để đo lường chuyển đổi.',
          metricBadge: { label: 'Chuyển đổi', value: 'Đối soát tự động' },
        },
      ]
    : [
        {
          id: 'face-recognition',
          tag: 'Biometric AI',
          title: 'Facial Recognition',
          description: 'Sub-200ms face recognition with anti-spoofing for check-in and VIP welcome.',
          metricBadge: { label: 'Latency', value: '< 200ms' },
        },
        {
          id: 'anpr',
          tag: 'Smart Parking',
          title: 'Plate Recognition (ANPR)',
          description: 'Automated vehicle license plate reading with automated gate barrier controls.',
          metricBadge: { label: 'Accuracy', value: '99.4%' },
        },
        {
          id: 'vms',
          tag: 'Security Cameras',
          title: 'Centralized Camera Management',
          description: 'Manage and stream existing surveillance cameras centrally with instant event playback.',
          metricBadge: { label: 'Compatibility', value: 'Universal Cameras' },
        },
        {
          id: 'heatmap',
          tag: 'Footfall',
          title: 'Density Heatmaps',
          description: 'Analyze customer dwell times and high-traffic aisles to maximize retail layout.',
          metricBadge: { label: 'Resolution', value: 'Realtime 2D' },
        },
        {
          id: 'gis-map',
          tag: 'Smart City',
          title: 'GIS Smart City Map',
          description: 'Geospatial map plotting cameras, IoT sensors, and branch statuses in real time.',
          metricBadge: { label: 'Precision', value: 'Meter-Level' },
        },
        {
          id: 'retail-events',
          tag: 'Retail AI',
          title: 'Footfall & POS Analytics',
          description: 'Correlate footfall traffic with POS register sales to compute conversion rates.',
          metricBadge: { label: 'Tracking', value: 'Automated Audit' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ AI Vision & Smart City' : 'AI Vision & Smart City Module'}
          title={
            isVi
              ? ['Thị giác máy tính AI.', 'Giám sát & Điều hành đô thị.']
              : ['Computer Vision AI.', 'Smart City Intelligence.']
          }
          subtitle={
            isVi
              ? 'Phân tích thị giác AI thông minh: nhận diện khuôn mặt, đọc biển số xe ANPR, bản đồ nhiệt và bản đồ GIS.'
              : 'Enterprise computer vision insights: fast face matching, automated ANPR plates, retail heatmaps, and GIS city management.'
          }
          tags={
            isVi
              ? [
                  'Nhận diện khuôn mặt',
                  'Đọc biển số ANPR',
                  'Camera an ninh tập trung',
                  'Bản đồ mật độ khách',
                  'Bản đồ số GIS',
                ]
              : [
                  'Facial Recognition',
                  'ANPR License Plates',
                  'Centralized Cameras',
                  'Footfall Heatmaps',
                  'GIS Smart City',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Thị giác máy tính & Phân tích không gian' : 'Computer Vision & Spatial Analytics'}
          subtitle={
            isVi
              ? 'Nâng cao mức độ an ninh, tự động hóa kiểm soát ra vào và thấu hiểu hành vi khách hàng.'
              : 'Fortify perimeter security, automate physical access, and optimize commercial footfall revenue.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'AI Vision & Smart City' : 'AI Vision & Smart City'} />

        <Footer />
      </main>
    </>
  );
}
