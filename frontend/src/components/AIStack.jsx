import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCpu, FiBarChart2, FiActivity, FiZap } from 'react-icons/fi'

const AIStack = () => {
  const [selectedTech, setSelectedTech] = useState(0)

  const techStack = [
    {
      id: 0,
      symbol: 'Gb',
      name: 'GPT-4o Scripting',
      category: 'NLP & Copywriting',
      rating: '98%',
      latency: '0.8s',
      fidelity: 'High Narrative Flow',
      description: 'Used to analyze audience retention metrics and generate psychologically mapped video scripts, viral hooks, and story outline concepts.',
      metrics: {
        resolution: 'Context Length: 128K',
        inferenceSpeed: '80 tokens/sec',
        creativityScore: '9.8 / 10'
      }
    },
    {
      id: 1,
      symbol: 'Mj',
      name: 'Midjourney v6',
      category: 'Storyboarding',
      rating: '99%',
      latency: '2.5s',
      fidelity: 'Cinematic Photorealism',
      description: 'Generates ultra-realistic custom image B-rolls, background assets, synthetic visual components, and perfect storyboarding matching the script script.',
      metrics: {
        resolution: 'Up to 4K Aspect Ratio Match',
        inferenceSpeed: 'High-Quality GPU Priority',
        creativityScore: '9.9 / 10'
      }
    },
    {
      id: 2,
      symbol: 'Rw',
      name: 'Runway Gen-3',
      category: 'Generative Video',
      rating: '96%',
      latency: '4.2s',
      fidelity: 'Realistic Fluid Motion',
      description: 'Generates mind-bending, cinematic-grade synthetic video B-rolls, fluid digital transitions, and visual background components.',
      metrics: {
        resolution: '1080p HD, 60 FPS Fluidity',
        inferenceSpeed: 'Cloud GPU Accelerated',
        creativityScore: '9.6 / 10'
      }
    },
    {
      id: 3,
      symbol: 'El',
      name: 'ElevenLabs Studio',
      category: 'Synthetic Audio',
      rating: '97%',
      latency: '0.6s',
      fidelity: 'Natural Voice Modulation',
      description: 'Provides industry-leading, emotionally expressive synthetic voiceovers, perfectly cloned voice patterns, and hyper-crisp audio scripts.',
      metrics: {
        resolution: '44.1 kHz Studio Quality',
        inferenceSpeed: 'Sub-second real-time streaming',
        creativityScore: '9.7 / 10'
      }
    },
    {
      id: 4,
      symbol: 'So',
      name: 'Sora Generative FX',
      category: 'Generative Video',
      rating: '95%',
      latency: '8.0s',
      fidelity: 'World Simulation Physics',
      description: 'Generates complex multi-character scenes, simulated environments, and complex camera movements from text prompts.',
      metrics: {
        resolution: '1080p Cinematic Wide',
        inferenceSpeed: 'Extended Render Queue',
        creativityScore: '9.5 / 10'
      }
    },
    {
      id: 5,
      symbol: 'Af',
      name: 'Adobe Firefly v3',
      category: 'Asset Expansion',
      rating: '94%',
      latency: '1.2s',
      fidelity: 'Commercial Safe Vectors',
      description: 'Handles generative fill, background cleanups, vector generation, and commercial-safe graphics asset resizing with maximum ease.',
      metrics: {
        resolution: 'Vector / Lossless PNG formats',
        inferenceSpeed: 'Integrated Local + Cloud',
        creativityScore: '9.4 / 10'
      }
    }
  ]

  return (
    <section id="ai-stack" className="py-24 bg-dark-surface relative px-6 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-sans text-xs tracking-wider uppercase">
              // Technological Infrastructure
            </div>
            <h2 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tight">
              Our Advanced <span className="text-glow text-primary">AI Stack.</span>
            </h2>
          </div>
          <p className="font-sans text-white/60 text-lg max-w-md leading-relaxed">
            We merge standard human editing workflows with industry-leading artificial intelligence to hit massive throughput speeds.
          </p>
        </div>

        {/* Dynamic Periodical Block Layout & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Interactive Periodic Table Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {techStack.map((tech) => {
              const isSelected = selectedTech === tech.id
              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTech(tech.id)}
                  className={`aspect-square p-6 rounded-3xl border flex flex-col justify-between text-left transition-all duration-300 relative group overflow-hidden ${
                    isSelected 
                      ? 'bg-dark-card border-primary shadow-[0_0_25px_rgba(200,241,53,0.15)]' 
                      : 'bg-dark border-white/5 hover:border-white/10 hover:bg-dark-card/50'
                  }`}
                >
                  {/* Subtle Grid Design Lines */}
                  <div className="absolute inset-0 border-r border-b border-white/[0.02] pointer-events-none" />

                  {/* Header Row */}
                  <div className="flex justify-between items-center w-full">
                    <span className="font-sans text-xs text-white/40 uppercase">
                      0{tech.id + 1}
                    </span>
                    <span className="text-[10px] font-sans text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                      {tech.rating}
                    </span>
                  </div>

                  {/* Center Symbol */}
                  <div className="my-2">
                    <span className={`font-sans font-extrabold text-4xl md:text-5xl transition-colors duration-300 ${
                      isSelected ? 'text-primary text-glow' : 'text-white group-hover:text-primary'
                    }`}>
                      {tech.symbol}
                    </span>
                  </div>

                  {/* Bottom Tech Name & Category */}
                  <div>
                    <h3 className="font-sans font-bold text-sm text-white group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                    <span className="font-sans text-[9px] text-white/50 block mt-0.5 uppercase tracking-wider">
                      {tech.category}
                    </span>
                  </div>

                </button>
              )
            })}
          </div>

          {/* Right: Technical Details Panel */}
          <div className="lg:col-span-5 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTech}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-dark-card border border-white/10 rounded-3xl p-8 relative flex flex-col justify-between h-full min-h-[380px] shadow-xl overflow-hidden"
              >
                {/* Neon highlight left line */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-primary" />

                <div className="space-y-6">
                  {/* Category Title */}
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-xs text-primary uppercase tracking-widest block font-bold">
                      // {techStack[selectedTech].category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-sans text-white/70 bg-white/5 px-2 py-1 rounded">
                      <FiZap className="text-primary" /> Latency: {techStack[selectedTech].latency}
                    </div>
                  </div>

                  {/* Main Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-sans font-extrabold text-3xl text-white">
                      {techStack[selectedTech].name}
                    </h3>
                    <p className="font-sans text-white/70 text-sm leading-relaxed">
                      {techStack[selectedTech].description}
                    </p>
                  </div>

                  {/* Key Metrics */}
                  <div className="pt-6 border-t border-white/5 space-y-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-sans text-white/40 flex items-center gap-1.5">
                        <FiCpu size={14} className="text-primary" /> Fidelity:
                      </span>
                      <span className="font-sans font-bold text-white">
                        {techStack[selectedTech].fidelity}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className="font-sans text-white/40 flex items-center gap-1.5">
                        <FiActivity size={14} className="text-primary" /> Gen Specs:
                      </span>
                      <span className="font-sans font-bold text-white">
                        {techStack[selectedTech].metrics.resolution}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className="font-sans text-white/40 flex items-center gap-1.5">
                        <FiBarChart2 size={14} className="text-primary" /> Inference Speed:
                      </span>
                      <span className="font-sans font-bold text-primary font-sans">
                        {techStack[selectedTech].metrics.inferenceSpeed}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-sans">
                  <span className="text-white/40">CREATIVITY RATING:</span>
                  <span className="text-primary font-bold">{techStack[selectedTech].metrics.creativityScore}</span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AIStack
