import { Link } from 'react-router-dom';
import { Heart, MapPin, Mail, Phone } from 'lucide-react';
import { contactInfo } from '../data/contactData';
import logoImg from '../../images/logo/Season Slice Logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-coffee via-coffee to-coffee-light text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 sm:gap-10">
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white p-1 shadow-lg flex-shrink-0">
                <img src={logoImg} alt="Season Slice" className="w-full h-full rounded-full object-contain" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-cream">Season Slice</h3>
                <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-body font-bold">Cake & Coffee</p>
              </div>
            </div>
            <p className="text-cream/60 text-xs sm:text-sm font-body leading-relaxed max-w-xs mx-auto md:mx-0">12 Months. 24 New Reasons. Two new flavors, every month.</p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold text-cream mb-3 md:mb-4 text-sm sm:text-lg">Quick Links</h4>
            <ul className="flex flex-row flex-wrap justify-center md:flex-col gap-x-4 gap-y-2 md:gap-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/menu', label: 'Menu' },
                { to: '/contact', label: 'Contact' },
                { to: '/cart', label: 'Cart' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-cream/60 text-xs sm:text-sm font-body hover:text-gold transition-colors inline-flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-gold rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold text-cream mb-3 md:mb-4 text-sm sm:text-lg">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 max-w-xs mx-auto md:mx-0">
              <li className="flex items-start md:items-center gap-2.5 text-xs sm:text-sm font-body text-cream/60">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 md:mt-0 text-gold" />
                <span className="break-words">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs sm:text-sm font-body text-cream/60">
                <Mail size={14} className="flex-shrink-0 text-gold" />
                <span className="break-all">{contactInfo.email}</span>
              </li>
              {contactInfo.phones.map((phone, i) => (
                <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-body text-cream/60">
                  <Phone size={14} className="flex-shrink-0 text-gold" />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/40 text-[10px] sm:text-xs font-body">© 2026 Season Slice. All rights reserved.</p>
          <p className="text-cream/40 text-[10px] sm:text-xs font-body flex items-center gap-1">Made with <Heart size={10} className="text-rose fill-rose" /> and coffee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;