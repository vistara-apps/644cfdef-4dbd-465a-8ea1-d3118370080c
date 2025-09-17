export interface User {
  userId: string;
  farcasterId?: string;
  walletAddress?: string;
  createdAt: Date;
}

export interface Poll {
  id: string;
  creatorId: string;
  question: string;
  options: string[];
  rewardToken?: string;
  rewardAmount?: number;
  distributionTarget?: string;
  createdAt: Date;
  isActive: boolean;
  responses?: number;
}

export interface Response {
  responseId: string;
  pollId: string;
  userId: string;
  selectedOption: string;
  responseText?: string;
  timestamp: Date;
  rewardClaimed: boolean;
}

export interface Token {
  tokenId?: string;
  name: string;
  symbol: string;
  contractAddress?: string;
  creatorId?: string;
  balance?: number;
  value?: number;
}

export interface AnalyticsData {
  totalPolls: number;
  totalResponses: number;
  totalRewardsDistributed: number;
  engagementRate: number;
}

export type ButtonVariant = 'primary' | 'secondary' | 'reward';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type PollCardVariant = 'compact' | 'preview';
export type ChartVariant = 'bar' | 'pie';
export type TokenDisplayVariant = 'withIcon' | 'default';
