import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../store/cartStore';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart } = useCartStore();
  const navigate = useNavigate();
  const subtotal = items.reduce((t, i) => t + i.price * i.quantity, 0);
  const totalItems = items.reduce((t, i) => t + i.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-coffee/40 backdrop-blur-sm z-50" onClick={closeCart} />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-cream z-50 shadow-2xl flex flex-col"
            id="cart-drawer"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-coffee/10">
              <div className="flex items-center gap-3">
                <ShoppingBag size={22} className="text-coffee" />
                <h2 className="font-display text-xl font-bold text-coffee">Your Cart</h2>
                <span className="bg-gold text-coffee text-xs font-body font-bold px-2.5 py-0.5 rounded-full">{totalItems}</span>
              </div>
              <button onClick={closeCart} className="p-3 rounded-full hover:bg-cream-dark transition-colors text-coffee" id="close-cart">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="w-20 h-20 bg-cream-dark rounded-full flex items-center justify-center">
                    <ShoppingBag size={32} className="text-coffee-light/40" />
                  </div>
                  <p className="font-display text-lg text-coffee-light">Your cart is empty</p>
                  <p className="text-sm text-coffee-light/60 font-body">Add some delicious items!</p>
                  <button onClick={() => { closeCart(); navigate('/menu'); }} className="btn-primary text-sm mt-2">Browse Menu</button>
                </div>
              ) : (
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30, height: 0, marginBottom: 0 }}
                      className="flex gap-4 bg-white rounded-xl p-3 shadow-sm"
                    >
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-semibold text-coffee text-sm truncate">{item.name}</h4>
                        <p className="text-coffee-light/60 text-xs font-body mt-0.5">{item.price} Rs each</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2 bg-cream-dark rounded-full px-1 py-0.5">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-cream transition-colors text-coffee">
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-body font-semibold text-coffee w-6 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-cream transition-colors text-coffee">
                              <Plus size={14} />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-display font-bold text-coffee">{item.price * item.quantity} Rs</span>
                            <button onClick={() => removeItem(item.id)} className="p-1.5 rounded-full hover:bg-rose/20 text-rose transition-colors">
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-coffee/10 p-6 space-y-4 bg-cream-light">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-body text-coffee-light">
                    <span>Subtotal</span><span>{subtotal} Rs</span>
                  </div>
                  <div className="flex justify-between text-sm font-body text-coffee-light">
                    <span>Delivery</span><span>Free</span>
                  </div>
                  <div className="h-px bg-coffee/10" />
                  <div className="flex justify-between">
                    <span className="font-display font-bold text-coffee text-lg">Total</span>
                    <span className="font-display font-bold text-coffee text-lg">{subtotal} Rs</span>
                  </div>
                </div>
                <button onClick={() => { closeCart(); navigate('/cart'); }} className="btn-gold w-full text-center text-base" id="checkout-button">Proceed to Checkout</button>
                <button onClick={clearCart} className="w-full text-center text-sm font-body text-coffee-light hover:text-rose transition-colors">Clear Cart</button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
