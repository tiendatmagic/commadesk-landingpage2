import React from 'react';
import Image from 'next/image';
import {
  NetworkConnectingLines,
  CenterChevronIcon,
  LightbulbNodeGraphic,
  BalloonsNodeGraphic,
  LightningShieldNodeGraphic,
  CartoonEyesNodeGraphic,
} from './HeroNetworkGraphics';

export function HeroGraphicNetwork() {
  return (
    <div className="relative w-full max-w-[960px] lg:max-w-[1080px] xl:max-w-[1140px] h-[260px] sm:h-[310px] md:h-[340px] mx-auto flex items-center justify-center">
      {/* Connecting Lines SVG */}
      <NetworkConnectingLines />

      {/* Quiet Junction Dots */}
      <div className="absolute top-[24%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white" />
      <div className="absolute top-[74%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white" />
      <div className="absolute top-[24%] left-[76%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white" />
      <div className="absolute top-[70%] left-[79%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white" />

      {/* Center Node: Solid Purple Hub (No gradient/neon glow) */}
      <div className="relative z-20 w-28 h-28 sm:w-36 sm:h-36 md:w-[152px] md:h-[152px] rounded-2xl sm:rounded-3xl bg-[#7C3AED] shadow-[0_8px_24px_rgba(17,24,39,0.12),inset_0_1px_0_rgba(255,255,255,0.18)] flex items-center justify-center border border-black/[0.08]">
        <div className="w-13 h-13 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] rounded-full border-[2.5px] border-white/85 flex items-center justify-center">
          <CenterChevronIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" />
        </div>
      </div>

      {/* Node 1 (Top Left) */}
      <div className="absolute top-[4%] sm:top-[6%] left-[15%] sm:left-[17%] z-10 w-14 h-14 sm:w-18 sm:h-18 md:w-[82px] md:h-[82px] rounded-2xl bg-[#F59E0B] text-white flex items-center justify-center shadow-[0_6px_16px_rgba(17,24,39,0.08)] border border-white/90">
        <LightbulbNodeGraphic className="w-7 h-7 sm:w-9 sm:h-9" />
      </div>

      {/* Node 2 (Bottom Left) */}
      <div className="absolute bottom-[2%] sm:bottom-[4%] left-[16%] sm:left-[18%] z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-[92px] md:h-[92px] rounded-2xl bg-[#0EA5E9] text-white flex items-center justify-center shadow-[0_6px_16px_rgba(17,24,39,0.08)] border border-white/90">
        <BalloonsNodeGraphic className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      {/* Node 3 (Top Right) */}
      <div className="absolute top-[4%] sm:top-[6%] right-[16%] sm:right-[18%] z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-[92px] md:h-[92px] rounded-2xl bg-[#FF4D38] text-white flex items-center justify-center shadow-[0_6px_16px_rgba(17,24,39,0.08)] border border-white/90">
        <LightningShieldNodeGraphic className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      {/* Node 4 (Right Middle) */}
      <div className="absolute top-[48%] -translate-y-1/2 right-[0.5%] sm:right-[2%] z-10 w-18 h-18 sm:w-24 sm:h-24 md:w-[108px] md:h-[108px] rounded-2xl sm:rounded-3xl bg-white text-[#111827] flex items-center justify-center shadow-[0_8px_24px_rgba(17,24,39,0.06)] border border-slate-900/[0.08]">
        <CartoonEyesNodeGraphic className="w-10 h-7 sm:w-14 sm:h-10 md:w-16 md:h-11" />
      </div>

      {/* Floating Avatar 1 (Left Middle) */}
      <div className="absolute top-[48%] -translate-y-1/2 left-[0.5%] sm:left-[2%] z-10">
        <div className="w-18 h-18 sm:w-24 sm:h-24 md:w-[108px] md:h-[108px] rounded-2xl sm:rounded-3xl p-0.5 bg-white shadow-[0_8px_24px_rgba(17,24,39,0.08)] border border-slate-900/[0.08] overflow-hidden">
          <Image
            src="/avatars/hero1_man.webp"
            alt="Operations engineer"
            width={108}
            height={108}
            className="w-full h-full object-cover rounded-[14px] sm:rounded-[22px]"
            priority
          />
        </div>
      </div>

      {/* Floating Avatar 2 (Bottom Right) */}
      <div className="absolute bottom-[4%] sm:bottom-[6%] right-[15%] sm:right-[17%] z-10">
        <div className="w-14 h-16 sm:w-18 sm:h-22 md:w-[76px] md:h-[92px] rounded-2xl p-0.5 bg-white shadow-[0_8px_24px_rgba(17,24,39,0.08)] border border-slate-900/[0.08] overflow-hidden">
          <Image
            src="/avatars/hero1_woman.webp"
            alt="Team coordinator"
            width={76}
            height={92}
            className="w-full h-full object-cover rounded-[14px]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
