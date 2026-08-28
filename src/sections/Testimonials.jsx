import { Quote } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import StarRating from '../components/ui/StarRating';
import { testimonials } from '../data/testimonials';

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          kicker="Depoimentos"
          title="Quem prova, vira cliente fiel."
          description="Histórias reais (fictícias, mas com todo o carinho) de quem já se apaixonou pelo TIZÃO."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.07}>
              <div className="h-full flex flex-col gap-4 p-7 rounded-3xl bg-charcoal-light/60 border border-cream/10 hover:border-gold/30 transition-colors duration-300">
                <Quote size={24} className="text-ember/50" />
                <p className="text-cream-dim leading-relaxed flex-1">&ldquo;{t.comment}&rdquo;</p>
                <StarRating rating={t.rating} />
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-ember to-gold flex items-center justify-center font-display text-sm text-charcoal shrink-0">
                    {initials(t.name)}
                  </div>
                  <div>
                    <p className="font-semibold text-cream text-sm">{t.name}</p>
                    <p className="text-xs text-cream-dim/60">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
