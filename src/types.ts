export type EntityType = 'Pvt Ltd' | 'LLP' | 'OPC' | 'Proprietorship' | 'Partnership';
export type TurnoverBracket = 'Pre-revenue' | '< ₹20L' | '₹20L - ₹40L' | '₹40L - ₹5Cr' | '₹5Cr - ₹100Cr' | '> ₹100Cr';
export type EntityAge = '< 1 year' | '1-3 years' | '3-5 years' | '> 5 years';
export type Urgency = 'Red' | 'Yellow' | 'Green' | 'Incentive' | 'Conditional';

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

export interface Compliance {
  id: string;
  category: string;
  name: string;
  urgency: Urgency;
  what: string;
  when: string;
  where: string;
  whereUrl: string;
  how: string;
  penalty: string;
  isMandatory: boolean;
  trigger: (inputs: UserInputs) => boolean;
}
