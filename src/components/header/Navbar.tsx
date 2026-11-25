"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { IconName } from "@/i18n/types";
import { NavbarSubmenuItem, MobileAccordionTrigger } from "./NavbarSubmenuItem";
import {
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
  ArrowLongRightIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "@/components/ui/UIIcons";

export function Navbar() {
  const { t, modules, language } = useLanguage();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState<"modules" | "solutions" | "resources" | null>(null);
  const [isMenuLocked, setIsMenuLocked] = useState(false);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isModulesOpen = activeMenu === "modules";
  const isSolutionsOpen = activeMenu === "solutions";
  const isResourcesOpen = activeMenu === "resources";

  const [isMobileModulesOpen, setIsMobileModulesOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  const modulesRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  const cancelLeaveTimeout = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  };

  const handleMenuHoverEnter = (menu: "modules" | "solutions" | "resources") => {
    cancelLeaveTimeout();
    if (!isMenuLocked || activeMenu === menu) {
      setActiveMenu(menu);
    }
  };

  const handleMenuHoverLeave = () => {
    if (isMenuLocked) return;
    cancelLeaveTimeout();
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 350);
  };

  const handleMenuClick = (menu: "modules" | "solutions" | "resources") => {
    cancelLeaveTimeout();
    if (activeMenu === menu) {
      setActiveMenu(null);
      setIsMenuLocked(false);
    } else {
      setActiveMenu(menu);
      setIsMenuLocked(true);
    }
  };

  const closeAllMenus = () => {
    cancelLeaveTimeout();
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    setIsMenuLocked(false);
  };

  useEffect(() => {
    closeAllMenus();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeAllMenus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideModules = modulesRef.current?.contains(target);
      const insideSolutions = solutionsRef.current?.contains(target);
      const insideResources = resourcesRef.current?.contains(target);

      if (!insideModules && !insideSolutions && !insideResources) {
        cancelLeaveTimeout();
        setActiveMenu(null);
        setIsMenuLocked(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  const categories = [
    { key: "operations" as const, title: t.nav.categories.operations },
    { key: "workforce" as const, title: t.nav.categories.workforce },
    { key: "comms" as const, title: t.nav.categories.comms },
    { key: "commerce" as const, title: t.nav.categories.commerce },
  ];

  const solutionsList: {
    title: string;
    desc: string;
    href: string;
    iconName: IconName;
  }[] = [
    {
      title: t.nav.solutionsList.logistics,
      desc: t.nav.solutionsList.logisticsDesc,
      href: "/products/fleet-logistics",
      iconName: "Truck",
    },
    {
      title: t.nav.solutionsList.retail,
      desc: t.nav.solutionsList.retailDesc,
      href: "/products/social-retail",
      iconName: "Store",
    },
    {
      title: t.nav.solutionsList.enterprise,
      desc: t.nav.solutionsList.enterpriseDesc,
      href: "/products/security-platform",
      iconName: "Building",
    },
    {
      title: t.nav.solutionsList.public,
      desc: t.nav.solutionsList.publicDesc,
      href: "/products/operations-documents",
      iconName: "Landmark",
    },
  ];

  const resourcesList: {
    title: string;
    desc: string;
    href: string;
    iconName: IconName;
  }[] = [
    {
      title: t.nav.resourcesList.docs,
      desc: t.nav.resourcesList.docsDesc,
      href: "/docs",
      iconName: "BookOpen",
    },
    {
      title: t.nav.resourcesList.releaseNotes,
      desc: t.nav.resourcesList.releaseNotesDesc,
      href: "/release-notes",
      iconName: "Sparkles",
    },
    {
      title: t.nav.resourcesList.api,
      desc: t.nav.resourcesList.apiDesc,
      href: "/docs",
      iconName: "Code2",
    },
    {
      title: t.nav.resourcesList.deployment,
      desc: t.nav.resourcesList.deploymentDesc,
      href: "/deployment",
      iconName: "Monitor",
    },
  ];

  return (
    <>
      {/* Floating Pill Navbar */}
      <header
        id="mainHeader"
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-[1536px] px-2.5 sm:px-6 lg:px-8 pointer-events-none transition-[top] duration-300 ${
          isScrolled ? "top-2.5 sm:top-4" : "top-3 sm:top-5"
        }`}
      >
        <div
          id="navbarPill"
          className={`pointer-events-auto relative z-50 w-full px-4 sm:px-8 lg:px-12 h-14 sm:h-[60px] rounded-full border transition-[box-shadow,border-color,background-color] duration-300 flex items-center ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border-slate-300/80 shadow-[0_14px_34px_-6px_rgba(17,24,39,0.12),0_4px_10px_-2px_rgba(17,24,39,0.05),inset_0_1px_0_rgba(255,255,255,0.95)]"
              : "bg-white/92 backdrop-blur-xl border-slate-200/90 shadow-[0_6px_24px_-4px_rgba(17,24,39,0.08),0_2px_6px_-1px_rgba(17,24,39,0.04),inset_0_1px_0_rgba(255,255,255,0.9)]"
          }`}
        >
          <div className="max-w-[1360px] mx-auto w-full flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D38] rounded-full pr-1"
            onClick={closeAllMenus}
          >
            <div className="w-7 h-7 rounded-md flex items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-105">
              <img
                src="/commadesk/logo_CommaDesk.webp"
                alt="CommaDesk"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-[15px] sm:text-base tracking-tight text-gray-950">
              CommaDesk
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-3 text-[13px] lg:text-[13.5px] font-medium text-gray-700 whitespace-nowrap">
            {/* 1. Modules Dropdown */}
            <div
              ref={modulesRef}
              onMouseEnter={() => handleMenuHoverEnter("modules")}
              onMouseLeave={handleMenuHoverLeave}
            >
              <button
                type="button"
                onClick={() => handleMenuClick("modules")}
                aria-expanded={isModulesOpen}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                  isModulesOpen
                    ? "bg-slate-100/90 text-gray-950 font-semibold"
                    : "hover:text-gray-950 hover:bg-slate-100/70"
                }`}
              >
                <span>{t.nav.modules}</span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                    isModulesOpen ? "rotate-180 text-gray-950" : ""
                  }`}
                />
              </button>

              {isModulesOpen && (
                <div
                  onMouseEnter={() => {
                    cancelLeaveTimeout();
                    if (!isMenuLocked) setActiveMenu("modules");
                  }}
                  onMouseMove={cancelLeaveTimeout}
                  onMouseLeave={handleMenuHoverLeave}
                  onWheel={(e) => e.stopPropagation()}
                  className="nav-popover-enter absolute left-1/2 -translate-x-1/2 top-full mt-2.5 w-[calc(100vw-2rem)] max-w-[820px] rounded-3xl bg-white/98 backdrop-blur-xl border border-slate-200/90 shadow-[0_24px_48px_-12px_rgba(17,24,39,0.16),0_4px_12px_-2px_rgba(17,24,39,0.06)] p-4 sm:p-5 pb-6 z-50 max-h-[calc(100vh-5.5rem)] overflow-y-auto overscroll-contain custom-menu-scroll before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 before:pointer-events-auto"
                >
                  <div className="flex items-center justify-between px-2 pb-3 mb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {t.nav.exploreAllModules}
                      </span>
                      <span className="font-mono tabular-nums text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-[#FF4D38]/10 text-[#FF4D38]">
                        {modules.length} {language === "vi" ? "Phân hệ" : "Modules"}
                      </span>
                    </div>
                    <Link
                      href="/#features"
                      onClick={closeAllMenus}
                      className="text-xs font-semibold text-[#FF4D38] hover:text-[#E03E2A] transition-colors inline-flex items-center gap-1"
                    >
                      <span>{t.nav.viewAll}</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    <div className="space-y-4">
                      {["operations", "comms"].map((catKey) => {
                        const cat = categories.find((c) => c.key === catKey);
                        if (!cat) return null;
                        const items = modules.filter((m) => m.category === cat.key);
                        return (
                          <div key={cat.key} className="space-y-1">
                            <div className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 px-2 pb-0.5">
                              {cat.title}
                            </div>
                            <div className="space-y-0.5">
                              {items.map((item) => (
                                <NavbarSubmenuItem
                                  key={item.id}
                                  item={item}
                                  onClick={closeAllMenus}
                                />
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="space-y-4">
                      {["workforce", "commerce"].map((catKey) => {
                        const cat = categories.find((c) => c.key === catKey);
                        if (!cat) return null;
                        const items = modules.filter((m) => m.category === cat.key);
                        return (
                          <div key={cat.key} className="space-y-1">
                            <div className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 px-2 pb-0.5">
                              {cat.title}
                            </div>
                            <div className="space-y-0.5">
                              {items.map((item) => (
                                <NavbarSubmenuItem
                                  key={item.id}
                                  item={item}
                                  onClick={closeAllMenus}
                                />
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Solutions Dropdown */}
            <div
              className="relative"
              ref={solutionsRef}
              onMouseEnter={() => handleMenuHoverEnter("solutions")}
              onMouseLeave={handleMenuHoverLeave}
            >
              <button
                type="button"
                onClick={() => handleMenuClick("solutions")}
                aria-expanded={isSolutionsOpen}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                  isSolutionsOpen
                    ? "bg-slate-100/90 text-gray-950 font-semibold"
                    : "hover:text-gray-950 hover:bg-slate-100/70"
                }`}
              >
                <span>{t.nav.solutions}</span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                    isSolutionsOpen ? "rotate-180 text-gray-950" : ""
                  }`}
                />
              </button>

              {isSolutionsOpen && (
                <div
                  onMouseEnter={() => {
                    cancelLeaveTimeout();
                    if (!isMenuLocked) setActiveMenu("solutions");
                  }}
                  onMouseMove={cancelLeaveTimeout}
                  onMouseLeave={handleMenuHoverLeave}
                  onWheel={(e) => e.stopPropagation()}
                  className="nav-popover-enter absolute left-1/2 -translate-x-1/2 top-full mt-3.5 w-[calc(100vw-2rem)] max-w-[460px] rounded-3xl bg-white/98 backdrop-blur-xl border border-slate-200/90 shadow-[0_24px_48px_-12px_rgba(17,24,39,0.16),0_4px_12px_-2px_rgba(17,24,39,0.06)] p-3.5 sm:p-4 z-50 max-h-[calc(100vh-5.5rem)] overflow-y-auto overscroll-contain custom-menu-scroll before:content-[''] before:absolute before:-top-5 before:left-0 before:right-0 before:h-5 before:pointer-events-auto"
                >
                  <div className="space-y-0.5 w-full">
                    {solutionsList.map((sol, idx) => (
                      <NavbarSubmenuItem
                        key={idx}
                        item={sol}
                        onClick={closeAllMenus}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Platform & Trust */}
            <Link
              href="/deployment"
              onClick={closeAllMenus}
              onMouseEnter={() => {
                cancelLeaveTimeout();
                if (!isMenuLocked) {
                  setActiveMenu(null);
                }
              }}
              className={`px-3 py-1.5 rounded-full transition-colors duration-150 whitespace-nowrap ${
                pathname === "/deployment"
                  ? "bg-slate-100/90 text-gray-950 font-semibold"
                  : "hover:text-gray-950 hover:bg-slate-100/70"
              }`}
            >
              {t.nav.platform}
            </Link>

            {/* 4. Resources Dropdown */}
            <div
              className="relative"
              ref={resourcesRef}
              onMouseEnter={() => handleMenuHoverEnter("resources")}
              onMouseLeave={handleMenuHoverLeave}
            >
              <button
                type="button"
                onClick={() => handleMenuClick("resources")}
                aria-expanded={isResourcesOpen}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                  isResourcesOpen
                    ? "bg-slate-100/90 text-gray-950 font-semibold"
                    : "hover:text-gray-950 hover:bg-slate-100/70"
                }`}
              >
                <span>{t.nav.resources}</span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                    isResourcesOpen ? "rotate-180 text-gray-950" : ""
                  }`}
                />
              </button>

              {isResourcesOpen && (
                <div
                  onMouseEnter={() => {
                    cancelLeaveTimeout();
                    if (!isMenuLocked) setActiveMenu("resources");
                  }}
                  onMouseMove={cancelLeaveTimeout}
                  onMouseLeave={handleMenuHoverLeave}
                  onWheel={(e) => e.stopPropagation()}
                  className="nav-popover-enter absolute left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 top-full mt-3.5 w-[calc(100vw-2rem)] max-w-[420px] rounded-3xl bg-white/98 backdrop-blur-xl border border-slate-200/90 shadow-[0_24px_48px_-12px_rgba(17,24,39,0.16),0_4px_12px_-2px_rgba(17,24,39,0.06)] p-3.5 sm:p-4 z-50 max-h-[calc(100vh-5.5rem)] overflow-y-auto overscroll-contain custom-menu-scroll before:content-[''] before:absolute before:-top-5 before:left-0 before:right-0 before:h-5 before:pointer-events-auto"
                >
                  <div className="space-y-0.5 w-full">
                    {resourcesList.map((res, idx) => (
                      <NavbarSubmenuItem
                        key={idx}
                        item={res}
                        onClick={closeAllMenus}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <LanguageSelector variant="pill" />

            <Link
              href="/#features"
              onClick={closeAllMenus}
              className="hidden lg:inline-flex items-center justify-center h-9 px-4 sm:px-5 rounded-full bg-gradient-to-b from-[#FF5D4A] to-[#FF432E] hover:from-[#FF4D38] hover:to-[#DC3522] text-white text-[13px] font-bold tracking-[-0.01em] shadow-[0_4px_14px_rgba(255,77,56,0.32),inset_0_1px_0_rgba(255,255,255,0.24)] hover:shadow-[0_6px_20px_rgba(255,77,56,0.42)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-[0.5px] active:scale-[0.97]"
            >
              {t.nav.getStarted}
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-slate-100/90 hover:bg-slate-200/80 text-slate-800 border border-slate-200/80 transition-colors cursor-pointer"
              aria-label={isMobileMenuOpen ? t.nav.closeMenu : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="w-4 h-4" />
              ) : (
                <MenuIcon className="w-4 h-4" />
              )}
            </button>
          </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div
            id="mobileMenuDrawer"
            className="nav-popover-enter pointer-events-auto relative z-10 md:hidden mt-2.5 bg-white/95 backdrop-blur-xl rounded-[26px] border border-slate-200/90 shadow-[0_24px_48px_-12px_rgba(17,24,39,0.16)] p-3.5 sm:p-4 max-h-[82vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-1.5">
              <div>
                <MobileAccordionTrigger
                  type="modules"
                  title={t.nav.modules}
                  count={modules.length}
                  isOpen={isMobileModulesOpen}
                  onToggle={() => setIsMobileModulesOpen(!isMobileModulesOpen)}
                />

                {isMobileModulesOpen && (
                  <div className="bg-slate-50/90 rounded-2xl p-2 border border-slate-200/70 mt-1 mb-1.5 space-y-0.5 max-h-72 overflow-y-auto">
                    {modules.map((item) => (
                      <NavbarSubmenuItem
                        key={item.id}
                        item={item}
                        onClick={closeAllMenus}
                        variant="mobile"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div>
                <MobileAccordionTrigger
                  type="solutions"
                  title={t.nav.solutions}
                  count={solutionsList.length}
                  isOpen={isMobileSolutionsOpen}
                  onToggle={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                />

                {isMobileSolutionsOpen && (
                  <div className="bg-slate-50/90 rounded-2xl p-2 border border-slate-200/70 mt-1 mb-1.5 space-y-0.5">
                    {solutionsList.map((sol, idx) => (
                      <NavbarSubmenuItem
                        key={idx}
                        item={sol}
                        onClick={closeAllMenus}
                        variant="mobile"
                      />
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/deployment"
                onClick={closeAllMenus}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-slate-800 hover:bg-slate-100/80 font-semibold text-sm transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200/70">
                  <ShieldCheckIcon className="w-4 h-4" />
                </div>
                <span>{t.nav.platform}</span>
              </Link>

              <div>
                <MobileAccordionTrigger
                  type="resources"
                  title={t.nav.resources}
                  count={resourcesList.length}
                  isOpen={isMobileResourcesOpen}
                  onToggle={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                />

                {isMobileResourcesOpen && (
                  <div className="bg-slate-50/90 rounded-2xl p-2 border border-slate-200/70 mt-1 mb-1.5 space-y-0.5">
                    {resourcesList.map((res, idx) => (
                      <NavbarSubmenuItem
                        key={idx}
                        item={res}
                        onClick={closeAllMenus}
                        variant="mobile"
                      />
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div className="h-px bg-slate-100 my-3" />

            <Link
              href="/#features"
              onClick={closeAllMenus}
              className="w-full h-11 px-4 rounded-full bg-gradient-to-b from-[#FF5D4A] to-[#FF432E] hover:from-[#FF4D38] hover:to-[#DC3522] text-white text-center text-[14px] font-bold shadow-[0_4px_14px_rgba(255,77,56,0.32)] transition-all flex items-center justify-center gap-2"
            >
              <span>{t.nav.getStarted}</span>
              <ArrowLongRightIcon className="w-4 h-4" />
            </Link>
          </div>
        )}
      </header>

      {isMobileMenuOpen && (
        <div
          id="mobileMenuBackdrop"
          onClick={closeAllMenus}
          className="frosted-backdrop fixed inset-0 z-40 md:hidden transition-opacity duration-200"
        />
      )}
    </>
  );
}
