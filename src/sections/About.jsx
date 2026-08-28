import { Award, Flame, Users } from 'lucide-react';
import { images } from '../data/images';
import ProductVisual from '../components/ui/ProductVisual';
import Reveal from '../components/ui/Reveal';

const facts = [
  { icon: Flame, label: 'Fundada em 2019', value: 'Direto da chapa' },
  { icon: Users, label: 'Time apaixonado', value: '32 cozinheiros' },
  { icon: Award, label: 'Reconhecimento', value: '3 prêmios locais' },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal direction="right" className="relative order-2 lg:order-1">
          <ProductVisual
            art={{ type: 'kitchen', hue: 4 }}
            image={images.aboutChapa}
            size="featured"
            alt="Chapa quente da cozinha TIZÃO"
            className="w-full aspect-[4/5] rounded-[2.5rem] border border-cream/10"
          />
          <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-charcoal-light border border-cream/10 rounded-2xl p-5 shadow-2xl flex items-center gap-4 max-w-[240px]">
            <Flame size={28} className="text-ember shrink-0" />
            <p className="text-sm text-cream-dim">
              <span className="text-cream font-semibold">Desde o primeiro dia</span>, tudo
              preparado na chapa, na frente do cliente.
            </p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2 flex flex-col gap-6">
          <Reveal direction="fade">
            <span className="section-heading-sub text-xs sm:text-sm text-ember font-semibold uppercase">
              Nossa história
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream leading-[1.08]">
              Começamos com uma chapa, uma ideia e muita teimosia.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-cream-dim leading-relaxed">
              Em 2019, três amigos decidiram largar seus empregos para perseguir uma obsessão:
              criar o hambúrguer perfeito. Testamos mais de 40 blends de carne até chegar ao ponto
              certo de suculência e sabor. Hoje, o TIZÃO nasce todos os dias da mesma forma — na
              chapa, com fogo de verdade e ingredientes que a gente escolhe a dedo.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg text-cream-dim leading-relaxed">
              Não somos uma rede. Somos uma cozinha aberta, um time que se importa e uma vontade
              inabalável de fazer o melhor hambúrguer que você vai comer essa semana.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="grid grid-cols-3 gap-4 pt-4">
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-2 p-4 rounded-2xl bg-charcoal-light/60 border border-cream/10">
                <fact.icon size={20} className="text-gold" />
                <p className="font-display text-lg text-cream leading-tight">{fact.value}</p>
                <p className="text-xs text-cream-dim/70">{fact.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
