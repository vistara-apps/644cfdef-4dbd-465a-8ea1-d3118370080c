'use client';

import { InteractiveButton } from '@/components/InteractiveButton';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <AlertCircle className="w-16 h-16 text-red-400" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-dark-text-primary">
            Something went wrong!
          </h2>
          <p className="text-dark-text-secondary">
            We encountered an error while loading EngageChain. Please try again.
          </p>
        </div>
        <InteractiveButton
          variant="primary"
          onClick={reset}
          className="w-full"
        >
          Try Again
        </InteractiveButton>
      </div>
    </div>
  );
}
