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
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface Props {
  isVi?: boolean;
}

export function InteractiveDocsConsole({ isVi }: Props) {
  const [activeTab, setActiveTab] = useState<'tasks' | 'approvals' | 'attendance'>('tasks');
  const [approvalStatus, setApprovalStatus] = useState<'pending' | 'approved'>('pending');
  const [taskFilter, setTaskFilter] = useState<'all' | 'in_progress' | 'done'>('all');

  const tabs = [
    {
      id: 'tasks' as const,
      label: isVi ? 'Công việc & Tiến độ' : 'Tasks & progress',
      icon: <BarChartIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'approvals' as const,
      label: isVi ? 'Quy trình duyệt' : 'Approval flow',
      icon: <ShieldCheckIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'attendance' as const,
      label: isVi ? 'Chấm công ca kíp' : 'Attendance',
      icon: <UsersIcon className="w-3.5 h-3.5" />,
    },
  ];

  const tasks = [
    {
      id: 'CV-101',
      title: isVi ? 'Khai trương chi nhánh bán lẻ miền Nam' : 'Launch Southern retail branch',
      assignee: 'Sarah Mitchell',
      role: isVi ? 'Trưởng dự án' : 'Project lead',
      department: isVi ? 'Phát triển kinh doanh' : 'Business dev',
      progress: 90,
      priority: isVi ? 'Khẩn cấp' : 'High',
      priorityTone: 'text-[#DC2626]',
      status: 'in_progress' as const,
      statusLabel: isVi ? 'Đang thực hiện' : 'In progress',
    },
    {
      id: 'CV-102',
      title: isVi ? 'Nghiệm thu lắp đặt hệ thống Camera an ninh' : 'Security camera system acceptance',
      assignee: 'James Carter',
      role: isVi ? 'Chuyên viên kỹ thuật' : 'Tech specialist',
      department: isVi ? 'Vận hành hạ tầng' : 'Infra ops',
      progress: 100,
      priority: isVi ? 'Bình thường' : 'Normal',
      priorityTone: 'text-[#4B5565]',
      status: 'done' as const,
      statusLabel: isVi ? 'Hoàn thành' : 'Completed',
    },
    {
      id: 'CV-103',
      title: isVi ? 'Tổng hợp báo cáo doanh thu & KPI tháng' : 'Monthly revenue & KPI consolidation',
      assignee: 'Elena Rostova',
      role: isVi ? 'Kế toán trưởng' : 'Chief accountant',
      department: isVi ? 'Tài chính kế toán' : 'Finance',
      progress: 75,
      priority: isVi ? 'Ưu tiên' : 'Medium',
      priorityTone: 'text-[#D97706]',
      status: 'in_progress' as const,
      statusLabel: isVi ? 'Đang thẩm định' : 'Reviewing',
    },
  ];

  const filteredTasks = tasks.filter(
    (t) => taskFilter === 'all' || t.status === taskFilter
  );

  return (
    <ShowcaseCard
      title={isVi ? 'Mô phỏng nghiệp vụ doanh nghiệp' : 'Enterprise Operations Console'}
      headerRight={
        <ShowcaseTabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      }
    >
      <div className="min-h-[340px]">
        {activeTab === 'tasks' && (
          <div className="bg-white rounded-xl border border-slate-900/[0.08] p-4 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-900/[0.06]">
              <div>
                <h4 className="text-[14px] font-semibold text-[#111827]">
                  {isVi ? 'Bảng theo dõi nhiệm vụ & mốc tiến độ' : 'Task & milestone tracker'}
                </h4>
                <p className="text-[12px] text-[#6B7487] mt-0.5">
                  {isVi
                    ? 'Phân bổ đầu việc và đo lường tỷ lệ hoàn thành theo thời gian thực'
                    : 'Structured task assignments with live completion tracking'}
                </p>
              </div>
              <div className="flex items-center gap-1 p-0.5 bg-[#F5F7FA] rounded-lg border border-slate-900/[0.06]">
                {(['all', 'in_progress', 'done'] as const).map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setTaskFilter(filter)}
                    className={`px-2.5 py-1 rounded-md text-[12px] font-medium transition-colors cursor-pointer ${
                      taskFilter === filter
                        ? 'bg-white text-[#111827] shadow-[0_1px_2px_rgba(17,24,39,0.06)]'
                        : 'text-[#6B7487] hover:text-[#111827]'
                    }`}
                  >
                    {filter === 'all' && (isVi ? 'Tất cả' : 'All')}
                    {filter === 'in_progress' && (isVi ? 'Đang làm' : 'Active')}
                    {filter === 'done' && (isVi ? 'Hoàn thành' : 'Done')}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2.5">
              {filteredTasks.map((t) => (
                <div
                  key={t.id}
                  className="p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.06] space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-medium text-[#6B7487]">
                        {t.id}
                      </span>
                      <h5 className="text-[13.5px] font-medium text-[#111827]">
                        {t.title}
                      </h5>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-[11px]">
                      <span className={`font-medium ${t.priorityTone}`}>{t.priority}</span>
                      <span className={t.status === 'done' ? 'text-[#16A34A] font-medium' : 'text-[#4B5565]'}>
                        {t.statusLabel}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] text-[#6B7487]">
                    <div className="flex items-center gap-2.5">
                      <span>
                        {isVi ? 'Phụ trách: ' : 'Assignee: '}
                        <span className="font-medium text-[#111827]">{t.assignee}</span> ({t.role})
                      </span>
                      <span className="hidden sm:inline">·</span>
                      <span className="hidden sm:inline">{t.department}</span>
                    </div>
                    <span className="font-mono tabular-nums font-medium text-[#111827]">{t.progress}%</span>
                  </div>

                  <div className="w-full h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-[width] duration-300 ${
                        t.status === 'done' ? 'bg-[#16A34A]' : 'bg-[#FF4D38]'
                      }`}
                      style={{ width: `${t.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-1 flex items-center justify-between text-[12px] text-[#6B7487]">
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-3.5 h-3.5 text-[#16A34A]" />
                {isVi
                  ? 'Thông báo nhắc hạn tự động qua Email và Mobile'
                  : 'Automated deadline notifications via Email & Mobile'}
              </span>
              <span className="font-mono tabular-nums font-medium text-[#111827]">94.2%</span>
            </div>
          </div>
        )}

        {activeTab === 'approvals' && (
          <div className="bg-white rounded-xl border border-slate-900/[0.08] p-4 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-900/[0.06]">
              <div>
                <h4 className="text-[14px] font-semibold text-[#111827]">
                  {isVi ? 'Quy trình phê duyệt 2 cấp' : 'Two-step approval workflow'}
                </h4>
                <p className="text-[12px] text-[#6B7487] mt-0.5">
                  {isVi
                    ? 'Ký duyệt trực tuyến với nhật ký thời gian và hạn mức rõ ràng'
                    : 'Digital sign-offs with explicit timestamps and limits'}
                </p>
              </div>
              <span className="font-mono text-[12px] font-medium text-[#16A34A]">
                {isVi ? 'Quy trình chuẩn' : 'Standard flow'}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.06] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-900/[0.06]">
                <div>
                  <span className="font-mono text-[11px] text-[#6B7487]">
                    {isVi ? 'Số phiếu đề xuất' : 'Request code'}
                  </span>
                  <p className="text-[13.5px] font-semibold text-[#111827]">
                    DX-2026-088 · {isVi ? 'Mua sắm thiết bị văn phòng' : 'Office equipment procurement'}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[11px] text-[#6B7487]">
                    {isVi ? 'Giá trị dự toán' : 'Estimated amount'}
                  </span>
                  <p className="font-mono tabular-nums text-[14px] font-semibold text-[#FF4D38]">
                    18,500,000 đ
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-lg bg-white border border-slate-900/[0.08] flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[12px]">
                    <p className="font-medium text-[#111827]">
                      {isVi ? 'Cấp 1: Trưởng bộ phận' : 'Step 1: Dept manager'}
                    </p>
                    <p className="text-[#6B7487] text-[11px]">
                      {isVi ? 'Nguyễn Hoàng Long · 09:15' : 'Long Nguyen · 09:15'}
                    </p>
                    <span className="inline-block mt-1 font-mono text-[11px] font-medium text-[#16A34A]">
                      {isVi ? 'Đã duyệt' : 'Approved'}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-slate-900/[0.08] flex items-start gap-2.5">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      approvalStatus === 'approved'
                        ? 'bg-[#16A34A]/10 text-[#16A34A]'
                        : 'bg-amber-50 text-[#D97706]'
                    }`}
                  >
                    {approvalStatus === 'approved' ? (
                      <CheckIcon className="w-3.5 h-3.5" />
                    ) : (
                      <ClockIcon className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <div className="text-[12px] flex-1">
                    <p className="font-medium text-[#111827]">
                      {isVi ? 'Cấp 2: Ban Giám đốc' : 'Step 2: Executive board'}
                    </p>
                    <p className="text-[#6B7487] text-[11px]">
                      {approvalStatus === 'approved'
                        ? isVi
                          ? 'Đã duyệt vừa xong'
                          : 'Approved just now'
                        : isVi
                        ? 'Đang chờ phê duyệt'
                        : 'Awaiting sign-off'}
                    </p>
                    <span
                      className={`inline-block mt-1 font-mono text-[11px] font-medium ${
                        approvalStatus === 'approved' ? 'text-[#16A34A]' : 'text-[#D97706]'
                      }`}
                    >
                      {approvalStatus === 'approved'
                        ? isVi
                          ? 'Hoàn tất'
                          : 'Approved'
                        : isVi
                        ? 'Chờ duyệt'
                        : 'Pending'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[12px] text-[#6B7487]">
                  {isVi ? 'Thử thao tác phê duyệt trực tiếp' : 'Test interactive sign-off'}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setApprovalStatus((prev) =>
                      prev === 'approved' ? 'pending' : 'approved'
                    )
                  }
                  className={`px-4 h-9 rounded-[10px] text-[12.5px] font-medium transition-colors cursor-pointer ${
                    approvalStatus === 'approved'
                      ? 'bg-[#ECEFF4] text-[#111827] hover:bg-slate-200/80'
                      : 'bg-[#FF4D38] hover:bg-[#E03E2A] text-white'
                  }`}
                >
                  {approvalStatus === 'approved'
                    ? isVi
                      ? 'Đặt lại trạng thái chờ'
                      : 'Reset to pending'
                    : isVi
                    ? 'Phê duyệt phiếu'
                    : 'Approve request'}
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="bg-white rounded-xl border border-slate-900/[0.08] p-4 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-900/[0.06]">
              <div>
                <h4 className="text-[14px] font-semibold text-[#111827]">
                  {isVi ? 'Bảng chấm công thời gian thực' : 'Real-time attendance log'}
                </h4>
                <p className="text-[12px] text-[#6B7487] mt-0.5">
                  {isVi
                    ? 'Chấm công nhận diện khuôn mặt & định vị GPS đồng bộ sang bảng lương'
                    : 'Facial check-in and GPS logs synced to monthly payroll'}
                </p>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-[#6B7487] block">
                  {isVi ? 'Có mặt hôm nay' : 'Today attendance'}
                </span>
                <p className="font-mono tabular-nums text-[14px] font-semibold text-[#16A34A]">
                  96.8% (148/153)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  name: 'Trần Văn Minh',
                  role: isVi ? 'Kỹ sư phần mềm' : 'Software engineer',
                  time: '08:02',
                  method: isVi ? 'Face ID' : 'Face check-in',
                  location: isVi ? 'Trụ sở chính (Tầng 8)' : 'HQ (Floor 8)',
                  status: isVi ? 'Đúng giờ' : 'On time',
                  tone: 'text-[#16A34A]',
                },
                {
                  name: 'Lê Thu Hương',
                  role: isVi ? 'Chuyên viên Nhân sự' : 'HR specialist',
                  time: '08:14',
                  method: isVi ? 'GPS Mobile' : 'Mobile GPS',
                  location: isVi ? 'Chi nhánh Miền Trung' : 'Central branch',
                  status: isVi ? 'Đúng giờ' : 'On time',
                  tone: 'text-[#16A34A]',
                },
                {
                  name: 'Phạm Đức Duy',
                  role: isVi ? 'Kinh doanh' : 'Account exec',
                  time: '08:45',
                  method: isVi ? 'Công tác ngoài' : 'Client visit',
                  location: isVi ? 'Gặp khách hàng' : 'On-site client',
                  status: isVi ? 'Ngoài văn phòng' : 'Field work',
                  tone: 'text-[#4B5565]',
                },
              ].map((staff, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.06] space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[13px] font-semibold text-[#111827]">{staff.name}</p>
                      <p className="text-[11px] text-[#6B7487]">{staff.role}</p>
                    </div>
                    <span className={`font-mono text-[11px] font-medium ${staff.tone}`}>
                      {staff.status}
                    </span>
                  </div>

                  <div className="pt-1.5 border-t border-slate-900/[0.06] text-[12px] space-y-1 text-[#4B5565]">
                    <p className="flex items-center justify-between">
                      <span className="text-[#6B7487]">{isVi ? 'Giờ vào' : 'Check-in'}</span>
                      <span className="font-mono tabular-nums font-medium text-[#111827]">{staff.time}</span>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="text-[#6B7487]">{isVi ? 'Phương thức' : 'Method'}</span>
                      <span>{staff.method}</span>
                    </p>
                    <p className="flex items-center justify-between gap-2">
                      <span className="text-[#6B7487]">{isVi ? 'Địa điểm' : 'Location'}</span>
                      <span className="truncate max-w-[120px]">{staff.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[12px] text-[#6B7487] border-t border-slate-900/[0.06]">
              <span className="flex items-center gap-1.5">
                <TrendingUpIcon className="w-3.5 h-3.5 text-[#111827]" />
                {isVi
                  ? 'Dữ liệu chấm công đồng bộ trực tiếp sang bảng lương cuối tháng'
                  : 'Attendance logs sync directly into monthly payroll calculations'}
              </span>
              <span className="font-mono font-medium text-[#111827]">
                {isVi ? 'Đồng bộ: 24/7' : 'Sync: 24/7'}
              </span>
            </div>
          </div>
        )}
      </div>
    </ShowcaseCard>
  );
}
