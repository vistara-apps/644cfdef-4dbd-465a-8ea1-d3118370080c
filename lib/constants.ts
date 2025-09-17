export const APP_CONFIG = {
  name: 'EngageChain',
  tagline: 'Monetize your audience with instant, interactive polls and rewards',
  description: 'An all-in-one platform for creators and brands to build, distribute, and monetize interactive micro-surveys and polls',
  url: 'https://engagechain.app',
  version: '1.0.0',
};

export const CHAIN_CONFIG = {
  chainId: 8453, // Base mainnet
  name: 'Base',
  currency: 'ETH',
  explorerUrl: 'https://basescan.org',
};

export const TOKEN_ADDRESSES = {
  ENGAGE: '0x1234567890123456789012345678901234567890', // Mock address
  BASE: '0x0987654321098765432109876543210987654321', // Mock address
};

export const POLL_CATEGORIES = [
  'DeFi',
  'NFTs',
  'Gaming',
  'Social',
  'Technology',
  'Entertainment',
  'Sports',
  'Education',
] as const;

export const REWARD_TIERS = {
  BRONZE: { min: 1, max: 10, color: 'text-orange-400' },
  SILVER: { min: 11, max: 50, color: 'text-gray-400' },
  GOLD: { min: 51, max: 100, color: 'text-yellow-400' },
  PLATINUM: { min: 101, max: Infinity, color: 'text-purple-400' },
} as const;

export const ANIMATION_DURATIONS = {
  fast: 100,
  base: 200,
  slow: 300,
} as const;
