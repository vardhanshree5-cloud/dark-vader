import { Project, MaterialSpecimen } from '../types';

export const STUDIO_LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1VJQO-9dHkv1mTJjodTs9kA2ZQsjCIhIEsi6u4T4-Z4Wmhl0hlaZVj29soBuMZV_FRmUpgXGpB6RGoTbIw0tGL86bvge-9-Me3ZnpNRMwnwkmOtvhpDmZJupXDY9022skdWiI0igqmNzrcDdZraS4M_2XGCfrWRUXK6yP_hk_Xwa_Cv6ViPrbelzGttQjcp-n5LfQIz339f10BrqDKvfoz93HKOlM98lj_Hh3Lu1TMoeaf74OW7nxfBGQEY';

export const PROFILE_AVATAR_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwkY8R6R2aZqDOw8nYAO0f0eaUg4kF3GHuzI3aqMIjQ0CnZob0AG9g8lszRiJ8pT1BU4EuHyJwGildSrXWX-qSJz2FEVJiDH6ATlrSiBqNQbbmvzKv0daZIAOef7Q2QvOBCUmBY0OJsEGLXw4VEHxYuRdi06ZVXwpeE2nIJerAjAII95nvA16y36DOzaRCAzu-F9nWWyC4kEmYuEoj1utc7YeE5uO51_8V3FbTMKFydz-CxQYe82c8Fg';

export const MATERIAL_SPECIMENS: MaterialSpecimen[] = [
  {
    id: 'lime',
    name: 'Lime',
    type: 'Plaster',
    colorHex: '#E5DFD5',
    textColorHex: '#54433C',
    origin: 'Andalusia, Spain',
    description: 'Traditional hydraulic slaked lime plaster formulated with crushed marble dust. Naturally breathable, anti-fungal, and absorbs atmospheric CO2 as it cures over decades.',
    thermalDensity: '1,350 kg/m³',
    finish: 'Hand-troweled matte patina',
    sustainabilityRating: 'A+ (Negative Carbon Cure)'
  },
  {
    id: 'cotto',
    name: 'Cotto',
    type: 'Clay',
    colorHex: '#B05E3C',
    textColorHex: '#FFFFFF',
    origin: 'La Bisbal d’Empordà, Catalonia',
    description: 'Hand-pressed terracotta tiles slow-fired in ancient wood kilns. Rich iron oxide red tones with micro-irregularities that capture warm southern daylight.',
    thermalDensity: '1,920 kg/m³',
    finish: 'Waxed raw earth paver',
    sustainabilityRating: 'A (Zero Chemical Additives)'
  },
  {
    id: 'tufa',
    name: 'Tufa',
    type: 'Stone',
    colorHex: '#DCE2CC',
    textColorHex: '#424939',
    origin: 'Puglia & Balearic Basin',
    description: 'Porous biocalcareous limestone quarried from coastal sedimentary strata. Exceptional thermal inertia for Mediterranean passive solar heat mitigation.',
    thermalDensity: '1,680 kg/m³',
    finish: 'Honed wire-cut block',
    sustainabilityRating: 'A+ (Locally Extracted)'
  },
  {
    id: 'walnut',
    name: 'Walnut',
    type: 'Timber',
    colorHex: '#5A614F',
    textColorHex: '#FFFFFF',
    origin: 'Dordogne Valley, France',
    description: 'Slow-growth European walnut treated with cold-pressed linseed oil and organic beeswax. Rich chocolate figure and dense grain structure for monolithic millwork.',
    thermalDensity: '660 kg/m³',
    finish: 'Smoked and oil-rubbed',
    sustainabilityRating: 'PEFC Certified Reforested'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'villa-sombra',
    title: 'Villa Sombra',
    subtitle: 'Residential Architecture • 2024',
    year: 2024,
    category: 'residential',
    location: 'Santanyí, Mallorca',
    country: 'Spain',
    scope: '5 Suites',
    area: '680 m²',
    featureBadge: 'Balearic Basin',
    featureIcon: 'square_foot',
    description: 'A limestone sanctuary sculpted into the southern Mallorcan topography, balancing deep shaded colonnades with soft Mediterranean cross-ventilation.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc0b0Azw-tNFS2UmcgMJXg7VxmVDeORHksw3j0y8pv57_dyLnmEiNQp5zAVRMyyP4dbz-qcSO_KQvSclRsmptnPq8cdLtLyhf6Q_Cs9PTrVSvds4f6ba1ZssbxgJa0kzVGg2ToTBIpYTZKVcx4woHoGnWzoYknamMqxRujAT3jI4Xe4hlFF1dh9zTFHGLEa6OhGOEzSeONLWVkWcbdPqoT41ce5OafrrXoFho3dA07goFoGCmYND83Hw',
    altText: 'Warm sunlight casting rhythmic architectural shadows across a minimalist Mallorcan villa courtyard with hand-troweled lime plaster walls, a serene travertine plunge pool, and textured natural linen drapery gently swaying in the Balearic breeze.',
    materials: ['Travertine', 'Raw Linen'],
    featured: true,
    awards: ['Mies van der Rohe Nominee 2024', 'Architectural Digest Iberia Best Residence'],
    caseStudy: {
      summary: 'Villa Sombra was envisioned as a monolithic earth pavilion that tempers the fierce Balearic sun through geometric depth, porous calcic stone, and passive breezeways.',
      architecturalConcept: 'Rather than fighting solar radiation with mechanical HVAC, Villa Sombra adopts the ancient Mediterranean strategy of the shaded portico (la sombra). Thick 45cm local Mares limestone envelopes shield living quarters from direct summer heat while a series of water basins act as evaporative micro-coolers.',
      passiveDesign: 'Orientation: South-Southwest. The peristyle courtyard channels dominant thermic sea breezes through subterranean vents, delivering a natural 6°C temperature depression during peak July afternoons.',
      climateZone: 'Csa — Mediterranean Hot Summer',
      orientation: 'South-Southwest (210°)',
      embodiedCarbon: '210 kg CO₂e/m² (65% lower than EU residential average)',
      keyMaterials: ['Santanyí Marès Limestone', 'Italian Roman Travertine', 'Unbleached Organic Linen', 'Hydraulic Lime Plaster'],
      dimensions: {
        area: '680 m²',
        ceilingHeight: '3.60 m',
        footprint: '420 m² ground footprint'
      },
      fieldNotes: 'During our third site survey on the southern cliffs of Santanyí, we observed how wild olive trees bend toward the sea breeze. The structural colonnade follows this exact angle of incidence.',
      drawings: [
        {
          title: 'Transverse Section & Sun Angle',
          description: 'Winter solstice penetration (28°) vs. Summer solstice overhang cutoff (74°)',
          type: 'section'
        },
        {
          title: 'Courtyard Airflow Dynamics',
          description: 'Negative pressure intake through reflecting pool colonnade',
          type: 'plan'
        }
      ],
      gallery: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc0b0Azw-tNFS2UmcgMJXg7VxmVDeORHksw3j0y8pv57_dyLnmEiNQp5zAVRMyyP4dbz-qcSO_KQvSclRsmptnPq8cdLtLyhf6Q_Cs9PTrVSvds4f6ba1ZssbxgJa0kzVGg2ToTBIpYTZKVcx4woHoGnWzoYknamMqxRujAT3jI4Xe4hlFF1dh9zTFHGLEa6OhGOEzSeONLWVkWcbdPqoT41ce5OafrrXoFho3dA07goFoGCmYND83Hw',
          caption: 'Inner peristyle with travertine plunge basin and woven linen shades.'
        }
      ]
    }
  },
  {
    id: 'aman-kyoto-pavilion',
    title: 'Aman Kyoto Pavilion',
    subtitle: 'Bespoke Hospitality • 2023',
    year: 2023,
    category: 'hospitality',
    location: 'Kyoto, Japan',
    country: 'Japan',
    scope: 'Tea Pavilion',
    area: '240 m²',
    featureBadge: 'Forest Reserve',
    featureIcon: 'eco',
    description: 'Quiet meditative architecture honoring traditional Sukiya joinery, where tactile cedar aromatics merge with natural stone garden contours.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOTgs6MltmShBQSZIVCEQdwk3u-BsOjpO_RppnPGlGiPAtQ9Bmvtu-01OGltratyxke6zekEsM9zoXYofhiTyxxaraDL_NZ4qW-vFic63LSF2J7WhhbUj4rO03wwSwmucaISEAze2TOOQ3IKLpNPlhBGl8PZKomzRYkppwTig-g_0ZFm_ux9U01dY0jNE5AcjPVRLmBM-Q131U1Gv7zNesSLHYOAVnlN8n0dc01KQWaeg2Nrd7m1gC7Q',
    altText: 'A tranquil Japanese pavilion in Kyoto nestled within dense moss gardens and towering cedar trees, featuring charred cedar wood Shou Sugi Ban exterior screens, hand-woven igusa tatami mat floors, soft diffused Shoji paper light, and low-slung minimalist oak furniture.',
    materials: ['Hinoki Cedar', 'Tatami'],
    featured: true,
    awards: ['Kyoto Master Woodcraft Fellowship 2023', 'Global Hospitality Design Gold'],
    caseStudy: {
      summary: 'Crafted without a single metallic fastener, the Aman Kyoto Pavilion embodies the discipline of Kigumi wood joinery and sensory contemplation.',
      architecturalConcept: 'Commissioned to design a sanctuary for tea ceremonies and Zen contemplation within an ancient cedar preserve, the pavilion floats 40cm above the forest floor to allow moss and mycelium colonies to flourish undisturbed beneath.',
      passiveDesign: 'Deep 1.8-meter eaves shed torrential monsoon downpours while framing horizontal bands of moss. Natural ventilation rises through slotted cedar decking.',
      climateZone: 'Cfa — Humid Subtropical Forest',
      orientation: 'North-East Garden View (45°)',
      embodiedCarbon: 'Carbon Negative (-42 kg CO₂e/m² structural timber storage)',
      keyMaterials: ['Ancient Yoshino Hinoki Cedar', 'Kumamoto Rush Igusa Tatami', 'Charred Yakisugi Cedar', 'Echizen Mulberry Washi'],
      dimensions: {
        area: '240 m²',
        ceilingHeight: '2.40 m (proportional to Tatami module)',
        footprint: '180 m² ground footprint'
      },
      fieldNotes: 'The master joiner Mr. Tanaka spent seven weeks seasoning the cedar logs in mountain stream water before making the first chisel cut.',
      drawings: [
        {
          title: 'Mortise & Tenon Kigumi Detail',
          description: 'Blind interlocking joint resisting seismic shear without iron bolts',
          type: 'elevation'
        },
        {
          title: 'Tatami Grid Coordination',
          description: '8-mat and 12-mat tea room geometric harmony',
          type: 'plan'
        }
      ],
      gallery: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOTgs6MltmShBQSZIVCEQdwk3u-BsOjpO_RppnPGlGiPAtQ9Bmvtu-01OGltratyxke6zekEsM9zoXYofhiTyxxaraDL_NZ4qW-vFic63LSF2J7WhhbUj4rO03wwSwmucaISEAze2TOOQ3IKLpNPlhBGl8PZKomzRYkppwTig-g_0ZFm_ux9U01dY0jNE5AcjPVRLmBM-Q131U1Gv7zNesSLHYOAVnlN8n0dc01KQWaeg2Nrd7m1gC7Q',
          caption: 'Pavilion veranda overlooking the moss garden and forested ridges.'
        }
      ]
    }
  },
  {
    id: 'atelier-loft-no-4',
    title: 'Atelier Loft No. 4',
    subtitle: 'Heritage Restoration • 2024',
    year: 2024,
    category: 'heritage',
    location: 'Paris 7th, France',
    country: 'France',
    scope: 'Private Residence',
    area: '310 m²',
    featureBadge: 'Historical Archive',
    featureIcon: 'history_edu',
    description: 'A delicate 19th-century salon revitalized with monolithic fluted lime plaster and brushed bronze joinery, preserving historic moldings with restraint.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvTZ_nK9uPp-8ZCfYWk_ZTpAY8sEikujHoyVOVBjvvBI7OV4m-1d-SwBpMm9xnj0ZrcL79UYV7Aq2eR9ykCRXk_E6zazvnJfWPa91i37QI1cQf82MUT_3GQKj1Lpum9dBzZ_BPm6wWDGx2MCme20d-FO33iS1OXHT8iXqrXxPjDICHcWFA4I0MDD7KSWg5LxbtHaQnFyrqMYYagg02KMTXMqfK9L5CfAuU0mbDcGABNO2RMjk9ev2aiA',
    altText: 'Interior view of a high-ceilinged Parisian Haussmann apartment renovation featuring restored French oak chevron parquet flooring, an organic sculpted fluted plaster fireplace, a monolithic honed Calacatta marble kitchen island, warm linen curtains, and diffused museum lighting.',
    materials: ['Chevron Oak', 'Honed Calacatta'],
    featured: true,
    awards: ['French Heritage Architectural Prize 2024'],
    caseStudy: {
      summary: 'A radical yet reverent intervention in a registered 1888 Haussmann apartment, re-centering spatial flow around daylight and monumental mineral islands.',
      architecturalConcept: 'The existing labyrinth of servants corridors and dark antechambers was surgically dismantled to liberate a double-height central rotunda. Rather than imitating 19th-century plasterwork, new walls are rendered in continuous lime slurry that softly mirrors historical ceiling cornices without replicating them.',
      passiveDesign: 'Natural chimney stack ventilation through central courtyards; secondary interior double-glazing with hand-blown cylinder glass to retain thermal envelope.',
      climateZone: 'Cfb — Oceanic Western Europe',
      orientation: 'East-West Dual Exposure',
      embodiedCarbon: '145 kg CO₂e/m² (adaptive reuse preservation bonus)',
      keyMaterials: ['Salvaged 19th-C French White Oak', 'Honed Calacatta Vagli Marble', 'Brushed Raw Gunmetal Bronze', 'Natural Chalk Wash'],
      dimensions: {
        area: '310 m²',
        ceilingHeight: '4.25 m',
        footprint: '310 m² single floor'
      },
      fieldNotes: 'Uncovering the original solid oak subfloor revealed hand-carved markings from the original 1888 joiner, Paul Durand. We preserved them behind an inset bronze plaque.',
      drawings: [
        {
          title: 'Monolithic Calacatta Island Section',
          description: 'Cantilevered 3.8-meter island supported by internal steel armature',
          type: 'elevation'
        },
        {
          title: 'Acoustic Wall Separation',
          description: 'Air cavity and recycled cellulose fiber insulation between salon and bedrooms',
          type: 'plan'
        }
      ],
      gallery: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvTZ_nK9uPp-8ZCfYWk_ZTpAY8sEikujHoyVOVBjvvBI7OV4m-1d-SwBpMm9xnj0ZrcL79UYV7Aq2eR9ykCRXk_E6zazvnJfWPa91i37QI1cQf82MUT_3GQKj1Lpum9dBzZ_BPm6wWDGx2MCme20d-FO33iS1OXHT8iXqrXxPjDICHcWFA4I0MDD7KSWg5LxbtHaQnFyrqMYYagg02KMTXMqfK9L5CfAuU0mbDcGABNO2RMjk9ev2aiA',
          caption: 'Great salon with restored parquet and honed marble centerpiece.'
        }
      ]
    }
  },
  {
    id: 'casa-bellamar',
    title: 'Casa Bellamar',
    subtitle: 'Coastal Architecture • 2023',
    year: 2023,
    category: 'residential',
    location: 'Costa Brava, Spain',
    country: 'Spain',
    scope: '4 Bedrooms',
    area: '520 m²',
    featureBadge: 'Coastal Edge',
    featureIcon: 'waves',
    description: 'Cascading stepped terraces oriented toward the horizon, executed in handmade terracotta tiles and rough-sawn local pine millwork.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVw2dXM2uwrAAI_mhjxdl6O9oV3MD_Q7kUNgm8gOBonjkM53OQhPbJ60Vf4nEXPFFcWpguqlet_61P47ROHJrC7fU0c0IznqQ9MKAjJq-Y4fNtYG8B2ZK0fuv9TYfmxG6YaM4A3hhpG9l578M26oSut5bb8IcOCr6SnlEyRGmSiU4xSBKXpMYF7Xbz-ipguNLC9yxvyR65mxtZUxFqKQOMqDYdfQ94P4mXDTfvT1mYOVVqDwMeHV178w',
    altText: 'A cliffside coastal villa on the Costa Brava with warm terracotta hand-baked floor pavers, microcement step seating, ancient knotted olive wood structural beams, and vast open panoramic windows overlooking the azure Mediterranean sea.',
    materials: ['Terracotta Tile', 'Olive Wood'],
    featured: true,
    awards: ['Mediterranean Architectural Triennale 1st Prize'],
    caseStudy: {
      summary: 'Perched on granitic seaside cliffs, Casa Bellamar embraces the raw topography through stepped terraces stepped down to the shoreline.',
      architecturalConcept: 'The house was conceived as a series of geological terraces, hugging the natural grade of the coastal cliff so that no existing maritime pine tree was felled. Every interior space transitions seamlessly onto a shaded pergola floor paved in warm terracotta.',
      passiveDesign: 'Thermal chimney effect creates upward suction of marine air through high clerestory windows, reducing summer cooling requirements to near zero.',
      climateZone: 'Csa — Coastal Mediterranean',
      orientation: 'South-East (135°)',
      embodiedCarbon: '185 kg CO₂e/m²',
      keyMaterials: ['Handmade Empordà Terracotta', 'Reclaimed Wild Olive Timber', 'Buff Earth Mortar', 'Salt-Resistant Bronze'],
      dimensions: {
        area: '520 m²',
        ceilingHeight: '3.20 m to 4.80 m',
        footprint: '340 m² across 3 stepped terraces'
      },
      fieldNotes: 'The salt spray on the Costa Brava corrodes modern aluminum in months. We used unlacquered maritime bronze that develops a deep green verdigris shield over time.',
      drawings: [
        {
          title: 'Stepped Cliff Contour Elevation',
          description: 'Terraced foundation anchoring into natural pink granite bed',
          type: 'elevation'
        },
        {
          title: 'Pergola Shading Matrix',
          description: 'Calculated shadow cast from wild olive timber pergola slats',
          type: 'plan'
        }
      ],
      gallery: [
        {
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVw2dXM2uwrAAI_mhjxdl6O9oV3MD_Q7kUNgm8gOBonjkM53OQhPbJ60Vf4nEXPFFcWpguqlet_61P47ROHJrC7fU0c0IznqQ9MKAjJq-Y4fNtYG8B2ZK0fuv9TYfmxG6YaM4A3hhpG9l578M26oSut5bb8IcOCr6SnlEyRGmSiU4xSBKXpMYF7Xbz-ipguNLC9yxvyR65mxtZUxFqKQOMqDYdfQ94P4mXDTfvT1mYOVVqDwMeHV178w',
          caption: 'Main living terrace opening to the Mediterranean horizon.'
        }
      ]
    }
  },
  {
    id: 'gion-machiya-millwork',
    title: 'Komorebi Tea Library',
    subtitle: 'Custom Millwork • 2024',
    year: 2024,
    category: 'millwork',
    location: 'Gion, Kyoto',
    country: 'Japan',
    scope: 'Joinery Atelier',
    area: '180 m²',
    featureBadge: 'Artisanal Joinery',
    featureIcon: 'handyman',
    description: 'Precision Sukiya timber joinery, featuring floor-to-ceiling smoked walnut bookshelves, hidden sliding shoji screens, and custom brass tenon brackets.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOTgs6MltmShBQSZIVCEQdwk3u-BsOjpO_RppnPGlGiPAtQ9Bmvtu-01OGltratyxke6zekEsM9zoXYofhiTyxxaraDL_NZ4qW-vFic63LSF2J7WhhbUj4rO03wwSwmucaISEAze2TOOQ3IKLpNPlhBGl8PZKomzRYkppwTig-g_0ZFm_ux9U01dY0jNE5AcjPVRLmBM-Q131U1Gv7zNesSLHYOAVnlN8n0dc01KQWaeg2Nrd7m1gC7Q',
    altText: 'Intricate custom wooden joinery and floor-to-ceiling timber cabinetry in a quiet Kyoto library pavilion with soft morning light filtering through cedar slats.',
    materials: ['Walnut', 'Shoji Paper'],
    featured: false,
    awards: ['Japan Woodcraft Guild Recognition'],
    caseStudy: {
      summary: 'An exploration of architectural woodwork at human hand scale, housing a rare collection of architectural prints and ceramics.',
      architecturalConcept: 'Interlocking structural posts double as display cabinets, with sliding panels concealed in recessed wall pockets to transform reading nooks into private tea sanctuaries.',
      passiveDesign: 'Natural humidity regulation by unsealed Japanese cedar and walnut timber.',
      climateZone: 'Cfa — Subtropical',
      orientation: 'North-Facing Skylight (0°)',
      embodiedCarbon: 'Carbon Negative (-18 kg CO₂e/m²)',
      keyMaterials: ['European Walnut', 'Handmade Echizen Washi Paper', 'Unlacquered Brass Tenons'],
      dimensions: {
        area: '180 m²',
        ceilingHeight: '3.10 m',
        footprint: '180 m²'
      },
      fieldNotes: 'Every joinery element was cut to a tolerance of 0.2 millimeters to allow natural seasonal expansion without binding.',
      drawings: [
        {
          title: 'Sliding Shoji Pocket Detail',
          description: 'Frictionless wooden floor runner with concealed wax channels',
          type: 'elevation'
        }
      ],
      gallery: []
    }
  },
  {
    id: 'monastery-santa-agnes',
    title: 'Monastery of Santa Agnès',
    subtitle: 'Heritage Restoration • 2023',
    year: 2023,
    category: 'heritage',
    location: 'Serra de Tramuntana, Mallorca',
    country: 'Spain',
    scope: 'Cultural Cloister',
    area: '920 m²',
    featureBadge: 'UNESCO Biosphere',
    featureIcon: 'temple_buddhist',
    description: 'Stabilization and poetic reinterpretation of a 17th-century Carthusian cloister into an acoustic retreat and botanical research sanctuary.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc0b0Azw-tNFS2UmcgMJXg7VxmVDeORHksw3j0y8pv57_dyLnmEiNQp5zAVRMyyP4dbz-qcSO_KQvSclRsmptnPq8cdLtLyhf6Q_Cs9PTrVSvds4f6ba1ZssbxgJa0kzVGg2ToTBIpYTZKVcx4woHoGnWzoYknamMqxRujAT3jI4Xe4hlFF1dh9zTFHGLEa6OhGOEzSeONLWVkWcbdPqoT41ce5OafrrXoFho3dA07goFoGCmYND83Hw',
    altText: 'Ancient stone archways and cloisters of a restored monastery in the Serra de Tramuntana mountains surrounded by olive groves.',
    materials: ['Tufa Stone', 'Lime'],
    featured: false,
    awards: ['Europa Nostra Heritage Award 2023'],
    caseStudy: {
      summary: 'Reviving structural integrity while preserving the silent monastic patina of three centuries of devotional life in the Tramuntana peaks.',
      architecturalConcept: 'Restoring collapsed groin vaults with matching lime pozzolana mortar, introducing contemporary bronze lighting fixtures that float unfastened from historical vaults.',
      passiveDesign: 'Massive 80cm stone walls maintain an indoor temperature of 19°C year-round without mechanical climate systems.',
      climateZone: 'Csb — Mediterranean Mountain',
      orientation: 'East-Facing Cloister Courtyard',
      embodiedCarbon: '95 kg CO₂e/m²',
      keyMaterials: ['Tramuntana Fieldstone', 'Slaked Lime Mortar', 'Chestnut Beams', 'Raw Clay Tiles'],
      dimensions: {
        area: '920 m²',
        ceilingHeight: '5.60 m',
        footprint: '750 m²'
      },
      fieldNotes: 'Working in absolute silence alongside the mountain silence became our daily monastic discipline.',
      drawings: [
        {
          title: 'Vault Stabilization & Micro-Piling Plan',
          description: 'Subterranean foundation reinforcement without disturbing historical burial crypts',
          type: 'section'
        }
      ],
      gallery: []
    }
  }
];

export const STUDIO_MILESTONES = {
  sanctuaries: '42+',
  awards: '12',
  tactileOrigin: '100%',
  yearsPracticing: '14 Years',
  quarriesPreserved: '9 Quarries'
};

export const SERVICES_LIST = [
  {
    number: '01',
    title: 'Bespoke Residential Sanctuaries',
    subtitle: 'Ground-up architectural commissions for discerning patrons worldwide',
    description: 'We conceive single-family residences, private coastal estates, and rural sanctuaries as extensions of their native landscapes. Every commission starts with soil core sampling, microclimate solar mapping, and the extraction of local mineral mass.',
    tags: ['Site Topography Analysis', 'Monolithic Stone & Earth Mass', 'Passive Cross-Ventilation', 'Turnkey Interior Architecture'],
    deliverables: ['Full Architectural Concept & Construction Documents', 'Custom Material Sourcing from Regional Quarries', 'Bioclimatic Engineering & Thermal Modeling', 'On-Site Craft Supervision & Handover']
  },
  {
    number: '02',
    title: 'Bespoke Hospitality Retreats',
    subtitle: 'Intimate tea pavilions, eco-sanctuaries, and sensory wellness environments',
    description: 'Translating mindful hospitality into built form. We curate guest journeys that prioritize tactile serenity, silence, natural acoustic dampening, and seamless indoor-outdoor transitions.',
    tags: ['Acoustic Sanctuary Engineering', 'Bespoke Water Elements', 'Ritual Tea & Meditation Pavilions', 'Low-Impact Foundation Systems'],
    deliverables: ['Master Planning & Spatial Choreography', 'Sensory Material Palette Development', 'Local Artisan & Joinery Partnerships', 'Post-Occupancy Acoustic Tuning']
  },
  {
    number: '03',
    title: 'Heritage & Historical Restorations',
    subtitle: 'Reverent intervention in registered 18th & 19th-century fabric',
    description: 'Our heritage practice operates under the principle of poetic restraint: preserving historic moldings, oak parquet, and stone vaults while introducing clean mineral interventions that complement rather than compete with historical patina.',
    tags: ['Historic Monument Conservation', 'Traditional Slaked Lime & Gypsum', 'Structural Parquet Restoration', 'Concealed Modern Infrastructure'],
    deliverables: ['Historical Archive Research & Conservation Petitions', 'Micro-Invasive Structural Stabilization', 'Artisanal Lime & Bronze Craftsmanship', 'Heritage Compliance Documentation']
  },
  {
    number: '04',
    title: 'Custom Architectural Millwork & Stonework',
    subtitle: 'Sculptural furniture, hand-carved stone basins, and precision joinery',
    description: 'Operating our own material lab in Barcelona and woodshop in Kyoto, we execute bespoke architectural millwork, monolithic marble islands, Shou Sugi Ban screens, and hand-forged bronze hardware.',
    tags: ['Solid Hardwood Kigumi Joinery', 'Monolithic Hand-Chiseled Stone', 'Cold-Wax & Linseed Finishes', 'Unlacquered Maritime Bronze'],
    deliverables: ['1:1 Scale Physical Prototype Studies', 'Artisanal Fabrication & Kiln Seasoning', 'Bespoke Hardware Casting', 'White-Glove Architectural Installation']
  }
];

export const STUDIO_ETHOS = [
  {
    title: 'Troweled Silence',
    desc: 'We reject high-gloss synthetic polymers. Every surface in an Atelier Terra building is textured to diffuse harsh direct light into a soft mineral glow.'
  },
  {
    title: 'Passive Climatic Weave',
    desc: 'Deep colonnades, courtyard fountains, and porous limestone stone walls naturally condition the air, minimizing mechanical reliance by up to 70%.'
  },
  {
    title: 'Living Geology',
    desc: 'Buildings are not static sculptures; they are living geological entities that age with grace, absorbing rainfall, sun, and touch into a richer patina.'
  }
];
