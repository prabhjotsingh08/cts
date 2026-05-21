import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiZap } from 'react-icons/fi'

const CTABanner = () => {
  return (
    <section className="py-16 bg-dark relative px-6 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 md:p-16 overflow-hidden border border-primary/30 bg-dark-card shadow-[0_0_40px_rgba(200,241,53,0.15)] flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Glassmorphic border lines and particles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text content */}
          <div className="space-y-6 text-center lg:text-left z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 font-sans text-[10px] uppercase text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 font-bold">
              <FiZap className="animate-bounce" /> BOOST YOUR AUDIENCE REACH NOW
            </span>
            
            <h2 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-white">
              Ready to Explode Your <br />
              <motion.span 
                className="text-primary text-glow inline-block"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                Viewer Retention?
              </motion.span>
            </h2>

            <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed">
              Book a 15-minute creative strategy review. Weâ€™ll outline custom script hooks for your business and draft a free viral sample draft.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 z-10 w-full lg:w-auto justify-center">
            <a
              href="#contact"
              className="px-8 py-4 text-center rounded-full bg-primary text-dark font-sans font-extrabold text-sm tracking-widest uppercase hover:bg-white hover:shadow-[0_0_20px_rgba(200,241,53,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Book Strategy Call
              <FiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
            </a>
            
            <a
              href="#portfolio"
              className="px-8 py-4 text-center rounded-full border border-white/20 text-white font-sans font-bold text-sm tracking-widest uppercase hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Watch Portfolio
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default CTABanner
