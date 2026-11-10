import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs text-purple-400 tracking-widest uppercase mb-2">
            02 / EXPERIENCE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-100">
            Work Experience -{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 glow-text-purple">
              PROFESSIONAL JOURNEY!
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Real-world internships in software quality assurance and business analysis.
          </p>
        </div>

        {/* Vertical Glowing Timeline */}
        <div className="relative border-l-2 border-purple-500/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0b0d13] border-2 border-purple-400 shadow-[0_0_15px_#c084fc] flex items-center justify-center group-hover:scale-125 transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-2xl border border-purple-500/25 bg-[#12151e]/85 backdrop-blur-xl hover:border-purple-400/60 transition-all shadow-[0_10px_35px_rgba(0,0,0,0.3),0_0_20px_-5px_rgba(154,134,232,0.15)]">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 mb-2">
                      <Briefcase className="w-3 h-3 text-cyan-400" />
                      {exp.company}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-100">
                      {exp.role}{' '}
                      <span className="text-cyan-400 font-medium">@{exp.company}</span>
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end font-mono text-xs text-slate-400 gap-1">
                    <span className="flex items-center gap-1 text-purple-300">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 my-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill chips */}
                <div className="pt-4 border-t border-[#222736] flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400">Core Tools:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-purple-500/20 bg-purple-950/20 text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
