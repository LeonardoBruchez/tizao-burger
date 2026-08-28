import Reveal from './Reveal';

export default function SectionHeading({
  kicker,
  title,
  description,
  align = 'center',
  light = true,
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {kicker && (
        <Reveal direction="fade">
          <span className="section-heading-sub text-xs sm:text-sm text-ember font-semibold uppercase">
            {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] ${light ? 'text-cream' : 'text-charcoal'}`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className={`text-base sm:text-lg ${light ? 'text-cream-dim' : 'text-charcoal-light'}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
