import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sfx } from '../utils/sound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sfx.playLaser();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#profiles', label: 'Profiles' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="pt-16 pb-28 lg:pb-16 border-t border-[#222736] bg-[#090b10] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Brand */}
          <div>
            <span className="text-2xl sm:text-3xl font-display font-black tracking-wider text-slate-100">
              SHAKTHI <span className="text-purple-400">P</span>
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
              Innovation at the Intersection of Code and Design!
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => sfx.playClick(900)}
                className="hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              onClick={() => sfx.playPop()}
              className="w-10 h-10 rounded-xl border border-[#222736] bg-[#12151e] flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onClick={() => sfx.playPop()}
              className="w-10 h-10 rounded-xl border border-[#222736] bg-[#12151e] flex items-center justify-center text-slate-400 hover:text-purple-300 hover:border-purple-500/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              onClick={() => sfx.playPop()}
              className="w-10 h-10 rounded-xl border border-[#222736] bg-[#12151e] flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full border border-purple-500/40 bg-purple-950/40 hover:bg-purple-900/60 text-purple-200 flex items-center justify-center shadow-[0_0_20px_rgba(154,134,232,0.4)] hover:shadow-[0_0_30px_rgba(154,134,232,0.7)] transition-all cursor-pointer group"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>

          {/* Copyright line */}
          <div className="pt-4 border-t border-[#1a1f2c] w-full flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
            <span>© 2026 SHAKTHI P · ALL RIGHTS RESERVED</span>
            <span>BUILT WITH CURIOSITY · DESIGNED WITH PURPOSE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
