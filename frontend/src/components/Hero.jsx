import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiMaximize, FiArrowRight } from 'react-icons/fi'
import heroReel from '../assets/hero/hero-reel.mp4'
import heroReelPoster from '../assets/hero/hero-reel-poster.jpg'

const Hero = () => {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const width = window.innerWidth
      const height = window.innerHeight
      const x = (clientX - width / 2) / 25
      const y = (clientY - height / 2) / 25
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true)
        }).catch((err) => console.log('Video play interrupted', err))
      }
    }
  }

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (e) => {
    const val = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = val
      setCurrentTime(val)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen()
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen()
      }
    }
  }

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden bg-dark px-6"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left: Headline & Description */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start space-y-6"
          style={{ x: mousePosition.x * 0.4, y: mousePosition.y * 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-sans text-xs tracking-wider"
          >
            // THE NEXT GEN OF VIDEO EDITING & SCRIPTING
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans font-extrabold text-5xl md:text-7xl leading-[1.05] tracking-tight"
          >
            We Write <span className="text-primary text-glow">AI Scripts.</span> <br />
            We Edit <span className="text-white relative inline-block">
              Viral Videos.
              <span className="absolute bottom-1.5 left-0 w-full h-2 bg-primary/20 -z-10"></span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-white/70 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Scaling creators and brands through a high-performance fusion of advanced artificial intelligence and ultra-sharp human creativity. Experience unmatched video editing speed.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-primary text-dark font-sans font-extrabold tracking-wide hover:bg-white hover:shadow-[0_0_25px_rgba(200,241,53,0.5)] transition-all duration-300 flex items-center gap-2 group"
            >
              Get Started Free
              <FiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-sans font-bold tracking-wide hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              View Portfolio
            </a>
          </motion.div>
        </motion.div>

        {/* Right: High-end Custom HTML5 Video Player */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 w-full flex justify-center"
          style={{ y, opacity }}
        >
          <div className="relative w-full max-w-[450px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl bg-glow-primary border border-white/10 group">
            
            {/* The Video Element */}
            <video
              ref={videoRef}
              src={heroReel}
              poster={heroReelPoster}
              loop
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="w-full h-full object-cover cursor-pointer"
              onClick={handlePlayPause}
            />

            {/* Custom Overlay Controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 pointer-events-none">
              
              {/* Top Controls */}
              <div className="flex justify-end pointer-events-auto">
                <button
                  onClick={handleMuteUnmute}
                  className="w-10 h-10 rounded-full bg-dark/60 text-white flex items-center justify-center hover:bg-primary hover:text-dark transition-colors duration-200"
                >
                  {isMuted ? <FiVolumeX size={18} /> : <FiVolume2 size={18} />}
                </button>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <button
                  onClick={handlePlayPause}
                  className="w-16 h-16 rounded-full bg-primary text-dark flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(200,241,53,0.4)]"
                >
                  {isPlaying ? <FiPause size={28} /> : <FiPlay size={28} className="translate-x-0.5" />}
                </button>
              </div>

              {/* Bottom Controls */}
              <div className="space-y-4 pointer-events-auto">
                {/* Custom Progress Bar */}
                <div className="flex items-center gap-2">
                  <span className="font-sans text-[10px] text-white/70">
                    {Math.floor(currentTime / 60)}:{( '0' + Math.floor(currentTime % 60) ).slice(-2)}
                  </span>
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="flex-1 accent-primary h-1 bg-white/20 rounded-lg cursor-pointer outline-none"
                  />
                  <span className="font-sans text-[10px] text-white/70">
                    {Math.floor(duration / 60)}:{( '0' + Math.floor(duration % 60) ).slice(-2)}
                  </span>
                </div>

                {/* Left/Right Actions */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePlayPause}
                      className="text-white hover:text-primary transition-colors"
                    >
                      {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
                    </button>
                    <span className="font-sans font-bold text-xs uppercase tracking-wider text-primary">
                      CTSMedia SHOWREEL
                    </span>
                  </div>
                  <button
                    onClick={handleFullscreen}
                    className="text-white hover:text-primary transition-colors"
                  >
                    <FiMaximize size={18} />
                  </button>
                </div>
              </div>

            </div>

            {/* Poster Overlay when not playing & not hovered */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 bg-dark/30 flex flex-col items-center justify-center cursor-pointer pointer-events-none"
                onClick={handlePlayPause}
              >
                <div className="w-20 h-20 rounded-full glassmorphism text-primary flex items-center justify-center shadow-lg border border-primary/30 pointer-events-auto hover:scale-115 transition-transform duration-300">
                  <FiPlay size={32} className="translate-x-1" />
                </div>
                <span className="mt-4 font-sans font-bold text-sm tracking-widest text-white/90 uppercase bg-dark/80 px-4 py-1.5 rounded-full border border-white/10">
                  Watch Our Showreel
                </span>
              </div>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
