import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenConsultation: () => void;
}

export const ProjectStudyModal: React.FC<ProjectStudyModalProps> = ({
  project,
  isOpen,
  onClose,
  isSaved,
  onToggleSave,
  onOpenConsultation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#fff8f5] w-full max-w-2xl h-full sm:h-auto sm:max-h-[90vh] rounded-none sm:rounded-2xl overflow-y-auto flex flex-col relative shadow-2xl border border-[#dac1b9]">
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 bg-[#fff8f5]/90 backdrop-blur-md border-b border-[#eae1dc]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#914726]"></span>
            <span className="font-label-md text-xs uppercase tracking-widest text-[#54433c]">
              Monograph Study
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(project.id)}
              aria-label="Save to Lookbook"
              className="p-2 rounded-full hover:bg-[#f5ece7] text-[#1f1b18] hover:text-[#914726] transition-colors"
            >
              <span className={`material-symbols-outlined text-[20px] ${isSaved ? 'text-[#914726] fill-1' : ''}`}>
                {isSaved ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close Case Study"
              className="p-2 rounded-full hover:bg-[#f5ece7] text-[#1f1b18] transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>
        </div>

        {/* Hero Photo & Cover */}
        <div className="relative aspect-[16/10] w-full bg-[#f5ece7]">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#fff8f5]/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#914726] text-[14px]">location_on</span>
            <span className="font-label-md text-xs uppercase tracking-wider text-[#1f1b18]">
              {project.location}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 flex gap-1.5 flex-wrap">
            {project.materials.map((m) => (
              <span
                key={m}
                className="bg-[#fff8f5]/95 backdrop-blur-sm text-[#54433c] font-label-md text-xs px-2.5 py-1 rounded-full uppercase tracking-wider"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 flex flex-col gap-6">
          <div>
            <span className="font-label-md text-xs uppercase tracking-wider text-[#914726] block mb-1">
              {project.subtitle}
            </span>
            <h2 className="font-headline-sm text-3xl font-serif text-[#1f1b18] mb-2">
              {project.title}
            </h2>
            <p className="font-body-md text-sm text-[#54433c] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Specifications Grid */}
          <div className="bg-[#fbf2ed] p-4 rounded-xl border border-[#eae1dc] grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <span className="text-[10px] font-label-md uppercase tracking-wider text-[#87736b]">Gross Area</span>
              <p className="text-xs font-semibold text-[#1f1b18] mt-0.5">{caseStudy.dimensions.area}</p>
            </div>
            <div>
              <span className="text-[10px] font-label-md uppercase tracking-wider text-[#87736b]">Ceiling Height</span>
              <p className="text-xs font-semibold text-[#1f1b18] mt-0.5">{caseStudy.dimensions.ceilingHeight}</p>
            </div>
            <div>
              <span className="text-[10px] font-label-md uppercase tracking-wider text-[#87736b]">Climate</span>
              <p className="text-xs font-semibold text-[#1f1b18] mt-0.5">{caseStudy.climateZone}</p>
            </div>
            <div>
              <span className="text-[10px] font-label-md uppercase tracking-wider text-[#87736b]">Carbon Index</span>
              <p className="text-xs font-semibold text-[#5a614f] mt-0.5">{caseStudy.embodiedCarbon}</p>
            </div>
          </div>

          {/* Architectural Concept */}
          <div className="flex flex-col gap-2">
            <h3 className="font-headline-sm text-lg font-serif text-[#1f1b18]">
              Architectural Concept & Spatial Choreography
            </h3>
            <p className="font-body-md text-sm text-[#54433c] leading-relaxed">
              {caseStudy.architecturalConcept}
            </p>
          </div>

          {/* Passive Climate Design */}
          <div className="p-4 bg-[#f5ece7] rounded-xl border border-[#dac1b9]/50 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#914726] text-[18px]">wb_sunny</span>
              <h4 className="font-title-md text-xs uppercase tracking-wider font-semibold text-[#1f1b18]">
                Bioclimatic Geometry & Passive Cooling
              </h4>
            </div>
            <p className="font-body-sm text-xs text-[#54433c] leading-relaxed">
              {caseStudy.passiveDesign}
            </p>
          </div>

          {/* Key Materials List */}
          <div>
            <h4 className="font-title-md text-xs uppercase tracking-wider font-semibold text-[#1f1b18] mb-2">
              Mineral & Timber Formulation
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.keyMaterials.map((mat) => (
                <span
                  key={mat}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#eae1dc] text-xs text-[#54433c] font-medium"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Field Journal Entry */}
          <div className="bg-[#fbf2ed] p-4 rounded-xl border border-[#eae1dc] italic font-serif text-sm text-[#1f1b18]">
            <p>"{caseStudy.fieldNotes}"</p>
            <p className="text-right text-[11px] font-sans font-normal text-[#87736b] mt-2">
              — Mateo Vales, Field Journal
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-[#eae1dc]">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="flex-1 py-3 rounded-full bg-[#914726] text-white text-xs font-semibold hover:bg-[#8f482a] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Inquire on Similar Commission</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
            <button
              onClick={() => onToggleSave(project.id)}
              className="px-5 py-3 rounded-full bg-[#f5ece7] text-[#1f1b18] text-xs font-semibold hover:bg-[#eae1dc] transition-all flex items-center justify-center gap-1.5"
            >
              <span className={`material-symbols-outlined text-[16px] ${isSaved ? 'text-[#914726] fill-1' : ''}`}>
                {isSaved ? 'bookmark' : 'bookmark_border'}
              </span>
              <span>{isSaved ? 'Saved in Lookbook' : 'Save to Lookbook'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
