'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Hero1Section } from '@/components/hero/Hero1Section';
import { Hero2Section } from '@/components/hero/Hero2Section';
import { BentoGridSection } from '@/components/features/BentoGridSection';
import { ArcCarousel } from '@/components/integrations/ArcCarousel';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { Footer } from '@/components/footer/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      <main className="max-w-[1536px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <Hero1Section />
        <Hero2Section />
        <BentoGridSection />
        <ArcCarousel />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  );
}
