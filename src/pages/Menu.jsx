import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import CategoryTabs from '../components/CategoryTabs';
import MenuCard from '../components/MenuCard';
import ScrollReveal from '../components/ScrollReveal';
import { menuItems } from '../data/menuData';

const MenuPage = () => {
  const [active, setActive] = useState('all');

  const filtered = useMemo(() => {
    if (active === 'all') return menuItems;
    if (active === 'seasonal') return menuItems.filter((i) => i.seasonal);
    return menuItems.filter((i) => i.category === active);
  }, [active]);

  return (
    <>
       <Helmet>
         <title>Season Slice Cafe Menu | Artisan Cakes & Specialty Coffee</title>
         <meta name="description" content="Explore Season Slice Cafe's full menu featuring handcrafted cakes, specialty coffee, breakfast items, and seasonal desserts." />
         {/* Restaurant Schema for Menu Page */}
         <script type="application/ld+json">
           {JSON.stringify({
             "@context": "https://schema.org",
             "@type": "Restaurant",
             "name": "Season Slice Cafe",
             "image": "https://www.seasonslice.com/assets/cake-blueberry.png",
             "menu": "https://www.seasonslice.com/menu",
             "servesCuisine": [
               "Coffee Shop",
               "Bakery",
               "Desserts",
               "Breakfast & Brunch"
             ],
             "priceRange": "$$"
           })}
         </script>
       </Helmet>

      {/* Header */}
      <section className="pt-20 sm:pt-28 pb-6 sm:pb-10 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-rose/5 to-gold/10" />
        <div className="absolute top-10 sm:top-20 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-gold/20 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-rose/20 rounded-full blur-2xl sm:blur-3xl" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-gold font-body text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3 font-bold">Explore</p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-coffee mb-2 sm:mb-4">Our Menu</h1>
            <p className="text-coffee-light/70 font-body text-sm sm:text-base max-w-xl mx-auto px-4">Handcrafted cakes and desserts — find your perfect match.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 py-6 sm:py-8 max-w-7xl mx-auto">
        <ScrollReveal delay={0.1}>
          <CategoryTabs active={active} onChange={setActive} />
        </ScrollReveal>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-20 pt-2 sm:pt-4 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
        {filtered.length === 0 && (
          <div className="text-center py-16 sm:py-20">
            <p className="font-display text-lg sm:text-xl text-coffee-light">No items found in this category.</p>
          </div>
        )}
      </section>
    </>
  );
};

export default MenuPage;