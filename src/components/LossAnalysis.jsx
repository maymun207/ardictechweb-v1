import React, { useState } from 'react';

// Custom SVG Icon Components
const Database = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const Activity = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const AlertTriangle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const TrendingUp = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const ArrowUpRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Info = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const Maximize2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

const LossAnalysis = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const lossData = [
    {
      id: 1,
      title: "DARK DATA LOSS",
      number: "$8M - $12M",
      label: "UNRECOVERED CAPACITY",
      icon: <Database className="w-6 h-6" />,
      insight: "Valuable signals are trapped in legacy silos. We unlock this 'Dark Data' for production truth.",
      accent: "cyan"
    },
    {
      id: 2,
      title: "REACTIVE MAINTENANCE",
      number: "$15M - $25M",
      label: "DOWNTIME DRAIN",
      icon: <Activity className="w-6 h-6" />,
      insight: "Recovering hidden capacity lost to micro-stoppages that traditional systems cannot see.",
      accent: "blue"
    },
    {
      id: 3,
      title: "QUALITY ESCAPES",
      number: "$10M - $18M",
      label: "YIELD VARIANCE",
      icon: <AlertTriangle className="w-6 h-6" />,
      insight: "Eliminating batch variations and quality defects through real-time prescriptive adjustments.",
      accent: "indigo"
    },
    {
      id: 4,
      title: "OEE UPLIFT",
      number: "8% - 12%",
      label: "EFFICIENCY GAIN",
      icon: <TrendingUp className="w-6 h-6" />,
      insight: "Converting operational efficiency directly into margin expansion via waste reduction and energy optimization.",
      accent: "emerald"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-cyan-500/30 overflow-hidden flex flex-col">
      {/* Cinematic Background Layer */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[900px] h-[900px] bg-cyan-950/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-blue-950/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
      </div>

      <main className="relative z-10 flex-1 flex flex-col justify-center max-w-[1500px] mx-auto px-12 py-12 w-full">
        
        {/* Top Section: Power Headline & Dual-Line Aligned Metrics */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-12">
          
          {/* Headline Stack */}
          <div className="space-y-4 pt-12">
            <div className="flex items-center space-x-3 text-[12.65px] font-bold tracking-[0.4em] text-cyan-500 uppercase">
              <div className="w-12 h-[1px] bg-cyan-500" />
              <span>Diagnostic Analysis</span>
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter flex flex-col" style={{ gap: '0.2pt' }}>
              <span className="text-white/20 transition-all duration-700 hover:text-white/40 cursor-default">Unseen Data.</span>
              <span className="text-white/40 transition-all duration-700 hover:text-white/60 cursor-default">Silenced Value.</span>
              <span className="text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] cursor-default">Untapped <br/>Potential.</span>
            </h1>
          </div>

          {/* Right Metrics Block: Two Lines, Dash included on the first line */}
          <div className="w-full lg:w-auto flex flex-col items-end pt-12">
            <div className="text-[12.65px] font-bold tracking-[0.4em] text-cyan-500 uppercase mb-4 text-right">
              Total Addressable Loss
            </div>
            
            <div className="flex flex-col items-end mb-6">
              {/* Line 1: $48M- (White) */}
              <div className="text-[3.528rem] lg:text-[4.41rem] font-black tracking-tighter text-white leading-[0.75] drop-shadow-[0_0_50px_rgba(255,255,255,0.05)]" style={{ marginBottom: '10px' }}>
                $48M-
              </div>
              
              {/* Line 2: $73M (White) with transparent dash for alignment */}
              <div className="text-[3.528rem] lg:text-[4.41rem] font-black tracking-tighter text-white leading-[0.75] drop-shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                $73M<span className="text-transparent">-</span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="flex justify-end gap-6 text-[13.8px] font-semibold tracking-[0.3em] text-gray-400 uppercase">
                <span>9 Months Payback</span>
                <span className="w-1.5 h-1.5 bg-cyan-900 rounded-full self-center" />
                <span>14-22 Months ROI</span>
              </div>
              <div className="text-[13.8px] font-semibold text-gray-400 tracking-[0.2em] uppercase bg-white/5 px-3 py-1 rounded">
                Annual Loss Estimate (Per $500M Revenue)
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Grid Hover Cards: Number First */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {lossData.map((card) => (
            <div 
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative h-[304px] rounded-[32px] overflow-hidden border transition-all duration-500"
              style={{
                background: hoveredCard === card.id 
                  ? 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(30, 58, 138, 1) 100%)'
                  : 'rgba(255, 255, 255, 0.03)',
                borderColor: hoveredCard === card.id 
                  ? 'rgba(59, 130, 246, 0.3)'
                  : 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-start z-20" style={{ paddingTop: '1pt', paddingLeft: '2.5rem', paddingRight: '2.5rem', paddingBottom: '2.5rem' }}>
                <div className={`flex justify-between items-start mb-6 transition-all duration-500 ${hoveredCard === card.id ? 'opacity-0' : 'opacity-100'}`}>
                  <div className={`p-3 rounded-xl bg-black border border-white/10 text-cyan-500 transition-all duration-500 ${hoveredCard === card.id ? 'scale-110 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : ''}`}>
                    {card.icon}
                  </div>
                  <div className={`transition-all duration-500 ${hoveredCard === card.id ? 'rotate-90 opacity-100' : 'opacity-20'}`}>
                    <Maximize2 className="w-3.5 h-3.5 text-gray-500" />
                  </div>
                </div>

                <div className={`transition-all duration-500 transform ${hoveredCard === card.id ? '-translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
                  <div className={`text-[18.56px] font-bold tracking-[0.4em] text-gray-500 uppercase ${card.id === 4 ? 'mb-6' : 'mb-2'}`}>{card.title}</div>
                  <div className="text-4xl font-black tracking-tighter text-white mb-1.5 min-h-[3.5rem]">{card.number}</div>
                  <div className="text-[18.56px] font-bold tracking-[0.2em] text-cyan-500 uppercase opacity-60">{card.label}</div>
                </div>

                <div className={`absolute left-10 right-10 transition-all duration-500 ease-out transform ${hoveredCard === card.id ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 pointer-events-none'}`} style={{ bottom: hoveredCard === card.id ? 'calc(2.5rem * 0.8 + (100% - 2.5rem * 0.8) * 0.2)' : '2.5rem' }}>
                  <p className="text-lg text-gray-200 font-medium leading-relaxed italic">
                    "{card.insight}"
                  </p>
                </div>
              </div>
              <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] transition-opacity duration-700 ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LossAnalysis;
