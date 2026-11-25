'use client';

import React, { useState } from 'react';
import { FileTextIcon, CheckIcon, PenToolIcon } from '@/components/ui/UIIcons';
import { ShowcaseCard } from '@/components/ui/ShowcaseCard';

interface Props {
  isVi?: boolean;
}

export function InteractiveDigitalSignature({ isVi }: Props) {
  const [currentStep, setCurrentStep] = useState<number>(2);
  const [isSigned, setIsSigned] = useState<boolean>(false);

  const handleSign = () => {
    setIsSigned(true);
    setCurrentStep(3);
  };

  return (
    <ShowcaseCard
      title={isVi ? 'Sổ văn bản số & Ký duyệt điện tử' : 'Digital Document Registry & e-Signing'}
      headerRight={
        <span className="font-mono tabular-nums text-[12px] text-[#6B7487]">
          Decree 30/2020/ND-CP
        </span>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Document Preview Stack */}
        <div className="lg:col-span-7 relative min-h-[320px] flex items-center justify-center p-4">
          <div className="absolute w-[240px] sm:w-[320px] h-[190px] sm:h-[220px] rounded-xl bg-[#ECEFF4] border border-slate-900/[0.08] transform -rotate-4 translate-y-2" />

          <div className="relative z-10 w-full max-w-[300px] sm:max-w-[360px] rounded-xl bg-white border border-slate-900/[0.1] shadow-[0_8px_24px_rgba(17,24,39,0.06)] p-5 overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-slate-900/[0.06] mb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-[#F5F7FA] border border-slate-900/[0.08] text-[#FF4D38] flex items-center justify-center">
                  <FileTextIcon className="w-3.5 h-3.5" />
                </span>
                <div>
                  <p className="font-mono text-[12px] font-medium text-[#111827]">DOC-2026-HQ-882</p>
                  <p className="text-[11px] text-[#6B7487]">
                    {isVi ? 'Chỉ thị điều hành chính thức' : 'Official executive directive'}
                  </p>
                </div>
              </div>
              <span
                className={`text-[11px] font-medium ${
                  isSigned ? 'text-[#16A34A]' : 'text-[#D97706]'
                }`}
              >
                {isVi ? (isSigned ? 'Đã ký số' : 'Chờ ký') : isSigned ? 'Verified' : 'Pending'}
              </span>
            </div>

            <p className="text-[12.5px] text-[#4B5565] line-clamp-3 leading-relaxed mb-4">
              {isVi
                ? 'Quyết định ban hành quy chế vận hành số hóa liên phòng ban, bảo mật văn bản theo tiêu chuẩn ISO 27001 và phân quyền đa tầng linh hoạt.'
                : 'Executive directive on inter-departmental document dispatching under ISO 27001 controls and multi-tier permissions.'}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-slate-900/[0.06]">
              <div className="text-[11px] text-[#6B7487] font-mono">
                SHA-256: 4f8a...e91c
              </div>

              <div
                className={`px-2.5 py-1 rounded-md border text-[11px] font-mono font-medium transition-colors ${
                  isSigned
                    ? 'border-[#16A34A] text-[#16A34A] bg-emerald-50/60'
                    : 'border-[#FF4D38]/40 text-[#C8321F] bg-[#FFF8F7]'
                }`}
              >
                {isVi ? 'ĐÃ KÝ SỐ' : 'DIGITALLY SIGNED'}
              </div>
            </div>
          </div>
        </div>

        {/* Approval Pipeline */}
        <div className="lg:col-span-5">
          <div className="p-5 rounded-xl bg-white border border-slate-900/[0.08] space-y-4">
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-900/[0.06]">
              <span className="text-[13px] font-semibold text-[#111827]">
                {isVi ? 'Luồng phê duyệt văn bản' : 'Multi-tier review pipeline'}
              </span>
              <span className="text-[12px] font-mono tabular-nums text-[#6B7487]">
                {isVi ? `Bước ${currentStep}/3` : `Step ${currentStep}/3`}
              </span>
            </div>

            <div className="space-y-2">
              {[
                { step: 1, role: isVi ? 'Trưởng phòng Pháp chế' : 'Legal counsel review', done: true, by: 'Sarah M.' },
                { step: 2, role: isVi ? 'Giám đốc Vận hành' : 'COO verification', done: isSigned, by: 'James C.' },
                { step: 3, role: isVi ? 'Tổng Giám đốc phê chuẩn' : 'CEO sign-off', done: isSigned, by: 'Elena R.' },
              ].map((s) => (
                <div
                  key={s.step}
                  className={`p-3 rounded-lg border flex items-center justify-between ${
                    s.done
                      ? 'bg-[#F5F7FA] border-slate-900/[0.08]'
                      : 'bg-white border-slate-900/[0.06]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-mono tabular-nums text-[11px] font-medium ${
                        s.done ? 'bg-[#16A34A] text-white' : 'bg-[#ECEFF4] text-[#4B5565]'
                      }`}
                    >
                      {s.done ? <CheckIcon className="w-3.5 h-3.5" /> : s.step}
                    </div>
                    <div>
                      <p className="text-[12.5px] font-medium text-[#111827]">{s.role}</p>
                      <p className="text-[11px] text-[#6B7487]">
                        {isVi
                          ? s.done
                            ? `Đã ký bởi ${s.by}`
                            : 'Đang chờ token ký số'
                          : s.done
                          ? `Signed by ${s.by}`
                          : 'Awaiting token'}
                      </p>
                    </div>
                  </div>
                  {s.done && (
                    <span className="text-[11px] font-medium text-[#16A34A]">
                      {isVi ? 'Đã duyệt' : 'Verified'}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {!isSigned && (
              <button
                type="button"
                onClick={handleSign}
                className="w-full h-10 px-4 rounded-[10px] bg-[#FF4D38] hover:bg-[#E03E2A] text-white font-medium text-[13px] transition-[background-color,transform] duration-150 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
              >
                <PenToolIcon className="w-3.5 h-3.5" />
                <span>{isVi ? 'Ký số và ban hành' : 'Sign and dispatch'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </ShowcaseCard>
  );
}
