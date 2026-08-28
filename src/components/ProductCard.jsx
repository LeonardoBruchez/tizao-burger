import { motion } from 'framer-motion';
import { Check, Plus } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductVisual from './ui/ProductVisual';

function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col bg-charcoal-light/70 border border-cream/10 rounded-3xl overflow-hidden hover:border-ember/40 transition-colors duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ProductVisual
          art={product.art}
          image={product.image}
          alt={product.name}
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-charcoal/80 backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider text-gold border border-gold/30">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 gap-2.5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl text-cream leading-tight">{product.name}</h3>
          <span className="font-display text-xl text-gold whitespace-nowrap">
            {formatBRL(product.price)}
          </span>
        </div>
        <p className="text-sm text-ember font-semibold">{product.tagline}</p>
        <p className="text-sm text-cream-dim leading-relaxed flex-1">{product.ingredients}</p>

        <button
          onClick={handleAdd}
          className={`mt-3 inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer active:scale-95 ${
            justAdded
              ? 'bg-gold text-charcoal'
              : 'bg-cream/8 text-cream hover:bg-ember hover:text-cream'
          }`}
        >
          {justAdded ? (
            <>
              <Check size={16} /> Adicionado
            </>
          ) : (
            <>
              <Plus size={16} /> Adicionar ao pedido
            </>
          )}
        </button>
      </div>
    </motion.article>
  );
}
