import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import Button from './ui/Button';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[\p{L}\s'-]+$/u;
const MAX_LENGTH = { name: 80, email: 254, message: 800 };
const MIN_SUBMIT_INTERVAL_MS = 8000;

// Defesa em profundidade: mesmo sem backend hoje, nunca deixamos "<" / ">" passar
// para o estado, para o caso de esse valor um dia ser renderizado como HTML.
function sanitize(value) {
  return value.replace(/[<>]/g, '').slice(0, 1000);
}

function validate(values) {
  const errors = {};
  const name = values.name.trim();
  const message = values.message.trim();

  if (!name || name.length < 2) {
    errors.name = 'Informe seu nome completo.';
  } else if (name.length > MAX_LENGTH.name) {
    errors.name = 'Nome muito longo.';
  } else if (!nameRegex.test(name)) {
    errors.name = 'Use apenas letras, espaços e hífen.';
  }

  if (!values.email || values.email.length > MAX_LENGTH.email || !emailRegex.test(values.email)) {
    errors.email = 'Informe um e-mail válido.';
  }

  if (!message || message.length < 10) {
    errors.message = 'Conte um pouco mais (mínimo 10 caracteres).';
  } else if (message.length > MAX_LENGTH.message) {
    errors.message = 'Mensagem muito longa (máx. 800 caracteres).';
  }

  return errors;
}

const initialValues = { name: '', email: '', message: '', company: '' };

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const lastSubmitRef = useRef(0);

  const handleChange = (field) => (e) => {
    const raw = e.target.value;
    const clean = field === 'company' ? raw : sanitize(raw);
    setValues((v) => ({ ...v, [field]: clean }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot: campo invisível para humanos; se vier preenchido, é bot.
    // Finge sucesso para não revelar a defesa a quem está testando o form.
    if (values.company.trim()) {
      setSubmitted(true);
      setValues(initialValues);
      setTimeout(() => setSubmitted(false), 5000);
      return;
    }

    const now = Date.now();
    if (sending || now - lastSubmitRef.current < MIN_SUBMIT_INTERVAL_MS) return;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSending(true);
      lastSubmitRef.current = now;
      setSubmitted(true);
      setValues(initialValues);
      setTimeout(() => setSubmitted(false), 5000);
      setTimeout(() => setSending(false), 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot anti-bot: oculto para humanos, mas bots automatizados costumam preencher todo campo que encontram. */}
      <div className="absolute left-[-9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Empresa</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={handleChange('company')}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-semibold text-cream-dim">
          Nome
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={handleChange('name')}
          placeholder="Seu nome completo"
          maxLength={MAX_LENGTH.name}
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`px-4 py-3 rounded-xl bg-charcoal border text-cream placeholder:text-cream-dim/40 focus:outline-none focus:ring-2 focus:ring-ember/50 transition-colors ${
            errors.name ? 'border-ember' : 'border-cream/15'
          }`}
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-ember">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-semibold text-cream-dim">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange('email')}
          placeholder="voce@email.com"
          maxLength={MAX_LENGTH.email}
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`px-4 py-3 rounded-xl bg-charcoal border text-cream placeholder:text-cream-dim/40 focus:outline-none focus:ring-2 focus:ring-ember/50 transition-colors ${
            errors.email ? 'border-ember' : 'border-cream/15'
          }`}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-ember">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-cream-dim">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={handleChange('message')}
          placeholder="Como podemos ajudar?"
          maxLength={MAX_LENGTH.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`px-4 py-3 rounded-xl bg-charcoal border text-cream placeholder:text-cream-dim/40 focus:outline-none focus:ring-2 focus:ring-ember/50 transition-colors resize-none ${
            errors.message ? 'border-ember' : 'border-cream/15'
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-ember">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={sending}>
        <Send size={16} /> {sending ? 'Enviando...' : 'Enviar mensagem'}
      </Button>

      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-gold bg-gold/10 border border-gold/25 rounded-xl px-4 py-3"
          role="status"
        >
          <CheckCircle2 size={16} /> Mensagem enviada! Responderemos em breve.
        </motion.p>
      )}
    </form>
  );
}
