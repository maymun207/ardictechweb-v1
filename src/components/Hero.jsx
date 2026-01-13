import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const translations = {
  en: {
    nav: {
      solutions: 'SOLUTIONS',
      methodology: 'METHODOLOGY',
      technology: 'TECHNOLOGY',
      resources: 'RESOURCES',
      login: 'LOGIN'
    },
    hero: {
      label: 'DIGITAL TRANSFORMATION FOR MANUFACTURING',
      headline: 'Where should',
      headlineHighlight: 'digital deliver',
      headlineHighlight2: 'value first?',
      body: "Respect your legacy. Reinvent your factory. We identify addressable losses using your existing data before proposing architecture.",
      cta: 'Request Executive Assessment',
      constraintSelection: 'CONSTRAINT SELECTION',
      liveDiagnostic: 'LIVE DIAGNOSTIC BENCHMARKING'
    },
    constraints: {
      'eliminate-hidden-losses': {
        title: 'Eliminate Hidden Losses',
        category: 'PERFORMANCE OPTIMIZATION',
        content: "Expose the 'Hidden Factory' by surfacing micro-stops and speed losses that paper logs miss. Typically recovers $8M-$12M in previously dark data loss.",
        metricLabel: 'TARGET THROUGHPUT'
      },
      'reduce-quality-drift': {
        title: 'Reduce Quality Drift',
        category: 'YIELD MAXIMIZATION',
        content: "Identify and eliminate quality variations before they impact yield. Real-time monitoring surfaces defects that traditional QC processes miss, typically improving yield by 15-25%.",
        metricLabel: 'YIELD IMPROVEMENT'
      },
      'optimize-energy-bom': {
        title: 'Optimize Energy BOM',
        category: 'RESOURCE INTENSITY',
        content: "Reduce energy consumption and material waste through intelligent resource allocation. Typically achieves 20-30% reduction in energy costs and 10-15% reduction in material waste.",
        metricLabel: 'ENERGY REDUCTION'
      },
      'sync-lead-times': {
        title: 'Sync Lead Times',
        category: 'OPERATIONAL AGILITY',
        content: "Synchronize production schedules with demand signals to eliminate bottlenecks and reduce lead times. Typically reduces lead times by 25-35% while improving on-time delivery.",
        metricLabel: 'LEAD TIME REDUCTION'
      }
    }
  },
  tr: {
    nav: {
      solutions: 'ÇÖZÜMLER',
      methodology: 'METODOLOJİ',
      technology: 'TEKNOLOJİ',
      resources: 'KAYNAKLAR',
      login: 'GİRİŞ'
    },
    hero: {
      label: 'ÜRETİM İÇİN DİJİTAL DÖNÜŞÜM',
      headline: 'Dijital nerede',
      headlineHighlight: 'önce değer',
      headlineHighlight2: 'sağlamalı?',
      body: "Mirasınıza saygı gösterin. Fabrikanızı yeniden icat edin. Mimari önermeden önce mevcut verilerinizi kullanarak adreslenebilir kayıpları belirliyoruz.",
      cta: 'Yönetici Değerlendirmesi Talep Et',
      constraintSelection: 'KISIT SEÇİMİ',
      liveDiagnostic: 'CANLI TANILAMA KARŞILAŞTIRMASI'
    },
    constraints: {
      'eliminate-hidden-losses': {
        title: 'Gizli Kayıpları Ortadan Kaldır',
        category: 'PERFORMANS OPTİMİZASYONU',
        content: "Kağıt logların kaçırdığı mikro-duruşları ve hız kayıplarını ortaya çıkararak 'Gizli Fabrika'yı açığa çıkarın. Genellikle daha önce karanlık veri kaybında 8-12 milyon dolar geri kazanır.",
        metricLabel: 'HEDEF VERİMLİLİK'
      },
      'reduce-quality-drift': {
        title: 'Kalite Sapmasını Azalt',
        category: 'VERİM MAKSİMİZASYONU',
        content: "Verimi etkilemeden önce kalite varyasyonlarını belirleyin ve ortadan kaldırın. Gerçek zamanlı izleme, geleneksel kalite kontrol süreçlerinin kaçırdığı kusurları ortaya çıkarır, genellikle verimi %15-25 artırır.",
        metricLabel: 'VERİM İYİLEŞTİRMESİ'
      },
      'optimize-energy-bom': {
        title: 'Enerji BOM Optimize Et',
        category: 'KAYNAK YOĞUNLUĞU',
        content: "Akıllı kaynak tahsisi ile enerji tüketimini ve malzeme israfını azaltın. Genellikle enerji maliyetlerinde %20-30 ve malzeme israfında %10-15 azalma sağlar.",
        metricLabel: 'ENERJİ AZALTMA'
      },
      'sync-lead-times': {
        title: 'Teslimat Sürelerini Senkronize Et',
        category: 'OPERASYONEL ÇEVİKLİK',
        content: "Darboğazları ortadan kaldırmak ve teslimat sürelerini azaltmak için üretim programlarını talep sinyalleriyle senkronize edin. Genellikle teslimat sürelerini %25-35 azaltırken zamanında teslimatı iyileştirir.",
        metricLabel: 'TESLİMAT SÜRESİ AZALTMA'
      }
    }
  }
}

// Metrics are the same across all languages
const constraintMetrics = {
  'eliminate-hidden-losses': '30%',
  'reduce-quality-drift': '22%',
  'optimize-energy-bom': '28%',
  'sync-lead-times': '32%'
}

const constraintIds = [
  { id: 'eliminate-hidden-losses', icon: 'pulse' },
  { id: 'reduce-quality-drift', icon: 'target' },
  { id: 'optimize-energy-bom', icon: 'bolt' },
  { id: 'sync-lead-times', icon: 'clock' }
]

const IconComponent = ({ type, className, useGradient = false }) => {
  const iconClass = `w-6 h-6 ${className || ''}`
  const gradientId = `gradient-${type}`
  
  const svgProps = useGradient ? {
    stroke: `url(#${gradientId})`,
    fill: 'none'
  } : {
    stroke: 'currentColor',
    fill: 'none'
  }
  
  const gradientDef = useGradient ? (
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9D4EDD" />
        <stop offset="100%" stopColor="#00FFFF" />
      </linearGradient>
    </defs>
  ) : null
  
  switch (type) {
    case 'pulse':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" {...svgProps} strokeWidth="2">
          {gradientDef}
          <path d="M3 12h4l2-8 2 16 2-8h4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'target':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" {...svgProps} strokeWidth="2">
          {gradientDef}
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      )
    case 'bolt':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" {...svgProps} strokeWidth="2">
          {gradientDef}
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      )
    case 'clock':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" {...svgProps} strokeWidth="2">
          {gradientDef}
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    default:
      return null
  }
}

export default function Hero() {
  const [language, setLanguage] = useState('en')
  const [activeConstraint, setActiveConstraint] = useState('eliminate-hidden-losses')
  const t = translations[language]
  const currentData = {
    ...t.constraints[activeConstraint],
    metric: constraintMetrics[activeConstraint]
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="w-full px-8 lg:px-16 py-6 flex items-center justify-between border-b border-white/10">
        {/* Left: Logo */}
        <div className="flex items-center" style={{ gap: '2px' }}>
          <img 
            src="/ardictech-logo.png" 
            alt="ARDICTECH Logo" 
            className="h-14 w-14 object-contain flex-shrink-0"
            style={{ 
              display: 'block',
              width: '55px',
              height: '55px',
              minWidth: '55px',
              marginRight: '2px'
            }}
            onError={(e) => {
              console.error('Logo failed to load:', e.target.src);
            }}
          />
          <div>
            <div className="text-xl font-bold tracking-tight">ARDICTECH</div>
            <div className="text-xs text-gray-400 font-light">FOUNDATIONAL INTELLIGENCE</div>
          </div>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            t.nav.solutions,
            t.nav.methodology,
            t.nav.technology,
            t.nav.resources
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium uppercase tracking-wider hover:bg-magenta-cyan hover:bg-clip-text hover:text-transparent transition-all"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: Language & Login */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setLanguage('en')}
              className={`text-sm font-medium uppercase tracking-wider transition-all ${
                language === 'en' 
                  ? 'bg-gradient-to-r from-deep-magenta to-cyan-400 bg-clip-text text-transparent' 
                  : 'hover:bg-magenta-cyan hover:bg-clip-text hover:text-transparent'
              }`}
            >
              EN
            </button>
            <span className="text-gray-500">|</span>
            <button 
              onClick={() => setLanguage('tr')}
              className={`text-sm font-medium uppercase tracking-wider transition-all ${
                language === 'tr' 
                  ? 'bg-gradient-to-r from-deep-magenta to-cyan-400 bg-clip-text text-transparent' 
                  : 'hover:bg-magenta-cyan hover:bg-clip-text hover:text-transparent'
              }`}
            >
              TR
            </button>
          </div>
          <button className="px-6 py-2 border border-white/30 rounded-sm text-sm font-medium uppercase tracking-wider hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all">
            {t.nav.login}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-8 lg:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-deep-magenta via-purple-500 to-cyan-400"></div>
              <span className="text-xs uppercase tracking-widest text-gray-400">
                {t.hero.label}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter">
              {t.hero.headline}
              <br />
              <span className="bg-gradient-to-r from-deep-magenta via-purple-500 via-cyan-400 to-cyan-300 bg-clip-text text-transparent" style={{ display: 'block', marginTop: '2px' }}>
                {t.hero.headlineHighlight}
              </span>
              <span className="bg-gradient-to-r from-deep-magenta via-purple-500 via-cyan-400 to-cyan-300 bg-clip-text text-transparent" style={{ display: 'block', marginTop: '2px' }}>
                {t.hero.headlineHighlight2}
              </span>
            </h1>

            {/* Body Text */}
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
              {t.hero.body}
            </p>

            {/* Live Diagnostic Benchmarking Card */}
            <motion.div
              key={activeConstraint}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg p-6 lg:p-8 relative overflow-hidden border border-white/10"
              style={{ 
                background: 'transparent'
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-deep-magenta to-cyan-400 rounded-l-lg"></div>
              <div className="relative z-10">
                <div className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                  {t.hero.liveDiagnostic}
                </div>
                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeConstraint}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="text-base lg:text-lg text-white flex-1 leading-relaxed"
                    >
                      {currentData.content}
                    </motion.p>
                  </AnimatePresence>
                  <div className="flex flex-col items-end">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${activeConstraint}-metric`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="text-5xl lg:text-6xl font-bold text-white"
                      >
                        {currentData.metric}
                      </motion.div>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${activeConstraint}-label`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs uppercase tracking-widest text-gray-400 mt-1"
                      >
                        {currentData.metricLabel}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border-2 border-cyan-400/50 font-bold text-lg uppercase tracking-wider rounded-sm group relative hover:border-cyan-400 transition-colors"
              style={{
                background: 'transparent'
              }}
            >
              <span className="flex items-center gap-2 bg-gradient-to-r from-deep-magenta via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                {t.hero.cta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </motion.button>
          </div>

          {/* Right Column: Constraint Selection */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <h2 className="text-xs uppercase tracking-widest text-gray-400">
                  {t.hero.constraintSelection}
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              {constraintIds.map((constraint, index) => {
                const isActive = activeConstraint === constraint.id
                const constraintData = t.constraints[constraint.id]
                return (
                  <motion.div
                    key={constraint.id}
                    onMouseEnter={() => setActiveConstraint(constraint.id)}
                    whileHover={{ x: 4 }}
                    className={`
                      glass rounded-lg p-5 cursor-pointer transition-all duration-300 relative
                      ${isActive 
                        ? 'bg-transparent' 
                        : 'border border-transparent hover:border-white/10 bg-transparent'
                      }
                    `}
                  >
                    {isActive && (
                      <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-deep-magenta/50 to-cyan-400/50 opacity-50 -z-10"></div>
                    )}
                    <div className="flex items-start gap-4 relative z-10">
                      <div className={`
                        flex-shrink-0 mt-1
                        ${isActive ? '' : 'text-gray-400'}
                      `}>
                        <IconComponent type={constraint.icon} useGradient={isActive} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`
                          font-bold text-base mb-1
                          ${isActive ? 'text-white' : 'text-gray-300'}
                        `}>
                          {constraintData.title}
                        </h3>
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                          {constraintData.category}
                        </p>
                      </div>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <defs>
                              <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#9D4EDD" />
                                <stop offset="100%" stopColor="#00FFFF" />
                              </linearGradient>
                            </defs>
                            <path stroke="url(#arrow-gradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
