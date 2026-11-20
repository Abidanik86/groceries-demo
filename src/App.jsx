import { useCallback, useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RepeatBanner from './components/RepeatBanner';
import NeedsNav from './components/NeedsNav';
import ProductGrid from './components/ProductGrid';
import TrustStrip from './components/TrustStrip';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import OrderConfirmModal from './components/OrderConfirmModal';
import ListOrderModal from './components/ListOrderModal';
import MobileNav, { FloatingCartPill } from './components/MobileNav';
import Toast from './components/Toast';
import { COPY } from './data/copy';
import { PRODUCTS, REPEAT_BASKET, variantSavings } from './data/catalog';
import { useCart } from './hooks/useCart';
import { taka } from './lib/format';

export default function App() {
  const [lang, setLang] = useState('bn');
  const [area, setArea] = useState('Dhanmondi');
  const [activeNeed, setActiveNeed] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sort, setSort] = useState('popular');
  const [cartOpen, setCartOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [repeatVisible, setRepeatVisible] = useState(true);
  const [order, setOrder] = useState(null);
  const [toast, setToast] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  const searchInputRef = useRef(null);
  const copy = COPY[lang];

  const {
    detailedItems,
    totals,
    selectedVariants,
    selectVariant,
    addItem,
    increment,
    decrement,
    removeItem,
    clear,
    qtyOf,
  } = useCart();

  const showToast = useCallback((message) => setToast(message), []);

  /* ------------------------------------------------------------ filtering */
  const visibleProducts = useMemo(() => {
    let list = PRODUCTS.filter((product) => {
      const needOk = activeNeed === 'all' || product.needs.includes(activeNeed);
      const catOk = activeCategory === 'all' || product.category === activeCategory;
      return needOk && catOk;
    });

    if (sort === 'price-asc') {
      list = [...list].sort(
        (a, b) => a.variants[0].price - b.variants[0].price,
      );
    } else if (sort === 'savings') {
      list = [...list].sort((a, b) => {
        const maxSavings = (p) =>
          Math.max(...p.variants.map((v) => variantSavings(v)));
        return maxSavings(b) - maxSavings(a);
      });
    }

    return list;
  }, [activeNeed, activeCategory, sort]);

  /* --------------------------------------------------------------- actions */
  const handleAdd = useCallback(
    (productId, variantId) => {
      addItem(productId, variantId);
      showToast(copy.toast.added);
    },
    [addItem, copy.toast.added, showToast],
  );

  const handleIncrement = useCallback(
    (productId, variantId) => increment(productId, variantId),
    [increment],
  );

  const handleDecrement = useCallback(
    (productId, variantId) => {
      const current = qtyOf(productId, variantId);
      decrement(productId, variantId);
      if (current <= 1) showToast(copy.toast.removed);
    },
    [decrement, qtyOf, copy.toast.removed, showToast],
  );

  const handleRemove = useCallback(
    (productId, variantId) => {
      removeItem(productId, variantId);
      showToast(copy.toast.removed);
    },
    [removeItem, copy.toast.removed, showToast],
  );

  const handleAddRepeat = useCallback(() => {
    REPEAT_BASKET.forEach((entry) => addItem(entry.productId, entry.variantId));
    showToast(copy.repeat.added);
  }, [addItem, copy.repeat.added, showToast]);

  const handlePlaceOrder = useCallback(
    (details) => {
      const id = `#MW-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrder({ ...details, id, total: totals.total, itemCount: totals.itemCount });
      clear();
      setCartOpen(false);
      showToast(copy.toast.orderPlaced);
    },
    [clear, copy.toast.orderPlaced, showToast, totals.total, totals.itemCount],
  );

  const scrollToProducts = useCallback(() => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleMobileTab = useCallback(
    (tabId) => {
      setActiveTab(tabId);
      if (tabId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (tabId === 'category') {
        scrollToProducts();
      }
    },
    [scrollToProducts],
  );

  const handleSearchTab = useCallback(() => {
    setActiveTab('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.setTimeout(() => searchInputRef.current?.focus(), 320);
  }, []);

  const handleClearFilters = useCallback(() => {
    setActiveNeed('all');
    setActiveCategory('all');
  }, []);

  return (
    <div id="top" className="min-h-screen bg-canvas pb-16 md:pb-0">
      <Header
        copy={copy}
        lang={lang}
        onLangChange={setLang}
        area={area}
        onAreaChange={setArea}
        totals={totals}
        onOpenCart={() => setCartOpen(true)}
        qtyOf={qtyOf}
        onAdd={handleAdd}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        searchInputRef={searchInputRef}
      />

      <main>
        <Hero
          copy={copy}
          lang={lang}
          onStartShopping={scrollToProducts}
          onOpenList={() => setListOpen(true)}
        />

        {repeatVisible && (
          <RepeatBanner
            copy={copy}
            lang={lang}
            onAddAll={handleAddRepeat}
            onDismiss={() => setRepeatVisible(false)}
          />
        )}

        <NeedsNav
          copy={copy}
          lang={lang}
          activeNeed={activeNeed}
          onNeedChange={setActiveNeed}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          sort={sort}
          onSortChange={setSort}
          resultCount={visibleProducts.length}
        />

        <ProductGrid
          products={visibleProducts}
          copy={copy}
          lang={lang}
          selectedVariants={selectedVariants}
          onSelectVariant={selectVariant}
          qtyOf={qtyOf}
          onAdd={handleAdd}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onClearFilters={handleClearFilters}
        />

        <TrustStrip copy={copy} lang={lang} />
      </main>

      <Footer copy={copy} lang={lang} />

      {/* Floating mobile cart + bottom nav */}
      <FloatingCartPill
        copy={copy}
        lang={lang}
        totals={totals}
        onOpenCart={() => setCartOpen(true)}
      />
      <MobileNav
        copy={copy}
        lang={lang}
        activeTab={activeTab}
        onTabChange={handleMobileTab}
        onSearch={handleSearchTab}
        onListOrder={() => setListOpen(true)}
      />

      {/* Overlays */}
      <CartDrawer
        copy={copy}
        lang={lang}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        detailedItems={detailedItems}
        totals={totals}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
        area={area}
        onPlaceOrder={handlePlaceOrder}
      />

      <ListOrderModal
        copy={copy}
        lang={lang}
        open={listOpen}
        onClose={() => setListOpen(false)}
        onSent={showToast}
      />

      <OrderConfirmModal
        copy={copy}
        lang={lang}
        order={order}
        onClose={() => setOrder(null)}
        onKeepShopping={() => {
          setOrder(null);
          scrollToProducts();
        }}
      />

      <Toast message={toast} onDone={() => setToast('')} />
    </div>
  );
}