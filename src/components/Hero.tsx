import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bride and groom portrait with floral bouquet',
    caption: 'Intimate Ceremonies',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    alt: 'Luxury outdoor floral wedding reception',
    caption: 'Bespoke Venues & Decor',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Romantic couple sunset shoot',
    caption: 'Unforgettable Memories',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % SLIDES.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden bg-cream-50 text-ink-800">
      <div className="pointer-events-none absolute -left-32 -top-32 h-[550px] w-[550px] rounded-full border border-gold-200" />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-6 lg:col-span-6 lg:pr-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-700/60">Est. 2014 &bull; Beverly Hills</span>
            </div>
            <p className="font-serif text-2xl italic tracking-wide text-blush-500 sm:text-3xl">For the wildly in love</p>
            <h1 className="font-serif text-5xl font-normal leading-[1.08] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
              Your day, <br />
              <span className="italic text-blush-500">beautifully</span> <br />
              unforgettable.
            </h1>
            <p className="max-w-lg text-base font-light leading-relaxed text-ink-700/70 sm:text-lg">We turn the feeling of your love into a celebration with soul, style, and a hundred little details that feel unmistakably yours.</p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-4 text-xs font-medium uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-ink-800 hover:shadow-md sm:text-sm">
                Plan your wedding
                <ArrowUpRight className="h-4 w-4 text-gold-400" />
              </a>
              <a href="#gallery" className="inline-flex items-center gap-2 rounded-full border border-gold-300 bg-transparent px-6 py-4 text-xs font-medium uppercase tracking-wider text-ink-900 transition-all duration-300 hover:bg-gold-100 sm:text-sm">
                Explore our work
                <ArrowUpRight className="h-4 w-4 text-ink-700/60" />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-6 lg:justify-end">
            <div className="relative h-[520px] w-full max-w-md sm:h-[600px] sm:max-w-lg">
              <div className="absolute -inset-4 -z-10 rounded-t-[220px] rounded-b-3xl bg-gradient-to-tr from-gold-100 to-transparent opacity-70" />
              <span className="absolute -right-8 top-1/3 hidden origin-right rotate-90 text-[10px] uppercase tracking-[0.3em] text-ink-700/40 sm:block">Intentionally Planned &bull; Curated</span>
              <div className="relative h-full w-full overflow-hidden rounded-t-[220px] rounded-b-3xl border-4 border-white shadow-2xl">
                {SLIDES.map((slide, index) => (
                  <div key={slide.id} className={`absolute inset-0 h-full w-full transform transition-all duration-1000 ease-in-out ${index === currentSlide ? 'translate-x-0 scale-100 opacity-100' : index < currentSlide ? '-translate-x-full scale-95 opacity-0' : 'translate-x-full scale-95 opacity-0'}`}>
                    <img src={slide.url} alt={slide.alt} className="h-full w-full object-cover object-center" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 text-left text-white">
                      <span className="block text-[11px] font-medium uppercase tracking-widest text-white/80">{slide.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
                {SLIDES.map((slide, index) => (
                  <button key={slide.id} type="button" onClick={() => setCurrentSlide(index)} aria-label={`Go to slide ${index + 1}`} className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-blush-500' : 'w-2 bg-gold-300 hover:bg-gold-500'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
