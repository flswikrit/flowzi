'use client';

import React from 'react';
import Image from 'next/image';

interface LogoCarouselProps {
  logos: Array<{ src: string; alt: string }>;
}

/**
 * LogoCarousel Component
 * 
 * Creates a seamless, infinite horizontal scrolling animation of logos.
 * Features:
 * - Continuous right-to-left scroll animation
 * - Duplicated logo set for seamless looping
 * - Grayscale by default, color on hover with scale effect
 * - Responsive with slower animation on mobile
 * - Gradient fade edges for smooth visual effect
 */
export const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  // Duplicate logos array to create seamless infinite loop
  // This ensures when first set scrolls out, second set is ready to take over
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-[24px]">
      {/* Left gradient fade overlay */}
      <div className="absolute left-0 top-0 w-[120px] h-full bg-gradient-to-r from-[var(--bg-900)] to-transparent z-10 pointer-events-none" />
      
      {/* Right gradient fade overlay */}
      <div className="absolute right-0 top-0 w-[120px] h-full bg-gradient-to-l from-[var(--bg-900)] to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling container - Desktop: faster, Mobile: slower */}
      <div className="flex gap-[32px] md:gap-[48px] items-center animate-scroll-mobile md:animate-scroll">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`logo-${index}`}
            className="flex-shrink-0 flex items-center justify-center h-[60px] w-[120px] px-[16px]"
          >
            {/* Logo container with hover effects */}
            <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="w-auto h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                priority={index < 10}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

