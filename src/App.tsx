import React from 'react';
import { UserInputs, Compliance, EntitySetupGuide } from './types';
import { COMPLIANCE_MASTER, ENTITY_SETUP_GUIDES } from './constants';
import { ComplianceForm } from './components/ComplianceForm';
import { ComplianceCard } from './components/ComplianceCard';
import { SetupGuide } from './components/SetupGuide';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ArrowLeft, Download, Share2, Calculator, Rocket, FileText, ShieldAlert } from 'lucide-react';

export default function App() {
  const [results, setResults] = React.useState<Compliance[] | null>(null);
  const [inputs, setInputs] = React.useState<UserInputs | null>(null);
  const [setupGuide, setSetupGuide] = React.useState<EntitySetupGuide | null>(null);

  const handleFormSubmit = (userInputs: UserInputs) => {
    const triggered = COMPLIANCE_MASTER.filter(c => c.trigger(userInputs));
    setInputs(userInputs);
    setResults(triggered);
    
    if (!userInputs.isIncorporated) {
      setSetupGuide(ENTITY_SETUP_GUIDES[userInputs.entityType]);
    } else {
      setSetupGuide(null);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setResults(null);
    setInputs(null);
    setSetupGuide(null);
  };

  const redAlerts = results?.filter(r => r.urgency === 'Red') || [];
  const yellowAlerts = results?.filter(r => r.urgency === 'Yellow') || [];
  const greenAlerts = results?.filter(r => r.urgency === 'Green') || [];
  const incentiveAlerts = results?.filter(r => r.urgency === 'Incentive') || [];
  const conditionalAlerts = results?.filter(r => r.urgency === 'Conditional') || [];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              <ShieldCheck size={20} />
            </div>
            <span className="font-bold tracking-tight text-lg">JRI.ai <span className="text-zinc-400 font-medium">Founder Compliance OS</span></span>
          </div>
          {results && (
            <button 
              onClick={handleReset}
              className="text-sm font-bold text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors px-4 py-2 rounded-xl hover:bg-zinc-100"
            >
              <ArrowLeft size={16} /> New Audit
            </button>
          )}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {!results ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-6">
                  <Rocket size={12} /> Expert Compliance Engine
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
                  Your Startup's <br />
                  <span className="text-emerald-600">Compliance Safety Net.</span>
                </h1>
                <p className="text-zinc-500 text-lg max-w-xl mx-auto">
                  Instant, bespoke roadmap for Indian founders. From incorporation to annual filings, we've mapped it all.
                </p>
              </div>
              <ComplianceForm onSubmit={handleFormSubmit} />
              
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm space-y-3">
                  <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center mx-auto text-emerald-600">
                    <Calculator size={24} />
                  </div>
                  <h3 className="font-bold">Deep Logic</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">Cross-referenced against MCA, Tax, Labor, and FEMA regulations.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm space-y-3">
                  <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center mx-auto text-emerald-600">
                    <ShieldAlert size={24} />
                  </div>
                  <h3 className="font-bold">Risk Audit</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">Identify heavy penalties and legal risks before they hit your desk.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm space-y-3">
                  <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center mx-auto text-emerald-600">
                    <FileText size={24} />
                  </div>
                  <h3 className="font-bold">Setup Guides</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">Not incorporated yet? Get a step-by-step guide for your entity type.</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-12"
            >
              {/* Results Summary */}
              <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Report Generated</span>
                    <span className="text-zinc-300">•</span>
                    <span className="text-xs text-zinc-400">{new Date().toLocaleDateString()}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-1">Compliance Strategy Report</h2>
                  <p className="text-zinc-500 text-sm">
                    Entity: <span className="font-bold text-zinc-900">{inputs?.entityType}</span> 
                    <span className="mx-2 text-zinc-300">|</span>
                    State: <span className="font-bold text-zinc-900">{inputs?.state}</span>
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="px-5 py-2.5 bg-zinc-100 hover:bg-zinc-200 rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
                    <Download size={18} /> Export
                  </button>
                  <button className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-emerald-100">
                    <Share2 size={18} /> Share
                  </button>
                </div>
              </div>

              {/* Setup Guide if not incorporated */}
              {setupGuide && (
                <motion.section
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <SetupGuide guide={setupGuide} />
                </motion.section>
              )}

              {/* Urgency Sections */}
              <div className="space-y-16">
                {/* Red Alerts */}
                {redAlerts.length > 0 && (
                  <section className="space-y-6">
                    <div className="flex items-center justify-between px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-8 bg-red-500 rounded-full"></div>
                        <h3 className="text-xl font-bold text-red-600">Critical: Immediate Action Required</h3>
                      </div>
                      <span className="text-xs font-bold text-red-400 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                        {redAlerts.length} Triggers
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {redAlerts.map(c => <ComplianceCard key={c.id} compliance={c} inputs={inputs!} />)}
                    </div>
                  </section>
                )}

                {/* Yellow Alerts */}
                {yellowAlerts.length > 0 && (
                  <section className="space-y-6">
                    <div className="flex items-center justify-between px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                        <h3 className="text-xl font-bold text-amber-600">Upcoming & Ongoing Compliance</h3>
                      </div>
                      <span className="text-xs font-bold text-amber-400 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                        {yellowAlerts.length} Triggers
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {yellowAlerts.map(c => <ComplianceCard key={c.id} compliance={c} inputs={inputs!} />)}
                    </div>
                  </section>
                )}

                {/* Green Zone */}
                {greenAlerts.length > 0 && (
                  <section className="space-y-6">
                    <div className="flex items-center justify-between px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
                        <h3 className="text-xl font-bold text-emerald-600">Green Zone: Annual Routines</h3>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                        {greenAlerts.length} Triggers
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {greenAlerts.map(c => <ComplianceCard key={c.id} compliance={c} inputs={inputs!} />)}
                    </div>
                  </section>
                )}

                {/* Conditional Requirements */}
                {conditionalAlerts.length > 0 && (
                  <section className="space-y-6">
                    <div className="flex items-center justify-between px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-8 bg-zinc-400 rounded-full"></div>
                        <h3 className="text-xl font-bold text-zinc-600">Event-Based / Conditional</h3>
                      </div>
                      <span className="text-xs font-bold text-zinc-400 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">
                        {conditionalAlerts.length} Items
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {conditionalAlerts.map(c => <ComplianceCard key={c.id} compliance={c} inputs={inputs!} />)}
                    </div>
                  </section>
                )}

                {/* Growth & Incentives */}
                {incentiveAlerts.length > 0 && (
                  <section className="space-y-6">
                    <div className="flex items-center justify-between px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-8 bg-indigo-500 rounded-full"></div>
                        <h3 className="text-xl font-bold text-indigo-600">Growth & Incentives (Optional)</h3>
                      </div>
                      <span className="text-xs font-bold text-indigo-400 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                        {incentiveAlerts.length} Opportunities
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {incentiveAlerts.map(c => <ComplianceCard key={c.id} compliance={c} inputs={inputs!} />)}
                    </div>
                  </section>
                )}
              </div>

              {/* Expert Note */}
              <div className="mt-20 p-8 bg-zinc-900 rounded-3xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
                  <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shrink-0 shadow-xl shadow-emerald-500/20">
                    <ShieldCheck size={32} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Expert Note for Founders</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
                      Compliance is not a one-time event; it's a competitive advantage. Startups that maintain clean books and timely filings are 3x more likely to pass due diligence during funding rounds. This roadmap is your first step toward building a resilient, investor-ready business.
                    </p>
                    <div className="pt-4 flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-[10px] font-bold">
                            {String.fromCharCode(64 + i)}
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-zinc-500 font-medium">Trusted by 500+ Indian Founders</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-center pb-12">
                <p className="text-[10px] text-zinc-400 leading-relaxed max-w-2xl mx-auto uppercase tracking-widest font-bold">
                  Disclaimer: This tool provides a preliminary roadmap based on current Indian laws. Regulations evolve. Always consult with a qualified CA/CS before making legal decisions.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white">
              <ShieldCheck size={14} />
            </div>
            <span className="font-bold tracking-tight text-sm">JRI.ai</span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-400 font-medium">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Support</a>
          </div>
          <p className="text-xs text-zinc-400">© 2026 JRI.ai. Built for the Indian Startup Ecosystem.</p>
        </div>
      </footer>
    </div>
  );
}
