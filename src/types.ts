export type EntityType = 'Pvt Ltd' | 'LLP' | 'OPC' | 'Proprietorship' | 'Partnership';
export type TurnoverBracket = 'Pre-revenue' | '< ₹20L' | '₹20L - ₹40L' | '₹40L - ₹5Cr' | '₹5Cr - ₹100Cr' | '> ₹100Cr';
export type EntityAge = '< 1 year' | '1-3 years' | '3-5 years' | '> 5 years';
export type Urgency = 'Red' | 'Yellow' | 'Green' | 'Incentive' | 'Conditional';
export type ComplianceType = 'Regulatory' | 'Statutory' | 'Certification' | 'Standard' | 'Incentive';

export interface UserInputs {
  isIncorporated: boolean;
  entityType: EntityType;
  entityAge: EntityAge;
  state: string;
  turnover: TurnoverBracket;
  businessModel: 'Product' | 'Service' | 'Both';
  interstateSales: boolean;
  isEcommerce: boolean;
  paidUpCapital: number;
  headcount: number;
  foreignInvestment: boolean;
  msmeVendors: boolean;
  dataProcessing: boolean;
  hasBorrowings: boolean;
  isDPIITRecognized: boolean;
  hasContractLabor: boolean;
  hasForeignLoans: boolean;
  industry: string;
  subIndustry: string;
}

export interface SetupStep {
  title: string;
  description: string;
  timeline: string;
  cost: string;
}

export interface EntitySetupGuide {
  entityType: EntityType;
  steps: SetupStep[];
  pros: string[];
  cons: string[];
}

export interface DocumentRequirement {
  name: string;
  description: string;
  documentType: 'Identity' | 'Address' | 'Entity' | 'Financial' | 'Other';
  url?: string;
  informationUrl?: string;
}

export interface Compliance {
  id: string;
  category: string;
  name: string;
  description: string; // Renamed from 'what'
  periodicity: 'One-time' | 'Monthly' | 'Quarterly' | 'Half-yearly' | 'Annual' | 'Event-based' | 'Ongoing';
  dueDateLogic: string; // how early and when you should start
  sourceType: ComplianceType; // Renamed from 'type'
  sourceUrl: string; // Renamed from 'whereUrl'
  isServiceBased: boolean;
  specificDate?: string; // if any
  version: string;
  urgency: Urgency;
  where: string;
  how: string;
  penalty: string;
  documentRequirements: DocumentRequirement[] | ((inputs: UserInputs) => DocumentRequirement[]); // Renamed from 'requiredDocuments'
  isMandatory: boolean;
  trigger: (inputs: UserInputs) => boolean;
}
