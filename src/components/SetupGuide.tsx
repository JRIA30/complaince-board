import React from 'react';
import { EntitySetupGuide } from '../types';
import { CheckCircle2, Clock, IndianRupee, Info, TrendingUp, TrendingDown } from 'lucide-react';

interface SetupGuideProps {
  guide: EntitySetupGuide;
}

export const SetupGuide: React.FC<SetupGuideProps> = ({ guide }) => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">{guide.entityType} Setup Roadmap</h2>
            <p className="text-zinc-500">Step-by-step guide to incorporating your business in India.</p>
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
            <h3 className="flex items-center gap-2 font-bold text-emerald-900 mb-4">
              <TrendingUp size={18} /> Advantages
            </h3>
            <ul className="space-y-3">
              {guide.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-emerald-800">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
            <h3 className="flex items-center gap-2 font-bold text-red-900 mb-4">
              <TrendingDown size={18} /> Considerations
            </h3>
            <ul className="space-y-3">
              {guide.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-red-800">
                  <Info size={16} className="mt-0.5 shrink-0" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-zinc-900 px-2">Incorporation Steps</h3>
          <div className="relative space-y-8 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-100">
            {guide.steps.map((step, i) => (
              <div key={i} className="relative pl-14">
                <div className="absolute left-0 top-0 w-12 h-12 bg-white border-2 border-zinc-200 rounded-xl flex items-center justify-center font-bold text-zinc-400 z-10">
                  {i + 1}
                </div>
                <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-100 hover:border-emerald-200 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h4 className="font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors">{step.title}</h4>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        <Clock size={12} /> {step.timeline}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
                        <IndianRupee size={12} /> {step.cost}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
