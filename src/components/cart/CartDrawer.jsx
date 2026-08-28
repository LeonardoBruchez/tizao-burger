import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { contact } from '../../data/site';
import Button from '../ui/Button';

function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, subtotal, clearCart } = useCart();

  const handleCheckout = () => {
    const lines = items.map(
      (item) => `• ${item.qty}x ${item.name} — ${formatBRL(item.price * item.qty)}`,
    );
    const message = [
      'Olá! Quero fazer o seguinte pedido no TIZÃO Burger Co.:',
      '',
      ...lines,
      '',
      `Subtotal: ${formatBRL(subtotal)}`,
    ].join('\n');
    const url = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            role="dialog"
            aria-label="Carrinho de pedidos"
            aria-modal="true"
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-charcoal-light z-50 flex flex-col shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-cream/10">
              <div className="flex items-center gap-2.5">
                <ShoppingBag size={20} className="text-ember" />
                <h2 className="font-display text-2xl text-cream">Seu pedido</h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-full bg-cream/5 hover:bg-cream/10 cursor-pointer"
                aria-label="Fechar carrinho"
              >
                <X size={20} className="text-cream" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-3 py-16">
                  <ShoppingBag size={40} className="text-cream-dim/40" />
                  <p className="text-cream-dim">Seu carrinho está vazio.</p>
                  <p className="text-sm text-cream-dim/60">
                    Adicione itens do cardápio para começar seu pedido.
                  </p>
                </div>
              ) : (
                <ul className="flex flex-col gap-4">
                  {items.map((item) => (
                    <motion.li
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      className="flex items-center gap-3 bg-cream/5 rounded-2xl p-3"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-cream truncate">{item.name}</p>
                        <p className="text-sm text-gold">{formatBRL(item.price)}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-charcoal rounded-full p-1">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="p-1.5 rounded-full hover:bg-cream/10 cursor-pointer"
                          aria-label={`Diminuir quantidade de ${item.name}`}
                        >
                          <Minus size={14} className="text-cream" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold text-cream">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="p-1.5 rounded-full hover:bg-cream/10 cursor-pointer"
                          aria-label={`Aumentar quantidade de ${item.name}`}
                        >
                          <Plus size={14} className="text-cream" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 rounded-full hover:bg-ember/20 cursor-pointer"
                        aria-label={`Remover ${item.name} do carrinho`}
                      >
                        <Trash2 size={16} className="text-cream-dim hover:text-ember" />
                      </button>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-cream/10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-cream-dim">Subtotal</span>
                  <span className="font-display text-2xl text-cream">{formatBRL(subtotal)}</span>
                </div>
                <Button variant="primary" size="lg" className="w-full" onClick={handleCheckout}>
                  Finalizar pelo WhatsApp
                </Button>
                <button
                  onClick={clearCart}
                  className="text-sm text-cream-dim/60 hover:text-ember transition-colors cursor-pointer"
                >
                  Esvaziar carrinho
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
