# TIZÃO Burger Co. 🔥

Landing page completa para a **TIZÃO Burger Co.**, hamburgueria artesanal premium fictícia criada como peça de portfólio. Projeto front-end 100% funcional: cardápio filtrável, carrinho de pedidos com checkout via WhatsApp, formulário de contato validado, galeria com lightbox e animações de scroll — pronto para build de produção e deploy no Netlify.

> Todos os dados (produtos, preços, depoimentos, endereço, telefone) são fictícios, criados apenas para fins de demonstração.
> ## [Clique aqui para acessar a página](https://jovial-paletas-1e7d73.netlify.app/)

## Identidade da marca

| | |
|---|---|
| **Nome** | TIZÃO Burger Co. |
| **Slogan** | "Mais que hambúrguer. Uma experiência em chamas." |
| **Paleta** | Carvão `#120D0A` · Brasa `#FF4D1C` · Dourado `#F4A93B` · Creme `#F7EFE4` |
| **Tipografia** | [Anton](https://fonts.google.com/specimen/Anton) (display/títulos) + [Manrope](https://fonts.google.com/specimen/Manrope) (corpo) |

## Stack técnica

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (tema via `@theme` em `src/index.css`, sem `tailwind.config.js`)
- **Framer Motion** — animações e scroll reveal
- **Lucide React** — ícones
- Componentização por domínio: `components/`, `sections/`, `data/`, `context/`

```
src/
├── App.jsx
├── index.css              # tema Tailwind v4 (@theme), fontes, keyframes
├── components/
│   ├── ProductCard.jsx
│   ├── ContactForm.jsx
│   ├── cart/CartDrawer.jsx
│   ├── layout/Header.jsx, Footer.jsx
│   └── ui/                # Button, Logo, Reveal, ProductVisual, FoodIcons, Lightbox...
├── sections/               # Hero, Highlights, Menu, FeaturedProduct, About,
│                            # Combos, Gallery, Testimonials, CTA, Contact
├── context/CartContext.jsx # estado global do carrinho
└── data/                   # products.js, site.js, testimonials.js, gallery.js
```

## Funcionalidades

- Menu mobile animado + header com comportamento de scroll
- Cardápio com filtro por categoria (Todos, Smash Burgers, Especiais, Combos, Acompanhamentos, Bebidas)
- Carrinho lateral: adicionar, alterar quantidade, remover, subtotal em tempo real
- Checkout que monta a mensagem do pedido e abre o WhatsApp automaticamente
- Formulário de contato com validação client-side (nome, e-mail, mensagem)
- Galeria com lightbox (abre/fecha por clique ou tecla `Esc`)
- Scroll suave entre seções + animações de entrada (`whileInView`)
- SEO: meta tags, Open Graph, Twitter Card, favicon, HTML semântico
- Acessibilidade: `alt`/`aria-label` em imagens e botões interativos, contraste AA na paleta escura

## Rodando localmente

Pré-requisitos: **Node.js 20+**

```bash
npm install
npm run dev       # http://localhost:5173
```

Outros comandos:

```bash
npm run build     # build de produção em /dist
npm run preview   # serve o build localmente
npm run lint      # oxlint
```

## Deploy no Netlify

O projeto já inclui `netlify.toml` com build command, diretório de publicação e headers de segurança/cache.

**Opção 1 — via painel Netlify:** conecte o repositório e o Netlify detecta a configuração automaticamente (`npm run build`, publish `dist`).

**Opção 2 — via CLI:**

```bash
npm install -g netlify-cli
netlify deploy --build --prod
```

## Imagens

O projeto **não usa fotos genéricas de banco de imagens**. Cada produto/seção usa `ProductVisual` (`src/components/ui/ProductVisual.jsx`), que aceita uma prop `image` (foto real, com prioridade) e, na ausência dela, cai automaticamente para uma ilustração de marca em SVG (`src/components/ui/FoodIcons.jsx`) com gradientes na paleta da TIZÃO — pensada para não parecer um placeholder genérico.

Todas as 15 fotos do site já foram geradas e estão em `src/assets/images/`, referenciadas centralmente em `src/data/images.js` e conectadas via prop `image` em `src/data/products.js`, `src/data/gallery.js` e nas seções Hero/About/FeaturedProduct. Nenhum produto depende mais da ilustração SVG por padrão — ela só reaparece se uma foto for removida ou um novo produto for adicionado sem `image`.

Imagens novas (ou substituições) devem ser bem pesadas na origem — rode `npm run images:optimize` depois de adicionar arquivos em `src/assets/images/` para redimensionar e comprimir automaticamente via `sharp` (ver `scripts/optimize-images.mjs`).

| Arquivo | Proporção | Onde é usado | Prompt sugerido |
|---|---|---|---|
| `hero-burger.jpg` | 16:9 | Hero | Professional food photography of an artisanal gourmet cheeseburger, tall brioche bun, thick juicy smash beef patty, melted cheddar dripping down the sides, crispy bacon, fresh lettuce and tomato, dark rustic wooden board, dramatic cinematic side lighting, steam rising, shallow depth of field, blurred dark smoky background, extreme close-up, realistic textures, no text, no logo |
| `burger-smash-classico.jpg` | 4:3 | Cardápio | Classic smash burger, thin crispy-edged beef patty, melted american cheese, pickles, onions, on toasted bun, dark slate plate, warm restaurant lighting, realistic, no text |
| `burger-duplo-bacon.jpg` | 4:3 | Cardápio | Double smash burger with crispy bacon strips, melted cheddar, caramelized onions, brioche bun, dark wooden table, cinematic lighting, realistic, no text |
| `burger-cheddar-explosion.jpg` | 4:3 | Cardápio | Gourmet smash burger with an extra-generous layer of melted creamy cheddar cheese sauce dripping heavily down the sides, crispy onion strings on top, toasted brioche bun, dark slate plate, warm cinematic restaurant lighting, shallow depth of field, blurred dark background, realistic, no text, no logo |
| `burger-double-fire.jpg` | 4:3 | Cardápio | Double stacked smash burger, melted cheddar sauce, crispy bacon, spicy sauce dripping, dark moody background, dramatic lighting, realistic, no text |
| `burger-tizao-da-casa.jpg` | 4:3 | Produto em destaque | Premium signature gourmet burger, smoked gouda, crispy bacon, caramelized onions, arugula, truffle aioli, artisan brioche bun, dark smoky background, cinematic rim lighting, steam rising, luxury presentation, no text |
| `burger-veggie-prime.jpg` | 4:3 | Cardápio | Gourmet vegetarian burger, grilled plant-based patty, melted cheese, avocado, arugula, roasted pepper, whole grain bun, warm natural lighting, realistic, no text |
| `batata-rustica.jpg` | 4:3 | Cardápio | Crispy golden rustic skin-on french fries in a dark metal basket, herbs, sea salt, steam rising, moody blurred background, no text |
| `onion-rings.jpg` | 4:3 | Cardápio | Crispy golden beer-battered onion rings stacked in a metal basket, cinematic lighting, dark background, no text |
| `brownie-vulcao.jpg` | 4:3 | Cardápio | Warm chocolate brownie with melting vanilla ice cream scoop, chocolate sauce drizzle, dark slate plate, cinematic lighting, no text |
| `milkshake-ovomaltine.jpg` | 4:3 | Cardápio | Thick creamy malted chocolate milkshake in a tall glass, whipped cream, chocolate drizzle, condensation, dark moody background, no text |
| `refrigerante-artesanal.jpg` | 4:3 | Cardápio | Chilled craft soda in a glass bottle with condensation, ice in a glass beside it, dark rustic table, cinematic lighting, no visible label text |
| `about-chapa.jpg` | 3:2 | Sobre nós | Chef's hands grilling a beef patty on a hot flat top griddle, flames and smoke, dramatic moody kitchen lighting, cinematic action shot, no visible faces, no text |
| `gallery-ambiente.jpg` | 3:2 | Galeria | Modern industrial-style burger restaurant dining area, dark wood tables, warm Edison bulb lighting, exposed brick, cozy urban atmosphere, no people, no text |
| `gallery-preparo.jpg` | 4:3 | Galeria | Close-up of hands assembling a gourmet burger, stacking melted cheese and bacon, blurred kitchen background, dramatic lighting, no visible faces, no text |

`public/og-cover.jpg` (usado em `og:image`/`twitter:image`) é uma cópia da foto do hero — troque por um cover dedicado de 1200×630 quando fizer sentido.

## Sobre o mapa e o WhatsApp

- A seção de contato usa um **mapa estilizado em CSS/SVG** (não um embed real), já indicado visualmente como placeholder — a área está pronta para receber um iframe do Google Maps/Mapbox real quando houver um endereço verdadeiro.
- O botão "Finalizar pelo WhatsApp" do carrinho monta a mensagem do pedido e abre `wa.me` com o número fictício definido em `src/data/site.js` (`contact.whatsapp`). Troque por um número real antes de publicar para uso comercial.

## Licença

Projeto de demonstração para portfólio. Sinta-se livre para usar como referência de estrutura/código.
