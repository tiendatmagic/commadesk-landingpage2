'use client';

import React, { useState } from 'react';
import {
  VideoIcon,
  MessageSquareIcon,
  MicIcon,
  MicOffIcon,
  CameraIcon,
  CameraOffIcon,
  ScreenShareIcon,
} from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface InteractiveMeetCollabProps {
  isVi: boolean;
}

export function InteractiveMeetCollab({ isVi }: InteractiveMeetCollabProps) {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCamOn, setIsCamOn] = useState(true);
  const [isSharing, setIsSharing] = useState(false);
  const [activeTab, setActiveTab] = useState<'meet' | 'chat'>('meet');

  const tabs = [
    {
      id: 'meet' as const,
      label: isVi ? 'Họp video' : 'Video grid',
      icon: <VideoIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'chat' as const,
      label: isVi ? 'Chat nội bộ' : 'Team chat',
      icon: <MessageSquareIcon className="w-3.5 h-3.5" />,
    },
  ];

  const participants = [
    {
      name: isVi ? 'Bạn (Chủ phòng)' : 'You (Host)',
      speaking: true,
      initials: 'ME',
    },
    {
      name: isVi ? 'Linh Đặng (PM)' : 'Linh Dang (PM)',
      speaking: false,
      initials: 'LD',
    },
    {
      name: isVi ? 'Hoàng Trần (Kỹ thuật)' : 'Hoang Tran (Tech)',
      speaking: false,
      initials: 'HT',
    },
    {
      name: isVi ? 'Hương Vũ (QA)' : 'Huong Vu (QA)',
      speaking: false,
      initials: 'HV',
    },
  ];

  const chatMessages = [
    {
      sender: 'Linh Đặng',
      time: '10:42',
      text: isVi
        ? 'Tiến độ sprint tuần này đã đạt 85%, sẵn sàng cho bản phát hành v2.4.'
        : 'Sprint progress reached 85%, ready for the v2.4 release window.',
    },
    {
      sender: 'Hoàng Trần',
      time: '10:44',
      text: isVi
        ? 'Đã kích hoạt chính sách phân quyền đa tầng cho toàn bộ phòng ban.'
        : 'Multi-tier permissions policy verified across all departments.',
    },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'Phòng họp trực tuyến: Chiến lược Q4' : 'Meeting room: Q4 strategy'}
      headerRight={
        <ShowcaseTabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      }
    >
      {activeTab === 'meet' && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2.5">
            {participants.map((p, idx) => (
              <div
                key={p.name}
                className={`relative h-28 sm:h-32 rounded-xl bg-white p-3 flex flex-col justify-between overflow-hidden border transition-colors ${
                  p.speaking
                    ? 'border-[#16A34A]'
                    : 'border-slate-900/[0.08]'
                }`}
              >
                <div className="flex items-center justify-between">
                  {p.speaking ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#16A34A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                      {isVi ? 'Đang nói' : 'Speaking'}
                    </span>
                  ) : (
                    <span />
                  )}
                  <span className="font-mono text-[11px] text-[#6B7487]">
                    1080p
                  </span>
                </div>

                <div className="self-center w-10 h-10 rounded-full bg-[#F5F7FA] border border-slate-900/[0.08] text-[#111827] flex items-center justify-center font-mono text-[13px] font-medium">
                  {p.initials}
                </div>

                <div className="text-[12px] font-medium text-[#111827] truncate flex items-center justify-between">
                  <span className="truncate">{p.name}</span>
                  {idx === 0 && !isMicOn && (
                    <span className="font-mono text-[#DC2626] ml-1 text-[11px]">Muted</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setIsMicOn(!isMicOn)}
              className={`h-9 px-3.5 rounded-[10px] text-[12.5px] font-medium flex items-center gap-1.5 transition-colors cursor-pointer border ${
                isMicOn
                  ? 'bg-white hover:bg-[#F5F7FA] text-[#111827] border-slate-900/[0.08]'
                  : 'bg-red-50 text-[#DC2626] border-red-200'
              }`}
            >
              {isMicOn ? <MicIcon className="w-3.5 h-3.5" /> : <MicOffIcon className="w-3.5 h-3.5" />}
              <span>{isMicOn ? (isVi ? 'Mic bật' : 'Mic on') : (isVi ? 'Mic tắt' : 'Mic muted')}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsCamOn(!isCamOn)}
              className={`h-9 px-3.5 rounded-[10px] text-[12.5px] font-medium flex items-center gap-1.5 transition-colors cursor-pointer border ${
                isCamOn
                  ? 'bg-white hover:bg-[#F5F7FA] text-[#111827] border-slate-900/[0.08]'
                  : 'bg-red-50 text-[#DC2626] border-red-200'
              }`}
            >
              {isCamOn ? <CameraIcon className="w-3.5 h-3.5" /> : <CameraOffIcon className="w-3.5 h-3.5" />}
              <span>{isCamOn ? (isVi ? 'Cam bật' : 'Cam on') : (isVi ? 'Cam tắt' : 'Cam off')}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsSharing(!isSharing)}
              className={`h-9 px-3.5 rounded-[10px] text-[12.5px] font-medium flex items-center gap-1.5 transition-colors cursor-pointer border ${
                isSharing
                  ? 'bg-[#111827] text-white border-[#111827]'
                  : 'bg-white hover:bg-[#F5F7FA] text-[#111827] border-slate-900/[0.08]'
              }`}
            >
              <ScreenShareIcon className="w-3.5 h-3.5" />
              <span>{isSharing ? (isVi ? 'Đang chia sẻ' : 'Sharing') : (isVi ? 'Chia sẻ màn hình' : 'Share screen')}</span>
            </button>
          </div>
        </div>
      )}

      {activeTab === 'chat' && (
        <div className="space-y-2.5">
          <div className="space-y-2">
            {chatMessages.map((msg, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-900/[0.08]">
                <div className="flex items-center justify-between text-[12px] mb-1">
                  <span className="font-semibold text-[#111827]">{msg.sender}</span>
                  <span className="font-mono tabular-nums text-[#6B7487]">{msg.time}</span>
                </div>
                <p className="text-[13px] text-[#4B5565]">{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="p-2.5 pl-3.5 rounded-xl bg-white border border-slate-900/[0.08] text-[13px] flex items-center justify-between">
            <span className="text-[#6B7487]">{isVi ? 'Nhập tin nhắn mã hóa...' : 'Type encrypted message...'}</span>
            <span className="px-3 py-1 bg-[#FF4D38] text-white rounded-lg text-[12px] font-medium">
              {isVi ? 'Gửi' : 'Send'}
            </span>
          </div>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-slate-900/[0.06] flex items-center justify-between text-[12px] text-[#6B7487]">
        <span>{isVi ? 'Giao thức LiveKit WebRTC & Matrix E2EE' : 'LiveKit WebRTC & Matrix E2EE'}</span>
        <span className="font-mono tabular-nums font-medium text-[#16A34A]">
          {isVi ? 'Độ trễ < 100 ms' : '< 100 ms latency'}
        </span>
      </div>
    </ShowcaseCard>
  );
}
