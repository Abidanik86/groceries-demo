import { useCallback, useMemo, useState } from 'react';
import {
  DELIVERY_FEE,
  FREE_DELIVERY_THRESHOLD,
  PRODUCTS,
  getProduct,
  getVariant,
} from '../data/catalog';

export const cartKey = (productId, variantId) => `${productId}::${variantId}`;

/** Each product opens on the variant that carries its headline badge. */
const defaultVariantFor = (product) =>
  product.variants.find((v) => v.badge)?.id ?? product.variants[0].id;

export function useCart() {
  const [items, setItems] = useState({});
  const [selectedVariants, setSelectedVariants] = useState(() =>
    Object.fromEntries(PRODUCTS.map((p) => [p.id, defaultVariantFor(p)])),
  );

  const selectVariant = useCallback((productId, variantId) => {
    setSelectedVariants((prev) => ({ ...prev, [productId]: variantId }));
  }, []);

  const addItem = useCallback((productId, variantId, amount = 1) => {
    const product = getProduct(productId);
    if (!product) return;
    const variant = getVariant(product, variantId);
    if (!variant) return;
    const key = cartKey(productId, variant.id);
    setItems((prev) => ({
      ...prev,
      [key]: { productId, variantId: variant.id, qty: (prev[key]?.qty ?? 0) + amount },
    }));
    setSelectedVariants((prev) => ({ ...prev, [productId]: variant.id }));
  }, []);

  const setQty = useCallback((productId, variantId, qty) => {
    const key = cartKey(productId, variantId);
    setItems((prev) => {
      if (qty <= 0) {
        if (!prev[key]) return prev;
        const next = { ...prev };
        delete next[key];
        return next;
      }
      const existing = prev[key];
      if (!existing) return prev;
      return { ...prev, [key]: { ...existing, qty } };
    });
  }, []);

  const increment = useCallback(
    (productId, variantId) => {
      const current = items[cartKey(productId, variantId)]?.qty ?? 0;
      setQty(productId, variantId, current + 1);
    },
    [items, setQty],
  );

  const decrement = useCallback(
    (productId, variantId) => {
      const current = items[cartKey(productId, variantId)]?.qty ?? 0;
      setQty(productId, variantId, current - 1);
    },
    [items, setQty],
  );

  const removeItem = useCallback(
    (productId, variantId) => setQty(productId, variantId, 0),
    [setQty],
  );

  const clear = useCallback(() => setItems({}), []);

  const qtyOf = useCallback(
    (productId, variantId) => items[cartKey(productId, variantId)]?.qty ?? 0,
    [items],
  );

  const detailedItems = useMemo(
    () =>
      Object.values(items).map((entry) => {
        const product = getProduct(entry.productId);
        const variant = getVariant(product, entry.variantId);
        const lineTotal = variant.price * entry.qty;
        const lineSavings = variant.reg ? (variant.reg - variant.price) * entry.qty : 0;
        return { ...entry, product, variant, lineTotal, lineSavings };
      }),
    [items],
  );

  const totals = useMemo(() => {
    const itemCount = detailedItems.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = detailedItems.reduce((sum, i) => sum + i.lineTotal, 0);
    const savings = detailedItems.reduce((sum, i) => sum + i.lineSavings, 0);
    const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0 ? 0 : DELIVERY_FEE;
    const total = subtotal + deliveryFee;
    const remaining = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
    return {
      itemCount,
      subtotal,
      savings,
      deliveryFee,
      total,
      remaining,
      freeDeliveryUnlocked: subtotal >= FREE_DELIVERY_THRESHOLD,
      threshold: FREE_DELIVERY_THRESHOLD,
    };
  }, [detailedItems]);

  return {
    items,
    detailedItems,
    totals,
    selectedVariants,
    selectVariant,
    addItem,
    setQty,
    increment,
    decrement,
    removeItem,
    clear,
    qtyOf,
  };
}
