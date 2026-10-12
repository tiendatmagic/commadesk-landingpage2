'use client';

import React, { useState } from 'react';
import {
  CheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  UsersIcon,
  BarChartIcon,
  TrendingUpIcon,
} from '@/components/ui/UIIcons';

interface Props {
  isVi?: boolean;
}

export function InteractiveDocsConsole({ isVi }: Props) {
  const [activeTab, setActiveTab] = useState<'tasks' | 'approvals' | 'attendance'>('tasks');
  const [approvalStatus, setApprovalStatus] = useState<'pending' | 'approved'>('pending');
  const [taskFilter, setTaskFilter] = useState<'all' | 'in_progress' | 'done'>('all');

  const tasks = [
    {
      id: 'CV-101',
      title: isVi ? 'Khai trương chi nhánh bán lẻ miền Nam' : 'Launch Southern Retail Branch',
      assignee: 'Sarah Mitchell',
      role: isVi ? 'Trưởng dự án' : 'Project Lead',
      department: isVi ? 'Phát triển kinh doanh' : 'Business Dev',
      progress: 90,
      priority: isVi ? 'Khẩn cấp' : 'High',
      priorityColor: 'bg-rose-50 text-rose-700 border-rose-200',
      status: 'in_progress' as const,
      statusLabel: isVi ? 'Đang thực hiện' : 'In Progress',
    },
    {
      id: 'CV-102',
      title: isVi ? 'Nghiệm thu lắp đặt hệ thống Camera AI an ninh' : 'Acceptance of AI Security Camera System',
      assignee: 'James Carter',
      role: isVi ? 'Chuyên viên kỹ thuật' : 'Tech Specialist',
      department: isVi ? 'Vận hành hạ tầng' : 'Infra Ops',
      progress: 100,
      priority: isVi ? 'Bình thường' : 'Normal',
      priorityColor: 'bg-slate-50 text-slate-700 border-slate-200',
      status: 'done' as const,
      statusLabel: isVi ? 'Đã hoàn thành' : 'Completed',
    },
    {
      id: 'CV-103',
      title: isVi ? 'Tổng hợp báo cáo doanh thu & KPI tháng' : 'Monthly Revenue & KPI Consolidation',
      assignee: 'Elena Rostova',
      role: isVi ? 'Kế toán trưởng' : 'Chief Accountant',
      department: isVi ? 'Tài chính kế toán' : 'Finance & Acc',
      progress: 75,
      priority: isVi ? 'Ưu tiên' : 'Medium',
      priorityColor: 'bg-amber-50 text-amber-700 border-amber-200',
      status: 'in_progress' as const,
      statusLabel: isVi ? 'Đang thẩm định' : 'Reviewing',
    },
  ];

  const filteredTasks = tasks.filter(
    (t) => taskFilter === 'all' || t.status === taskFilter
  );

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100/60 p-4 sm:p-6 border border-slate-200/80">
      {/* Top Controls: Tab Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D38] animate-pulse"></span>
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            {isVi ? 'Trải Nghiệm Nghiệp Vụ Doanh Nghiệp' : 'Enterprise Operations Playground'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab('tasks')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'tasks'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BarChartIcon className="w-3.5 h-3.5" />
            <span>{isVi ? 'Công Việc & Tiến Độ' : 'Tasks & Progress'}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('approvals')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'approvals'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <ShieldCheckIcon className="w-3.5 h-3.5" />
            <span>{isVi ? 'Quy Trình Phê Duyệt' : 'Approval Flow'}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('attendance')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'attendance'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <UsersIcon className="w-3.5 h-3.5" />
            <span>{isVi ? 'Chấm Công & Ca Kíp' : 'Workforce Attendance'}</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="min-h-[350px]">
        {/* Tab 1: Công Việc & Tiến Độ */}
        {activeTab === 'tasks' && (
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-5 sm:p-7 space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {isVi ? 'Bảng Theo Dõi Nhiệm Vụ Trực Quan' : 'Visual Task & Milestone Tracker'}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {isVi
                    ? 'Phân bổ công việc rõ ràng, đo lường tiến độ tự động theo thời gian thực'
                    : 'Clear task distribution, automated progress tracking in real time'}
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                {(['all', 'in_progress', 'done'] as const).map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setTaskFilter(filter)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                      taskFilter === filter
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {filter === 'all' && (isVi ? 'Tất cả' : 'All')}
                    {filter === 'in_progress' && (isVi ? 'Đang làm' : 'Active')}
                    {filter === 'done' && (isVi ? 'Hoàn thành' : 'Done')}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {filteredTasks.map((t) => (
                <div
                  key={t.id}
                  className="p-3.5 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {t.id}
                      </span>
                      <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                        {t.title}
                      </h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded border ${t.priorityColor}`}
                      >
                        {t.priority}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                          t.status === 'done'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {t.statusLabel}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                    <div className="flex items-center gap-3">
                      <span>
                        {isVi ? 'Phụ trách:' : 'Assignee:'}{' '}
                        <strong className="text-slate-800">{t.assignee}</strong> ({t.role})
                      </span>
                      <span className="hidden sm:inline text-slate-300">•</span>
                      <span className="hidden sm:inline">
                        {isVi ? 'Phòng ban:' : 'Dept:'} {t.department}
                      </span>
                    </div>
                    <span className="font-bold text-slate-700">{t.progress}%</span>
                  </div>

                  {/* Thanh tiến độ */}
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        t.status === 'done' ? 'bg-emerald-500' : 'bg-[#FF4D38]'
                      }`}
                      style={{ width: `${t.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                {isVi
                  ? 'Tự động gửi thông báo nhắc việc qua Email và Ứng dụng di động'
                  : 'Automated task reminder notifications via Email and Mobile App'}
              </span>
              <span className="font-semibold text-slate-700">
                {isVi ? 'Hiệu suất nhóm: 94.2%' : 'Team Efficiency: 94.2%'}
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Quy Trình Phê Duyệt */}
        {activeTab === 'approvals' && (
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-5 sm:p-7 space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {isVi ? 'Quy Trình Phê Duyệt Tự Động 2 Cấp' : 'Automated 2-Step Approval Workflow'}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {isVi
                    ? 'Ký duyệt số hóa tức thì, loại bỏ hoàn toàn thủ tục giấy tờ rườm rà'
                    : 'Instant digital approvals, completely eliminating manual paper forms'}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                {isVi ? 'Quy trình chuẩn hóa' : 'Standardized Flow'}
              </span>
            </div>

            {/* Chi tiết phiếu đề xuất mẫu */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200/80">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {isVi ? 'Số phiếu đề xuất' : 'Request Code'}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">
                    DX-2026-088 // {isVi ? 'Đề xuất mua sắm thiết bị văn phòng' : 'Office Equipment Procurement'}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {isVi ? 'Giá trị dự toán' : 'Estimated Value'}
                  </span>
                  <p className="text-xs sm:text-sm font-black text-[#FF4D38]">
                    18.500.000 VNĐ
                  </p>
                </div>
              </div>

              {/* Luồng phê duyệt 2 bước */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Bước 1 */}
                <div className="p-3 rounded-lg bg-white border border-emerald-200 flex items-start gap-3 shadow-2xs">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">
                      {isVi ? 'Cấp 1: Trưởng Bộ Phận' : 'Step 1: Department Manager'}
                    </p>
                    <p className="text-slate-500 text-[11px]">
                      {isVi ? 'Đã duyệt bởi: Nguyễn Hoàng Long (09:15)' : 'Approved by: Nguyen Hoang Long (09:15)'}
                    </p>
                    <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                      {isVi ? 'Đã thông qua' : 'Passed'}
                    </span>
                  </div>
                </div>

                {/* Bước 2 */}
                <div
                  className={`p-3 rounded-lg bg-white border flex items-start gap-3 shadow-2xs transition-all ${
                    approvalStatus === 'approved'
                      ? 'border-emerald-200'
                      : 'border-amber-200'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                      approvalStatus === 'approved'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {approvalStatus === 'approved' ? (
                      <CheckIcon className="w-4 h-4 text-emerald-700" />
                    ) : (
                      <ClockIcon className="w-4 h-4 text-amber-700" />
                    )}
                  </div>
                  <div className="text-xs flex-1">
                    <p className="font-bold text-slate-900">
                      {isVi ? 'Cấp 2: Ban Tổng Giám Đốc' : 'Step 2: Executive Board'}
                    </p>
                    <p className="text-slate-500 text-[11px]">
                      {approvalStatus === 'approved'
                        ? isVi
                          ? 'Đã duyệt bởi: Ban Giám Đốc (Vừa xong)'
                          : 'Approved by: Executive Board (Just now)'
                        : isVi
                        ? 'Đang chờ Tổng Giám Đốc phê duyệt'
                        : 'Awaiting Executive Board approval'}
                    </p>
                    <span
                      className={`inline-block mt-1 text-[10px] font-semibold px-1.5 py-0.2 rounded ${
                        approvalStatus === 'approved'
                          ? 'text-emerald-700 bg-emerald-50'
                          : 'text-amber-700 bg-amber-50'
                      }`}
                    >
                      {approvalStatus === 'approved'
                        ? isVi
                          ? 'Đã phê duyệt hoàn tất'
                          : 'Fully Approved'
                        : isVi
                        ? 'Chờ duyệt'
                        : 'Pending Action'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Nút thao tác tương tác */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500">
                  {isVi
                    ? 'Bạn có thể thử nghiệm phê duyệt trực tiếp trên giao diện này'
                    : 'You can interactively simulate approval directly here'}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setApprovalStatus((prev) =>
                      prev === 'approved' ? 'pending' : 'approved'
                    )
                  }
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer ${
                    approvalStatus === 'approved'
                      ? 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                      : 'bg-[#FF4D38] hover:bg-[#EE4832] text-white shadow-[#FF4D38]/30'
                  }`}
                >
                  {approvalStatus === 'approved'
                    ? isVi
                      ? '↩ Đặt lại trạng thái chờ'
                      : '↩ Reset to Pending'
                    : isVi
                    ? '✓ Phê Duyệt Ngay (1 Chạm)'
                    : '✓ Approve Now (1-Tap)'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Chấm Công & Quản Lý Ca Kíp */}
        {activeTab === 'attendance' && (
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-5 sm:p-7 space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {isVi
                    ? 'Bảng Chấm Công Thông Minh Thời Gian Thực'
                    : 'Real-Time Smart Attendance Board'}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {isVi
                    ? 'Nhận diện khuôn mặt AI và định vị GPS, chống gian lận và tự động tính công'
                    : 'AI facial recognition and GPS geolocation, tamper-proof with automated timesheets'}
                </p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  {isVi ? 'Tỷ lệ có mặt hôm nay' : 'Today Attendance'}
                </span>
                <p className="text-sm font-black text-emerald-600">96.8% (148/153)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  name: 'Trần Văn Minh',
                  role: isVi ? 'Kỹ sư phần mềm' : 'Software Engineer',
                  time: '08:02',
                  method: isVi ? 'Nhận diện khuôn mặt' : 'AI Face Check-in',
                  location: isVi ? 'Trụ sở chính (Tầng 8)' : 'Headquarters (Floor 8)',
                  status: isVi ? 'Đúng giờ' : 'On-Time',
                  badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                },
                {
                  name: 'Lê Thu Hương',
                  role: isVi ? 'Chuyên viên Nhân sự' : 'HR Specialist',
                  time: '08:14',
                  method: isVi ? 'Định vị GPS Mobile' : 'Mobile GPS',
                  location: isVi ? 'Chi nhánh Miền Trung' : 'Central Branch',
                  status: isVi ? 'Đúng giờ' : 'On-Time',
                  badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                },
                {
                  name: 'Phạm Đức Duy',
                  role: isVi ? 'Nhân viên kinh doanh' : 'Sales Representative',
                  time: '08:45',
                  method: isVi ? 'Làm việc bên ngoài' : 'Client Visit GPS',
                  location: isVi ? 'Gặp khách hàng (Đã duyệt)' : 'On-Site Client (Approved)',
                  status: isVi ? 'Công tác ngoài' : 'Field Work',
                  badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
                },
              ].map((staff, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-white hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-900">{staff.name}</p>
                      <p className="text-[10px] text-slate-500">{staff.role}</p>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded border ${staff.badgeColor}`}
                    >
                      {staff.status}
                    </span>
                  </div>

                  <div className="pt-1 text-[11px] space-y-1 text-slate-600">
                    <p className="flex items-center justify-between">
                      <span className="text-slate-400">{isVi ? 'Giờ vào:' : 'Check-in:'}</span>
                      <strong className="font-mono text-slate-900">{staff.time}</strong>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="text-slate-400">{isVi ? 'Phương thức:' : 'Method:'}</span>
                      <span className="font-medium text-slate-700">{staff.method}</span>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="text-slate-400">{isVi ? 'Địa điểm:' : 'Location:'}</span>
                      <span className="truncate max-w-[130px] font-medium text-slate-700">
                        {staff.location}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 border-t border-slate-100">
              <span className="flex items-center gap-1.5">
                <TrendingUpIcon className="w-3.5 h-3.5 text-indigo-600" />
                {isVi
                  ? 'Dữ liệu chấm công tự động chuyển thành bảng lương cuối tháng, chính xác 100%'
                  : 'Attendance automatically syncs with month-end payroll with 100% precision'}
              </span>
              <span className="font-semibold text-slate-700">
                {isVi ? 'Đồng bộ tự động: 24/7' : 'Auto-Sync: 24/7'}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
