import { useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import logoImg from '../assets/Seasonslice_logo_small.webp';

const balloonColors = [
  'bg-gold/40',
  'bg-rose/30',
  'bg-coffee-light/35',
  'bg-amber-400/30',
  'bg-gold/35',
  'bg-rose/25',
  'bg-coffee/20',
  'bg-gold/45',
  'bg-amber-200/40',
  'bg-coffee-light/30',
];

const SplashScreen = ({ onComplete }) => {
  const progressValue = useMotionValue(0);
  const smoothProgress = useSpring(progressValue, { stiffness: 40, damping: 25 });
  const progressWidth = useTransform(smoothProgress, [0, 100], ['0%', '100%']);
  const progressText = useTransform(smoothProgress, (v) =>
    Math.round(v) < 100 ? 'LOADING...' : 'WELCOME'
  );

  const rafRef = useRef(null);

  const balloons = useMemo(() =>
    [...Array(14)].map((_, i) => ({
      id: i,
      size: 24 + (i % 7) * 10,
      left: 2 + (i * 7) % 96,
      delay: (i % 5) * 1.2,
      duration: 9 + (i % 4) * 2,
      sway: 12 + (i % 3) * 8,
      color: balloonColors[i % balloonColors.length],
    })), []
  );

  useEffect(() => {
    const duration = 2400;
    const start = performance.now();

    const frame = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      progressValue.set(eased * 100);
      if (t < 1) rafRef.current = requestAnimationFrame(frame);
      else setTimeout(() => onComplete(), 400);
    };

    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete, progressValue]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 bg-cream z-[100] flex items-center justify-center overflow-hidden"
      style={{ willChange: 'opacity' }}
    >
      {/* Floating balloons */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ backfaceVisibility: 'hidden' }}
        aria-hidden="true"
      >
        {balloons.map((b) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.55, 0.7, 0.55, 0],
              y: ['105vh', '-15vh'],
              x: [0, b.sway, -b.sway * 0.6, b.sway * 0.3, 0],
              scale: [1, 1.05, 0.98, 1.02, 1],
            }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              repeat: Infinity,
              ease: [0.45, 0.05, 0.2, 0.99],
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
            className={`absolute rounded-full ${b.color}`}
            style={{
              width: b.size,
              height: b.size * 0.85,
              left: `${b.left}%`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ backfaceVisibility: 'hidden' }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold rounded-full"
          style={{ willChange: 'transform, opacity' }}
        />
      </div>

      {/* Light shaded circles - left and right */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.06 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.2 }}
          className="absolute -left-20 top-1/3 w-[400px] h-[400px] bg-rose rounded-full"
          style={{ willChange: 'transform, opacity' }}
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 2.5, ease: 'easeOut', delay: 0.4 }}
          className="absolute -right-16 top-1/2 w-[350px] h-[350px] bg-coffee-light rounded-full"
          style={{ willChange: 'transform, opacity' }}
        />
      </div>

      {/* Floating gold dust particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.15, 0],
              scale: [0, 1, 0],
              y: [0, -(60 + (i % 4) * 30)],
              x: [0, (i % 2 === 0 ? 1 : -1) * (15 + (i % 3) * 10)],
            }}
            transition={{
              delay: 0.8 + i * 0.25,
              duration: 2.5 + (i % 3) * 0.5,
              repeat: Infinity,
              repeatDelay: 1 + (i % 2) * 0.5,
              ease: 'easeInOut',
            }}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: `${38 + (i % 5) * 6}%`,
              top: `${45 + (i % 3) * 8}%`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Logo with spring reveal */}
        <div className="relative mx-auto mb-8" style={{ backfaceVisibility: 'hidden' }}>
          {/* Outer counter-rotating ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-72 h-72 mx-auto"
            style={{ willChange: 'transform' }}
          >
            <svg viewBox="0 0 120 120" className="w-full h-full">
              <circle
                cx="60" cy="60" r="50"
                fill="none"
                stroke="#C8A96E"
                strokeWidth="0.5"
                strokeDasharray="2 10"
                opacity="0.2"
              />
            </svg>
          </motion.div>

          {/* Inner rotating decorative ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="w-72 h-72 mx-auto"
            style={{ willChange: 'transform' }}
          >
            <svg viewBox="0 0 120 120" className="w-full h-full">
              <defs>
                <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#C8A96E" />
                  <stop offset="100%" stopColor="#B8944E" />
                </linearGradient>
              </defs>
              <circle
                cx="60" cy="60" r="56"
                fill="none"
                stroke="url(#ringGrad)"
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
              transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 15 }}
              src={logoImg}
              alt="Season Slice"
              className="w-60 h-60"
              decoding="async"
              fetchpriority="high"
              style={{ willChange: 'transform' }}
            />
          </div>
        </div>

        {/* Brand name */}
        <div className="overflow-hidden mb-1" style={{ backfaceVisibility: 'hidden' }}>
          <motion.h1
            initial={{ y: 60 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 80, damping: 18 }}
            className="font-display text-4xl sm:text-5xl font-bold text-coffee tracking-wide"
          >
            Season Slice
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8" style={{ backfaceVisibility: 'hidden' }}>
          <motion.p
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 80, damping: 18 }}
            className="text-coffee-light/60 text-xs tracking-[0.35em] uppercase font-body"
          >
            Cake & Coffee
          </motion.p>
        </div>

        {/* Progress bar */}
        <div className="mx-auto" style={{ backfaceVisibility: 'hidden' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <div className="relative h-[2px] w-[200px] bg-coffee/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gold via-caramel to-gold rounded-full"
                style={{ width: progressWidth }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-coffee-light/40 text-[10px] font-body mt-3 tracking-widest"
            >
              {progressText}
            </motion.p>
          </motion.div>
        </div>

        {/* Floating dots */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.25, 0],
              y: [0, -(40 + i * 20)],
            }}
            transition={{
              delay: 1 + i * 0.2,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: 'easeInOut',
            }}
            className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-gold rounded-full"
            style={{ x: (i - 1) * 25, willChange: 'transform, opacity' }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SplashScreen;
