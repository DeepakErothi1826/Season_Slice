import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, ShoppingBag, Heart, Check } from 'lucide-react';
import { menuItems } from '../data/menuData';
import useCartStore from '../store/cartStore';

const allItems = menuItems;

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);
  const { addItem } = useCartStore();
  
  const item = allItems.find((i) => i.id === parseInt(id));

  const handleLike = async () => {
    if (likeLoading) return;
    setLikeLoading(true);
    await new Promise(resolve => setTimeout(resolve, 600));
    setIsLiked(!isLiked);
    setLikeLoading(false);
  };

  if (!item) {
    return (
      <div className="pt-28 pb-20 px-6 text-center">
        <h1 className="text-2xl font-display font-bold text-coffee mb-4">Product Not Found</h1>
        <Link to="/menu" className="text-gold hover:underline">Back to Menu</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(item);
    navigate('/cart');
  };

  const relatedItems = allItems.filter((i) => i.category === item.category && i.id !== item.id).slice(0, 4);

  return (
    <>
       <Helmet>
          <title>{item.name} | Season Slice Cafe</title>
          <meta name="description" content={`Discover ${item.name} at Season Slice Cafe - ${item.description}`} />
          <link rel="canonical" href={`https://www.seasonslice.com/product/${item.id}`} />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.seasonslice.com/" },
                { "@type": "ListItem", "position": 2, "name": "Menu", "item": "https://www.seasonslice.com/menu" },
                { "@type": "ListItem", "position": 3, "name": item.name, "item": `https://www.seasonslice.com/product/${item.id}` }
              ]
            })}
          </script>
          {/* Product Schema for Product Detail Page */}
         <script type="application/ld+json">
           {JSON.stringify({
             "@context": "https://schema.org",
             "@type": "Product",
             "name": item.name,
             "image": item.image,
             "description": item.description,
             "brand": {
               "@type": "Brand",
               "name": "Season Slice Cafe"
             },
             "offers": {
               "@type": "Offer",
               "url": `https://www.seasonslice.com/product/${item.id}`,
               "priceCurrency": "INR",
                "price": item.price,
               "itemCondition": "https://schema.org/NewCondition",
               "availability": "https://schema.org/InStock"
             }
           })}
         </script>
       </Helmet>

      <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-white via-cream-light to-white">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => navigate('/menu')} className="inline-flex items-center gap-2 bg-gradient-to-r from-gold/20 to-amber-100 text-coffee px-6 py-3 rounded-full hover:from-gold/30 hover:to-amber-200 transition-colors shadow-md mb-8 font-body text-sm font-medium border border-gold/20">
            <ArrowLeft size={16} />
            Back to Menu
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cream-light via-rose-50 to-gold/20 rounded-3xl p-4 sm:p-8 md:p-12 flex items-center justify-center shadow-2xl border border-gold/10">
                 <div className="w-full aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-gray-100 overflow-hidden">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
                 </div>
              </div>
              {item.seasonal && (
                <div className="absolute top-6 left-6 bg-gradient-to-r from-gold to-amber-400 text-coffee px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  <Check size={12} className="inline mr-1" />
                  Seasonal
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <p className="text-gold text-sm uppercase tracking-widest mb-2 font-bold">{item.category}</p>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-coffee mb-4">{item.name}</h1>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={i < Math.floor(item.rating) ? 'fill-gold text-gold' : 'text-gray-300'} />
                  ))}
                </div>
                <span className="text-coffee-light/60 font-body font-medium">{item.rating} rating</span>
              </div>

              <p className="text-4xl font-display font-bold bg-gradient-to-r from-gold to-amber-500 bg-clip-text text-transparent mb-6">{String(item.price).replace('.', '')} Rs</p>

              <p className="text-coffee-light/70 font-body text-base leading-relaxed mb-8">
                {item.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-coffee to-coffee-light text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider hover:from-coffee-light hover:to-coffee transition-colors shadow-lg flex items-center justify-center gap-3 font-bold"
                >
                  <ShoppingBag size={18} />
                  Add to Cart
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={handleLike}
                  disabled={likeLoading}
                  className={`p-4 rounded-full transition-all shadow-md ${
                    isLiked 
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white' 
                      : 'bg-gradient-to-r from-rose-100 to-pink-100 hover:from-rose-200 hover:to-pink-200 text-rose'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {likeLoading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        style={{ animation: 'spin 0.6s linear infinite' }}
                      />
                    ) : (
                      <motion.div
                        key="heart"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                      >
                        <Heart 
                          size={20} 
                          className={isLiked ? 'fill-white' : ''}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>

              <div className="bg-gradient-to-r from-cream-light to-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-display font-bold text-coffee mb-4 text-lg">Product Details</h3>
                <div className="space-y-3 text-sm font-body">
                  <div className="flex justify-between">
                    <span className="text-coffee-light/60">Category</span>
                    <span className="text-coffee font-bold capitalize">{item.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-coffee-light/60">Freshness</span>
                    <span className="text-emerald font-bold">Baked Daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-coffee-light/60">Weight</span>
                    <span className="text-coffee font-bold">~500g</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {relatedItems.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-display font-bold text-coffee mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedItems.map((related) => (
                  <Link
                    key={related.id}
                    to={`/product/${related.id}`}
                    className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all text-center group border border-gray-100"
                  >
                    <div className="w-full aspect-square bg-gradient-to-br from-cream-light to-rose-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-inner">
                      <span className="text-4xl">🎂</span>
                    </div>
                    <h3 className="font-display font-bold text-coffee text-sm mb-2">{related.name}</h3>
                    <p className="font-display text-gold font-bold">{related.price} Rs</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;