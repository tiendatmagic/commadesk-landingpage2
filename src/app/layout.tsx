import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ScrollRevealManager } from "@/components/ui/ScrollRevealManager";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CommaDesk - Unified Enterprise Operations Platform",
  description:
    "CommaDesk unifies project delivery, HR and automated payroll, document registry (Decree 30/150), multi-warehouse inventory, fleet logistics, ITIL service desk, and vision AI in one workspace.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#F2F4F7] min-h-screen text-[#111827] py-3 sm:py-4 md:py-6 selection:bg-[#FF4D38] selection:text-white">
        <LanguageProvider>
          <ScrollRevealManager />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
