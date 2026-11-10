import React, { useState, useEffect } from 'react';
import { Starfield } from './components/Starfield';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { DevNetwork } from './components/DevNetwork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CodeBuddyBot } from './components/CodeBuddyBot';
import { ResumeModal } from './components/ResumeModal';
import { sfx } from './utils/sound';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Sync theme changes with html document tag
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  // Sync sound setting
  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sfx.enabled = next;
  };

  // Section observer for active navbar highlighting
  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'profiles', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b0d13] text-[#e8ecf4] selection:bg-[#9a86e8]/30 selection:text-[#5fe3ff] transition-colors duration-300">
      {/* Dynamic Starry Space Background */}
      <Starfield isLight={!isDark} />

      {/* Cyber Grid & Cosmic Ambient Lighting */}
      <div className="fixed inset-0 cyber-grid opacity-35 pointer-events-none z-0" />
      <div className="fixed inset-0 cosmic-radial pointer-events-none z-0" />

      {/* Top Desktop Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onOpenResume={() => setResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenConnect={() => {
            const contactEl = document.getElementById('contact');
            contactEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <DevNetwork />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Companion Bot */}
      <CodeBuddyBot activeSection={activeSection} />

      {/* Mobile Floating Bottom Navigation Dock */}
      <MobileBottomNav activeSection={activeSection} />

      {/* Resume Viewer Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
