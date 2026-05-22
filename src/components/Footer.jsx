import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Mail, Phone } from 'lucide-react';
import { contactInfo } from '../data/contactData';
import logoImg from '../../images/logo/Season Slice Logo.png';

const Footer = memo(() => {
  return (
    <footer className="bg-gradient-to-br from-coffee via-coffee to-coffee-light text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white p-1 shadow-lg">
                <img src={logoImg} alt="Season Slice" className="w-full h-full rounded-full object-contain" loading="lazy" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-cream">Season Slice</h3>
                <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-body font-bold">Cake & Coffee</p>
              </div>
            </div>
            <p className="text-cream/60 text-sm font-body leading-relaxed">12 Months. 24 New Reasons. Two new flavors, every month.</p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold text-cream mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/menu', label: 'Menu' },
                { to: '/contact', label: 'Contact' },
                { to: '/cart', label: 'Cart' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-cream/60 text-sm font-body hover:text-gold transition-colors inline-flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold text-cream mb-4 text-base sm:text-lg">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start md:items-center gap-3 text-sm font-body text-cream/60">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 md:mt-0 text-gold" />
                <span className="text-xs sm:text-sm">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-body text-cream/60">
                <Mail size={16} className="flex-shrink-0 text-gold" />
                <span className="text-xs sm:text-sm">{contactInfo.email}</span>
              </li>
              {contactInfo.phones.map((phone, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-body text-cream/60">
                  <Phone size={16} className="flex-shrink-0 text-gold" />
                  <span className="text-xs sm:text-sm">{phone}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs font-body">© 2026 Season Slice. All rights reserved.</p>
          <p className="text-cream/40 text-xs font-body flex items-center gap-1">Made with <Heart size={12} className="text-rose fill-rose" /> and coffee</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;