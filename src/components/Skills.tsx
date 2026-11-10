import React, { useState } from 'react';
import { SKILL_CATEGORIES, SKILLS_LIST } from '../data/portfolioData';
import { sfx } from '../utils/sound';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS_LIST
      : SKILLS_LIST.filter((s) => s.category === activeCategory);

  const handleCategoryChange = (catId: string) => {
    sfx.playClick(900);
    setActiveCategory(catId);
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-mono text-xs text-purple-400 tracking-widest uppercase mb-2">
            04 / TECH STACK
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-100">
            Technical Skills -{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 glow-text-purple">
              CORE EXPERTISE!
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Languages, backend frameworks, testing toolkits, and machine learning models.
          </p>
        </div>

        {/* Interactive Filter Tabs Matching Video */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-purple-600 text-white font-semibold shadow-[0_0_20px_rgba(154,134,232,0.6)] border border-purple-400 scale-105'
                    : 'bg-[#12151e]/80 text-slate-400 hover:text-slate-200 border border-[#222736] hover:border-purple-500/40'
                }`}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-purple-500/20 bg-[#12151e]/80 hover:bg-[#161a26] hover:border-cyan-400/50 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_-5px_rgba(95,227,255,0.25)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300">
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
