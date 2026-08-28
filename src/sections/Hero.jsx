import { motion } from 'framer-motion';
import { ChevronDown, Flame, Star, Truck } from 'lucide-react';
import { stats } from '../data/site';
import { images } from '../data/images';
import Button from '../components/ui/Button';
import ProductVisual from '../components/ui/ProductVisual';
import Reveal from '../components/ui/Reveal';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,77,28,0.16)_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#f7efe4_1px,transparent_1px),linear-gradient(to_bottom,#f7efe4_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-ember/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center w-full">
        <div className="flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">
          <Reveal direction="fade">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/5 border border-cream/10 text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              <Flame size={14} className="text-ember" /> Hamburgueria artesanal premium
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-cream">
              Mais que
              <span className="block bg-gradient-to-r from-ember via-ember-light to-gold bg-clip-text text-transparent">
                hambúrguer.
              </span>
              Uma experiência.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-lg text-cream-dim max-w-md">
              Carne selecionada, pão brioche torrado na chapa e ingredientes frescos todos os
              dias. Bem-vindo à casa do sabor em brasa.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button as="a" href="#cardapio" variant="primary" size="lg">
              Ver cardápio
            </Button>
            <Button as="a" href="#contato" variant="secondary" size="lg">
              Peça agora
            </Button>
          </Reveal>

          <Reveal delay={0.32} className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4">
            <div className="flex items-center gap-2">
              <Star size={18} className="fill-gold text-gold" />
              <div className="text-left">
                <p className="font-display text-lg leading-none text-cream">
                  {stats[0].value}
                  <span className="text-gold">{stats[0].suffix}</span>
                </p>
                <p className="text-xs text-cream-dim/70">{stats[0].label}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Flame size={18} className="text-ember" />
              <div className="text-left">
                <p className="font-display text-lg leading-none text-cream">
                  {stats[1].value}
                  <span className="text-gold">{stats[1].suffix}</span>
                </p>
                <p className="text-xs text-cream-dim/70">{stats[1].label}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={18} className="text-cream-dim" />
              <div className="text-left">
                <p className="font-display text-lg leading-none text-cream">
                  {stats[2].value}
                  <span className="text-gold">{stats[2].suffix}</span>
                </p>
                <p className="text-xs text-cream-dim/70">{stats[2].label}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <motion.div
          className="order-1 lg:order-2 relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute w-[85%] aspect-square rounded-full border border-gold/15 animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-[65%] aspect-square rounded-full border border-ember/15" />
          <ProductVisual
            art={{ type: 'burger', hue: 8 }}
            image={images.heroBurger}
            size="hero"
            alt="Hambúrguer artesanal premium TIZÃO"
            className="w-[80%] sm:w-[65%] lg:w-[80%] aspect-square rounded-full"
          />
        </motion.div>
      </div>

      <motion.a
        href="#destaques"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-cream-dim/60 hover:text-gold transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Rolar para próxima seção"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Explorar</span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
}
