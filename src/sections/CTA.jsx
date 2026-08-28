import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-gradient-to-br from-ember-dark via-ember to-charcoal">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(255,203,115,0.4)_0%,transparent_60%)]" />
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gold/20 blur-[100px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center gap-6 relative">
        <Reveal>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-cream leading-[1.08]">
            Tá esperando o quê?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-lg sm:text-xl text-cream/85 max-w-xl">
            Seu próximo hambúrguer favorito está a poucos cliques. A chapa já está quente.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <Button as="a" href="#cardapio" variant="gold" size="lg" className="mt-2">
            Fazer meu pedido
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
