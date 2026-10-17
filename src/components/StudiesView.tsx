import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';

interface StudiesViewProps {
  projects: Project[];
  selectedProjectId?: string;
  onSelectProject: (id: string) => void;
  onOpenConsultation: () => void;
}

export const StudiesView: React.FC<StudiesViewProps> = ({
  projects,
  selectedProjectId,
  onSelectProject,
  onOpenConsultation,
}) => {
  const currentProject =
    projects.find((p) => p.id === selectedProjectId) || projects[0];

  const [activeDrawingTab, setActiveDrawingTab] = useState<'section' | 'plan'>('section');
  const [isPlayingAtmosphere, setIsPlayingAtmosphere] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Synthesize soft architectural white-noise ambient soundscape (breeze/rain) using Web Audio API safely
  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const toggleAtmosphere = () => {
    if (!isPlayingAtmosphere) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Generate gentle warm noise resembling ocean breeze / cedar wind
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          // Pink-ish noise filter
          lastOut = (lastOut * 0.95) + (white * 0.05);
          data[i] = lastOut;
        }

        const noiseSource = ctx.createBufferSource();
        noiseSource.buffer = buffer;
        noiseSource.loop = true;

        const biquadFilter = ctx.createBiquadFilter();
        biquadFilter.type = 'lowpass';
        biquadFilter.frequency.setValueAtTime(320, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
        gainNodeRef.current = gainNode;

        noiseSource.connect(biquadFilter);
        biquadFilter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noiseSource.start();
        setIsPlayingAtmosphere(true);
      } catch (e) {
        console.error(e);
      }
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      setIsPlayingAtmosphere(false);
    }
  };

  const caseStudy = currentProject.caseStudy;

  return (
    <div className="flex flex-col w-full pb-28">
      {/* Editorial Header */}
      <section className="px-5 pt-6 pb-4 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#914726] inline-block"></span>
          <span className="font-label-md text-xs uppercase text-[#54433c] tracking-widest">
            Structural & Climate Archives
          </span>
        </div>
        <h1 className="font-headline-lg-mobile text-3xl sm:text-4xl text-[#1f1b18] tracking-tight leading-none mb-3 font-serif">
          Architectural Studies
        </h1>
        <p className="font-body-md text-sm text-[#54433c] max-w-md leading-relaxed">
          Peer-reviewed monographs documenting bioclimatic geometry, passive thermal mass, and construction joinery.
        </p>
      </section>

      {/* Project Selector Pills */}
      <div className="w-full overflow-x-auto no-scrollbar px-5 py-2 mb-4">
        <div className="flex items-center gap-2 min-w-max">
          {projects.map((proj) => {
            const isSelected = proj.id === currentProject.id;
            return (
              <button
                key={proj.id}
                onClick={() => onSelectProject(proj.id)}
                className={`px-4 py-2 rounded-full font-label-md text-xs tracking-wider transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#914726] text-white shadow-sm font-semibold'
                    : 'bg-[#f5ece7] text-[#54433c] hover:text-[#1f1b18]'
                }`}
              >
                {proj.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Case Study Article */}
      <article className="px-5 flex flex-col gap-6">
        {/* Hero Visual Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#eae1dc]/80">
          <div className="relative aspect-[16/9] w-full bg-[#f5ece7]">
            <img
              src={currentProject.imageUrl}
              alt={currentProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
              <div className="text-white">
                <span className="font-label-md text-xs uppercase tracking-widest text-[#ffdbce] block mb-1">
                  {currentProject.subtitle}
                </span>
                <h2 className="font-headline-sm text-2xl sm:text-3xl font-serif text-white">
                  {currentProject.title}
                </h2>
                <p className="text-xs text-[#eae1dc] mt-1">
                  {currentProject.location} • {currentProject.scope}
                </p>
              </div>
            </div>

            {/* Ambient Acoustic Soundscape Toggle */}
            <button
              onClick={toggleAtmosphere}
              aria-label="Toggle Spatial Ambient Soundscape"
              className={`absolute top-3 right-3 px-3 py-1.5 rounded-full backdrop-blur-md text-xs flex items-center gap-1.5 font-label-md uppercase tracking-wider transition-all ${
                isPlayingAtmosphere
                  ? 'bg-[#914726] text-white shadow-md'
                  : 'bg-black/40 text-white hover:bg-black/60'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {isPlayingAtmosphere ? 'graphic_eq' : 'volume_up'}
              </span>
              <span>{isPlayingAtmosphere ? 'Atmosphere On' : 'Play Sound'}</span>
            </button>
          </div>

          {/* Bioclimatic & Environmental Telemetry Bar */}
          <div className="p-4 bg-[#fbf2ed] grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#eae1dc]/70">
            <div className="flex flex-col">
              <span className="text-[10px] font-label-md uppercase tracking-wider text-[#87736b]">Climate Zone</span>
              <span className="text-xs font-semibold text-[#1f1b18] mt-0.5">{caseStudy.climateZone}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-label-md uppercase tracking-wider text-[#87736b]">Orientation</span>
              <span className="text-xs font-semibold text-[#1f1b18] mt-0.5">{caseStudy.orientation}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-label-md uppercase tracking-wider text-[#87736b]">Carbon Index</span>
              <span className="text-xs font-semibold text-[#5a614f] mt-0.5">{caseStudy.embodiedCarbon}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-label-md uppercase tracking-wider text-[#87736b]">Floor Area</span>
              <span className="text-xs font-semibold text-[#914726] mt-0.5">{caseStudy.dimensions.area}</span>
            </div>
          </div>
        </div>

        {/* Narrative & Architectural Concept */}
        <div className="bg-[#fff8f5] p-5 rounded-xl border border-[#eae1dc] flex flex-col gap-3">
          <span className="font-label-md text-xs uppercase tracking-wider text-[#914726]">
            Monograph Abstract
          </span>
          <p className="font-headline-sm text-lg font-serif italic text-[#1f1b18] leading-relaxed">
            "{caseStudy.summary}"
          </p>
          <div className="h-[1px] bg-[#eae1dc] my-1" />
          <p className="font-body-md text-sm text-[#54433c] leading-relaxed">
            {caseStudy.architecturalConcept}
          </p>
        </div>

        {/* Interactive Architectural Blueprint & Diagram View */}
        <div className="bg-[#efe6e1] p-5 rounded-xl border border-[#dac1b9]/50 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="font-label-md text-xs uppercase tracking-wider text-[#914726]">
                Technical Drawing
              </span>
              <h3 className="font-headline-sm text-xl font-serif text-[#1f1b18]">
                {activeDrawingTab === 'section' ? 'Transverse Solar Section' : 'Breeze & Flow Dynamics'}
              </h3>
            </div>

            <div className="flex items-center gap-1 bg-[#eae1dc] p-1 rounded-lg">
              <button
                onClick={() => setActiveDrawingTab('section')}
                className={`px-2.5 py-1 text-[11px] font-label-md uppercase tracking-wider rounded-md transition-all ${
                  activeDrawingTab === 'section'
                    ? 'bg-white text-[#1f1b18] shadow-xs'
                    : 'text-[#54433c]'
                }`}
              >
                Section
              </button>
              <button
                onClick={() => setActiveDrawingTab('plan')}
                className={`px-2.5 py-1 text-[11px] font-label-md uppercase tracking-wider rounded-md transition-all ${
                  activeDrawingTab === 'plan'
                    ? 'bg-white text-[#1f1b18] shadow-xs'
                    : 'text-[#54433c]'
                }`}
              >
                Plan
              </button>
            </div>
          </div>

          {/* Interactive SVG Diagram simulating CAD / Architectural Monograph Drawings */}
          <div className="w-full aspect-[16/10] bg-[#1f1b18] rounded-lg p-4 relative overflow-hidden flex items-center justify-center border border-[#dac1b9]">
            <svg
              viewBox="0 0 600 360"
              className="w-full h-full text-white/80 font-mono text-[10px]"
            >
              {/* Grid Lines */}
              <defs>
                <pattern id="cadGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.07)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="600" height="360" fill="url(#cadGrid)" />

              {activeDrawingTab === 'section' ? (
                <>
                  {/* Ground Level Baseline */}
                  <line x1="40" y1="280" x2="560" y2="280" stroke="#87736b" strokeWidth="2" strokeDasharray="6 3" />
                  <text x="50" y="295" fill="#dac1b9">GRADE ±0.00m (BEDROCK LIMESTONE)</text>

                  {/* Structural Mass Wall */}
                  <rect x="140" y="110" width="40" height="170" fill="none" stroke="#dac1b9" strokeWidth="2" />
                  <rect x="380" y="110" width="40" height="170" fill="none" stroke="#dac1b9" strokeWidth="2" />
                  {/* Roof Slab & Shading Overhang */}
                  <polygon points="100,110 460,110 440,90 120,90" fill="#914726" fillOpacity="0.4" stroke="#ffdbce" strokeWidth="1.5" />

                  {/* Courtyard Plunge Basin */}
                  <rect x="220" y="270" width="120" height="25" fill="#3b82f6" fillOpacity="0.3" stroke="#60a5fa" strokeWidth="1" />
                  <text x="235" y="285" fill="#93c5fd">REFLECTING POOL</text>

                  {/* Summer Solstice Sun Angle (74°) */}
                  <line x1="480" y1="30" x2="430" y2="130" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />
                  <text x="430" y="25" fill="#fbbf24">SUMMER SOLSTICE 74° (SHADED)</text>

                  {/* Winter Solstice Sun Angle (28°) */}
                  <line x1="530" y1="120" x2="260" y2="260" stroke="#eab308" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="450" y="160" fill="#fde047">WINTER INTAKE 28°</text>

                  {/* Thermal Airflow Arrows */}
                  <path d="M 60 270 Q 180 260 250 200" fill="none" stroke="#6ee7b7" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  <text x="80" y="250" fill="#6ee7b7">BREEZE INLET</text>

                  {/* High Vent Exhaust */}
                  <path d="M 280 180 Q 320 120 360 85" fill="none" stroke="#f87171" strokeWidth="1.5" />
                  <text x="370" y="80" fill="#f87171">WARM EXHAUST</text>
                </>
              ) : (
                <>
                  {/* Plan View Courtyard Layout */}
                  <rect x="100" y="60" width="400" height="240" fill="none" stroke="#dac1b9" strokeWidth="2" />
                  {/* Inner Peristyle */}
                  <rect x="200" y="110" width="200" height="140" fill="none" stroke="#914726" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="300" cy="180" r="35" fill="#3b82f6" fillOpacity="0.25" stroke="#60a5fa" strokeWidth="1" />
                  <text x="265" y="184" fill="#bfdbfe">CENTRAL BASIN</text>

                  {/* North Indicator */}
                  <line x1="530" y1="80" x2="530" y2="50" stroke="#ffffff" strokeWidth="2" />
                  <polygon points="530,45 525,55 535,55" fill="#ffffff" />
                  <text x="526" y="95" fill="#ffffff">N</text>

                  {/* Colonnade Pillars */}
                  {[120, 180, 420, 480].map((x, i) => (
                    <circle key={i} cx={x} cy={110} r="4" fill="#dac1b9" />
                  ))}
                  {[120, 180, 420, 480].map((x, i) => (
                    <circle key={i} cx={x} cy={250} r="4" fill="#dac1b9" />
                  ))}

                  <text x="120" y="320" fill="#dac1b9">CROSS-AXIAL CIRCULATION • 1:100 ARCHITECTURAL SCALE</text>
                </>
              )}
            </svg>
          </div>

          <p className="text-xs text-[#54433c] mt-3 leading-relaxed">
            {caseStudy.passiveDesign}
          </p>
        </div>

        {/* Mateo Vales Field Notes */}
        <div className="bg-[#fbf2ed] p-5 rounded-xl border border-[#eae1dc] flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#914726] text-[18px]">edit_note</span>
            <span className="font-label-md text-xs uppercase tracking-wider text-[#914726]">
              Architect's Field Journal
            </span>
          </div>
          <p className="font-body-md text-xs sm:text-sm text-[#1f1b18] italic leading-relaxed">
            "{caseStudy.fieldNotes}"
          </p>
          <span className="text-[11px] text-[#54433c] text-right mt-1 font-label-md">
            — Mateo Vales, On-Site Journal
          </span>
        </div>

        {/* Commission CTA */}
        <div className="p-6 bg-[#914726] text-white rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-headline-sm text-xl font-serif text-white">
              Interested in a Similar Architectural Commission?
            </h4>
            <p className="text-xs text-[#ffdbce] mt-1">
              Discuss site feasibility, passive bioclimatic modeling, and material palettes with our studio.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded-full bg-white text-[#914726] text-xs font-semibold hover:bg-[#fff8f5] transition-all whitespace-nowrap shadow-sm"
          >
            Schedule Briefing
          </button>
        </div>
      </article>
    </div>
  );
};
