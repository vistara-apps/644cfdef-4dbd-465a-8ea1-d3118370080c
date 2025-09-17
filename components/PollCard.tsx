'use client';

import { useState } from 'react';
import { Poll, PollCardVariant } from '@/lib/types';
import { InteractiveButton } from './InteractiveButton';
import { ProgressBar } from './ProgressBar';
import { formatNumber, formatDate } from '@/lib/utils';
import { Users, Clock, Coins } from 'lucide-react';

interface PollCardProps {
  poll: Poll;
  variant?: PollCardVariant;
  onVote?: (pollId: string, option: string) => void;
  onClaimReward?: (pollId: string) => void;
}

export function PollCard({ 
  poll, 
  variant = 'preview',
  onVote,
  onClaimReward 
}: PollCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [isVoting, setIsVoting] = useState(false);

  const handleVote = async (option: string) => {
    if (hasVoted || isVoting) return;
    
    setIsVoting(true);
    setSelectedOption(option);
    
    try {
      await onVote?.(poll.id, option);
      setHasVoted(true);
    } catch (error) {
      console.error('Error voting:', error);
      setSelectedOption(null);
    } finally {
      setIsVoting(false);
    }
  };

  const handleClaimReward = async () => {
    try {
      await onClaimReward?.(poll.id);
    } catch (error) {
      console.error('Error claiming reward:', error);
    }
  };

  const isCompact = variant === 'compact';

  return (
    <div className={`
      bg-dark-surface rounded-lg shadow-card border border-gray-800 overflow-hidden
      transition-all duration-200 hover:shadow-lg hover:border-gray-700
      ${isCompact ? 'p-4' : 'p-6'}
    `}>
      {/* Poll Header */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className={`
            font-semibold text-dark-text-primary
            ${isCompact ? 'text-base' : 'text-lg'}
          `}>
            {poll.question}
          </h3>
          {poll.isActive && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Active
            </span>
          )}
        </div>

        {/* Poll Metadata */}
        <div className="flex items-center space-x-4 text-sm text-dark-text-secondary">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {formatNumber(poll.responses || 0)} responses
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {formatDate(poll.createdAt)}
          </div>
          {poll.rewardAmount && poll.rewardToken && (
            <div className="flex items-center text-yellow-400">
              <Coins className="w-4 h-4 mr-1" />
              {poll.rewardAmount} {poll.rewardToken}
            </div>
          )}
        </div>
      </div>

      {/* Poll Options */}
      {!isCompact && (
        <div className="mt-6 space-y-3">
          {poll.options.map((option, index) => (
            <div key={index} className="space-y-2">
              <button
                onClick={() => handleVote(option)}
                disabled={hasVoted || isVoting}
                className={`
                  w-full text-left p-3 rounded-md border transition-all duration-200
                  ${selectedOption === option
                    ? 'border-accent bg-accent/10 text-accent'
                    : hasVoted
                    ? 'border-gray-700 bg-gray-800/50 text-dark-text-secondary cursor-not-allowed'
                    : 'border-gray-700 bg-gray-800/30 text-dark-text-primary hover:border-gray-600 hover:bg-gray-800/50'
                  }
                  ${isVoting ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {hasVoted && (
                    <span className="text-sm text-dark-text-secondary">
                      {Math.floor(Math.random() * 40 + 10)}%
                    </span>
                  )}
                </div>
              </button>
              
              {hasVoted && (
                <ProgressBar 
                  variant="pollProgress" 
                  progress={Math.floor(Math.random() * 40 + 10)}
                  className="h-2"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-6 flex items-center justify-between">
        {isCompact ? (
          <InteractiveButton variant="secondary" size="sm">
            View Poll
          </InteractiveButton>
        ) : hasVoted ? (
          <div className="flex space-x-3">
            <InteractiveButton variant="secondary" size="sm">
              View Results
            </InteractiveButton>
            {poll.rewardAmount && (
              <InteractiveButton 
                variant="reward" 
                size="sm"
                onClick={handleClaimReward}
              >
                <Coins className="w-4 h-4 mr-1" />
                Claim Reward
              </InteractiveButton>
            )}
          </div>
        ) : (
          <InteractiveButton 
            variant="primary" 
            size="sm"
            disabled={isVoting}
          >
            {isVoting ? 'Voting...' : 'Vote Now'}
          </InteractiveButton>
        )}
        
        <div className="text-sm text-dark-text-secondary">
          {formatNumber(poll.responses || 0)} votes
        </div>
      </div>
    </div>
  );
}
