'use client';

import { ChartVariant } from '@/lib/types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface AnalyticsChartProps {
  variant: ChartVariant;
  data?: any[];
  title?: string;
}

// Mock data for demonstration
const barData = [
  { name: 'Mon', responses: 120 },
  { name: 'Tue', responses: 190 },
  { name: 'Wed', responses: 300 },
  { name: 'Thu', responses: 250 },
  { name: 'Fri', responses: 400 },
  { name: 'Sat', responses: 350 },
  { name: 'Sun', responses: 280 },
];

const pieData = [
  { name: 'DeFi', value: 35, color: '#3B82F6' },
  { name: 'NFTs', value: 25, color: '#10B981' },
  { name: 'Gaming', value: 20, color: '#F59E0B' },
  { name: 'Social', value: 20, color: '#EF4444' },
];

export function AnalyticsChart({ variant, data, title }: AnalyticsChartProps) {
  const chartData = data || (variant === 'bar' ? barData : pieData);

  return (
    <div className="bg-dark-surface rounded-lg p-6 shadow-card">
      {title && (
        <h3 className="text-lg font-semibold text-dark-text-primary mb-4">
          {title}
        </h3>
      )}
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          {variant === 'bar' ? (
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="name" 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <YAxis 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Bar 
                dataKey="responses" 
                fill="hsl(190 80% 50%)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          ) : (
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-dark-text-secondary">
          {variant === 'bar' ? 'Daily Response Trends' : 'Poll Categories Distribution'}
        </p>
      </div>
    </div>
  );
}
