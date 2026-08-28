import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import ProductVisual from './ProductVisual';

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-5 sm:p-10 bg-charcoal/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <motion.div
            className="relative w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 z-10 p-2.5 rounded-full bg-ember text-cream shadow-lg cursor-pointer"
              aria-label="Fechar galeria"
            >
              <X size={18} />
            </button>
            <ProductVisual
              art={item.art}
              image={item.image}
              alt={item.title}
              className="w-full aspect-[4/3] rounded-3xl border border-cream/10"
            />
            <div className="mt-5 text-center">
              <h3 className="font-display text-2xl text-cream">{item.title}</h3>
              <p className="text-cream-dim text-sm mt-1">{item.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
