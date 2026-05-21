import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiVideo, FiEdit3, FiCpu, FiTrendingUp, FiCheckCircle, FiChevronRight } from 'react-icons/fi'

const Services = () => {
  const [activeCard, setActiveCard] = useState(null)

  const services = [
    {
      id: 1,
      title: 'TikTok & Reels Short Form',
      description: 'Ultra-retention, high-density short form videos designed to beat the algorithm and capture instant attention.',
      icon: <FiVideo className="text-primary" size={32} />,
      metrics: '300k - 2M Avg Views',
      details: [
        'Advanced script writing with strong hooks',
        'Custom interactive subtitles & graphics',
        'AI Sound effects & audio amplification',
        'Optimized for rapid user engagement',
        'A/B testing for cover frames'
      ],
      cta: 'Scale Shorts Now'
    },
    {
      id: 2,
      title: 'YouTube Long Form Mastery',
      description: 'Engaging, narrative-driven edits designed to maximize watch time, CTR, and long-term channel authority.',
      icon: <FiEdit3 className="text-primary" size={32} />,
      metrics: '85% Completion Rate',
      details: [
        'Strategic retention-mapped script writing',
        'Dynamic B-roll compilation (Human + AI)',
        'Complex sound design & music scoring',
        'Clickable visual thumbnail concepts',
        'SEO-optimized metadata and titles'
      ],
      cta: 'Scale Channel Now'
    },
    {
      id: 3,
      title: 'High-Production Ads & Reels',
      description: 'Commercial-grade, conversion-optimized video commercials merging cinematic human styles with Gen-AI effects.',
      icon: <FiCpu className="text-primary" size={32} />,
      metrics: '12% Avg Conversion Rate',
      details: [
        'Psychology-based sales copywriting scripts',
        'Runway Gen-3 and Sora visual enhancements',
        'Hyper-realistic AI Voiceover styling',
        'High-converting product mockup motion graphics',
        'Vetted hooks for different target demographics'
      ],
      cta: 'Launch Ad Campaign'
    }
  ]

  return (
    <section id="services" className="py-24 bg-dark relative px-6 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-sans text-xs tracking-wider uppercase">
              // Core Capabilities
            </div>
            <h2 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tight">
              High-Impact Video <br />
              <span className="text-primary text-glow">Services.</span>
            </h2>
          </div>
          <p className="font-sans text-white/60 text-lg max-w-md leading-relaxed">
            We use premium AI tools and high-fidelity editing pipelines to transform standard video scripts into high-performance visual masterpieces.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isHovered = activeCard === service.id
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative rounded-3xl p-8 transition-all duration-500 overflow-hidden cursor-pointer ${
                  isHovered 
                    ? 'bg-dark-card border-primary shadow-[0_0_30px_rgba(200,241,53,0.15)] border-2' 
                    : 'bg-dark-surface border-white/5 border'
                }`}
              >
                {/* Neon highlight top line on active */}
                {isHovered && (
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-primary" />
                )}

                {/* Card Top */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-dark/50 border border-white/10">
                    {service.icon}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-[11px] font-sans text-white/80">
                    <FiTrendingUp className="text-primary" />
                    {service.metrics}
                  </div>
                </div>

                {/* Card Title & Desc */}
                <h3 className="font-sans font-bold text-2xl mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-white/60 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Dynamic Features List on Hover */}
                <div className="space-y-3 mb-8">
                  {service.details.slice(0, isHovered ? 5 : 3).map((detail, idx) => (
                    <motion.div 
                      layout
                      key={idx} 
                      className="flex items-start gap-2.5 text-xs text-white/70"
                    >
                      <FiCheckCircle className="text-primary mt-0.5 shrink-0" size={14} />
                      <span>{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Button container with smooth expansion */}
                <motion.div 
                  layout
                  className="pt-4 border-t border-white/5 flex items-center justify-between"
                >
                  <span className="font-sans font-extrabold text-sm uppercase tracking-wide text-primary group-hover:text-white transition-colors duration-300">
                    {service.cta}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isHovered ? 'bg-primary text-dark' : 'bg-white/5 text-white'
                  }`}>
                    <FiChevronRight size={18} />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Services
