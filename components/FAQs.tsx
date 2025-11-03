'use client';

import React from 'react';
import { Accordion } from '@/components/ui/Accordion';

export const FAQs: React.FC = () => {
  const faqItems = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive range of services including fast performance optimization, secure infrastructure, scalable solutions, analytics and insights, team collaboration tools, and data protection services. Each service is tailored to meet your specific business needs.',
    },
    {
      question: 'How do I get started?',
      answer: 'Getting started is easy! Simply sign up for a free demo through our website, and our team will reach out to you within 24 hours to discuss your requirements and create a customized plan for your business.',
    },
    {
      question: 'What pricing plans are available?',
      answer: 'We offer flexible pricing plans designed to scale with your business. Our plans range from starter packages for small businesses to enterprise solutions for large organizations. Contact us to discuss which plan best fits your needs.',
    },
    {
      question: 'Is there customer support available?',
      answer: 'Yes, we provide 24/7 customer support to all our clients. Our dedicated support team is available through email, live chat, and phone to assist you with any questions or issues you may have.',
    },
    {
      question: 'Can I customize the services to my needs?',
      answer: 'Absolutely! We understand that every business is unique. Our team works closely with you to customize our services according to your specific requirements, ensuring you get the most value from our solutions.',
    },
    {
      question: 'What makes your services different?',
      answer: 'Our services are built on cutting-edge technology with a focus on performance, security, and scalability. We combine industry best practices with innovative solutions to deliver results that drive real business value.',
    },
  ];

  return (
    <section className="w-full bg-[var(--bg-900)] py-[80px]">
      <div className="mx-auto max-w-[1280px] px-[64px]">
        {/* Section Header */}
        <div className="text-center mb-[64px]">
          <h2 className="text-[#D0F950] text-[40px] font-bold leading-[48px] tracking-[-0.02em] mb-[16px]">
            Frequently Asked Questions
          </h2>
          <p className="text-[var(--text-300)] text-[18px] font-normal leading-[28px] tracking-[0.01em] max-w-[640px] mx-auto">
            {/* Will be updated with exact Figma text */}
            Find answers to common questions about our services and how we can help your business.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-[800px] mx-auto">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
};


