import React from 'react';

export function EnvelopeGraphic() {
  return (
    <>
      {/* 3a. Back Envelope & Slate-Ink Lining */}
      <div
        id="envelopeBackWrap"
        className="testi-envelope-wrap absolute left-1/2 top-1/2 w-[94vw] max-w-[500px] sm:max-w-[540px] md:max-w-[560px] h-[390px] sm:h-[410px] md:h-[420px] pointer-events-none z-15"
      >
        <svg
          className="w-full h-full drop-shadow-sm"
          viewBox="0 0 560 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="inkLiningGrad"
              x1="0"
              y1="100"
              x2="0"
              y2="420"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
          </defs>
          <path
            d="M 0 100 L 115 225 L 445 225 L 560 100 L 560 392 C 560 406 548 418 532 418 L 28 418 C 12 418 0 406 0 392 Z"
            fill="url(#inkLiningGrad)"
          />
          <path d="M 0 100 L 115 225" stroke="#334155" strokeWidth="1.5" opacity="0.7" />
          <path d="M 560 100 L 445 225" stroke="#334155" strokeWidth="1.5" opacity="0.7" />
        </svg>
      </div>

      {/* 3b. Front White Pocket */}
      <div
        id="envelopeFrontWrap"
        className="testi-envelope-wrap absolute left-1/2 top-1/2 w-[94vw] max-w-[500px] sm:max-w-[540px] md:max-w-[560px] h-[225px] sm:h-[240px] md:h-[250px] pointer-events-none z-25"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 560 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="envFrontDropShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="-4" stdDeviation="8" floodColor="#111827" floodOpacity="0.08" />
          </filter>
          <path
            d="M 0 25 L 280 135 L 560 25 L 560 224 C 560 238 548 248 532 248 L 28 248 C 12 248 0 238 0 224 Z"
            fill="#FFFFFF"
            filter="url(#envFrontDropShadow)"
          />
          <path d="M 0 248 L 260 140" stroke="#E2E8F0" strokeWidth="1.5" opacity="0.7" />
          <path d="M 560 248 L 300 140" stroke="#E2E8F0" strokeWidth="1.5" opacity="0.7" />
          <path d="M 0 25 L 280 135 L 560 25" stroke="#F1F5F9" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </>
  );
}
