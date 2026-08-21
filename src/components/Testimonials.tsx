import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const REVIEWS = [
  {
    name: 'Sofia & James',
    wedding: 'Tuscany Vineyard Wedding',
    rating: 5,
    text: 'Élysée turned our dream into reality. Every detail was perfect — from the lavender bouquets to the candlelit dinner. We didn&apos;t have to worry about a single thing. Truly magical.',
  },
  {
    name: 'Amelia & Raj',
    wedding: 'Lake Como Celebration',
    rating: 5,
    text: 'Planning a multicultural wedding felt overwhelming until we found Élysée. They understood both families perfectly and created a celebration that honored everyone. Flawless.',
  },
  {
    name: 'Charlotte & Henry',
    wedding: 'Provence Garden Wedding',
    rating: 5,
    text: 'From the first meeting to the last dance, the team was incredible. The floral design took our breath away and the coordination was seamless. Worth every penny.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 text-gold-400 fill-gold-300" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-blush-50/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="font-sans text-xs tracking-[0.3em] text-gold-500 uppercase font-500">
              Testimonials
            </span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-serif font-600 text-ink-800 text-4xl sm:text-5xl tracking-tight leading-[1.1]">
            Words from{' '}
            <span className="font-script text-blush-500 text-5xl sm:text-6xl">Happy</span> Couples
          </h2>
        </Reveal>

        {/* Reviews */}
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.15}>
          {REVIEWS.map((review) => (
            <StaggerItem key={review.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-blush-200/30 transition-shadow duration-500"
              >
                {/* Quote icon */}
                <div className="mb-5 flex items-center justify-between">
                  <Quote className="h-10 w-10 text-blush-200 group-hover:text-blush-300 transition-colors duration-300" />
                  <Stars count={review.rating} />
                </div>

                <p className="text-ink-700/70 leading-relaxed text-[15px] italic">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="mt-7 pt-5 border-t border-blush-100/60">
                  <p className="font-serif font-600 text-ink-800 text-lg tracking-tight">
                    {review.name}
                  </p>
                  <p className="text-xs text-blush-500 mt-0.5">{review.wedding}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
