'use client';

import React, { useState } from 'react';
import {
  LaptopIcon,
  SmartphoneIcon,
  GlobeIcon,
  ShieldCheckIcon,
  WindowsIcon,
  MapPinIcon,
  BellIcon,
  CheckIcon,
} from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface Props {
  isVi?: boolean;
}

export function InteractiveDeploymentHub({ isVi }: Props) {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile' | 'cloud' | 'onprem'>('desktop');

  const tabs = [
    {
      id: 'desktop' as const,
      label: isVi ? 'Máy tính' : 'Desktop',
      icon: <LaptopIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'mobile' as const,
      label: isVi ? 'Di động' : 'Mobile',
      icon: <SmartphoneIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'cloud' as const,
      label: isVi ? 'Đám mây' : 'Cloud',
      icon: <GlobeIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'onprem' as const,
      label: isVi ? 'Máy chủ riêng' : 'On-prem',
      icon: <ShieldCheckIcon className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'Ứng dụng & Mô hình triển khai' : 'Multi-Platform Deployment Models'}
      headerRight={
        <ShowcaseTabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      }
    >
      <div className="min-h-[300px] flex items-center justify-center">
        {activeTab === 'desktop' && (
          <div className="w-full bg-white rounded-xl border border-slate-900/[0.08] p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-900/[0.06]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#F5F7FA] border border-slate-900/[0.08] text-[#111827] flex items-center justify-center">
                  <WindowsIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#111827]">
                    {isVi ? 'Ứng dụng máy tính Windows & macOS' : 'Dedicated desktop client'}
                  </h4>
                  <p className="text-[12px] text-[#6B7487]">
                    {isVi
                      ? 'Windows 10/11 & macOS · Đa cửa sổ · Thông báo tức thì'
                      : 'Windows 10/11 & macOS · Multi-window workspace'}
                  </p>
                </div>
              </div>
              <span className="font-mono text-[12px] font-medium text-[#16A34A]">
                {isVi ? 'Sẵn sàng cài đặt' : 'Ready to install'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  meta: isVi ? 'Cài đặt' : 'Installation',
                  title: isVi ? 'Tải về & chạy ngay' : 'Download & run',
                  desc: isVi
                    ? 'Bộ cài đóng gói hoàn chỉnh, không cần cấu hình phức tạp'
                    : 'Self-contained installer without manual dependencies',
                },
                {
                  meta: isVi ? 'Nâng cấp' : 'Updates',
                  title: isVi ? 'Cập nhật tự động' : 'Silent updates',
                  desc: isVi
                    ? 'Nhận bản vá và tính năng mới không làm gián đoạn công việc'
                    : 'Background updates without interrupting active sessions',
                },
                {
                  meta: isVi ? 'Đồng bộ' : 'Sync',
                  title: isVi ? 'Thông báo thời gian thực' : 'Real-time alerts',
                  desc: isVi
                    ? 'Nhận tin nhắn, cảnh báo phê duyệt và giao việc tức thì'
                    : 'Instant desktop alerts for approvals, chat, and tasks',
                },
              ].map((c, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.06] space-y-1">
                  <span className="font-mono text-[11px] text-[#6B7487]">{c.meta}</span>
                  <p className="text-[13.5px] font-semibold text-[#111827]">{c.title}</p>
                  <p className="text-[12px] text-[#4B5565] leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[12px] text-[#6B7487] border-t border-slate-900/[0.06]">
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-3.5 h-3.5 text-[#16A34A]" />
                {isVi
                  ? 'Hỗ trợ phím tắt nhanh và thông báo hệ thống'
                  : 'Keyboard shortcuts and native OS notifications'}
              </span>
              <span className="font-mono font-medium text-[#111827]">
                Windows 10/11 &amp; macOS
              </span>
            </div>
          </div>
        )}

        {activeTab === 'mobile' && (
          <div className="w-full bg-white rounded-xl border border-slate-900/[0.08] p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-900/[0.06]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#F5F7FA] border border-slate-900/[0.08] text-[#111827] flex items-center justify-center">
                  <SmartphoneIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#111827]">
                    {isVi ? 'Ứng dụng di động iOS & Android' : 'Mobile app for field & office teams'}
                  </h4>
                  <p className="text-[12px] text-[#6B7487]">
                    {isVi
                      ? 'Chấm công GPS · Phê duyệt 1 chạm · Trao đổi nội bộ'
                      : 'GPS check-in · 1-tap approvals · Team messaging'}
                  </p>
                </div>
              </div>
              <span className="font-mono text-[12px] text-[#111827] font-medium">
                iOS &amp; Android
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  icon: MapPinIcon,
                  title: isVi ? 'Chấm công định vị GPS' : 'GPS geofence check-in',
                  desc: isVi
                    ? 'Xác thực vị trí tại đúng văn phòng, chi nhánh hoặc điểm công tác'
                    : 'Verify attendance within authorized branch geofences',
                },
                {
                  icon: CheckIcon,
                  title: isVi ? 'Phê duyệt 1 chạm' : '1-tap approvals',
                  desc: isVi
                    ? 'Duyệt đơn nghỉ phép, tạm ứng và phiếu kho ngay trên điện thoại'
                    : 'Review and sign off leave or procurement vouchers on mobile',
                },
                {
                  icon: BellIcon,
                  title: isVi ? 'Thông báo nhắc việc' : 'Push notifications',
                  desc: isVi
                    ? 'Nhận nhắc hạn công việc và thông báo khẩn từ điều hành'
                    : 'Deadline alerts, announcements, and channel replies',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.06] text-left">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-900/[0.08] text-[#111827] flex items-center justify-center mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h5 className="text-[13.5px] font-semibold text-[#111827] mb-1">{item.title}</h5>
                    <p className="text-[12px] text-[#4B5565] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'cloud' && (
          <div className="w-full bg-white rounded-xl border border-slate-900/[0.08] p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-900/[0.06]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#F5F7FA] border border-slate-900/[0.08] text-[#111827] flex items-center justify-center">
                  <GlobeIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#111827]">
                    {isVi ? 'Nền tảng Cloud SaaS trực tuyến' : 'Enterprise Cloud SaaS'}
                  </h4>
                  <p className="text-[12px] text-[#6B7487]">
                    {isVi
                      ? 'Truy cập qua trình duyệt · Khởi tạo trong ngày · Không cần bảo trì hạ tầng'
                      : 'Browser access · Same-day onboarding · Managed backups'}
                  </p>
                </div>
              </div>
              <span className="font-mono tabular-nums text-[12px] font-medium text-[#16A34A]">
                {isVi ? 'Đám mây trực tuyến' : 'Cloud workspace'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  meta: isVi ? 'Truy cập' : 'Access',
                  title: isVi ? 'Dùng ngay trên Web' : 'Browser native',
                  desc: isVi
                    ? 'Hoạt động trên Chrome, Safari, Edge không cần cài đặt'
                    : 'Run on Chrome, Safari, or Edge without local setup',
                },
                {
                  meta: isVi ? 'Sao lưu' : 'Backups',
                  title: isVi ? 'Sao lưu tự động hàng ngày' : 'Scheduled backups',
                  desc: isVi
                    ? 'Lưu trữ dự phòng định kỳ giúp bảo vệ dữ liệu vận hành'
                    : 'Automated daily snapshots to protect operational records',
                },
                {
                  meta: isVi ? 'Mở rộng' : 'Scale',
                  title: isVi ? 'Đa chi nhánh linh hoạt' : 'Multi-branch scale',
                  desc: isVi
                    ? 'Mở rộng từ vài chục đến hàng nghìn tài khoản theo nhu cầu'
                    : 'Scale from small teams to multi-thousand staff groups',
                },
              ].map((c, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.06] space-y-1">
                  <span className="font-mono text-[11px] text-[#6B7487]">{c.meta}</span>
                  <p className="text-[13.5px] font-semibold text-[#111827]">{c.title}</p>
                  <p className="text-[12px] text-[#4B5565] leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'onprem' && (
          <div className="w-full bg-white rounded-xl border border-slate-900/[0.08] p-5 sm:p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-900/[0.06]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#F5F7FA] border border-slate-900/[0.08] text-[#111827] flex items-center justify-center">
                  <ShieldCheckIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#111827]">
                    {isVi ? 'Triển khai máy chủ riêng (On-Premises)' : 'Private On-Premises Server'}
                  </h4>
                  <p className="text-[12px] text-[#6B7487]">
                    {isVi
                      ? 'Dành cho cơ quan hành chính, ngân hàng & tập đoàn làm chủ 100% dữ liệu'
                      : 'For public sector, banking & regulated enterprises requiring full data ownership'}
                  </p>
                </div>
              </div>
              <span className="font-mono text-[12px] font-medium text-[#111827]">
                {isVi ? 'Mạng nội bộ' : 'Private network'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  meta: isVi ? 'Chủ quyền' : 'Sovereignty',
                  title: isVi ? '100% máy chủ nội bộ' : '100% in-house',
                  desc: isVi
                    ? 'Toàn bộ dữ liệu lưu trữ tại trung tâm dữ liệu của tổ chức'
                    : 'All data stays within your private infrastructure',
                },
                {
                  meta: isVi ? 'Cô lập mạng' : 'Isolation',
                  title: isVi ? 'Vận hành mạng LAN' : 'Air-gapped LAN',
                  desc: isVi
                    ? 'Hoạt động ổn định trong mạng nội bộ không cần kết nối ngoài'
                    : 'Operates inside restricted corporate networks',
                },
                {
                  meta: isVi ? 'Chuyển giao' : 'Onboarding',
                  title: isVi ? 'Đồng hành triển khai' : 'Dedicated setup',
                  desc: isVi
                    ? 'Đội ngũ kỹ thuật hỗ trợ cài đặt, chuyển đổi dữ liệu và đào tạo'
                    : 'Engineering support for installation and data migration',
                },
              ].map((c, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#F5F7FA] border border-slate-900/[0.06] space-y-1">
                  <span className="font-mono text-[11px] text-[#6B7487]">{c.meta}</span>
                  <p className="text-[13.5px] font-semibold text-[#111827]">{c.title}</p>
                  <p className="text-[12px] text-[#4B5565] leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ShowcaseCard>
  );
}
