import { Mail, MapPin, Phone } from 'lucide-react';
import { contact, nav } from '../../data/site';
import { InstagramIcon } from '../ui/FoodIcons';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="relative bg-charcoal border-t border-cream/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm text-cream-dim leading-relaxed max-w-xs">
              Mais que hambúrguer. Uma experiência em chamas.
            </p>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cream/5 hover:bg-ember transition-colors mt-1"
              aria-label="Instagram do TIZÃO Burger Co."
            >
              <InstagramIcon size={18} className="text-cream" />
            </a>
          </div>

          <div>
            <h4 className="font-display text-lg text-cream mb-4">Links rápidos</h4>
            <ul className="flex flex-col gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-cream-dim hover:text-gold transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-cream mb-4">Contato</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-cream-dim">
                <MapPin size={15} className="text-ember shrink-0 mt-0.5" /> {contact.address}
              </li>
              <li className="flex items-center gap-2 text-sm text-cream-dim">
                <Phone size={15} className="text-ember shrink-0" /> {contact.whatsappDisplay}
              </li>
              <li className="flex items-center gap-2 text-sm text-cream-dim">
                <Mail size={15} className="text-ember shrink-0" /> {contact.email}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-cream mb-4">Horários</h4>
            <ul className="flex flex-col gap-2">
              {contact.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 text-sm text-cream-dim">
                  <span>{h.day}</span>
                  <span className="text-cream-dim/70">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-dim/50">
          <p>© 2026 TIZÃO Burger Co. Projeto fictício desenvolvido para fins de demonstração.</p>
          <p>Feito com fogo, chapa e código.</p>
        </div>
      </div>
    </footer>
  );
}
