import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import useCartStore from '../store/cartStore';

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();

  const handleCheckout = () => {
    alert('Checkout feature coming soon! Your order total is ' + subtotal + ' Rs');
  };
  const subtotal = items.reduce((t, i) => t + i.price * i.quantity, 0);
  const totalItems = items.reduce((t, i) => t + i.quantity, 0);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/menu" className="inline-flex items-center gap-2 text-coffee-light hover:text-coffee mb-8 font-body text-sm">
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>

          <div className="flex items-center gap-3 mb-10">
            <ShoppingBag size={28} className="text-coffee" />
            <h1 className="font-display text-4xl font-bold text-coffee">Your Cart</h1>
            <span className="bg-gold text-coffee text-sm font-body font-bold px-3 py-1 rounded-full">{totalItems} items</span>
          </div>

          {items.length === 0 ? (
            <div className="bg-white rounded-2xl p-16 text-center shadow-sm">
              <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag size={40} className="text-coffee-light/40" />
              </div>
              <h2 className="font-display text-2xl text-coffee mb-3">Your cart is empty</h2>
              <p className="text-coffee-light/60 font-body mb-8">Add some delicious items from our menu!</p>
              <Link to="/menu" className="bg-coffee text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-coffee-light transition-colors inline-block shadow-md">
                Browse Menu
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-6 bg-white rounded-2xl p-6 shadow-sm"
                  >
<div className="w-24 h-24 bg-cream rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                       <img src={item.image} alt={item.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-coffee text-lg mb-1">{item.name}</h3>
                      <p className="text-coffee-light/60 text-sm font-body mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-cream rounded-full px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-coffee shadow-sm hover:bg-cream-light transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-body font-bold text-coffee w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-coffee shadow-sm hover:bg-cream-light transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-display text-xl font-bold text-coffee">{item.price} Rs</span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 rounded-full hover:bg-rose/20 text-rose transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-coffee rounded-2xl p-8 text-cream shadow-lg">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between font-body">
                    <span className="text-cream/60">Subtotal</span>
                    <span>{subtotal} Rs</span>
                  </div>
                  <div className="flex justify-between font-body">
                    <span className="text-cream/60">Delivery</span>
                    <span className="text-gold">Free</span>
                  </div>
                  <div className="h-px bg-cream/20" />
                  <div className="flex justify-between">
                    <span className="font-display text-xl font-bold">Total</span>
                    <span className="font-display text-2xl font-bold text-gold">{subtotal} Rs</span>
                  </div>
                </div>
                <button onClick={handleCheckout} className="w-full bg-gold text-coffee font-display font-bold py-4 rounded-xl hover:bg-gold/90 transition-colors text-lg shadow-md">
                  Proceed to Checkout
                </button>
                <button onClick={clearCart} className="w-full text-center text-sm font-body text-cream/40 hover:text-cream/60 mt-4 transition-colors">
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CartPage;