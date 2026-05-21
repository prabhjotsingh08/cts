import React from 'react'
import { motion } from 'framer-motion'
import { FiUsers, FiTrendingUp, FiCpu, FiAward } from 'react-icons/fi'
import teamImage from '../assets/about/team-editing-studio.jpg'

const About = () => {
  const stats = [
    {
      icon: <FiUsers className="text-primary" size={20} />,
      value: '250+',
      label: 'Creators Managed'
    },
    {
      icon: <FiTrendingUp className="text-primary" size={20} />,
      value: '1.5B+',
      label: 'Impressions Made'
    },
    {
      icon: <FiCpu className="text-primary" size={20} />,
      value: '10X',
      label: 'Editing Speedup'
    },
    {
      icon: <FiAward className="text-primary" size={20} />,
      value: '99%',
      label: 'Client Satisfaction'
    }
  ]

  return (
    <section id="about" className="py-24 bg-dark relative px-6 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Mission & Narrative Text */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-sans text-xs tracking-wider uppercase">
              // OUR PHILLOSOPHY & VISION
            </div>
            <h2 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05]">
              Bridging AI Power & <br />
              <span className="text-primary text-glow">Human Soul.</span>
            </h2>
          </div>

          <p className="font-sans text-white/70 text-lg leading-relaxed">
            At CTSMedia, we believe that the absolute future of digital content resides at the intersection of powerful generative artificial intelligence and raw human craftsmanship.
          </p>

          <p className="font-sans text-white/50 text-sm leading-relaxed">
            Standard AI lacks emotional intelligence and genuine narrative hook formulas. Standard human editing is slow, expensive, and struggles to scale. We break this deadlock by combining predictive AI engines with seasoned, award-winning human video editors.
          </p>

          {/* Grid of Stats */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-dark-surface border border-white/5 flex items-center gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-2xl text-white">
                    {stat.value}
                  </h4>
                  <span className="font-sans text-[10px] text-white/40 uppercase block tracking-wider">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Big Interactive Image Collage */}
        <div className="lg:col-span-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-glow-primary group"
          >
            {/* The Image */}
            <img
              src={teamImage}
              alt="CTSMedia Creative Editing Studio"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Glossmorphic overlay displaying tech tags */}
            <div className="absolute bottom-6 left-6 right-6 p-6 glassmorphism rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="font-sans text-[9px] text-primary uppercase tracking-widest block font-bold">
                  STUDIO HQ
                </span>
                <span className="font-sans font-extrabold text-sm text-white block mt-0.5">
                  High-Fidelity Rendering Suite
                </span>
              </div>
              <div className="flex -space-x-2">
                <span className="w-6 h-6 rounded-full bg-primary text-dark font-sans text-[9px] font-bold flex items-center justify-center border border-dark">AI</span>
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white font-sans text-[9px] font-bold flex items-center justify-center border border-dark">PR</span>
                <span className="w-6 h-6 rounded-full bg-purple-500 text-white font-sans text-[9px] font-bold flex items-center justify-center border border-dark">AE</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About
