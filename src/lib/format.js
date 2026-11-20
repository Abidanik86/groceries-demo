const BANGLA_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

export const toBanglaDigits = (value) =>
  String(value).replace(/\d/g, (d) => BANGLA_DIGITS[Number(d)]);

/** Latin digits with thousands separators — used for prices (tabular-nums friendly). */
export const formatNumber = (value) => Number(value).toLocaleString('en-US');

export const taka = (value) => `৳${formatNumber(value)}`;

/** Bangla digits + separators — used for savings badges and threshold copy. */
export const takaBn = (value) => `৳${toBanglaDigits(formatNumber(value))}`;

export const isValidBdMobile = (value) => /^01[3-9]\d{8}$/.test(String(value).replace(/[\s-]/g, ''));
