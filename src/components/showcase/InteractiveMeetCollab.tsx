'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  VideoIcon,
  MessageSquareIcon,
  MicIcon,
  MicOffIcon,
  CameraIcon,
  CameraOffIcon,
  ScreenShareIcon,
  CheckIcon,
} from '@/components/ui/UIIcons';
import { ShowcaseCard, ShowcaseTabBar } from '@/components/ui/ShowcaseCard';

interface InteractiveMeetCollabProps {
  isVi: boolean;
}

export function InteractiveMeetCollab({ isVi }: InteractiveMeetCollabProps) {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCamOn, setIsCamOn] = useState(true);
  const [isSharing, setIsSharing] = useState(false);
  const [activeTab, setActiveTab] = useState<'3d-meet' | 'meet' | 'chat'>('3d-meet');

  const tabs = [
    {
      id: '3d-meet' as const,
      label: isVi ? 'Phòng Họp Ảo 3D' : '3D Collab Arena',
      icon: <VideoIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'meet' as const,
      label: isVi ? 'Họp Video' : 'Video Grid',
      icon: <VideoIcon className="w-3.5 h-3.5" />,
    },
    {
      id: 'chat' as const,
      label: isVi ? 'Chat Nội Bộ' : 'Team Chat',
      icon: <MessageSquareIcon className="w-3.5 h-3.5" />,
    },
  ];

  const participants = [
    {
      name: isVi ? 'Bạn (Chủ phòng)' : 'You (Host)',
      role: isVi ? 'Trưởng nhóm giải pháp' : 'Solutions Lead',
      speaking: true,
      initials: 'ME',
      bg: 'from-blue-50 to-indigo-100/90',
      avatarColor: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      name: isVi ? 'Linh Đặng (PM)' : 'Linh Dang (PM)',
      role: isVi ? 'Quản lý dự án' : 'Project Manager',
      speaking: false,
      initials: 'LD',
      bg: 'from-purple-50 to-pink-100/90',
      avatarColor: 'text-purple-600 bg-purple-50 border-purple-200',
    },
    {
      name: isVi ? 'Hoàng Trần (Kỹ thuật)' : 'Hoang Tran (Tech)',
      role: isVi ? 'Chuyên viên kỹ thuật' : 'Technical Specialist',
      speaking: false,
      initials: 'HT',
      bg: 'from-emerald-50 to-teal-100/90',
      avatarColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      name: isVi ? 'Hương Vũ (QA)' : 'Huong Vu (QA)',
      role: isVi ? 'Kiểm soát chất lượng' : 'QA Lead',
      speaking: false,
      initials: 'HV',
      bg: 'from-amber-50 to-orange-100/90',
      avatarColor: 'text-amber-600 bg-amber-50 border-amber-200',
    },
  ];

  const chatMessages = [
    {
      sender: 'Linh Đặng',
      time: '10:42',
      text: isVi ? 'Tiến độ sprint tuần này đã đạt 85%, chuẩn bị release v2.4 nhé!' : 'Sprint progress hit 85%, ready for v2.4 release!',
    },
    {
      sender: 'Hoàng Trần',
      time: '10:44',
      text: isVi ? 'Đã kích hoạt chính sách phân quyền đa tầng cho toàn bộ phòng ban.' : 'Multi-tier permissions policy successfully activated across all departments.',
    },
  ];

  return (
    <ShowcaseCard
      title={isVi ? 'Phòng Họp: Chiến Lược Q4 [LiveKit E2EE]' : 'Meeting Room: Q4 Strategy [LiveKit]'}
      headerRight={
        <ShowcaseTabBar
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      }
    >
      {activeTab === '3d-meet' && (
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
          <Image
            src="/showcase/tech_communication_meet.webp"
            alt="Futuristic 3D Enterprise Virtual Collaboration and Video Arena"
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />

          {/* Floating Badge 1: Holographic Arena */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 animate-float bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg max-w-[220px] hidden sm:block">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span className="text-[11px] font-bold text-slate-900">
                {isVi ? 'Phòng Họp Ảo Holographic' : 'Holographic Collab Arena'}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-1">
              <div className="bg-indigo-500 h-full w-[99%] rounded-full animate-pulse"></div>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">
              {isVi ? 'Mã hóa E2EE & Khử nhiễu AI' : 'E2EE Encrypted & AI Noise Cancellation'}
            </span>
          </div>

          {/* Floating Badge 2: Latency */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 animate-float-delayed bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-lg hidden sm:block">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                <CheckIcon className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900">
                  {isVi ? 'Giao Thức LiveKit WebRTC' : 'LiveKit WebRTC Protocol'}
                </p>
                <p className="text-[10px] text-emerald-600 font-semibold">
                  {isVi ? 'Độ trễ <100ms siêu tốc' : 'Sub-100ms Ultra-Low Latency'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'meet' && (
        <div className="space-y-3">
          {/* 2x2 Video Participant Grid (Light Mode) */}
          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
            {participants.map((p, idx) => (
              <div
                key={p.name}
                className={`relative h-28 sm:h-32 rounded-2xl bg-gradient-to-br ${p.bg} p-2.5 flex flex-col justify-between overflow-hidden border transition-all ${
                  p.speaking
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-sm'
                    : 'border-slate-200/80 shadow-2xs'
                }`}
              >
                {/* Voice Activity Indicator & Video quality badge */}
                <div className="flex items-center justify-between">
                  {p.speaking ? (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-[10px] font-bold text-white flex items-center gap-1 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                      {isVi ? 'Đang nói' : 'Speaking'}
                    </span>
                  ) : (
                    <span></span>
                  )}
                  <span className="text-[10px] font-semibold bg-white/90 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/60 shadow-2xs">
                    HD 1080p
                  </span>
                </div>

                {/* Avatar Initials Center */}
                <div className={`self-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center font-bold text-sm sm:text-base border shadow-sm ${p.avatarColor}`}>
                  {p.initials}
                </div>

                {/* Bottom Name Badge */}
                <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-slate-800 truncate flex items-center justify-between border border-slate-200/80 shadow-2xs">
                  <span className="truncate">{p.name}</span>
                  {idx === 0 && !isMicOn && (
                    <span className="text-red-500 font-bold ml-1 text-[10px]">Muted</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call Controls Bar (Light Mode) */}
          <div className="flex items-center justify-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setIsMicOn(!isMicOn)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                isMicOn
                  ? 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs'
                  : 'bg-red-50 text-red-600 border border-red-200 font-bold shadow-2xs'
              }`}
            >
              {isMicOn ? <MicIcon className="w-3.5 h-3.5 text-slate-700" /> : <MicOffIcon className="w-3.5 h-3.5 text-red-600" />}
              <span>{isMicOn ? (isVi ? 'Mic Bật' : 'Mic On') : (isVi ? 'Mic Tắt' : 'Mic Muted')}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsCamOn(!isCamOn)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                isCamOn
                  ? 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs'
                  : 'bg-red-50 text-red-600 border border-red-200 font-bold shadow-2xs'
              }`}
            >
              {isCamOn ? <CameraIcon className="w-3.5 h-3.5 text-slate-700" /> : <CameraOffIcon className="w-3.5 h-3.5 text-red-600" />}
              <span>{isCamOn ? (isVi ? 'Cam Bật' : 'Cam On') : (isVi ? 'Cam Tắt' : 'Cam Off')}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsSharing(!isSharing)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                isSharing
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold shadow-2xs'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs'
              }`}
            >
              <ScreenShareIcon className={`w-3.5 h-3.5 ${isSharing ? 'text-emerald-700' : 'text-slate-700'}`} />
              <span>{isSharing ? (isVi ? 'Đang Share' : 'Sharing') : (isVi ? 'Chia sẻ' : 'Share Screen')}</span>
            </button>
          </div>
        </div>
      )}

      {activeTab === 'chat' && (
        /* Team Chat Tab (Light Mode) */
        <div className="space-y-2.5">
          <div className="space-y-2">
            {chatMessages.map((msg, i) => (
              <div key={i} className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="font-bold text-[#FF4D38]">{msg.sender}</span>
                  <span className="text-slate-400 font-medium">{msg.time}</span>
                </div>
                <p className="text-xs text-slate-700 font-medium">{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs text-slate-500 text-xs flex items-center justify-between">
            <span className="text-slate-400">{isVi ? 'Nhập tin nhắn mã hóa E2EE...' : 'Type encrypted E2EE message...'}</span>
            <span className="px-3 py-1 bg-[#FF4D38] text-white rounded-lg text-xs font-bold cursor-pointer">
              {isVi ? 'Gửi' : 'Send'}
            </span>
          </div>
        </div>
      )}

      {/* Bottom Footer */}
      <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-medium">
        <span>{isVi ? 'Giao thức LiveKit WebRTC & Matrix E2EE' : 'LiveKit WebRTC & Matrix Protocol'}</span>
        <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
          {isVi ? 'Độ trễ <100ms' : '<100ms Latency'}
        </span>
      </div>
    </ShowcaseCard>
  );
}
