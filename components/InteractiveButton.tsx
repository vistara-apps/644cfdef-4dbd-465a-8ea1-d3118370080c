'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { ButtonVariant, ButtonSize } from '@/lib/types';
import { cn } from '@/lib/utils';

interface InteractiveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent/50',
  secondary: 'bg-dark-surface text-dark-text-primary border border-gray-700 hover:bg-gray-800 focus:ring-gray-600/50',
  reward: 'bg-yellow-500 text-black hover:bg-yellow-400 focus:ring-yellow-500/50',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const InteractiveButton = forwardRef<HTMLButtonElement, InteractiveButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'active:scale-95',
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

InteractiveButton.displayName = 'InteractiveButton';
