import { ClipboardList, Grid2x2, Home, Search, ShoppingCart } from 'lucide-react';
import { taka } from '../lib/format';

export function FloatingCartPill({ copy, lang, totals, onOpenCart }) {
  if (totals.itemCount === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[76px] z-30 px-3 md:hidden">
      <button
        type="button"
        onClick={onOpenCart}
        className="pointer-events-auto flex min-h-[50px] w-full items-center gap-2 rounded-2xl bg-gradient-to-r from-[#F97316] to-[#FB923C] px-4 text-white shadow-lift transition-transform active:scale-[0.985]"
      >
        <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/15">
          <ShoppingCart className="h-4 w-4" strokeWidth={2.4} />
          <span className="num absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-violet-700 px-1 text-[10px] font-bold leading-none">
            {totals.itemCount}
          </span>
        </span>
        <span className="num text-[13px] font-semibold">
          {totals.itemCount} {copy.cart.itemCount} • {taka(totals.subtotal)}
        </span>
        <span className="ml-auto inline-flex items-center gap-1 text-[13px] font-bold text-white">
          {copy.floatingCart.view}
          <span aria-hidden="true">→</span>
        </span>
      </button>
    </div>
  );
}

export default function MobileNav({ copy, lang, activeTab, onTabChange, onSearch, onListOrder }) {
  const tabs = [
    { id: 'home', label: copy.bottomNav.home, Icon: Home, action: onTabChange },
    { id: 'category', label: copy.bottomNav.category, Icon: Grid2x2, action: onTabChange },
    { id: 'search', label: copy.bottomNav.search, Icon: Search, action: onSearch },
    { id: 'list', label: copy.bottomNav.listOrder, Icon: ClipboardList, action: onListOrder },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/97 backdrop-blur safe-bottom md:hidden">
      <ul className="grid grid-cols-4">
        {tabs.map(({ id, label, Icon, action }) => {
          const active = activeTab === id;
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => action(id)}
                aria-current={active ? 'page' : undefined}
                className={`flex min-h-[60px] w-full flex-col items-center justify-center gap-1 px-1 transition-colors ${
                  active ? 'text-action' : 'text-muted'
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={active ? 2.5 : 2} />
                <span
                  lang="bn"
                  className="bn-tight max-w-full truncate text-[10.5px] font-semibold leading-tight"
                >
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
