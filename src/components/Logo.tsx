import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showSubtitle = true, className = '' }) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official EletroPRO Circuit + Lightning Icon */}
      <div className={`relative ${iconDimensions[size]} flex items-center justify-center shrink-0`}>
        <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_0_8px_rgba(250,204,21,0.35)]">
          {/* Circular Circuit Background Pattern */}
          <circle cx="50" cy="50" r="42" fill="#090d16" stroke="#facc15" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
          
          {/* Circuit tracks and nodes */}
          <g stroke="#facc15" strokeWidth="1.5" fill="none" opacity="0.75">
            <path d="M 20,40 L 32,40 L 38,30 L 46,30" />
            <circle cx="20" cy="40" r="2" fill="#facc15" />
            <circle cx="46" cy="30" r="2" fill="#facc15" />

            <path d="M 18,58 L 28,58 L 34,68 L 44,68" />
            <circle cx="18" cy="58" r="2" fill="#facc15" />
            <circle cx="44" cy="68" r="2" fill="#facc15" />

            <path d="M 56,25 L 68,25 L 76,35 L 82,35" />
            <circle cx="56" cy="25" r="2" fill="#facc15" />
            <circle cx="82" cy="35" r="2" fill="#facc15" />

            <path d="M 58,75 L 70,75 L 78,65 L 84,65" />
            <circle cx="58" cy="75" r="2" fill="#facc15" />
            <circle cx="84" cy="65" r="2" fill="#facc15" />

            <path d="M 30,50 L 40,50" />
            <path d="M 60,50 L 72,50" />
            <circle cx="30" cy="50" r="1.5" fill="#facc15" />
            <circle cx="72" cy="50" r="1.5" fill="#facc15" />
          </g>

          {/* Sharp High-Voltage Electric Lightning Bolt */}
          <polygon
            points="62,6 30,48 48,48 38,94 72,46 54,46"
            fill="#facc15"
            stroke="#090d16"
            strokeWidth="2.5"
            strokeLinejoin="miter"
            className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          />
        </svg>
      </div>

      {/* Brand Typography matching official logo */}
      <div className="flex flex-col">
        <div className={`font-['Outfit',sans-serif] font-black tracking-tight leading-none flex items-center ${textSizes[size]}`}>
          <span className="text-white font-extrabold tracking-tight">Eletro</span>
          <div className="relative inline-block ml-0.5">
            {/* Swoop accent over PRO */}
            <svg className="absolute -top-1.5 -left-1 w-full h-2 text-yellow-400 overflow-visible" viewBox="0 0 50 10" fill="none">
              <path d="M 0,8 Q 25,-2 50,4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-yellow-400 font-black italic tracking-wide">
              PRO
            </span>
          </div>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">
            <span className="text-yellow-400">Brasília - DF</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">Engenharia Elétrica</span>
          </div>
        )}
      </div>
    </div>
  );
};
