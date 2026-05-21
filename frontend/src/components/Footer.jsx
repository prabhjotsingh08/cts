import React, { useState } from 'react'
import { FiChevronUp, FiInstagram, FiTwitter, FiYoutube, FiMessageSquare, FiSend, FiLoader, FiCheckCircle } from 'react-icons/fi'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubscribed(true)
      setEmail('')
    }, 1000)
  }

  return (
    <footer className="bg-dark/95 border-t border-white/5 py-16 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-start justify-between pb-12 border-b border-white/5 mb-12">
          
          {/* Logo & Vision */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-sans font-extrabold text-2xl tracking-wider text-white">
              CTS<span className="text-primary">MEDIA</span>
            </span>
            <p className="font-sans text-white/50 text-xs leading-relaxed max-w-sm">
              We leverage advanced artificial intelligence to automate storytelling research, storyboard drafts, and asset scaling, combined with award-winning human editors to build emotional, viral masterpieces.
            </p>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase text-white tracking-widest">
              Follow Our Journey
            </h4>
            <div className="flex gap-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 text-white flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(255,255,255,0.02)]"
              >
                <FiYoutube size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 text-white flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(255,255,255,0.02)]"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 text-white flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(255,255,255,0.02)]"
              >
                <FiTwitter size={18} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 text-white flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(255,255,255,0.02)]"
              >
                <FiMessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Newsletter Input Form */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase text-white tracking-widest">
              Join Our Viral Newsletter
            </h4>
            <p className="font-sans text-white/50 text-[11px]">
              Receive custom-vetted script hooks, CTR tricks, and algorithm breakdowns directly to your inbox every Thursday.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="relative max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email to join"
                className="w-full bg-dark-surface border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 outline-none focus:border-primary transition-all duration-300"
              />
              <button
                type="submit"
                disabled={loading || subscribed}
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary hover:bg-white text-dark font-sans font-bold text-[10px] tracking-widest uppercase px-4 rounded-lg flex items-center gap-1.5 transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <FiLoader className="animate-spin" size={12} />
                ) : subscribed ? (
                  <FiCheckCircle size={12} />
                ) : (
                  <>
                    <span>JOIN</span>
                    <FiSend size={10} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[10px] font-sans text-white/40">
            <span>Â© {new Date().getFullYear()} CTSMEDIA. All rights reserved.</span>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollTop}
            className="group px-4 py-2 bg-white/5 hover:bg-primary hover:text-dark text-white font-sans text-[10px] uppercase tracking-wider rounded-full border border-white/5 hover:border-primary transition-all duration-300 flex items-center gap-1.5"
          >
            <span>Back to Top</span>
            <FiChevronUp className="group-hover:-translate-y-0.5 transition-transform" size={14} />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer
