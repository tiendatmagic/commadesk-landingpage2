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
          description: 'Chuẩn hóa quy trình tiếp nhận, đánh số tự động và phân loại theo quy định hành chính.',
          metricBadge: { label: 'Quy chuẩn', value: 'Nghị định 30' },
        },
        {
          id: 'approvals-flow',
          tag: 'Trình ký',
          title: 'Ký Duyệt & Dấu Số',
          description: 'Thiết lập luồng trình ký linh hoạt, ký số điện tử và lưu đầy đủ lịch sử phê duyệt.',
          metricBadge: { label: 'Quy trình', value: 'Trình ký điện tử' },
        },
        {
          id: 'reserved-numbers',
          tag: 'Đánh số',
          title: 'Quản Lý Cấp Số',
          description: 'Hệ thống tự động cấp số văn bản liên tục, quản lý số chừa và số hủy tránh trùng lặp.',
          metricBadge: { label: 'Kiểm soát', value: 'Số chừa & số hủy' },
        },
        {
          id: 'policy-docs',
          tag: 'Quy chế',
          title: 'Kho Quy Chế Nội Bộ',
          description: 'Lưu trữ tài liệu quy chế công ty, phân loại theo phòng ban và theo dõi lịch sử cập nhật.',
          metricBadge: { label: 'Lưu trữ', value: 'Theo phiên bản' },
        },
        {
          id: 'doc-search',
          tag: 'Tra cứu',
          title: 'Tra Cứu Thông Minh',
          description: 'Tìm kiếm nhanh theo số hiệu, trích yếu, ngày phát hành hoặc nội dung đính kèm.',
          metricBadge: { label: 'Tìm kiếm', value: 'Theo số & trích yếu' },
        },
        {
          id: 'casbin-registry-rbac',
          tag: 'Bảo mật',
          title: 'Phân Quyền Văn Bản',
          description: 'Bảo mật văn bản mật và hồ sơ pháp lý, chỉ nhân sự có thẩm quyền mới được xem và tải.',
          metricBadge: { label: 'Truy cập', value: 'Theo thẩm quyền' },
        },
      ]
    : [
        {
          id: 'doc-registry',
          tag: 'Registry',
          title: 'Inbound & Outbound Registries',
          description: 'Standardize dispatch books with automated numbering and administrative classifications.',
          metricBadge: { label: 'Standard', value: 'Decree 30' },
        },
        {
          id: 'approvals-flow',
          tag: 'Signatures',
          title: 'Digital Signing & Seals',
          description: 'Flexible digital signing workflows with approval stamps and full sign-off history.',
          metricBadge: { label: 'Workflow', value: 'Digital Sign-Off' },
        },
        {
          id: 'reserved-numbers',
          tag: 'Numbering',
          title: 'Numbering Governance',
          description: 'Sequential numbering rules with reserved and canceled number tracking to prevent duplicates.',
          metricBadge: { label: 'Control', value: 'Reserved & Voided' },
        },
        {
          id: 'policy-docs',
          tag: 'Policies',
          title: 'Internal Policy Repository',
          description: 'Centralized policy repository with department tags, role views, and version history.',
          metricBadge: { label: 'Archive', value: 'Version History' },
        },
        {
          id: 'doc-search',
          tag: 'Search',
          title: 'Instant Document Search',
          description: 'Search across dispatch IDs, subject abstracts, issuance dates, and attachments.',
          metricBadge: { label: 'Lookup', value: 'ID & Abstract' },
        },
        {
          id: 'casbin-registry-rbac',
          tag: 'Security',
          title: 'Role-Based Access',
          description: 'Restricted document visibility ensuring only authorized roles view confidential files.',
          metricBadge: { label: 'Access', value: 'Role-Scoped' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Vận hành & Văn bản' : 'Operations & Registry Module'}
          title={
            isVi
              ? ['Sổ văn bản chuẩn hóa', 'Trình ký & Lưu trữ điện tử']
              : ['Standardized document registry', 'Digital signing and archiving']
          }
          subtitle={
            isVi
              ? 'Hợp nhất sổ văn bản đến/đi, quy trình ký duyệt số và lưu trữ hồ sơ hành chính theo quy định nhà nước.'
              : 'Manage inbound and outbound dispatches, digital approvals, and compliant administrative archiving in one place.'
          }
          tags={
            isVi
              ? [
                  'Sổ văn bản số',
                  'Ký duyệt & Con dấu số',
                  'Đánh số tự động',
                  'Tra cứu trích yếu',
                  'Phân quyền theo vai trò',
                ]
              : [
                  'Document Registry',
                  'Digital Signatures',
                  'Auto-Numbering',
                  'Abstract Search',
                  'Role-Based Access',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Quản lý văn thư & Hồ sơ hành chính' : 'Document Registry & Governance'}
          subtitle={
            isVi
              ? 'Thay thế sổ sách giấy thủ công bằng quy trình đánh số, trình ký và lưu trữ minh bạch.'
              : 'Replace manual paper logs with structured numbering, digital approvals, and searchable archives.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Vận hành & Văn bản' : 'Operations & Registry'} />

        <Footer />
      </main>
    </>
  );
}
