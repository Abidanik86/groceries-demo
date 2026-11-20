/**
 * Mudiwala brand mark — a geometric basket holding a grain of rice,
 * drawn as a single SVG so it scales cleanly at any size.
 */
export default function Logo({ className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Mudiwala">
      <defs>
        <linearGradient id="mwLogoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1B7A3E" />
          <stop offset="100%" stopColor="#14532D" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#mwLogoGrad)" />
      {/* basket */}
      <path
        d="M13 22h22l-2.4 12.2a3 3 0 0 1-2.9 2.3H18.3a3 3 0 0 1-2.9-2.3L13 22Z"
        fill="#FAF8F2"
      />
      <path d="M10.5 22h27" stroke="#FAF8F2" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M18 22v14M24 22v14M30 22v14" stroke="#14532D" strokeWidth="1.5" opacity=".35" />
      {/* rice grain */}
      <path
        d="M24 6c4 3.2 5.5 7.2 3.6 10.2C26.4 18.6 23.6 19.6 21 18c2.2-1.1 3.4-3 3.6-5.6.2-2.2-.2-4.2-.6-6.4Z"
        fill="#F7F5EE"
      />
      <path d="M22.2 19.4c1.6.2 3.2-.3 4.4-1.4" stroke="#14532D" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}
