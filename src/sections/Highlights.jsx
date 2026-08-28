import { Beef, Bike, Flame, Leaf } from 'lucide-react';
import { highlights } from '../data/site';
import Reveal from '../components/ui/Reveal';

const iconMap = { Beef, Flame, Leaf, Bike };

export default function Highlights() {
  return (
    <section id="destaques" className="relative py-20 sm:py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="group h-full flex flex-col gap-4 p-7 rounded-3xl bg-charcoal-light/60 border border-cream/10 hover:border-ember/40 hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ember/20 to-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={26} className="text-ember" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-xl text-cream">{item.title}</h3>
                  <p className="text-sm text-cream-dim leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
