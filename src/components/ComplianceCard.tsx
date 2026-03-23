import React from 'react';
import { Compliance } from '../types';
import { AlertCircle, Clock, Globe, HelpCircle, ShieldAlert, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ComplianceCardProps {
  compliance: Compliance;
}

export const ComplianceCard: React.FC<ComplianceCardProps> = ({ compliance }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const urgencyColors = {
    Red: 'border-red-500 bg-red-50 text-red-700',
    Yellow: 'border-amber-500 bg-amber-50 text-amber-700',
    Green: 'border-emerald-500 bg-emerald-50 text-emerald-700',
    Incentive: 'border-indigo-500 bg-indigo-50 text-indigo-700',
    Conditional: 'border-zinc-400 bg-zinc-50 text-zinc-700',
  };

  const urgencyIcons = {
    Red: <ShieldAlert size={18} />,
    Yellow: <Clock size={18} />,
    Green: <AlertCircle size={18} />,
    Incentive: <ExternalLink size={18} />,
    Conditional: <HelpCircle size={18} />,
  };

  return (
    <div className={`border-l-4 rounded-r-xl bg-white shadow-sm overflow-hidden transition-all ${urgencyColors[compliance.urgency]}`}>
      <div 
        className="p-4 flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-lg bg-white/50">
            {urgencyIcons[compliance.urgency]}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">{compliance.category}</p>
              <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-tighter ${compliance.isMandatory ? 'bg-zinc-900 text-white' : 'bg-indigo-600 text-white'}`}>
                {compliance.isMandatory ? 'Mandatory' : 'Optional'}
              </span>
            </div>
            <h3 className="font-bold text-zinc-900">{compliance.name}</h3>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-white/80 border border-black/5">
            {compliance.urgency === 'Red' ? 'IMMEDIATE' : compliance.urgency === 'Yellow' ? 'UPCOMING' : compliance.urgency === 'Green' ? 'ROUTINE' : compliance.urgency === 'Conditional' ? 'EVENT' : 'GROWTH'}
          </span>
          {isExpanded ? <ChevronUp size={20} className="text-zinc-400" /> : <ChevronDown size={20} className="text-zinc-400" />}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-black/5"
          >
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-50/50">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="mt-1 text-zinc-400"><HelpCircle size={16} /></div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">What</h4>
                    <p className="text-sm text-zinc-700 leading-relaxed">{compliance.what}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 text-zinc-400"><Clock size={16} /></div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">When</h4>
                    <p className="text-sm text-zinc-700 leading-relaxed">{compliance.when}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 text-zinc-400"><Globe size={16} /></div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Where</h4>
                    <a 
                      href={compliance.whereUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 underline underline-offset-4"
                    >
                      {compliance.where} <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="mt-1 text-zinc-400"><AlertCircle size={16} /></div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">How</h4>
                    <p className="text-sm text-zinc-700 leading-relaxed">{compliance.how}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 text-red-400"><ShieldAlert size={16} /></div>
                  <div>
                    <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Penalty / Risk</h4>
                    <p className="text-sm text-red-700 font-medium leading-relaxed">{compliance.penalty}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
