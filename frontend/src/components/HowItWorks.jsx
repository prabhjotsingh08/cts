import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiFileText, FiCpu, FiTrendingUp, FiCheck } from 'react-icons/fi'
import { FaPhotoVideo } from 'react-icons/fa'

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      phase: 'Phase 01',
      title: 'Deep Scripting & Ideation',
      icon: <FiFileText size={24} />,
      description: 'Our copywriters analyze your audience and niche data, script emotional high-converting hooks, and finalize a standard outline designed to maximize digital viewership retention.',
      color: 'border-primary',
      tech: 'GPT-4o analytics + human viral copywriting formulas'
    },
    {
      phase: 'Phase 02',
      title: 'AI Enhancements & Asset Creation',
      icon: <FiCpu size={24} />,
      description: 'We generate highly customized AI visuals, synthetic graphics, custom AI voiceovers, and storyboard elements using advanced tools like Midjourney v6 and Runway Gen-3.',
      color: 'border-blue-500',
      tech: 'Midjourney v6, ElevenLabs, Runway Gen-3'
    },
    {
      phase: 'Phase 03',
      title: 'Ultra-Sharp Human Editing',
      icon: <FaPhotoVideo size={24} />,
      description: 'Our top-tier video editors assemble all elements, slice the dead air, apply pacing tricks, inject immersive SFX, add custom animation titles, and build absolute flow.',
      color: 'border-purple-500',
      tech: 'Adobe Premiere Pro, After Effects, professional sound designers'
    },
    {
      phase: 'Phase 04',
      title: 'Delivery & Viral Scale',
      icon: <FiTrendingUp size={24} />,
      description: 'We deliver polished, rendered high-definition drafts for your review. Once approved, we provide viral guidelines, title variants, description tags, and metadata to skyrocket reach.',
      color: 'border-primary',
      tech: 'Vetted viral hooks & thumbnail strategy optimization'
    }
  ]

  return (
    <section id="how-it-works" className="py-24 bg-dark relative px-6 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-sans text-xs tracking-wider uppercase">
            // High-Speed Production Pipeline
          </div>
          <h2 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tight">
            How We Make You Go <span className="text-primary text-glow">Viral.</span>
          </h2>
          <p className="font-sans text-white/60 text-lg leading-relaxed max-w-xl">
            A seamless, transparent four-step pipeline fusing cutting-edge artificial intelligence with top-tier professional video engineering.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Big Interactive Steps Selector */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center gap-6 group ${
                    isActive 
                      ? 'bg-dark-card border-primary shadow-[0_0_20px_rgba(200,241,53,0.1)]' 
                      : 'bg-dark-surface border-white/5 hover:border-white/10 hover:bg-dark-surface/65'
                  }`}
                >
                  {/* Step Icon with Glowing border on active */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? 'bg-primary text-dark font-extrabold' : 'bg-white/5 text-white'
                  }`}>
                    {isActive ? <FiCheck size={20} /> : step.icon}
                  </div>

                  <div>
                    <span className="font-sans text-xs text-primary font-bold uppercase tracking-wider block mb-1">
                      {step.phase}
                    </span>
                    <h3 className="font-sans font-bold text-lg text-white group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Column: Visual Detailed Display Card */}
          <div className="lg:col-span-7 h-full">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-dark-card border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden h-full flex flex-col justify-between"
            >
              {/* Massive Phase Watermark */}
              <div className="absolute -top-12 -right-8 font-sans font-extrabold text-[120px] text-white/[0.02] select-none">
                {steps[activeStep].phase}
              </div>

              <div className="space-y-6 z-10">
                <span className="font-sans text-xs uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/30 inline-block">
                  ACTIVE PIPELINE STATUS
                </span>
                
                <h3 className="font-sans font-extrabold text-3xl md:text-4xl text-white">
                  {steps[activeStep].title}
                </h3>
                
                <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10">
                <div>
                  <span className="font-sans text-[10px] uppercase text-white/40 block">
                    Core Technologies & Methodology:
                  </span>
                  <span className="font-sans font-bold text-xs text-primary">
                    {steps[activeStep].tech}
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5 font-sans text-xs text-white/70 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <span>Phase Ready</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default HowItWorks
