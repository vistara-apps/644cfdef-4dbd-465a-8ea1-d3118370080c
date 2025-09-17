'use client';

import { cn } from '@/lib/utils';

interface ProgressBarProps {
  variant?: 'pollProgress';
  progress: number;
  className?: string;
  showLabel?: boolean;
}

export function ProgressBar({ 
  variant = 'pollProgress', 
  progress, 
  className,
  showLabel = false 
}: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between mb-1">
        {showLabel && (
          <span className="text-sm font-medium text-dark-text-secondary">
            {clampedProgress}%
          </span>
        )}
      </div>
      <div className="w-full bg-gray-800 rounded-full overflow-hidden">
        <div
          className={cn(
            'h-full transition-all duration-300 ease-out',
            variant === 'pollProgress' && 'bg-accent'
          )}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
}
