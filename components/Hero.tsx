'use client';

import React, { FormEvent } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export const Hero: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    console.log('Email submitted:', email);
  };

  return (
    <section className="w-full bg-[var(--bg-900)] py-[72px]">
      <div className="mx-auto max-w-[1280px] px-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-[28px]">
            {/* Heading */}
            <h1 className="text-[#D0F950] text-[56px] font-bold leading-[64px] tracking-[-0.02em]">
              {/* Will be updated with exact Figma text */}
              Unique Selling point
            </h1>

            {/* Paragraph */}
            <p className="text-[var(--text-200)] text-[18px] font-normal leading-[28px] tracking-[0.01em] max-w-[520px]">
              {/* Will be updated with exact Figma text */}
              Transform your business with our innovative solutions designed to drive growth and success.
            </p>

            {/* Email Input Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-[12px] max-w-[480px]">
              <div className="flex gap-[8px]">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  icon={<Mail className="w-[20px] h-[20px]" />}
                  iconPosition="right"
                  required
                  aria-label="Email address"
                  className="w-[412px] h-[40px] !py-[10px]"
                />
                <Button
                  type="submit"
                  variant="primary"
                  showArrow
                  arrowDirection="up"
                  className="bg-[#D0F950] text-[var(--bg-900)] hover:bg-[#D0F950]/90 px-[20px] py-[8px] h-[40px] rounded-[10px] font-bold whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
              {/* Disclaimer Text */}
              <p className="text-[var(--text-300)] text-[12px] font-normal leading-[16px] tracking-[0.01em]">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>

          {/* Right Column: Image Card */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[520px] h-[420px] rounded-[16px] overflow-hidden bg-[var(--bg-800)] shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
              <div className="w-full h-full bg-gradient-to-br from-[var(--bg-800)] to-[var(--bg-900)] flex items-center justify-center">
                <span className="text-[var(--text-300)] text-[14px]">Hero Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

