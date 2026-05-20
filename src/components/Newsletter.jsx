import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail size={28} className="text-gold" />
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-coffee mb-3">Stay Updated</h3>
          <p className="text-coffee-light/60 text-base mb-8">Exclusive offers and seasonal updates.</p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-gold"
            >
              <Check size={24} />
              <span className="font-display text-lg">Thank you for subscribing!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-cream rounded-full text-coffee placeholder:text-coffee-light/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-coffee text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-coffee-light transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={16} />
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;