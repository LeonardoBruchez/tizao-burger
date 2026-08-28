import { motion } from 'framer-motion';
import { Check, Flame } from 'lucide-react';
import { useState } from 'react';
import { featuredProduct } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductVisual from '../components/ui/ProductVisual';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';

function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const ingredientList = [
  'Blend premium 180g',
  'Queijo gouda defumado',
  'Bacon artesanal',
  'Cebola caramelizada',
  'Rúcula fresca',
  'Aioli trufado',
  'Brioche na manteiga',
];

export default function FeaturedProduct() {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(featuredProduct);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-charcoal-light overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_80%_50%,rgba(244,169,59,0.12)_0%,transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal direction="left" className="relative flex items-center justify-center order-1">
          <motion.div
            className="absolute w-[90%] aspect-square rounded-full border-2 border-dashed border-gold/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute w-[70%] aspect-square rounded-full bg-ember/10 blur-3xl" />
          <ProductVisual
            art={featuredProduct.art}
            image={featuredProduct.image}
            size="featured"
            alt={featuredProduct.name}
            className="w-[75%] sm:w-[60%] aspect-square rounded-full relative"
          />
          <motion.span
            className="absolute top-6 right-2 sm:right-8 flex items-center gap-1.5 px-4 py-2 rounded-full bg-charcoal border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider shadow-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Flame size={14} /> Assinatura da casa
          </motion.span>
          <motion.span
            className="absolute bottom-8 left-2 sm:left-4 font-display text-3xl px-5 py-3 rounded-2xl bg-ember text-cream shadow-xl"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            {formatBRL(featuredProduct.price)}
          </motion.span>
        </Reveal>

        <div className="order-2 flex flex-col gap-6">
          <Reveal direction="fade">
            <span className="section-heading-sub text-xs sm:text-sm text-ember font-semibold uppercase">
              Produto em destaque
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-5xl sm:text-6xl text-cream leading-[1.08]">
              {featuredProduct.name}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-cream-dim max-w-lg">
              A receita que dá nome à casa. Um blend premium selado no ponto certo, coberto por
              queijo gouda defumado e finalizado com aioli trufado — a experiência TIZÃO em sua
              forma mais completa.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-wrap gap-2.5">
            {ingredientList.map((ing) => (
              <span
                key={ing}
                className="px-3.5 py-2 rounded-full bg-cream/5 border border-cream/10 text-sm text-cream-dim"
              >
                {ing}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.2} className="flex items-center gap-5 pt-2">
            <Button variant="primary" size="lg" onClick={handleAdd}>
              {added ? (
                <>
                  <Check size={18} /> Adicionado ao pedido
                </>
              ) : (
                'Pedir Tizão da Casa'
              )}
            </Button>
            <span className="font-display text-3xl text-gold">
              {formatBRL(featuredProduct.price)}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
