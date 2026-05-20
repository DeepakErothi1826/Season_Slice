import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress from 0 to 100
    const duration = 2800;
    const interval = 30;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out curve for progress
      const t = step / steps;
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (step >= steps) {
        clearInterval(timer);
        setTimeout(() => onComplete(), 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 bg-cream z-[100] flex items-center justify-center overflow-hidden"
    >
      {/* Decorative background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold rounded-full"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-coffee rounded-full"
        />
      </div>

      <div className="text-center relative z-10">
        {/* Logo Icon with reveal */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative mx-auto mb-8"
        >
          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="w-28 h-28 mx-auto"
          >
            <svg viewBox="0 0 120 120" className="w-full h-full">
              <circle
                cx="60" cy="60" r="56"
                fill="none"
                stroke="#C8A96E"
                strokeWidth="1"
                strokeDasharray="8 6"
                opacity="0.4"
              />
            </svg>
          </motion.div>

          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              src="/images/logo/Season Slice Logo.png"
              alt="Season Slice Logo"
              className="w-20 h-20 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="w-20 h-20 rounded-full bg-coffee flex items-center justify-center shadow-lg shadow-coffee/30"
              style={{ display: 'none' }}
            >
              <span className="text-cream font-display font-bold text-3xl">S</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Brand name with stagger */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: 60 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
            className="font-display text-4xl sm:text-5xl font-bold text-coffee tracking-wide"
          >
            Season Slice
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: 'easeOut' }}
            className="text-coffee-light/60 text-xs tracking-[0.35em] uppercase font-body"
          >
            Cake & Coffee
          </motion.p>
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="mx-auto"
        >
          <div className="h-[2px] bg-coffee/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold via-caramel to-gold rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-coffee-light/40 text-[10px] font-body mt-3 tracking-widest"
          >
            {progress < 100 ? 'LOADING EXPERIENCE...' : 'WELCOME'}
          </motion.p>
        </motion.div>

        {/* Floating dots decoration */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0.5],
              y: [0, -60 - i * 15],
              x: [(i - 3) * 20, (i - 3) * 35],
            }}
            transition={{
              delay: 1 + i * 0.15,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-gold rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SplashScreen;