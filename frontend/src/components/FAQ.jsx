import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiChevronUp, FiHelpCircle } from 'react-icons/fi'

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const faqs = [
    {
      question: 'How fast is your standard turnaround time?',
      answer: 'Our typical turnaround time ranges between 24 and 48 hours for Short Form videos, and 48 to 72 hours for highly customized long-form narratives or commercials. Our AI-assisted tooling pipeline allows our human editors to execute edits up to 10x faster than standard boutique agencies.'
    },
    {
      question: 'How does the revision cycle work?',
      answer: 'We deliver drafts via structured client dashboard links. For the Starter and Creator packages, you have set revisions (2 for Starter, unlimited for Creator/Enterprise). Revision requests are simple: leave visual timestamps on the video, and we address them within 12 hours.'
    },
    {
      question: 'How much of the video is made using generative AI?',
      answer: 'We utilize AI as a hyper-speed production assistant. Scripts are drafted using specialized LLMs tuned to viral human hook formulas. B-rolls, background assets, and audio transitions are generated via Midjourney v6, Runway Gen-3, or ElevenLabs. The actual core assembly, comedic pacing, pacing adjustments, and overall narrative emotional flow are executed entirely by vetted, expert human editors.'
    },
    {
      question: 'Are the AI assets commercially safe and copyright-free?',
      answer: 'Absolutely. We use paid commercial-tier licenses for all of our generative AI stacks (Runway, Midjourney, ElevenLabs, Adobe Firefly). All soundtracks, sound effects, and generated digital assets are fully licensed and completely safe for deployment on TikTok, YouTube, Meta, and broadcast television.'
    },
    {
      question: 'Can I switch between monthly plans and project-based retainers?',
      answer: 'Yes! You can switch plans or package structures at any time by coordinating with your dedicated Creative Director. There are no long-term locked contracts; you can pause or cancel your monthly retainer cycles at the end of any billing cycle.'
    }
  ]

  const handleToggle = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-24 bg-dark-surface relative px-6 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-sans text-xs tracking-wider uppercase">
            // Frequently Asked Questions
          </div>
          <h2 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tight">
            Got Questions? <br />
            <span className="text-primary text-glow">We Answers.</span>
          </h2>
          <p className="font-sans text-white/60 text-lg leading-relaxed">
            Everything you need to know about our production workflows, generative tools, revision pipelines, and subscriptions.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isExpanded 
                    ? 'bg-dark-card border-primary shadow-[0_0_20px_rgba(200,241,53,0.06)]' 
                    : 'bg-dark border-white/5 hover:border-white/10'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 font-sans font-bold text-base md:text-lg text-white hover:text-primary transition-colors group"
                >
                  <span className="flex items-center gap-3">
                    <FiHelpCircle className="text-primary shrink-0" size={20} />
                    {faq.question}
                  </span>
                  
                  {/* Chevron Icon Container */}
                  <div className={`w-8 h-8 rounded-full bg-white/5 group-hover:bg-primary group-hover:text-dark flex items-center justify-center shrink-0 transition-colors duration-300`}>
                    {isExpanded ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                  </div>
                </button>

                {/* Smooth Animated Height Expansion */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 font-sans text-white/70 text-sm md:text-base leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
