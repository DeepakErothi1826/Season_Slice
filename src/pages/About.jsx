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
  { year: 'Jan - May 2026', event: 'Season Slice opened its first bakery in Mumbai', image: '/images/cakes/27%20Fantastic%20Summer%20Cake%20Ideas.webp', color: 'bg-gradient-to-r from-gold to-amber-400' },
  { year: 'Feb 2026', event: 'Introduced seasonal flavor rotation concept', image: '/images/cakes/Mango%20Palette%20Knife%20Art%20Cake.webp', color: 'bg-gradient-to-r from-rose to-pink-400' },
  { year: 'Mar 2026', event: 'Launched online ordering and delivery', image: '/images/cold-brews/Iced%20Vanilla%20Latte%20at%20Home%20%E2%98%95%E2%9C%A8.webp', color: 'bg-gradient-to-r from-emerald to-teal-400' },
  { year: 'Apr 2026', event: 'Served 1,000+ happy customers', image: '/images/cookies/download.webp', color: 'bg-gradient-to-r from-purple to-violet-400' },
  { year: 'May 2026', event: 'Introduced 5 new flavors this month', image: '/images/chocolate/download.webp', color: 'bg-gradient-to-r from-blue to-indigo-400' },
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
      <section className="py-24 bg-gradient-to-br from-coffee via-coffee to-coffee-light">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold font-body text-sm tracking-widest uppercase mb-2 font-bold">What Drives Us</p>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-cream">Our Values</h2>
              <p className="text-cream/60 font-body mt-6 max-w-xl mx-auto">
                These guiding principles shape everything we do, from ingredient selection to customer service, ensuring every experience at Season Slice is extraordinary.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative group">
                  <div className="aspect-[1/1] w-full bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-20 mix-blend-overlay`} />
                    <div className="relative z-10 flex h-full items-center justify-center p-8">
                      <div className={`w-20 h-20 bg-gradient-to-br ${v.color} rounded-2xl flex items-center justify-center text-white shadow-lg transform transition-transform duration-500 group-hover:scale-110`}>
                        <v.icon size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="font-display text-xl font-bold text-cream transition-colors duration-500 group-hover:text-white/90">{v.title}</h3>
                    <p className="text-cream/60 font-body text-sm leading-relaxed mt-2">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-gradient-to-b from-cream-light to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold/80 text-xs uppercase tracking-[0.3em] mb-4 font-bold">Our Journey</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-coffee">Milestones That Shaped Us</h2>
              <p className="text-gold/60 font-body mt-4 max-w-xl mx-auto">
                From our humble beginnings to becoming Mumbai's beloved bakery, each milestone represents our commitment to crafting extraordinary experiences, one slice at a time.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Enhanced Timeline with decorative elements */}
          <div className="relative">
            {/* Main timeline line with decorative dots */}
            <div className="absolute left-6 top-0 bottom-0 w-px md:w-1 bg-gradient-to-b from-gold/40 via-rose/30 to-blue/20 hidden md:block" />
            {/* Decorative dots on the line */}
            <div className="absolute left-4 top-0 bottom-0 w-3 md:w-4 -translate-x-1/2 hidden md:block">
              {timeline.map((_, i) => (
                <div key={i} className="relative h-2 w-2 rounded-full bg-gold mb-[calc(100%/5)]" />
              ))}
            </div>
            
            {/* Timeline items */}
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className="relative pl-6 md:pl-14 pb-12 last:pb-0 group border-l-2 md:border-l-0 border-gold/30">
                  {/* Timeline marker */}
                  <div className="absolute -left-[21px] md:left-5 top-6 w-10 h-10 rounded-full bg-gradient-to-br from-gold to-amber-500 flex items-center justify-center text-white font-bold text-sm shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xs">{i + 1}</span>
                  </div>
                  
                  {/* Milestone content */}
                  <div className="relative rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                    <div className="relative h-48 sm:h-52">
                      {/* Image with enhanced hover effect */}
                      <div className="relative h-full w-full overflow-hidden">
                        <img src={item.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
                        <div className={`absolute inset-0 ${item.color} opacity-50 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-30`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        {/* Year badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-block text-xs font-bold text-white uppercase tracking-widest bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30 shadow-md">
                            {item.year}
                          </span>
                        </div>
                      </div>
                      {/* Event description with enhanced typography */}
                      <div className="absolute bottom-4 left-5 right-5">
                        <p className="font-display text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                          {item.event}
                        </p>
                      </div>
                    </div>
                    {/* Subtle hover lift effect */}
                    <div className="absolute inset-0 bg-transparent transition-all duration-500 hover:-translate-y-2"></div>
                  </div>
                  
                  {/* Connector line to timeline (for mobile) */}
                  {!timeline[i + 1] && (
                    <div className="absolute left-3 md:left-5 bottom-0 w-3 h-3 rounded-full bg-gradient-to-br from-gold to-amber-500 hidden md:block" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          {/* Mobile timeline connector */}
          <div className="hidden md:block">
            <div className="w-0.5 mx-auto mt-16 mb-16 bg-gradient-to-b from-gold/40 via-rose/30 to-blue/20" />
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