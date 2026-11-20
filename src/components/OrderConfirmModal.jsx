import { useEffect } from 'react';
import { CheckCircle2, Clock, MapPin, Phone, Wallet, X } from 'lucide-react';
import { DELIVERY_SLOTS, PAYMENT_METHODS } from '../data/catalog';
import { taka } from '../lib/format';

export default function OrderConfirmModal({ copy, lang, order, onClose, onKeepShopping }) {
  useEffect(() => {
    if (!order) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [order, onClose]);

  if (!order) return null;

  const slot = DELIVERY_SLOTS.find((s) => s.id === order.slot);
  const method = PAYMENT_METHODS.find((m) => m.id === order.payment);

  const rows = [
    { icon: Clock, label: copy.confirm.slot, value: slot ? (lang === 'bn' ? slot.bn : slot.en) : '' },
    { icon: MapPin, label: copy.confirm.address, value: `${order.area} — ${order.address}` },
    { icon: Phone, label: copy.confirm.phone, value: order.phone },
    { icon: Wallet, label: copy.confirm.payment, value: method ? (lang === 'bn' ? method.bn : method.en) : '' },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <div
        onClick={onClose}
        aria-hidden="true"
        className="absolute inset-0 bg-[#2A0B4A]/60 backdrop-blur-[2px]"
      />
      <div
        role="dialog"
        aria-modal="true"
        className="animate-slide-up relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-surface shadow-lift sm:rounded-3xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="close"
          className="absolute right-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-canvas hover:text-ink"
        >
          <X className="h-4.5 w-4.5" strokeWidth={2.6} />
        </button>

        <div className="px-5 pb-5 pt-7 text-center sm:px-7 sm:pb-7">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100">
            <CheckCircle2 className="h-7 w-7 text-teal-600" strokeWidth={2.2} />
          </span>

          <h2 lang="bn" className="bn-tight mt-3.5 text-[19px] font-bold text-brand">
            {copy.confirm.title}
          </h2>
          <p lang="bn" className="mt-1 text-[13px] leading-relaxed text-muted">
            {copy.confirm.subtitle}
          </p>

          <div className="mt-4 flex items-center justify-between rounded-xl bg-canvas px-4 py-3">
            <span lang="bn" className="text-[12.5px] text-muted">
              {copy.confirm.orderId}
            </span>
            <span className="num text-[15px] font-bold text-brand">{order.id}</span>
          </div>

          <dl className="mt-3 divide-y divide-line-soft rounded-xl border border-line text-left">
            {rows.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-2.5 px-4 py-2.5">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" strokeWidth={2.2} />
                <div className="min-w-0 flex-1">
                  <dt lang="bn" className="text-[11.5px] text-muted">
                    {label}
                  </dt>
                  <dd lang="bn" className="text-[13px] font-medium leading-snug text-ink">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-3 flex items-center justify-between rounded-xl bg-gradient-to-r from-[#4C1D95] to-[#DB2777] px-4 py-3">
            <span lang="bn" className="text-[13px] font-semibold text-white">
              {copy.confirm.total}
            </span>
            <span className="num text-[17px] font-bold text-white">{taka(order.total)}</span>
          </div>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={onKeepShopping}
              className="min-h-[44px] flex-1 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FB923C] text-[13.5px] font-bold text-white transition-all hover:from-[#EA580C] hover:to-[#F97316]"
            >
              {copy.confirm.keepShopping}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] flex-1 rounded-xl border border-line bg-white text-[13.5px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              {copy.confirm.done}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
