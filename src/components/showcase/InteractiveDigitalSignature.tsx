import React, { useState } from 'react';
import Image from 'next/image';
import { FileTextIcon, CheckIcon, PenToolIcon, ShieldCheckIcon } from '@/components/ui/UIIcons';

interface Props {
  isVi?: boolean;
}

export function InteractiveDigitalSignature({ isVi }: Props) {
  const [activeTab, setActiveTab] = useState<'3d-docs' | 'interactive-sign'>('3d-docs');
  const [currentStep, setCurrentStep] = useState<number>(2);
  const [isSigned, setIsSigned] = useState<boolean>(false);

  const handleSign = () => {
    setIsSigned(true);
    setCurrentStep(3);
  };

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100/60 p-2 sm:p-4 border border-slate-200/80">
      {/* Interactive Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2 sm:px-4 pt-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            {isVi ? 'Sổ Văn Bản Số & Ký Số Điện Tử 3D' : '3D Digital Document Registry & e-Signing'}
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200/90 shadow-2xs w-full sm:w-auto justify-center sm:justify-start">
          <button
            onClick={() => setActiveTab('3d-docs')}
            className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-lg transition-all ${
              activeTab === '3d-docs'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-black hover:bg-slate-100'
            }`}
          >
            {isVi ? 'Văn Bản Số 3D' : '3D Document Hub'}
          </button>
          <button
            onClick={() => setActiveTab('interactive-sign')}
            className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'interactive-sign'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-black hover:bg-slate-100'
            }`}
          >
            {isVi ? 'Ký Số & Phê Duyệt' : 'Sign & Review'}
          </button>
        </div>
      </div>

      {/* Tab 1: 3D Digital Document Registry Image Showcase */}
      {activeTab === '3d-docs' && (
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
          <Image
            src="/showcase/tech_operations_documents.webp"
            alt="Futuristic 3D Digital Document Registry and Executive Signing"
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />

          {/* Floating Badge 1: ISO 27001 Certification */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 animate-float bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg max-w-[210px] hidden sm:block">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-[11px] font-bold text-slate-900">
                {isVi ? 'Niêm Phong Số ISO 27001' : 'ISO 27001 Sealed'}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-1">
              <div className="bg-emerald-500 h-full w-[100%] rounded-full animate-pulse"></div>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">
              {isVi ? 'Mã hóa SHA-256 chống làm giả' : 'SHA-256 Tamper-Proof Cryptography'}
            </span>
          </div>

          {/* Floating Badge 2: Multi-Tier Approval */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 animate-float-delayed bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg hidden sm:block">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs">
                <CheckIcon className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900">
                  {isVi ? 'Chữ Ký Số Lãnh Đạo Hợp Pháp' : 'Legal Executive e-Signature'}
                </p>
                <p className="text-[10px] text-rose-600 font-semibold">
                  {isVi ? 'Tuân thủ Nghị định 30/2020/NĐ-CP' : 'Decree 30/2020/ND-CP Standard'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Existing Interactive Signing Interface */}
      {activeTab === 'interactive-sign' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Col: 3D Layered Cryptographic Documents with Red Seal */}
        <div className="lg:col-span-7 relative min-h-[360px] flex items-center justify-center p-4">
          {/* Back document layer */}
          <div className="absolute w-[240px] sm:w-[320px] h-[190px] sm:h-[220px] rounded-2xl bg-slate-100 border border-slate-300 shadow-md transform -rotate-6 translate-y-3 opacity-60"></div>

          {/* Middle document layer */}
          <div className="absolute w-[250px] sm:w-[330px] h-[200px] sm:h-[230px] rounded-2xl bg-white border border-slate-200 shadow-lg transform -rotate-2 translate-y-1 opacity-80"></div>

          {/* Foreground active signed document with holographic border */}
          <div className="relative z-10 w-full max-w-[270px] sm:max-w-[350px] rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl p-4 sm:p-5 transform rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
            {/* Background Holographic Watermark Pattern */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full border-4 border-slate-100 opacity-40 pointer-events-none flex items-center justify-center font-mono text-[9px] text-slate-300 font-bold rotate-12">
              COMMADESK ENCRYPTED
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs">
                  <FileTextIcon className="w-3.5 h-3.5" />
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900">DOC-2026-HQ-882</p>
                  <p className="text-[10px] text-slate-500">
                    {isVi ? 'Chỉ thị điều hành chính thức' : 'Official Executive Directive'}
                  </p>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${isSigned ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                {isVi ? (isSigned ? 'ĐÃ KÝ XÁC THỰC' : 'CHỜ KÝ SỐ') : (isSigned ? 'VERIFIED SIGNED' : 'PENDING SIGNATURE')}
              </span>
            </div>

            <p className="text-[11px] text-slate-600 line-clamp-3 leading-relaxed mb-4 relative z-10">
              {isVi
                ? 'Quyết định ban hành quy chế vận hành số hóa liên phòng ban, bảo mật văn bản theo tiêu chuẩn ISO 27001 và phân quyền đa tầng linh hoạt.'
                : 'Executive order on digital inter-departmental operations, confidential document dispatching under ISO 27001, and multi-tier flexible permissions.'}
            </p>

            {/* Red Cryptographic Digital Stamp */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 relative z-10">
              <div className="text-[10px] text-slate-400 font-mono">
                SHA-256: 4f8a...e91c
              </div>

              {/* Glowing Red Stamp */}
              <div className={`relative px-3 py-1.5 rounded-xl border-2 border-dashed border-rose-500 text-rose-600 font-black text-xs uppercase tracking-wider transform -rotate-6 transition-all duration-500 ${isSigned ? 'scale-110 shadow-lg shadow-rose-500/20 bg-rose-50' : 'opacity-80'}`}>
                {isVi ? 'ĐÃ KÝ SỐ' : 'DIGITALLY SIGNED'}
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Interactive 3-Step Approval Pipeline */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                {isVi ? 'Luồng Phê Duyệt Văn Bản Đa Cấp' : 'Multi-Tier Review Pipeline'}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {isVi ? `Bước ${currentStep}/3` : `Step ${currentStep} of 3`}
              </span>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-2.5">
              {[
                { step: 1, role: isVi ? 'Trưởng Phòng Pháp Chế' : 'Legal Counsel Review', done: true, by: 'Sarah M.' },
                { step: 2, role: isVi ? 'Giám Đốc Vận Hành' : 'COO Verification', done: isSigned, by: 'James C.' },
                { step: 3, role: isVi ? 'Tổng Giám Đốc Phê Chuẩn' : 'CEO Final Sign-off', done: isSigned, by: 'Elena R.' },
              ].map((s) => (
                <div key={s.step} className={`p-3 rounded-xl border transition-all flex items-center justify-between ${s.done ? 'bg-emerald-50/60 border-emerald-200/80' : 'bg-slate-50 border-slate-100'}`}>
                  <div className="flex items-center gap-2.5">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${s.done ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600'}`}>
                      {s.done ? <CheckIcon className="w-3.5 h-3.5" /> : s.step}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{s.role}</p>
                      <p className="text-[10px] text-slate-500">
                        {isVi
                          ? (s.done ? `Đã ký bởi ${s.by}` : 'Đang chờ token ký số')
                          : (s.done ? `Signed by ${s.by}` : 'Awaiting digital token')}
                      </p>
                    </div>
                  </div>
                  {s.done && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      {isVi ? 'Đã duyệt' : 'Verified'}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Interactive Action Button */}
            {!isSigned && (
              <button
                onClick={handleSign}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FF4D38] to-rose-600 hover:opacity-95 text-white font-bold text-xs shadow-md shadow-[#FF4D38]/20 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5"
              >
                <PenToolIcon className="w-3.5 h-3.5" />
                <span>{isVi ? 'Nhấn Để Ký Số & Ban Hành Ngay' : 'Click to Digitally Sign & Dispatch'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
