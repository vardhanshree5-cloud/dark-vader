import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/projectsData';

interface ServicesViewProps {
  onStartConsultation: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onStartConsultation }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const phases = [
    {
      num: 'Phase I',
      title: 'Geological & Solar Survey',
      desc: 'On-site core sampling, solar trajectory modeling, natural airflow mapping, and identifying regional limestone and timber reserves.'
    },
    {
      num: 'Phase II',
      title: 'Physical Clay & Volumetric Prototyping',
      desc: 'Crafting 1:20 physical plaster and lime models in our Barcelona workshop to study natural shadows before digital CAD execution.'
    },
    {
      num: 'Phase III',
      title: 'Artisanal Assembly & Joinery',
      desc: 'Deploying master stone masons, lime trowel artisans, and Kyoto wood joiners under our direct daily site supervision.'
    },
    {
      num: 'Phase IV',
      title: 'Patina Ritual & Handover',
      desc: 'Waxing terracotta pavers with organic beeswax, seasoning woodwork with linseed oil, and compiling the private architectural monograph.'
    }
  ];

  return (
    <div className="flex flex-col w-full pb-28">
      {/* Header */}
      <section className="px-5 pt-6 pb-4 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#914726] inline-block"></span>
          <span className="font-label-md text-xs uppercase text-[#54433c] tracking-widest">
            Commissions & Practice
          </span>
        </div>
        <h1 className="font-headline-lg-mobile text-3xl sm:text-4xl text-[#1f1b18] tracking-tight leading-none mb-3 font-serif">
          Studio Services
        </h1>
        <p className="font-body-md text-sm text-[#54433c] max-w-md leading-relaxed">
          From ground-up private estates to sensitive heritage restorations, our architectural practice handles full-lifecycle commissions worldwide.
        </p>
      </section>

      {/* Services List Accordion / Cards */}
      <section className="px-5 flex flex-col gap-4 mb-8">
        {SERVICES_LIST.map((service, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={service.title}
              className="bg-white rounded-xl overflow-hidden border border-[#eae1dc] shadow-xs transition-all"
            >
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="w-full p-5 text-left flex items-start justify-between gap-4 focus-visible:outline-none"
              >
                <div className="flex items-start gap-3">
                  <span className="font-headline-sm text-lg font-serif text-[#914726]">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="font-headline-sm text-lg sm:text-xl font-serif text-[#1f1b18]">
                      {service.title}
                    </h3>
                    <p className="font-body-sm text-xs text-[#54433c] mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <span className="material-symbols-outlined text-[20px] text-[#87736b] transition-transform duration-300 mt-1">
                  {isExpanded ? 'expand_less' : 'expand_more'}
                </span>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 pt-1 border-t border-[#f5ece7] flex flex-col gap-4">
                  <p className="font-body-sm text-xs sm:text-sm text-[#54433c] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#f5ece7] text-[#54433c] font-label-md text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Deliverables */}
                  <div className="bg-[#fbf2ed] p-3.5 rounded-lg border border-[#eae1dc]">
                    <span className="text-[10px] font-label-md uppercase tracking-wider text-[#914726] block mb-2 font-semibold">
                      Commission Scope & Deliverables
                    </span>
                    <ul className="flex flex-col gap-1.5">
                      {service.deliverables.map((del) => (
                        <li key={del} className="flex items-center gap-2 text-xs text-[#1f1b18]">
                          <span className="material-symbols-outlined text-[#5a614f] text-[14px]">
                            done
                          </span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* 4-Phase Commission Method */}
      <section className="px-5 mb-8">
        <span className="font-label-md text-xs uppercase tracking-wider text-[#914726] block mb-1">
          Methodology
        </span>
        <h2 className="font-headline-sm text-2xl font-serif text-[#1f1b18] mb-4">
          The 4-Phase Commission Protocol
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {phases.map((phase) => (
            <div
              key={phase.num}
              className="p-4 bg-[#fbf2ed] rounded-xl border border-[#eae1dc] flex flex-col"
            >
              <span className="font-label-md text-[11px] uppercase tracking-widest text-[#914726] font-semibold mb-1">
                {phase.num}
              </span>
              <h4 className="font-title-md text-sm font-semibold text-[#1f1b18] mb-1">
                {phase.title}
              </h4>
              <p className="font-body-sm text-xs text-[#54433c] leading-relaxed">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainable Material Charter */}
      <section className="px-5 mb-8">
        <div className="bg-[#5a614f] text-white p-6 rounded-xl shadow-sm flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#dee5cf]">eco</span>
            <span className="font-label-md text-xs uppercase tracking-wider text-[#dee5cf]">
              Ecological Charter
            </span>
          </div>
          <h3 className="font-headline-sm text-xl font-serif text-white">
            Zero-Petroleum, 100% Breathable Architecture
          </h3>
          <p className="text-xs sm:text-sm text-[#dee5cf] leading-relaxed">
            We pledge to never specify toxic synthetic polyurethane foams, petrochemical sealants, or non-recyclable composite laminates. Every cubic meter of mineral mass in our buildings can be safely returned to the earth.
          </p>
        </div>
      </section>

      {/* Consultation Action Banner */}
      <section className="px-5">
        <div className="bg-[#914726] text-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
          <span className="font-label-md text-xs uppercase tracking-wider text-[#ffdbce] mb-1">
            Initiate a Dialogue
          </span>
          <h3 className="font-headline-sm text-2xl font-serif text-white mb-2">
            Commence Your Architectural Project
          </h3>
          <p className="font-body-sm text-xs sm:text-sm text-[#ffdbce] mb-5 max-w-sm leading-relaxed">
            We accept a limited cohort of 6 bespoke architectural commissions each calendar year to ensure absolute artisanal focus.
          </p>
          <button
            onClick={onStartConsultation}
            className="px-6 py-3 rounded-full bg-white text-[#914726] font-title-md text-sm font-semibold hover:bg-[#fff8f5] transition-all shadow-sm"
          >
            Schedule Discovery Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
