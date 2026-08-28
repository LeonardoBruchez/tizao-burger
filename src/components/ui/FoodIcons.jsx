import { useId } from 'react';

function useGradientId(prefix) {
  const id = useId();
  return `${prefix}-${id}`.replace(/:/g, '');
}

export function BurgerGlyph({ className }) {
  const gid = useGradientId('bun');
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFCB73" />
          <stop offset="55%" stopColor="#FF7A45" />
          <stop offset="100%" stopColor="#C73310" />
        </linearGradient>
      </defs>
      <path d="M20 46c0-16 18-29 40-29s40 13 40 29" stroke={`url(#${gid})`} strokeWidth="7" strokeLinecap="round" />
      <circle cx="44" cy="26" r="2.4" fill="#FFCB73" />
      <circle cx="60" cy="20" r="2.4" fill="#FFCB73" />
      <circle cx="76" cy="26" r="2.4" fill="#FFCB73" />
      <path d="M16 54h88" stroke="#F4A93B" strokeWidth="7" strokeLinecap="round" />
      <path d="M14 66c8 6 16 4 20-2 6 8 16 8 22 0 6 8 16 8 22 0 4 6 12 8 20 2" stroke="#8FBF3F" strokeWidth="7" strokeLinecap="round" />
      <rect x="18" y="74" width="84" height="14" rx="6" fill={`url(#${gid})`} opacity="0.9" />
      <path d="M18 92c6-4 10 4 16 0s10 4 16 0 10 4 16 0 10 4 16 0 10 4 16 0" stroke="#F4A93B" strokeWidth="6" strokeLinecap="round" />
      <path d="M18 100c22 12 62 12 84 0v6c0 8-8 14-42 14s-42-6-42-14z" fill="#FF7A45" opacity="0.9" />
    </svg>
  );
}

export function FriesGlyph({ className }) {
  const gid = useGradientId('fries');
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFCB73" />
          <stop offset="100%" stopColor="#FF4D1C" />
        </linearGradient>
      </defs>
      {[-24, -12, 0, 12, 24].map((x, i) => (
        <rect key={x} x={54 + x} y={i % 2 === 0 ? 28 : 36} width="9" height="52" rx="3" fill={`url(#${gid})`} transform={`rotate(${x / 4} 60 70)`} />
      ))}
      <path d="M22 72h76l-8 34a8 8 0 01-8 7H38a8 8 0 01-8-7z" fill="#C73310" />
      <path d="M22 72h76l-3 12H25z" fill="#E8491D" />
    </svg>
  );
}

export function RingsGlyph({ className }) {
  const gid = useGradientId('rings');
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFCB73" />
          <stop offset="100%" stopColor="#C73310" />
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="82" rx="38" ry="14" stroke={`url(#${gid})`} strokeWidth="9" />
      <ellipse cx="60" cy="82" rx="14" ry="5" stroke="#120D0A" strokeWidth="4" opacity="0.4" />
      <ellipse cx="60" cy="60" rx="34" ry="12" stroke={`url(#${gid})`} strokeWidth="9" />
      <ellipse cx="60" cy="60" rx="12" ry="4.5" stroke="#120D0A" strokeWidth="4" opacity="0.4" />
      <ellipse cx="60" cy="38" rx="30" ry="11" stroke={`url(#${gid})`} strokeWidth="9" />
      <ellipse cx="60" cy="38" rx="11" ry="4" stroke="#120D0A" strokeWidth="4" opacity="0.4" />
    </svg>
  );
}

export function ShakeGlyph({ className }) {
  const gid = useGradientId('shake');
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFCB73" />
          <stop offset="100%" stopColor="#C73310" />
        </linearGradient>
      </defs>
      <path d="M38 36h44l-8 62a8 8 0 01-8 7H54a8 8 0 01-8-7z" fill={`url(#${gid})`} />
      <ellipse cx="60" cy="36" rx="22" ry="8" fill="#FFF6EA" />
      <path d="M46 22c4 6 24 6 28 0" stroke="#F4A93B" strokeWidth="5" strokeLinecap="round" />
      <path d="M70 18l14-10" stroke="#F4A93B" strokeWidth="5" strokeLinecap="round" />
      <circle cx="86" cy="6" r="3" fill="#F4A93B" />
    </svg>
  );
}

export function SodaGlyph({ className }) {
  const gid = useGradientId('soda');
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF7A45" />
          <stop offset="100%" stopColor="#C73310" />
        </linearGradient>
      </defs>
      <rect x="48" y="10" width="16" height="14" rx="3" fill="#F4A93B" />
      <path d="M44 28h24l6 10-6 8v52a8 8 0 01-8 8H52a8 8 0 01-8-8V46l-6-8z" fill={`url(#${gid})`} />
      <circle cx="58" cy="66" r="3" fill="#FFCB73" opacity="0.8" />
      <circle cx="66" cy="80" r="2.4" fill="#FFCB73" opacity="0.8" />
      <circle cx="56" cy="90" r="2" fill="#FFCB73" opacity="0.8" />
    </svg>
  );
}

export function DessertGlyph({ className }) {
  const gid = useGradientId('dessert');
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7A4A2A" />
          <stop offset="100%" stopColor="#3E2415" />
        </linearGradient>
      </defs>
      <rect x="22" y="58" width="76" height="38" rx="8" fill={`url(#${gid})`} />
      <circle cx="60" cy="46" r="22" fill="#FFF6EA" />
      <path d="M40 44c6-10 34-10 40 0" stroke="#F4A93B" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <path d="M30 62c6 8 54 8 60 0" stroke="#C73310" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function KitchenGlyph({ className }) {
  const gid = useGradientId('flame');
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <defs>
        <linearGradient id={gid} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#C73310" />
          <stop offset="55%" stopColor="#FF4D1C" />
          <stop offset="100%" stopColor="#F4A93B" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gid})`}
        d="M60 14c4 13-11 17-11 30 0 6 4 10 8 10-6-11 2-17 4-25 2 9 11 13 11 26 0 13-9 24-22 24-15 0-26-11-26-26 0-17 15-24 19-35 2-6 2-11 0-17 8 2 15 6 17 13z"
      />
      <rect x="16" y="98" width="88" height="10" rx="5" fill="#2A2019" />
      <rect x="16" y="98" width="88" height="4" rx="2" fill="#F4A93B" opacity="0.5" />
    </svg>
  );
}

export function InteriorGlyph({ className }) {
  const gid = useGradientId('lamp');
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <defs>
        <radialGradient id={gid} cx="0.5" cy="0.35" r="0.65">
          <stop offset="0%" stopColor="#FFCB73" />
          <stop offset="100%" stopColor="#C73310" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="40" r="30" fill={`url(#${gid})`} />
      <path d="M60 68v14" stroke="#2A2019" strokeWidth="5" strokeLinecap="round" />
      <path d="M40 96c0-8 9-14 20-14s20 6 20 14" stroke="#2A2019" strokeWidth="5" strokeLinecap="round" />
      <rect x="14" y="100" width="92" height="6" rx="3" fill="#2A2019" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export const glyphMap = {
  burger: BurgerGlyph,
  fries: FriesGlyph,
  rings: RingsGlyph,
  shake: ShakeGlyph,
  soda: SodaGlyph,
  dessert: DessertGlyph,
  kitchen: KitchenGlyph,
  interior: InteriorGlyph,
};
