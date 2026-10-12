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
    desc: 'Interactive Kanban boards, Gantt charts & sprint velocity tracking',
    descVi: 'Bảng Kanban tương tác, sơ đồ Gantt & quản lý vận tốc sprint',
    descEn: 'Interactive Kanban boards, Gantt charts & sprint velocity tracking',
  },
  {
    id: 'hr-workforce',
    name: 'Smart HR & Attendance',
    nameVi: 'Nhân Sự & Chấm Công AI',
    nameEn: 'Smart HR & Attendance',
    desc: '360° employee directory, AI biometric kiosk check-in & automated payroll',
    descVi: 'Hồ sơ nhân sự 360°, chấm công sinh trắc học Kiosk AI & bảng lương tự động',
    descEn: '360° employee directory, AI biometric kiosk check-in & automated payroll',
  },
  {
    id: 'comma-meet',
    name: 'CommaMeet & Unified Comms',
    nameVi: 'CommaMeet & Giao Tiếp Hợp Nhất',
    nameEn: 'CommaMeet & Unified Comms',
    desc: 'Encrypted HD video meetings, team chat & instant push alerts',
    descVi: 'Họp video HD bảo mật cao, trò chuyện nhóm và thông báo in-app realtime',
    descEn: 'Encrypted HD video meetings, team chat & instant push alerts',
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
    name: 'AI Vision & Smart City',
    nameVi: 'Camera AI & Đô Thị Thông Minh',
    nameEn: 'AI Vision & Smart City',
    desc: 'Multi-stream camera VMS, AI facial recognition & automated ANPR license plate logs',
    descVi: 'Giám sát camera VMS đa luồng, AI nhận diện khuôn mặt & ghi nhận biển số tự động',
    descEn: 'Multi-stream camera VMS, AI facial recognition & automated ANPR license plate logs',
  },
];
