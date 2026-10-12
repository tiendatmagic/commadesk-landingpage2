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
  const [filterType, setFilterType] = useState<'all' | 'hr' | 'inventory' | 'finance'>('all');

  const tabs = [
    {
      id: 'inbox' as const,
      label: isVi ? 'Hàng Đợi Duyệt' : 'Approval Inbox',
      icon: <InboxIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'delegation' as const,
      label: isVi ? 'Ủy Quyền' : 'Delegation',
      icon: <HandshakeIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'executive' as const,
      label: isVi ? 'KPI Lãnh Đạo' : 'Executive Radar',
      icon: <TrendingUpIcon className="w-3.5 h-3.5" />,
    },
  ];

  const approvalRequests = [
    {
      id: 'REQ-HR-8812',
      type: isVi ? 'Đơn Nghỉ Phép Thường Niên' : 'Annual Paid Leave Request',
      module: 'HR',
      requester: isVi ? 'Phạm Minh Trang (UI/UX Lead)' : 'Trang Pham (UI/UX Lead)',
      details: isVi ? '3 ngày (12/10 - 15/10/2026) · Đã bàn giao sprint' : '3 Days · Sprint handoff confirmed',
      slaRemaining: '4 giờ còn lại',
      status: 'pending',
      amount: null,
    },
    {
      id: 'REQ-KHO-4190',
      type: isVi ? 'Phiếu Xuất Cấp Máy Trạm Kỹ Thuật' : 'Workstation Hardware Dispatch',
      module: 'Inventory',
      requester: isVi ? 'Nguyễn Hải Đăng (DevOps)' : 'Dang Nguyen (DevOps)',
      details: isVi ? 'Dell Precision 3660 + 2 Màn hình 4K' : 'Dell Precision 3660 + Dual 4K Displays',
      slaRemaining: '8 giờ còn lại',
      status: 'pending',
      amount: '58,400,000 đ',
    },
    {
      id: 'REQ-TC-1029',
      type: isVi ? 'Đề Xuất Mua Bản Quyền Cloud Server' : 'Cloud Infrastructure Subscription',
      module: 'Finance',
      requester: isVi ? 'Vũ Đức Thành (Tech Director)' : 'Thanh Vu (Tech Director)',
      details: isVi ? 'AWS Cluster Node Scaling Q4' : 'AWS Cluster Scaling Q4',
      slaRemaining: '12 giờ còn lại',
      status: 'pending',
      amount: '125,000,000 đ',
    },
  ];

  const executiveKPIs = [
    {
      title: isVi ? 'Tốc Độ Xử Lý Phê Duyệt' : 'Approval Decision Velocity',
      value: '2.4 Giờ',
      target: isVi ? 'Mục tiêu: < 4 Giờ' : 'Target: < 4h',
      status: 'ahead',
    },
    {
      title: isVi ? 'Năng Suất Hoàn Thành Sprint' : 'Sprint Delivery Velocity',
      value: '96.8%',
      target: isVi ? 'Vượt +14% KPI quý' : '+14% Over Target',
      status: 'ahead',
    },
    {
      title: isVi ? 'Rủi Ro Trễ Deadline Dự Án' : 'Deadline Risk Exposure',
      value: '0.4%',
      target: isVi ? 'Mức rủi ro cực thấp' : 'Minimal Risk',
      status: 'safe',
    },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'Trung Tâm Phê Duyệt Hợp Nhất & Radar Lãnh Đạo' : 'Unified Approvals & Executive C-Suite Radar'}
      headerRight={
        <ShowcaseTabBar
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      }
    >

      {activeTab === 'inbox' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-900">
              {isVi ? '3 Yêu cầu đang chờ bạn phê duyệt hôm nay' : '3 Pending Requests Awaiting Your Sign-off'}
            </span>
            <div className="flex items-center gap-1 text-[10px] font-semibold">
              <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                <span>SLA 100% On-time</span>
              </span>
            </div>
          </div>

          <div className="space-y-2.5">
            {approvalRequests.map((req) => (
              <div key={req.id} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-900">{req.id}</span>
                    <span className="text-xs font-semibold text-slate-700">· {req.type}</span>
                  </div>
                  {req.amount && (
                    <span className="text-xs font-extrabold text-[#FF4D38]">{req.amount}</span>
                  )}
                </div>

                <div className="text-[11px] text-slate-600">
                  <span className="font-semibold text-slate-900">{req.requester}</span> · {req.details}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-600">
                    <HourglassIcon className="w-3 h-3" />
                    <span>{req.slaRemaining}</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      className="px-2.5 py-1 text-[11px] font-bold rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
                    >
                      {isVi ? 'Từ chối' : 'Reject'}
                    </button>
                    <button
                      type="button"
                      className="px-3 py-1 text-[11px] font-bold rounded-lg bg-[#FF4D38] text-white shadow-2xs hover:bg-[#e03d29] cursor-pointer"
                    >
                      {isVi ? 'Phê duyệt ngay' : 'Approve'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'delegation' && (
        <div className="space-y-3">
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <span className="text-xs font-bold text-slate-900">
              {isVi ? 'Ủy Quyền Phê Duyệt Thông Minh Khi Vắng Mặt' : 'Smart Approval Delegation Engine'}
            </span>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              {isVi
                ? 'Khi đi công tác hoặc nghỉ phép, hệ thống tự động chuyển tiếp quyền phê duyệt cho người được ủy nhiệm kèm giới hạn hạn mức tài chính và khoảng thời gian hiệu lực.'
                : 'Automatically delegate decision authority to designated deputies with financial threshold constraints and strict date windows.'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">{isVi ? 'Ủy quyền hiện hành: ' : 'Active Rule: '}</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                {isVi ? 'Đang kích hoạt' : 'Active'}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1 border-t border-slate-100">
              <div>
                <span className="text-slate-400">{isVi ? 'Người ủy quyền: ' : 'Delegator: '}</span>
                <span className="font-semibold text-slate-800">{isVi ? 'Lê Quang Huy (Giám đốc Vận hành)' : 'Huy Le (COO)'}</span>
              </div>
              <div>
                <span className="text-slate-400">{isVi ? 'Người nhận quyền: ' : 'Delegatee: '}</span>
                <span className="font-semibold text-slate-800">{isVi ? 'Trần Văn Nam (Phó Ban)' : 'Nam Tran (Deputy)'}</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-400 pt-1">
              {isVi ? 'Hạn mức: Dưới 100 Triệu VNĐ · Hiệu lực: 10/10 - 20/10/2026' : 'Threshold: Under $5,000 · Period: Oct 10 - Oct 20, 2026'}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'executive' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {executiveKPIs.map((kpi, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
                <div className="text-[10px] text-slate-500 font-semibold">{kpi.title}</div>
                <div className="text-lg font-extrabold text-[#FF4D38] mt-1">{kpi.value}</div>
                <div className="text-[10px] font-bold text-emerald-600 mt-0.5">{kpi.target}</div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-xs font-bold text-slate-900 mb-2">
              {isVi ? 'Tỷ Lệ Hoàn Thành Nhiệm Vụ Toàn Công Ty' : 'Enterprise Milestone Health Pulse'}
            </div>
            <div className="flex h-3 rounded-full overflow-hidden mb-2">
              <div className="bg-emerald-500" style={{ width: '84%' }} title="Hoàn thành đúng hạn (84%)"></div>
              <div className="bg-blue-500" style={{ width: '12%' }} title="Đang trong hạn (12%)"></div>
              <div className="bg-amber-400" style={{ width: '4%' }} title="Cần chú ý (4%)"></div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
              <span className="text-emerald-700 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                <span>84% {isVi ? 'Đúng hạn tuyệt đối' : 'On-time Delivery'}</span>
              </span>
              <span className="text-blue-700 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                <span>12% {isVi ? 'Đang thực hiện' : 'In Progress'}</span>
              </span>
              <span className="text-amber-700 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                <span>4% {isVi ? 'Cảnh báo rủi ro' : 'At Risk'}</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Status Ticker */}
      <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          {isVi ? 'Tích hợp chữ ký số và nhật ký kiểm toán không thể sửa đổi (Immutable Audit)' : 'Cryptographic digital signatures & immutable audit trails'}
        </span>
        <span className="font-semibold text-slate-700">{isVi ? 'Chính sách: Đã kích hoạt' : 'Access Policy: Enforced'}</span>
      </div>
    </ShowcaseCard>
  );
}
