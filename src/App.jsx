// import { useState, lazy, Suspense } from 'react';
// import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import Navbar from './components/Navbar';
// import CartDrawer from './components/CartDrawer';
// import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';
// import SplashScreen from './components/SplashScreen';

// const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() => import('./pages/About'));
// const MenuPage = lazy(() => import('./pages/Menu'));
// const Contact = lazy(() => import('./pages/Contact'));
// const CartPage = lazy(() => import('./pages/Cart'));
// const ProductDetail = lazy(() => import('./pages/ProductDetail'));

// const pageVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
//   exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
// };

// function AnimatedPage({ children }) {
//   return (
//     <motion.div
//       variants={pageVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className="min-h-screen"
//     >
//       {children}
//     </motion.div>
//   );
// }

// function PageLoader() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-cream">
//       <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
//     </div>
//   );
// }

// function App() {
//   const [showSplash, setShowSplash] = useState(true);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleSplashComplete = () => {
//     setShowSplash(false);
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen bg-cream font-body text-coffee">
//       <AnimatePresence>
//         {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
//       </AnimatePresence>

//       {!showSplash && (
//         <>
//           <ScrollToTop />
//           <Navbar />
//           <CartDrawer />
//           <main>
//             <AnimatePresence mode="wait">
//               <Suspense fallback={<PageLoader />}>
//                 <Routes location={location} key={location.pathname}>
//                   <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
//                   <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
//                   <Route path="/menu" element={<AnimatedPage><MenuPage /></AnimatedPage>} />
//                   <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
//                   <Route path="/cart" element={<AnimatedPage><CartPage /></AnimatedPage>} />
//                   <Route path="/product/:id" element={<AnimatedPage><ProductDetail /></AnimatedPage>} />
//                   <Route path="*" element={<AnimatedPage><Home /></AnimatedPage>} />
//                 </Routes>
//               </Suspense>
//             </AnimatePresence>
//           </main>
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;


import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🚧 Website Under Development</h1>
        <p style={styles.text}>
          Season Slice is currently under maintenance.
        </p>
        <p style={styles.subText}>
          Please check back soon.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "#fff",
    margin: 0,
    overflow: "hidden",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 999999,
    fontFamily: "Arial, sans-serif",
  },
  card: {
    textAlign: "center",
    padding: "30px",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "15px",
  },
  text: {
    fontSize: "1.3rem",
    marginBottom: "10px",
    color: "#cbd5e1",
  },
  subText: {
    fontSize: "1rem",
    color: "#94a3b8",
  },
};

export default App;