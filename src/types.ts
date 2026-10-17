export type TabType = 'home' | 'portfolio' | 'studies' | 'services' | 'consult';

export type ProjectCategory = 'all' | 'residential' | 'hospitality' | 'heritage' | 'millwork';

export interface MaterialSpecimen {
  id: string;
  name: string;
  type: string;
  colorHex: string;
  textColorHex: string;
  origin: string;
  description: string;
  thermalDensity: string;
  finish: string;
  sustainabilityRating: string;
}

export interface CaseStudyData {
  summary: string;
  architecturalConcept: string;
  passiveDesign: string;
  climateZone: string;
  orientation: string;
  embodiedCarbon: string;
  keyMaterials: string[];
  dimensions: {
    area: string;
    ceilingHeight: string;
    footprint: string;
  };
  fieldNotes: string;
  drawings: {
    title: string;
    description: string;
    type: 'elevation' | 'plan' | 'section';
  }[];
  gallery: {
    url: string;
    caption: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: number;
  category: 'residential' | 'hospitality' | 'heritage' | 'millwork';
  location: string;
  country: string;
  scope: string; // e.g. "5 Suites", "Tea Pavilion", "Private Residence"
  area: string; // e.g. "680 m²"
  featureBadge: string; // e.g. "Coastal Edge", "Forest Reserve"
  featureIcon: string; // material icon name
  description: string;
  imageUrl: string;
  altText: string;
  materials: string[];
  featured?: boolean;
  awards?: string[];
  caseStudy: CaseStudyData;
}

export interface ConsultationRequest {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  typology: string;
  location: string;
  preferredMaterials: string[];
  approximateArea: string;
  timeline: string;
  consultationDate: string;
  consultationTime: string;
  timeZone: string;
  notes?: string;
  createdAt: string;
}
