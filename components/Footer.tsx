'use client';

import React, { FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    console.log('Email submitted:', email);
  };

  const navigationLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const columnTwoLinks = [
    { label: 'Link Six', href: '#' },
    { label: 'Link Seven', href: '#' },
    { label: 'Link Eight', href: '#' },
    { label: 'Link Nine', href: '#' },
    { label: 'Link Ten', href: '#' },
  ];

  const socialLinks = [
    { label: 'Facebook', href: '#', icon: Facebook },
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'X', href: '#', icon: Twitter },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'Youtube', href: '#', icon: Youtube },
  ];

  return (
    <footer className="w-full bg-[var(--bg-900)]">
      <div className="mx-auto max-w-[1280px] px-[64px]">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-[80px] py-[64px]">
          {/* Top Section: Newsletter and Links */}
          <div className="flex flex-col md:flex-row gap-[120px]">
            {/* Newsletter Section */}
            <div className="flex flex-col gap-[24px] max-w-[560px]">
              {/* Logo */}
              <div className="mb-[4px]">
                <Image
                  src="/flowzi_logo_2.png"
                  alt="Flowzi Logo"
                  width={144}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </div>
              
              {/* Newsletter Text */}
              <p className="text-[var(--text-100)] text-[16px] font-normal leading-[24px]">
                Join our newsletter to stay up to date on project offers.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-[12px]">
                <div className="flex gap-[16px]">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    icon={<Mail className="w-[16px] h-[16px]" />}
                    iconPosition="right"
                    required
                    aria-label="Email address"
                    className="flex-1 h-[40px] !border-white !bg-transparent !text-white placeholder:!text-white rounded-[10px] !py-[8px] !px-[20px]"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    showArrow
                    arrowDirection="up"
                    className="bg-[#D0F950] text-[var(--bg-900)] hover:bg-[#D0F950]/90 px-[20px] py-[8px] h-[40px] rounded-[10px] font-bold"
                  >
                    Subscribe
                  </Button>
                </div>
                
                {/* Privacy Policy Text */}
                <p className="text-[var(--text-100)] text-[12px] font-normal leading-[18px]">
                  By subscribing you agree to with our{' '}
                  <Link href="#privacy" className="underline">
                    Privacy Policy
                  </Link>
                  {' '}and provide consent to receive updates from our company.
                </p>
              </form>
            </div>

            {/* Links Section */}
            <div className="flex gap-[32px] flex-grow">
              {/* Navigations Column */}
              <div className="flex flex-col gap-[16px] flex-1">
                <h3 className="text-[var(--text-100)] text-[16px] font-semibold leading-[24px]">
                  Navigations
                </h3>
                <ul className="flex flex-col">
                  {navigationLinks.map((link) => (
                    <li key={link.label} className="py-[8px]">
                      <Link
                        href={link.href}
                        className="text-[var(--text-100)] text-[14px] font-normal leading-[21px] hover:opacity-80 transition-opacity"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column Two */}
              <div className="flex flex-col gap-[16px] flex-1">
                <h3 className="text-[var(--text-100)] text-[16px] font-semibold leading-[24px]">
                  Column Two
                </h3>
                <ul className="flex flex-col">
                  {columnTwoLinks.map((link) => (
                    <li key={link.label} className="py-[8px]">
                      <Link
                        href={link.href}
                        className="text-[var(--text-100)] text-[14px] font-normal leading-[21px] hover:opacity-80 transition-opacity"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Follow Us Column */}
              <div className="flex flex-col gap-[16px] flex-1">
                <h3 className="text-[var(--text-100)] text-[16px] font-semibold leading-[24px]">
                  Follow Us
                </h3>
                <ul className="flex flex-col">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <li key={link.label} className="py-[8px]">
                        <Link
                          href={link.href}
                          className="text-[var(--text-100)] text-[14px] font-normal leading-[21px] hover:opacity-80 transition-opacity flex items-center gap-[12px]"
                        >
                          <IconComponent className="w-[24px] h-[24px] text-white flex-shrink-0" />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Credits Section */}
          <div className="flex flex-col items-center justify-center gap-[32px]">
            {/* Flowzi Logo/Text */}
            <div className="flex justify-center">
              <Image
                src="/big_flowzi.png"
                alt="Flowzi"
                width={560}
                height={154}
                className="w-auto h-auto max-w-full"
              />
            </div>

            {/* Divider and Bottom Row */}
            <div className="flex flex-col gap-[32px] w-full">
              {/* Horizontal Divider */}
              <div className="w-full h-[1px] bg-[#D0F950]"></div>

              {/* Bottom Row */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-[24px]">
                {/* Copyright */}
                <p className="text-[var(--text-100)] text-[14px] font-normal leading-[21px]">
                  © {currentYear} Flowzi. All rights reserved.
                </p>

                {/* Footer Links */}
                <div className="flex gap-[24px] items-center">
                  <Link
                    href="#privacy"
                    className="text-[var(--text-100)] text-[14px] font-normal leading-[21px] underline hover:opacity-80 transition-opacity"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#terms"
                    className="text-[var(--text-100)] text-[14px] font-normal leading-[21px] underline hover:opacity-80 transition-opacity"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


