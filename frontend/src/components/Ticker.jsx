import React from 'react'

const Ticker = () => {
  const tickerItemsRow1 = [
    { text: '100M+ VIEWS GENERATED', color: 'text-primary' },
    { text: 'AI-POWERED SCRIPTING', color: 'text-white' },
    { text: 'HIGH RETENTION EDITING', color: 'text-primary' },
    { text: 'ULTRA FAST TURNAROUND', color: 'text-white' },
    { text: '10X AUDIENCE GROWTH', color: 'text-primary' },
    { text: 'CREATIVE MEETS ALGORITHM', color: 'text-white' },
  ]

  const tickerItemsRow2 = [
    { text: 'TIKTOK & REELS DOMINATION', color: 'text-white' },
    { text: 'MIDJOURNEY v6 STORYBOARDS', color: 'text-primary' },
    { text: 'ELEVENLABS AUDIO MATCHING', color: 'text-white' },
    { text: 'RUNWAY GEN-3 GENERATIVE FX', color: 'text-primary' },
    { text: 'YOUTUBE LONG FORM MASTERY', color: 'text-white' },
    { text: 'RETENTION SCORE: 85%+', color: 'text-primary' },
  ]

  // Double the list to make seamless scrolling
  const row1 = [...tickerItemsRow1, ...tickerItemsRow1]
  const row2 = [...tickerItemsRow2, ...tickerItemsRow2]

  return (
    <section className="py-12 bg-dark/90 border-y border-white/5 overflow-hidden flex flex-col gap-6 relative">
      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />

      {/* Row 1 - Moves Left */}
      <div className="relative w-full overflow-hidden whitespace-nowrap py-2 flex items-center">
        <div className="animate-ticker flex items-center gap-16">
          {row1.map((item, idx) => (
            <div key={`r1-${idx}`} className="flex items-center gap-8">
              <span className={`font-sans font-extrabold text-3xl md:text-5xl tracking-tighter ${item.color}`}>
                {item.text}
              </span>
              <span className="font-sans text-xl md:text-2xl text-primary/50">â€¢</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Moves Right */}
      <div className="relative w-full overflow-hidden whitespace-nowrap py-2 flex items-center">
        <div className="animate-ticker-reverse flex items-center gap-16">
          {row2.map((item, idx) => (
            <div key={`r2-${idx}`} className="flex items-center gap-8">
              <span className={`font-sans font-bold text-2xl md:text-4xl tracking-tight uppercase ${item.color}`}>
                {item.text}
              </span>
              <span className="font-sans text-xl md:text-2xl text-primary">â€¢</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ticker
