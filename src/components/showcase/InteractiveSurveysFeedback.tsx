'use client';

import React, { useState } from 'react';
import { ClipboardListIcon, HeartIcon, MailIcon } from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface InteractiveSurveysFeedbackProps {
  isVi: boolean;
}

export function InteractiveSurveysFeedback({ isVi }: InteractiveSurveysFeedbackProps) {
  const [activeTab, setActiveTab] = useState<'surveys' | 'enps' | 'mailbox'>('surveys');
  const [selectedScore, setSelectedScore] = useState<number>(9);

  const tabs = [
    {
      id: 'surveys' as const,
      label: isVi ? 'Khảo sát eNPS' : 'Surveys',
      icon: <ClipboardListIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'enps' as const,
      label: isVi ? 'Chỉ số gắn kết' : 'Culture metrics',
      icon: <HeartIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'mailbox' as const,
      label: isVi ? 'Hộp thư góp ý' : 'Mailbox',
      icon: <MailIcon className="w-3.5 h-3.5" />,
    },
  ];

  const surveyList = [
    {
      id: 'KS-2026-Q3',
      title: isVi ? 'Khảo sát môi trường làm việc Q3/2026' : 'Q3 2026 workplace pulse survey',
      responses: '412 / 450',
      rate: '91.5%',
      status: isVi ? 'Đang mở' : 'Active',
      deadline: '15/10/2026',
    },
    {
      id: 'KS-2026-IT',
      title: isVi ? 'Đánh giá chất lượng hỗ trợ IT & Helpdesk' : 'IT helpdesk & tooling review',
      responses: '388 / 450',
      rate: '86.2%',
      status: isVi ? 'Đang mở' : 'Active',
      deadline: '20/10/2026',
    },
  ];

  const mailboxItems = [
    {
      code: 'GOPY-8819',
      topic: isVi ? 'Đề xuất bổ sung khu vực nghỉ trưa tầng 5' : 'Request for quiet break area on Floor 5',
      sender: isVi ? 'Góp ý ẩn danh' : 'Anonymous contributor',
      target: isVi ? 'Ban Giám đốc & HR' : 'Executive & HR',
      status: isVi ? 'Đang xử lý' : 'In progress',
      tone: 'text-[#16A34A]',
    },
    {
      code: 'GOPY-6204',
      topic: isVi ? 'Rút gọn bước duyệt công tác phí liên tỉnh' : 'Streamline travel expense routing',
      sender: isVi ? 'Trần Văn Mạnh (Vận hành)' : 'Manh Tran (Operations)',
      target: isVi ? 'Tài chính Kế toán' : 'Finance department',
      status: isVi ? 'Đã phản hồi' : 'Resolved',
      tone: 'text-[#4B5565]',
    },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'Khảo sát nội bộ & Hộp thư góp ý' : 'Employee Surveys & Confidential Mailbox'}
      headerRight={
        <ShowcaseTabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      }
    >
      {activeTab === 'surveys' && (
        <div className="space-y-3">
          <div className="rounded-xl bg-white border border-slate-900/[0.08] p-4">
            <div className="text-[13px] font-semibold text-[#111827] mb-1.5">
              {isVi ? 'Thang điểm eNPS (1–10)' : 'eNPS response scale (1–10)'}
            </div>
            <p className="text-[13px] text-[#4B5565] mb-3 leading-relaxed">
              {isVi
                ? '“Bạn có sẵn sàng giới thiệu công ty làm nơi làm việc cho bạn bè và đồng nghiệp không?”'
                : '“How likely are you to recommend this company as a workplace to a colleague?”'}
            </p>

            <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 mb-2.5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                <button
                  key={score}
                  type="button"
                  onClick={() => setSelectedScore(score)}
                  className={`py-2 font-mono tabular-nums text-[12.5px] font-medium rounded-lg transition-colors cursor-pointer ${
                    selectedScore === score
                      ? 'bg-[#FF4D38] text-white'
                      : 'bg-[#F5F7FA] border border-slate-900/[0.08] text-[#111827] hover:bg-[#ECEFF4]'
                  }`}
                >
                  {score}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#6B7487]">
              <span>{isVi ? '1 = Không sẵn sàng' : '1 = Not likely'}</span>
              <span>{isVi ? '10 = Rất sẵn sàng' : '10 = Extremely likely'}</span>
            </div>
          </div>

          <div className="space-y-2">
            {surveyList.map((s) => (
              <div
                key={s.id}
                className="p-3.5 rounded-xl bg-white border border-slate-900/[0.08] flex items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-medium text-[#111827]">{s.title}</span>
                    <span className="text-[11px] font-mono text-[#6B7487]">{s.id}</span>
                  </div>
                  <div className="font-mono tabular-nums text-[12px] text-[#6B7487] mt-0.5">
                    {s.responses} ({s.rate})
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[12px] font-medium text-[#16A34A]">{s.status}</span>
                  <div className="font-mono tabular-nums text-[11px] text-[#6B7487] mt-0.5">{s.deadline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'enps' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-white border border-slate-900/[0.08]">
              <div className="text-[12px] text-[#6B7487]">{isVi ? 'Chỉ số eNPS' : 'eNPS score'}</div>
              <div className="font-mono tabular-nums text-[24px] font-semibold text-[#FF4D38] mt-1">
                +68
              </div>
              <div className="text-[12px] text-[#16A34A] mt-0.5">
                +6 {isVi ? 'so với Q2' : 'vs Q2'}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-900/[0.08]">
              <div className="text-[12px] text-[#6B7487]">{isVi ? 'Tỷ lệ tham gia' : 'Participation'}</div>
              <div className="font-mono tabular-nums text-[24px] font-semibold text-[#111827] mt-1">
                94.2%
              </div>
              <div className="text-[12px] text-[#6B7487] mt-0.5">424 / 450</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-900/[0.08]">
              <div className="text-[12px] text-[#6B7487]">{isVi ? 'Điểm hài lòng' : 'Satisfaction'}</div>
              <div className="font-mono tabular-nums text-[24px] font-semibold text-[#111827] mt-1">
                9.1 / 10
              </div>
              <div className="text-[12px] text-[#16A34A] mt-0.5">
                {isVi ? 'Ổn định' : 'Steady'}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-900/[0.08]">
            <div className="text-[13px] font-medium text-[#111827] mb-2.5">
              {isVi ? 'Phân bổ phản hồi' : 'Response breakdown'}
            </div>
            <div className="flex h-2.5 rounded-full overflow-hidden mb-3 bg-[#ECEFF4]">
              <div className="bg-[#16A34A]" style={{ width: '74%' }} />
              <div className="bg-slate-400" style={{ width: '18%' }} />
              <div className="bg-[#FF4D38]" style={{ width: '8%' }} />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono tabular-nums text-[12px] text-[#4B5565]">
              <span>74% {isVi ? 'tích cực' : 'promoters'}</span>
              <span>18% {isVi ? 'trung lập' : 'passives'}</span>
              <span className="text-[#C8321F]">8% {isVi ? 'cần cải thiện' : 'detractors'}</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'mailbox' && (
        <div className="space-y-2.5">
          {mailboxItems.map((item) => (
            <div
              key={item.code}
              className="p-4 rounded-xl bg-white border border-slate-900/[0.08] space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-mono tabular-nums font-medium text-[#111827]">
                  {item.code}
                </span>
                <span className={`text-[12px] font-medium ${item.tone}`}>{item.status}</span>
              </div>
              <div className="text-[13.5px] font-medium text-[#111827]">{item.topic}</div>
              <div className="flex items-center justify-between text-[12px] text-[#6B7487] pt-2 border-t border-slate-900/[0.06]">
                <span>{item.sender}</span>
                <span className="font-medium text-[#4B5565]">{item.target}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-3 pt-3 border-t border-slate-900/[0.06] flex items-center justify-between text-[12px] text-[#6B7487]">
        <span>{isVi ? 'Hộp thư góp ý ẩn danh bảo mật danh tính' : 'Confidential anonymous mailbox'}</span>
        <span className="font-mono tabular-nums text-[#111827] font-medium">SLA: 48h</span>
      </div>
    </ShowcaseCard>
  );
}
