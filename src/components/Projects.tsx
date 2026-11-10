import React, { useState } from 'react';
import { ExternalLink, Github, Code2, ShieldAlert, TrendingUp, Layers, CheckCircle2, X } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { sfx } from '../utils/sound';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeVizMode, setActiveVizMode] = useState<'actual' | 'predicted' | 'both'>('both');

  const handleOpenModal = (proj: Project) => {
    sfx.playPop();
    setSelectedProject(proj);
  };

  const handleCloseModal = () => {
    sfx.playClick(800);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs text-purple-400 tracking-widest uppercase mb-2">
            03 / SELECTED WORK
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-100">
            Projects Showcase -{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 glow-text-purple">
              WHAT I'VE BUILT!
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Practical applications spanning machine learning anomaly detection, time-series forecasting, and API validation.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {PROJECTS.map((proj, idx) => (
            <article
              key={proj.id}
              className="p-6 sm:p-8 rounded-2xl border border-purple-500/25 bg-[#12151e]/85 backdrop-blur-xl hover:border-purple-400/60 transition-all shadow-[0_15px_40px_rgba(0,0,0,0.4),0_0_20px_-5px_rgba(154,134,232,0.15)] group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Architecture Preview Slot (5 cols) */}
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-xl border border-[#262c3a] bg-[#0c0e15] p-4 overflow-hidden shadow-inner group/viz">
                    {/* Visualizer header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#222736] text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Code2 className="w-3.5 h-3.5" />
                        {proj.type === 'ml'
                          ? 'Architecture: Isolation Forest Flow'
                          : 'NLP Pipeline: CountVectorizer & Naive Bayes'}
                      </span>
                      <span className="text-slate-500">Live SVG Model</span>
                    </div>

                    {/* Dynamic SVG Visualizations */}
                    {proj.type === 'ml' && (
                      <div className="relative">
                        <svg
                          viewBox="0 0 400 240"
                          fill="none"
                          className="w-full h-auto text-slate-400 font-mono text-[10px]"
                        >
                          {/* User Activity Node */}
                          <rect x="10" y="20" width="95" height="44" rx="6" stroke="#3d7bff" strokeWidth="1.5" fill="#141824" />
                          <text x="20" y="46" fill="#8b93a7">User Logs</text>

                          {/* Isolation Forest Node */}
                          <rect x="150" y="20" width="120" height="44" rx="6" stroke="#9a86e8" strokeWidth="1.5" fill="#1b172a" />
                          <text x="162" y="46" fill="#c084fc">Isolation Forest</text>

                          {/* Risk Score Node */}
                          <rect x="310" y="20" width="80" height="44" rx="6" stroke="#5fe3ff" strokeWidth="1.5" fill="#0f242d" />
                          <text x="320" y="46" fill="#5fe3ff">Risk Score</text>

                          {/* Connecting Arrows */}
                          <path d="M105 42h45M270 42h40" stroke="#5fe3ff" strokeWidth="1.5" strokeDasharray="3 3" />

                          {/* Normal Cluster Points */}
                          <g transform="translate(10, 80)">
                            <ellipse cx="110" cy="80" rx="90" ry="45" stroke="#3d7bff" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.4" />
                            <circle cx="60" cy="75" r="4.5" fill="#3d7bff" />
                            <circle cx="85" cy="65" r="4.5" fill="#3d7bff" />
                            <circle cx="110" cy="85" r="4.5" fill="#3d7bff" />
                            <circle cx="135" cy="70" r="4.5" fill="#3d7bff" />
                            <circle cx="95" cy="95" r="4.5" fill="#3d7bff" />
                            <circle cx="145" cy="90" r="4.5" fill="#3d7bff" />
                            <text x="60" y="115" fill="#3d7bff" fontSize="9">Normal Activity Cluster</text>

                            {/* Anomaly Outliers */}
                            <circle cx="280" cy="30" r="6" fill="#ff4d6d" className="animate-ping" style={{ transformOrigin: '280px 30px' }} />
                            <circle cx="280" cy="30" r="5" fill="#ff4d6d" />
                            <text x="245" y="55" fill="#ff4d6d" fontSize="9" fontWeight="bold">Outlier Detected!</text>

                            <circle cx="330" cy="50" r="5" fill="#ff4d6d" />
                            <text x="300" y="70" fill="#ff6b81" fontSize="9">High Risk Event</text>
                          </g>

                          {/* Footer indicator */}
                          <rect x="10" y="210" width="380" height="22" rx="4" fill="#141824" stroke="#262c3a" />
                          <text x="24" y="225" fill="#8b93a7" fontSize="9">
                            JWT Auth · bcrypt Hashing · Role-Based Permissions · Audit Logs
                          </text>
                        </svg>
                      </div>
                    )}

                    {proj.type === 'nlp' && (
                      <div className="relative">
                        <svg
                          viewBox="0 0 400 240"
                          fill="none"
                          className="w-full h-auto text-slate-400 font-mono text-[10px]"
                        >
                          {/* Live Tweet Input Box */}
                          <rect x="15" y="15" width="370" height="42" rx="8" fill="#141824" stroke="#9a86e8" strokeWidth="1.2" />
                          <circle cx="32" cy="36" r="8" fill="#3b82f6" />
                          <path d="M29 36l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                          <text x="48" y="32" fill="#5fe3ff" fontSize="9" fontWeight="bold">INPUT TWEET STREAM</text>
                          <text x="48" y="47" fill="#cbd5e1" fontSize="9">"Tech sector rallies as quarterly earnings beat estimates $AAPL $NVDA"</text>

                          {/* Arrow down to vectorizer */}
                          <path d="M200 57 v20" stroke="#9a86e8" strokeWidth="1.5" strokeDasharray="3 2" />
                          <polygon points="196,75 204,75 200,81" fill="#9a86e8" />

                          {/* Mid Pipeline: Vectorizer & Naive Bayes */}
                          <g transform="translate(15, 83)">
                            <rect x="0" y="0" width="175" height="52" rx="6" fill="#121622" stroke="#3b82f6" strokeWidth="1" />
                            <text x="12" y="20" fill="#60a5fa" fontSize="9" fontWeight="bold">CountVectorizer</text>
                            <text x="12" y="35" fill="#94a3b8" fontSize="8">Text Cleaning · Stopwords · N-Grams</text>
                            <text x="12" y="46" fill="#38bdf8" fontSize="8">Tokenized Feature Matrix</text>

                            {/* Arrow right */}
                            <path d="M175 26 h20" stroke="#5fe3ff" strokeWidth="1.5" />
                            <polygon points="193,22 193,30 200,26" fill="#5fe3ff" />

                            <rect x="200" y="0" width="170" height="52" rx="6" fill="#1b172a" stroke="#c084fc" strokeWidth="1" />
                            <text x="212" y="20" fill="#c084fc" fontSize="9" fontWeight="bold">Multinomial Naive Bayes</text>
                            <text x="212" y="35" fill="#94a3b8" fontSize="8">Model serialized via Pickle</text>
                            <text x="212" y="46" fill="#a855f7" fontSize="8">Probabilistic Text Inference</text>
                          </g>

                          {/* Sentiment Classification Result Bar */}
                          <g transform="translate(15, 148)">
                            <rect x="0" y="0" width="370" height="54" rx="8" fill="#10141f" stroke="#262c3a" />
                            <text x="14" y="20" fill="#94a3b8" fontSize="9" fontWeight="bold">CLASSIFICATION BREAKDOWN</text>
                            <text x="250" y="20" fill="#34d399" fontSize="9" fontWeight="bold">PREDICTED: POSITIVE</text>

                            {/* Sentiment Bars */}
                            <rect x="14" y="28" width="180" height="8" rx="3" fill="#10b981" />
                            <rect x="198" y="28" width="80" height="8" rx="3" fill="#64748b" />
                            <rect x="282" y="28" width="74" height="8" rx="3" fill="#ef4444" opacity="0.6" />

                            <text x="14" y="47" fill="#34d399" fontSize="8">Positive 72%</text>
                            <text x="198" y="47" fill="#94a3b8" fontSize="8">Neutral 18%</text>
                            <text x="282" y="47" fill="#f87171" fontSize="8">Negative 10%</text>
                          </g>

                          {/* Footer indicator */}
                          <rect x="15" y="210" width="370" height="22" rx="4" fill="#141824" stroke="#262c3a" />
                          <text x="25" y="225" fill="#5fe3ff" fontSize="9">
                            Flask Web App · Bootstrap UI · Pickle Pipeline · Real-Time Prediction
                          </text>
                        </svg>
                      </div>
                    )}

                    {proj.type === 'qa' && (
                      <div className="relative">
                        <svg
                          viewBox="0 0 400 240"
                          fill="none"
                          className="w-full h-auto text-slate-400 font-mono text-[10px]"
                        >
                          <rect x="20" y="20" width="85" height="40" rx="4" stroke="#3d7bff" fill="#141824" />
                          <text x="30" y="44" fill="#5fe3ff">HTTP Req</text>

                          <rect x="145" y="20" width="110" height="40" rx="4" stroke="#9a86e8" fill="#1b172a" />
                          <text x="155" y="44" fill="#c084fc">Schema Assert</text>

                          <rect x="295" y="20" width="85" height="40" rx="4" stroke="#34d399" fill="#0f291e" />
                          <text x="305" y="44" fill="#34d399">200 Status</text>

                          <path d="M105 40h40M255 40h40" stroke="#34d399" strokeWidth="1.5" />

                          {/* Verification checklist in SVG */}
                          <g transform="translate(30, 85)">
                            <rect x="0" y="0" width="340" height="110" rx="6" fill="#121622" stroke="#262c3a" />
                            <text x="18" y="28" fill="#34d399" fontSize="10">✓ Positive &amp; Negative test suites</text>
                            <text x="18" y="52" fill="#34d399" fontSize="10">✓ Boundary &amp; SQL injection payload checks</text>
                            <text x="18" y="76" fill="#34d399" fontSize="10">✓ JIRA defect integration &amp; re-testing</text>
                            <text x="18" y="98" fill="#5fe3ff" fontSize="10">⏱ Reduced smoke run from 45m to 3m</text>
                          </g>
                        </svg>
                      </div>
                    )}

                    {proj.type === 'web' && (
                      <div className="p-4 font-mono text-xs text-slate-400 space-y-2 bg-[#121622] rounded-lg border border-[#222736]">
                        <div className="flex items-center justify-between text-purple-300">
                          <span>UI: React.js SPA</span>
                          <span>API: Flask REST</span>
                        </div>
                        <div className="flex items-center justify-between text-cyan-300">
                          <span>DB: MongoDB BSON</span>
                          <span>Auth: JWT Bearer</span>
                        </div>
                        <p className="text-slate-400 text-[11px] pt-2 border-t border-[#222736]">
                          Interactive CRUD dashboard with user role auditing and instant activity logs.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Description Slot (7 cols) */}
                <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <p className="font-mono text-xs text-purple-400 tracking-wider">
                    {proj.category}
                  </p>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {proj.highlights.slice(0, 3).map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold shrink-0">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-purple-500/30 bg-purple-950/20 text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => handleOpenModal(proj)}
                      className="px-4 py-2 rounded-lg bg-purple-950/50 hover:bg-purple-900/70 border border-purple-500/40 text-purple-200 text-xs font-mono font-medium flex items-center gap-2 shadow-[0_0_15px_-4px_rgba(154,134,232,0.4)] transition-all cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>VIEW DEEP DIVE</span>
                    </button>

                    <a
                      href={proj.githubUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sfx.playPop()}
                      className="px-4 py-2 rounded-lg border border-[#262c3a] bg-[#12151e] hover:border-cyan-500/40 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-2 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GITHUB REPO</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-purple-500/40 bg-[#12151e] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(154,134,232,0.3)]">
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-mono text-xs text-purple-400 block mb-1">
              {selectedProject.category}
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-100 pr-8">
              {selectedProject.title}
            </h3>

            <p className="text-cyan-300 text-xs font-mono mt-2">
              {selectedProject.tagline}
            </p>

            <div className="my-6 space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>{selectedProject.description}</p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Technical Architecture &amp; Key Milestones
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-purple-950/40 border border-purple-500/30 text-purple-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#222736] flex items-center justify-between">
              <a
                href={selectedProject.githubUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono text-xs font-semibold flex items-center gap-2 shadow-[0_0_15px_rgba(154,134,232,0.4)] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>EXPLORE ON GITHUB</span>
              </a>

              <button
                onClick={handleCloseModal}
                className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
