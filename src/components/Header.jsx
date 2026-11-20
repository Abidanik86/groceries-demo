import { useEffect, useRef, useState } from 'react';
import {
  ChevronDown,
  MapPin,
  Minus,
  Phone,
  Plus,
  Search,
  ShoppingCart,
  Truck,
  X,
} from 'lucide-react';
import Logo from './icons/Logo';
import ProductArt from './icons/ProductArt';
import { AREAS, SEARCH_SUGGESTIONS } from '../data/catalog';
import { searchProducts } from '../lib/search';
import { taka } from '../lib/format';

function AreaSelect({ area, onChange, copy }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center gap-1.5 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-white/10 sm:w-auto"
      >
        <MapPin className="h-3.5 w-3.5 shrink-0 text-[#FCD34D]" strokeWidth={2.4} />
        <span className="flex min-w-0 flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-wide text-[#E9D5FF]">
            {copy.topbar.areaLabel}
          </span>
          <span className="truncate text-[13px] font-semibold text-white">{area}</span>
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 text-[#E9D5FF] transition-transform ${open ? 'rotate-180' : ''}`}
          strokeWidth={2.6}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 top-full z-50 mt-1.5 w-56 overflow-hidden rounded-xl border border-line bg-surface py-1 shadow-lift"
        >
          {AREAS.map((a) => (
            <li key={a}>
              <button
                type="button"
                role="option"
                aria-selected={a === area}
                onClick={() => {
                  onChange(a);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left text-[13px] transition-colors hover:bg-canvas ${
                  a === area ? 'bg-canvas font-semibold text-brand' : 'text-ink'
                }`}
              >
                <MapPin
                  className={`h-3.5 w-3.5 shrink-0 ${a === area ? 'text-action' : 'text-muted'}`}
                  strokeWidth={2.4}
                />
                {a}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SearchBox({ copy, lang, qtyOf, onAdd, onIncrement, onDecrement, inputRef }) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const wrapRef = useRef(null);

  const results = searchProducts(query);

  useEffect(() => {
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setFocused(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const showSuggestions = focused && !query.trim();
  const showResults = focused && query.trim().length > 0;

  return (
    <div className="relative w-full" ref={wrapRef}>
      <div
        className={`flex items-center gap-2 rounded-xl border bg-canvas px-3 transition-all ${
          focused ? 'border-violet-500 ring-2 ring-violet-200' : 'border-line'
        }`}
      >
        <Search className="h-4 w-4 shrink-0 text-muted" strokeWidth={2.4} />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          placeholder={copy.header.searchPlaceholder}
          aria-label={copy.header.searchPlaceholder}
          className="min-w-0 flex-1 bg-transparent py-2.5 text-[13.5px] text-ink outline-none placeholder:text-muted/80 sm:text-sm"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="clear"
            className="shrink-0 rounded-md p-1 text-muted transition-colors hover:bg-line-soft hover:text-ink"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2.6} />
          </button>
        )}
      </div>

      {(showSuggestions || showResults) && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-line bg-surface shadow-lift">
          {showSuggestions && (
            <div className="p-3">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted">
                {copy.search.suggestionsTitle}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SEARCH_SUGGESTIONS.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setQuery(s.query)}
                    className="rounded-full border border-line bg-canvas px-3 py-1.5 text-[12.5px] font-medium text-ink transition-colors hover:border-violet-300 hover:bg-violet-600 hover:text-white"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {showResults && (
            <div className="max-h-[min(60vh,420px)] overflow-y-auto">
              {results.length === 0 ? (
                <div className="px-4 py-6 text-center">
                  <p className="text-sm font-semibold text-ink">{copy.search.noResults}</p>
                  <p className="mt-1 text-xs text-muted">{copy.search.noResultsHint}</p>
                </div>
              ) : (
                <>
                  <p className="border-b border-line-soft px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-muted">
                    {copy.search.resultsTitle}
                  </p>
                  <ul>
                    {results.map((product) => {
                      const variant =
                        product.variants.find((v) => v.badge) ?? product.variants[0];
                      const qty = qtyOf(product.id, variant.id);
                      return (
                        <li
                          key={product.id}
                          className="flex items-center gap-3 border-b border-line-soft px-3 py-2.5 last:border-0 hover:bg-canvas"
                        >
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-art">
                            <ProductArt kind={product.art} className="h-10 w-10" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p
                              lang="bn"
                              className="bn-tight truncate text-[13px] font-semibold text-ink"
                            >
                              {product.nameBn}
                            </p>
                            <p className="num text-[11.5px] text-muted">
                              {variant.label} · {taka(variant.price)}
                            </p>
                          </div>
                          {qty === 0 ? (
                            <button
                              type="button"
                              onClick={() => onAdd(product.id, variant.id)}
                              className="flex min-h-[34px] shrink-0 items-center gap-1 rounded-lg bg-gradient-to-r from-[#F97316] to-[#FB923C] px-2.5 text-[12px] font-bold text-white transition-colors hover:from-[#EA580C] hover:to-[#F97316]"
                            >
                              <Plus className="h-3.5 w-3.5" strokeWidth={2.8} />
                              {copy.search.addToCart}
                            </button>
                          ) : (
                            <div className="flex min-h-[34px] shrink-0 items-center gap-1 rounded-lg bg-violet-700 px-1">
                              <button
                                type="button"
                                onClick={() => onDecrement(product.id, variant.id)}
                                aria-label="-"
                                className="flex h-6 w-6 items-center justify-center rounded-md text-white hover:bg-white/20"
                              >
                                <Minus className="h-3 w-3" strokeWidth={3} />
                              </button>
                              <span className="num w-5 text-center text-[13px] font-bold text-white">
                                {qty}
                              </span>
                              <button
                                type="button"
                                onClick={() => onIncrement(product.id, variant.id)}
                                aria-label="+"
                                className="flex h-6 w-6 items-center justify-center rounded-md text-white hover:bg-white/20"
                              >
                                <Plus className="h-3 w-3" strokeWidth={3} />
                              </button>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Header({
  copy,
  lang,
  onLangChange,
  area,
  onAreaChange,
  totals,
  onOpenCart,
  qtyOf,
  onAdd,
  onIncrement,
  onDecrement,
  searchInputRef,
}) {
  return (
    <>
      {/* Top utility strip */}
      <div className="bg-gradient-to-r from-[#3B0764] via-[#6D28D9] to-[#BE185D] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-1 px-4 py-1.5 text-[12px] sm:px-6">
          <AreaSelect area={area} onChange={onAreaChange} copy={copy} />

          <span className="hidden items-center gap-1.5 rounded-lg bg-white/12 px-2 py-1 text-[12px] text-[#F5F3FF] md:inline-flex">
            <Truck className="h-3.5 w-3.5 text-[#FCD34D]" strokeWidth={2.4} />
            <span className="num">⚡ {copy.topbar.etaPrefix}</span>
            <span className="font-semibold text-white">— {area}</span>
          </span>

          <div className="ml-auto flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-[#F5F3FF]">
              <Phone className="h-3.5 w-3.5 text-[#FCD34D]" strokeWidth={2.4} />
              <span className="hidden sm:inline">{copy.topbar.helpline}</span>
              <span className="num font-semibold text-white">09612-889900</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#F5F3FF]">
              <Truck className="h-3.5 w-3.5 text-[#FCD34D]" strokeWidth={2.4} />
              <span className="num">{copy.topbar.freeDelivery}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Sticky main header */}
      <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-2.5 sm:gap-4 sm:px-6 sm:py-3">
          <a href="#top" className="flex shrink-0 items-center gap-2" aria-label="Mudiwala">
            <Logo className="h-9 w-9 sm:h-10 sm:w-10" />
            <span className="hidden flex-col leading-none sm:flex">
              <span lang="bn" className="bn-tight text-[17px] font-bold text-brand">
                মুদিওয়ালা
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                Mudiwala
              </span>
            </span>
          </a>

          <div className="min-w-0 flex-1">
            <SearchBox
              copy={copy}
              lang={lang}
              qtyOf={qtyOf}
              onAdd={onAdd}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              inputRef={searchInputRef}
            />
          </div>

          <button
            type="button"
            onClick={() => onLangChange(lang === 'bn' ? 'en' : 'bn')}
            aria-label="Language toggle"
            className="flex shrink-0 items-center gap-1 rounded-lg border border-line bg-canvas px-2 py-1.5 text-[12px] font-semibold text-ink transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 sm:px-2.5"
          >
            <span lang="bn" className={lang === 'bn' ? 'text-violet-700' : 'text-muted'}>
              বাংলা
            </span>
            <span className="text-muted">|</span>
            <span className={lang === 'en' ? 'text-violet-700' : 'text-muted'}>EN</span>
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            aria-label={copy.header.cartAria}
            className="relative flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FB923C] px-2.5 py-2 text-white shadow-sm transition-all hover:from-[#EA580C] hover:to-[#F97316] sm:px-3.5"
          >
            <ShoppingCart className="h-4.5 w-4.5" strokeWidth={2.4} />
            <span className="hidden text-[13px] font-semibold sm:inline">{copy.header.cart}</span>
            {totals.itemCount > 0 && (
              <>
                <span className="num rounded-full bg-violet-700 px-1.5 py-0.5 text-[11px] font-bold leading-none text-white">
                  {totals.itemCount}
                </span>
                <span className="num hidden text-[12.5px] font-semibold lg:inline">
                  {taka(totals.subtotal)}
                </span>
              </>
            )}
          </button>
        </div>
      </header>
    </>
  );
}
