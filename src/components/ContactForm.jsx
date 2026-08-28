import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import { useState } from 'react';
import Button from './ui/Button';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Informe seu nome completo.';
  }
  if (!emailRegex.test(values.email)) {
    errors.email = 'Informe um e-mail válido.';
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Conte um pouco mais (mínimo 10 caracteres).';
  }
  return errors;
}

const initialValues = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
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

      <Button type="submit" variant="primary" size="lg" className="w-full">
        <Send size={16} /> Enviar mensagem
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
