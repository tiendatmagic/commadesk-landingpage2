'use client';

import React, { useState } from 'react';
import {
  InboxIcon,
  HandshakeIcon,
  TrendingUpIcon,
  HourglassIcon,
} from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface InteractiveApprovalsAnalyticsProps {
  isVi: boolean;
}

export function InteractiveApprovalsAnalytics({ isVi }: InteractiveApprovalsAnalyticsProps) {
  const [activeTab, setActiveTab] = useState<'inbox' | 'delegation' | 'executive'>('inbox');
  const [approvedIds, setApprovedIds] = useState<string[]>([]);

  const tabs = [
    {
      id: 'inbox' as const,
      label: isVi ? 'Hàng đợi duyệt' : 'Approval inbox',
      icon: <InboxIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'delegation' as const,
      label: isVi ? 'Ủy quyền' : 'Delegation',
      icon: <HandshakeIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'executive' as const,
      label: isVi ? 'KPI lãnh đạo' : 'Executive KPIs',
      icon: <TrendingUpIcon className="w-3.5 h-3.5" />,
    },
  ];

  const approvalRequests = [
    {
      id: 'REQ-HR-8812',
      type: isVi ? 'Đơn nghỉ phép thường niên' : 'Annual paid leave request',
      requester: isVi ? 'Phạm Minh Trang (UI/UX Lead)' : 'Trang Pham (UI/UX Lead)',
      details: isVi ? '3 ngày (12/10 - 15/10/2026) · Đã bàn giao sprint' : '3 days · Sprint handoff confirmed',
      slaRemaining: isVi ? '4 giờ còn lại' : '4h remaining',
      amount: null,
    },
    {
      id: 'REQ-KHO-4190',
      type: isVi ? 'Phiếu xuất cấp máy trạm kỹ thuật' : 'Workstation hardware dispatch',
      requester: isVi ? 'Nguyễn Hải Đăng (DevOps)' : 'Dang Nguyen (DevOps)',
      details: isVi ? 'Dell Precision 3660 + 2 Màn hình 4K' : 'Dell Precision 3660 + Dual 4K displays',
      slaRemaining: isVi ? '8 giờ còn lại' : '8h remaining',
      amount: '58,400,000 đ',
    },
    {
      id: 'REQ-TC-1029',
      type: isVi ? 'Đề xuất gia hạn phần mềm văn phòng' : 'Annual office software renewal',
      requester: isVi ? 'Vũ Đức Thành (Trưởng phòng IT)' : 'Thanh Vu (IT Manager)',
      details: isVi ? 'Gia hạn gói sử dụng cho 120 nhân sự Q4' : 'Annual seat renewal for 120 staff',
      slaRemaining: isVi ? '12 giờ còn lại' : '12h remaining',
      amount: '125,000,000 đ',
    },
  ];

  const executiveKPIs = [
    {
      title: isVi ? 'Tốc độ xử lý duyệt' : 'Decision velocity',
      value: '2.4h',
      target: isVi ? 'Mục tiêu: < 4h' : 'Target: < 4h',
    },
    {
      title: isVi ? 'Hoàn thành Sprint' : 'Sprint delivery',
      value: '96.8%',
      target: isVi ? '+14% so với quý trước' : '+14% vs last quarter',
    },
    {
      title: isVi ? 'Tỷ lệ trễ hạn' : 'Overdue rate',
      value: '0.4%',
      target: isVi ? 'Trong ngưỡng an toàn' : 'Within threshold',
    },
  ];

  const handleApprove = (id: string) => {
    setApprovedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  return (
    <ShowcaseCard
      title={isVi ? 'Trung tâm phê duyệt & KPI điều hành' : 'Unified Approvals & Executive KPIs'}
      headerRight={
        <ShowcaseTabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      }
    >
      {activeTab === 'inbox' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-900/[0.06]">
            <span className="text-[13px] font-medium text-[#111827]">
              {isVi ? '3 yêu cầu đang chờ phê duyệt' : '3 pending requests awaiting sign-off'}
            </span>
            <span className="font-mono tabular-nums text-[12px] text-[#D97706] font-medium">
              SLA 100% on-time
            </span>
          </div>

          <div className="space-y-2.5">
            {approvalRequests.map((req) => {
              const isApproved = approvedIds.includes(req.id);
              return (
                <div
                  key={req.id}
                  className="p-3.5 rounded-xl bg-white border border-slate-900/[0.08] space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[12px] font-mono tabular-nums font-medium text-[#111827]">
                        {req.id}
                      </span>
                      <span className="text-[13px] font-medium text-[#4B5565] truncate">
                        · {req.type}
                      </span>
                    </div>
                    {req.amount && (
                      <span className="font-mono tabular-nums text-[12.5px] font-semibold text-[#111827] shrink-0">
                        {req.amount}
                      </span>
                    )}
                  </div>

                  <div className="text-[12px] text-[#4B5565]">
                    <span className="font-medium text-[#111827]">{req.requester}</span> · {req.details}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-900/[0.06]">
                    <span className="inline-flex items-center gap-1.5 font-mono tabular-nums text-[11px] text-[#D97706]">
                      <HourglassIcon className="w-3 h-3" />
                      <span>{req.slaRemaining}</span>
                    </span>
                    {isApproved ? (
                      <span className="font-mono text-[12px] font-medium text-[#16A34A]">
                        {isVi ? 'Đã phê duyệt' : 'Approved'}
                      </span>
                    ) : (
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          className="px-2.5 h-7 text-[12px] font-medium rounded-md border border-slate-900/[0.1] text-[#4B5565] hover:bg-[#F5F7FA] transition-colors cursor-pointer"
                        >
                          {isVi ? 'Từ chối' : 'Reject'}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleApprove(req.id)}
                          className="px-3 h-7 text-[12px] font-medium rounded-md bg-[#FF4D38] hover:bg-[#E03E2A] text-white transition-colors cursor-pointer"
                        >
                          {isVi ? 'Phê duyệt' : 'Approve'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === 'delegation' && (
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-900/[0.08] space-y-1.5">
            <span className="text-[13px] font-semibold text-[#111827]">
              {isVi ? 'Ủy quyền phê duyệt theo hạn mức' : 'Threshold-based approval delegation'}
            </span>
            <p className="text-[12.5px] text-[#4B5565] leading-relaxed">
              {isVi
                ? 'Khi lãnh đạo vắng mặt, hệ thống chuyển tiếp quyền phê duyệt cho người được ủy nhiệm kèm giới hạn hạn mức và thời gian hiệu lực.'
                : 'Delegate approval authority to designated deputies with financial limits and explicit date windows.'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-900/[0.08] space-y-2.5">
            <div className="flex items-center justify-between text-[13px]">
              <span className="font-medium text-[#111827]">
                {isVi ? 'Quy tắc đang áp dụng' : 'Active delegation rule'}
              </span>
              <span className="font-mono text-[12px] font-medium text-[#16A34A]">
                {isVi ? 'Đang kích hoạt' : 'Active'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] text-[#4B5565] pt-2 border-t border-slate-900/[0.06]">
              <div>
                <span className="text-[#6B7487]">{isVi ? 'Người ủy quyền: ' : 'Delegator: '}</span>
                <span className="font-medium text-[#111827]">
                  {isVi ? 'Lê Quang Huy (COO)' : 'Huy Le (COO)'}
                </span>
              </div>
              <div>
                <span className="text-[#6B7487]">{isVi ? 'Người nhận: ' : 'Delegatee: '}</span>
                <span className="font-medium text-[#111827]">
                  {isVi ? 'Trần Văn Nam (Phó Ban)' : 'Nam Tran (Deputy)'}
                </span>
              </div>
            </div>
            <div className="font-mono tabular-nums text-[11px] text-[#6B7487] pt-1">
              {isVi ? 'Hạn mức: < 100,000,000 đ · 10/10 - 20/10/2026' : 'Limit: < $5,000 · Oct 10 - Oct 20, 2026'}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'executive' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {executiveKPIs.map((kpi, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-900/[0.08] text-left">
                <div className="text-[12px] text-[#6B7487]">{kpi.title}</div>
                <div className="font-mono tabular-nums text-[24px] font-semibold text-[#111827] mt-1">
                  {kpi.value}
                </div>
                <div className="text-[12px] font-medium text-[#16A34A] mt-0.5">{kpi.target}</div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-900/[0.08]">
            <div className="text-[13px] font-medium text-[#111827] mb-2.5">
              {isVi ? 'Tỷ lệ hoàn thành mục tiêu toàn doanh nghiệp' : 'Enterprise milestone completion'}
            </div>
            <div className="flex h-2.5 rounded-full overflow-hidden mb-3 bg-[#ECEFF4]">
              <div className="bg-[#16A34A]" style={{ width: '84%' }} />
              <div className="bg-slate-400" style={{ width: '12%' }} />
              <div className="bg-[#FF4D38]" style={{ width: '4%' }} />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono tabular-nums text-[12px] text-[#4B5565]">
              <span>84% {isVi ? 'đúng hạn' : 'on-time'}</span>
              <span>12% {isVi ? 'đang thực hiện' : 'in progress'}</span>
              <span className="text-[#C8321F]">4% {isVi ? 'cần chú ý' : 'at risk'}</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-3 pt-3 border-t border-slate-900/[0.06] flex flex-wrap items-center justify-between gap-2 text-[12px] text-[#6B7487]">
        <span>
          {isVi
            ? 'Lưu trữ chữ ký duyệt và lịch sử thay đổi theo quy định'
            : 'Signed approvals and change history logged'}
        </span>
        <span className="font-mono text-[#111827] font-medium">
          {isVi ? 'Chính sách: Đã áp dụng' : 'Policy: Enforced'}
        </span>
      </div>
    </ShowcaseCard>
  );
}
