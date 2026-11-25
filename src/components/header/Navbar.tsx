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
  const { t, modules } = useLanguage();
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
      <header
        id="mainHeader"
        className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1536px] px-3 sm:px-6 lg:px-8 pointer-events-none"
      >
        <div
          id="navbarPill"
          className={`pointer-events-auto relative z-50 px-3 sm:px-5 lg:px-6 h-14 rounded-2xl border transition-[box-shadow,border-color,background-color] duration-200 flex items-center justify-between gap-2 sm:gap-4 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-[0_8px_24px_rgba(17,24,39,0.06)] border-slate-900/[0.1]"
              : "bg-white/95 backdrop-blur-md shadow-[0_1px_2px_rgba(17,24,39,0.05)] border-slate-900/[0.08]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D38] rounded-lg"
            onClick={closeAllMenus}
          >
            <div className="w-7 h-7 rounded-md flex items-center justify-center overflow-hidden">
              <img
                src="/commadesk/logo_CommaDesk.webp"
                alt="CommaDesk"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-[16px] tracking-[-0.01em] text-[#111827]">
              CommaDesk
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7 text-[14px] font-medium text-[#4B5565] whitespace-nowrap">
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
                className={`flex items-center gap-1 hover:text-[#111827] transition-colors duration-150 cursor-pointer py-1 whitespace-nowrap ${
                  isModulesOpen ? "text-[#111827]" : ""
                }`}
              >
                <span>{t.nav.modules}</span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 text-[#6B7487] transition-transform duration-150 ${
                    isModulesOpen ? "rotate-180 text-[#111827]" : ""
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
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[calc(100vw-2rem)] max-w-[800px] rounded-2xl bg-white border border-slate-900/[0.08] shadow-[0_8px_24px_rgba(17,24,39,0.08)] p-4 sm:p-5 z-50 max-h-[calc(100vh-5.5rem)] overflow-y-auto overscroll-contain custom-menu-scroll before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:pointer-events-auto"
                >
                  <div className="flex items-center justify-between px-2 pb-3 mb-3 border-b border-slate-900/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-medium text-[#4B5565]">
                        {t.nav.exploreAllModules}
                      </span>
                      <span className="font-mono tabular-nums text-[12px] text-[#6B7487]">
                        ({modules.length})
                      </span>
                    </div>
                    <Link
                      href="/#features"
                      onClick={closeAllMenus}
                      className="text-[13px] font-medium text-[#C8321F] hover:text-[#111827] transition-colors inline-flex items-center gap-1"
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
                            <div className="text-[12px] font-medium text-[#6B7487] px-2 pb-1">
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
                            <div className="text-[12px] font-medium text-[#6B7487] px-2 pb-1">
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
                className={`flex items-center gap-1 hover:text-[#111827] transition-colors duration-150 cursor-pointer py-1 whitespace-nowrap ${
                  isSolutionsOpen ? "text-[#111827]" : ""
                }`}
              >
                <span>{t.nav.solutions}</span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 text-[#6B7487] transition-transform duration-150 ${
                    isSolutionsOpen ? "rotate-180 text-[#111827]" : ""
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
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[calc(100vw-2rem)] max-w-[440px] rounded-2xl bg-white border border-slate-900/[0.08] shadow-[0_8px_24px_rgba(17,24,39,0.08)] p-3 z-50 max-h-[calc(100vh-5.5rem)] overflow-y-auto overscroll-contain custom-menu-scroll before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 before:pointer-events-auto"
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
              className="hover:text-[#111827] transition-colors duration-150 whitespace-nowrap py-1"
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
                className={`flex items-center gap-1 hover:text-[#111827] transition-colors duration-150 cursor-pointer py-1 whitespace-nowrap ${
                  isResourcesOpen ? "text-[#111827]" : ""
                }`}
              >
                <span>{t.nav.resources}</span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 text-[#6B7487] transition-transform duration-150 ${
                    isResourcesOpen ? "rotate-180 text-[#111827]" : ""
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
                  className="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 top-full mt-3 w-[calc(100vw-2rem)] max-w-[400px] rounded-2xl bg-white border border-slate-900/[0.08] shadow-[0_8px_24px_rgba(17,24,39,0.08)] p-3 z-50 max-h-[calc(100vh-5.5rem)] overflow-y-auto overscroll-contain custom-menu-scroll before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 before:pointer-events-auto"
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
          <div className="flex items-center gap-2 shrink-0">
            <LanguageSelector variant="pill" />

            <Link
              href="/#features"
              onClick={closeAllMenus}
              className="hidden lg:inline-flex items-center justify-center h-9 px-4 rounded-[10px] bg-[#111827] hover:bg-[#1F2937] text-white text-[13px] font-medium transition-[background-color,transform] duration-150 active:scale-[0.98]"
            >
              {t.nav.getStarted}
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-[10px] bg-[#ECEFF4] hover:bg-slate-200/80 text-[#111827] transition-colors cursor-pointer"
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

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div
            id="mobileMenuDrawer"
            className="pointer-events-auto relative z-10 md:hidden mt-2 bg-white rounded-2xl border border-slate-900/[0.08] shadow-[0_8px_24px_rgba(17,24,39,0.08)] p-4 max-h-[82vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-1">
              <div>
                <MobileAccordionTrigger
                  type="modules"
                  title={t.nav.modules}
                  count={modules.length}
                  isOpen={isMobileModulesOpen}
                  onToggle={() => setIsMobileModulesOpen(!isMobileModulesOpen)}
                />

                {isMobileModulesOpen && (
                  <div className="bg-[#F5F7FA] rounded-xl p-2 border border-slate-900/[0.06] mt-1 mb-1.5 space-y-0.5 max-h-72 overflow-y-auto">
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
                  <div className="bg-[#F5F7FA] rounded-xl p-2 border border-slate-900/[0.06] mt-1 mb-1.5 space-y-0.5">
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
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#111827] hover:bg-[#F5F7FA] font-medium text-[14px] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F5F7FA] text-[#4B5565] flex items-center justify-center shrink-0 border border-slate-900/[0.08]">
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
                  <div className="bg-[#F5F7FA] rounded-xl p-2 border border-slate-900/[0.06] mt-1 mb-1.5 space-y-0.5">
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

            <div className="h-px bg-slate-900/[0.06] my-3" />

            <Link
              href="/#features"
              onClick={closeAllMenus}
              className="w-full h-11 px-4 bg-[#111827] hover:bg-[#1F2937] text-white text-center text-[14px] font-medium rounded-[10px] transition-colors flex items-center justify-center gap-2"
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
