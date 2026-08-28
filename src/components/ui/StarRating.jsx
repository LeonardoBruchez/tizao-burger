import { Star } from 'lucide-react';

export default function StarRating({ rating = 5, max = 5, size = 16, className = '' }) {
  return (
    <div className={`flex items-center gap-1 ${className}`} aria-label={`${rating} de ${max} estrelas`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? 'fill-gold text-gold' : 'fill-transparent text-cream-dim/40'}
        />
      ))}
    </div>
  );
}
