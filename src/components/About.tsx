import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { IMAGES } from '@/data/content';

const STATS = [
  { value: '250+', label: 'Weddings Planned' },
  { value: '12', label: 'Years of Experience' },
  { value: '98%', label: 'Happy Couples' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-cream-50 py-24 lg:py-32 overflow-hidden">
      {/* Decorative background element */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blush-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image side */}
          <Reveal x={-40} className="relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-blush-200/40">
                <motion.img
                  src={IMAGES.brideStaircase}
                  alt="Elegant bride on staircase"
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, ease: 'easeOut' }}
                />
              </div>

              {/* Secondary floating image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="absolute -bottom-8 -left-4 sm:-left-8 w-40 h-52 sm:w-52 sm:h-64 overflow-hidden rounded-2xl shadow-xl border-4 border-cream-50 hidden sm:block"
              >
                <img
                  src={IMAGES.bouquetRoses}
                  alt="Pink rose bouquet"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Decorative ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -top-6 -right-6 h-20 w-20 rounded-full border-2 border-gold-300/50 flex items-center justify-center"
              >
                <Heart className="h-7 w-7 text-gold-400 fill-gold-200/60" />
              </motion.div>
            </div>
          </Reveal>

          {/* Content side */}
          <div>
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-gold-400" />
                <span className="font-sans text-xs tracking-[0.3em] text-gold-500 uppercase font-500">
                  About Us
                </span>
              </div>
              <h2 className="font-serif font-600 text-ink-800 text-4xl sm:text-5xl tracking-tight leading-[1.1] mb-6">
                Where Love Meets
                <br />
                <span className="font-script text-blush-500 text-5xl sm:text-6xl">Impeccable</span>{' '}
                <span className="italic">Design</span>
              </h2>
              <p className="text-ink-700/70 text-lg leading-relaxed mb-5">
                For over a decade, Élysée Weddings has been turning dreams into unforgettable
                celebrations. We believe every love story is unique — and so should be the wedding
                that tells it.
              </p>
              <p className="text-ink-700/70 leading-relaxed mb-8">
                From intimate garden ceremonies to grand ballroom receptions, our team handles
                every petal, every place setting, and every moment with meticulous care and
                artistic vision.
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <p className="font-serif font-700 text-3xl sm:text-4xl text-blush-500">
                      {stat.value}
                    </p>
                    <p className="text-xs text-ink-700/60 mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Feature badges */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3">
                {['Award-Winning', 'Full-Service', 'Bespoke Designs'].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 bg-blush-100 text-blush-700 text-sm font-medium px-4 py-2 rounded-full"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-gold-400" />
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
