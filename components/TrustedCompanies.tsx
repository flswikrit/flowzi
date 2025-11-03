'use client';

import React from 'react';
import { LogoCarousel } from '@/components/ui/LogoCarousel';


export const TrustedCompanies: React.FC = () => {
  const logos = Array.from({ length: 10 }, (_, i) => ({
    src: '/flowzi.png',
    alt: `Trusted Company ${i + 1}`,
  }));

  return (
    <section className="w-full bg-[var(--bg-900)] py-[64px]">
      <div className="mx-auto max-w-[1280px] px-[64px]">
        {/* Section Title and Subtitle */}
        <div className="text-center mb-[48px]">
          <h2 className="text-[#D0F950] text-[32px] font-bold leading-[40px] tracking-[-0.01em] mb-[12px]">
            Trusted by Leading Companies
          </h2>
          <p className="text-[var(--text-300)] text-[16px] font-normal leading-[24px] tracking-[0.01em] max-w-[640px] mx-auto">
          See why growing businesses choose our platform
          </p>
        </div>

        {/* Logo Carousel - Infinite Scrolling Animation */}
        <LogoCarousel logos={logos} />
      </div>
    </section>
  );
};


