import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Check,
  CreditCard,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Trash2,
  Truck,
  Wallet,
  X,
} from 'lucide-react';
import ProductArt from './icons/ProductArt';
import { DELIVERY_SLOTS, PAYMENT_METHODS } from '../data/catalog';
import { isValidBdMobile } from '../lib/format';
import { taka } from '../lib/format';

const PAYMENT_ICONS = { cod: Wallet, mobile: Smartphone, card: CreditCard };

export default function CartDrawer({
  copy,
  lang,
  open,
  onClose,
  detailedItems,
  totals,
  onIncrement,
  onDecrement,
  onRemove,
  area,
  onPlaceOrder,
}) {
  const [step, setStep] = useState('cart');
  const [slot, setSlot] = useState(DELIVERY_SLOTS[0].id);
  const [payment, setPayment] = useState('cod');
  const [form, setForm] = useState({ name: '', phone: '', area, address: '' });
  const [errors, setErrors] = useState({});

  // keep the checkout area in sync with the header selector
  useEffect(() => {
    setForm((f) => (f.area === area ? f : { ...f, area }));
  }, [area]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) setStep('cart');
  }, [open]);

  const progress = Math.min(100, (totals.subtotal / totals.threshold) * 100);

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = copy.checkout.nameError;
    if (!isValidBdMobile(form.phone)) next.phone = copy.checkout.phoneError;
    if (!form.area) next.area = copy.checkout.areaError;
    if (form.address.trim().length < 10) next.address = copy.checkout.addressError;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validate()) return;
    onPlaceOrder({ slot, payment, ...form });
  };

  const fieldClass = (hasError) =>
    `w-full rounded-xl border bg-white px-3.5 py-2.5 text-[13.5px] text-ink outline-none transition-colors placeholder:text-muted/70 ${
      hasError ? 'border-[#D97706] focus:border-[#D97706]' : 'border-line focus:border-action'
    }`;

  return (
    <>
      {/* Scrim */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-[#2A0B4A]/55 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Desktop slide-over / mobile bottom sheet */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={copy.cart.title}
        aria-hidden={!open}
        inert={!open}
        className={`fixed z-50 flex flex-col bg-canvas transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        } inset-x-0 bottom-0 max-h-[88vh] rounded-t-3xl border-t border-line shadow-lift md:inset-y-0 md:left-auto md:right-0 md:max-h-none md:w-[420px] md:rounded-none md:rounded-l-3xl md:border-l md:border-t-0 ${
          open ? 'md:translate-x-0' : 'md:translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3.5">
          {step === 'checkout' && (
            <button
              type="button"
              onClick={() => setStep('cart')}
              aria-label={copy.checkout.backToCart}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-ink transition-colors hover:bg-canvas"
            >
              <ArrowLeft className="h-4.5 w-4.5" strokeWidth={2.4} />
            </button>
          )}
          <div className="min-w-0 flex-1">
            <h2
              lang="bn"
              className="bn-tight truncate text-[16px] font-bold text-brand sm:text-[17px]"
            >
              {step === 'cart' ? copy.cart.title : copy.checkout.title}
            </h2>
            {step === 'cart' && totals.itemCount > 0 && (
              <p className="num text-[12px] text-muted">
                {totals.itemCount} {copy.cart.itemCount}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-canvas hover:text-ink"
          >
            <X className="h-4.5 w-4.5" strokeWidth={2.6} />
          </button>
        </div>

        {step === 'cart' ? (
          <>
            {/* Free delivery progress */}
            {totals.itemCount > 0 && (
              <div className="border-b border-line bg-surface px-4 py-3">
                <div className="flex items-start gap-2">
                  <Truck
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      totals.freeDeliveryUnlocked ? 'text-action' : 'text-savings'
                    }`}
                    strokeWidth={2.4}
                  />
                  <p
                    lang={lang === 'bn' ? 'bn' : 'en'}
                    className="bn-tight text-[12.5px] leading-relaxed text-ink"
                  >
                    {totals.freeDeliveryUnlocked ? (
                      copy.cart.freeDeliveryUnlocked
                    ) : (
                      copy.cart.freeDeliveryProgress.replace(
                        '[amount]',
                        taka(totals.remaining),
                      )
                    )}
                  </p>
                </div>
                <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-line">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      totals.freeDeliveryUnlocked ? 'bg-action' : 'bg-savings'
                    }`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {detailedItems.length === 0 ? (
                <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-art text-muted">
                    <ShoppingBag className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                  <p lang="bn" className="bn-tight text-[15px] font-bold text-ink">
                    {copy.cart.empty}
                  </p>
                  <p lang="bn" className="text-[12.5px] leading-relaxed text-muted">
                    {copy.cart.emptyHint}
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-1 rounded-xl bg-action px-4 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-action-dark"
                  >
                    {copy.cart.continueShopping}
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-line">
                  {detailedItems.map((item) => (
                    <li key={`${item.productId}::${item.variantId}`} className="flex gap-3 p-3.5">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-art">
                        <ProductArt kind={item.product.art} className="h-12 w-12" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          lang="bn"
                          className="bn-tight text-[13px] font-semibold leading-snug text-ink"
                        >
                          {item.product.nameBn}
                        </p>
                        <p className="num text-[11.5px] text-muted">
                          {item.variant.label} × {item.qty}
                        </p>
                        <div className="mt-1.5 flex items-center gap-2">
                          <div className="flex h-8 items-center rounded-lg border border-line bg-white">
                            <button
                              type="button"
                              onClick={() => onDecrement(item.productId, item.variantId)}
                              aria-label="-"
                              className="flex h-8 w-8 items-center justify-center rounded-l-lg text-ink transition-colors hover:bg-canvas"
                            >
                              <Minus className="h-3.5 w-3.5" strokeWidth={2.8} />
                            </button>
                            <span className="num w-7 text-center text-[13px] font-bold text-ink">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => onIncrement(item.productId, item.variantId)}
                              aria-label="+"
                              className="flex h-8 w-8 items-center justify-center rounded-r-lg text-ink transition-colors hover:bg-canvas"
                            >
                              <Plus className="h-3.5 w-3.5" strokeWidth={2.8} />
                            </button>
                          </div>
                          <span className="num text-[13px] font-bold text-ink">
                            {taka(item.lineTotal)}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(item.productId, item.variantId)}
                        aria-label={copy.cart.remove}
                        className="h-8 w-8 shrink-0 self-start rounded-lg text-muted transition-colors hover:bg-[#FEF3C7] hover:text-savings"
                      >
                        <Trash2 className="h-4 w-4" strokeWidth={2.2} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Bill breakdown */}
            {detailedItems.length > 0 && (
              <div className="border-t border-line bg-surface px-4 py-3.5">
                <dl className="space-y-1.5 text-[13px]">
                  <div className="flex items-center justify-between">
                    <dt lang="bn" className="text-muted">
                      {copy.cart.subtotal}
                    </dt>
                    <dd className="num font-semibold text-ink">{taka(totals.subtotal)}</dd>
                  </div>
                  {totals.savings > 0 && (
                    <div className="flex items-center justify-between">
                      <dt lang="bn" className="text-muted">
                        {copy.cart.totalSavings}
                      </dt>
                      <dd className="num font-semibold text-savings">
                        − {taka(totals.savings)}
                      </dd>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <dt lang="bn" className="text-muted">
                      {copy.cart.deliveryFee}
                    </dt>
                    <dd
                      className={`num font-semibold ${
                        totals.deliveryFee === 0 ? 'text-action' : 'text-ink'
                      }`}
                    >
                      {totals.deliveryFee === 0 ? copy.cart.free : taka(totals.deliveryFee)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-line-soft pt-2">
                    <dt lang="bn" className="text-[14px] font-bold text-ink">
                      {copy.cart.grandTotal}
                    </dt>
                    <dd className="num text-[16px] font-bold text-brand">
                      {taka(totals.total)}
                    </dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={() => setStep('checkout')}
                  className="mt-3.5 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-action text-[14px] font-bold leading-tight text-white transition-colors hover:bg-action-dark active:scale-[0.99]"
                >
                  {copy.cart.checkout}
                  <span className="num">· {taka(totals.total)}</span>
                </button>
              </div>
            )}
          </>
        ) : (
          /* ---------------- Checkout step ---------------- */
          <div className="flex-1 overflow-y-auto">
            {/* Delivery slot */}
            <section className="border-b border-line bg-surface px-4 py-4">
              <h3 lang="bn" className="bn-tight text-[13.5px] font-bold text-brand">
                {copy.checkout.slotTitle}
              </h3>
              <div className="mt-2.5 space-y-2">
                {DELIVERY_SLOTS.map((s) => {
                  const active = slot === s.id;
                  return (
                    <label
                      key={s.id}
                      className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 py-2.5 transition-colors ${
                        active
                          ? 'border-action bg-action/8'
                          : 'border-line bg-white hover:border-action/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="slot"
                        value={s.id}
                        checked={active}
                        onChange={() => setSlot(s.id)}
                        className="sr-only"
                      />
                      <span
                        className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border-2 ${
                          active ? 'border-action' : 'border-line'
                        }`}
                      >
                        {active && <span className="h-2 w-2 rounded-full bg-action" />}
                      </span>
                      <span lang="bn" className="text-[13px] font-medium text-ink">
                        {lang === 'bn' ? s.bn : s.en}
                      </span>
                    </label>
                  );
                })}
              </div>
            </section>

            {/* Customer details */}
            <section className="border-b border-line bg-surface px-4 py-4">
              <h3 lang="bn" className="bn-tight text-[13.5px] font-bold text-brand">
                {copy.checkout.detailsTitle}
              </h3>
              <div className="mt-3 space-y-3">
                <div>
                  <label
                    htmlFor="co-name"
                    lang="bn"
                    className="mb-1 block text-[12px] font-semibold text-ink"
                  >
                    {copy.checkout.name}
                  </label>
                  <input
                    id="co-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={copy.checkout.namePlaceholder}
                    className={fieldClass(errors.name)}
                  />
                  {errors.name && (
                    <p lang="bn" className="mt-1 text-[11.5px] text-[#D97706]">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="co-phone"
                    lang="bn"
                    className="mb-1 block text-[12px] font-semibold text-ink"
                  >
                    {copy.checkout.phone}
                  </label>
                  <input
                    id="co-phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={14}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={copy.checkout.phonePlaceholder}
                    className={`${fieldClass(errors.phone)} num`}
                  />
                  {errors.phone ? (
                    <p lang="bn" className="mt-1 text-[11.5px] text-[#D97706]">
                      {errors.phone}
                    </p>
                  ) : (
                    <p lang="bn" className="mt-1 text-[11.5px] text-muted">
                      {copy.checkout.phoneHint}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="co-area"
                    lang="bn"
                    className="mb-1 block text-[12px] font-semibold text-ink"
                  >
                    {copy.checkout.area}
                  </label>
                  <select
                    id="co-area"
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    className={fieldClass(errors.area)}
                  >
                    <option value="">—</option>
                    {['Dhanmondi', 'Uttara', 'Mirpur', 'Gulshan & Banani', 'Mohammadpur', 'Bashundhara R/A', 'Savar'].map(
                      (a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ),
                    )}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="co-address"
                    lang="bn"
                    className="mb-1 block text-[12px] font-semibold text-ink"
                  >
                    {copy.checkout.address}
                  </label>
                  <textarea
                    id="co-address"
                    rows={3}
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder={copy.checkout.addressPlaceholder}
                    className={`${fieldClass(errors.address)} resize-none`}
                  />
                  {errors.address && (
                    <p lang="bn" className="mt-1 text-[11.5px] text-[#D97706]">
                      {errors.address}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Payment method */}
            <section className="bg-surface px-4 py-4">
              <h3 lang="bn" className="bn-tight text-[13.5px] font-bold text-brand">
                {copy.checkout.paymentTitle}
              </h3>
              <div className="mt-2.5 space-y-2">
                {PAYMENT_METHODS.map((method) => {
                  const Icon = PAYMENT_ICONS[method.id];
                  const active = payment === method.id;
                  return (
                    <label
                      key={method.id}
                      className={`flex cursor-pointer items-start gap-2.5 rounded-xl border px-3.5 py-2.5 transition-colors ${
                        active ? 'border-action bg-action/8' : 'border-line bg-white hover:border-action/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={active}
                        onChange={() => setPayment(method.id)}
                        className="sr-only"
                      />
                      <span
                        className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border-2 ${
                          active ? 'border-action' : 'border-line'
                        }`}
                      >
                        {active && <span className="h-2 w-2 rounded-full bg-action" />}
                      </span>
                      <Icon
                        className={`mt-0.5 h-4.5 w-4.5 shrink-0 ${
                          active ? 'text-action' : 'text-muted'
                        }`}
                        strokeWidth={2.2}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-1.5">
                          <span lang="bn" className="text-[13px] font-semibold text-ink">
                            {lang === 'bn' ? method.bn : method.en}
                          </span>
                          {method.badgeBn && (
                            <span className="rounded-full bg-action px-2 py-0.5 text-[10px] font-bold text-white">
                              {lang === 'bn' ? method.badgeBn : method.badgeEn}
                            </span>
                          )}
                        </span>
                        <span lang="bn" className="mt-0.5 block text-[11.5px] leading-relaxed text-muted">
                          {lang === 'bn' ? method.bnSub : method.enSub}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </section>
          </div>
        )}

        {/* Checkout footer with place-order CTA */}
        {step === 'checkout' && (
          <div className="border-t border-line bg-surface px-4 py-3.5 safe-bottom">
            <div className="mb-2.5 flex items-center justify-between">
              <span lang="bn" className="text-[12.5px] text-muted">
                {copy.checkout.orderSummary} ·{' '}
                <span className="num">{totals.itemCount}</span> {copy.checkout.items}
              </span>
              <span className="num text-[16px] font-bold text-brand">{taka(totals.total)}</span>
            </div>
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-action text-[14px] font-bold leading-tight text-white transition-colors hover:bg-action-dark active:scale-[0.99]"
            >
              <ShieldCheck className="h-4.5 w-4.5" strokeWidth={2.4} />
              {copy.checkout.placeOrder}
              <span className="num">• {taka(totals.total)}</span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
