export interface TestimonialItem {
  id: string;
  name: string;
  nameVi?: string;
  nameEn?: string;
  role: string;
  roleVi?: string;
  roleEn?: string;
  company?: string;
  companyVi?: string;
  companyEn?: string;
  avatar: string;
  rating: number;
  quote: string;
  quoteVi?: string;
  quoteEn?: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'sang_aqp',
    name: 'Phan Nhật Sang',
    nameVi: 'Phan Nhật Sang',
    nameEn: 'Phan Nhat Sang',
    role: 'Chief Executive Officer (CEO)',
    roleVi: 'Giám đốc Điều hành (CEO)',
    roleEn: 'Chief Executive Officer (CEO)',
    company: 'AQP Technology Co., Ltd',
    companyVi: 'CÔNG TY TNHH CÔNG NGHỆ AQP',
    companyEn: 'AQP Technology Co., Ltd',
    avatar: '/avatars/sang_aqp_hd.webp',
    rating: 5.0,
    quote:
      '“CommaDesk brought our Kanban project tracking, GPS and face attendance, and employee records into one hub. Weekly status check-ins take far less time and delivery schedules stay clear across teams.”',
    quoteVi:
      '“CommaDesk giúp AQP gộp việc theo dõi tiến độ Kanban, chấm công GPS và hồ sơ nhân sự vào một hệ thống chung. Đội ngũ giảm đáng kể thời gian họp rà soát báo cáo và luôn nắm rõ tiến độ bàn giao dự án.”',
    quoteEn:
      '“CommaDesk brought our Kanban project tracking, GPS and face attendance, and employee records into one hub. Weekly status check-ins take far less time and delivery schedules stay clear across teams.”',
  },
  {
    id: 'phong_cvedix',
    name: 'Trần Hoàng Phong',
    nameVi: 'Trần Hoàng Phong',
    nameEn: 'Tran Hoang Phong',
    role: 'CTO & Solutions Director',
    roleVi: 'Giám đốc Công nghệ & Giải pháp (CTO)',
    roleEn: 'Chief Technology Officer (CTO)',
    company: 'CVEDIX Technology and Solutions Co., Ltd',
    companyVi: 'CÔNG TY TNHH CÔNG NGHỆ VÀ GIẢI PHÁP CVEDIX',
    companyEn: 'CVEDIX Technology and Solutions Co., Ltd',
    avatar: '/avatars/phong_cvedix_hd.webp',
    rating: 5.0,
    quote:
      '“Role-based data permissions and two-way software sync in CommaDesk work reliably across departments. CVEDIX rolled out the platform across our teams within days while keeping internal data access strictly scoped.”',
    quoteVi:
      '“Cơ chế phân quyền dữ liệu theo vai trò và khả năng đồng bộ với phần mềm kế toán, bán hàng sẵn có của CommaDesk vận hành rất ổn định. CVEDIX triển khai cho các phòng ban chỉ trong vài ngày mà vẫn kiểm soát chặt phạm vi truy cập.”',
    quoteEn:
      '“Role-based data permissions and two-way software sync in CommaDesk work reliably across departments. CVEDIX rolled out the platform across our teams within days while keeping internal data access strictly scoped.”',
  },
  {
    id: 'nganthy',
    name: 'Đỗ Thị Ngân Thy',
    nameVi: 'Đỗ Thị Ngân Thy',
    nameEn: 'Do Thi Ngan Thy',
    role: 'Managing Director & COO',
    roleVi: 'Tổng Giám đốc Vận hành (COO)',
    roleEn: 'Managing Director & COO',
    company: 'Ngan Thy Joint Stock Company',
    companyVi: 'Cty CP Ngân Thy',
    companyEn: 'Ngan Thy Joint Stock Company',
    avatar: '/avatars/ngan_thy_hd.webp',
    rating: 5.0,
    quote:
      '“The digital document registry, multi-step approvals, and warehouse tracking replaced our paper sign-off binders. Leave requests, dispatches, and purchase vouchers are now reviewed directly on mobile.”',
    quoteVi:
      '“Sổ văn bản điện tử, quy trình duyệt nhiều cấp và quản lý kho bãi của CommaDesk giúp Ngân Thy bỏ hẳn quy trình giấy tờ thủ công. Mọi tờ trình và phiếu đề xuất đều được xem và duyệt ngay trên điện thoại.”',
    quoteEn:
      '“The digital document registry, multi-step approvals, and warehouse tracking replaced our paper sign-off binders. Leave requests, dispatches, and purchase vouchers are now reviewed directly on mobile.”',
  },
  {
    id: 'tuan_citares',
    name: 'TS. Lê Quốc Tuấn',
    nameVi: 'TS. Lê Quốc Tuấn',
    nameEn: 'Dr. Le Quoc Tuan',
    role: 'R&D & Digital Transformation Director',
    roleVi: 'Giám đốc Nghiên cứu & Chuyển đổi số',
    roleEn: 'R&D & Digital Transformation Director',
    company: 'CITARES',
    companyVi: 'CITARES',
    companyEn: 'CITARES',
    avatar: '/avatars/tuan_citares_hd.webp',
    rating: 5.0,
    quote:
      '“Combining camera event monitoring with Gantt project tracking gives CITARES clear visibility over daily operations. Teams follow schedules and site alerts in one workspace instead of switching between tools.”',
    quoteVi:
      '“Việc kết nối cảnh báo từ camera giám sát cùng biểu đồ tiến độ Gantt trên CommaDesk giúp CITARES theo dõi vận hành hàng ngày rất thuận tiện. Nhân sự chỉ cần mở một nơi để nắm cả lịch dự án lẫn tình hình tại hiện trường.”',
    quoteEn:
      '“Combining camera event monitoring with Gantt project tracking gives CITARES clear visibility over daily operations. Teams follow schedules and site alerts in one workspace instead of switching between tools.”',
  },
];
