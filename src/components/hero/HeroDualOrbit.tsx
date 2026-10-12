'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface AvatarItem {
  src: string;
  alt: string;
  defaultTop: string;
  defaultLeft?: string;
  defaultRight?: string;
  hiddenOnMobile?: boolean;
}

const LEFT_AVATARS: AvatarItem[] = [
  {
    src: '/avatars/hero2_1.webp',
    alt: 'Team member',
    defaultTop: 'top-[17%] sm:top-[18%] lg:top-[20%]',
    defaultLeft: 'left-[1.5%] sm:left-[2.5%] lg:left-[3.8%]',
    hiddenOnMobile: true,
  },
  {
    src: '/avatars/hero2_2.webp',
    alt: 'Team member',
    defaultTop: 'top-[16%] sm:top-[26%] lg:top-[30%]',
    defaultLeft: 'left-[2%] sm:left-[12%] lg:left-[16.5%]',
  },
  {
    src: '/avatars/hero2_3.webp',
    alt: 'Team member',
    defaultTop: 'top-[68%] sm:top-[54%] lg:top-[56%]',
    defaultLeft: 'left-[2%] sm:left-[12%] lg:left-[16.5%]',
  },
  {
    src: '/avatars/hero2_4.webp',
    alt: 'Team member',
    defaultTop: 'top-[64%] sm:top-[66%] lg:top-[68%]',
    defaultLeft: 'left-[1.5%] sm:left-[2.5%] lg:left-[3.8%]',
    hiddenOnMobile: true,
  },
];

const RIGHT_AVATARS: AvatarItem[] = [
  {
    src: '/avatars/hero2_6.webp',
    alt: 'Team member',
    defaultTop: 'top-[17%] sm:top-[18%] lg:top-[20%]',
    defaultRight: 'right-[1.5%] sm:right-[2.5%] lg:right-[3.8%]',
    hiddenOnMobile: true,
  },
  {
    src: '/avatars/hero2_7.webp',
    alt: 'Team member',
    defaultTop: 'top-[16%] sm:top-[26%] lg:top-[30%]',
    defaultRight: 'right-[2%] sm:right-[12%] lg:right-[16.5%]',
  },
  {
    src: '/avatars/hero2_8.webp',
    alt: 'Team member',
    defaultTop: 'top-[68%] sm:top-[54%] lg:top-[56%]',
    defaultRight: 'right-[2%] sm:right-[12%] lg:right-[16.5%]',
  },
  {
    src: '/avatars/hero2_9.webp',
    alt: 'Team member',
    defaultTop: 'top-[64%] sm:top-[66%] lg:top-[68%]',
    defaultRight: 'right-[1.5%] sm:right-[2.5%] lg:right-[3.8%]',
    hiddenOnMobile: true,
  },
];

export function HeroDualOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const leftAvatars = container.querySelectorAll<HTMLElement>('.hero2-avatar-left');
    const rightAvatars = container.querySelectorAll<HTMLElement>('.hero2-avatar-right');
    const allAvatars = container.querySelectorAll<HTMLElement>('.hero2-avatar-item');
    if (!leftAvatars.length || !rightAvatars.length) return;

    // Công thức Fourier khép kín chuẩn xác
    function getOrbitCoords(theta: number) {
      const x = 10.15 - 6.35 * Math.cos(theta) + 6.35 * Math.sin(theta);
      const y = 43.5 - 18.0 * Math.cos(theta) - 19.0 * Math.sin(theta) - 5.5 * Math.cos(2 * theta);
      return { x, y };
    }

    let currentAngle = 0;
    const baseSpeed = 0.005;
    let scrollVelocity = 0;
    let isVisible = false;
    let rafId: number | null = null;
    let lastTime = performance.now();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            lastTime = performance.now();
            if (!rafId) rafId = requestAnimationFrame(render);
          } else {
            if (rafId) {
              cancelAnimationFrame(rafId);
              rafId = null;
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (isVisible && Math.abs(deltaY) > 0.5) {
        scrollVelocity += deltaY * 0.0003;
        scrollVelocity = Math.max(-0.035, Math.min(0.035, scrollVelocity));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    function render(now: number) {
      if (!isVisible) {
        rafId = null;
        return;
      }

      const dt = Math.min((now - lastTime) / 16.67, 2.0);
      lastTime = now;

      scrollVelocity *= Math.pow(0.92, dt);
      const speed = baseSpeed + scrollVelocity;
      currentAngle += speed * dt;

      const isMobile = window.innerWidth < 640;

      if (isMobile) {
        allAvatars.forEach((el) => {
          el.style.left = '';
          el.style.top = '';
          el.style.right = '';
          el.style.opacity = '';
          el.style.zIndex = '';
          const cardInner = el.querySelector<HTMLElement>('.hero2-avatar-card');
          if (cardInner) cardInner.style.transform = '';
        });
      } else {
        leftAvatars.forEach((el) => {
          const idx = parseInt(el.dataset.index || '0', 10);
          const angle = currentAngle + idx * (Math.PI / 2);
          const pos = getOrbitCoords(angle);

          el.style.left = `${pos.x.toFixed(2)}%`;
          el.style.top = `${pos.y.toFixed(2)}%`;
          el.style.right = 'auto';

          const depthFactor = Math.max(0, Math.min(1, (pos.x - 1.2) / 18.0));
          const scale = 1.02 - depthFactor * 0.06;
          const opacity = 1.0 - depthFactor * 0.05;
          const zIndex = depthFactor < 0.5 ? 30 : 20;

          el.style.zIndex = `${zIndex}`;
          el.style.opacity = opacity.toFixed(2);
          const cardInner = el.querySelector<HTMLElement>('.hero2-avatar-card');
          if (cardInner && !el.matches(':hover')) {
            cardInner.style.transform = `scale(${scale.toFixed(3)})`;
          }
        });

        rightAvatars.forEach((el) => {
          const idx = parseInt(el.dataset.index || '0', 10);
          const angle = currentAngle + idx * (Math.PI / 2);
          const pos = getOrbitCoords(angle);

          el.style.right = `${pos.x.toFixed(2)}%`;
          el.style.top = `${pos.y.toFixed(2)}%`;
          el.style.left = 'auto';

          const depthFactor = Math.max(0, Math.min(1, (pos.x - 1.2) / 18.0));
          const scale = 1.02 - depthFactor * 0.06;
          const opacity = 1.0 - depthFactor * 0.05;
          const zIndex = depthFactor < 0.5 ? 30 : 20;

          el.style.zIndex = `${zIndex}`;
          el.style.opacity = opacity.toFixed(2);
          const cardInner = el.querySelector<HTMLElement>('.hero2-avatar-card');
          if (cardInner && !el.matches(':hover')) {
            cardInner.style.transform = `scale(${scale.toFixed(3)})`;
          }
        });
      }

      rafId = requestAnimationFrame(render);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero2AvatarsContainer"
      className="absolute inset-0 pointer-events-none"
    >
      {/* Cụm Bên Trái */}
      {LEFT_AVATARS.map((av, index) => (
        <div
          key={`left-${index}`}
          className={`hero2-avatar-item hero2-avatar-left absolute pointer-events-auto transition-shadow duration-300 ${
            av.hiddenOnMobile ? 'hidden sm:block' : ''
          } ${av.defaultTop} ${av.defaultLeft}`}
          data-index={index}
        >
          <div className="hero2-avatar-card w-[95px] h-[125px] sm:w-[130px] sm:h-[168px] md:w-[148px] md:h-[192px] lg:w-[165px] lg:h-[215px] rounded-[20px] sm:rounded-[28px] md:rounded-[32px] bg-white shadow-xl shadow-slate-300/40 overflow-hidden border-[3px] border-white relative">
            <Image
              src={av.src}
              alt={av.alt}
              fill
              sizes="(max-width: 640px) 95px, (max-width: 768px) 130px, (max-width: 1024px) 148px, 165px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white/95 via-white/40 to-transparent pointer-events-none" />
          </div>
        </div>
      ))}

      {/* Cụm Bên Phải */}
      {RIGHT_AVATARS.map((av, index) => (
        <div
          key={`right-${index}`}
          className={`hero2-avatar-item hero2-avatar-right absolute pointer-events-auto transition-shadow duration-300 ${
            av.hiddenOnMobile ? 'hidden sm:block' : ''
          } ${av.defaultTop} ${av.defaultRight}`}
          data-index={index}
        >
          <div className="hero2-avatar-card w-[95px] h-[125px] sm:w-[130px] sm:h-[168px] md:w-[148px] md:h-[192px] lg:w-[165px] lg:h-[215px] rounded-[20px] sm:rounded-[28px] md:rounded-[32px] bg-white shadow-xl shadow-slate-300/40 overflow-hidden border-[3px] border-white relative">
            <Image
              src={av.src}
              alt={av.alt}
              fill
              sizes="(max-width: 640px) 95px, (max-width: 768px) 130px, (max-width: 1024px) 148px, 165px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white/95 via-white/40 to-transparent pointer-events-none" />
          </div>
        </div>
      ))}
    </div>
  );
}
