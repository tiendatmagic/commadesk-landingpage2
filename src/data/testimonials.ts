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
    avatar: '/avatars/sang_aqp_hd.jpg',
    rating: 5.0,
    quote:
      '“CommaDesk unified our Kanban sprint tracking, GPS biometric attendance, and workforce records under one hub. Reporting meetings dropped by over 50%, while project delivery transparency reached an all-time high.”',
    quoteVi:
      '“CommaDesk giúp AQP hợp nhất toàn bộ tiến độ Kanban, chấm công GPS và hồ sơ nhân sự trên một nền tảng duy nhất. Thời gian họp báo cáo giảm hơn 50%, tiến độ bàn giao dự án luôn minh bạch và tức thì.”',
    quoteEn:
      '“CommaDesk unified our Kanban sprint tracking, GPS biometric attendance, and workforce records under one hub. Reporting meetings dropped by over 50%, while project delivery transparency reached an all-time high.”',
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
    avatar: '/avatars/phong_cvedix_hd.jpg',
    rating: 5.0,
    quote:
      '“The multi-tier permission matrix, open REST APIs, and event webhooks in CommaDesk operate with exceptional reliability. CVEDIX integrated it into our core infrastructure within days while maintaining strict enterprise security.”',
    quoteVi:
      '“Hệ thống phân quyền dữ liệu đa cấp và bộ REST API, Webhooks của CommaDesk vận hành cực kỳ ổn định. CVEDIX tích hợp sâu vào hệ thống hạ tầng sẵn có chỉ trong vài ngày mà vẫn đảm bảo an toàn tuyệt đối.”',
    quoteEn:
      '“The multi-tier permission matrix, open REST APIs, and event webhooks in CommaDesk operate with exceptional reliability. CVEDIX integrated it into our core infrastructure within days while maintaining strict enterprise security.”',
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
    avatar: '/avatars/ngan_thy_hd.jpg',
    rating: 5.0,
    quote:
      '“The digital document registry, multi-tier approvals, and logistics inventory tracking freed Ngan Thy from cumbersome paper trails. Proposals and procurement requests are now approved on mobile in minutes.”',
    quoteVi:
      '“Hệ thống sổ văn bản số điện tử, quy trình duyệt đa cấp và quản lý kho bãi của CommaDesk giải phóng đội ngũ Ngân Thy khỏi mớ giấy tờ rườm rà. Mọi đề xuất, tờ trình đều được phê duyệt ngay trên điện thoại trong vài phút.”',
    quoteEn:
      '“The digital document registry, multi-tier approvals, and logistics inventory tracking freed Ngan Thy from cumbersome paper trails. Proposals and procurement requests are now approved on mobile in minutes.”',
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
    avatar: '/avatars/tuan_citares_hd.jpg',
    rating: 5.0,
    quote:
      '“The seamless integration between AI vision surveillance and real-time Gantt tracking provides CITARES with unparalleled operational visibility. It is a benchmark digital operating platform for modern organizations.”',
    quoteVi:
      '“Khả năng kết nối camera AI giám sát thông minh và biểu đồ Gantt tiến độ thời gian thực của CommaDesk mang lại tầm nhìn vận hành vượt trội cho CITARES. Đây là nền tảng quản trị số chuẩn mực cho tổ chức hiện đại.”',
    quoteEn:
      '“The seamless integration between AI vision surveillance and real-time Gantt tracking provides CITARES with unparalleled operational visibility. It is a benchmark digital operating platform for modern organizations.”',
  },
];
