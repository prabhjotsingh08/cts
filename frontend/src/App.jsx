import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import AIStack from './components/AIStack.jsx'
import About from './components/About.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import CTABanner from './components/CTABanner.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="relative min-h-screen bg-dark text-white font-sans overflow-x-hidden scroll-smooth selection:bg-primary selection:text-dark">
      {/* Sticky Premium Blur Navigation */}
      <Navbar />

      {/* Hero Visual Intro with Custom Controls */}
      <Hero />

      {/* Alternating Dual Ticker */}
      <Ticker />

      {/* Service Capabilities Grid */}
      <Services />

      {/* Grid Filter Portfolio Case Studies */}
      <Portfolio />

      {/* Production Stage Pipeline Timeline */}
      <HowItWorks />

      {/* Periodical Technic Table AI Blocks */}
      <AIStack />

      {/* Brand narrative split block */}
      <About />

      {/* Glowing Client Review Badges */}
      <Testimonials />

      {/* Subscription/Project toggler table */}
      <Pricing />

      {/* Interactive FAQ Chevron Accordions */}
      <FAQ />

      {/* Pulsing CTABanner Card */}
      <CTABanner />

      {/* Axios Form strategic budget dropdown */}
      <Contact />

      {/* Social glows & newsletter registration footer */}
      <Footer />
    </div>
  )
}

export default App
