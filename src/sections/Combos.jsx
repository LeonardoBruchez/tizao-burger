import { Check, Flame } from 'lucide-react';
import { useState } from 'react';
import { combos } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import ProductVisual from '../components/ui/ProductVisual';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';

function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function ComboCard({ combo }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({ id: combo.id, name: combo.name, price: combo.price });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <Reveal
      className={`relative flex flex-col rounded-[2rem] overflow-hidden border transition-all duration-300 ${
        combo.popular
          ? 'border-ember/60 bg-gradient-to-b from-ember/10 to-charcoal-light lg:-translate-y-4 shadow-[0_20px_50px_rgba(255,77,28,0.2)]'
          : 'border-cream/10 bg-charcoal-light/60 hover:border-gold/30'
      }`}
    >
      {combo.popular && (
        <span className="absolute top-5 right-5 z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-ember text-cream text-[11px] font-bold uppercase tracking-wider shadow-lg">
          <Flame size={12} /> Mais popular
        </span>
      )}
      <ProductVisual
        art={combo.art}
        image={combo.image}
        size="card"
        alt={combo.name}
        className="aspect-[16/10]"
      />
      <div className="flex flex-col flex-1 p-7 gap-4">
        <div>
          <h3 className="font-display text-2xl text-cream">{combo.name}</h3>
          <p className="text-sm text-ember font-semibold mt-1">{combo.tagline}</p>
        </div>
        <ul className="flex flex-col gap-2 flex-1">
          {combo.items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-cream-dim">
              <Check size={14} className="text-gold shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-end justify-between pt-2">
          <div>
            <p className="text-xs text-cream-dim/50 line-through">
              {formatBRL(combo.originalPrice)}
            </p>
            <p className="font-display text-3xl text-gold">{formatBRL(combo.price)}</p>
          </div>
          <Button variant={combo.popular ? 'primary' : 'secondary'} onClick={handleAdd}>
            {added ? 'Adicionado' : 'Escolher combo'}
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

export default function Combos() {
  return (
    <section id="combos" className="relative py-24 sm:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          kicker="Combos"
          title="Mais sabor, mais economia."
          description="Combinações pensadas para cada momento — sozinho, acompanhado ou pra comemorar de verdade."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {combos.map((combo) => (
            <ComboCard key={combo.id} combo={combo} />
          ))}
        </div>
      </div>
    </section>
  );
}
