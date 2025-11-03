'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  return (
    <nav className="w-full border-b border-[#D0F950] bg-[var(--bg-900)]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-[1280px] px-[64px]">
        <div className="flex items-center justify-between h-[72px]">
          {/* Left: Logo and Menu */}
          <div className="flex items-center gap-[48px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" aria-label="Home">
                <Image
                  src="/flowzi.png"
                  alt="Logo"
                  width={120}
                  height={32}
                  className="h-[32px] w-auto"
                  priority
                />
              </a>
            </div>

            {/* Menu Items */}
            <ul className="hidden md:flex items-center gap-[32px] list-none">
              <li>
                <a
                  href="#about"
                  className="text-[var(--text-200)] text-[14px] font-medium leading-[20px] tracking-[0.01em] hover:text-[var(--text-100)] transition-colors focus:outline-none focus:text-[var(--text-100)]"
                >
                  About Us
                </a>
              </li>
              <li className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="flex items-center gap-[4px] text-[#D0F950] text-[14px] font-medium leading-[20px] tracking-[0.01em] hover:text-[#D0F950]/80 transition-colors focus:outline-none focus:text-[#D0F950]"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown className="w-[16px] h-[16px]" aria-hidden="true" />
                </button>
              </li>
              <li className="relative">
                <button
                  onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                  onMouseEnter={() => setIsPortfolioOpen(true)}
                  onMouseLeave={() => setIsPortfolioOpen(false)}
                  className="flex items-center gap-[4px] text-[var(--text-200)] text-[14px] font-medium leading-[20px] tracking-[0.01em] hover:text-[var(--text-100)] transition-colors focus:outline-none focus:text-[var(--text-100)]"
                  aria-expanded={isPortfolioOpen}
                  aria-haspopup="true"
                >
                  Portfolio
                  <ChevronDown className="w-[16px] h-[16px]" aria-hidden="true" />
                </button>
              </li>
              <li>
                <a
                  href="#blogs"
                  className="text-[var(--text-200)] text-[14px] font-medium leading-[20px] tracking-[0.01em] hover:text-[var(--text-100)] transition-colors focus:outline-none focus:text-[var(--text-100)]"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-[12px]">
            <Button
              variant="outline"
              className="px-[20px] py-[10px] text-[14px] font-medium leading-[20px] tracking-[0.01em] h-[40px] bg-white text-black hover:bg-white/90 border-white"
            >
              Contact Us
            </Button>
            <Button
              variant="primary"
              showArrow
              arrowDirection="up"
              className="px-[20px] py-[10px] text-[14px] font-medium leading-[20px] tracking-[0.01em] h-[40px] bg-[#D0F950] text-[var(--bg-900)] hover:bg-[#D0F950]/90"
            >
              Free Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

