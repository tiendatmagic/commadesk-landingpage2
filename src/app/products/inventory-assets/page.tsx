'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveInventoryAssets } from '@/components/showcase/InteractiveInventoryAssets';

export default function InventoryAssetsPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveInventoryAssets isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'multi-warehouse-balances',
          tag: 'Tồn kho',
          title: 'Kho Đa Địa Điểm',
          description: 'Theo dõi vị trí lưu kho, đối soát số dư tức thì và luân chuyển hàng giữa các kho.',
          metricBadge: { label: 'Chính xác', value: '100% Realtime' },
        },
        {
          id: 'voucher-approvals',
          tag: 'Quy trình',
          title: 'Phiếu Kho Đa Cấp',
          description: 'Tự động hóa luồng duyệt phiếu nhập, xuất, chuyển kho và cập nhật số dư tức thì.',
          metricBadge: { label: 'Tốc độ', value: 'Nhanh hơn 3x' },
        },
        {
          id: 'serial-assets',
          tag: 'Tài sản',
          title: 'Tài Sản Serial & QR',
          description: 'Theo dõi chi tiết thiết bị theo số Serial duy nhất, lịch sử bàn giao và khấu hao.',
          metricBadge: { label: 'Thất thoát', value: 'Tuyệt đối 0%' },
        },
        {
          id: 'stationery-catalog',
          tag: 'Văn phòng phẩm',
          title: 'Cấp Phát & Quyết Toán VPP',
          description: 'Danh mục định mức VPP tiêu chuẩn, gửi yêu cầu trực tuyến và quyết toán chi phí.',
          metricBadge: { label: 'Hao phí', value: '-18% chi phí' },
        },
        {
          id: 'machinery-maintenance',
          tag: 'Bảo trì',
          title: 'Bảo Trì Thiết Bị',
          description: 'Lịch sử thay mực in, bảo trì máy móc và tự động cảnh báo lịch kiểm định định kỳ.',
          metricBadge: { label: 'Sẵn sàng', value: '99.8% Uptime' },
        },
        {
          id: 'min-stock-alerts',
          tag: 'Cảnh báo',
          title: 'Cảnh Báo Tồn An Toàn',
          description: 'Tự động kích hoạt cảnh báo khi tồn chạm ngưỡng tối thiểu để kịp thời bổ sung hàng.',
          metricBadge: { label: 'Hết hàng', value: 'Giảm 95%' },
        },
      ]
    : [
        {
          id: 'multi-warehouse-balances',
          tag: 'Depots',
          title: 'Multi-Depot Balances',
          description: 'Track multi-location inventories, reconcile item balances, and manage transfers.',
          metricBadge: { label: 'Accuracy', value: '100% Realtime' },
        },
        {
          id: 'voucher-approvals',
          tag: 'Vouchers',
          title: 'Voucher Approvals',
          description: 'Automated multi-level voucher pipeline with keeper sign-off and ledger deductions.',
          metricBadge: { label: 'Speed', value: '3x Faster' },
        },
        {
          id: 'serial-assets',
          tag: 'Assets',
          title: 'Serial & QR Assets',
          description: 'Track workstations and machinery by unique serial IDs, custody history, and lifecycles.',
          metricBadge: { label: 'Loss Risk', value: 'Zero Slippage' },
        },
        {
          id: 'stationery-catalog',
          tag: 'Supplies',
          title: 'Stationery Allowances',
          description: 'Standardized allowances, digital requests, and automated monthly settlement.',
          metricBadge: { label: 'Waste', value: '-18% Spend' },
        },
        {
          id: 'machinery-maintenance',
          tag: 'Maintenance',
          title: 'Equipment Maintenance',
          description: 'Track consumables replacements, machine repairs, and scheduled service logs.',
          metricBadge: { label: 'Uptime', value: '99.8% Target' },
        },
        {
          id: 'min-stock-alerts',
          tag: 'Alerts',
          title: 'Safety Stock Alerts',
          description: 'Proactive notifications when critical items breach safety limits, preventing stock-outs.',
          metricBadge: { label: 'Stock-out', value: '-95% Risk' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Kho & Tài Sản' : 'Inventory & Assets Module'}
          title={
            isVi
              ? ['Kiểm soát tồn kho tuyệt đối.', 'Quản trị vòng đời tài sản.']
              : ['Total inventory control.', 'Complete asset governance.']
          }
          subtitle={
            isVi
              ? 'Quản lý kho SKU đa điểm, tự động hóa luồng duyệt phiếu xuất nhập và theo dõi tài sản theo số serial.'
              : 'End-to-end multi-warehouse SKU tracking, automated voucher approvals, and serial asset custody.'
          }
          tags={
            isVi
              ? [
                  'Kho SKU đa điểm',
                  'Phiếu xuất nhập chuyển',
                  'Tài sản Serial & QR',
                  'Đăng ký VPP',
                  'Cảnh báo tồn tối thiểu',
                ]
              : [
                  'Multi-Warehouse SKU',
                  'Stock Voucher Pipeline',
                  'Serial & QR Asset Custody',
                  'Stationery Requests',
                  'Safety Stock Alerts',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Quản lý kho & tài sản chuẩn mực' : 'Enterprise Inventory & Asset Lifecycle'}
          subtitle={
            isVi
              ? 'Loại bỏ sai lệch số liệu kiểm kê và tự động hóa luồng phê duyệt vật tư.'
              : 'Eliminate inventory discrepancies and streamline authorizations across all assets.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Kho SKU & Tài sản Doanh nghiệp' : 'Inventory & Fixed Assets'} />

        <Footer />
      </main>
    </>
  );
}
