'use client';

import { useState } from 'react';
import { Menu, X, Home, BarChart3, Settings, Wallet } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home, current: true },
    { name: 'Analytics', href: '/analytics', icon: BarChart3, current: false },
    { name: 'Wallet', href: '/wallet', icon: Wallet, current: false },
    { name: 'Settings', href: '/settings', icon: Settings, current: false },
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between p-4 border-b border-dark-surface">
          <h1 className="text-xl font-bold text-dark-text-primary">
            EngageChain
          </h1>
          <InteractiveButton
            variant="secondary"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </InteractiveButton>
        </div>
      </div>

      <div className="lg:flex">
        {/* Sidebar */}
        <div className={`
          lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0
          ${isMobileMenuOpen ? 'block' : 'hidden'}
        `}>
          <div className="flex flex-col flex-grow pt-5 bg-dark-surface overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="text-xl font-bold text-dark-text-primary">
                EngageChain
              </h1>
            </div>
            <div className="mt-5 flex-1 flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`
                        group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200
                        ${item.current
                          ? 'bg-accent text-white'
                          : 'text-dark-text-secondary hover:bg-dark-bg hover:text-dark-text-primary'
                        }
                      `}
                    >
                      <Icon
                        className={`
                          mr-3 flex-shrink-0 h-5 w-5
                          ${item.current ? 'text-white' : 'text-dark-text-secondary group-hover:text-dark-text-primary'}
                        `}
                      />
                      {item.name}
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:pl-64 flex flex-col flex-1">
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
