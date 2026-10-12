'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveDigitalSignature } from '@/components/showcase/InteractiveDigitalSignature';

export default function OperationsDocumentsPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveDigitalSignature isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'doc-registry',
          tag: 'Văn thư',
          title: 'Sổ Văn Bản Đến/Đi',
          description: 'Chuẩn hóa quy trình tiếp nhận, đánh số tự động và phân loại theo quy định.',
          metricBadge: { label: 'Số hóa', value: '100% Paperless' },
        },
        {
          id: 'approvals-flow',
          tag: 'Trình ký',
          title: 'Ký Duyệt & Dấu Số',
          description: 'Thiết lập luồng trình ký linh hoạt, ký số điện tử an toàn và theo dõi lịch sử phê duyệt minh bạch.',
          metricBadge: { label: 'Tốc độ', value: 'Nhanh hơn 75%' },
        },
        {
          id: 'reserved-numbers',
          tag: 'Đánh số',
          title: 'Quản Lý Cấp Số',
          description: 'Hệ thống tự động cấp số văn bản liên tục, quản lý số chừa và số hủy tránh trùng lặp.',
          metricBadge: { label: 'Chính xác', value: '100% không trùng' },
        },
        {
          id: 'policy-docs',
          tag: 'Quy chế',
          title: 'Kho Quy Chế Nội Bộ',
          description: 'Lưu trữ tài liệu quy chế công ty, phân loại theo phòng ban và theo dõi lịch sử cập nhật.',
          metricBadge: { label: 'Truy cập', value: 'Tức thời' },
        },
        {
          id: 'doc-search',
          tag: 'Tra cứu',
          title: 'Tra Cứu Thông Minh',
          description: 'Tìm kiếm nhanh theo số hiệu, trích yếu, ngày phát hành hoặc từ khóa đính kèm.',
          metricBadge: { label: 'Thời gian', value: '< 1 giây' },
        },
        {
          id: 'casbin-registry-rbac',
          tag: 'Bảo mật',
          title: 'Phân Quyền Văn Bản',
          description: 'Bảo mật văn bản mật và hồ sơ pháp lý, chỉ nhân sự có thẩm quyền mới được truy cập.',
          metricBadge: { label: 'Bảo mật', value: 'Chuẩn ISO 27001' },
        },
      ]
    : [
        {
          id: 'doc-registry',
          tag: 'Registry',
          title: 'Inbound & Outbound Registries',
          description: 'Standardize dispatch books with automated numbering and administrative classifications.',
          metricBadge: { label: 'Paperless', value: '100% Digital Flow' },
        },
        {
          id: 'approvals-flow',
          tag: 'Signatures',
          title: 'Digital Signing & Seals',
          description: 'Flexible digital signing workflows with cryptographic seals and tamper-proof audits.',
          metricBadge: { label: 'Efficiency', value: '75% Faster' },
        },
        {
          id: 'reserved-numbers',
          tag: 'Numbering',
          title: 'Numbering Governance',
          description: 'Continuous numbering engine preventing duplicate or skipped dispatch numbers.',
          metricBadge: { label: 'Accuracy', value: 'Zero Collisions' },
        },
        {
          id: 'policy-docs',
          tag: 'Policies',
          title: 'Internal Policy Repository',
          description: 'Centralized policy repository with department tags, role views, and version history.',
          metricBadge: { label: 'Access', value: 'Instant Access' },
        },
        {
          id: 'doc-search',
          tag: 'Search',
          title: 'Instant Document Search',
          description: 'Rapid search by dispatch ID, abstract summary, issuance date, or full attachment text.',
          metricBadge: { label: 'Latency', value: '< 1 Second' },
        },
        {
          id: 'casbin-registry-rbac',
          tag: 'Security',
          title: 'Multi-Tier Permissions',
          description: 'Strict access control ensuring only authorized personnel view sensitive files.',
          metricBadge: { label: 'Standard', value: 'ISO 27001' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Vận hành & Văn bản' : 'Operations & Registry Module'}
          title={
            isVi
              ? ['Văn bản chuẩn mực.', 'Số hóa pháp lý toàn diện.']
              : ['Standardized registry.', 'Digital governance suite.']
          }
          subtitle={
            isVi
              ? 'Hợp nhất sổ văn bản đến/đi, quy trình ký duyệt số và lưu trữ hồ sơ pháp lý theo quy chuẩn nhà nước.'
              : 'Unify document registry dispatches, digital approvals, and statutory legal archiving in one secure workflow.'
          }
          tags={
            isVi
              ? [
                  'Sổ văn bản số',
                  'Ký duyệt & Con dấu số',
                  'Đánh số tự động',
                  'Tra cứu trích yếu',
                  'Phân quyền đa tầng',
                ]
              : [
                  'Document Registry',
                  'Digital Signatures',
                  'Auto-Numbering',
                  'Abstract Search',
                  'Multi-Tier Permissions',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Hệ thống quản lý văn thư & hồ sơ pháp lý' : 'Enterprise Registry & Governance Suite'}
          subtitle={
            isVi
              ? 'Xóa bỏ quy trình giấy tờ thủ công, kiểm soát minh bạch từng văn bản và hợp đồng.'
              : 'Eliminate manual paperwork with full transparency over legal dispatches and records.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Vận hành & Văn bản' : 'Operations & Registry'} />

        <Footer />
      </main>
    </>
  );
}
