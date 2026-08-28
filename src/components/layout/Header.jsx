import { AnimatePresence, motion } from 'framer-motion';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { nav } from '../../data/site';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal/90 backdrop-blur-md border-b border-cream/10 py-3'
          : 'bg-gradient-to-b from-charcoal/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#inicio" aria-label="TIZÃO Burger Co. — página inicial">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Navegação principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-cream-dim hover:text-gold transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-ember transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openCart}
            className="relative p-2.5 rounded-full bg-cream/5 hover:bg-cream/10 transition-colors cursor-pointer"
            aria-label={`Abrir carrinho, ${totalCount} ${totalCount === 1 ? 'item' : 'itens'}`}
          >
            <ShoppingBag size={20} className="text-cream" />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-ember text-[10px] font-bold text-cream">
                {totalCount}
              </span>
            )}
          </button>

          <Button as="a" href="#cardapio" variant="primary" size="md" className="hidden sm:inline-flex">
            Peça agora
          </Button>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2.5 rounded-full bg-cream/5 hover:bg-cream/10 transition-colors cursor-pointer"
            aria-label="Abrir menu"
          >
            <Menu size={20} className="text-cream" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-charcoal-light z-50 lg:hidden flex flex-col p-6 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            >
              <div className="flex items-center justify-between mb-10">
                <Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full bg-cream/5 hover:bg-cream/10 cursor-pointer"
                  aria-label="Fechar menu"
                >
                  <X size={20} className="text-cream" />
                </button>
              </div>
              <nav className="flex flex-col gap-2" aria-label="Navegação mobile">
                {nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                    className="font-display text-3xl text-cream py-3 border-b border-cream/10 hover:text-ember transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <Button
                as="a"
                href="#cardapio"
                variant="primary"
                size="lg"
                className="mt-8 w-full"
                onClick={() => setMobileOpen(false)}
              >
                Peça agora
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
