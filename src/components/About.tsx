import React from 'react';
import { GraduationCap, Award, Compass, ShieldCheck, Cpu, Code2 } from 'lucide-react';
import { EDUCATION, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Quality & Automation QA',
      description:
        'Hands-on QA experience at Entomo performing regression, smoke, JMeter, and Postman API testing, paired with foundational knowledge in Playwright automation and TypeScript.',
    },
    {
      icon: Cpu,
      title: 'Backend Engineering',
      description:
        'Core backend skills in Java and Python: modular RESTful API architecture, OOP principles, relational/document database schemas, and JWT authentication.',
    },
    {
      icon: Code2,
      title: 'Machine Learning & AI',
      description:
        'Understanding of core ML concepts including supervised/unsupervised learning, feature scaling, model evaluation, and practical models like Isolation Forest and PyTorch LSTM.',
    },
    {
      icon: Compass,
      title: 'Product & Systems Engineering',
      description:
        'Business Analyst experience at Digital INNK translating stakeholder requirements into clear user stories, system workflows, and scalable product architecture.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs text-purple-400 tracking-widest uppercase mb-2">
            01 / ABOUT ME
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-100">
            About Me -{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 glow-text-purple">
              BEHIND THE CODE!
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Curious by nature. Developer by choice.
          </p>
        </div>

        {/* Narrative & Highlights Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base bg-[#12151e]/80 p-6 sm:p-8 rounded-2xl border border-[#222736] shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <p>
              I am an MCA graduate from <strong className="text-cyan-300">Nitte Meenakshi Institute of Technology</strong> with a strong academic record (<strong className="text-cyan-300">CGPA 9.01/10</strong>). My journey spans software engineering, quality assurance, and business analysis.
            </p>
            <p>
              Having worked as a <strong>Quality Assurance Intern at Entomo</strong> and a <strong>Business Analyst Intern at Digital INNK</strong>, I build software with a quality-first mindset—designing for reliability, API validation, and edge cases.
            </p>
            <p className="text-slate-200">
              I develop software with Java and Python, focusing on clean backend logic and reliable systems. I am keenly interested in software engineering, AI/ML development, Automation QA, and Product Engineering.
            </p>

            <div className="pt-3 border-t border-[#222736] flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="text-cyan-400 font-semibold">Quick Facts:</span>
              <span>Based in {PERSONAL_INFO.location}</span>
              <span>·</span>
              <span>MCA 2026 Graduate</span>
              <span>·</span>
              <span>Open to Relocation</span>
            </div>
          </div>

          {/* Right Education Panels */}
          <div className="lg:col-span-5 space-y-4">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-2xl border border-purple-500/25 bg-[#12151e]/80 hover:border-purple-400/50 transition-all shadow-[0_0_20px_-5px_rgba(154,134,232,0.15)] group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="font-mono text-xs text-purple-300 px-2.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-3 group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">{edu.institution}</p>

                <div className="mt-3 pt-3 border-t border-[#222736] flex items-center justify-between text-xs">
                  <span className="font-mono font-semibold text-cyan-400 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    {edu.score}
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">Academic Distinction</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-[#222736] bg-[#12151e]/60 hover:bg-[#161a26] hover:border-cyan-500/40 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold font-display text-slate-100 mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
