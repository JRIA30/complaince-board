import React from 'react';
import { UserInputs, EntityType, TurnoverBracket } from '../types';
import { INDIAN_STATES, INDUSTRIES, INPUT_HELP_TEXT } from '../constants';
import { ChevronRight, Info, Building2, CheckCircle2, Zap, HelpCircle } from 'lucide-react';

interface ComplianceFormProps {
  onSubmit: (inputs: UserInputs) => void;
}

const InfoTooltip: React.FC<{ text: string }> = ({ text }) => (
  <div className="group relative inline-block ml-1 align-middle">
    <HelpCircle size={14} className="text-zinc-400 hover:text-emerald-500 transition-colors cursor-help" />
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-zinc-900 text-white text-[10px] rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 shadow-xl border border-white/10 leading-relaxed">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-zinc-900" />
    </div>
  </div>
);

export const ComplianceForm: React.FC<ComplianceFormProps> = ({ onSubmit }) => {
  const [inputs, setInputs] = React.useState<UserInputs>({
    isIncorporated: true,
    entityType: 'Pvt Ltd',
    entityAge: '< 1 year',
    state: 'Maharashtra',
    turnover: 'Pre-revenue',
    businessModel: 'Service',
    interstateSales: false,
    isEcommerce: false,
    paidUpCapital: 100000,
    headcount: 0,
    foreignInvestment: false,
    msmeVendors: false,
    dataProcessing: false,
    hasBorrowings: false,
    isDPIITRecognized: false,
    hasContractLabor: false,
    hasForeignLoans: false,
    industry: 'SaaS/IT',
    subIndustry: 'Enterprise Software',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputs);
  };

  return (
    <div className="space-y-8">
      {/* Diamond-Grade Logic Formula */}
      <div className="bg-zinc-900 text-white p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Zap size={120} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Zap size={16} className="text-black" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">The 2026 "Diamond-Grade" Logic Formula</h2>
          </div>
          <p className="text-zinc-400 text-sm mb-6 max-w-2xl">
            Our system logic is mathematically defined to ensure your compliance roadmap is precise, adaptive, and never misses a beat.
          </p>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-mono text-emerald-400 text-center mb-6">
              C<sub className="text-xs">Total</sub> = f(I, F, V, B, V<sub className="text-xs">DNA</sub>, D<sub className="text-xs">S</sub>, O<sub className="text-xs">C</sub>, A<sub className="text-xs">NIC</sub>)
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] uppercase tracking-widest font-bold text-zinc-500">
              <div className="flex flex-col gap-1">
                <span className="text-emerald-500 text-xs">I: Identity</span>
                <span>Pvt Ltd, LLP, etc.</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-emerald-500 text-xs">F: Footprint</span>
                <span>States & Employees</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-emerald-500 text-xs">V: Volume</span>
                <span>Turnover & Capital</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-emerald-500 text-xs">B: Behavior</span>
                <span>Foreign & Cash</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-emerald-500 text-xs">V<sub className="text-[8px]">DNA</sub>: Vendor</span>
                <span>MSME Status</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-emerald-500 text-xs">D<sub className="text-[8px]">S</sub>: Data</span>
                <span>Privacy Tier</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-emerald-500 text-xs">O<sub className="text-[8px]">C</sub>: Ownership</span>
                <span>SBO/UBO Complexity</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-emerald-500 text-xs">A<sub className="text-[8px]">NIC</sub>: Industry</span>
                <span>Sector Licenses</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-black/5">
      {/* Incorporation Status */}
      <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
            <Building2 size={20} />
          </div>
          <div>
            <h3 className="font-bold text-emerald-900 flex items-center gap-1">
              Incorporation Status
              <InfoTooltip text={INPUT_HELP_TEXT.isIncorporated} />
            </h3>
            <p className="text-sm text-emerald-700">Is your business already registered?</p>
          </div>
        </div>
        <div className="flex bg-white p-1 rounded-xl border border-emerald-200 shadow-inner">
          <button
            type="button"
            onClick={() => setInputs({ ...inputs, isIncorporated: true })}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${inputs.isIncorporated ? 'bg-emerald-600 text-white shadow-md' : 'text-emerald-600 hover:bg-emerald-50'}`}
          >
            Yes, Registered
          </button>
          <button
            type="button"
            onClick={() => setInputs({ ...inputs, isIncorporated: false })}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${!inputs.isIncorporated ? 'bg-emerald-600 text-white shadow-md' : 'text-emerald-600 hover:bg-emerald-50'}`}
          >
            Not Yet
          </button>
        </div>
      </div>

      {/* Toggles (Additional Information) - Moved Above */}
      <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-4 bg-emerald-500 rounded-full" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Additional Information</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border ${inputs.foreignInvestment ? 'bg-emerald-50 border-emerald-200' : 'bg-zinc-50 border-zinc-100 hover:bg-zinc-100'}`}>
            <span className="text-sm font-medium text-zinc-700 flex items-center gap-1">
              Foreign Investment?
              <InfoTooltip text={INPUT_HELP_TEXT.foreignInvestment} />
            </span>
            <input
              type="checkbox"
              checked={inputs.foreignInvestment}
              onChange={(e) => setInputs({ ...inputs, foreignInvestment: e.target.checked })}
              className="w-5 h-5 accent-emerald-500"
            />
          </label>
          <label className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border ${inputs.msmeVendors ? 'bg-emerald-50 border-emerald-200' : 'bg-zinc-50 border-zinc-100 hover:bg-zinc-100'}`}>
            <span className="text-sm font-medium text-zinc-700 flex items-center gap-1">
              B2B MSME Vendors?
              <InfoTooltip text={INPUT_HELP_TEXT.msmeVendors} />
            </span>
            <input
              type="checkbox"
              checked={inputs.msmeVendors}
              onChange={(e) => setInputs({ ...inputs, msmeVendors: e.target.checked })}
              className="w-5 h-5 accent-emerald-500"
            />
          </label>
          <label className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border ${inputs.dataProcessing ? 'bg-emerald-50 border-emerald-200' : 'bg-zinc-50 border-zinc-100 hover:bg-zinc-100'}`}>
            <span className="text-sm font-medium text-zinc-700 flex items-center gap-1">
              Processing User Data?
              <InfoTooltip text={INPUT_HELP_TEXT.dataProcessing} />
            </span>
            <input
              type="checkbox"
              checked={inputs.dataProcessing}
              onChange={(e) => setInputs({ ...inputs, dataProcessing: e.target.checked })}
              className="w-5 h-5 accent-emerald-500"
            />
          </label>
          <label className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border ${inputs.hasBorrowings ? 'bg-emerald-50 border-emerald-200' : 'bg-zinc-50 border-zinc-100 hover:bg-zinc-100'}`}>
            <span className="text-sm font-medium text-zinc-700 flex items-center gap-1">
              Bank Borrowings &gt; ₹50Cr?
              <InfoTooltip text={INPUT_HELP_TEXT.hasBorrowings} />
            </span>
            <input
              type="checkbox"
              checked={inputs.hasBorrowings}
              onChange={(e) => setInputs({ ...inputs, hasBorrowings: e.target.checked })}
              className="w-5 h-5 accent-emerald-500"
            />
          </label>
          <label className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border ${inputs.isDPIITRecognized ? 'bg-emerald-50 border-emerald-200' : 'bg-zinc-50 border-zinc-100 hover:bg-zinc-100'}`}>
            <span className="text-sm font-medium text-zinc-700 flex items-center gap-1">
              DPIIT Recognized?
              <InfoTooltip text={INPUT_HELP_TEXT.isDPIITRecognized} />
            </span>
            <input
              type="checkbox"
              checked={inputs.isDPIITRecognized}
              onChange={(e) => setInputs({ ...inputs, isDPIITRecognized: e.target.checked })}
              className="w-5 h-5 accent-emerald-500"
            />
          </label>
          <label className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border ${inputs.interstateSales ? 'bg-emerald-50 border-emerald-200' : 'bg-zinc-50 border-zinc-100 hover:bg-zinc-100'}`}>
            <span className="text-sm font-medium text-zinc-700 flex items-center gap-1">
              Interstate Sales?
              <InfoTooltip text={INPUT_HELP_TEXT.interstateSales} />
            </span>
            <input
              type="checkbox"
              checked={inputs.interstateSales}
              onChange={(e) => setInputs({ ...inputs, interstateSales: e.target.checked })}
              className="w-5 h-5 accent-emerald-500"
            />
          </label>
          <label className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border ${inputs.isEcommerce ? 'bg-emerald-50 border-emerald-200' : 'bg-zinc-50 border-zinc-100 hover:bg-zinc-100'}`}>
            <span className="text-sm font-medium text-zinc-700 flex items-center gap-1">
              E-commerce Seller?
              <InfoTooltip text={INPUT_HELP_TEXT.isEcommerce} />
            </span>
            <input
              type="checkbox"
              checked={inputs.isEcommerce}
              onChange={(e) => setInputs({ ...inputs, isEcommerce: e.target.checked })}
              className="w-5 h-5 accent-emerald-500"
            />
          </label>
          <label className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border ${inputs.hasContractLabor ? 'bg-emerald-50 border-emerald-200' : 'bg-zinc-50 border-zinc-100 hover:bg-zinc-100'}`}>
            <span className="text-sm font-medium text-zinc-700 flex items-center gap-1">
              Contract Labor?
              <InfoTooltip text={INPUT_HELP_TEXT.hasContractLabor} />
            </span>
            <input
              type="checkbox"
              checked={inputs.hasContractLabor}
              onChange={(e) => setInputs({ ...inputs, hasContractLabor: e.target.checked })}
              className="w-5 h-5 accent-emerald-500"
            />
          </label>
          <label className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border ${inputs.hasForeignLoans ? 'bg-emerald-50 border-emerald-200' : 'bg-zinc-50 border-zinc-100 hover:bg-zinc-100'}`}>
            <span className="text-sm font-medium text-zinc-700 flex items-center gap-1">
              Foreign Loans (ECB)?
              <InfoTooltip text={INPUT_HELP_TEXT.hasForeignLoans} />
            </span>
            <input
              type="checkbox"
              checked={inputs.hasForeignLoans}
              onChange={(e) => setInputs({ ...inputs, hasForeignLoans: e.target.checked })}
              className="w-5 h-5 accent-emerald-500"
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Entity Type */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-1">
            {inputs.isIncorporated ? 'Entity Type' : 'Desired Entity Type'}
            <InfoTooltip text={INPUT_HELP_TEXT.entityType} />
          </label>
          <select
            value={inputs.entityType}
            onChange={(e) => setInputs({ ...inputs, entityType: e.target.value as EntityType })}
            className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium"
          >
            <option value="Pvt Ltd">Pvt Ltd (Private Limited)</option>
            <option value="LLP">LLP (Limited Liability Partnership)</option>
            <option value="OPC">OPC (One Person Company)</option>
            <option value="Proprietorship">Proprietorship</option>
            <option value="Partnership">Partnership Firm</option>
          </select>
        </div>

        {/* Base State */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-1">
            Base State
            <InfoTooltip text={INPUT_HELP_TEXT.state} />
          </label>
          <select
            value={inputs.state}
            onChange={(e) => setInputs({ ...inputs, state: e.target.value })}
            className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium"
          >
            {INDIAN_STATES.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        {/* Turnover */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-1">
            Annual Turnover
            <InfoTooltip text={INPUT_HELP_TEXT.turnover} />
          </label>
          <select
            value={inputs.turnover}
            onChange={(e) => setInputs({ ...inputs, turnover: e.target.value as TurnoverBracket })}
            className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium"
          >
            <option value="Pre-revenue">Pre-revenue</option>
            <option value="< ₹20L">&lt; ₹20L</option>
            <option value="₹20L - ₹40L">₹20L - ₹40L</option>
            <option value="₹40L - ₹5Cr">₹40L - ₹5Cr</option>
            <option value="₹5Cr - ₹100Cr">₹5Cr - ₹100Cr</option>
            <option value="> ₹100Cr">&gt; ₹100Cr</option>
          </select>
        </div>

        {/* Business Model */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-1">
            Business Model
            <InfoTooltip text={INPUT_HELP_TEXT.businessModel} />
          </label>
          <select
            value={inputs.businessModel}
            onChange={(e) => setInputs({ ...inputs, businessModel: e.target.value as any })}
            className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium"
          >
            <option value="Product">Product (Goods)</option>
            <option value="Service">Service</option>
            <option value="Both">Both (Product & Service)</option>
          </select>
        </div>

        {/* Entity Age */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-1">
            Entity Age
            <InfoTooltip text={INPUT_HELP_TEXT.entityAge} />
          </label>
          <select
            value={inputs.entityAge}
            onChange={(e) => setInputs({ ...inputs, entityAge: e.target.value as any })}
            className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium"
          >
            <option value="< 1 year">&lt; 1 year</option>
            <option value="1-3 years">1-3 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="> 5 years">&gt; 5 years</option>
          </select>
        </div>

        {/* Headcount */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-1">
            Total Headcount
            <InfoTooltip text={INPUT_HELP_TEXT.headcount} />
          </label>
          <input
            type="number"
            min="0"
            placeholder="0"
            value={inputs.headcount || ''}
            onChange={(e) => setInputs({ ...inputs, headcount: parseInt(e.target.value) || 0 })}
            className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium"
          />
        </div>

        {/* Paid-Up Capital */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-1">
            Paid-Up Capital (₹)
            <InfoTooltip text={INPUT_HELP_TEXT.paidUpCapital} />
          </label>
          <input
            type="number"
            min="0"
            placeholder="100000"
            value={inputs.paidUpCapital || ''}
            onChange={(e) => setInputs({ ...inputs, paidUpCapital: parseInt(e.target.value) || 0 })}
            className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium"
          />
        </div>

        {/* Industry Type */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-1">
            Industry Sector
            <InfoTooltip text={INPUT_HELP_TEXT.industry} />
          </label>
          <select
            value={inputs.industry}
            onChange={(e) => {
              const newIndustry = e.target.value;
              setInputs({ 
                ...inputs, 
                industry: newIndustry, 
                subIndustry: (INDUSTRIES as any)[newIndustry][0] 
              });
            }}
            className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium"
          >
            {Object.keys(INDUSTRIES).map((ind) => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>

        {/* Sub-Industry */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-1">
            Sub-Industry / NIC
            <InfoTooltip text={INPUT_HELP_TEXT.subIndustry} />
          </label>
          <select
            value={inputs.subIndustry}
            onChange={(e) => setInputs({ ...inputs, subIndustry: e.target.value })}
            className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium"
          >
            {(INDUSTRIES as any)[inputs.industry].map((sub: string) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2 group"
      >
        {inputs.isIncorporated ? 'Generate Compliance Roadmap' : 'Get Setup Guide & Roadmap'}
        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
    </div>
  );
};
