import { motion } from 'motion/react';
import { Award, HeartHandshake, Clock, Gem } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const FEATURES = [
  {
    icon: Award,
    title: 'Award-Winning Team',
    desc: 'Recognized by leading wedding publications for excellence in design and execution.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Approach',
    desc: 'No two weddings are alike. We take the time to understand your story and vision.',
  },
  {
    icon: Clock,
    title: 'Stress-Free Experience',
    desc: 'We handle every detail so you can be fully present and enjoy your special day.',
  },
  {
    icon: Gem,
    title: 'Premium Vendor Network',
    desc: 'Exclusive relationships with the finest venues, florists, and photographers.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-cream-50 py-24 lg:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blush-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="font-sans text-xs tracking-[0.3em] text-gold-500 uppercase font-500">
              Why Choose Us
            </span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-serif font-600 text-ink-800 text-4xl sm:text-5xl tracking-tight leading-[1.1]">
            The{' '}
            <span className="font-script text-blush-500 text-5xl sm:text-6xl">Élysée</span>{' '}
            Difference
          </h2>
        </Reveal>

        {/* Feature cards */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.12}>
          {FEATURES.map((f) => (
            <StaggerItem key={f.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group h-full text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-blush-200/30 transition-shadow duration-500"
              >
                <div className="mx-auto mb-5 relative">
                  <div className="flex h-16 w-16 items-center justify-center bg-blush-100 group-hover:bg-blush-400 rounded-full transition-colors duration-300">
                    <f.icon className="h-7 w-7 text-blush-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.6} />
                  </div>
                  <div className="absolute inset-0 rounded-full border border-gold-300/40 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-serif font-600 text-ink-800 text-lg mb-2 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm text-ink-700/60 leading-relaxed">{f.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
