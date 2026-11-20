/**
 * Bespoke inline SVG product illustrations — zero external image dependencies.
 * Every artwork is drawn in the Mudiwala palette on a transparent 120x120 canvas.
 */

const Palette = {
  leaf: '#3E8E5F',
  forest: '#4C1D95',
  deep: '#2F1B4D',
  turmeric: '#D97706',
  amber: '#F59E0B',
  cream: '#F7F5EE',
  sand: '#E6E3DA',
  clay: '#C2703D',
  berry: '#9D3B4E',
  sky: '#4A7FB5',
  paper: '#FFFFFF',
  ink: '#241733',
  mute: '#6A5F7A',
};

const S = ({ children, ...rest }) => (
  <g strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {children}
  </g>
);

/* ---------------------------------------------------------------- rice sack */
const RiceArt = () => (
  <S>
    <path
      d="M38 30c0-4 2-7 6-8 5-1.5 13-2.5 16-2.5s11 1 16 2.5c4 1 6 4 6 8v56c0 5-4 9-9 9H47c-5 0-9-4-9-9V30Z"
      fill="#EDE3CB"
      stroke={Palette.ink}
      strokeWidth="2.5"
    />
    <path d="M44 26c4 3 28 3 32 0" stroke={Palette.mute} strokeWidth="2" />
    <path d="M40 34h40" stroke={Palette.sand} strokeWidth="2" />
    <rect x="42" y="46" width="36" height="30" rx="3" fill={Palette.paper} stroke={Palette.ink} strokeWidth="2.2" />
    <path d="M60 52v18M54 56l6-4 6 4" stroke={Palette.turmeric} strokeWidth="2.4" />
    <path d="M50 64c4-4 16-4 20 0" stroke={Palette.leaf} strokeWidth="2.4" />
    <path d="M38 86h44" stroke={Palette.sand} strokeWidth="2" />
    <path d="M30 92c3-3 5-5 8-5M90 92c-3-3-5-5-8-5" stroke={Palette.leaf} strokeWidth="2.4" />
  </S>
);

/* ------------------------------------------------------------- soybean oil */
const OilArt = () => (
  <S>
    <path d="M50 16h20v8c0 3-2 5-5 5h-10c-3 0-5-2-5-5v-8Z" fill={Palette.forest} stroke={Palette.ink} strokeWidth="2.4" />
    <path d="M44 34c0-3 2-5 5-5h22c3 0 5 2 5 5v4h6c6 0 10 5 10 11v45c0 5-4 9-9 9H37c-5 0-9-4-9-9V49c0-6 4-11 10-11h6v-4Z" fill="#F6E7B8" stroke={Palette.ink} strokeWidth="2.5" />
    <rect x="32" y="56" width="56" height="26" rx="3" fill={Palette.paper} stroke={Palette.ink} strokeWidth="2.2" />
    <path d="M60 62v14M54 66l6-4 6 4" stroke={Palette.turmeric} strokeWidth="2.4" />
    <path d="M44 74c4-4 28-4 32 0" stroke={Palette.leaf} strokeWidth="2.4" />
    <path d="M42 44c0-4 2-6 6-6" stroke="#fff" strokeWidth="3" />
  </S>
);

/* ------------------------------------------------------------- lentil bowl */
const DalArt = () => (
  <S>
    <path d="M20 54h80c0 22-14 38-40 38S20 76 20 54Z" fill={Palette.paper} stroke={Palette.ink} strokeWidth="2.5" />
    <path d="M20 54h80" stroke={Palette.ink} strokeWidth="2.5" />
    <path d="M28 50c0-9 14-16 32-16s32 7 32 16" fill="#E3A33C" stroke={Palette.ink} strokeWidth="2.4" />
    <circle cx="46" cy="44" r="2.4" fill="#C97F1E" />
    <circle cx="60" cy="40" r="2.4" fill="#C97F1E" />
    <circle cx="72" cy="46" r="2.4" fill="#C97F1E" />
    <circle cx="55" cy="50" r="2.2" fill="#C97F1E" />
    <path d="M62 50c6-9 16-12 24-11-1 9-7 16-16 18" fill={Palette.leaf} stroke={Palette.forest} strokeWidth="2.2" />
    <path d="M74 45c-1 5-4 9-8 11" stroke={Palette.forest} strokeWidth="2" />
    <path d="M33 70c4 6 11 9 18 10" stroke={Palette.sand} strokeWidth="3" />
  </S>
);

/* ------------------------------------------------------------- egg carton */
const EggsArt = () => (
  <S>
    <path d="M16 62h88v26c0 6-5 10-11 10H27c-6 0-11-4-11-10V62Z" fill="#D8CDB4" stroke={Palette.ink} strokeWidth="2.5" />
    <path d="M16 62h88" stroke={Palette.ink} strokeWidth="2.5" />
    <path d="M26 62c0-10 4-18 12-20h44c8 2 12 10 12 20H26Z" fill="#EFE7D3" stroke={Palette.ink} strokeWidth="2.5" />
    <ellipse cx="42" cy="52" rx="10" ry="14" fill="#F6EBD6" stroke={Palette.ink} strokeWidth="2.2" />
    <ellipse cx="60" cy="48" rx="10" ry="15" fill="#FBF3E3" stroke={Palette.ink} strokeWidth="2.2" />
    <ellipse cx="78" cy="52" rx="10" ry="14" fill="#F6EBD6" stroke={Palette.ink} strokeWidth="2.2" />
    <path d="M38 46c2-3 5-5 8-5" stroke="#fff" strokeWidth="2.4" />
    <path d="M56 42c2-3 5-5 8-5" stroke="#fff" strokeWidth="2.4" />
    <path d="M28 76h64" stroke="#C0B393" strokeWidth="2" />
    <path d="M20 26c6 0 10 4 10 9" stroke={Palette.leaf} strokeWidth="2.6" />
  </S>
);

/* ---------------------------------------------------------------- potatoes */
const PotatoArt = () => (
  <S>
    <path d="M22 74h76l-8 22c-1 3-4 5-7 5H37c-3 0-6-2-7-5l-8-22Z" fill="#D9B98C" stroke={Palette.ink} strokeWidth="2.5" />
    <path d="M18 66h84v10H18z" fill="#E9D3AE" stroke={Palette.ink} strokeWidth="2.5" />
    <path d="M30 66c-3-10 4-18 14-18 8 0 13 5 14 12" fill="#C68A4E" stroke={Palette.ink} strokeWidth="2.4" />
    <ellipse cx="66" cy="50" rx="17" ry="13" fill="#B87A42" stroke={Palette.ink} strokeWidth="2.4" />
    <circle cx="62" cy="47" r="1.8" fill={Palette.deep} />
    <circle cx="70" cy="54" r="1.6" fill={Palette.deep} />
    <circle cx="40" cy="52" r="1.6" fill={Palette.deep} />
    <path d="M78 40c4-6 10-8 16-7" stroke={Palette.leaf} strokeWidth="2.6" />
    <path d="M28 74h64" stroke="#C0A277" strokeWidth="2" />
  </S>
);

/* ------------------------------------------------------------------ onions */
const OnionArt = () => (
  <S>
    <ellipse cx="44" cy="66" rx="22" ry="24" fill="#B75C6E" stroke={Palette.ink} strokeWidth="2.5" />
    <path d="M44 42c-7 0-12 10-12 22s5 24 12 24 12-10 12-24-5-22-12-22Z" fill="#C97A8A" stroke={Palette.ink} strokeWidth="2.2" />
    <path d="M44 42c-2-8 1-14 6-18" stroke={Palette.leaf} strokeWidth="2.8" />
    <path d="M48 26c5-2 10-2 14 0" stroke={Palette.leaf} strokeWidth="2.4" />
    <ellipse cx="82" cy="72" rx="18" ry="20" fill="#A9505F" stroke={Palette.ink} strokeWidth="2.5" />
    <path d="M82 52c-6 0-10 9-10 19s4 21 10 21 10-9 10-21-4-19-10-19Z" fill="#B75C6E" stroke={Palette.ink} strokeWidth="2.2" />
    <path d="M82 52c-1-7 2-12 6-15" stroke={Palette.leaf} strokeWidth="2.6" />
    <path d="M20 90h80" stroke={Palette.sand} strokeWidth="4" />
  </S>
);

/* -------------------------------------------------------------- milk carton */
const MilkArt = () => (
  <S>
    <path d="M38 36 60 16l22 20v58c0 3-2 5-5 5H43c-3 0-5-2-5-5V36Z" fill={Palette.paper} stroke={Palette.ink} strokeWidth="2.5" />
    <path d="M38 36h44" stroke={Palette.ink} strokeWidth="2.5" />
    <path d="M60 16v20" stroke={Palette.sand} strokeWidth="2" />
    <rect x="38" y="58" width="44" height="30" fill="#DCEBF3" stroke={Palette.ink} strokeWidth="2.2" />
    <path d="M60 66v14M52 70l8-5 8 5" stroke={Palette.sky} strokeWidth="2.6" />
    <path d="M48 80c4-4 20-4 24 0" stroke={Palette.forest} strokeWidth="2.6" />
    <path d="M50 46h20" stroke={Palette.leaf} strokeWidth="2.6" />
    <path d="M46 50h28" stroke={Palette.leaf} strokeWidth="2" />
  </S>
);

/* ------------------------------------------------------------------- sugar */
const SugarArt = () => (
  <S>
    <path d="M34 38h52v52c0 5-4 9-9 9H43c-5 0-9-4-9-9V38Z" fill="#FBFAF6" stroke={Palette.ink} strokeWidth="2.5" />
    <path d="M34 38c0-8 8-14 26-14s26 6 26 14" fill="#F1EEE3" stroke={Palette.ink} strokeWidth="2.5" />
    <path d="M60 24v14" stroke={Palette.sand} strokeWidth="2" />
    <circle cx="60" cy="66" r="15" fill="#EDF3E9" stroke={Palette.forest} strokeWidth="2.4" />
    <path d="M60 56v20M52 62h16M54 72h12" stroke={Palette.forest} strokeWidth="2.4" />
    <path d="M42 92h36" stroke={Palette.sand} strokeWidth="2.4" />
  </S>
);

/* ------------------------------------------------------------ spice combo */
const SpiceArt = () => (
  <S>
    <path d="M22 44h32v52c0 4-3 7-7 7H29c-4 0-7-3-7-7V44Z" fill="#E8A33C" stroke={Palette.ink} strokeWidth="2.5" />
    <rect x="20" y="34" width="36" height="12" rx="3" fill={Palette.forest} stroke={Palette.ink} strokeWidth="2.4" />
    <rect x="26" y="62" width="24" height="18" rx="2" fill={Palette.paper} stroke={Palette.ink} strokeWidth="2.2" />
    <path d="M32 76c4-10 10-12 12-12s8 2 12 12Z" fill="#E8A33C" stroke={Palette.turmeric} strokeWidth="2" />
    <path d="M66 44h32v52c0 4-3 7-7 7H73c-4 0-7-3-7-7V44Z" fill="#B23A2E" stroke={Palette.ink} strokeWidth="2.5" />
    <rect x="64" y="34" width="36" height="12" rx="3" fill={Palette.forest} stroke={Palette.ink} strokeWidth="2.4" />
    <rect x="70" y="62" width="24" height="18" rx="2" fill={Palette.paper} stroke={Palette.ink} strokeWidth="2.2" />
    <path d="M76 74h12M78 66l4 4 4-6" stroke="#B23A2E" strokeWidth="2.4" />
  </S>
);

/* --------------------------------------------------------------- tea packet */
const TeaArt = () => (
  <S>
    <path d="M32 24h56v76c0 4-3 7-7 7H39c-4 0-7-3-7-7V24Z" fill={Palette.forest} stroke={Palette.ink} strokeWidth="2.5" />
    <path d="M32 24c6 4 50 4 56 0" stroke="#7C3AED" strokeWidth="2.2" />
    <rect x="40" y="38" width="40" height="42" rx="3" fill="#F4EFE2" stroke={Palette.ink} strokeWidth="2.2" />
    <path d="M56 48c12 4 18 14 14 26-10 4-22-2-26-12-2-6 4-12 12-14Z" fill={Palette.leaf} stroke={Palette.deep} strokeWidth="2.2" />
    <path d="M52 74c6-10 14-16 20-18" stroke={Palette.deep} strokeWidth="2" />
    <path d="M44 88h32" stroke="#7C3AED" strokeWidth="2.6" />
  </S>
);

/* ------------------------------------------------------------ mustard oil */
const MustardArt = () => (
  <S>
    <path d="M54 14h12v9c0 2-2 4-4 4h-4c-2 0-4-2-4-4v-9Z" fill={Palette.turmeric} stroke={Palette.ink} strokeWidth="2.4" />
    <path d="M46 32c0-3 2-5 5-5h18c3 0 5 2 5 5v3h7c5 0 8 4 8 9v50c0 5-4 9-9 9H40c-5 0-9-4-9-9V44c0-5 3-9 8-9h7v-3Z" fill="#E3B455" stroke={Palette.ink} strokeWidth="2.5" />
    <rect x="35" y="58" width="50" height="26" rx="3" fill={Palette.paper} stroke={Palette.ink} strokeWidth="2.2" />
    <path d="M60 64v14M53 68l7-4 7 4" stroke={Palette.turmeric} strokeWidth="2.6" />
    <path d="M45 77c4-5 26-5 30 0" stroke={Palette.forest} strokeWidth="2.4" />
    <path d="M44 40c0-3 2-5 5-5" stroke="#FBEBB8" strokeWidth="3" />
  </S>
);

/* ------------------------------------------------------------ tissue rolls */
const TissueArt = () => (
  <S>
    <ellipse cx="42" cy="98" rx="20" ry="7" fill="#C9C2AE" stroke={Palette.ink} strokeWidth="2.4" />
    <path d="M22 98V46c0-7 9-12 20-12s20 5 20 12v52H22Z" fill={Palette.paper} stroke={Palette.ink} strokeWidth="2.5" />
    <ellipse cx="42" cy="46" rx="20" ry="9" fill="#EFEBDE" stroke={Palette.ink} strokeWidth="2.4" />
    <ellipse cx="42" cy="46" rx="6" ry="3" fill="#D6CFBA" stroke={Palette.ink} strokeWidth="2" />
    <path d="M42 43c-2-9 2-14 8-15 4 6 2 13-5 16" fill={Palette.paper} stroke={Palette.ink} strokeWidth="2.2" />
    <ellipse cx="80" cy="98" rx="16" ry="6" fill="#C9C2AE" stroke={Palette.ink} strokeWidth="2.4" />
    <path d="M64 98V56c0-6 7-10 16-10s16 4 16 10v42H64Z" fill="#F4F1E8" stroke={Palette.ink} strokeWidth="2.5" />
    <ellipse cx="80" cy="56" rx="16" ry="8" fill="#E4DFCE" stroke={Palette.ink} strokeWidth="2.4" />
    <ellipse cx="80" cy="56" rx="5" ry="2.6" fill="#CDC5AE" stroke={Palette.ink} strokeWidth="2" />
    <path d="M80 53c-2-8 1-12 6-13 3 5 1 11-4 13" fill={Palette.paper} stroke={Palette.ink} strokeWidth="2" />
  </S>
);

const ART = {
  rice: RiceArt,
  oil: OilArt,
  dal: DalArt,
  eggs: EggsArt,
  potato: PotatoArt,
  onion: OnionArt,
  milk: MilkArt,
  sugar: SugarArt,
  spice: SpiceArt,
  tea: TeaArt,
  mustard: MustardArt,
  tissue: TissueArt,
};

export default function ProductArt({ kind, className = '' }) {
  const Art = ART[kind] ?? RiceArt;
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <Art />
    </svg>
  );
}
