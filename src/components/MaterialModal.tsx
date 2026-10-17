import React, { useEffect } from 'react';
import { MaterialSpecimen, Project } from '../types';

interface MaterialModalProps {
  specimen: MaterialSpecimen | null;
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const MaterialModal: React.FC<MaterialModalProps> = ({
  specimen,
  isOpen,
  onClose,
  projects,
  onSelectProject,
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

  if (!isOpen || !specimen) return null;

  // Find projects featuring this material
  const relatedProjects = projects.filter(
    (p) =>
      p.materials.some((m) => m.toLowerCase().includes(specimen.name.toLowerCase()) || specimen.name.toLowerCase().includes(m.toLowerCase())) ||
      p.caseStudy.keyMaterials.some((km) => km.toLowerCase().includes(specimen.name.toLowerCase()))
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#fff8f5] w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-[#dac1b9] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#eae1dc]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#914726]"></span>
            <span className="font-label-md text-xs uppercase tracking-widest text-[#54433c]">
              Material Specimen No. {specimen.id.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Material Details"
            className="p-1 rounded-full hover:bg-[#f5ece7] text-[#1f1b18]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Swatch & Identity */}
        <div className="p-6 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div
              style={{ backgroundColor: specimen.colorHex }}
              className="w-16 h-16 rounded-2xl shadow-inner flex items-center justify-center ring-2 ring-black/5"
            >
              <span
                style={{ color: specimen.textColorHex }}
                className="font-label-md text-xs uppercase tracking-wider font-semibold"
              >
                {specimen.type}
              </span>
            </div>

            <div>
              <span className="font-label-md text-xs uppercase tracking-wider text-[#914726]">
                Natural {specimen.type}
              </span>
              <h3 className="font-headline-sm text-2xl font-serif text-[#1f1b18]">
                {specimen.name}
              </h3>
              <p className="text-xs text-[#87736b] mt-0.5">
                Quarried in {specimen.origin}
              </p>
            </div>
          </div>

          <p className="font-body-md text-sm text-[#54433c] leading-relaxed">
            {specimen.description}
          </p>

          {/* Technical Specs */}
          <div className="bg-[#fbf2ed] p-4 rounded-xl border border-[#eae1dc] grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-[10px] font-label-md uppercase tracking-wider text-[#87736b]">Thermal Density</span>
              <p className="font-semibold text-[#1f1b18] mt-0.5">{specimen.thermalDensity}</p>
            </div>
            <div>
              <span className="text-[10px] font-label-md uppercase tracking-wider text-[#87736b]">Tactile Finish</span>
              <p className="font-semibold text-[#1f1b18] mt-0.5">{specimen.finish}</p>
            </div>
            <div className="col-span-2 pt-2 border-t border-[#eae1dc]/70">
              <span className="text-[10px] font-label-md uppercase tracking-wider text-[#87736b]">Sustainability</span>
              <p className="font-semibold text-[#5a614f] mt-0.5">{specimen.sustainabilityRating}</p>
            </div>
          </div>

          {/* Related Sanctuaries */}
          {relatedProjects.length > 0 && (
            <div>
              <span className="font-label-md text-xs uppercase tracking-wider text-[#914726] block mb-2">
                Sanctuaries Utilizing {specimen.name}
              </span>
              <div className="flex flex-col gap-2">
                {relatedProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onClose();
                      onSelectProject(p);
                    }}
                    className="p-3 bg-white rounded-lg border border-[#eae1dc] text-left hover:border-[#914726] transition-all flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-sm font-serif font-semibold text-[#1f1b18] group-hover:text-[#914726]">
                        {p.title}
                      </h4>
                      <p className="text-[11px] text-[#87736b]">{p.location} • {p.year}</p>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-[#87736b] group-hover:text-[#914726]">
                      arrow_forward
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
