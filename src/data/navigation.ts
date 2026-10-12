export interface NavLink {
  label: string;
  labelVi?: string;
  labelEn?: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Modules', labelVi: 'Phân hệ', labelEn: 'Modules', href: '#features' },
  { label: 'Solutions', labelVi: 'Giải pháp', labelEn: 'Solutions', href: '#features' },
  { label: 'Platform & Trust', labelVi: 'Nền tảng & Bảo mật', labelEn: 'Platform & Trust', href: '/deployment' },
  { label: 'Resources', labelVi: 'Tài nguyên', labelEn: 'Resources', href: '/docs' },
];

export const FOOTER_LINKS = {
  operations: [
    { label: 'Fleet & Logistics', labelVi: 'Vận tải & Đội xe', labelEn: 'Fleet & Logistics', href: '/products/fleet-logistics' },
    { label: 'Inventory & Assets', labelVi: 'Kho SKU & Tài sản', labelEn: 'Inventory & Assets', href: '/products/inventory-assets' },
    { label: 'Operations & Registry', labelVi: 'Sổ văn bản & Pháp lý', labelEn: 'Operations & Registry', href: '/products/operations-documents' },
  ],
  workforce: [
    { label: 'Projects & Kanban', labelVi: 'Dự án & Kanban', labelEn: 'Projects & Kanban', href: '/products/work-management' },
    { label: 'Org Chart & Workforce', labelVi: 'Tổ chức & Nhân sự', labelEn: 'Org Chart & Workforce', href: '/products/hr-workforce' },
    { label: 'Approvals & Leadership', labelVi: 'Phê duyệt & Lãnh đạo', labelEn: 'Approvals & Leadership', href: '/products/approvals-analytics' },
  ],
  comms: [
    { label: 'CommaMeet & Chat', labelVi: 'Giao tiếp & CommaMeet', labelEn: 'CommaMeet & Chat', href: '/products/communication-meet' },
    { label: 'Surveys & Feedback', labelVi: 'Khảo sát & Góp ý', labelEn: 'Surveys & Feedback', href: '/products/surveys-feedback' },
    { label: 'CMS Studio & Portal', labelVi: 'CMS Studio & Cổng tin', labelEn: 'CMS Studio & Portal', href: '/products/cms-portal' },
  ],
  commerce: [
    { label: 'CRM & Helpdesk', labelVi: 'Khách hàng & Hỗ trợ', labelEn: 'CRM & Helpdesk', href: '/products/crm-helpdesk' },
    { label: 'Social & Retail', labelVi: 'Mạng xã hội & Bán lẻ', labelEn: 'Social & Retail', href: '/products/social-retail' },
    { label: 'AI Vision & Cameras', labelVi: 'AI Vision & Smart City', labelEn: 'AI Vision & Cameras', href: '/products/ai-smart-city' },
    { label: 'Multi-Tier Permissions', labelVi: 'Phân quyền & Bảo mật', labelEn: 'Multi-Tier Permissions', href: '/products/security-platform' },
  ],
  pricing: [
    { label: 'Enterprise Cloud', labelVi: 'Đám mây Doanh nghiệp', labelEn: 'Enterprise Cloud', href: '/deployment' },
    { label: 'Private Server', labelVi: 'Máy chủ riêng nội bộ', labelEn: 'Private Dedicated Server', href: '/deployment' },
    { label: 'Desktop & Mobile Apps', labelVi: 'Ứng dụng Máy tính & Di động', labelEn: 'Desktop & Mobile Apps', href: '/deployment' },
    { label: 'High Availability SLA', labelVi: 'Cam kết vận hành 99.9%', labelEn: 'High Availability SLA', href: '/deployment' },
  ],
  resources: [
    { label: 'Feature Handbook', labelVi: 'Cẩm nang tính năng nghiệp vụ', labelEn: 'Feature Handbook', href: '/docs' },
    { label: "What's New & Updates", labelVi: 'Nhật ký cập nhật mới', labelEn: "What's New & Updates", href: '/release-notes' },
    { label: 'Ecosystem & Sync', labelVi: 'Tích hợp & Kết nối mở', labelEn: 'Ecosystem & Sync', href: '/docs' },
    { label: 'Apps & Deployment', labelVi: 'Ứng dụng & Triển khai', labelEn: 'Apps & Deployment', href: '/deployment' },
  ],
};

