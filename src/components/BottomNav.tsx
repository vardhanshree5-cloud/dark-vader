import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange }) => {
  const navItems: { id: TabType; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'architecture' },
    { id: 'portfolio', label: 'Portfolio', icon: 'grid_view' },
    { id: 'studies', label: 'Studies', icon: 'auto_stories' },
    { id: 'services', label: 'Services', icon: 'layers' },
    { id: 'consult', label: 'Consult', icon: 'calendar_today' },
  ];

  return (
    <nav
      className="fixed bottom-0 w-full z-50 pb-safe bg-[#fff8f5]/95 backdrop-blur-xl border-t border-[#eae1dc]/80 shadow-[0_-2px_12px_rgba(0,0,0,0.04)]"
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="max-w-md mx-auto flex items-center justify-around h-16 px-1">
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center min-w-[56px] min-h-[48px] px-2 transition-colors relative ${
                isActive
                  ? 'text-[#914726] font-title-md'
                  : 'text-[#54433c] hover:text-[#1f1b18]'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[22px] transition-transform ${
                  isActive ? 'scale-110' : ''
                }`}
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="font-label-md text-[11px] tracking-wider mt-0.5 whitespace-nowrap">
                {item.label}
              </span>
              {isActive && (
                <span className="absolute -top-[1px] w-5 h-[2px] bg-[#914726] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
