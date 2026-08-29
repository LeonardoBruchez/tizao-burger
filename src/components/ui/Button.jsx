const variants = {
  primary:
    'bg-gradient-to-r from-ember to-ember-dark text-cream shadow-[0_8px_24px_rgba(255,77,28,0.35)] hover:shadow-[0_10px_30px_rgba(255,77,28,0.5)] hover:-translate-y-0.5',
  secondary:
    'bg-transparent border-2 border-cream/25 text-cream hover:border-gold hover:text-gold',
  gold: 'bg-gradient-to-r from-gold-light to-gold text-charcoal shadow-[0_8px_24px_rgba(244,169,59,0.35)] hover:-translate-y-0.5',
  ghost: 'bg-cream/5 text-cream hover:bg-cream/10',
};

const sizes = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
