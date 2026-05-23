import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Clock, Cake, Coffee, Star, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Marquee from '../components/Marquee';
import { Link } from 'react-router-dom';

const values = [
  { icon: Heart, title: 'Made with Love', desc: 'Every cake is handcrafted by our passionate bakers with attention to every detail.', color: 'from-rose-400 to-pink-500' },
  { icon: Award, title: 'Premium Quality', desc: 'Only the finest seasonal ingredients make the cut. We never compromise on quality.', color: 'from-gold to-amber-500' },
  { icon: Users, title: 'Community First', desc: 'Building connections one slice at a time. Our customers are our family.', color: 'from-emerald-400 to-teal-500' },
];

const timeline = [
  { year: 'Jan - May 2026', event: 'Season Slice opened its first bakery in Mumbai', image: '/images/cakes/27%20Fantastic%20Summer%20Cake%20Ideas.jfif', color: 'bg-gradient-to-r from-gold to-amber-400' },
  { year: 'Feb 2026', event: 'Introduced seasonal flavor rotation concept', image: '/images/cakes/Mango%20Palette%20Knife%20Art%20Cake.jfif', color: 'bg-gradient-to-r from-rose to-pink-400' },
  { year: 'Mar 2026', event: 'Launched online ordering and delivery', image: '/images/cold-brews/Iced%20Vanilla%20Latte%20at%20Home%20%E2%98%95%E2%9C%A8.jfif', color: 'bg-gradient-to-r from-emerald to-teal-400' },
  { year: 'Apr 2026', event: 'Served 1,000+ happy customers', image: '/images/cookies/download.jfif', color: 'bg-gradient-to-r from-purple to-violet-400' },
  { year: 'May 2026', event: 'Introduced 5 new flavors this month', image: '/images/chocolate/download.jfif', color: 'bg-gradient-to-r from-blue to-indigo-400' },
];

const About = () => {
  return (
    <>
        <Helmet>
          <title>About Season Slice Cafe | Our Story & Values</title>
          <meta name="description" content="Learn about Season Slice Cafe's journey since 2026, our commitment to quality ingredients, and what makes us Mumbai's newest bakery destination." />
          <link rel="canonical" href="https://www.seasonslice.com/about" />
          {/* BreadcrumbList Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.seasonslice.com/" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.seasonslice.com/about" }
              ]
            })}
          </script>
          {/* Article Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "About Season Slice Cafe - Our Story & Values",
              "description": "Learn about Season Slice Cafe's journey since 2026, our commitment to quality ingredients, and what makes us Mumbai's newest bakery destination.",
              "author": { "@type": "Organization", "name": "Season Slice Cafe" },
              "publisher": { "@type": "Organization", "name": "Season Slice Cafe" }
            })}
          </script>
        </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-rose/5 to-gold/10" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <p className="text-gold font-body text-sm tracking-widest uppercase mb-4 font-bold">Our Story</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-coffee leading-[1.1] mb-6">
              12 Months.<br /><span className="italic text-gradient">24 New Reasons.</span>
            </h1>
            <p className="text-coffee-light/70 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              At Season Slice, we believe that every month deserves its own flavor story. That's why we craft two brand-new cake flavors every single month.
            </p>
            <Link to="/menu" className="bg-gradient-to-r from-gold to-amber-400 text-coffee px-8 py-4 rounded-full text-sm uppercase tracking-wider hover:shadow-lg transition-all shadow-md font-bold inline-flex items-center gap-2">
              Explore Menu <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Marquee text="TWO NEW FLAVORS EVERY MONTH" repeat={8} className="bg-gradient-to-r from-coffee via-coffee-light to-coffee py-4" textColor="text-cream" />

      {/* Story Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-cream-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="text-gold/80 text-xs uppercase tracking-[0.3em] mb-4 font-bold">How We Started</p>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-coffee mb-6">From a Small Kitchen to Your Heart</h2>
                <p className="text-coffee-light/70 font-body leading-relaxed mb-4">
                   Season Slice began in 2026 as a fresh new bakery in Mumbai. What started as a passion for baking is quickly becoming a favorite destination for cake lovers.
                </p>
                <p className="text-coffee-light/70 font-body leading-relaxed">
                  Today, we serve thousands of customers who trust us for their celebrations, cravings, and everyday moments of sweetness.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-cream to-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { num: '2026', label: 'Born', color: 'text-gold' },
                    { num: '1K+', label: 'Customers', color: 'text-rose' },
                    { num: '5+', label: 'Flavors', color: 'text-emerald' },
                    { num: '100%', label: 'Fresh', color: 'text-blue' },
                  ].map((item, i) => (
                    <div key={i} className="text-center bg-white rounded-2xl p-4 shadow-md">
                      <p className={`font-display text-3xl font-bold ${item.color}`}>{item.num}</p>
                      <p className="text-coffee-light/60 text-sm mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-coffee via-coffee to-coffee-light">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold font-body text-sm tracking-widest uppercase mb-2 font-bold">What Drives Us</p>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-cream">Our Values</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center space-y-4 p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/20 transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-br ${v.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                    <v.icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-cream">{v.title}</h3>
                  <p className="text-cream/60 font-body text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gradient-to-b from-cream-light to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold/80 text-xs uppercase tracking-[0.3em] mb-4 font-bold">Our Journey</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-coffee">Milestones</h2>
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/40 via-rose/30 to-blue/20 hidden md:block" />
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className="relative pl-0 md:pl-14 pb-10 last:pb-0 group">
                  <div className="absolute left-3 md:left-5 top-6 w-3 h-3 rounded-full bg-white border-2 border-gold shadow-md hidden md:block z-10 group-hover:scale-150 transition-transform" />
                  <div className="relative rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-48 sm:h-52">
                      <img src={item.image} alt="" className="w-full h-full object-cover" loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
                      <div className={`absolute inset-0 ${item.color} opacity-60 mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="inline-block text-xs font-bold text-white uppercase tracking-widest bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
                          {item.year}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-5 right-5">
                        <p className="font-display text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                          {item.event}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-rose-50 via-white to-amber-50">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-coffee mb-4">Ready to taste the season?</h2>
            <p className="text-coffee-light/70 font-body mb-8">Explore our full menu and find your new favorite flavor.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/menu" className="bg-gradient-to-r from-coffee to-coffee-light text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider hover:shadow-lg transition-all shadow-md font-bold inline-flex items-center gap-2">
                Explore Menu <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="bg-white text-coffee px-8 py-4 rounded-full text-sm uppercase tracking-wider hover:bg-cream transition-colors shadow-md border-2 border-coffee/10 font-bold inline-flex items-center gap-2">
                Contact Us
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default About;