import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Heart, Calendar, Images, ChevronDown } from 'lucide-react';
import { IMAGES } from '@/data/content';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-cream-50"
    >
      {/* Background image with parallax */}
      <motion.div
        style={prefersReduced ? undefined : { y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <motion.img
          src={IMAGES.heroBride}
          alt="Bride and groom embracing"
          className="h-full w-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cream-50/40 via-cream-50/20 to-cream-50/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-cream-50/70 via-transparent to-cream-50/30" />

      {/* Decorative floral corners */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        className="absolute top-24 left-4 sm:left-8 z-20 hidden sm:block"
      >
        <div className="relative">
          <div className="h-20 w-20 rounded-full border border-gold-300/40" />
          <div className="absolute inset-2 rounded-full border border-blush-300/30" />
          <Heart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 text-gold-400 fill-gold-300/50" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
        className="absolute bottom-32 right-4 sm:right-8 z-20 hidden sm:block"
      >
        <div className="relative">
          <div className="h-16 w-16 rounded-full border border-gold-300/40" />
          <div className="absolute inset-2 rounded-full border border-blush-300/30" />
        </div>
      </motion.div>

      {/* Floating decorative dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute z-20 h-2 w-2 rounded-full bg-gold-300/40"
          style={{
            top: `${15 + i * 12}%`,
            left: i % 2 === 0 ? `${5 + i * 3}%` : `${85 - i * 3}%`,
          }}
          animate={{
            y: [0, -16, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        style={prefersReduced ? undefined : { y: textY }}
        className="relative z-30 mx-auto flex h-full max-w-7xl flex-col items-center justify-center text-center px-5 sm:px-8 lg:px-12"
      >
        {/* Decorative top line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-5 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-gold-400" />
          <span className="font-script text-2xl text-gold-500">Élysée Weddings</span>
          <span className="h-px w-12 bg-gold-400" />
        </motion.div>

        {/* Headline */}
        <h1 className="font-serif font-600 text-ink-800 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight max-w-4xl">
          {['Your Dream Wedding,', 'Beautifully Planned'].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.4 + i * 0.15,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-6 max-w-xl text-lg text-ink-700/70 leading-relaxed"
        >
          From the first rose petal to the last dance — we craft timeless celebrations
          that reflect your love story, down to every detail.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-blush-400 to-blush-500 text-white font-semibold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(255,107,149,0.4)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blush-500 to-blush-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Calendar className="relative h-5 w-5" strokeWidth={1.8} />
            <span className="relative">Plan Your Wedding</span>
          </a>
          <a
            href="#featured"
            className="group inline-flex items-center gap-2.5 border border-gold-400/50 text-ink-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:border-gold-400 hover:bg-gold-100/50"
          >
            <Images className="h-5 w-5 text-gold-500 group-hover:scale-110 transition-transform" strokeWidth={1.8} />
            View Our Weddings
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] text-ink-700/50 uppercase">
          Scroll
        </span>
        <div className="relative h-10 w-px bg-blush-200 overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-x-0 h-4 bg-gold-400"
          />
        </div>
        <ChevronDown className="h-4 w-4 text-blush-400 animate-bounce" />
      </motion.div>
    </section>
  );
}
