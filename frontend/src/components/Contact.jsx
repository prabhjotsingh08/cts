import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { FiSend, FiCheckCircle, FiAlertCircle, FiLoader, FiUser, FiMail, FiLink, FiDollarSign, FiMessageSquare } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandLink: '',
    budget: '',
    message: ''
  })

  const [focusedField, setFocusedField] = useState(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('')

  const budgets = [
    { value: 'under-1k', label: 'Under $1,000 / mo' },
    { value: '1k-3k', label: '$1,000 - $3,000 / mo' },
    { value: '3k-5k', label: '$3,000 - $5,000 / mo' },
    { value: 'above-5k', label: '$5,000+ / mo' }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required'
    if (!formData.email.trim()) return 'Email is required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) return 'Please provide a valid email address'
    if (!formData.budget) return 'Please select your approximate monthly budget'
    if (!formData.message.trim()) return 'Please provide details about your video scripting/editing needs'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const errorMsg = validateForm()
    if (errorMsg) {
      setStatus('error')
      setStatusMessage(errorMsg)
      return
    }

    setLoading(true)
    setStatus(null)

    try {
      // API call to local FastAPI proxy
      const response = await axios.post('/api/contact', formData)
      
      if (response.status === 200 || response.status === 201) {
        setStatus('success')
        setStatusMessage('Your strategy call booking request has been submitted successfully! We will email you back within 12 hours.')
        setFormData({
          name: '',
          email: '',
          brandLink: '',
          budget: '',
          message: ''
        })
      } else {
        throw new Error('Failed to submit form data')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setStatusMessage(
        err.response?.data?.detail || 
        'Encountered a server connectivity issue. Please try again or email us directly at support@ctsmedia.ai'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-dark relative px-6 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left column info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-sans text-xs tracking-wider uppercase">
              // LET'S ACCELERATE YOUR GROWTH
            </div>
            <h2 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05]">
              Get In <br />
              <span className="text-primary text-glow">Touch.</span>
            </h2>
          </div>

          <p className="font-sans text-white/70 text-lg leading-relaxed">
            Have questions or want to try a compprimaryntary sample viral script outline? Reach out now. Our team reviews submissions and responds in less than 12 hours.
          </p>

          <div className="space-y-4 font-sans text-xs text-white/50 pt-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0" />
              <span>Response Time: &lt; 12 Hours Guarantee</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0" />
              <span>Available Slots Left This Week: 3</span>
            </div>
          </div>
        </div>

        {/* Right column form */}
        <div className="lg:col-span-7">
          <div className="relative bg-dark-card border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            
            {/* Status Notifications Modal overlay inside form card */}
            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mb-6 p-4 rounded-xl flex items-start gap-3 border ${
                    status === 'success'
                      ? 'bg-primary/10 border-primary text-primary'
                      : 'bg-red-500/10 border-red-500 text-red-400'
                  }`}
                >
                  {status === 'success' ? (
                    <FiCheckCircle className="shrink-0 mt-0.5" size={18} />
                  ) : (
                    <FiAlertCircle className="shrink-0 mt-0.5" size={18} />
                  )}
                  <div className="text-xs font-sans leading-relaxed">
                    <span className="font-bold block uppercase mb-0.5">
                      {status === 'success' ? 'Request Sent!' : 'Submission Error'}
                    </span>
                    {statusMessage}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name field */}
                <div className="relative">
                  <span className="absolute left-4 top-4.5 text-white/40">
                    <FiUser size={16} />
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your name"
                    className={`w-full bg-dark border pl-12 pr-4 py-4.5 rounded-xl font-sans text-sm text-white placeholder-white/30 outline-none transition-all duration-300 ${
                      focusedField === 'name' ? 'border-primary shadow-[0_0_15px_rgba(200,241,53,0.15)]' : 'border-white/10'
                    }`}
                  />
                </div>

                {/* Email field */}
                <div className="relative">
                  <span className="absolute left-4 top-4.5 text-white/40">
                    <FiMail size={16} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your email address"
                    className={`w-full bg-dark border pl-12 pr-4 py-4.5 rounded-xl font-sans text-sm text-white placeholder-white/30 outline-none transition-all duration-300 ${
                      focusedField === 'email' ? 'border-primary shadow-[0_0_15px_rgba(200,241,53,0.15)]' : 'border-white/10'
                    }`}
                  />
                </div>

              </div>

              {/* Row 2: Brand/Channel Link & Monthly Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Brand Link */}
                <div className="relative">
                  <span className="absolute left-4 top-4.5 text-white/40">
                    <FiLink size={16} />
                  </span>
                  <input
                    type="text"
                    name="brandLink"
                    value={formData.brandLink}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('brandLink')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Channel / Website link (Optional)"
                    className={`w-full bg-dark border pl-12 pr-4 py-4.5 rounded-xl font-sans text-sm text-white placeholder-white/30 outline-none transition-all duration-300 ${
                      focusedField === 'brandLink' ? 'border-primary shadow-[0_0_15px_rgba(200,241,53,0.15)]' : 'border-white/10'
                    }`}
                  />
                </div>

                {/* Budget selection */}
                <div className="relative">
                  <span className="absolute left-4 top-4.5 text-white/40">
                    <FiDollarSign size={16} />
                  </span>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('budget')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-dark border pl-12 pr-4 py-4.5 rounded-xl font-sans text-sm text-white/80 placeholder-white/30 outline-none transition-all duration-300 cursor-pointer ${
                      focusedField === 'budget' ? 'border-primary shadow-[0_0_15px_rgba(200,241,53,0.15)]' : 'border-white/10'
                    }`}
                  >
                    <option value="" disabled className="text-white/30">Select Monthly Budget</option>
                    {budgets.map((b) => (
                      <option key={b.value} value={b.value} className="bg-dark text-white">{b.label}</option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Message field */}
              <div className="relative">
                <span className="absolute left-4 top-5 text-white/40">
                  <FiMessageSquare size={16} />
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  placeholder="Tell us about your channels, audience size, and what editing & scripting services you need..."
                  className={`w-full bg-dark border pl-12 pr-4 py-4 rounded-xl font-sans text-sm text-white placeholder-white/30 outline-none transition-all duration-300 ${
                    focusedField === 'message' ? 'border-primary shadow-[0_0_15px_rgba(200,241,53,0.15)]' : 'border-white/10'
                  }`}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4.5 rounded-xl bg-primary text-dark font-sans font-extrabold text-xs uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(200,241,53,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <FiLoader className="animate-spin" size={16} />
                    <span>Transmitting data...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Strategic Request</span>
                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
