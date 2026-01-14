import { motion } from 'framer-motion'
import { useState } from 'react'

const Page3 = () => {
  const [isHoveringCircle, setIsHoveringCircle] = useState(false)
  const [isHoveringText, setIsHoveringText] = useState(false)

  // Split headline into words for staggered animation
  const headlineWords = "WE DONT AIM FOR STATIC PERFECTION BUT DYNAMIC PRECISION".split(" ")

  return (
    <div className="min-h-screen text-white flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#05050B' }}>
      {/* Cinematic Background Layer */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
      </div>

      <main className="relative z-10 max-w-[1600px] mx-auto px-12 py-20 w-full">
        {/* Logo - Top Left */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-12 left-12 z-20"
        >
          <div 
            className="text-2xl font-bold tracking-tight bg-clip-text text-transparent"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #8A2BE2, #00FFFF)',
              letterSpacing: '-0.02em'
            }}
          >
            ARDICTECH
          </div>
        </motion.div>

        {/* Split Layout: Ensō Circle on Left, Text on Right */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 min-h-[80vh]">
          
          {/* Left Side: Ensō Circle */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 flex flex-col items-center"
          >
            <div 
              className="relative"
              onMouseEnter={() => setIsHoveringCircle(true)}
              onMouseLeave={() => setIsHoveringCircle(false)}
            >
              {/* Vignette/Glow effect behind the circle - intensifies on hover */}
              <motion.div 
                className="absolute inset-0 rounded-full blur-[80px] -z-10"
                style={{
                  background: 'radial-gradient(circle, rgba(138, 43, 226, 0.25) 0%, rgba(0, 255, 255, 0.2) 50%, transparent 70%)',
                  transform: 'scale(1.2)'
                }}
                animate={{
                  opacity: isHoveringCircle ? 0.8 : 0.5,
                  scale: isHoveringCircle ? 1.4 : 1.2,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              
              {/* Ensō Circle Image */}
              <motion.img
                src="/enso-nobg.png"
                alt="Zen Ensō Circle"
                width={500}
                height={500}
                className="w-[400px] lg:w-[500px] h-auto relative z-10 cursor-pointer"
                initial={{ scale: 0.9, opacity: 0, rotate: 0 }}
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: 1,
                  rotate: 360,
                }}
                transition={{
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: isHoveringCircle ? 30 : 60,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  },
                  opacity: {
                    duration: 1,
                    delay: 0.4,
                    ease: "easeOut"
                  }
                }}
              />
            </div>
            {/* Caption under the circle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-8 text-sm lg:text-base leading-relaxed italic text-center max-w-md"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              Enso is a hand-drawn circle in Japanese Zen art, simple shape with a deep message: presence, clarity, and the idea that everything is connected.
            </motion.p>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 max-w-2xl space-y-8 relative"
          >
            <div className="relative z-10 p-8 space-y-8">
              {/* Main Headline - Staggered by word */}
              <motion.h1
                className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight"
                style={{ 
                  color: '#FFFFFF',
                  letterSpacing: '-0.04em',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}
              >
                {headlineWords.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + (index * 0.05),
                      ease: "easeOut"
                    }}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Sub-Headline: Operational Ensō - with hover glow and shift */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                onMouseEnter={() => setIsHoveringText(true)}
                onMouseLeave={() => setIsHoveringText(false)}
                className="inline-block cursor-pointer"
              >
                <motion.h2 
                  className="text-2xl lg:text-3xl font-semibold tracking-tight"
                  style={{ 
                    color: '#00FFFF',
                    letterSpacing: '-0.02em',
                    fontFamily: 'Inter, system-ui, sans-serif'
                  }}
                  animate={{
                    x: isHoveringText ? 8 : 0,
                    textShadow: isHoveringText 
                      ? '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)' 
                      : '0 0 0px rgba(0, 255, 255, 0)',
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  Operational Ensō
                </motion.h2>
              </motion.div>

              {/* Key Concept */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="pt-4"
              >
                <p 
                  className="text-xl lg:text-2xl font-bold tracking-tight uppercase"
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    letterSpacing: '-0.02em',
                    fontFamily: 'Inter, system-ui, sans-serif'
                  }}
                >
                  COMPLETE AND INCOMPLETE AT THE SAME TIME
                </p>
              </motion.div>

              {/* Body Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="text-lg lg:text-xl leading-relaxed max-w-xl"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}
              >
                Real Transformation is not a one-time project; It is a living circle! A Circle of Continuous 'Becoming'. Alive, Evolving and Always in Motion.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default Page3
