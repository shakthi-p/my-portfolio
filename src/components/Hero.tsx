import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Github, Terminal, Play, CheckCircle2, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sfx } from '../utils/sound';

interface HeroProps {
  onOpenResume: () => void;
  onOpenConnect: () => void;
}

const CODE_SNIPPET = `# developer.py
class SoftwareDeveloper:
    def __init__(self):
        self.name = "Shakthi P"
        self.location = "Bengaluru, India"
        self.degree = "MCA (CGPA 9.01)"
        self.languages = ["Java", "Python"]
        self.focus = [
            "Software Development",
            "Automation QA",
            "Product Engineering",
            "AI/ML Systems"
        ]
        self.ready_for_roles = True

    def build_solution(self, problem):
        return f"Clean, tested code addressing {problem}"

shakthi = SoftwareDeveloper()
status = shakthi.build_solution("real-world challenges")
print(f"Status: {status} | Ready: {shakthi.ready_for_roles}")`;

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenConnect }) => {
  const [typedCode, setTypedCode] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Typewriter effect for code block
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedCode(CODE_SNIPPET.slice(0, index));
      index += 3;
      if (index > CODE_SNIPPET.length) {
        clearInterval(interval);
      }
    }, 18);
    return () => clearInterval(interval);
  }, []);

  const handleRunCode = () => {
    sfx.playLaser();
    setIsRunning(true);
    setOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      setOutput('>>> Status: Clean, tested code addressing real-world challenges | Ready: True\n>>> [Process completed with exit code 0]');
      sfx.playSuccess();
    }, 550);
  };

  const handleCopyCode = () => {
    sfx.playPop();
    navigator.clipboard.writeText(CODE_SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative pt-8 pb-16 lg:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>SOFTWARE DEVELOPER · AUTOMATION QA · PRODUCT ENGINEER · BENGALURU, INDIA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-slate-100 leading-[1.08] text-balance">
              Turning ideas into working{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 drop-shadow-[0_0_35px_rgba(95,227,255,0.4)]">
                software.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
              I'm <strong className="text-slate-200 font-semibold">Shakthi</strong> — an MCA graduate exploring
              Java, Python, backend development, AI/ML, Automation QA, and Product Engineering.
              I enjoy solving problems and building applications that have a practical purpose.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={() => sfx.playClick(900)}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-blue-600 text-white text-xs font-mono font-semibold tracking-wider transition-all shadow-[0_0_20px_rgba(61,123,255,0.4)] hover:shadow-[0_0_25px_rgba(95,227,255,0.6)] flex items-center gap-2 group cursor-pointer"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => {
                  sfx.playLaser();
                  onOpenResume();
                }}
                className="px-5 py-2.5 rounded-lg border border-purple-500/40 bg-[#12151e]/80 hover:bg-purple-950/40 text-purple-200 text-xs font-mono font-semibold tracking-wider hover:border-purple-400 shadow-[0_0_15px_-4px_rgba(154,134,232,0.3)] transition-all flex items-center gap-2"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>VIEW RESUME</span>
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sfx.playPop()}
                className="px-4 py-2.5 rounded-lg border border-[#262c3a] bg-[#12151e]/60 hover:bg-[#1a1e2b] text-slate-300 hover:text-white text-xs font-mono tracking-wider transition-colors flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Sandbox Stage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl border border-purple-500/30 bg-[#10131d]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_35px_-5px_rgba(154,134,232,0.25)] overflow-hidden group">
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#161a26] border-b border-[#222736]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">developer.py</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    title="Copy code snippet"
                    className="p-1 rounded text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={handleRunCode}
                    disabled={isRunning}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono transition-all"
                  >
                    <Play className="w-3 h-3 fill-cyan-400" />
                    <span>{isRunning ? 'Running...' : 'Run'}</span>
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-[12px] sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300 max-h-[360px]">
                <pre className="whitespace-pre font-mono">
                  <code>{typedCode}</code>
                  <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />
                </pre>

                {/* Simulated Run Output Drawer */}
                {output && (
                  <div className="mt-4 pt-3 border-t border-purple-500/30 text-xs font-mono text-emerald-300 bg-emerald-950/20 p-2.5 rounded-lg border border-emerald-500/20">
                    <pre className="whitespace-pre-wrap">{output}</pre>
                  </div>
                )}
              </div>

              {/* Floating Status Badges */}
              <div className="p-3 bg-[#0d1017] border-t border-[#222736] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>status: 200 OK</span>
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                  <span>open to: Development · Automation QA · Product Eng</span>
                </div>
              </div>
            </div>

            {/* Orbiting Tech Floating Chips */}
            <div className="hidden sm:block">
              <span className="absolute -top-3 -left-4 px-3 py-1 rounded-full border border-purple-500/40 bg-[#12151e]/90 text-purple-300 font-mono text-xs font-medium shadow-[0_0_15px_rgba(154,134,232,0.3)] animate-float">
                JAVA
              </span>
              <span className="absolute -top-2 -right-4 px-3 py-1 rounded-full border border-cyan-500/40 bg-[#12151e]/90 text-cyan-300 font-mono text-xs font-medium shadow-[0_0_15px_rgba(95,227,255,0.3)] animate-float" style={{ animationDelay: '1.5s' }}>
                PYTHON
              </span>
              <span className="absolute -bottom-3 -right-2 px-3 py-1 rounded-full border border-purple-500/40 bg-[#12151e]/90 text-purple-300 font-mono text-xs font-medium shadow-[0_0_15px_rgba(154,134,232,0.3)] animate-float" style={{ animationDelay: '2.5s' }}>
                AUTOMATION QA
              </span>
              <span className="absolute -bottom-3 -left-3 px-3 py-1 rounded-full border border-cyan-500/40 bg-[#12151e]/90 text-cyan-300 font-mono text-xs font-medium shadow-[0_0_15px_rgba(95,227,255,0.3)] animate-float" style={{ animationDelay: '3.5s' }}>
                PRODUCT ENGR
              </span>
            </div>
          </div>
        </div>

        {/* 3-Item Quantitative Impact Strip */}
        <div className="mt-14 pt-8 border-t border-[#222736] grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-[#222736] bg-[#12151e]/60 hover:border-purple-500/40 transition-colors">
            <span className="text-xs font-mono text-slate-400 block mb-1">EDUCATION</span>
            <div className="text-lg font-bold font-display text-slate-100">MCA · CGPA 9.01</div>
            <p className="text-xs text-slate-400 mt-1">Nitte Meenakshi Inst. of Tech</p>
          </div>

          <div className="p-4 rounded-xl border border-[#222736] bg-[#12151e]/60 hover:border-cyan-500/40 transition-colors">
            <span className="text-xs font-mono text-slate-400 block mb-1">INTERNSHIPS</span>
            <div className="text-lg font-bold font-display text-slate-100">QA &amp; Business Analyst</div>
            <p className="text-xs text-slate-400 mt-1">Entomo &amp; Digital INNK</p>
          </div>

          <div className="p-4 rounded-xl border border-[#222736] bg-[#12151e]/60 hover:border-cyan-500/40 transition-colors">
            <span className="text-xs font-mono text-slate-400 block mb-1">LOCATION &amp; STATUS</span>
            <div className="text-lg font-bold font-display text-slate-100">Bengaluru, India</div>
            <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Ready for Immediate Joining</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
