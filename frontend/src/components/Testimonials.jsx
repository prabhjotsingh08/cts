import React from 'react'
import { motion } from 'framer-motion'
import { FiStar, FiTrendingUp, FiMessageSquare } from 'react-icons/fi'

// Import 3 mock avatars
import a1 from '../assets/testimonials/avatar1.jpg'
import a2 from '../assets/testimonials/avatar2.jpg'
import a3 from '../assets/testimonials/avatar3.jpg'

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'CEO, BrightSaaS',
      avatar: a1,
      stat: '+140% Conversion Rate',
      views: '4.2M Views Created',
      quote: 'CTSMedia completely transformed our product ads. Fusing their Runway Gen-3 AI backgrounds with an outstanding sales script boosted our ROAS to 4.2x inside the first month.',
      rating: 5
    },
    {
      id: 2,
      name: 'Devin Cole',
      role: 'Viral Tech Creator',
      avatar: a2,
      stat: '+600K Subscribers',
      views: '12M TikTok Views',
      quote: 'The turnaround speed is absolute wizardry. I send them raw audio files, and in 24 hours, I receive viral-ready shorts with custom interactive captions and graphics that hit millions of feeds.',
      rating: 5
    },
    {
      id: 3,
      name: 'Amara Vance',
      role: 'Marketing Lead, WavePay',
      avatar: a3,
      stat: '12% Click-Through-Rate',
      views: '2.5M YouTube Impressions',
      quote: 'Their YouTube scriptwriters mapped our viewer retention perfectly. Our average view duration went from 3 minutes to a massive 7.5 minutes, skyrocketing our ad revenue.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-dark-surface relative px-6 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-sans text-xs tracking-wider uppercase">
            // High-Performance Reviews
          </div>
          <h2 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tight">
            Client Success <br />
            <span className="text-primary text-glow">Stories.</span>
          </h2>
          <p className="font-sans text-white/60 text-lg leading-relaxed">
            See how creators and fast-growing businesses scale their organic reach and revenue utilizing our next-generation video pipeline.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-dark-card border border-white/5 hover:border-primary/30 transition-all duration-300 rounded-3xl p-8 relative flex flex-col justify-between group cursor-pointer"
            >
              {/* Quote Mark Icon background */}
              <div className="absolute top-6 right-6 text-white/[0.02] group-hover:text-primary/[0.04] transition-colors duration-300">
                <FiMessageSquare size={120} />
              </div>

              {/* Review Star Rating */}
              <div className="space-y-6 z-10">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <FiStar key={i} className="text-primary fill-primary" size={16} />
                  ))}
                </div>

                <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              {/* User Avatar, Name & Stats */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4 z-10">
                {/* Hexagonal avatar with neon ring hover */}
                <div className="relative shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary transition-colors duration-300 shadow-md">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-sans font-bold text-sm text-white">
                    {review.name}
                  </h4>
                  <span className="font-sans text-[11px] text-white/50 block">
                    {review.role}
                  </span>

                  {/* Growth Badge */}
                  <div className="flex items-center gap-1 mt-1 text-[10px] font-sans text-primary bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20 w-fit">
                    <FiTrendingUp size={10} />
                    <span>{review.stat}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
