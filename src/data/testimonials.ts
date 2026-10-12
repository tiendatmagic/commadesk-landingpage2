export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  roleVi?: string;
  roleEn?: string;
  avatar: string;
  rating: number;
  quote: string;
  quoteVi?: string;
  quoteEn?: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'sarah',
    name: 'Sarah Mitchell',
    role: 'Head of Product at NexaTech',
    roleVi: 'Giám đốc Sản phẩm tại NexaTech',
    roleEn: 'Head of Product at NexaTech',
    avatar: '/avatars/sarah_mitchell_hd.jpg',
    rating: 5.0,
    quote:
      '“CommaDesk eliminated tool fragmentation. Having Kanban, time logs, and org charts in one place saves us hours of meetings every week.”',
    quoteVi:
      '“CommaDesk xóa bỏ phân mảnh công cụ. Việc có Kanban, nhật ký giờ và sơ đồ tổ chức tại một nơi giúp chúng tôi tiết kiệm hàng giờ họp mỗi tuần.”',
    quoteEn:
      '“CommaDesk eliminated tool fragmentation. Having Kanban, time logs, and org charts in one place saves us hours of meetings every week.”',
  },
  {
    id: 'james',
    name: 'James Carter',
    role: 'Operations Lead at BrightPath',
    roleVi: 'Trưởng khối Vận hành tại BrightPath',
    roleEn: 'Operations Lead at BrightPath',
    avatar: '/avatars/james_carter_hd.jpg',
    rating: 5.0,
    quote:
      '“The document registry and multi-tier permissions deliver enterprise-grade governance. Multi-manager approvals now take minutes instead of days.”',
    quoteVi:
      '“Sổ văn bản số và phân quyền đa tầng mang lại năng lực quản trị chuẩn mực. Quy trình duyệt đa cấp giờ chỉ mất vài phút thay vì nhiều ngày.”',
    quoteEn:
      '“The document registry and multi-tier permissions deliver enterprise-grade governance. Multi-manager approvals now take minutes instead of days.”',
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    role: 'VP of Engineering at TechVanguard',
    roleVi: 'Phó Chủ tịch Kỹ thuật tại TechVanguard',
    roleEn: 'VP of Engineering at TechVanguard',
    avatar: '/avatars/elena_rostova_hd.jpg',
    rating: 5.0,
    quote:
      '“The REST API and webhooks integrated smoothly into our CI/CD pipelines. Flexible permission tiers keep developer access secure and effortless.”',
    quoteVi:
      '“Hệ thống REST API và Webhooks tích hợp mượt mà vào luồng CI/CD. Cơ chế phân quyền linh hoạt giúp quản lý quyền hạn an toàn và tiện lợi.”',
    quoteEn:
      '“The REST API and webhooks integrated smoothly into our CI/CD pipelines. Flexible permission tiers keep developer access secure and effortless.”',
  },
  {
    id: 'david',
    name: 'David Chen',
    role: 'HR & People Ops Director at OmniRetail',
    roleVi: 'Giám đốc Nhân sự & Vận hành tại OmniRetail',
    roleEn: 'HR & People Ops Director at OmniRetail',
    avatar: '/avatars/david_chen_hd.jpg',
    rating: 5.0,
    quote:
      '“Mobile GPS and Face AI check-in transformed attendance across branches. Automated timesheets cut our payroll cycle by 60%.”',
    quoteVi:
      '“Chấm công GPS di động và Face AI giúp tinh gọn điểm danh chi nhánh. Bảng công tự động giúp giảm 60% thời gian chốt lương.”',
    quoteEn:
      '“Mobile GPS and Face AI check-in transformed attendance across branches. Automated timesheets cut our payroll cycle by 60%.”',
  },
  {
    id: 'marcus',
    name: 'Marcus Aurel',
    role: 'Enterprise Solution Architect at Apex Global',
    roleVi: 'Kiến trúc sư Giải pháp Doanh nghiệp tại Apex Global',
    roleEn: 'Enterprise Solution Architect at Apex Global',
    avatar: '/avatars/marcus_aurel_hd.jpg',
    rating: 5.0,
    quote:
      '“CommaDesk’s multi-tenant architecture and automated backups gave our security council total confidence to deploy company-wide.”',
    quoteVi:
      '“Kiến trúc đa tổ chức và sao lưu tự động của CommaDesk đem lại sự yên tâm tuyệt đối khi triển khai trên toàn tập đoàn.”',
    quoteEn:
      '“CommaDesk’s multi-tenant architecture and automated backups gave our security council total confidence to deploy company-wide.”',
  },
  {
    id: 'sophia',
    name: 'Sophia Lin',
    role: 'PMO Director at Horizon Software',
    roleVi: 'Giám đốc Văn phòng Quản lý Dự án PMO tại Horizon Software',
    roleEn: 'PMO Director at Horizon Software',
    avatar: '/avatars/sophia_lin_hd.jpg',
    rating: 5.0,
    quote:
      '“Real-time Gantt timelines and executive KPIs let us spot bottlenecks before milestones slip. Delivery predictability has never been higher.”',
    quoteVi:
      '“Tiến độ Gantt realtime và KPI lãnh đạo giúp phát hiện điểm nghẽn trước khi trễ hạn. Tiến độ bàn giao luôn được đảm bảo.”',
    quoteEn:
      '“Real-time Gantt timelines and executive KPIs let us spot bottlenecks before milestones slip. Delivery predictability has never been higher.”',
  },
];
