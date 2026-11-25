export interface IntegrationApp {
  id: string;
  name: string;
  nameVi?: string;
  nameEn?: string;
  desc: string;
  descVi?: string;
  descEn?: string;
}

export const INTEGRATION_APPS: IntegrationApp[] = [
  {
    id: 'work-management',
    name: 'Work & Project Hub',
    nameVi: 'Dự Án & Kanban',
    nameEn: 'Work & Project Hub',
    desc: 'Interactive Kanban boards, Gantt charts & sprint progress tracking',
    descVi: 'Bảng Kanban, sơ đồ Gantt & theo dõi tiến độ sprint',
    descEn: 'Interactive Kanban boards, Gantt charts & sprint progress tracking',
  },
  {
    id: 'hr-workforce',
    name: 'HR & Attendance',
    nameVi: 'Nhân Sự & Chấm Công',
    nameEn: 'HR & Attendance',
    desc: 'Employee directory, face and GPS attendance & automated payroll',
    descVi: 'Hồ sơ nhân sự, chấm công khuôn mặt & GPS và bảng lương tự động',
    descEn: 'Employee directory, face and GPS attendance & automated payroll',
  },
  {
    id: 'comma-meet',
    name: 'CommaMeet & Comms',
    nameVi: 'CommaMeet & Giao Tiếp',
    nameEn: 'CommaMeet & Comms',
    desc: 'HD video meetings, team chat & instant notifications',
    descVi: 'Họp video HD bảo mật, trò chuyện nhóm và thông báo công việc',
    descEn: 'HD video meetings, team chat & instant notifications',
  },
  {
    id: 'operations-documents',
    name: 'Official Document Registry',
    nameVi: 'Sổ Văn Bản & Pháp Lý Số',
    nameEn: 'Official Document Registry',
    desc: 'Decree 30 numbering rules, digital approval workflows & archived records',
    descVi: 'Đánh số văn bản tự động Nghị định 30, quy trình ký số & lưu trữ văn thư',
    descEn: 'Decree 30 numbering rules, digital approval workflows & archived records',
  },
  {
    id: 'ai-smart-city',
    name: 'Camera Vision & Smart City',
    nameVi: 'Camera Giám Sát & Đô Thị',
    nameEn: 'Camera Vision & Smart City',
    desc: 'Centralized camera streams, facial check-in & license plate recognition',
    descVi: 'Quản lý camera tập trung, nhận diện khuôn mặt & ghi nhận biển số xe',
    descEn: 'Centralized camera streams, facial check-in & license plate recognition',
  },
];
