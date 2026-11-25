"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { FOOTER_LINKS } from "@/data/navigation";
import {
  InstagramIcon,
  TwitterIcon,
  TikTokIcon,
  ArrowRightIcon,
} from "@/components/ui/UIIcons";

export function Footer() {
  const { t, language } = useLanguage();
  const isVi = language === "vi";

  return (
    <footer className="canvas-card bg-white rounded-2xl sm:rounded-3xl shadow-[0_1px_2px_rgba(17,24,39,0.05)] border border-slate-900/[0.08] overflow-hidden relative pt-12 sm:pt-16 pb-8 px-4 sm:px-8 lg:px-12 flex flex-col justify-between">
      {/* Upper Section */}
      <div className="max-w-[1360px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 text-left">
        {/* Col 1: Bio & Branding */}
        <div className="md:col-span-7 lg:col-span-7 xl:col-span-3 text-left">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <img
                src="/commadesk/logo_CommaDesk.webp"
                alt="CommaDesk"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="font-semibold text-[18px] tracking-[-0.01em] text-[#111827]">
              CommaDesk
            </span>
          </Link>
          <p className="text-[14px] font-normal text-[#4B5565] leading-relaxed max-w-sm">
            {t.footer.bio}
          </p>

          <div className="mt-5">
            <Link
              href="/#features"
              className="inline-flex items-center gap-1.5 h-9 px-4 rounded-[10px] bg-[#ECEFF4] hover:bg-slate-200/80 border border-slate-900/[0.08] text-[#111827] text-[13px] font-medium transition-colors"
            >
              <span>{isVi ? "Khám phá 13 phân hệ" : "Explore 13 modules"}</span>
              <ArrowRightIcon className="w-3.5 h-3.5 text-[#6B7487]" />
            </Link>
          </div>
        </div>

        {/* Col 3 on Tablet & LG Laptop */}
        <div className="hidden md:flex xl:hidden md:col-span-5 lg:col-span-5 flex-col md:items-end justify-start space-y-3 text-right">
          <h4 className="text-[14px] font-medium text-[#111827]">
            {t.footer.followUs}
          </h4>
          <div className="flex items-center gap-2">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-[10px] bg-[#F5F7FA] hover:bg-[#ECEFF4] border border-slate-900/[0.08] text-[#4B5565] hover:text-[#111827] flex items-center justify-center transition-colors shrink-0"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="X Twitter"
              className="w-10 h-10 rounded-[10px] bg-[#F5F7FA] hover:bg-[#ECEFF4] border border-slate-900/[0.08] text-[#4B5565] hover:text-[#111827] flex items-center justify-center transition-colors shrink-0"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="w-10 h-10 rounded-[10px] bg-[#F5F7FA] hover:bg-[#ECEFF4] border border-slate-900/[0.08] text-[#4B5565] hover:text-[#111827] flex items-center justify-center transition-colors shrink-0"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="md:col-span-12 lg:col-span-12 xl:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-left pt-4 md:pt-6 xl:pt-0 border-t xl:border-t-0 border-slate-900/[0.06]">
          <div className="space-y-3">
            <h4 className="text-[14px] font-medium text-[#111827]">
              {t.footer.columns.products}
            </h4>
            <ul className="space-y-2 text-[13.5px] text-[#4B5565]">
              {FOOTER_LINKS.operations.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#111827] inline-block transition-colors"
                  >
                    {isVi ? link.labelVi : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-[14px] font-medium text-[#111827]">
              {t.footer.columns.workforce}
            </h4>
            <ul className="space-y-2 text-[13.5px] text-[#4B5565]">
              {FOOTER_LINKS.workforce.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#111827] inline-block transition-colors"
                  >
                    {isVi ? link.labelVi : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-[14px] font-medium text-[#111827]">
              {t.footer.columns.comms}
            </h4>
            <ul className="space-y-2 text-[13.5px] text-[#4B5565]">
              {FOOTER_LINKS.comms.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#111827] inline-block transition-colors"
                  >
                    {isVi ? link.labelVi : link.labelEn}
                  </Link>
                </li>
              ))}
              {FOOTER_LINKS.commerce.slice(0, 1).map((link, idx) => (
                <li key={`comm-${idx}`}>
                  <Link
                    href={link.href}
                    className="hover:text-[#111827] inline-block transition-colors"
                  >
                    {isVi ? link.labelVi : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-[14px] font-medium text-[#111827]">
              {t.footer.columns.resources}
            </h4>
            <ul className="space-y-2 text-[13.5px] text-[#4B5565]">
              {FOOTER_LINKS.resources.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#111827] inline-block transition-colors"
                  >
                    {isVi ? link.labelVi : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Col 3 on Mobile & XL Desktop */}
        <div className="block md:hidden xl:block xl:col-span-2 space-y-3 shrink-0 text-left pt-2 xl:pt-0">
          <h4 className="text-[14px] font-medium text-[#111827]">
            {t.footer.followUs}
          </h4>
          <div className="flex items-center gap-2">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-[10px] bg-[#F5F7FA] hover:bg-[#ECEFF4] border border-slate-900/[0.08] text-[#4B5565] hover:text-[#111827] flex items-center justify-center transition-colors shrink-0"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="X Twitter"
              className="w-10 h-10 rounded-[10px] bg-[#F5F7FA] hover:bg-[#ECEFF4] border border-slate-900/[0.08] text-[#4B5565] hover:text-[#111827] flex items-center justify-center transition-colors shrink-0"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="w-10 h-10 rounded-[10px] bg-[#F5F7FA] hover:bg-[#ECEFF4] border border-slate-900/[0.08] text-[#4B5565] hover:text-[#111827] flex items-center justify-center transition-colors shrink-0"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright & Public Legal Links */}
      <div className="max-w-[1360px] mx-auto w-full pt-6 border-t border-slate-900/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-[13px] text-[#6B7487]">
          {t.footer.copyright}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[13px] text-[#4B5565]">
          {FOOTER_LINKS.legal.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#111827] transition-colors underline-offset-4 hover:underline"
            >
              {link.key === 'privacy' ? t.footer.legal.privacy : t.footer.legal.terms}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
