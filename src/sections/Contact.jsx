import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { InstagramIcon } from '../components/ui/FoodIcons';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import { contact } from '../data/site';

function StylizedMap() {
  return (
    <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-cream/10 bg-charcoal-light">
      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,#f7efe4_1px,transparent_1px),linear-gradient(to_bottom,#f7efe4_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(45deg,#f4a93b_0,#f4a93b_1px,transparent_1px,transparent_16px)]" />
      <svg viewBox="0 0 400 250" className="absolute inset-0 w-full h-full opacity-30" fill="none">
        <path d="M0 60 Q100 20 180 70 T400 40" stroke="#F4A93B" strokeWidth="3" />
        <path d="M0 190 Q140 230 260 170 T400 200" stroke="#FF4D1C" strokeWidth="3" />
        <path d="M60 0 Q90 120 40 250" stroke="#F7EFE4" strokeWidth="2" />
        <path d="M340 0 Q300 120 360 250" stroke="#F7EFE4" strokeWidth="2" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          <div className="absolute w-16 h-16 rounded-full bg-ember/30 blur-xl animate-pulse" />
          <MapPin size={44} className="text-ember drop-shadow-lg relative" fill="#FF4D1C" strokeWidth={1.5} />
        </div>
      </div>
      <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-charcoal/80 backdrop-blur-sm text-[11px] text-cream-dim border border-cream/10">
        Mapa estilizado · área preparada para integração real
      </span>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contato" className="relative py-24 sm:py-32 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          kicker="Contato"
          title="Vem provar o fogo do TIZÃO."
          description="Fale com a gente, confira nosso endereço fictício e horários de funcionamento."
        />

        <div className="grid lg:grid-cols-2 gap-10 mt-14">
          <Reveal direction="right" className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-charcoal/60 border border-cream/10">
                <MapPin size={20} className="text-ember shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-cream">Endereço</p>
                  <p className="text-sm text-cream-dim mt-1">{contact.address}</p>
                  <p className="text-xs text-cream-dim/50 mt-1">{contact.addressNote}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-charcoal/60 border border-cream/10">
                <Phone size={20} className="text-ember shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-cream">Telefone / WhatsApp</p>
                  <p className="text-sm text-cream-dim mt-1">{contact.phone}</p>
                  <p className="text-sm text-cream-dim">{contact.whatsappDisplay}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-charcoal/60 border border-cream/10">
                <InstagramIcon size={20} className="text-ember shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-cream">Instagram</p>
                  <a
                    href={contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold hover:underline mt-1 block"
                  >
                    {contact.instagram}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-charcoal/60 border border-cream/10">
                <Mail size={20} className="text-ember shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-cream">E-mail</p>
                  <p className="text-sm text-cream-dim mt-1 break-all">{contact.email}</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-charcoal/60 border border-cream/10">
              <div className="flex items-center gap-2.5 mb-3">
                <Clock size={18} className="text-gold" />
                <p className="text-sm font-semibold text-cream">Horário de funcionamento</p>
              </div>
              <ul className="flex flex-col gap-2">
                {contact.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-cream-dim">{h.day}</span>
                    <span className={h.time === 'Fechado' ? 'text-ember/70' : 'text-cream'}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <StylizedMap />
          </Reveal>

          <Reveal direction="left" className="p-7 sm:p-9 rounded-3xl bg-charcoal/60 border border-cream/10 h-fit">
            <h3 className="font-display text-2xl text-cream mb-1">Fale com a gente</h3>
            <p className="text-sm text-cream-dim mb-6">Dúvidas, sugestões ou elogios — a gente responde rapidinho.</p>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
