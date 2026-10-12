'use client';

import React, { useState } from 'react';
import { CheckIcon, QuantumShieldGraphic } from '@/components/ui/UIIcons';

interface Props {
  isVi?: boolean;
}

export function InteractiveCasbinShield({ isVi }: Props) {
  const [permissions, setPermissions] = useState<Record<string, boolean>>({
    'bod:strategy': true,
    'ops:projects': true,
    'hr:payroll': true,
    'lead:tasks': true,
    'staff:reports': true,
    'staff:system_config': false,
  });

  const togglePermission = (key: string) => {
    setPermissions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const roles = [
    {
      key: 'bod:strategy',
      role: isVi ? 'Ban Tổng Giám Đốc' : 'Executive Board',
      roleBadge: isVi ? 'Toàn quyền điều hành' : 'Full Executive',
      action: isVi ? 'Xem Báo Cáo Chiến Lược & Duyệt Ngân Sách' : 'Strategic Reports & Budget Approval',
      desc: isVi ? 'Theo dõi KPI toàn tập đoàn, chỉ số tài chính và phê duyệt các khoản chi lớn' : 'Monitor company-wide KPIs and authorize major capital expenditures',
    },
    {
      key: 'ops:projects',
      role: isVi ? 'Giám Đốc Vận Hành' : 'Operations Director',
      roleBadge: isVi ? 'Quản lý khối' : 'Division Head',
      action: isVi ? 'Phân Công Dự Án & Duyệt Đề Xuất Chi Nhánh' : 'Project Assignment & Branch Requests',
      desc: isVi ? 'Điều phối tiến độ liên phòng ban, duyệt phiếu đề xuất vật tư và nhân sự' : 'Coordinate cross-departmental milestones and approve resource vouchers',
    },
    {
      key: 'hr:payroll',
      role: isVi ? 'Kế Toán & Nhân Sự' : 'HR & Finance Lead',
      roleBadge: isVi ? 'Quản trị nghiệp vụ' : 'Departmental Admin',
      action: isVi ? 'Quản Lý Hồ Sơ & Duyệt Bảng Tính Lương' : 'Employee Records & Payroll Audit',
      desc: isVi ? 'Truy cập dữ liệu nhân sự mật, đối soát chấm công và xuất phiếu lương định kỳ' : 'Access confidential HR records, reconcile timesheets, and dispatch payroll',
    },
    {
      key: 'lead:tasks',
      role: isVi ? 'Trưởng Nhóm Chuyên Môn' : 'Team Lead',
      roleBadge: isVi ? 'Quản lý nhóm' : 'Team Manager',
      action: isVi ? 'Giao Việc Nhân Viên & Duyệt Nghỉ Phép' : 'Task Assignment & Leave Approvals',
      desc: isVi ? 'Giao chỉ tiêu nhiệm vụ, theo dõi tiến độ hàng ngày và duyệt phép thành viên' : 'Assign subtasks, track daily deliverables, and approve member time-off',
    },
    {
      key: 'staff:reports',
      role: isVi ? 'Nhân Viên Thực Thi' : 'Staff Contributor',
      roleBadge: isVi ? 'Thành viên' : 'Member',
      action: isVi ? 'Xem Nhiệm Vụ & Báo Cáo Tiến Độ Công Việc' : 'View Assigned Tasks & Submit Work',
      desc: isVi ? 'Xem công việc được giao, cập nhật trạng thái hoàn thành và tạo đề xuất cá nhân' : 'Access assigned milestones, submit work deliverables, and file requests',
    },
    {
      key: 'staff:system_config',
      role: isVi ? 'Quyền Quản Trị Hệ Thống' : 'System Configuration',
      roleBadge: isVi ? 'Bảo mật cấp cao' : 'Restricted Access',
      action: isVi ? 'Thay Đổi Cấu Hình Tổ Chức & Tham Số Chung' : 'Corporate Settings & Global Policies',
      desc: isVi ? 'Quyền hạn hạn chế, chỉ dành cho Quản trị viên cấp cao nhất của tổ chức' : 'Strictly restricted permission reserved exclusively for Chief Administrators',
    },
  ];

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100/60 p-4 sm:p-6 border border-slate-200/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Col: High-Tech Security Shield Graphic */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center p-6 sm:p-8 bg-gradient-to-b from-white via-indigo-50/30 to-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden text-center">
          {/* Subtle Ambient Rings */}
          <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full border border-indigo-100/80 animate-spin" style={{ animationDuration: '35s' }}></div>
          <div className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full border border-dashed border-emerald-200/80 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>

          {/* Central 3D Quantum Shield */}
          <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-tr from-indigo-500 via-[#6366F1] to-[#FF4D38] shadow-2xl shadow-indigo-500/30 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-xl sm:rounded-2xl bg-white flex flex-col items-center justify-center relative overflow-hidden">
              <QuantumShieldGraphic className="w-11 h-11 sm:w-14 sm:h-14 text-indigo-600 drop-shadow-md" />
              <div className="absolute bottom-1 px-1.5 py-0.5 rounded bg-emerald-100 text-[8px] font-black text-emerald-800 uppercase tracking-widest">
                {isVi ? 'BẢO VỆ' : 'VERIFIED'}
              </div>
            </div>
          </div>

          <p className="relative z-10 mt-3 sm:mt-4 text-[10px] sm:text-xs font-bold text-slate-800 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            {isVi ? 'PHÂN QUYỀN ĐA TẦNG LINH HOẠT' : 'MULTI-TIER ENTERPRISE ACCESS'}
          </p>
          <span className="relative z-10 text-[10px] sm:text-[11px] text-emerald-600 font-bold mt-1 sm:mt-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            {isVi ? 'Kiểm soát truy cập: Tức thì & An toàn' : 'Access Verification: Instant & Secure'}
          </span>
          <p className="relative z-10 text-[11px] text-slate-500 mt-2 max-w-xs leading-relaxed">
            {isVi
              ? 'Phân tách rành mạch quyền hạn giữa lãnh đạo, quản lý và nhân viên trên từng phân hệ'
              : 'Clear separation of duties across executives, managers, and staff for each module'}
          </p>
        </div>

        {/* Right Col: Interactive Enterprise Role Matrix Simulator */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {isVi ? 'Mô Phỏng Phân Quyền Theo Cơ Cấu Doanh Nghiệp' : 'Role-Based Authorization Matrix'}
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {isVi
                    ? 'Nhấp vào từng dòng để cấp quyền hoặc thu hồi quyền hạn theo nhu cầu thực tế'
                    : 'Click any row to grant or revoke operational privileges dynamically'}
                </p>
              </div>
              <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full shrink-0">
                {isVi ? 'Thử nghiệm' : 'Interactive'}
              </span>
            </div>

            {/* Matrix Rules */}
            <div className="space-y-2">
              {roles.map((rule) => {
                const isAllowed = permissions[rule.key];
                return (
                  <div
                    key={rule.key}
                    onClick={() => togglePermission(rule.key)}
                    className={`p-2.5 sm:p-3 rounded-xl border flex items-center justify-between gap-3 transition-all cursor-pointer select-none ${
                      isAllowed
                        ? 'bg-emerald-50/40 border-emerald-200 hover:border-emerald-300'
                        : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="text-xs font-bold text-slate-900">
                          {rule.role}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-white border border-slate-200 text-slate-600">
                          {rule.roleBadge}
                        </span>
                      </div>
                      <p className="text-[11px] font-semibold text-slate-700 mt-0.5 truncate">
                        {rule.action}
                      </p>
                      <p className="text-[10px] text-slate-500 mt-0.5 hidden sm:block truncate">
                        {rule.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isAllowed
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {isVi
                          ? isAllowed
                            ? 'ĐÃ CẤP QUYỀN'
                            : 'CHƯA PHÂN QUYỀN'
                          : isAllowed
                          ? 'GRANTED'
                          : 'RESTRICTED'}
                      </span>
                      <div
                        className={`w-8 h-4 rounded-full p-0.5 transition-colors ${
                          isAllowed ? 'bg-emerald-500' : 'bg-slate-300'
                        }`}
                      >
                        <div
                          className={`w-3 h-3 rounded-full bg-white transition-transform ${
                            isAllowed ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                {isVi
                  ? 'Quyền hạn có hiệu lực ngay lập tức trên tất cả thiết bị của người dùng'
                  : 'Policy changes take effect immediately across all user devices'}
              </span>
              <span className="font-semibold text-slate-700">
                {isVi ? 'Bảo mật: Phân cấp chặt chẽ' : 'Security: Strict Hierarchy'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
