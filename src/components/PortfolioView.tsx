import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory, MaterialSpecimen } from '../types';
import { MATERIAL_SPECIMENS } from '../data/projectsData';

interface PortfolioViewProps {
  projects: Project[];
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onExploreStudy: (project: Project) => void;
  onSelectMaterial: (material: MaterialSpecimen) => void;
  onNavigateToStudies: () => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  projects,
  savedIds,
  onToggleSave,
  onExploreStudy,
  onSelectMaterial,
  onNavigateToStudies,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // Filter projects by category and search
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' || project.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        project.title.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.materials.some((m) => m.toLowerCase().includes(q))
      );
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full pb-28">
      {/* Editorial Header */}
      <section className="px-5 pt-6 pb-4 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#914726] inline-block"></span>
            <span className="font-label-md text-xs uppercase text-[#54433c] tracking-widest">
              Architectural Monograph
            </span>
          </div>

          <button
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Toggle Search and Filter"
            className={`p-1.5 rounded-full text-[#54433c] transition-colors hover:text-[#1f1b18] ${
              showSearch ? 'bg-[#eae1dc] text-[#914726]' : 'hover:bg-[#f5ece7]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              {showSearch ? 'close' : 'search'}
            </span>
          </button>
        </div>

        <h1 className="font-headline-lg-mobile text-3xl sm:text-4xl text-[#1f1b18] tracking-tight leading-none mb-3 font-serif">
          Curated Works
        </h1>
        <p className="font-body-md text-sm sm:text-base text-[#54433c] max-w-md leading-relaxed">
          A mindful portfolio of private residences, bespoke hospitality retreats, and tactile living environments worldwide.
        </p>

        {/* Search Bar Input (Expands smoothly) */}
        {showSearch && (
          <div className="mt-4 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by location, material (e.g. Travertine, Cedar), or name..."
              className="w-full px-4 py-2.5 pl-10 rounded-xl bg-[#f5ece7] text-[#1f1b18] text-sm placeholder:text-[#87736b] focus:outline-none focus:ring-1 focus:ring-[#914726] border border-[#dac1b9]/50 transition-all"
              autoFocus
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-[#87736b]">
              search
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear Search"
                className="absolute right-3 top-2.5 text-[#87736b] hover:text-[#1f1b18]"
              >
                <span className="material-symbols-outlined text-[18px]">cancel</span>
              </button>
            )}
          </div>
        )}
      </section>

      {/* Filter Pills (Scrollable) */}
      <div className="w-full overflow-x-auto no-scrollbar px-5 py-2 mb-4">
        <div className="flex items-center gap-2 min-w-max" id="filter-container">
          <button
            onClick={() => setActiveCategory('all')}
            className={`filter-pill px-4 py-2 rounded-full font-label-md text-xs tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
              activeCategory === 'all'
                ? 'bg-[#914726] text-white shadow-sm'
                : 'bg-[#f5ece7] text-[#54433c] hover:text-[#1f1b18]'
            }`}
          >
            <span>All Works</span>
            <span className="text-[10px] opacity-80 font-normal">28</span>
          </button>

          <button
            onClick={() => setActiveCategory('residential')}
            className={`filter-pill px-4 py-2 rounded-full font-label-md text-xs tracking-wider transition-all duration-300 ${
              activeCategory === 'residential'
                ? 'bg-[#914726] text-white shadow-sm'
                : 'bg-[#f5ece7] text-[#54433c] hover:text-[#1f1b18]'
            }`}
          >
            Residential
          </button>

          <button
            onClick={() => setActiveCategory('hospitality')}
            className={`filter-pill px-4 py-2 rounded-full font-label-md text-xs tracking-wider transition-all duration-300 ${
              activeCategory === 'hospitality'
                ? 'bg-[#914726] text-white shadow-sm'
                : 'bg-[#f5ece7] text-[#54433c] hover:text-[#1f1b18]'
            }`}
          >
            Hospitality
          </button>

          <button
            onClick={() => setActiveCategory('heritage')}
            className={`filter-pill px-4 py-2 rounded-full font-label-md text-xs tracking-wider transition-all duration-300 ${
              activeCategory === 'heritage'
                ? 'bg-[#914726] text-white shadow-sm'
                : 'bg-[#f5ece7] text-[#54433c] hover:text-[#1f1b18]'
            }`}
          >
            Heritage Restorations
          </button>

          <button
            onClick={() => setActiveCategory('millwork')}
            className={`filter-pill px-4 py-2 rounded-full font-label-md text-xs tracking-wider transition-all duration-300 ${
              activeCategory === 'millwork'
                ? 'bg-[#914726] text-white shadow-sm'
                : 'bg-[#f5ece7] text-[#54433c] hover:text-[#1f1b18]'
            }`}
          >
            Custom Millwork
          </button>
        </div>
      </div>

      {/* Studio Milestones Strip */}
      <section className="px-5 mb-6">
        <div className="bg-[#fbf2ed] rounded-xl p-4 shadow-sm flex items-center justify-between divide-x divide-[#dac1b9]/30 border border-[#eae1dc]/60">
          <div className="flex flex-col items-center flex-1 text-center pr-2">
            <span className="font-headline-sm text-2xl text-[#914726] font-serif leading-tight">
              42+
            </span>
            <span className="font-label-md text-[11px] text-[#54433c] uppercase tracking-wider mt-0.5">
              Sanctuaries
            </span>
          </div>
          <div className="flex flex-col items-center flex-1 text-center px-2">
            <span className="font-headline-sm text-2xl text-[#1f1b18] font-serif leading-tight">
              12
            </span>
            <span className="font-label-md text-[11px] text-[#54433c] uppercase tracking-wider mt-0.5">
              Design Awards
            </span>
          </div>
          <div className="flex flex-col items-center flex-1 text-center pl-2">
            <span className="font-headline-sm text-2xl text-[#5a614f] font-serif leading-tight">
              100%
            </span>
            <span className="font-label-md text-[11px] text-[#54433c] uppercase tracking-wider mt-0.5">
              Tactile Origin
            </span>
          </div>
        </div>
      </section>

      {/* Vertical Editorial Feed */}
      <section className="px-5 flex flex-col gap-6" id="projects-feed">
        {filteredProjects.length === 0 ? (
          <div className="p-8 text-center bg-[#fbf2ed] rounded-xl border border-[#eae1dc]">
            <p className="font-body-md text-sm text-[#54433c] mb-3">
              No architectural works found matching your filter criteria.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-[#914726] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredProjects.map((project, index) => {
            const isSaved = savedIds.includes(project.id);
            const isQuotePosition = index === 2; // Insert the quote after Aman Kyoto Pavilion matching the layout

            return (
              <React.Fragment key={project.id}>
                {/* Project Card */}
                <article
                  className="project-item group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-[#eae1dc]/70 transition-transform duration-500 hover:shadow-md"
                  data-category={project.category}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#f5ece7]">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-alt={project.altText}
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                    />

                    {/* Location Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#fff8f5]/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                      <span className="material-symbols-outlined text-[#914726] text-[14px]">
                        location_on
                      </span>
                      <span className="font-label-md text-xs uppercase tracking-wider text-[#1f1b18]">
                        {project.location}
                      </span>
                    </div>

                    {/* Bookmark Save Button */}
                    <button
                      aria-label={isSaved ? "Remove from Studio Lookbook" : "Save to Studio Lookbook"}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        onToggleSave(project.id);
                      }}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#fff8f5]/90 backdrop-blur-md flex items-center justify-center text-[#1f1b18] hover:text-[#914726] transition-colors shadow-sm"
                    >
                      <span
                        className={`material-symbols-outlined text-[18px] transition-colors ${
                          isSaved ? 'text-[#914726] fill-1' : ''
                        }`}
                      >
                        {isSaved ? 'bookmark' : 'bookmark_border'}
                      </span>
                    </button>

                    {/* Material Chips on Photo */}
                    <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
                      {project.materials.map((mat) => (
                        <span
                          key={mat}
                          className="bg-[#fff8f5]/95 backdrop-blur-sm text-[#54433c] font-label-md text-xs px-2.5 py-1 rounded-full uppercase tracking-wider"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 flex flex-col">
                    <div className="flex items-baseline justify-between mb-1">
                      <span
                        className={`font-label-md text-xs uppercase tracking-wider ${
                          project.category === 'hospitality'
                            ? 'text-[#5a614f]'
                            : project.category === 'heritage'
                            ? 'text-[#8f482a]'
                            : 'text-[#914726]'
                        }`}
                      >
                        {project.subtitle}
                      </span>
                      <span className="font-label-md text-xs text-[#54433c]">
                        {project.scope}
                      </span>
                    </div>

                    <h2 className="font-headline-sm text-2xl font-serif text-[#1f1b18] mb-1">
                      {project.title}
                    </h2>

                    <p className="font-body-sm text-sm text-[#54433c] line-clamp-2 mb-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-[#f5ece7]">
                      <div className="flex items-center gap-2 text-[#54433c] font-body-sm text-xs sm:text-sm">
                        <span className="material-symbols-outlined text-[18px] text-[#5a614f]">
                          {project.featureIcon}
                        </span>
                        <span>{project.area || project.featureBadge}</span>
                      </div>

                      <button
                        onClick={() => onExploreStudy(project)}
                        className="inline-flex items-center gap-1 font-title-md text-sm font-semibold text-[#914726] hover:text-[#8f482a] transition-colors focus-visible:outline-none"
                      >
                        <span>Explore Study</span>
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                </article>

                {/* Editorial Quote Breakout (shown after card 2 if available) */}
                {isQuotePosition && (
                  <div className="my-2 p-6 bg-[#f5ece7] rounded-xl flex flex-col relative overflow-hidden border border-[#dac1b9]/40">
                    <div className="flex items-center gap-1 text-[#914726] mb-3">
                      <span className="material-symbols-outlined text-[20px]">
                        format_quote
                      </span>
                    </div>
                    <blockquote className="font-headline-sm text-xl sm:text-2xl text-[#1f1b18] italic leading-snug mb-3 font-serif">
                      “We do not decorate spaces; we carve atmospheric pauses from raw earth and natural light.”
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#b05e3c] text-white flex items-center justify-center font-headline-sm text-[12px] font-serif shadow-sm">
                        AT
                      </div>
                      <span className="font-label-md text-xs uppercase tracking-wider text-[#54433c]">
                        Mateo Vales — Principal Architect
                      </span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })
        )}
      </section>

      {/* Tactile Material Swatch Bar */}
      <section className="mt-8 px-5">
        <div className="bg-[#efe6e1] rounded-xl p-5 flex flex-col gap-4 border border-[#dac1b9]/50">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-label-md text-xs uppercase tracking-wider text-[#914726]">
                Material Library
              </span>
              <h3 className="font-headline-sm text-2xl font-serif text-[#1f1b18]">
                Tactile Palette
              </h3>
            </div>
            <span className="material-symbols-outlined text-[#87736b]">palette</span>
          </div>

          <p className="font-body-sm text-xs sm:text-sm text-[#54433c] leading-relaxed">
            Each project begins with ethically sourced natural elements tested in our Barcelona material lab.
          </p>

          <div className="grid grid-cols-4 gap-2 pt-1">
            {MATERIAL_SPECIMENS.map((specimen) => (
              <button
                key={specimen.id}
                onClick={() => onSelectMaterial(specimen)}
                className="flex flex-col items-center gap-1.5 text-center group cursor-pointer focus-visible:outline-none"
              >
                <div
                  style={{ backgroundColor: specimen.colorHex }}
                  className="w-12 h-12 rounded-full shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform ring-1 ring-black/5"
                >
                  <span
                    style={{ color: specimen.textColorHex }}
                    className="font-label-md text-[9px] uppercase tracking-wider font-semibold"
                  >
                    {specimen.type}
                  </span>
                </div>
                <span className="font-label-md text-xs text-[#54433c] group-hover:text-[#1f1b18] transition-colors">
                  {specimen.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Case Studies CTA Banner */}
      <section className="mt-8 px-5">
        <div className="bg-[#914726] text-white rounded-xl p-6 shadow-md flex flex-col relative overflow-hidden">
          <div className="relative z-10 flex flex-col">
            <span className="font-label-md text-xs uppercase tracking-wider text-[#ffdbce] mb-1">
              Deep Dive Archives
            </span>
            <h3 className="font-headline-sm text-2xl font-serif text-white mb-2">
              Read Architectural Case Studies
            </h3>
            <p className="font-body-sm text-xs sm:text-sm text-[#ffdbce] mb-5 max-w-xs leading-relaxed">
              Explore architectural drawings, structural photography, and tactile philosophy notes from our studio journals.
            </p>
            <div>
              <button
                onClick={onNavigateToStudies}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#fff8f5] text-[#914726] font-title-md text-sm font-semibold shadow-sm hover:bg-[#f5ece7] transition-colors active:scale-95"
              >
                <span>View Case Studies</span>
                <span className="material-symbols-outlined text-[18px]">
                  auto_stories
                </span>
              </button>
            </div>
          </div>
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-[#b05e3c] opacity-40 blur-2xl pointer-events-none" />
        </div>
      </section>
    </div>
  );
};
