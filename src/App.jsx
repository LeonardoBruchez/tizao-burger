import CartDrawer from './components/cart/CartDrawer';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { CartProvider } from './context/CartContext';
import About from './sections/About';
import Combos from './sections/Combos';
import CTA from './sections/CTA';
import Contact from './sections/Contact';
import FeaturedProduct from './sections/FeaturedProduct';
import Gallery from './sections/Gallery';
import Hero from './sections/Hero';
import Highlights from './sections/Highlights';
import Menu from './sections/Menu';
import Testimonials from './sections/Testimonials';

export default function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Menu />
        <FeaturedProduct />
        <About />
        <Combos />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
