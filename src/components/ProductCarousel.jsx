import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingBag, Star } from 'lucide-react';
import useCartStore from '../store/cartStore';

const ProductCarousel = ({ items, title = null }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { addItem } = useCartStore();

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    setTimeout(checkScroll, 400);
  };

  return (
    <div className="relative">
      {title && (
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-coffee">{title}</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} disabled={!canScrollLeft} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${canScrollLeft ? 'border border-coffee/20 text-coffee hover:bg-coffee hover:text-cream' : 'border border-coffee/10 text-coffee/30 cursor-not-allowed'}`}>
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => scroll(1)} disabled={!canScrollRight} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${canScrollRight ? 'border border-coffee/20 text-coffee hover:bg-coffee hover:text-cream' : 'border border-coffee/10 text-coffee/30 cursor-not-allowed'}`}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      <div ref={scrollRef} onScroll={checkScroll} className="flex gap-5 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            className="snap-start flex-shrink-0 w-[220px] sm:w-[260px] bg-cream rounded-xl overflow-hidden group hover:shadow-xl transition-shadow duration-500"
          >
            <div className="relative h-40 bg-gradient-to-br from-gold/5 to-rose/5 overflow-hidden flex items-center justify-center">
               <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <span className="absolute text-4xl opacity-30 pointer-events-none">🎂</span>
              {item.popular && (
                <span className="absolute top-3 left-3 text-[9px] uppercase tracking-wider bg-gold/90 text-coffee px-2 py-1 rounded-full font-medium">Popular</span>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={9} className={i < Math.floor(item.rating) ? 'fill-gold text-gold' : 'text-cream-dark/30'} />
                ))}
              </div>
              <h3 className="font-display font-bold text-coffee text-base mb-1">{item.name}</h3>
              <p className="text-coffee-light/50 text-xs line-clamp-2 mb-4">{item.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-coffee/5">
                <span className="font-display text-xl font-bold text-coffee/80">{String(item.price).replace('.', '')} Rs</span>
                <button onClick={() => addItem(item)} className="flex items-center gap-1.5 bg-coffee text-cream px-4 py-2 rounded-full text-[10px] font-medium uppercase tracking-wider hover:bg-coffee-light transition-colors">
                  <ShoppingBag size={11} /> Add
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;