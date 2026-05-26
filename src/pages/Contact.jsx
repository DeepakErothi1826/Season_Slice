import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Send, Check, MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/contactData';
import Newsletter from '../components/Newsletter';

const stripTags = (s) => s.replace(/<[^>]*>/g, '').replace(/[<>]/g, '').trim();

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const loadTime = useRef(Date.now());

  const validate = () => {
    const e = {};
    const name = stripTags(form.name);
    if (!name) e.name = 'Name is required';
    else if (name.length > 100) e.name = 'Name is too long';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Valid email required';
    else if (form.email.length > 254) e.email = 'Email is too long';
    const msg = stripTags(form.message);
    if (!msg) e.message = 'Message is required';
    else if (msg.length < 10) e.message = 'Message must be at least 10 characters';
    else if (msg.length > 5000) e.message = 'Message is too long';
    const subj = stripTags(form.subject);
    if (subj.length > 200) e.subject = 'Subject is too long';
    if (Date.now() - loadTime.current < 3000) e._bot = 'Please wait before submitting';
    return e;
  };

  const sanitize = (v) => stripTags(v);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const contactCards = [
    { icon: MapPin, title: 'Our Location', info: contactInfo.address },
    { icon: Phone, title: 'Phone', info: contactInfo.phones.join('\n') },
    { icon: Mail, title: 'Email', info: contactInfo.email },
    { icon: Clock, title: 'Working Hours', info: 'Mon-Sat: 9AM-9PM\nSun: 10AM-8PM' },
  ];

  return (
    <>
        <Helmet>
          <title>Contact Season Slice Cafe | Visit Us in Chembur, Mumbai</title>
          <meta name="description" content="Visit Season Slice Cafe at our Chembur location. Find our address, phone numbers, email, and opening hours. Get directions to our cozy cafe." />
          <link rel="canonical" href="https://www.seasonslice.com/contact" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.seasonslice.com/" },
                { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.seasonslice.com/contact" }
              ]
            })}
          </script>
          {/* LocalBusiness Schema for Contact Page */}
         <script type="application/ld+json">
           {JSON.stringify({
             "@context": "https://schema.org",
             "@type": "LocalBusiness",
             "name": "Season Slice Cafe",
             "image": "https://www.seasonslice.com/images/logo/Seasonslice_logo.webp",
             "@id": "https://www.seasonslice.com/",
             "url": "https://www.seasonslice.com/",
             "telephone": "+91 70211 85010",
             "priceRange": "$$",
             "address": {
               "@type": "PostalAddress",
               "streetAddress": "The Baya Junction, Cross, Shop no 8 Pestom Sagar Rd Number 6",
               "addressLocality": "Chembur West",
               "addressRegion": "Maharashtra",
               "postalCode": "400089",
               "addressCountry": "IN"
             },
             "geo": {
               "@type": "GeoCoordinates",
               "latitude": 19.0760,
               "longitude": 72.8777
             },
             "openingHoursSpecification": [
               {
                 "@type": "OpeningHoursSpecification",
                 "dayOfWeek": [
                   "Monday",
                   "Tuesday",
                   "Wednesday",
                   "Thursday",
                   "Friday",
                   "Saturday"
                 ],
                 "opens": "09:00",
                 "closes": "21:00"
               },
               {
                 "@type": "OpeningHoursSpecification",
                 "dayOfWeek": "Sunday",
                 "opens": "10:00",
                 "closes": "20:00"
               }
             ],
             "menu": "https://www.seasonslice.com/menu",
             "servesCuisine": [
               "Coffee Shop",
               "Bakery",
               "Desserts",
               "Breakfast & Brunch"
             ]
           })}
         </script>
       </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={36} className="text-gold" />
            </div>
            <p className="text-gold font-body text-sm tracking-widest uppercase mb-4">Get in Touch</p>
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-coffee mb-4">Contact Us</h1>
            <p className="text-coffee-light/70 font-body text-lg max-w-xl mx-auto">
              We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <card.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display font-bold text-coffee mb-2">{card.title}</h3>
                <p className="text-coffee-light/60 text-sm whitespace-pre-line break-words">{card.info}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-lg"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={40} className="text-gold" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-coffee mb-4">Message Sent!</h2>
                  <p className="text-coffee-light/70 font-body mb-8">Thank you for reaching out. We'll get back to you soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-coffee text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-coffee-light transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold text-coffee mb-2">Send us a Message</h2>
                  <p className="text-coffee-light/60 font-body mb-8">Fill out the form below and we'll respond within 24 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-coffee mb-2 block">Your Name</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={handleChange('name')}
                          maxLength={100}
                          className={`w-full px-5 py-4 bg-cream rounded-xl text-coffee placeholder:text-coffee-light/40 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${errors.name ? 'ring-2 ring-rose' : ''}`}
                        />
                        {errors.name && <p className="text-rose text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-coffee mb-2 block">Email Address</label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={handleChange('email')}
                          maxLength={254}
                          className={`w-full px-5 py-4 bg-cream rounded-xl text-coffee placeholder:text-coffee-light/40 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${errors.email ? 'ring-2 ring-rose' : ''}`}
                        />
                        {errors.email && <p className="text-rose text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-coffee mb-2 block">Subject</label>
                      <input
                        type="text"
                        placeholder="How can we help?"
                        value={form.subject}
                        onChange={handleChange('subject')}
                        maxLength={200}
                        className={`w-full px-5 py-4 bg-cream rounded-xl text-coffee placeholder:text-coffee-light/40 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${errors.subject ? 'ring-2 ring-rose' : ''}`}
                      />
                      {errors.subject && <p className="text-rose text-xs mt-1">{errors.subject}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-coffee mb-2 block">Your Message</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us what's on your mind..."
                        value={form.message}
                        onChange={handleChange('message')}
                        maxLength={5000}
                        className={`w-full px-5 py-4 bg-cream rounded-xl text-coffee placeholder:text-coffee-light/40 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none ${errors.message ? 'ring-2 ring-rose' : ''}`}
                      />
                      {errors.message && <p className="text-rose text-xs mt-1">{errors.message}</p>}
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="w-full bg-coffee text-white py-4 rounded-xl text-sm uppercase tracking-wider hover:bg-coffee-light transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Send Message
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Map / Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-coffee rounded-3xl p-8 text-cream h-full">
                <h3 className="font-display text-xl font-bold mb-6">Quick Response</h3>
                <p className="text-cream/70 font-body mb-6">We're here to help! Expect a response within 24 hours during business days.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center">
                      <Mail size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-cream/50 text-xs">Email</p>
                      <p className="text-sm">{contactInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center">
                      <Phone size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-cream/50 text-xs">Phone</p>
                      <p className="text-sm">{contactInfo.phones[0]}</p>
                    </div>
                  </div>
                </div>
              </div>

              </motion.div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default Contact;