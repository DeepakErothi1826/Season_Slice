import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const MenuCard = ({ item, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      {item.seasonal && (
        <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-gold to-amber-400 text-coffee px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-sm">
          Seasonal
        </div>
      )}

      <Link to={`/product/${item.id}`} className="block">
        <div className="relative h-32 sm:h-36 md:h-40 bg-gradient-to-br from-cream-light to-rose-50 overflow-hidden flex items-center justify-center">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>

        <div className="p-3 sm:p-4 select-none">
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={8} className={i < Math.floor(item.rating) ? 'fill-gold text-gold' : 'text-gray-300'} />
            ))}
            <span className="text-[9px] font-body text-coffee-light/50 ml-1">{item.rating}</span>
          </div>

          <h3 className="font-display font-bold text-coffee text-sm sm:text-base mb-1 leading-tight">{item.name}</h3>
          <p className="text-coffee-light/60 text-[10px] sm:text-xs font-body leading-relaxed line-clamp-2 mb-3">{item.description}</p>

          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <span className="font-display text-lg sm:text-xl font-bold bg-gradient-to-r from-gold to-amber-500 bg-clip-text text-transparent">{item.price} Rs</span>
            <span className="text-[10px] sm:text-xs text-gold font-medium uppercase tracking-wider group-hover:text-coffee transition-colors font-bold">
              View
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MenuCard;