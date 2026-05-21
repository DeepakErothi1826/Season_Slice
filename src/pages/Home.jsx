import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, Star, ArrowRight, Cake, Cookie, Coffee, Heart } from 'lucide-react';
import { contactInfo } from '../data/contactData';
import Marquee from '../components/Marquee';
import Newsletter from '../components/Newsletter';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../data/menuData';

const Home = () => {
  const popular = menuItems.filter((i) => i.popular);

  return (
    <>
      <Helmet>
        <title>Season Slice — Cake & Coffee | Home</title>
        <meta name="description" content="Season Slice — Premium cakes and artisan coffee with seasonal flavors." />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-20 sm:pt-28 pb-10 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-rose/5 to-gold/10" />
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 md:w-96 md:h-96 bg-gold/20 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 md:w-[500px] md:h-[500px] bg-rose/10 rounded-full blur-2xl sm:blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-body text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 font-bold">Est. 2012 · Mumbai</p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-coffee leading-[1.1] mb-4 sm:mb-6">
              Every Slice,<br /><span className="italic text-gold">A Masterpiece</span>
            </h1>
            <p className="text-coffee-light/70 font-body text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10 px-4">
              We believe in the art of baking — where passion meets precision, and every creation tells a story.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/menu" className="bg-gradient-to-r from-gold to-amber-400 text-coffee px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider hover:shadow-lg hover:scale-105 transition-all shadow-md font-bold inline-flex items-center gap-2">
                View Menu <ArrowRight size={14} sm:size={16} />
              </Link>
              <Link to="/contact" className="bg-white text-coffee px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-cream transition-colors shadow-md border-2 border-coffee/10 font-bold inline-flex items-center gap-2">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee text="NEW FLAVORS EVERY MONTH" repeat={8} className="bg-gradient-to-r from-coffee via-coffee-light to-coffee py-4" textColor="text-cream" />

      {/* Categories */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-cream-light">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <p className="text-gold/80 text-xs uppercase tracking-[0.3em] mb-4 font-bold">Browse</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-coffee">Our Categories</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { title: 'Cakes', desc: 'Fresh baked daily', image: '/category-cakes.jpg', link: '/menu' },
              { title: 'Cold Brews', desc: 'Refreshing drinks', image: '/category-coldbrew.jpg', link: '/menu' },
              { title: 'Cookies', desc: 'Sweet treats', image: '/category-cookies.jpg', link: '/menu' },
              { title: 'Seasonal', desc: 'Limited edition', image: '/category-seasonal.jpg', link: '/menu' },
            ].map((cat, i) => (
              <Link to={cat.link} key={cat.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-100"
                >
                  <div className="aspect-square sm:aspect-[4/3] md:aspect-square bg-gradient-to-br from-cream-light to-rose-50 flex items-center justify-center overflow-hidden">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="p-3 sm:p-4 text-center">
                    <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-coffee mb-1">{cat.title}</h3>
                    <p className="text-coffee-light/60 text-xs sm:text-sm">{cat.desc}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-cream-light via-white to-rose-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <p className="text-gold/80 text-xs uppercase tracking-[0.3em] mb-4 font-bold">Best Sellers</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-coffee">Popular Items</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {popular.slice(0, 8).map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className="inline-flex items-center gap-2 text-gold font-display font-bold hover:text-coffee transition-colors text-lg">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Season Special */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold/80 text-xs uppercase tracking-[0.3em] mb-4 font-bold">Limited Time</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-coffee">Season Special</h2>
            <p className="text-coffee-light/60 mt-4 max-w-xl mx-auto">Fresh mango treats available this season!</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {menuItems.filter(i => i.seasonal || i.category === 'mango').slice(0, 4).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all border border-amber-100"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <h3 className="font-display text-base font-bold text-coffee mb-2">{item.name}</h3>
                <span className="font-display text-2xl text-gradient font-bold bg-gradient-to-r from-gold to-amber-500 bg-clip-text">{item.price} Rs</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-32 bg-gradient-to-br from-coffee via-coffee to-coffee-light relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-cream leading-[1.1] mb-8"
          >
            Unmatched<br />
            <span className="italic text-gold">Freshness</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-body text-cream/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8"
          >
            Quality ingredients, master bakers, passion for perfection.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link to="/about" className="inline-flex items-center gap-2 bg-gold text-coffee px-8 py-4 rounded-full font-display font-bold hover:bg-amber-400 transition-colors shadow-lg">
              Our Story <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-rose-50 via-white to-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '24+', label: 'Flavors Yearly', color: 'text-gold' },
              { num: '50K+', label: 'Happy Customers', color: 'text-rose' },
              { num: '12', label: 'Years of Craft', color: 'text-emerald' },
              { num: '100%', label: 'Fresh Daily', color: 'text-amber' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className={`font-display text-4xl sm:text-5xl font-bold ${stat.color} mb-2`}>{stat.num}</p>
                <p className="font-body text-xs uppercase tracking-widest text-coffee-light/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-b from-cream-light to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold/80 text-xs uppercase tracking-[0.3em] mb-4 font-bold">Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-coffee">What Customers Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Priya S.', text: 'Best cake shop in Chembur! The mango cake is absolutely divine.', rating: 5, color: 'from-rose-400 to-pink-500' },
              { name: 'Rahul M.', text: 'Fresh, delicious, and beautifully decorated. Perfect for birthdays.', rating: 5, color: 'from-gold to-amber-500' },
              { name: 'Anita K.', text: 'The seasonal flavors are amazing. Every month there is something new.', rating: 5, color: 'from-emerald-400 to-teal-500' },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${review.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold">{review.name[0]}</span>
                </div>
                <div className="flex items-center gap-1 mb-4 justify-center">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-coffee-light/70 font-body mb-6 leading-relaxed text-center">"{review.text}"</p>
                <p className="font-display font-bold text-coffee text-center">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-24 bg-gradient-to-b from-coffee to-coffee-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mb-6 font-bold">Visit</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-8">
                Come Experience Us
              </h2>
              <p className="font-body text-cream/60 text-base leading-relaxed mb-10">
                Step into our bakery and experience the aroma of freshly baked cakes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <p className="font-body text-cream/70 text-sm">{contactInfo.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <p className="font-body text-cream/70 text-sm">{contactInfo.phones.join(' | ')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <p className="font-body text-cream/70 text-sm">Mon-Sat: 9AM-9PM | Sun: 10AM-8PM</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gold/20 to-rose/20 flex items-center justify-center shadow-2xl border-2 border-gold/20">
                <span className="text-8xl">🏪</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default Home;