'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#D0F950]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-[24px] flex items-center justify-between text-left focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`answer-${question}`}
      >
        <span className="text-[var(--text-100)] text-[18px] font-semibold leading-[28px] tracking-[0.01em] pr-[24px]">
          {question}
        </span>
        <ChevronDown
          className={cn(
            'w-[24px] h-[24px] text-[var(--text-300)] flex-shrink-0 transition-transform duration-500 ease-in-out',
            isOpen && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id={`answer-${question}`}
        className={cn(
          'overflow-hidden transition-all duration-500 ease-in-out',
          isOpen ? 'max-h-[1000px] opacity-100 pb-[24px]' : 'max-h-0 opacity-0'
        )}
        aria-hidden={!isOpen}
      >
        <p className="text-[var(--text-200)] text-[16px] font-normal leading-[24px] tracking-[0.01em]">
          {answer}
        </p>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: Array<{ question: string; answer: string }>;
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
};


