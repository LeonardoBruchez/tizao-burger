export default function Logo({ className = '', markOnly = false, light = false }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 64 64" className="w-9 h-9 shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="logo-flame" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#C73310" />
            <stop offset="55%" stopColor="#FF4D1C" />
            <stop offset="100%" stopColor="#F4A93B" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="#120D0A" />
        <path
          fill="url(#logo-flame)"
          d="M32 8c2 7-6 9-6 16 0 3 2 5 4 5-3-6 1-9 2-13 1 5 6 7 6 14 0 7-5 13-12 13-8 0-14-6-14-14 0-9 8-13 10-19 1-3 1-6 0-9 4 1 9 3 10 7z"
        />
      </svg>
      {!markOnly && (
        <span className={`font-display text-2xl leading-[1.15] tracking-wide ${light ? 'text-cream' : 'text-cream'}`}>
          TIZÃO
          <span className="block text-[9px] font-body font-semibold tracking-[0.3em] text-gold -mt-0.5">
            BURGER CO.
          </span>
        </span>
      )}
    </div>
  );
}
