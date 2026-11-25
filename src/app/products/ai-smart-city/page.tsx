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
          tag: 'Khuôn mặt',
          title: 'Nhận Diện Khuôn Mặt',
          description: 'Chấm công nhận diện khuôn mặt và đón tiếp khách mời tại quầy lễ tân với kiểm tra chống giả mạo.',
          metricBadge: { label: 'Ứng dụng', value: 'Chấm công & Lễ tân' },
        },
        {
          id: 'anpr',
          tag: 'Biển số xe',
          title: 'Nhận Diện Biển Số Xe',
          description: 'Tự động đọc biển số xe ra vào cổng và kết nối điều khiển barrier bãi đỗ xe.',
          metricBadge: { label: 'Kiểm soát', value: 'Cổng & Bãi xe' },
        },
        {
          id: 'vms',
          tag: 'Camera an ninh',
          title: 'Quản Lý Camera Tập Trung',
          description: 'Kết nối và theo dõi tập trung hệ thống camera sẵn có, xem trực tiếp và tua lại sự kiện theo thời gian.',
          metricBadge: { label: 'Tương thích', value: 'Camera IP hiện hữu' },
        },
        {
          id: 'heatmap',
          tag: 'Bản đồ nhiệt',
          title: 'Bản Đồ Nhiệt Mật Độ',
          description: 'Theo dõi luồng di chuyển và thời gian dừng chân tại từng khu vực để tối ưu bố trí cửa hàng.',
          metricBadge: { label: 'Phân tích', value: 'Mật độ theo khu vực' },
        },
        {
          id: 'gis-map',
          tag: 'Đô thị số',
          title: 'Bản Đồ Số GIS',
          description: 'Theo dõi vị trí hệ thống camera, thiết bị cảm biến và các điểm chi nhánh trên bản đồ trực quan.',
          metricBadge: { label: 'Hiển thị', value: 'Theo điểm lắp đặt' },
        },
        {
          id: 'retail-events',
          tag: 'Bán lẻ',
          title: 'Phân Tích Khách Bán Lẻ',
          description: 'Đối chiếu lưu lượng khách vào cửa hàng với dữ liệu bán hàng POS để đánh giá hiệu quả từng chi nhánh.',
          metricBadge: { label: 'Báo cáo', value: 'Đối soát lượt khách' },
        },
      ]
    : [
        {
          id: 'face-recognition',
          tag: 'Facial Check-in',
          title: 'Facial Recognition',
          description: 'Facial attendance check-in and visitor reception with liveness checks against photo spoofing.',
          metricBadge: { label: 'Use case', value: 'Check-in & Reception' },
        },
        {
          id: 'anpr',
          tag: 'Smart Parking',
          title: 'License Plate Recognition',
          description: 'Automated vehicle plate reading at entry gates connected to parking barrier controls.',
          metricBadge: { label: 'Control', value: 'Gate Automation' },
        },
        {
          id: 'vms',
          tag: 'Security Cameras',
          title: 'Centralized Camera Management',
          description: 'Manage and view existing surveillance cameras centrally with instant event playback.',
          metricBadge: { label: 'Compatibility', value: 'Existing Cameras' },
        },
        {
          id: 'heatmap',
          tag: 'Footfall',
          title: 'Density Heatmaps',
          description: 'Analyze customer dwell times and busy aisles to improve store layouts and staffing.',
          metricBadge: { label: 'Tracking', value: 'Zone Heatmaps' },
        },
        {
          id: 'gis-map',
          tag: 'Smart City',
          title: 'GIS Location Map',
          description: 'Interactive map displaying cameras, sensors, and branch statuses across sites.',
          metricBadge: { label: 'Mapping', value: 'Site-Level View' },
        },
        {
          id: 'retail-events',
          tag: 'Retail',
          title: 'Footfall & POS Analytics',
          description: 'Compare store visitor counts against point-of-sale orders to track branch conversion.',
          metricBadge: { label: 'Reporting', value: 'Traffic & Sales' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Camera & Đô thị thông minh' : 'Vision & Smart City Module'}
          title={
            isVi
              ? ['Giám sát camera thông minh', 'Điều hành an ninh & đô thị']
              : ['Camera vision monitoring', 'Site & city operations']
          }
          subtitle={
            isVi
              ? 'Quản lý camera tập trung, chấm công khuôn mặt, nhận diện biển số xe, bản đồ nhiệt cửa hàng và bản đồ vị trí GIS.'
              : 'Centralized camera management, facial check-in, license plate reading, store heatmaps, and GIS site mapping.'
          }
          tags={
            isVi
              ? [
                  'Nhận diện khuôn mặt',
                  'Đọc biển số xe',
                  'Camera an ninh tập trung',
                  'Bản đồ mật độ khách',
                  'Bản đồ số GIS',
                ]
              : [
                  'Facial Recognition',
                  'License Plate Reader',
                  'Centralized Cameras',
                  'Footfall Heatmaps',
                  'GIS Location Map',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Giám sát hình ảnh & Phân tích không gian' : 'Camera Vision & Spatial Analytics'}
          subtitle={
            isVi
              ? 'Hỗ trợ kiểm soát ra vào tại văn phòng, bãi xe và theo dõi lưu lượng khách tại hệ thống cửa hàng.'
              : 'Automate gate and building access while tracking visitor flow across retail branches.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'AI Vision & Smart City' : 'AI Vision & Smart City'} />

        <Footer />
      </main>
    </>
  );
}
