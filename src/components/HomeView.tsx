import React from 'react';
import { Project, TabType } from '../types';
import { STUDIO_ETHOS, STUDIO_MILESTONES } from '../data/projectsData';

interface HomeViewProps {
  featuredProject: Project;
  onNavigate: (tab: TabType) => void;
  onExploreStudy: (project: Project) => void;
  onToggleSave: (id: string) => void;
  isSaved: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({
  featuredProject,
  onNavigate,
  onExploreStudy,
  onToggleSave,
  isSaved,
}) => {
  return (
    <div className="flex flex-col w-full pb-28">
      {/* Hero Monograph Section */}
      <section className="px-5 pt-6 pb-6 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#914726] inline-block"></span>
          <span className="font-label-md text-xs uppercase text-[#54433c] tracking-widest">
            Studio Monograph • Est. 2012
          </span>
        </div>

        <h1 className="font-headline-lg-mobile text-3xl sm:text-4xl text-[#1f1b18] tracking-tight leading-[1.15] mb-4 font-serif">
          Atmospheric Pauses Carved from Raw Earth & Quiet Light.
        </h1>

        <p className="font-body-md text-sm sm:text-base text-[#54433c] leading-relaxed mb-6 max-w-lg">
          Atelier Terra is an international architectural atelier based in Barcelona, Kyoto, and Palma. We orchestrate natural lime, ancient stone, and timber into enduring sanctuaries that breathe with the rhythm of the sun.
        </p>

        {/* Quick Hero CTAs */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('portfolio')}
            className="px-5 py-2.5 rounded-full bg-[#914726] text-white font-title-md text-xs font-semibold hover:bg-[#8f482a] transition-all shadow-sm flex items-center gap-2"
          >
            <span>Explore Portfolio</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>

          <button
            onClick={() => onNavigate('consult')}
            className="px-5 py-2.5 rounded-full bg-[#f5ece7] text-[#54433c] hover:text-[#1f1b18] hover:bg-[#eae1dc] font-title-md text-xs font-semibold transition-all border border-[#dac1b9]/40"
          >
            Book Discovery Call
          </button>
        </div>
      </section>

      {/* Featured Sanctuary Spotlight */}
      <section className="px-5 mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="font-label-md text-xs uppercase tracking-wider text-[#914726]">
            Featured Sanctuary
          </span>
          <span className="font-label-md text-xs text-[#54433c]">Monograph No. 01</span>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#eae1dc]/80 group">
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#f5ece7]">
            <img
              src={featuredProject.imageUrl}
              alt={featuredProject.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 bg-[#fff8f5]/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#914726] text-[14px]">location_on</span>
              <span className="font-label-md text-xs uppercase tracking-wider text-[#1f1b18]">
                {featuredProject.location}
              </span>
            </div>

            <button
              onClick={() => onToggleSave(featuredProject.id)}
              aria-label="Save Sanctuary"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#fff8f5]/90 backdrop-blur-md flex items-center justify-center text-[#1f1b18] hover:text-[#914726] transition-colors shadow-sm"
            >
              <span className={`material-symbols-outlined text-[18px] ${isSaved ? 'text-[#914726] fill-1' : ''}`}>
                {isSaved ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
          </div>

          <div className="p-5 flex flex-col">
            <div className="flex items-baseline justify-between mb-1">
              <span className="font-label-md text-xs uppercase tracking-wider text-[#914726]">
                {featuredProject.subtitle}
              </span>
              <span className="font-label-md text-xs text-[#54433c]">
                {featuredProject.scope}
              </span>
            </div>

            <h2 className="font-headline-sm text-2xl font-serif text-[#1f1b18] mb-2">
              {featuredProject.title}
            </h2>

            <p className="font-body-sm text-sm text-[#54433c] leading-relaxed mb-4">
              {featuredProject.description}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-[#f5ece7]">
              <div className="flex items-center gap-2 text-xs text-[#54433c]">
                <span className="material-symbols-outlined text-[16px] text-[#5a614f]">check_circle</span>
                <span>Passive Thermal Cooling</span>
              </div>

              <button
                onClick={() => onExploreStudy(featuredProject)}
                className="inline-flex items-center gap-1 font-title-md text-xs font-semibold text-[#914726] hover:text-[#8f482a]"
              >
                <span>Read Monograph</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Studio Philosophy Triad */}
      <section className="px-5 mb-8">
        <span className="font-label-md text-xs uppercase tracking-wider text-[#914726] block mb-1">
          Philosophy
        </span>
        <h2 className="font-headline-sm text-2xl font-serif text-[#1f1b18] mb-4">
          The Three Architectural Tenets
        </h2>

        <div className="flex flex-col gap-3">
          {STUDIO_ETHOS.map((ethos, index) => (
            <div
              key={ethos.title}
              className="bg-[#fbf2ed] p-4 rounded-xl border border-[#eae1dc]/80 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="font-label-md text-xs text-[#914726] font-semibold">
                  0{index + 1}.
                </span>
                <h3 className="font-title-md text-sm font-semibold text-[#1f1b18]">
                  {ethos.title}
                </h3>
              </div>
              <p className="font-body-sm text-xs sm:text-sm text-[#54433c] leading-relaxed">
                {ethos.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Studios Matrix */}
      <section className="px-5 mb-8">
        <div className="bg-[#f5ece7] rounded-xl p-5 border border-[#dac1b9]/50">
          <span className="font-label-md text-xs uppercase tracking-wider text-[#914726] block mb-1">
            Global Footprint
          </span>
          <h3 className="font-headline-sm text-xl font-serif text-[#1f1b18] mb-3">
            Atelier Locations
          </h3>

          <div className="grid grid-cols-2 gap-3 text-left">
            <div className="p-3 bg-white/70 rounded-lg">
              <p className="font-semibold text-xs text-[#1f1b18]">Barcelona Studio & Lab</p>
              <p className="text-[11px] text-[#54433c] mt-0.5">Carrer d'Enric Granados, Eixample</p>
              <span className="text-[10px] text-[#914726] uppercase tracking-wider mt-1 inline-block">Material Research</span>
            </div>

            <div className="p-3 bg-white/70 rounded-lg">
              <p className="font-semibold text-xs text-[#1f1b18]">Kyoto Joinery Atelier</p>
              <p className="text-[11px] text-[#54433c] mt-0.5">Kita-ku, Kamigamo Preserve</p>
              <span className="text-[10px] text-[#5a614f] uppercase tracking-wider mt-1 inline-block">Timber Craft</span>
            </div>

            <div className="p-3 bg-white/70 rounded-lg">
              <p className="font-semibold text-xs text-[#1f1b18]">Palma de Mallorca</p>
              <p className="text-[11px] text-[#54433c] mt-0.5">Passeig d'es Born</p>
              <span className="text-[10px] text-[#8f482a] uppercase tracking-wider mt-1 inline-block">Balearic Sanctuaries</span>
            </div>

            <div className="p-3 bg-white/70 rounded-lg">
              <p className="font-semibold text-xs text-[#1f1b18]">Paris 7th Archive</p>
              <p className="text-[11px] text-[#54433c] mt-0.5">Rue de Varenne</p>
              <span className="text-[10px] text-[#54433c] uppercase tracking-wider mt-1 inline-block">Heritage Conservation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Press & Monograph Mentions */}
      <section className="px-5">
        <div className="border-t border-[#eae1dc] pt-6 flex flex-col">
          <span className="font-label-md text-xs uppercase tracking-wider text-[#54433c] text-center mb-4">
            Featured In Architectural Publications
          </span>
          <div className="flex items-center justify-between opacity-70 text-xs font-serif italic text-[#54433c] px-2">
            <span>El Croquis</span>
            <span>·</span>
            <span>Domus</span>
            <span>·</span>
            <span>Architectural Digest</span>
            <span>·</span>
            <span>Kinfolk</span>
          </div>
        </div>
      </section>
    </div>
  );
};
