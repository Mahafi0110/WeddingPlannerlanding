import { motion } from 'motion/react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { IMAGES } from '@/data/content';

const GALLERY_IMAGES = [
  { src: IMAGES.venueReception, alt: 'Wedding reception decor', span: 'lg:col-span-2 lg:row-span-2' },
  { src: IMAGES.bouquetPink, alt: 'Pink rose bouquet', span: '' },
  { src: IMAGES.brideDress, alt: 'Bride in lace dress', span: '' },
  { src: IMAGES.venueTable, alt: 'Elegant table setting', span: '' },
  { src: IMAGES.coupleRings, alt: 'Couple exchanging rings', span: '' },
  { src: IMAGES.venueOutdoor, alt: 'Outdoor wedding venue', span: 'lg:col-span-2' },
  { src: IMAGES.floralPink, alt: 'Floral arrangement', span: '' },
  { src: IMAGES.receptionCenterpiece, alt: 'Reception centerpiece', span: '' },
  { src: IMAGES.coupleHistoric, alt: 'Couple at historic venue', span: '' },
  { src: IMAGES.bouquetGarden, alt: 'Garden bouquet', span: '' },
  { src: IMAGES.receptionSunlit, alt: 'Sunlit reception', span: '' },
  { src: IMAGES.brideWindow, alt: 'Bride by window', span: '' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-blush-50/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="font-sans text-xs tracking-[0.3em] text-gold-500 uppercase font-500">
              Gallery
            </span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-serif font-600 text-ink-800 text-4xl sm:text-5xl tracking-tight leading-[1.1]">
            Moments Worth{' '}
            <span className="font-script text-blush-500 text-5xl sm:text-6xl">Cherishing</span>
          </h2>
          <p className="mt-5 text-ink-700/60 text-lg leading-relaxed">
            A glimpse into the celebrations we&apos;ve had the honor of crafting.
          </p>
        </Reveal>

        {/* Grid */}
        <Stagger
          className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[240px] gap-4"
          stagger={0.08}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <StaggerItem
              key={i}
              className={img.span}
            >
              <motion.div
                whileHover={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full w-full overflow-hidden rounded-2xl cursor-pointer"
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Decorative border on hover */}
                <div className="absolute inset-3 rounded-xl border border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
