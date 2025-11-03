'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Service 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      id: 2,
      title: 'Service 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      id: 3,
      title: 'Service 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];

  return (
    <section className="w-full bg-[var(--bg-800)] py-[80px]">
      <div className="mx-auto max-w-[1280px] px-[64px]">
        {/* Section Header */}
        <div className="text-center mb-[64px]">
          <h2 className="text-[#D0F950] text-[40px] font-bold leading-[48px] tracking-[-0.02em] mb-[16px]">
            Our Services
          </h2>
          <p className="text-[var(--text-300)] text-[18px] font-normal leading-[28px] tracking-[0.01em] max-w-[640px] mx-auto">
            Comprehensive solutions tailored to meet your business needs and drive success.
          </p>
        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-[#D0F950] mb-[48px]"></div>

        {/* Services Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-[48px]">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative flex flex-col px-[32px] py-[32px]"
            >
              {/* Vertical Divider - Left side (except first card) */}
              {index > 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D0F950]"></div>
              )}

              {/* Logo */}
              <div className="mb-[24px]">
                <Image
                  src="/flowzi.png"
                  alt={`${service.title} logo`}
                  width={64}
                  height={64}
                  className="w-auto h-[64px] object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[var(--text-100)] text-[28px] font-bold leading-[36px] tracking-[-0.01em] mb-[16px]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--text-200)] text-[16px] font-normal leading-[24px] tracking-[0.01em] mb-[24px] flex-grow">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="text-[#D0F950] text-[16px] font-medium hover:text-[#D0F950]/80 transition-colors inline-block"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="flex justify-center">
          <Button
            variant="primary"
            className="bg-[#D0F950] text-[var(--bg-900)] hover:bg-[#D0F950]/90 px-[32px] py-[12px] text-[16px] font-medium"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};


