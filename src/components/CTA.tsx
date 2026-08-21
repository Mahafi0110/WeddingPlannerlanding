import { motion } from 'motion/react';
import { Heart, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { IMAGES } from '@/data/content';

export default function CTA() {
  return (
    <section className="relative bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          {/* Background image */}
          <div className="absolute inset-0">
            <motion.img
              src={IMAGES.venueChandelier}
              alt="Luxurious wedding venue"
              className="h-full w-full object-cover"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blush-500/90 via-blush-400/80 to-blush-300/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24 text-center">
            <Reveal>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
              >
                <Heart className="h-7 w-7 text-white fill-white/40" />
              </motion.div>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="font-serif font-600 text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-5">
                Let&apos;s Create Your{' '}
                <span className="font-script text-5xl sm:text-6xl">Perfect</span> Wedding
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                Your love story deserves a celebration as unique as you are. Let&apos;s begin
                crafting the wedding of your dreams, together.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 bg-white text-blush-500 font-semibold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(255,255,255,0.4)]"
              >
                <span className="absolute inset-0 bg-cream-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Start Planning Today</span>
                <ArrowRight className="relative h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Reveal>
          </div>

          {/* Decorative corners */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute top-6 left-6 h-12 w-12 rounded-full border border-white/30 flex items-center justify-center"
          >
            <Heart className="h-4 w-4 text-white/60" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute bottom-6 right-6 h-12 w-12 rounded-full border border-white/30 flex items-center justify-center"
          >
            <Heart className="h-4 w-4 text-white/60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
