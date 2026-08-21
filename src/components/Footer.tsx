import { Heart, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { CONTACT } from '@/data/content';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const SERVICE_LINKS = [
  'Wedding Planning',
  'Decoration & Styling',
  'Venue Selection',
  'Floral Design',
  'Coordination',
];

export default function Footer() {
  return (
    <footer className="relative bg-ink-800 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <div className="flex h-11 w-11 items-center justify-center bg-gradient-to-br from-blush-300 to-blush-500 rounded-full">
                <Heart className="h-5 w-5 text-white fill-white" strokeWidth={0} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif font-600 text-cream-50 text-xl tracking-tight">
                  Élysée
                </span>
                <span className="font-sans text-[10px] tracking-[0.3em] text-gold-300 uppercase">
                  Weddings
                </span>
              </div>
            </a>
            <p className="text-sm text-cream-50/50 leading-relaxed max-w-xs">
              Crafting timeless celebrations that tell your unique love story — from the first
              rose petal to the last dance.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Heart].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center bg-ink-700 hover:bg-blush-500 text-cream-50/60 hover:text-white rounded-full transition-colors duration-300"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif font-600 text-cream-50 text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-50/50 hover:text-blush-300 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-600 text-cream-50 text-sm uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-cream-50/50 hover:text-blush-300 transition-colors duration-300"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-600 text-cream-50 text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-blush-300 mt-0.5 shrink-0" />
                <a href={CONTACT.phoneHref} className="text-sm text-cream-50/50 hover:text-blush-300 transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-blush-300 mt-0.5 shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="text-sm text-cream-50/50 hover:text-blush-300 transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blush-300 mt-0.5 shrink-0" />
                <span className="text-sm text-cream-50/50">{CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-cream-50/10">
          <p className="text-xs text-cream-50/40">
            &copy; {new Date().getFullYear()} Élysée Weddings. Made with love.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-cream-50/40 hover:text-blush-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-cream-50/40 hover:text-blush-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
