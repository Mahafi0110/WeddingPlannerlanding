import { motion } from 'motion/react';
import {
  CalendarHeart,
  Flower2,
  MapPin,
  Palette,
  ClipboardCheck,
  ArrowUpRight,
  Heart,
} from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { IMAGES } from '@/data/content';

const SERVICES = [
  {
    icon: CalendarHeart,
    title: 'Wedding Planning',
    desc: 'Full-service planning from concept to execution. We manage timelines, budgets, vendors, and every detail in between.',
    image: IMAGES.venueReception,
  },
  {
    icon: Palette,
    title: 'Decoration & Styling',
    desc: 'Bespoke decor that transforms any space into your vision — from minimalist chic to opulent floral wonderlands.',
    image: IMAGES.venueTable,
  },
  {
    icon: MapPin,
    title: 'Venue Selection',
    desc: 'Curated access to the most stunning venues — historic estates, beachfront resorts, gardens, and ballrooms.',
    image: IMAGES.venueHall,
  },
  {
    icon: Flower2,
    title: 'Floral Design',
    desc: 'Artisan bouquets, centerpieces, and installations using the freshest seasonal blooms in your palette.',
    image: IMAGES.floralPink,
  },
  {
    icon: ClipboardCheck,
    title: 'Coordination',
    desc: 'Seamless day-of coordination so you and your guests can be fully present while we handle everything behind the scenes.',
    image: IMAGES.receptionSetup,
  },
];

function ServiceCard({
  icon: Icon,
  title,
  desc,
  image,
  index,
}: {
  icon: typeof CalendarHeart;
  title: string;
  desc: string;
  image: string;
  index: number;
}) {
  return (
    <StaggerItem>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group relative h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blush-200/30 transition-shadow duration-500"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
          {/* Icon badge */}
          <div className="absolute -bottom-6 left-6 flex h-14 w-14 items-center justify-center bg-white rounded-full shadow-lg border border-blush-100">
            <Icon className="h-6 w-6 text-blush-500" strokeWidth={1.6} />
          </div>
          {/* Number */}
          <span className="absolute top-4 right-4 font-serif font-700 text-3xl text-white/80">
            0{index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 pt-10">
          <h3 className="font-serif font-600 text-ink-800 text-xl mb-2 tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-ink-700/60 leading-relaxed">{desc}</p>
          <div className="mt-4 flex items-center gap-1.5 text-blush-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Learn more</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </motion.div>
    </StaggerItem>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-blush-50/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="font-sans text-xs tracking-[0.3em] text-gold-500 uppercase font-500">
              Our Services
            </span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-serif font-600 text-ink-800 text-4xl sm:text-5xl tracking-tight leading-[1.1]">
            Every Detail,{' '}
            <span className="font-script text-blush-500 text-5xl sm:text-6xl">Beautifully</span>{' '}
            Handled
          </h2>
          <p className="mt-5 text-ink-700/60 text-lg leading-relaxed">
            From the first sketch to the final toast, we offer a complete suite of services to
            bring your wedding vision to life.
          </p>
        </Reveal>

        {/* Cards */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.12}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
          {/* CTA card */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group h-full bg-gradient-to-br from-blush-400 to-blush-500 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-lg shadow-blush-200/40"
            >
              <Heart className="h-10 w-10 text-white fill-white/30 mb-4" />
              <h3 className="font-serif font-600 text-white text-2xl mb-3 tracking-tight">
                Need Something Custom?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                We tailor every package to your unique love story. Let&apos;s create something
                one-of-a-kind together.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-blush-500 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-cream-50 transition-colors"
              >
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

