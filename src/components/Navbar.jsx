import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import useCartStore from '../store/cartStore';
import logoImg from '../../images/logo/Season Slice Logo.png';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/menu', label: 'Menu' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { items } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-amber-400 p-1 shadow-lg group-hover:shadow-xl transition-shadow">
                <img 
                  src={logoImg} 
                  alt="Season Slice Logo" 
                  className="w-full h-full rounded-full object-contain bg-white"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display text-coffee text-lg font-bold leading-tight tracking-wide">
                  Season Slice
                </h1>
                <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-body font-bold">
                  Cake & Coffee
                </p>
              </div>
            </Link>

<div className="hidden md:flex items-center bg-gradient-to-r from-cream-light to-white rounded-full px-2 py-1.5 shadow-md border border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 select-none ${location.pathname === link.path ? 'bg-coffee text-cream shadow-md' : 'text-coffee hover:text-gold'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                id="cart-button"
                onClick={() => navigate('/cart')}
                className="relative p-2.5 rounded-full bg-gradient-to-r from-gold/20 to-amber-100 hover:from-gold/30 hover:to-amber-200 text-coffee transition-all duration-300 hover:scale-105 shadow-md"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-gold to-amber-400 text-coffee text-[11px] font-bold rounded-full flex items-center justify-center shadow-lg"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button>

              <button
                id="mobile-menu-button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2.5 rounded-full bg-gradient-to-r from-cream to-white text-coffee hover:from-cream-light transition-all duration-300 shadow-md border border-gray-100"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] md:hidden"
          >
            <div className="absolute inset-0 bg-coffee/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-64 sm:w-72 bg-white shadow-2xl overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <h2 className="font-display text-lg font-bold text-coffee">Menu</h2>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-full hover:bg-cream">
                  <X size={20} />
                </button>
              </div>
              <div className="p-4 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-body font-medium transition-all duration-300 ${
                        location.pathname === link.path
                          ? 'bg-coffee text-cream shadow-lg'
                          : 'text-coffee hover:bg-cream border border-gray-100'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;