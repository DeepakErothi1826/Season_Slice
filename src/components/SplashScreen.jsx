import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../images/logo/Season Slice Logo.png';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-cream z-[100] flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-32 h-32 mx-auto mb-6"
        >
          <img src={logoImg} alt="Season Slice" className="w-full h-full object-contain" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h1 className="font-display text-3xl font-bold text-coffee mb-2">Season Slice</h1>
          <p className="text-coffee-light text-sm tracking-widest uppercase">Cake & Coffee</p>
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-1 bg-gold rounded-full mx-auto mt-8"
        />
      </div>
    </motion.div>
  );
};

export default SplashScreen;