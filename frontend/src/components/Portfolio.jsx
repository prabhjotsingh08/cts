import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlay, FiEye, FiClock, FiTag } from 'react-icons/fi'

// Import 6 mock portfolio images
import p1 from '../assets/portfolio/portfolio1.jpg'
import p2 from '../assets/portfolio/portfolio2.jpg'
import p3 from '../assets/portfolio/portfolio3.jpg'
import p4 from '../assets/portfolio/portfolio4.jpg'
import p5 from '../assets/portfolio/portfolio5.jpg'
import p6 from '../assets/portfolio/portfolio6.jpg'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredItem, setHoveredItem] = useState(null)

  const filters = ['All', 'Shorts', 'Long Form', 'Ads']

  const portfolioItems = [
    {
      id: 1,
      title: 'Alex Hormozi Style Retention Reel',
      category: 'Shorts',
      client: 'ScaleUP Agency',
      image: p1,
      views: '1.2M Views',
      duration: '0:58',
      tag: 'Short Form'
    },
    {
      id: 2,
      title: 'The AI Revolution Documentary',
      category: 'Long Form',
      client: 'TechHQ Channel',
      image: p2,
      views: '450K Views',
      duration: '14:22',
      tag: 'YouTube Long'
    },
    {
      id: 3,
      title: 'Generative AI SaaS Product Commercial',
      category: 'Ads',
      client: 'Flux-AI Inc.',
      image: p3,
      views: '800K Views',
      duration: '0:30',
      tag: 'SaaS Ad'
    },
    {
      id: 4,
      title: 'Cinematic Travel Vlog: AI-Upscaled',
      category: 'Long Form',
      client: 'Nomad Chronicles',
      image: p4,
      views: '350K Views',
      duration: '10:15',
      tag: 'Cinematic'
    },
    {
      id: 5,
      title: 'High-Retention TikTok Hook Experiment',
      category: 'Shorts',
      client: 'FinanceBro CEO',
      image: p5,
      views: '2.4M Views',
      duration: '0:45',
      tag: 'Viral Short'
    },
    {
      id: 6,
      title: 'Web3 Crypto Coin Brand Commercial',
      category: 'Ads',
      client: 'EtherChain Protocol',
      image: p6,
      views: '650K Views',
      duration: '1:00',
      tag: 'Web3 Ad'
    }
  ]

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 bg-dark-surface relative px-6 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-sans text-xs tracking-wider uppercase">
            // High-Impact Case Studies
          </div>
          <h2 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tight">
            Our Viral <span className="text-primary text-glow">Portfolio.</span>
          </h2>
          <p className="font-sans text-white/60 text-lg leading-relaxed">
            Browse through our portfolio of AI-scripted and ultra-edited videos that generated massive views and record conversion rates.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-sans font-bold text-sm tracking-wide transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-dark shadow-[0_0_20px_rgba(200,241,53,0.3)]'
                  : 'bg-dark border border-white/10 text-white/70 hover:border-white/40 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative bg-dark-card rounded-2xl overflow-hidden border border-white/5 group shadow-lg cursor-pointer"
              >
                {/* Image Wrap */}
                <div className="relative aspect-video w-full overflow-hidden bg-dark">
                  {/* Graceful blur-up / placeholder */}
                  <div className="absolute inset-0 bg-primary/10 animate-pulse -z-10" />
                  
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Glassmorphic/Overlay Hover State */}
                  <div className="absolute inset-0 bg-dark/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    
                    {/* Top Stats */}
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1 text-[11px] font-sans text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/30">
                        <FiTag size={10} />
                        {item.tag}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-sans text-white/80 bg-white/5 px-2.5 py-1 rounded-full">
                        <FiClock size={10} />
                        {item.duration}
                      </span>
                    </div>

                    {/* Middle Play Action */}
                    <div className="self-center">
                      <div className="w-14 h-14 rounded-full bg-primary text-dark flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(200,241,53,0.4)]">
                        <FiPlay size={22} className="translate-x-0.5" />
                      </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="flex justify-between items-center text-xs font-sans text-white/60 border-t border-white/10 pt-3">
                      <span>By {item.client}</span>
                      <span className="flex items-center gap-1 text-primary font-bold">
                        <FiEye size={12} />
                        {item.views}
                      </span>
                    </div>

                  </div>
                </div>

                {/* Info Box (Visible when not hovered, but styled beautifully) */}
                <div className="p-6">
                  <h3 className="font-sans font-bold text-lg text-white group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-sans text-xs text-white/40 uppercase tracking-widest">
                      [{item.category}]
                    </span>
                    <span className="font-sans font-extrabold text-xs text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View details <FiPlay size={10} />
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default Portfolio
