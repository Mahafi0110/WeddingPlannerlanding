import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { IMAGES } from '@/data/content';

const WEDDINGS = [
  {
    title: 'Sofia & James',
    location: 'Tuscany, Italy',
    date: 'June 2025',
    image: IMAGES.coupleElegant,
    desc: 'A sun-drenched vineyard celebration with 120 guests, lavender bouquets, and a candlelit dinner under the stars.',
  },
  {
    title: 'Amelia & Raj',
    location: 'Lake Como, Italy',
    date: 'September 2024',
    image: IMAGES.coupleEmbrace,
    desc: 'An elegant lakeside ceremony blending two cultures, featuring cascading floral arches and a grand reception.',
  },
  {
    title: 'Charlotte & Henry',
    location: 'Provence, France',
    date: 'May 2025',
    image: IMAGES.coupleNight,
    desc: 'A romantic garden wedding with pastel blooms, string lights, and a midnight fireworks finale.',
  },
];

export default function FeaturedWeddings() {
  return (
    <section id="featured" className="relative bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <Reveal className="mb-16 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="font-sans text-xs tracking-[0.3em] text-gold-500 uppercase font-500">
              Featured Weddings
            </span>
          </div>
          <h2 className="font-serif font-600 text-ink-800 text-4xl sm:text-5xl tracking-tight leading-[1.1]">
            Real Weddings,{' '}
            <span className="font-script text-blush-500 text-5xl sm:text-6xl">Real Love</span>
          </h2>
        </Reveal>

        {/* Cards */}
        <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8" stagger={0.15}>
          {WEDDINGS.map((wedding) => (
            <StaggerItem key={wedding.title}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blush-200/30 transition-shadow duration-500"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <motion.img
                    src={wedding.image}
                    alt={wedding.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
                  {/* Date badge */}
                  <span className="absolute top-4 left-4 bg-cream-50/90 backdrop-blur-sm text-ink-800 text-xs font-medium px-3 py-1.5 rounded-full">
                    {wedding.date}
                  </span>
                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="font-serif font-600 text-white text-2xl tracking-tight">
                      {wedding.title}
                    </h3>
                    <p className="flex items-center gap-1.5 text-white/80 text-sm mt-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {wedding.location}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-ink-700/60 leading-relaxed">{wedding.desc}</p>
                  <div className="mt-4 pt-4 border-t border-blush-100/60 flex items-center justify-between">
                    <span className="font-serif text-blush-500 text-sm italic">
                      View Gallery
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center bg-blush-100 group-hover:bg-blush-400 rounded-full transition-colors duration-300">
                      <span className="text-blush-500 group-hover:text-white text-sm transition-colors">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
