'use client';

import React, { useState } from 'react';
import { CheckIcon, QuantumShieldGraphic } from '@/components/ui/UIIcons';
import { ShowcaseCard } from '@/components/ui/ShowcaseCard';

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
      roleBadge: isVi ? 'Toàn quyền' : 'Executive',
      action: isVi ? 'Xem Báo Cáo Chiến Lược & Duyệt Ngân Sách' : 'Strategic Reports & Budget Approval',
    },
    {
      key: 'ops:projects',
      role: isVi ? 'Giám Đốc Vận Hành' : 'Operations Director',
      roleBadge: isVi ? 'Quản lý khối' : 'Division head',
      action: isVi ? 'Phân Công Dự Án & Duyệt Đề Xuất Chi Nhánh' : 'Project Assignment & Branch Requests',
    },
    {
      key: 'hr:payroll',
      role: isVi ? 'Kế Toán & Nhân Sự' : 'HR & Finance Lead',
      roleBadge: isVi ? 'Nghiệp vụ' : 'Dept admin',
      action: isVi ? 'Quản Lý Hồ Sơ & Duyệt Bảng Tính Lương' : 'Employee Records & Payroll Audit',
    },
    {
      key: 'lead:tasks',
      role: isVi ? 'Trưởng Nhóm Chuyên Môn' : 'Team Lead',
      roleBadge: isVi ? 'Quản lý nhóm' : 'Team lead',
      action: isVi ? 'Giao Việc Nhân Viên & Duyệt Nghỉ Phép' : 'Task Assignment & Leave Approvals',
    },
    {
      key: 'staff:reports',
      role: isVi ? 'Nhân Viên Thực Thi' : 'Staff Contributor',
      roleBadge: isVi ? 'Thành viên' : 'Member',
      action: isVi ? 'Xem Nhiệm Vụ & Báo Cáo Tiến Độ Công Việc' : 'View Assigned Tasks & Submit Work',
    },
    {
      key: 'staff:system_config',
      role: isVi ? 'Quyền Quản Trị Hệ Thống' : 'System Configuration',
      roleBadge: isVi ? 'Hạn chế' : 'Restricted',
      action: isVi ? 'Thay Đổi Cấu Hình Tổ Chức & Tham Số Chung' : 'Corporate Settings & Global Policies',
    },
  ];

  const grantedCount = Object.values(permissions).filter(Boolean).length;

  return (
    <ShowcaseCard
      title={isVi ? 'Ma trận phân quyền Casbin RBAC' : 'Role-Based Permission Matrix'}
      headerRight={
        <span className="font-mono tabular-nums text-[12px] text-[#6B7487]">
          {grantedCount}/{roles.length} {isVi ? 'quyền hoạt động' : 'policies active'}
        </span>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Summary Card */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-slate-900/[0.08] text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#F5F7FA] border border-slate-900/[0.08] flex items-center justify-center mb-4">
            <QuantumShieldGraphic className="w-8 h-8 text-[#111827]" />
          </div>

          <p className="text-[14px] font-semibold text-[#111827]">
            {isVi ? 'Phân quyền đa tầng linh hoạt' : 'Multi-tier enterprise access'}
          </p>
          <p className="text-[12px] text-[#6B7487] mt-1.5 leading-relaxed max-w-xs">
            {isVi
              ? 'Phân tách rành mạch quyền hạn giữa lãnh đạo, quản lý và nhân viên trên từng phân hệ.'
              : 'Clear separation of duties across executives, managers, and staff per workspace module.'}
          </p>

          <div className="mt-5 pt-4 border-t border-slate-900/[0.06] w-full flex items-center justify-center gap-2 text-[12px] text-[#16A34A] font-medium">
            <CheckIcon className="w-3.5 h-3.5" />
            <span>{isVi ? 'Đồng bộ tức thì toàn hệ thống' : 'Enforced across all tenants'}</span>
          </div>
        </div>

        {/* Right Matrix */}
        <div className="lg:col-span-8 p-4 sm:p-5 rounded-xl bg-white border border-slate-900/[0.08] space-y-2.5">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-900/[0.06]">
            <div>
              <span className="text-[13px] font-semibold text-[#111827]">
                {isVi ? 'Mô phỏng phân quyền theo vai trò' : 'Interactive role policy simulator'}
              </span>
              <p className="text-[12px] text-[#6B7487]">
                {isVi
                  ? 'Nhấp vào từng dòng để cấp hoặc thu hồi quyền hạn'
                  : 'Select any row to toggle access scope'}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {roles.map((rule) => {
              const isAllowed = permissions[rule.key];
              return (
                <button
                  type="button"
                  key={rule.key}
                  onClick={() => togglePermission(rule.key)}
                  className={`w-full text-left p-3 rounded-xl border flex items-center justify-between gap-3 transition-colors duration-150 cursor-pointer ${
                    isAllowed
                      ? 'bg-[#F5F7FA] border-slate-900/[0.12]'
                      : 'bg-white border-slate-900/[0.06] opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[13px] font-medium text-[#111827]">
                        {rule.role}
                      </span>
                      <span className="text-[11px] px-1.5 py-0.5 rounded bg-white border border-slate-900/[0.08] text-[#6B7487]">
                        {rule.roleBadge}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#4B5565] mt-0.5 truncate">
                      {rule.action}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <span
                      className={`font-mono text-[11px] font-medium ${
                        isAllowed ? 'text-[#16A34A]' : 'text-[#6B7487]'
                      }`}
                    >
                      {isVi
                        ? isAllowed
                          ? 'Đã cấp'
                          : 'Từ chối'
                        : isAllowed
                        ? 'Allow'
                        : 'Deny'}
                    </span>
                    <div
                      className={`w-8 h-4.5 rounded-full p-0.5 transition-colors ${
                        isAllowed ? 'bg-[#16A34A]' : 'bg-slate-300'
                      }`}
                    >
                      <div
                        className={`w-3.5 h-3.5 rounded-full bg-white transition-transform duration-150 ${
                          isAllowed ? 'translate-x-3.5' : 'translate-x-0'
                        }`}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </ShowcaseCard>
  );
}
