'use client';

import { Token, TokenDisplayVariant } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import { Coins, TrendingUp, TrendingDown } from 'lucide-react';

interface TokenDisplayProps {
  variant?: TokenDisplayVariant;
  token: Token;
  showTrend?: boolean;
}

export function TokenDisplay({ 
  variant = 'default', 
  token, 
  showTrend = false 
}: TokenDisplayProps) {
  const hasIcon = variant === 'withIcon';
  const trend = Math.random() > 0.5 ? 'up' : 'down';
  const trendValue = (Math.random() * 10).toFixed(2);

  return (
    <div className="bg-dark-surface rounded-lg p-4 shadow-card border border-gray-800 hover:border-gray-700 transition-colors duration-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          {hasIcon && (
            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
              <Coins className="w-5 h-5 text-accent" />
            </div>
          )}
          <div>
            <h3 className="font-semibold text-dark-text-primary">
              {token.symbol}
            </h3>
            <p className="text-sm text-dark-text-secondary">
              {token.name}
            </p>
          </div>
        </div>
        
        {showTrend && (
          <div className={`flex items-center space-x-1 ${
            trend === 'up' ? 'text-green-400' : 'text-red-400'
          }`}>
            {trend === 'up' ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">
              {trendValue}%
            </span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-dark-text-secondary">Balance</span>
          <span className="font-semibold text-dark-text-primary">
            {token.balance?.toLocaleString() || '0'} {token.symbol}
          </span>
        </div>
        
        {token.value && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-dark-text-secondary">Value</span>
            <span className="font-semibold text-dark-text-primary">
              {formatCurrency(token.value)}
            </span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-800">
        <button className="w-full text-center text-sm text-accent hover:text-accent/80 transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
}
