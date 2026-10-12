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
  ClockIcon,
} from '@/components/ui/UIIcons';

interface Props {
  isVi?: boolean;
}

export function InteractiveDeploymentHub({ isVi }: Props) {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile' | 'cloud' | 'onprem'>('desktop');

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100/60 p-4 sm:p-6 border border-slate-200/80">
      {/* Top Controls: Tab Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            {isVi ? 'Hệ Sinh Thái Ứng Dụng Đa Nền Tảng' : 'Multi-Platform App Ecosystem'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab('desktop')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'desktop'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <LaptopIcon className="w-3.5 h-3.5" />
            <span>{isVi ? 'Máy Tính (Desktop)' : 'Desktop App'}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('mobile')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'mobile'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <SmartphoneIcon className="w-3.5 h-3.5" />
            <span>{isVi ? 'Di Động (Mobile)' : 'Mobile App'}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cloud')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'cloud'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <GlobeIcon className="w-3.5 h-3.5" />
            <span>{isVi ? 'Đám Mây (Web Cloud)' : 'Web Cloud'}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('onprem')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'onprem'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <ShieldCheckIcon className="w-3.5 h-3.5" />
            <span>{isVi ? 'Máy Chủ Riêng (On-Premises)' : 'Private Server'}</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="min-h-[340px] flex items-center justify-center">
        {/* Tab 1: Ứng dụng Desktop */}
        {activeTab === 'desktop' && (
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-md p-5 sm:p-7 space-y-5 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold text-sm">
                  <WindowsIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {isVi ? 'Ứng Dụng Làm Việc Chuyên Dụng Trên Máy Tính' : 'Dedicated Desktop Workstation App'}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {isVi
                      ? 'Dành cho Windows 10/11 & macOS • Tối ưu thao tác nhanh • Đa cửa sổ'
                      : 'Windows 10/11 & macOS • Fast Operations • Multi-Window Workspace'}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {isVi ? 'Sẵn sàng sử dụng' : 'Ready to Install'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">
                  {isVi ? 'Cài đặt đơn giản' : 'Installation'}
                </span>
                <p className="text-sm font-bold text-slate-800">
                  {isVi ? 'Tải về & Chạy ngay' : 'Download & Run'}
                </p>
                <p className="text-[11px] text-slate-500">
                  {isVi
                    ? 'Bộ cài đóng gói hoàn chỉnh, không cần cấu hình phức tạp'
                    : 'Self-contained installer with no complex setup needed'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">
                  {isVi ? 'Tự động nâng cấp' : 'Auto-Updates'}
                </span>
                <p className="text-sm font-bold text-slate-800">
                  {isVi ? 'Cập nhật ngầm tức thì' : 'Instant Silent Update'}
                </p>
                <p className="text-[11px] text-slate-500">
                  {isVi
                    ? 'Tự động cập nhật tính năng mới mà không làm gián đoạn công việc'
                    : 'Receives latest features automatically without interrupting work'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">
                  {isVi ? 'Đồng bộ dữ liệu' : 'Synchronization'}
                </span>
                <p className="text-sm font-bold text-slate-800">
                  {isVi ? 'Đồng bộ thời gian thực' : 'Real-Time Sync'}
                </p>
                <p className="text-[11px] text-slate-500">
                  {isVi
                    ? 'Nhận tin nhắn, cảnh báo phê duyệt và giao việc ngay lập tức'
                    : 'Instant task alerts, messages, and approval notifications'}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 border-t border-slate-100">
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                {isVi
                  ? 'Hỗ trợ phím tắt tiện lợi, thông báo popup nổi trên màn hình làm việc'
                  : 'Desktop shortcut support, rich popup notifications over other apps'}
              </span>
              <span className="font-semibold text-slate-700">
                {isVi ? 'Tương thích: Windows 10/11 & macOS' : 'Compatible: Windows 10/11 & macOS'}
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Ứng dụng Di động */}
        {activeTab === 'mobile' && (
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-md p-5 sm:p-7 space-y-5 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-sm">
                  <SmartphoneIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {isVi ? 'Ứng Dụng Di Động Mọi Lúc Mọi Nơi' : 'Mobile App for On-the-Go Teams'}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {isVi
                      ? 'Dành cho iOS & Android • Chấm công GPS • Phê duyệt 1 chạm'
                      : 'Available on iOS & Android • GPS Check-in • 1-Tap Approvals'}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                App Store &amp; Google Play
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                  <MapPinIcon className="w-5 h-5 text-emerald-600" />
                </div>
                <h5 className="text-xs font-bold text-slate-900 mb-1">
                  {isVi ? 'Chấm Công Định Vị GPS' : 'GPS Mobile Check-in'}
                </h5>
                <p className="text-[11px] text-slate-500">
                  {isVi
                    ? 'Chấm công chính xác tại đúng văn phòng, chi nhánh hoặc địa điểm công tác'
                    : 'Accurate check-in tied to verified company geofences and branches'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2">
                  <CheckIcon className="w-5 h-5 text-indigo-600" />
                </div>
                <h5 className="text-xs font-bold text-slate-900 mb-1">
                  {isVi ? 'Phê Duyệt 1 Chạm' : '1-Tap Approvals'}
                </h5>
                <p className="text-[11px] text-slate-500">
                  {isVi
                    ? 'Lãnh đạo duyệt đơn nghỉ phép, tạm ứng và phiếu đề xuất ngay trên điện thoại'
                    : 'Leaders approve leave requests, vouchers, and tasks straight from mobile'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
                  <BellIcon className="w-5 h-5 text-amber-600" />
                </div>
                <h5 className="text-xs font-bold text-slate-900 mb-1">
                  {isVi ? 'Thông Báo Nhắc Việc' : 'Push Notifications'}
                </h5>
                <p className="text-[11px] text-slate-500">
                  {isVi
                    ? 'Nhận thông báo khẩn cấp, nhắc hạn công việc và trao đổi nội bộ tức thì'
                    : 'Instant deadline reminders, urgent company announcements, and team chat'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Đám Mây Trực Tuyến */}
        {activeTab === 'cloud' && (
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-md p-5 sm:p-7 space-y-5 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-bold text-sm">
                  <GlobeIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {isVi ? 'Nền Tảng Đám Mây Doanh Nghiệp (Cloud SaaS)' : 'Enterprise Cloud SaaS Platform'}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {isVi
                      ? 'Truy cập mọi nơi qua trình duyệt web • Khởi tạo dùng ngay • Không cần IT bảo trì'
                      : 'Browser access anywhere • Turnkey setup • Zero IT maintenance'}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
                {isVi ? 'Triển khai trong ngày' : 'Same-Day Rollout'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">
                  {isVi ? 'Tiện lợi' : 'Accessibility'}
                </span>
                <p className="text-sm font-bold text-slate-800">
                  {isVi ? 'Dùng ngay trên Web' : 'Browser Native'}
                </p>
                <p className="text-[11px] text-slate-500">
                  {isVi
                    ? 'Đăng nhập an toàn qua Chrome, Safari, Edge mà không cần cài đặt phần mềm'
                    : 'Secure access via Chrome, Safari, or Edge without local installs'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">
                  {isVi ? 'Bảo toàn dữ liệu' : 'Data Protection'}
                </span>
                <p className="text-sm font-bold text-slate-800">
                  {isVi ? 'Sao lưu tự động 24/7' : '24/7 Auto Backup'}
                </p>
                <p className="text-[11px] text-slate-500">
                  {isVi
                    ? 'Dữ liệu được mã hóa và sao lưu định kỳ, phòng ngừa rủi ro mất mát'
                    : 'Encrypted multi-region backup protecting against any data loss'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">
                  {isVi ? 'Quy mô mở rộng' : 'Scalability'}
                </span>
                <p className="text-sm font-bold text-slate-800">
                  {isVi ? 'Không giới hạn quy mô' : 'Unlimited Scale'}
                </p>
                <p className="text-[11px] text-slate-500">
                  {isVi
                    ? 'Dễ dàng mở rộng từ vài chục đến hàng nghìn nhân sự tại nhiều chi nhánh'
                    : 'Effortlessly scale from dozens to thousands of staff across branches'}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 border-t border-slate-100">
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                {isVi
                  ? 'Phù hợp cho doanh nghiệp muốn chuyển đổi số nhanh, tiết kiệm tối đa chi phí'
                  : 'Ideal for enterprises seeking fast digital transformation with lower overhead'}
              </span>
              <span className="font-semibold text-slate-700">
                {isVi ? 'Độ sẵn sàng: 99.9%' : 'Availability: 99.9%'}
              </span>
            </div>
          </div>
        )}

        {/* Tab 4: Máy Chủ Riêng */}
        {activeTab === 'onprem' && (
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-md p-5 sm:p-7 space-y-5 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-sm">
                  <ShieldCheckIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {isVi
                      ? 'Cài Đặt Trên Hạ Tầng Máy Chủ Riêng (On-Premises)'
                      : 'Private On-Premises Server Deployment'}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {isVi
                      ? 'Dành cho Khối Hành chính, Ngân hàng & Tập đoàn lớn • Sở hữu 100% dữ liệu'
                      : 'For Public Sector, Banking & Large Corporations • 100% Data Sovereignty'}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                {isVi ? 'Bảo mật tuyệt đối' : 'Maximum Security'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">
                  {isVi ? 'Chủ quyền dữ liệu' : 'Data Sovereignty'}
                </span>
                <p className="text-sm font-bold text-slate-800">
                  {isVi ? '100% Máy chủ nội bộ' : '100% In-House'}
                </p>
                <p className="text-[11px] text-slate-500">
                  {isVi
                    ? 'Dữ liệu được lưu trữ hoàn toàn tại trung tâm dữ liệu của tổ chức'
                    : 'Data resides exclusively within your organization’s private data center'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">
                  {isVi ? 'Mạng nội bộ' : 'Network Isolation'}
                </span>
                <p className="text-sm font-bold text-slate-800">
                  {isVi ? 'Vận hành độc lập' : 'Air-Gapped Capable'}
                </p>
                <p className="text-[11px] text-slate-500">
                  {isVi
                    ? 'Hoạt động ổn định trong mạng nội bộ (LAN), không phụ thuộc kết nối Internet ngoài'
                    : 'Functions seamlessly in offline LAN networks without external dependencies'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">
                  {isVi ? 'Hỗ trợ kỹ thuật' : 'Dedicated Support'}
                </span>
                <p className="text-sm font-bold text-slate-800">
                  {isVi ? 'Đồng hành chuyên sâu' : 'Specialized Onboarding'}
                </p>
                <p className="text-[11px] text-slate-500">
                  {isVi
                    ? 'Đội ngũ chuyên gia hỗ trợ cài đặt, chuyển giao và đào tạo vận hành tại chỗ'
                    : 'Expert team assists with on-site setup, data migration, and training'}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 border-t border-slate-100">
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                {isVi
                  ? 'Đáp ứng đầy đủ các tiêu chuẩn an toàn thông tin khắt khe của Nhà nước và Ngân hàng'
                  : 'Fully compliant with strict government and banking security compliance mandates'}
              </span>
              <span className="font-semibold text-slate-700">
                {isVi ? 'Tuân thủ: ISO 27001' : 'Compliant: ISO 27001'}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
