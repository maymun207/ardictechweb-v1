import { motion } from 'framer-motion'
import { useState } from 'react'

const Page4 = () => {
  const [isHoveringLeft, setIsHoveringLeft] = useState(false)
  const [isHoveringRight, setIsHoveringRight] = useState(false)
  const [isHoveringImage, setIsHoveringImage] = useState(false)

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center overflow-hidden relative" style={{ backgroundColor: '#05050B' }}>
      {/* Cinematic Background Layer */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[900px] h-[900px] bg-cyan-950/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-purple-950/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
      </div>

      <main className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-12 py-20 w-full">
        {/* Logo - Top Left */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 left-8 lg:top-12 lg:left-12 z-20"
        >
          <div 
            className="text-xl lg:text-2xl font-bold tracking-tight bg-clip-text text-transparent"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #8A2BE2, #00FFFF)',
              letterSpacing: '-0.02em'
            }}
          >
            ARDICTECH
          </div>
        </motion.div>

        {/* Main Title - Slides down from top */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-6 mt-20 lg:mt-12"
          style={{ 
            color: '#FFFFFF',
            letterSpacing: '-0.04em',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          Your Path to Ensō, at Your Pace
        </motion.h1>

        {/* Divider Line with fade at edges */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-[2px] mx-auto mb-12 max-w-4xl relative"
          style={{ transformOrigin: 'center' }}
        >
          <div 
            className="h-full w-full"
            style={{
              background: 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.3) 20%, rgba(255, 255, 255, 0.3) 80%, transparent 100%)'
            }}
          />
        </motion.div>

        {/* Three-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 items-start">
          
          {/* Left Column: For an Existing Stack */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="relative flex flex-col"
            onMouseEnter={() => setIsHoveringLeft(true)}
            onMouseLeave={() => setIsHoveringLeft(false)}
          >
            <motion.div 
              className="rounded-[32px] p-8 backdrop-blur-md cursor-pointer overflow-hidden relative"
              style={{
                background: isHoveringLeft 
                  ? 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(30, 58, 138, 1) 100%)' 
                  : 'rgba(255, 255, 255, 0.1)',
                border: isHoveringLeft 
                  ? '1px solid rgba(59, 130, 246, 0.3)' 
                  : '1px solid rgba(255, 255, 255, 0.1)',
                fontFamily: 'Inter, system-ui, sans-serif',
                height: 'calc(100vh - 60vh)',
                minHeight: '300px',
                maxHeight: '300px'
              }}
              animate={{
                boxShadow: isHoveringLeft 
                  ? '0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 0 1px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3)'
                  : '0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 0 1px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)'
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Always visible content */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  For an Existing Stack
                </h2>
                <p className="text-lg text-white/90 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  We connect and enhance, don't replace. Our platforms are open by design.
                </p>
              </div>
              
              {/* Content that appears on hover */}
              <motion.div
                className="absolute inset-0 p-8 flex flex-col justify-center"
                style={{
                  background: isHoveringLeft 
                    ? 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(30, 58, 138, 1) 100%)' 
                    : 'transparent'
                }}
                animate={{
                  opacity: isHoveringLeft ? 1 : 0,
                  pointerEvents: isHoveringLeft ? 'auto' : 'none'
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.h3 
                  className="text-sm font-bold uppercase tracking-wider mb-4 bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: 'linear-gradient(to right, #3b82f6, #60a5fa)',
                    fontFamily: 'Inter, system-ui, sans-serif'
                  }}
                >
                  SEAMLESS INTEGRATION
                </motion.h3>
                
                <ul className="space-y-3 mb-6">
                  {[
                    "Connect via read-only APIs",
                    "Ingest 'Dark Data' to a Data Lake",
                    "Deploy the CWF - 'Truth Layer'"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#3b82f6' }} />
                      <span className="text-white/90" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-sm text-white/60 italic" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Ideal for: companies looking to augment current systems or unlock stalled projects
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Middle Column: Platform Diagram - Fades in slowly with delay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Ensō Circle Glow Effect */}
            <div 
              className="absolute inset-0 rounded-full blur-[60px] -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(138, 43, 226, 0.3) 0%, rgba(0, 255, 255, 0.25) 50%, transparent 70%)',
                transform: 'scale(1.1)'
              }}
            />
            
            {/* Platform Diagram Image */}
            <motion.div 
              className="relative z-10 p-4 animate-pulse-slow cursor-pointer"
              onMouseEnter={() => setIsHoveringImage(true)}
              onMouseLeave={() => setIsHoveringImage(false)}
            >
              <motion.img 
                src="/platform-layers.png" 
                alt="Unified Intelligence Platform" 
                className="h-auto object-contain drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]" 
                style={{ width: '130%' }}
                animate={{
                  scale: isHoveringImage ? 2.816 : 1.173,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Right Column: For a Clean State */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="relative flex flex-col"
            onMouseEnter={() => setIsHoveringRight(true)}
            onMouseLeave={() => setIsHoveringRight(false)}
          >
            <motion.div 
              className="rounded-[32px] p-8 backdrop-blur-md cursor-pointer overflow-hidden relative"
              style={{
                background: isHoveringRight 
                  ? 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(30, 58, 138, 1) 100%)' 
                  : 'rgba(255, 255, 255, 0.1)',
                border: isHoveringRight 
                  ? '1px solid rgba(59, 130, 246, 0.3)' 
                  : '1px solid rgba(255, 255, 255, 0.1)',
                fontFamily: 'Inter, system-ui, sans-serif',
                height: 'calc(100vh - 60vh)',
                minHeight: '300px',
                maxHeight: '300px'
              }}
              animate={{
                boxShadow: isHoveringRight
                  ? '0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 0 1px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3)'
                  : '0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 0 1px rgba(217, 70, 239, 0.3), 0 0 20px rgba(217, 70, 239, 0.1)'
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Always visible content */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  For a Clean State
                </h2>
                <p className="text-lg text-white/90 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  A full-stack 4-layer deployment from scratch. Go from zero to full visibility.
                </p>
              </div>
              
              {/* Content that appears on hover */}
              <motion.div
                className="absolute inset-0 p-8 flex flex-col justify-center"
                style={{
                  background: isHoveringRight 
                    ? 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(30, 58, 138, 1) 100%)' 
                    : 'transparent'
                }}
                animate={{
                  opacity: isHoveringRight ? 1 : 0,
                  pointerEvents: isHoveringRight ? 'auto' : 'none'
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.h3 
                  className="text-sm font-bold uppercase tracking-wider mb-4 bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: 'linear-gradient(to right, #3b82f6, #60a5fa)',
                    fontFamily: 'Inter, system-ui, sans-serif'
                  }}
                >
                  RAPID DEPLOYMENT
                </motion.h3>
                
                <ul className="space-y-3 mb-6">
                  {[
                    "IoT-Ignite sensors and gateways",
                    "Full ArMES implementation",
                    "Immediate Visibility (weeks, not years)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#3b82f6' }} />
                      <span className="text-white/90" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-sm text-white/60 italic" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Ideal for: companies starting or re-platforming their digital journey.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Row: OUR APPROACH - Staggered after cards are visible */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mt-16"
        >
          <motion.h2 
            className="text-2xl lg:text-3xl font-bold uppercase mb-8 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #3b82f6, #60a5fa)',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          >
            OUR APPROACH :
          </motion.h2>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Act as the 'Intelligence Wrapper'",
              "Pull data from legacy systems via APIs",
              "Enrich it with AI",
              "Deliver it via conversational Interface"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + (index * 0.15), ease: "easeOut" }}
                className="flex items-start gap-3 text-left"
              >
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#3b82f6' }} />
                <span className="text-white/90" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </main>
    </div>
  )
}

export default Page4
