import React from 'react';
import { STUDIO_LOGO_URL, PROFILE_AVATAR_URL } from '../data/projectsData';
import { TabType } from '../types';

interface HeaderProps {
  currentTab: TabType;
  onNavigate: (tab: TabType) => void;
  savedCount: number;
  onOpenLookbook: () => void;
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  savedCount,
  onOpenLookbook,
  onOpenProfile,
}) => {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-[#fff8f5]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#eae1dc]/60">
      <div className="max-w-4xl mx-auto h-16 px-5 flex items-center justify-between">
        {/* Brand Zone */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#914726] rounded-md transition-opacity hover:opacity-85"
          aria-label="Atelier Terra Home"
        >
          <img
            alt="Terra Studio Logo"
            className="h-8 w-auto object-contain"
            src={STUDIO_LOGO_URL}
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-2xl font-normal tracking-tight text-[#1f1b18]">
              Atelier Terra
            </span>
          </div>
        </button>

        {/* Action Controls & Navigation Indicators */}
        <div className="flex items-center gap-2">
          {/* Active section title (subtle indicator) */}
          <span className="font-label-md text-xs uppercase tracking-wider text-[#54433c] hidden sm:inline px-2 py-1 rounded bg-[#f5ece7]/60">
            {currentTab === 'portfolio' ? 'Portfolio' : currentTab === 'studies' ? 'Case Studies' : currentTab === 'services' ? 'Services' : currentTab === 'consult' ? 'Consultation' : 'Monograph'}
          </span>

          {/* Lookbook / Saved Projects Button */}
          <button
            onClick={onOpenLookbook}
            aria-label={`Open Saved Lookbook (${savedCount} saved)`}
            className="relative h-10 px-2.5 sm:px-3 flex items-center gap-1.5 rounded-full text-[#54433c] hover:text-[#914726] hover:bg-[#f5ece7] transition-all"
            title="Saved Projects Lookbook"
          >
            <span className={`material-symbols-outlined text-[20px] ${savedCount > 0 ? 'fill-1 text-[#914726]' : ''}`}>
              bookmark
            </span>
            <span className="text-xs font-semibold tracking-wider font-label-md">
              {savedCount}
            </span>
          </button>

          {/* Profile / Studio Info Button */}
          <button
            onClick={onOpenProfile}
            aria-label="Studio Profile and Architect Monograph"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:ring-2 hover:ring-[#914726]/40 transition-all focus-visible:outline-none"
            title="Principal Architect Profile"
          >
            <img
              alt="Mateo Vales Profile"
              className="w-8 h-8 rounded-full object-cover shadow-sm ring-1 ring-[#dac1b9]"
              src={PROFILE_AVATAR_URL}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
