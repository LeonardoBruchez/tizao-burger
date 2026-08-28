import { AnimatePresence } from 'framer-motion';
import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import { categories, combos, products } from '../data/products';

const combosAsProducts = combos.map((c) => ({
  id: c.id,
  name: c.name,
  tagline: c.tagline,
  ingredients: c.items.join(' · '),
  price: c.price,
  badge: c.popular ? 'Mais pedido' : 'Combo',
  art: c.art,
  image: c.image,
}));

export default function Menu() {
  const [active, setActive] = useState('todos');

  const filtered = useMemo(() => {
    if (active === 'todos') return [...products, ...combosAsProducts];
    if (active === 'combos') return combosAsProducts;
    return products.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="cardapio" className="relative py-24 sm:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          kicker="Nosso cardápio"
          title="Feito na chapa, com carinho."
          description="Cada item é preparado na hora, com ingredientes selecionados diariamente. Filtre por categoria e monte seu pedido."
        />

        <div
          className="flex flex-wrap justify-center gap-2.5 mt-12 mb-10"
          role="tablist"
          aria-label="Filtrar cardápio por categoria"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={active === cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer border ${
                active === cat.key
                  ? 'bg-ember border-ember text-cream shadow-[0_6px_18px_rgba(255,77,28,0.35)]'
                  : 'bg-transparent border-cream/15 text-cream-dim hover:border-gold/50 hover:text-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <Reveal className="text-center py-16 text-cream-dim">
            Nenhum item encontrado nessa categoria.
          </Reveal>
        )}
      </div>
    </section>
  );
}
