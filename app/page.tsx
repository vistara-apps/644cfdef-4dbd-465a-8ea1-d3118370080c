import { AppShell } from '@/components/AppShell';
import { PollCard } from '@/components/PollCard';
import { InteractiveButton } from '@/components/InteractiveButton';
import { AnalyticsChart } from '@/components/AnalyticsChart';
import { TokenDisplay } from '@/components/TokenDisplay';
import { Plus, TrendingUp, Users, Coins } from 'lucide-react';

// Mock data for demonstration
const mockPolls = [
  {
    id: '1',
    question: 'What\'s your favorite DeFi protocol?',
    options: ['Uniswap', 'Aave', 'Compound', 'Curve'],
    responses: 1247,
    rewardAmount: 10,
    rewardToken: 'ENGAGE',
    isActive: true,
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    question: 'Which Base ecosystem project excites you most?',
    options: ['Coinbase Wallet', 'Base Name Service', 'Aerodrome', 'Friend.tech'],
    responses: 892,
    rewardAmount: 5,
    rewardToken: 'BASE',
    isActive: true,
    createdAt: new Date('2024-01-14'),
  },
];

const mockAnalytics = {
  totalPolls: 24,
  totalResponses: 5420,
  totalRewardsDistributed: 12500,
  engagementRate: 78.5,
};

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-8">
          <h1 className="text-3xl font-bold text-dark-text-primary">
            Monetize your audience with{' '}
            <span className="text-yellow-400">interactive polls</span>{' '}
            and rewards
          </h1>
          <p className="text-dark-text-secondary max-w-2xl mx-auto">
            Create quizzes and polls to engage your audience. Reward participation 
            with tokens and build a loyal community.
          </p>
          <InteractiveButton variant="primary" size="lg" className="mt-6">
            <Plus className="w-5 h-5 mr-2" />
            Create Your First Poll
          </InteractiveButton>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-dark-surface rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <div className="text-2xl font-bold text-dark-text-primary">
              {mockAnalytics.totalPolls}
            </div>
            <div className="text-sm text-dark-text-secondary">Active Polls</div>
          </div>
          <div className="bg-dark-surface rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <div className="text-2xl font-bold text-dark-text-primary">
              {mockAnalytics.totalResponses.toLocaleString()}
            </div>
            <div className="text-sm text-dark-text-secondary">Total Responses</div>
          </div>
          <div className="bg-dark-surface rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Coins className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-dark-text-primary">
              {mockAnalytics.totalRewardsDistributed.toLocaleString()}
            </div>
            <div className="text-sm text-dark-text-secondary">Rewards Distributed</div>
          </div>
          <div className="bg-dark-surface rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-dark-text-primary">
              {mockAnalytics.engagementRate}%
            </div>
            <div className="text-sm text-dark-text-secondary">Engagement Rate</div>
          </div>
        </div>

        {/* Active Polls */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-dark-text-primary">
              Active Polls
            </h2>
            <InteractiveButton variant="secondary">
              View All
            </InteractiveButton>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {mockPolls.map((poll) => (
              <PollCard key={poll.id} poll={poll} variant="preview" />
            ))}
          </div>
        </div>

        {/* Analytics Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-dark-text-primary">
            Analytics Overview
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <AnalyticsChart variant="bar" />
            <AnalyticsChart variant="pie" />
          </div>
        </div>

        {/* Token Rewards */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-dark-text-primary">
            Your Tokens
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <TokenDisplay 
              variant="withIcon" 
              token={{
                symbol: 'ENGAGE',
                name: 'EngageChain Token',
                balance: 1250,
                value: 125.50
              }}
            />
            <TokenDisplay 
              variant="withIcon" 
              token={{
                symbol: 'BASE',
                name: 'Base Token',
                balance: 45,
                value: 89.25
              }}
            />
            <TokenDisplay 
              variant="withIcon" 
              token={{
                symbol: 'ETH',
                name: 'Ethereum',
                balance: 0.125,
                value: 312.75
              }}
            />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
