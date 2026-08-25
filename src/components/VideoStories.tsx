import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal } from '@/components/Reveal';

const VIDEO_STORIES = [
  {
    title: 'The first look',
    eyebrow: 'A quiet beginning',
    description:
      'Before the music, the flowers, and the celebration, there is this one beautifully private moment.',
    video: 'https://www.pexels.com/download/video/12597549/',
    poster:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85',
  },
  {
    title: 'Under the open sky',
    eyebrow: 'A setting with soul',
    description:
      'Every detail has a place, from the softest candlelight to the table where everyone gathers.',
      video: 'https://www.pexels.com/download/video/10805308/',
    poster:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=85',
  },
  {
    title: 'The last dance',
    eyebrow: 'A memory in motion',
    description:
      'When the evening slows down, the smallest gestures become the ones you remember forever.',
    video: 'https://www.pexels.com/download/video/7249078/',
    poster:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85',
  },
];

export default function VideoStories() {
  const [currentStory, setCurrentStory] = useState(0);
  const story = VIDEO_STORIES[currentStory];

  const showStory = (index: number) => {
    setCurrentStory((index + VIDEO_STORIES.length) % VIDEO_STORIES.length);
  };

  return (
    <section id="stories" className="relative overflow-hidden bg-ink-800 py-24 text-cream-50 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#DDBF5C_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-5 lg:gap-20 lg:px-12">
        <div className="lg:col-span-2">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold-500">
                In motion
              </span>
            </div>
            <p className="mb-3 font-serif text-xl italic text-blush-300">A little glimpse</p>
            <h2 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-cream-50 sm:text-5xl">
              Love looks best
              <br />
              <span className="font-script text-5xl font-normal text-blush-500 sm:text-6xl">in motion.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream-50/65 sm:text-lg">
              Five-second glimpses from celebrations filled with warmth, movement, and the kind of
              details that make a day entirely yours.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <div className="mb-7 min-h-[146px]">
              <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.24em] text-gold-500">
                {story.eyebrow}
              </p>
              <h3 className="font-serif text-3xl font-semibold text-cream-50 sm:text-4xl">{story.title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-cream-50/60">{story.description}</p>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => showStory(currentStory - 1)}
                aria-label="Previous video story"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/25 text-cream-50 transition-colors hover:border-blush-300 hover:text-blush-300"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => showStory(currentStory + 1)}
                aria-label="Next video story"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-blush-400 text-white transition-colors hover:bg-blush-500"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="ml-2 font-sans text-xs tracking-[0.2em] text-cream-50/45">
                0{currentStory + 1} / 0{VIDEO_STORIES.length}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal x={40} className="lg:col-span-3">
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute -inset-3 rounded-[2rem] border border-gold-300/50" />
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-ink-900 shadow-2xl shadow-black/30">
              <motion.video
                key={story.video}
                initial={{ opacity: 0.35, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full object-cover"
                src={story.video}
                poster={story.poster}
                autoPlay
                muted
                loop
                playsInline
                onTimeUpdate={(event) => {
                  if (event.currentTarget.currentTime >= 4) {
                    event.currentTarget.currentTime = 0;
                  }
                }}
                aria-label={`${story.title} video story`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/45 via-transparent to-ink-900/10" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}