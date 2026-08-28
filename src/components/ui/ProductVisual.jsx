import { glyphMap } from './FoodIcons';

const sizeConfig = {
  card: { icon: 'w-20 h-20', pad: 'p-6' },
  hero: { icon: 'w-56 h-56 sm:w-72 sm:h-72', pad: 'p-10' },
  featured: { icon: 'w-64 h-64', pad: 'p-10' },
  gallery: { icon: 'w-16 h-16', pad: 'p-5' },
  small: { icon: 'w-12 h-12', pad: 'p-4' },
};

export default function ProductVisual({ art, size = 'card', image, alt = '', className = '' }) {
  const { icon, pad } = sizeConfig[size] ?? sizeConfig.card;
  const Glyph = glyphMap[art?.type] ?? glyphMap.burger;

  if (image) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img src={image} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      </div>
    );
  }

  return (
    <div
      className={`grain relative flex items-center justify-center overflow-hidden ${pad} ${className}`}
      style={{
        background:
          'radial-gradient(120% 120% at 20% 15%, rgba(244,169,59,0.35) 0%, rgba(255,77,28,0.18) 35%, rgba(18,13,10,0.95) 75%)',
        filter: art?.hue ? `hue-rotate(${art.hue}deg)` : undefined,
      }}
      role="img"
      aria-label={alt}
    >
      <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-ember/30 blur-3xl" />
      <div className="absolute -bottom-10 -right-6 w-40 h-40 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute inset-0 border border-cream/5 rounded-[inherit]" />
      <Glyph className={`${icon} drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)] relative animate-float`} />
    </div>
  );
}
