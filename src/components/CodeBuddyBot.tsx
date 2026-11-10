import React, { useState, useEffect, useRef } from 'react';
import { sfx } from '../utils/sound';

interface CodeBuddyBotProps {
  activeSection: string;
}

const SECTION_MESSAGES: Record<string, string> = {
  home: "Hi! I'm Shakthi's code buddy. Move your cursor, I'm watching 👀",
  about: 'MCA Graduate, CGPA 9.01. Curious by nature!',
  experience: 'QA at Entomo, BA at Digital INNK.',
  projects: 'Isolation Forest & Stock Sentiment Analysis!',
  skills: 'Java, Python, Postman, JMeter, Playwright… always learning.',
  profiles: 'Connect with Shakthi on LinkedIn, GitHub, or Email.',
  contact: "Say hi, Shakthi's inbox is open!",
};

const QUOTES = [
  'Beep boop! 200 OK ✅',
  'Java + Python + Automation QA = 🚀',
  'git commit -m "hire Shakthi"',
  'No bugs here. Probably.',
  '100% test coverage mindset 🎯',
  'Product engineering with purpose!',
];

export const CodeBuddyBot: React.FC<CodeBuddyBotProps> = ({ activeSection }) => {
  const [message, setMessage] = useState<string>(SECTION_MESSAGES.home);
  const [showMessage, setShowMessage] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const botRef = useRef<HTMLDivElement | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Update speech bubble when section changes
  useEffect(() => {
    const text = SECTION_MESSAGES[activeSection] || SECTION_MESSAGES.home;
    setMessage(text);
    setShowMessage(true);

    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      setShowMessage(false);
    }, 4200);

    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [activeSection]);

  // Eye pupil tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!botRef.current) return;
      const rect = botRef.current.getBoundingClientRect();
      const botCenterX = rect.left + rect.width / 2;
      const botCenterY = rect.top + rect.height * 0.4;

      const dx = e.clientX - botCenterX;
      const dy = e.clientY - botCenterY;
      const dist = Math.hypot(dx, dy) || 1;
      const maxDistance = 3.5;
      const scale = Math.min(maxDistance, dist / 40);

      setPupilOffset({
        x: (dx / dist) * scale,
        y: (dy / dist) * scale,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = () => {
    sfx.playLaser();
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 650);

    const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setMessage(randomQuote);
    setShowMessage(true);

    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  };

  return (
    <div
      ref={botRef}
      className="fixed right-4 sm:right-6 bottom-20 lg:bottom-6 z-30 flex flex-col items-end select-none pointer-events-auto"
    >
      {/* Speech Bubble */}
      <div
        className={`mb-2 max-w-[210px] sm:max-w-[240px] p-3 rounded-2xl rounded-br-sm border border-cyan-400/60 bg-[#12151e]/95 backdrop-blur-md text-[11px] font-mono leading-tight text-slate-100 shadow-[0_0_20px_rgba(95,227,255,0.3)] transition-all duration-300 transform ${
          showMessage
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
        }`}
      >
        <span className="text-cyan-400 font-bold block mb-0.5">Shakthi's Bot:</span>
        {message}
      </div>

      {/* SVG Interactive Bot */}
      <button
        onClick={handleClick}
        title="Click me for tips and easter eggs!"
        aria-label="Interactive companion robot"
        className={`w-14 h-16 sm:w-16 sm:h-20 cursor-pointer transition-transform filter drop-shadow-[0_8px_20px_rgba(61,123,255,0.4)] ${
          isJumping ? '-translate-y-8 rotate-[-6deg]' : 'hover:scale-105 animate-float'
        }`}
      >
        <svg viewBox="0 0 100 110" className="w-full h-full overflow-visible">
          {/* Antenna */}
          <line x1="50" y1="8" x2="50" y2="22" stroke="#5fe3ff" strokeWidth="2.5" />
          <circle cx="50" cy="7" r="4.5" fill="#5fe3ff" className="animate-pulse" />

          {/* Robot Head */}
          <rect
            x="20"
            y="22"
            width="60"
            height="46"
            rx="14"
            fill="#141824"
            stroke="#5fe3ff"
            strokeWidth="2.5"
          />

          {/* Left Eye */}
          <g>
            <circle cx="38" cy="43" r="9" fill="#e8ecf4" />
            <circle
              cx={38 + pupilOffset.x}
              cy={43 + pupilOffset.y}
              r="4.2"
              fill="#0d0f14"
              className="transition-transform duration-75"
            />
          </g>

          {/* Right Eye */}
          <g>
            <circle cx="62" cy="43" r="9" fill="#e8ecf4" />
            <circle
              cx={62 + pupilOffset.x}
              cy={43 + pupilOffset.y}
              r="4.2"
              fill="#0d0f14"
              className="transition-transform duration-75"
            />
          </g>

          {/* Smile */}
          <path
            d="M41 58 Q50 66 59 58"
            fill="none"
            stroke="#5fe3ff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Body */}
          <rect
            x="30"
            y="72"
            width="40"
            height="28"
            rx="8"
            fill="#141824"
            stroke="#9a86e8"
            strokeWidth="2.5"
          />
          <text
            x="50"
            y="91"
            textAnchor="middle"
            fontSize="11"
            fontFamily="monospace"
            fill="#5fe3ff"
            fontWeight="bold"
          >
            &lt;/&gt;
          </text>

          {/* Left Arm */}
          <line
            x1="30"
            y1="80"
            x2="16"
            y2="92"
            stroke="#9a86e8"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Right Waving Arm */}
          <line
            x1="70"
            y1="80"
            x2="88"
            y2="66"
            stroke="#9a86e8"
            strokeWidth="5"
            strokeLinecap="round"
            className="origin-[70px_80px] animate-pulse"
          />
        </svg>
      </button>
    </div>
  );
};
