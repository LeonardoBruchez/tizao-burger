import { Expand } from 'lucide-react';
import { useState } from 'react';
import Lightbox from '../components/ui/Lightbox';
import ProductVisual from '../components/ui/ProductVisual';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import { gallery } from '../data/gallery';

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative py-24 sm:py-32 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          kicker="Experiência"
          title="Um gostinho do que te espera."
          description="Da chapa à sua mesa: um pouco do universo TIZÃO em imagens."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[190px] gap-4 mt-14">
          {gallery.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.06}
              direction="scale"
              className={item.span}
            >
              <button
                onClick={() => setSelected(item)}
                className="group relative w-full h-full rounded-2xl overflow-hidden cursor-pointer"
                aria-label={`Ampliar imagem: ${item.title}`}
              >
                <ProductVisual
                  art={item.art}
                  image={item.image}
                  alt={item.title}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-colors duration-300 flex items-center justify-center">
                  <Expand
                    size={22}
                    className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-charcoal/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold text-cream text-left">{item.title}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
