import { motion } from 'framer-motion';
import { categories } from '../data/menuData';

const CategoryTabs = ({ active, onChange }) => {
  return (
    <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto flex-nowrap pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
      {categories.map((cat) => (
        <motion.button
          key={cat.id}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange(cat.id)}
          className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
            active === cat.id
              ? 'bg-coffee text-cream shadow-lg'
              : 'bg-cream text-coffee-light/70 hover:text-coffee border border-coffee/10'
          }`}
          id={`category-${cat.id}`}
        >
          {cat.label}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryTabs;