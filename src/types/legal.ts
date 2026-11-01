export type AssetType = 
  | 'residential_property'
  | 'commercial_property'
  | 'farmland_estancia'
  | 'bank_accounts'
  | 'corporate_shares'
  | 'vehicles_boats'
  | 'mixed_estate';

export type ArgentineProvince =
  | 'caba'
  | 'buenos_aires_prov'
  | 'cordoba'
  | 'santa_fe'
  | 'mendoza'
  | 'patagonia'
  | 'other';

export type HeirResidency =
  | 'united_states'
  | 'canada'
  | 'united_kingdom'
  | 'european_union'
  | 'australia'
  | 'other';

export interface CaseIntakeSubmission {
  id: string;
  submittedAt: string;
  fullName: string;
  email: string;
  phone: string;
  preferredLanguage: 'en' | 'es';
  heirResidency: HeirResidency;
  province: ArgentineProvince;
  assetTypes: AssetType[];
  estimatedValueUsd: number;
  willExists: 'yes_argentine' | 'yes_foreign' | 'no_intestate' | 'unknown';
  hasDeathCert: boolean;
  hasApostille: boolean;
  notes: string;
  urgency: 'immediate' | 'planning' | 'exploring';
}

export interface PracticeArea {
  id: string;
  code: string;
  title: string;
  spanishTitle: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  statute: string;
  typicalDuration: string;
  imageUrl: string;
}

export interface CasePrecedent {
  id: string;
  caseCode: string;
  title: string;
  location: string;
  clientLocation: string;
  assetSummary: string;
  totalValueUsd: string;
  durationMonths: number;
  travelRequired: boolean;
  keyChallenge: string;
  legalSolution: string;
  outcome: string;
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  category: 'probate_process' | 'taxes_fees' | 'remote_representation' | 'funds_repatriation';
  question: string;
  questionEs: string;
  answer: string;
  answerEs: string;
  legalBasis?: string;
}
