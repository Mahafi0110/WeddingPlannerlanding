import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { CONTACT } from '@/data/content';

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: 'Phone',
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
  },
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: CONTACT.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`,
  },
];

const HOURS = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
  { day: 'Sunday', time: 'By Appointment' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative bg-blush-50/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="font-sans text-xs tracking-[0.3em] text-gold-500 uppercase font-500">
              Contact Us
            </span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-serif font-600 text-ink-800 text-4xl sm:text-5xl tracking-tight leading-[1.1]">
            Begin Your{' '}
            <span className="font-script text-blush-500 text-5xl sm:text-6xl">Journey</span> With Us
          </h2>
          <p className="mt-5 text-ink-700/60 text-lg leading-relaxed">
            Tell us about your dream wedding and we&apos;ll be in touch within 24 hours.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Contact info */}
          <div>
            <Stagger className="space-y-4" stagger={0.1}>
              {CONTACT_ITEMS.map((item) => (
                <StaggerItem key={item.label}>
                  <motion.a
                    href={item.href}
                    target={item.label === 'Address' ? '_blank' : undefined}
                    rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="group flex items-center gap-5 bg-white border border-blush-100 hover:border-blush-300 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-blush-100 group-hover:bg-blush-400 rounded-full transition-colors duration-300">
                      <item.icon className="h-5 w-5 text-blush-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.6} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-ink-700/50 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-serif font-600 text-ink-800 text-sm">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Hours */}
            <Reveal delay={0.3} className="mt-6 bg-white border border-blush-100 p-6 rounded-2xl shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-blush-500" strokeWidth={1.6} />
                <h3 className="font-serif font-600 text-ink-800 tracking-tight">Working Hours</h3>
              </div>
              <div className="space-y-3">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-ink-700/60">{h.day}</span>
                    <span className="text-ink-800 font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <Reveal x={40}>
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-blush-100 rounded-2xl p-8 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-ink-700/70 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full bg-cream-50 border border-blush-100 rounded-xl px-4 py-3 text-sm text-ink-800 placeholder:text-ink-700/30 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-200/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700/70 mb-2">
                    Partner&apos;s Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full bg-cream-50 border border-blush-100 rounded-xl px-4 py-3 text-sm text-ink-800 placeholder:text-ink-700/30 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-200/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700/70 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@email.com"
                    className="w-full bg-cream-50 border border-blush-100 rounded-xl px-4 py-3 text-sm text-ink-800 placeholder:text-ink-700/30 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-200/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700/70 mb-2">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-cream-50 border border-blush-100 rounded-xl px-4 py-3 text-sm text-ink-800 placeholder:text-ink-700/30 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-200/50 transition-all"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-ink-700/70 mb-2">
                  Tell Us About Your Dream Wedding
                </label>
                <textarea
                  rows={4}
                  placeholder="We envision a garden ceremony with..."
                  className="w-full bg-cream-50 border border-blush-100 rounded-xl px-4 py-3 text-sm text-ink-800 placeholder:text-ink-700/30 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-200/50 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group mt-6 w-full inline-flex items-center justify-center gap-2.5 font-semibold px-7 py-4 rounded-full transition-all duration-300 ${
                  submitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-blush-400 to-blush-500 hover:from-blush-500 hover:to-blush-600 text-white hover:shadow-[0_8px_32px_rgba(255,107,149,0.4)]'
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" strokeWidth={1.8} />
                    Send Inquiry
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
