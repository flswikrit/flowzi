import React from 'react';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, iconPosition = 'left', type = 'text', ...props }, ref) => {
    return (
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[var(--text-300)] pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            'w-full bg-[var(--bg-800)] border border-[var(--text-300)]/20 rounded-lg text-[var(--text-200)] placeholder:text-[var(--text-300)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand-neon)] focus:border-transparent',
            icon && iconPosition === 'left' && 'pl-[48px] pr-[16px] py-[12px]',
            icon && iconPosition === 'right' && 'pl-[16px] pr-[48px] py-[12px]',
            !icon && 'px-[16px] py-[12px]',
            className
          )}
          {...props}
        />
        {icon && iconPosition === 'right' && (
          <div className="absolute right-[16px] top-1/2 -translate-y-1/2 text-white pointer-events-none">
            {icon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';


