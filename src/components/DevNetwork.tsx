import React from 'react';
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sfx } from '../utils/sound';

export const DevNetwork: React.FC = () => {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PERSONAL_INFO.email
  )}&su=${encodeURIComponent('Software Developer Opportunity / Inquiry')}`;

  return (
    <section id="profiles" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs text-purple-400 tracking-widest uppercase mb-2">
            06 / PROFILES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-100">
            Web Presence -{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 glow-text-purple">
              DEV NETWORK!
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Explore my engineering activity across developer platforms and communities.
          </p>
        </div>

        {/* Central Glowing Avatar & Handle */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="relative group">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-purple-500 via-cyan-400 to-indigo-600 shadow-[0_0_35px_rgba(154,134,232,0.6)] animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-[#12151e] flex flex-col items-center justify-center border-2 border-[#1e2333] overflow-hidden">
                <span className="text-3xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-purple-400">
                  SP
                </span>
                <span className="text-[10px] font-mono text-purple-300 mt-0.5">DEV</span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="font-mono font-bold text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 tracking-wider">
              {PERSONAL_INFO.handle}
            </span>
            <p className="text-xs font-mono text-slate-500 mt-0.5">
              Software Developer · Automation QA · Product Engineer · Bengaluru
            </p>
          </div>
        </div>

        {/* Profile Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* LinkedIn Card */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playPop()}
            className="p-5 rounded-2xl border border-purple-500/25 bg-[#12151e]/85 hover:border-cyan-400/60 transition-all duration-300 group flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(95,227,255,0.25)] cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-purple-950/60 border border-purple-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 group-hover:border-cyan-400 group-hover:text-cyan-300 transition-colors">
                  CONNECT
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-cyan-300 transition-colors">
                LinkedIn
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Professional journey, recommendations &amp; network
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#222736] flex items-center justify-between text-xs font-mono text-cyan-400">
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playPop()}
            className="p-5 rounded-2xl border border-purple-500/25 bg-[#12151e]/85 hover:border-cyan-400/60 transition-all duration-300 group flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(95,227,255,0.25)] cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-purple-950/60 border border-purple-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 group-hover:border-cyan-400 group-hover:text-cyan-300 transition-colors">
                  COMMIT
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-cyan-300 transition-colors">
                GitHub
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Open source repositories, ML projects &amp; code reviews
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#222736] flex items-center justify-between text-xs font-mono text-cyan-400">
              <span>View Code</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Direct Email Card - Opens Google Mail Directly */}
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playLaser()}
            className="p-5 rounded-2xl border border-purple-500/25 bg-[#12151e]/85 hover:border-purple-400/60 transition-all duration-300 group flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(154,134,232,0.3)] text-left cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 group-hover:border-purple-400 group-hover:text-white transition-colors">
                  REACH OUT
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-purple-300 transition-colors">
                Direct Email
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                {PERSONAL_INFO.email}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#222736] flex items-center justify-between text-xs font-mono text-purple-300">
              <span>Open in Gmail</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        <p className="text-center text-xs font-mono text-slate-500 mt-8">
          You can explore further by clicking on any of the profile cards above!
        </p>
      </div>
    </section>
  );
};
