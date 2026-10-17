import React, { useEffect } from 'react';
import { Project } from '../types';

interface LookbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedProjects: Project[];
  onRemoveSaved: (id: string) => void;
  onExploreStudy: (project: Project) => void;
  onStartConsultation: () => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({
  isOpen,
  onClose,
  savedProjects,
  onRemoveSaved,
  onExploreStudy,
  onStartConsultation,
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#fff8f5] w-full max-w-lg max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-[#dac1b9] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#eae1dc]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#914726] text-[20px]">
              bookmark
            </span>
            <h3 className="font-headline-sm text-xl font-serif text-[#1f1b18]">
              Studio Lookbook ({savedProjects.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Lookbook"
            className="p-1 rounded-full hover:bg-[#f5ece7] text-[#1f1b18]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Saved List */}
        <div className="p-5 overflow-y-auto flex flex-col gap-4">
          {savedProjects.length === 0 ? (
            <div className="py-12 text-center flex flex-col items-center">
              <span className="material-symbols-outlined text-[36px] text-[#dac1b9] mb-2">
                bookmark_border
              </span>
              <p className="font-serif text-lg text-[#1f1b18] mb-1">Your Lookbook is Empty</p>
              <p className="text-xs text-[#54433c] max-w-xs mb-4">
                Click the bookmark icon on any sanctuary or case study to curate your personal architectural moodboard.
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-[#914726] text-white text-xs font-semibold"
              >
                Browse Curated Works
              </button>
            </div>
          ) : (
            savedProjects.map((project) => (
              <div
                key={project.id}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#eae1dc] shadow-xs group"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-16 h-16 rounded-lg object-cover bg-[#f5ece7] shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <span className="font-label-md text-[10px] uppercase tracking-wider text-[#914726] block truncate">
                    {project.location}
                  </span>
                  <h4 className="font-headline-sm text-base font-serif text-[#1f1b18] truncate">
                    {project.title}
                  </h4>
                  <p className="text-[11px] text-[#54433c] truncate">
                    {project.materials.join(' · ')}
                  </p>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      onExploreStudy(project);
                    }}
                    aria-label={`Explore study for ${project.title}`}
                    className="p-1.5 text-xs font-medium text-[#914726] hover:bg-[#f5ece7] rounded-lg"
                    title="Explore Study"
                  >
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                  </button>

                  <button
                    onClick={() => onRemoveSaved(project.id)}
                    aria-label={`Remove ${project.title} from Lookbook`}
                    className="p-1.5 text-xs text-[#87736b] hover:text-[#ba1a1a] hover:bg-[#f5ece7] rounded-lg"
                    title="Remove"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedProjects.length > 0 && (
          <div className="p-4 bg-[#fbf2ed] border-t border-[#eae1dc] flex items-center justify-between">
            <span className="text-xs text-[#54433c]">
              Ready to discuss your curated references?
            </span>
            <button
              onClick={() => {
                onClose();
                onStartConsultation();
              }}
              className="px-4 py-2 rounded-full bg-[#914726] text-white text-xs font-semibold hover:bg-[#8f482a] transition-all"
            >
              Inquire with Lookbook
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
