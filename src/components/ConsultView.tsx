import React, { useState } from 'react';
import { ConsultationRequest } from '../types';

interface ConsultViewProps {
  onConsultationBooked?: (request: ConsultationRequest) => void;
}

export const ConsultView: React.FC<ConsultViewProps> = ({ onConsultationBooked }) => {
  const [step, setStep] = useState<number>(1);
  const [typology, setTypology] = useState<string>('Residential Sanctuary');
  const [locationType, setLocationType] = useState<string>('Mediterranean Coast');
  const [locationName, setLocationName] = useState<string>('');
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([
    'Lime Plaster',
    'Travertine & Tufa',
  ]);
  const [areaScale, setAreaScale] = useState<string>('300 – 800 m²');
  const [timeline, setTimeline] = useState<string>('Within 12 months');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [consultDate, setConsultDate] = useState<string>('2026-10-24');
  const [consultTime, setConsultTime] = useState<string>('16:00 CET (Barcelona)');

  const [confirmedRequest, setConfirmedRequest] = useState<ConsultationRequest | null>(null);

  const typologies = [
    { label: 'Residential Sanctuary', icon: 'home', desc: 'Single-family estate, coastal villa, or private home' },
    { label: 'Bespoke Hospitality', icon: 'hotel', desc: 'Tea pavilion, boutique retreat, or wellness bathhouse' },
    { label: 'Heritage Restoration', icon: 'history_edu', desc: 'Historic apartment, stone masia, or listed landmark' },
    { label: 'Custom Millwork & Joinery', icon: 'handyman', desc: 'Monolithic stonework, library cabinetry, or Sukiya screens' },
  ];

  const landscapes = [
    'Mediterranean Coast',
    'Historic Urban Core',
    'Alpine or Forest Reserve',
    'Arid or Desert Topography',
    'Rural Farmstead / Masia',
  ];

  const materialOptions = [
    'Lime Plaster',
    'Travertine & Tufa',
    'Empordà Terracotta',
    'Hinoki Cedar & Walnut',
    'Unlacquered Bronze',
    'Monolithic Calacatta',
  ];

  const toggleMaterial = (mat: string) => {
    if (selectedMaterials.includes(mat)) {
      setSelectedMaterials(selectedMaterials.filter((m) => m !== mat));
    } else {
      setSelectedMaterials([...selectedMaterials, mat]);
    }
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) {
      alert('Please provide your name and email address to confirm the consultation.');
      return;
    }

    const newRequest: ConsultationRequest = {
      id: `AT-${Date.now().toString().slice(-4)}`,
      clientName,
      clientEmail,
      clientPhone,
      typology,
      location: locationName.trim() ? `${locationType} (${locationName.trim()})` : locationType,
      preferredMaterials: selectedMaterials,
      approximateArea: areaScale,
      timeline,
      consultationDate: consultDate,
      consultationTime: consultTime,
      timeZone: 'Europe/Madrid (CET)',
      notes,
      createdAt: new Date().toISOString(),
    };

    // Save to LocalStorage
    try {
      const existing = JSON.parse(localStorage.getItem('atelier_terra_consultations') || '[]');
      localStorage.setItem('atelier_terra_consultations', JSON.stringify([newRequest, ...existing]));
    } catch {
      // LocalStorage fallback
    }

    setConfirmedRequest(newRequest);
    onConsultationBooked?.(newRequest);
  };

  if (confirmedRequest) {
    return (
      <div className="flex flex-col w-full px-5 pt-8 pb-28">
        <div className="bg-white rounded-xl p-6 border border-[#dac1b9] shadow-md flex flex-col text-left">
          <div className="w-12 h-12 rounded-full bg-[#fbf2ed] text-[#914726] flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-[28px]">check_circle</span>
          </div>

          <span className="font-label-md text-xs uppercase tracking-widest text-[#914726] mb-1">
            Consultation Confirmed • Ref {confirmedRequest.id}
          </span>

          <h2 className="font-headline-sm text-2xl sm:text-3xl font-serif text-[#1f1b18] mb-3">
            Discovery Brief Scheduled
          </h2>

          <p className="font-body-md text-sm text-[#54433c] leading-relaxed mb-6">
            Thank you, {confirmedRequest.clientName}. Mateo Vales and our senior project associate look forward to reviewing your architectural commission.
          </p>

          <div className="bg-[#fbf2ed] p-4 rounded-lg border border-[#eae1dc] flex flex-col gap-2.5 text-xs text-[#1f1b18] mb-6">
            <div className="flex justify-between border-b border-[#eae1dc]/80 pb-2">
              <span className="text-[#87736b]">Date & Time</span>
              <span className="font-semibold">{confirmedRequest.consultationDate} at {confirmedRequest.consultationTime}</span>
            </div>
            <div className="flex justify-between border-b border-[#eae1dc]/80 pb-2">
              <span className="text-[#87736b]">Typology</span>
              <span className="font-semibold">{confirmedRequest.typology}</span>
            </div>
            <div className="flex justify-between border-b border-[#eae1dc]/80 pb-2">
              <span className="text-[#87736b]">Location</span>
              <span className="font-semibold">{confirmedRequest.location}</span>
            </div>
            <div className="flex justify-between border-b border-[#eae1dc]/80 pb-2">
              <span className="text-[#87736b]">Scale</span>
              <span className="font-semibold">{confirmedRequest.approximateArea}</span>
            </div>
            <div className="flex flex-col pt-1">
              <span className="text-[#87736b] mb-1">Tactile Focus</span>
              <span className="font-semibold text-[#914726]">{confirmedRequest.preferredMaterials.join(' · ')}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                window.print();
              }}
              className="px-5 py-2.5 rounded-full bg-[#f5ece7] text-[#1f1b18] font-title-md text-xs font-semibold hover:bg-[#eae1dc] transition-all flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print Brief</span>
            </button>

            <button
              onClick={() => {
                setConfirmedRequest(null);
                setStep(1);
              }}
              className="px-5 py-2.5 rounded-full bg-[#914726] text-white font-title-md text-xs font-semibold hover:bg-[#8f482a] transition-all flex items-center justify-center gap-1.5"
            >
              <span>Book Another Inquiry</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pb-28">
      {/* Header */}
      <section className="px-5 pt-6 pb-4 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#914726] inline-block"></span>
          <span className="font-label-md text-xs uppercase text-[#54433c] tracking-widest">
            Studio Intake & Feasibility
          </span>
        </div>
        <h1 className="font-headline-lg-mobile text-3xl sm:text-4xl text-[#1f1b18] tracking-tight leading-none mb-3 font-serif">
          Book Consultation
        </h1>
        <p className="font-body-md text-sm text-[#54433c] max-w-md leading-relaxed">
          Schedule a direct discovery session with principal architect Mateo Vales to discuss site orientation, stone quarrying, and architectural feasibility.
        </p>
      </section>

      {/* Progress Steps Indicator */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between text-[11px] font-label-md uppercase tracking-wider text-[#87736b] mb-2">
          <span>Step {step} of 4</span>
          <span>
            {step === 1 ? 'Typology' : step === 2 ? 'Setting & Material' : step === 3 ? 'Scale & Schedule' : 'Contact & Notes'}
          </span>
        </div>
        <div className="w-full bg-[#eae1dc] h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-[#914726] h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Interactive Form Flow */}
      <div className="px-5">
        <form onSubmit={handleBook} className="bg-white rounded-xl p-5 border border-[#eae1dc] shadow-sm flex flex-col gap-5">
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <div>
                <span className="font-label-md text-xs uppercase tracking-wider text-[#914726] block mb-1">
                  Step 1: Commission Typology
                </span>
                <h3 className="font-headline-sm text-xl font-serif text-[#1f1b18]">
                  What type of sanctuary are you conceiving?
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {typologies.map((t) => (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => setTypology(t.label)}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      typology === t.label
                        ? 'border-[#914726] bg-[#fbf2ed] text-[#1f1b18] ring-1 ring-[#914726]'
                        : 'border-[#eae1dc] hover:bg-[#f5ece7]/60 text-[#54433c]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[22px] text-[#914726] mt-0.5">
                      {t.icon}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-[#1f1b18]">{t.label}</div>
                      <div className="text-xs text-[#54433c] mt-0.5">{t.desc}</div>
                    </div>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="mt-2 w-full py-3 rounded-full bg-[#914726] text-white text-xs font-semibold hover:bg-[#8f482a] transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Proceed to Setting & Materials</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-4">
              <div>
                <span className="font-label-md text-xs uppercase tracking-wider text-[#914726] block mb-1">
                  Step 2: Landscape & Materials
                </span>
                <h3 className="font-headline-sm text-xl font-serif text-[#1f1b18]">
                  Where is the site, and which tactile textures resonate?
                </h3>
              </div>

              {/* Landscape environment selector */}
              <div>
                <label className="text-xs font-semibold text-[#1f1b18] block mb-2">
                  Landscape Topography
                </label>
                <div className="flex flex-wrap gap-2">
                  {landscapes.map((ls) => (
                    <button
                      key={ls}
                      type="button"
                      onClick={() => setLocationType(ls)}
                      className={`px-3 py-1.5 rounded-full text-xs font-label-md transition-all ${
                        locationType === ls
                          ? 'bg-[#914726] text-white shadow-xs'
                          : 'bg-[#f5ece7] text-[#54433c] hover:text-[#1f1b18]'
                      }`}
                    >
                      {ls}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1f1b18] block mb-1.5">
                  Specific Location / City / Region
                </label>
                <input
                  type="text"
                  value={locationName}
                  onChange={(e) => setLocationName(e.target.value)}
                  placeholder="e.g. Formentera, Kyoto, Provence, Lisbon..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#f5ece7] text-sm text-[#1f1b18] border border-[#dac1b9]/50 focus:outline-none focus:ring-1 focus:ring-[#914726]"
                />
              </div>

              {/* Materials multi-select */}
              <div>
                <label className="text-xs font-semibold text-[#1f1b18] block mb-2">
                  Aspirational Tactile Palette (Select Multiple)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {materialOptions.map((mat) => {
                    const isSelected = selectedMaterials.includes(mat);
                    return (
                      <button
                        key={mat}
                        type="button"
                        onClick={() => toggleMaterial(mat)}
                        className={`p-2.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-all ${
                          isSelected
                            ? 'border-[#914726] bg-[#fbf2ed] text-[#914726]'
                            : 'border-[#eae1dc] text-[#54433c] hover:bg-[#f5ece7]'
                        }`}
                      >
                        <span>{mat}</span>
                        {isSelected && (
                          <span className="material-symbols-outlined text-[16px] text-[#914726]">
                            check
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 rounded-full bg-[#f5ece7] text-[#54433c] text-xs font-semibold hover:bg-[#eae1dc]"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-2/3 py-3 rounded-full bg-[#914726] text-white text-xs font-semibold hover:bg-[#8f482a] flex items-center justify-center gap-1.5"
                >
                  <span>Scale & Schedule</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-4">
              <div>
                <span className="font-label-md text-xs uppercase tracking-wider text-[#914726] block mb-1">
                  Step 3: Scale & Timeline
                </span>
                <h3 className="font-headline-sm text-xl font-serif text-[#1f1b18]">
                  Estimated footprint & target horizon
                </h3>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1f1b18] block mb-2">
                  Estimated Floor Area
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Under 300 m²', '300 – 800 m²', '800+ m²'].map((scale) => (
                    <button
                      key={scale}
                      type="button"
                      onClick={() => setAreaScale(scale)}
                      className={`p-2.5 rounded-lg border text-center text-xs font-medium transition-all ${
                        areaScale === scale
                          ? 'border-[#914726] bg-[#fbf2ed] text-[#914726] font-semibold'
                          : 'border-[#eae1dc] text-[#54433c] hover:bg-[#f5ece7]'
                      }`}
                    >
                      {scale}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1f1b18] block mb-2">
                  Target Commencement
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Immediate / 6 mo', 'Within 12 months', 'Feasibility Study'].map((tl) => (
                    <button
                      key={tl}
                      type="button"
                      onClick={() => setTimeline(tl)}
                      className={`p-2.5 rounded-lg border text-center text-xs font-medium transition-all ${
                        timeline === tl
                          ? 'border-[#914726] bg-[#fbf2ed] text-[#914726] font-semibold'
                          : 'border-[#eae1dc] text-[#54433c] hover:bg-[#f5ece7]'
                      }`}
                    >
                      {tl}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1f1b18] block mb-1.5">
                  Preferred Discovery Session Date
                </label>
                <input
                  type="date"
                  value={consultDate}
                  onChange={(e) => setConsultDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#f5ece7] text-sm text-[#1f1b18] border border-[#dac1b9]/50 focus:outline-none focus:ring-1 focus:ring-[#914726]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1f1b18] block mb-1.5">
                  Time Slot (Central European Time / Online Video Session)
                </label>
                <select
                  value={consultTime}
                  onChange={(e) => setConsultTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#f5ece7] text-sm text-[#1f1b18] border border-[#dac1b9]/50 focus:outline-none focus:ring-1 focus:ring-[#914726]"
                >
                  <option value="10:00 CET (Barcelona / Paris)">10:00 CET (Barcelona / Paris)</option>
                  <option value="14:00 CET (Barcelona / Paris)">14:00 CET (Barcelona / Paris)</option>
                  <option value="16:00 CET (Barcelona / Paris)">16:00 CET (Barcelona / Paris)</option>
                  <option value="18:00 CET / 12:00 EDT (New York)">18:00 CET / 12:00 EDT (New York)</option>
                  <option value="20:00 CET / Kyoto Morning">20:00 CET / Kyoto Morning</option>
                </select>
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-1/3 py-3 rounded-full bg-[#f5ece7] text-[#54433c] text-xs font-semibold hover:bg-[#eae1dc]"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="w-2/3 py-3 rounded-full bg-[#914726] text-white text-xs font-semibold hover:bg-[#8f482a] flex items-center justify-center gap-1.5"
                >
                  <span>Client Contact</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="flex flex-col gap-4">
              <div>
                <span className="font-label-md text-xs uppercase tracking-wider text-[#914726] block mb-1">
                  Step 4: Contact & Project Notes
                </span>
                <h3 className="font-headline-sm text-xl font-serif text-[#1f1b18]">
                  Confirm your consultation details
                </h3>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1f1b18] block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Elena Rostova"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#f5ece7] text-sm text-[#1f1b18] border border-[#dac1b9]/50 focus:outline-none focus:ring-1 focus:ring-[#914726]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1f1b18] block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="e.g. elena@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#f5ece7] text-sm text-[#1f1b18] border border-[#dac1b9]/50 focus:outline-none focus:ring-1 focus:ring-[#914726]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1f1b18] block mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="+34 600 000 000"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#f5ece7] text-sm text-[#1f1b18] border border-[#dac1b9]/50 focus:outline-none focus:ring-1 focus:ring-[#914726]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1f1b18] block mb-1">
                  Site Notes or Architectural Vision
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe your plot, light orientation, or specific artisan finishes you envision..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#f5ece7] text-sm text-[#1f1b18] border border-[#dac1b9]/50 focus:outline-none focus:ring-1 focus:ring-[#914726]"
                />
              </div>

              {/* Summary recap chip */}
              <div className="bg-[#fbf2ed] p-3 rounded-lg border border-[#eae1dc] text-xs text-[#54433c]">
                <span className="font-semibold text-[#914726]">Summary: </span>
                {typology} · {locationName || locationType} · {areaScale}
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-1/3 py-3 rounded-full bg-[#f5ece7] text-[#54433c] text-xs font-semibold hover:bg-[#eae1dc]"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 rounded-full bg-[#914726] text-white text-xs font-semibold hover:bg-[#8f482a] flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Confirm Discovery Session</span>
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
