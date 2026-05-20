import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const MenuCard = ({ item, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
    >
      {item.seasonal && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-gradient-to-r from-gold to-amber-400 text-coffee px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
          Seasonal
        </div>
      )}

      <Link to={`/product/${item.id}`} className="block">
        <div className="relative h-40 bg-gradient-to-br from-cream-light to-rose-50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-rose/10 flex items-center justify-center">
            <span className="text-5xl">🎂</span>
          </div>
        </div>

        <div className="p-5 select-none">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className={i < Math.floor(item.rating) ? 'fill-gold text-gold' : 'text-gray-300'} />
            ))}
            <span className="text-[10px] font-body text-coffee-light/50 ml-1">{item.rating}</span>
          </div>

          <h3 className="font-display font-bold text-coffee text-base mb-1">{item.name}</h3>
          <p className="text-coffee-light/60 text-xs font-body leading-relaxed line-clamp-2 mb-4">{item.description}</p>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <span className="font-display text-xl font-bold bg-gradient-to-r from-gold to-amber-500 bg-clip-text text-transparent">{item.price} Rs</span>
            <span className="text-xs text-gold font-medium uppercase tracking-wider group-hover:text-coffee transition-colors font-bold">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MenuCard;