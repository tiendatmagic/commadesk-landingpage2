'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ClipboardListIcon, HeartIcon, MailIcon, CheckIcon } from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface InteractiveSurveysFeedbackProps {
  isVi: boolean;
}

export function InteractiveSurveysFeedback({ isVi }: InteractiveSurveysFeedbackProps) {
  const [activeTab, setActiveTab] = useState<'3d-pulse' | 'surveys' | 'enps' | 'mailbox'>('3d-pulse');
  const [selectedScore, setSelectedScore] = useState<number>(9);

  const tabs = [
    {
      id: '3d-pulse' as const,
      label: isVi ? 'Nhịp Sống 3D' : '3D Culture Pulse',
      icon: <HeartIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'surveys' as const,
      label: isVi ? 'Khảo Sát eNPS' : 'Surveys',
      icon: <ClipboardListIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'enps' as const,
      label: isVi ? 'Chỉ Số Gắn Kết' : 'Culture Pulse',
      icon: <HeartIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'mailbox' as const,
      label: isVi ? 'Hộp Thư Góp Ý' : 'Mailbox',
      icon: <MailIcon className="w-3.5 h-3.5" />,
    },
  ];

  const surveyList = [
    {
      id: 'KS-2026-Q3',
      title: isVi ? 'Khảo Sát Độ Hài Lòng Môi Trường Làm Việc Q3/2026' : 'Q3 2026 Workplace Satisfaction & Culture Pulse',
      responses: '412 / 450',
      rate: '91.5%',
      status: isVi ? 'Đang mở' : 'Active',
      deadline: '15/10/2026',
    },
    {
      id: 'KS-2026-IT',
      title: isVi ? 'Đánh Giá Chất Lượng Dịch Vụ Thiết Bị IT & Helpdesk' : 'IT Helpdesk & Tooling Infrastructure Review',
      responses: '388 / 450',
      rate: '86.2%',
      status: isVi ? 'Đang mở' : 'Active',
      deadline: '20/10/2026',
    },
  ];

  const mailboxItems = [
    {
      code: 'GOPY-8819',
      topic: isVi ? 'Đề xuất bổ sung khu vực nghỉ trưa & máy pha cà phê Tầng 5' : 'Request for Quiet Lounge Area on Floor 5',
      sender: isVi ? 'Góp ý Ẩn danh (Bảo mật 100%)' : 'Anonymous Contributor (Encrypted)',
      target: isVi ? 'Gửi tới: Ban Giám Đốc & HR' : 'To: Executive Board & HR',
      status: isVi ? 'Đã tiếp nhận & Đang xử lý' : 'Acknowledged & In Progress',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      code: 'GOPY-6204',
      topic: isVi ? 'Kiến nghị tối ưu luồng phê duyệt công tác phí liên tỉnh' : 'Streamlining Travel Expense Approval Routing',
      sender: isVi ? 'Trần Văn Mạnh (Khối Vận Hành)' : 'Manh Tran (Operations)',
      target: isVi ? 'Gửi tới: Khối Tài Chính Kế Toán' : 'To: Finance Department',
      status: isVi ? 'Đã có phản hồi chính thức' : 'Resolved with Official Notice',
      color: 'bg-blue-50 text-blue-700 border-blue-200',
    },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'Khảo Sát Nội Bộ & Hộp Thư Góp Ý Lãnh Đạo' : 'Surveys, Culture & Leadership Mailbox'}
      headerRight={
        <ShowcaseTabBar
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      }
    >
      {activeTab === '3d-pulse' && (
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
          <Image
            src="/showcase/tech_hr_workforce.webp"
            alt="Futuristic 3D Workplace Culture Pulse and Sentiment Analytics"
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />

          {/* Floating Badge 1: eNPS Score */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 animate-float bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg max-w-[220px] hidden sm:block">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              <span className="text-[11px] font-bold text-slate-900">
                {isVi ? 'Chỉ Số Gắn Kết eNPS: +68' : 'Culture Pulse eNPS: +68'}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-1">
              <div className="bg-rose-500 h-full w-[88%] rounded-full animate-pulse"></div>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">
              {isVi ? '91.5% Nhân sự phản hồi tích cực' : '91.5% Positive Workplace Sentiment'}
            </span>
          </div>

          {/* Floating Badge 2: Encrypted Mailbox */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 animate-float-delayed bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg hidden sm:block">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                <CheckIcon className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900">
                  {isVi ? 'Hòm Thư Ẩn Danh Mã Hóa' : '100% Encrypted Feedback'}
                </p>
                <p className="text-[10px] text-emerald-600 font-semibold">
                  {isVi ? 'Bảo mật danh tính tuyệt đối' : 'Anonymous & Tamper-Proof'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'surveys' && (
        <div className="space-y-3">
          <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/90 p-4 shadow-xs">
            <div className="text-xs font-bold text-slate-900 mb-2">
              {isVi ? 'Khảo sát mẫu tương tác trực tiếp (Thang điểm Likert 1-10)' : 'Interactive Likert Scale 1-10 Survey Preview'}
            </div>
            <p className="text-[11px] text-slate-600 mb-3 leading-relaxed">
              {isVi
                ? '“Bạn có sẵn sàng giới thiệu công ty như một nơi làm việc tuyệt vời cho bạn bè và đồng nghiệp không?”'
                : '"How likely are you to recommend CommaDesk as a great place to work to a friend or colleague?"'}
            </p>

            {/* Score Selector */}
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 mb-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                <button
                  key={score}
                  type="button"
                  onClick={() => setSelectedScore(score)}
                  className={`py-2 text-xs font-extrabold rounded-lg transition-all cursor-pointer ${
                    selectedScore === score
                      ? 'bg-[#FF4D38] text-white shadow-xs scale-105'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {score}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500 font-semibold px-1">
              <span>{isVi ? '1 = Rất không chắc' : '1 = Not likely at all'}</span>
              <span>{isVi ? '10 = Cực kỳ chắc chắn' : '10 = Extremely likely'}</span>
            </div>
          </div>

          {/* Active Surveys */}
          <div className="space-y-2">
            {surveyList.map((s) => (
              <div key={s.id} className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">{s.title}</span>
                    <span className="text-[10px] font-mono text-slate-400">{s.id}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {isVi ? 'Phản hồi: ' : 'Responses: '} <span className="font-semibold text-slate-800">{s.responses}</span> ({s.rate})
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {s.status}
                  </span>
                  <div className="text-[10px] text-slate-400 mt-1">{s.deadline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'enps' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
              <div className="text-[10px] text-slate-500 font-semibold uppercase">{isVi ? 'Chỉ số eNPS' : 'eNPS Score'}</div>
              <div className="text-xl font-extrabold text-[#FF4D38] mt-1">+68</div>
              <div className="text-[10px] font-bold text-emerald-600 mt-0.5">Mức Đẳng Cấp Thế Giới</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
              <div className="text-[10px] text-slate-500 font-semibold uppercase">{isVi ? 'Tỷ Lệ Tham Gia' : 'Participation'}</div>
              <div className="text-xl font-extrabold text-slate-900 mt-1">94.2%</div>
              <div className="text-[10px] font-bold text-blue-600 mt-0.5">Đại diện toàn diện</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
              <div className="text-[10px] text-slate-500 font-semibold uppercase">{isVi ? 'Độ Gắn Kết' : 'Retention Index'}</div>
              <div className="text-xl font-extrabold text-slate-900 mt-1">9.1 / 10</div>
              <div className="text-[10px] font-bold text-emerald-600 mt-0.5">Bền vững</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-xs font-bold text-slate-900 mb-2">
              {isVi ? 'Phân Bổ Cảm Xúc Toàn Doanh Nghiệp (Sentiment Pulse)' : 'Sentiment Spectrum Distribution'}
            </div>
            <div className="flex h-3 rounded-full overflow-hidden mb-2">
              <div className="bg-emerald-500" style={{ width: '74%' }} title="Promoters (74%)"></div>
              <div className="bg-amber-400" style={{ width: '18%' }} title="Passives (18%)"></div>
              <div className="bg-rose-500" style={{ width: '8%' }} title="Detractors (8%)"></div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
              <span className="text-emerald-700 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                <span>74% {isVi ? 'Tích cực (Promoters)' : 'Promoters'}</span>
              </span>
              <span className="text-amber-700 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                <span>18% {isVi ? 'Trung lập (Passives)' : 'Passives'}</span>
              </span>
              <span className="text-rose-700 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"></span>
                <span>8% {isVi ? 'Cần cải thiện' : 'Detractors'}</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'mailbox' && (
        <div className="space-y-2.5">
          <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs mb-2">
            <span className="text-xs font-bold text-slate-900">
              {isVi ? 'Hòm Thư Góp Ý Trực Tiếp Lãnh Đạo (Bảo Mật Kép)' : 'Confidential Direct Leadership Mailbox'}
            </span>
            <p className="text-[11px] text-slate-500 mt-1">
              {isVi
                ? 'Nhân viên có thể góp ý định danh hoặc ẩn danh mã hóa hoàn toàn. Mọi kiến nghị đều được cấp mã tra cứu và cam kết phản hồi trong 48h.'
                : 'Employees can submit named or fully encrypted anonymous suggestions with automated 48h SLA response tracking.'}
            </p>
          </div>

          {mailboxItems.map((item) => (
            <div key={item.code} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-900">{item.code}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.color}`}>
                  {item.status}
                </span>
              </div>
              <div className="text-xs font-bold text-slate-900">{item.topic}</div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                <span>{item.sender}</span>
                <span className="font-semibold text-slate-700">{item.target}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Status Ticker */}
      <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          {isVi ? 'Cam kết bảo mật danh tính tuyệt đối theo tiêu chuẩn ISO 27001' : '100% Whistleblower Anonymity Guarantee'}
        </span>
        <span className="font-semibold text-slate-700">SLA: 48 Hours</span>
      </div>
    </ShowcaseCard>
  );
}

