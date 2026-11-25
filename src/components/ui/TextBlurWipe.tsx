'use client';

import React, { useMemo, useEffect, useRef, useState } from 'react';

interface TextBlurWipeProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export function TextBlurWipe({
  children,
  className = '',
  as: Component = 'div',
}: TextBlurWipeProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Đảm bảo chữ luôn sắc nét sau tối đa 350ms dù cuộn nhanh hay observer bị trễ
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 350);

    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsRevealed(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.02, rootMargin: '120px 0px 120px 0px' }
      );
      observer.observe(el);

      return () => {
        clearTimeout(timer);
        observer.disconnect();
      };
    } else {
      setIsRevealed(true);
      return () => clearTimeout(timer);
    }
  }, []);

  // Trích xuất text thô cho thuộc tính aria-label phục vụ SEO & Accessibility
  const rawText = useMemo(() => {
    if (typeof children === 'string') return children;
    if (Array.isArray(children)) {
      return children
        .map((child) => (typeof child === 'string' ? child : ' '))
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
    }
    return '';
  }, [children]);

  // Phân rã nội dung thành các cụm từ (reveal-word) và từng ký tự (reveal-char)
  const elements = useMemo(() => {
    let globalCharIndex = 0;

    const processText = (text: string) => {
      const parts = text.split(/(\s+)/);
      return parts.map((part, pIdx) => {
        if (!part) return null;
        if (/^\s+$/.test(part)) {
          return (
            <span key={`space-${pIdx}`} className="reveal-space">
              &nbsp;
            </span>
          );
        }

        const chars = Array.from(part).map((char, cIdx) => {
          const idx = globalCharIndex++;
          return (
            <span
              key={`char-${idx}-${cIdx}`}
              className="reveal-char"
              style={{ '--char-idx': idx } as React.CSSProperties}
            >
              {char}
            </span>
          );
        });

        return (
          <span key={`word-${pIdx}`} className="reveal-word">
            {chars}
          </span>
        );
      });
    };

    if (typeof children === 'string') {
      return processText(children);
    }

    if (Array.isArray(children)) {
      return children.map((item, itemIdx) => {
        if (typeof item === 'string') {
          const needsLineBreak =
            itemIdx > 0 && typeof children[itemIdx - 1] === 'string';
          return (
            <React.Fragment key={`frag-${itemIdx}`}>
              {needsLineBreak && <br />}
              {processText(item)}
            </React.Fragment>
          );
        }
        if (React.isValidElement(item) && item.type === 'br') {
          return <br key={`br-${itemIdx}`} />;
        }
        return item;
      });
    }

    return children;
  }, [children]);

  return (
    <Component
      ref={containerRef as any}
      className={`text-blur-wipe ${isRevealed ? 'is-revealed' : ''} ${className}`}
      aria-label={rawText || undefined}
    >
      {elements}
    </Component>
  );
}
