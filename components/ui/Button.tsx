import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  showArrow?: boolean;
  arrowDirection?: 'right' | 'up';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, showArrow = false, arrowDirection = 'right', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-[var(--brand-neon)] text-[var(--bg-900)] hover:bg-[var(--brand-neon)]/90',
      outline: 'border border-[var(--text-300)] text-[var(--text-200)] hover:bg-[var(--bg-800)] hover:border-[var(--text-200)]',
      ghost: 'text-[var(--text-200)] hover:bg-[var(--bg-800)]',
    };


    const arrowSvg = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-4 h-4 fill-current"
        style={{
          transform: arrowDirection === 'right' ? 'rotate(45deg)' : undefined,
          transformOrigin: 'center',
        }}
        aria-hidden="true"
      >
        <path d="M288 64h160v160h-48V136L136 400l-24-24L376 112h-88z" />
      </svg>
    );

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], className)}
        {...props}
      >
        {children}
        {showArrow && <span className="ml-[8px]">{arrowSvg}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';


