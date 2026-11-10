import React from 'react';
import { Sun, Moon, Volume2, VolumeX, FileText } from 'lucide-react';
import { sfx } from '../utils/sound';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  soundEnabled,
  onToggleSound,
  onOpenResume,
  activeSection,
}) => {
  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#experience', label: 'EXPERIENCE' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#contact', label: 'CONTACT' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0b0d13]/85 dark:bg-[#0b0d13]/85 border-b border-[#222736] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Brand Zone */}
        <a
          href="#home"
          onClick={() => sfx.playClick(900)}
          className="flex items-center gap-2 group whitespace-nowrap shrink-0"
        >
          <span className="font-display font-bold text-base tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors">
            SHAKTHI P
          </span>
        </a>

        {/* Clean nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider text-slate-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => sfx.playClick(1000)}
                className={`transition-colors py-1 relative whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-cyan-300 font-semibold'
                    : 'hover:text-slate-200'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Zone */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Availability pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              sfx.playPop();
            }}
            title={soundEnabled ? 'Mute synthesized sound effects' : 'Enable synthesized sound effects'}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#222736] bg-[#12151e]/80 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors"
            aria-label="Toggle synthesized sound effects"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              sfx.playClick(850);
              onToggleTheme();
            }}
            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#222736] bg-[#12151e]/80 text-slate-300 hover:text-purple-300 hover:border-purple-500/50 transition-colors"
            aria-label="Toggle light or dark theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-purple-400" />}
          </button>

          {/* Resume CTA */}
          <button
            onClick={() => {
              sfx.playLaser();
              onOpenResume();
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-purple-500/40 bg-purple-950/30 hover:bg-purple-900/50 text-purple-200 text-xs font-mono font-medium shadow-[0_0_15px_-4px_rgba(154,134,232,0.4)] hover:shadow-[0_0_20px_rgba(154,134,232,0.6)] transition-all whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>RESUME</span>
          </button>
        </div>
      </div>
    </header>
  );
};
