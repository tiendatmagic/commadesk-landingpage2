import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CommaDesk - Enterprise Multi-Module SaaS Platform",
  description:
    "CommaDesk combines AI retail analytics, HR & automated payroll, Kanban & Gantt project management, multi-location inventory, document registry (Decree 150/370), fleet logistics, ITIL helpdesk, and multi-tier enterprise permissions into one unified operating system.",
  icons: {
    icon: "/favicon.ico",
  },
};

import { LanguageProvider } from "@/i18n/LanguageContext";
import { ScrollRevealManager } from "@/components/ui/ScrollRevealManager";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="bg-[#EAEDF1] min-h-screen text-slate-800 p-2 sm:p-4 md:p-6 lg:p-8 selection:bg-[#FF4D38] selection:text-white">
        <LanguageProvider>
          <ScrollRevealManager />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
