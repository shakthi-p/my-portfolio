import React from 'react';
import { Home, User, Briefcase, Code, Cpu, Award, Mail } from 'lucide-react';
import { sfx } from '../utils/sound';

interface MobileBottomNavProps {
  activeSection: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeSection }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Exp', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'profiles', label: 'Profiles', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleTabClick = (id: string) => {
    sfx.playClick(950);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Mobile Navigation Dock"
      className="lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 max-w-[96vw] w-auto"
    >
      <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-[#0e111a]/90 backdrop-blur-xl border border-purple-500/35 shadow-[0_4px_30px_rgba(0,0,0,0.6),0_0_20px_-3px_rgba(154,134,232,0.35)]">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-col items-center justify-center px-2.5 py-1.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-b from-purple-600 to-purple-800 text-white shadow-[0_0_15px_rgba(154,134,232,0.6)] font-semibold scale-105'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span className="text-[10px] font-mono leading-none tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
