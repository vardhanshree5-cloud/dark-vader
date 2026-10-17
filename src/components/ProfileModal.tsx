import React, { useEffect } from 'react';
import { PROFILE_AVATAR_URL, STUDIO_LOGO_URL } from '../data/projectsData';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#fff8f5] w-full max-w-lg max-h-[85vh] rounded-2xl overflow-y-auto shadow-2xl border border-[#dac1b9] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#eae1dc]">
          <div className="flex items-center gap-2">
            <img src={STUDIO_LOGO_URL} alt="Atelier Terra" className="h-6 w-auto" />
            <span className="font-headline-sm text-lg font-serif text-[#1f1b18]">
              Atelier Monograph & Leadership
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Profile"
            className="p-1 rounded-full hover:bg-[#f5ece7] text-[#1f1b18]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Architect Profile Hero */}
        <div className="p-6 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <img
              src={PROFILE_AVATAR_URL}
              alt="Mateo Vales"
              className="w-20 h-20 rounded-full object-cover shadow-sm ring-2 ring-[#dac1b9]"
            />
            <div>
              <span className="font-label-md text-xs uppercase tracking-wider text-[#914726] block">
                Principal Architect & Founder
              </span>
              <h3 className="font-headline-sm text-2xl font-serif text-[#1f1b18]">
                Mateo Vales
              </h3>
              <p className="text-xs text-[#87736b] mt-0.5">
                M.Arch ETSAB Barcelona • Fellow, Kyoto Joinery Guild
              </p>
            </div>
          </div>

          <div className="bg-[#fbf2ed] p-4 rounded-xl border border-[#eae1dc] text-xs sm:text-sm text-[#54433c] leading-relaxed italic font-serif">
            “A room is never finished until the sunlight hits the lime plaster in late October. Architecture is the patience of allowing nature to complete what we began.”
          </div>

          <p className="font-body-md text-xs sm:text-sm text-[#54433c] leading-relaxed">
            Mateo Vales established Atelier Terra in 2012 following seven years of apprentice study under master carpenters in Kyoto and stone carvers in Mallorca. His practice is internationally renowned for integrating ancient Mediterranean stone-masonry with Japanese timber joints.
          </p>

          {/* Studio Credentials */}
          <div className="grid grid-cols-3 gap-2.5 bg-[#f5ece7] p-3.5 rounded-xl border border-[#dac1b9]/50 text-center">
            <div>
              <span className="font-serif text-lg font-semibold text-[#914726] block">42+</span>
              <span className="text-[10px] uppercase font-label-md text-[#54433c]">Sanctuaries</span>
            </div>
            <div>
              <span className="font-serif text-lg font-semibold text-[#1f1b18] block">14 Yrs</span>
              <span className="text-[10px] uppercase font-label-md text-[#54433c]">Practice</span>
            </div>
            <div>
              <span className="font-serif text-lg font-semibold text-[#5a614f] block">12</span>
              <span className="text-[10px] uppercase font-label-md text-[#54433c]">Honors</span>
            </div>
          </div>

          {/* Studio Locations */}
          <div>
            <span className="font-label-md text-xs uppercase tracking-wider text-[#914726] block mb-2">
              Atelier Hubs & Material Labs
            </span>
            <ul className="text-xs text-[#54433c] flex flex-col gap-1.5">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#914726]" />
                <span><strong>Barcelona:</strong> Main Design Atelier & Material Testing Lab</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5a614f]" />
                <span><strong>Kyoto:</strong> Sukiya Timber Joinery Workshop</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8f482a]" />
                <span><strong>Palma:</strong> Balearic Coastal Architecture Practice</span>
              </li>
            </ul>
          </div>

          {/* Action */}
          <div className="pt-2 border-t border-[#eae1dc]">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-full bg-[#914726] text-white text-xs font-semibold hover:bg-[#8f482a] transition-all flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Schedule Discovery Session with Mateo Vales</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
