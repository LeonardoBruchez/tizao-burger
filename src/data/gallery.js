import { images } from './images';

export const gallery = [
  {
    id: 1,
    title: 'Tizão da Casa',
    caption: 'Nossa assinatura, montada camada por camada.',
    art: { type: 'burger', hue: 12 },
    image: images.burgerTizaoDaCasa,
    span: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    title: 'Na chapa',
    caption: 'O ponto certo da carne, sempre.',
    art: { type: 'kitchen', hue: 6 },
    image: images.galleryPreparo,
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    title: 'Batata Rústica',
    caption: 'Crocante em cada garfada.',
    art: { type: 'fries', hue: 38 },
    image: images.batataRustica,
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    title: 'Ambiente TIZÃO',
    caption: 'Aconchego urbano em cada detalhe.',
    art: { type: 'interior', hue: 16 },
    image: images.galleryAmbiente,
    span: 'col-span-1 row-span-2',
  },
  {
    id: 5,
    title: 'Milkshake Ovomaltine',
    caption: 'O ponto doce da experiência.',
    art: { type: 'shake', hue: 24 },
    image: images.milkshakeOvomaltine,
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    title: 'Onion Rings',
    caption: 'Dourados, crocantes, viciantes.',
    art: { type: 'rings', hue: 34 },
    image: images.onionRings,
    span: 'col-span-1 row-span-1',
  },
];
