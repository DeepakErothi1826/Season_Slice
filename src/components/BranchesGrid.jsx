import { MapPin } from 'lucide-react';
import { branches } from '../data/contactData';
import ScrollReveal from './ScrollReveal';

const BranchesGrid = () => {
  return (
    <section className="section-padding py-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-start gap-6 mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-coffee [writing-mode:vertical-lr] rotate-180 tracking-wider">
              OUR BRANCHES
            </h2>
            <div className="flex-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {branches.map((branch, i) => (
                  <ScrollReveal key={branch.id} delay={i * 0.1}>
                    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer">
                      <div className="w-12 h-12 bg-cream-dark rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                        <MapPin size={20} className="text-coffee" />
                      </div>
                      <h3 className="font-display font-bold text-coffee text-lg mb-1">{branch.city}</h3>
                      <p className="font-body text-coffee-light text-sm font-medium">{branch.name}</p>
                      <p className="font-body text-coffee-light/60 text-xs mt-1">{branch.address}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BranchesGrid;
