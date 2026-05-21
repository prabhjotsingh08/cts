import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiArrowRight, FiActivity } from 'react-icons/fi'

const Pricing = () => {
  // false = Monthly Subscription, true = Per-Project Retainer
  const [isProjectBased, setIsProjectBased] = useState(false)

  const starterPrice = isProjectBased ? '$999 / project' : '$1,499 / mo'
  const creatorPrice = isProjectBased ? '$2,499 / project' : '$2,999 / mo'
  const enterprisePrice = isProjectBased ? 'Custom Retainer' : '$5,999 / mo'

  const pricingTiers = [
    {
      id: 1,
      name: 'Starter Kickoff',
      description: 'Ideal for newer creators looking to establish consistent, high-fidelity presence.',
      price: starterPrice,
      badge: 'Starter pack',
      isPopular: false,
      features: [
        '8 AI-Scripted short form drafts',
        '8 Professionally edited TikToks/Reels',
        'Premium voiceover integration',
        'Turnaround in 48-72 hours',
        '2 Revision rounds per video',
        'Email & chat support channel'
      ],
      cta: 'Choose Starter'
    },
    {
      id: 2,
      name: 'Creator Growth',
      description: 'Our flagship tier. Complete channel acceleration combining long and short form.',
      price: creatorPrice,
      badge: 'Best Value',
      isPopular: true,
      features: [
        '20 AI-Scripted short form drafts',
        '20 Viral-ready edited shorts',
        '4 YouTube Long Form retention edits',
        'Runway Gen-3 custom AI visual B-rolls',
        'Uncapped revision cycles',
        'Turnaround in 24-48 hours',
        'Dedicated Creative Director'
      ],
      cta: 'Choose Growth'
    },
    {
      id: 3,
      name: 'Enterprise Scale',
      description: 'Complete high-production video outsourcing for funded brands and major agencies.',
      price: enterprisePrice,
      badge: 'Uncapped Power',
      isPopular: false,
      features: [
        'Uncapped short form editing outputs',
        'Uncapped YouTube long form narratives',
        'High-converting product commercials (Ads)',
        'Custom ElevenLabs cloned synthetic voiceovers',
        'Dedicated 3-person editor team',
        '24/7 Slack support + weekly sync calls',
        'Full digital distribution optimization'
      ],
      cta: 'Choose Enterprise'
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-dark relative px-6 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header & Toggle */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-sans text-xs tracking-wider uppercase">
            // Investment Options
          </div>
          <h2 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tight">
            Transparent <span className="text-primary text-glow">Pricing.</span>
          </h2>
          <p className="font-sans text-white/60 text-lg leading-relaxed">
            Choose a recurring growth subscription or fixed per-project retainer packages. Switch or cancel anytime.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center pt-4">
            <div className="relative bg-dark-surface border border-white/10 p-1.5 rounded-full flex items-center gap-1">
              {/* Sliding Background */}
              <motion.div
                className="absolute top-1.5 bottom-1.5 left-1.5 bg-primary rounded-full"
                animate={{
                  x: isProjectBased ? 165 : 0,
                  width: isProjectBased ? 175 : 165
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                style={{ height: 'calc(100% - 12px)' }}
              />

              <button
                onClick={() => setIsProjectBased(false)}
                className={`relative px-5 py-2 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-colors duration-300 z-10 ${
                  !isProjectBased ? 'text-dark font-extrabold' : 'text-white/65 hover:text-white'
                }`}
              >
                Monthly Plan
              </button>
              
              <button
                onClick={() => setIsProjectBased(true)}
                className={`relative px-5 py-2 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-colors duration-300 z-10 ${
                  isProjectBased ? 'text-dark font-extrabold' : 'text-white/65 hover:text-white'
                }`}
              >
                Per-Project Retainer
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => {
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: tier.id * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.isPopular 
                    ? 'bg-dark-card border-2 border-primary shadow-[0_0_30px_rgba(200,241,53,0.18)] scale-105 z-10' 
                    : 'bg-dark-surface border border-white/5 hover:border-white/15'
                }`}
              >
                {/* Popular Glow Tag */}
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-dark font-sans font-extrabold text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                    <FiActivity size={10} className="animate-pulse" />
                    {tier.badge}
                  </div>
                )}

                <div>
                  {/* Name & Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-sans font-bold text-xl text-white">
                      {tier.name}
                    </h3>
                    {!tier.isPopular && (
                      <span className="font-sans text-[9px] uppercase tracking-wider text-white/50 bg-white/5 px-2.5 py-1 rounded-md">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="font-sans font-extrabold text-3xl md:text-4xl text-white block">
                      {tier.price}
                    </span>
                    <span className="font-sans text-xs text-white/50 block mt-1">
                      {tier.description}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8 pt-6 border-t border-white/5">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-white/70">
                        <FiCheck className="text-primary shrink-0 mt-0.5" size={14} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <a
                  href="#contact"
                  className={`w-full text-center py-3.5 rounded-xl font-sans font-extrabold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group ${
                    tier.isPopular
                      ? 'bg-primary text-dark hover:bg-white hover:shadow-[0_0_20px_rgba(200,241,53,0.3)]'
                      : 'bg-white/5 text-white hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tier.cta}
                  <FiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                </a>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Pricing
