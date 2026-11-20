export const CATEGORIES = [
  { id: 'all', bn: 'সব পণ্য', en: 'All Products', accent: 'violet' },
  { id: 'rice-dal', bn: 'চাল ও ডাল', en: 'Rice & Dal', accent: 'turmeric' },
  { id: 'oil-spice', bn: 'তেল ও মসলা', en: 'Oil & Spices', accent: 'mango' },
  { id: 'fresh-veg', bn: 'তাজা বাজার ও ডিম', en: 'Fresh Market & Eggs', accent: 'teal' },
  { id: 'dairy-breakfast', bn: 'দুগ্ধ ও নাস্তা', en: 'Dairy & Breakfast', accent: 'sky' },
  { id: 'homecare', bn: 'ঘর পরিষ্কার', en: 'Home Care', accent: 'berry' },
];

export const NEEDS = [
  {
    id: 'monthly',
    emoji: '🍚',
    bn: 'মাসিক বাজার',
    en: 'Monthly Groceries',
    bnSub: 'চাল, ডাল, তেল ও মসলা',
    enSub: 'Rice, dal, oil & spices',
    accent: 'violet',
  },
  {
    id: 'breakfast',
    emoji: '🍳',
    bn: 'সকালের নাস্তা',
    en: 'Breakfast Basics',
    bnSub: 'ডিম, দুধ, চা ও চিনি',
    enSub: 'Eggs, milk, tea & sugar',
    accent: 'turmeric',
  },
  {
    id: 'fresh',
    emoji: '🥬',
    bn: 'আজকের তাজা',
    en: 'Fresh Today',
    bnSub: 'তাজা সবজি ও ফার্মের ডিম',
    enSub: 'Fresh vegetables & farm eggs',
    accent: 'teal',
  },
  {
    id: 'homecare',
    emoji: '🧼',
    bn: 'ঘর পরিষ্কার',
    en: 'Home Care',
    bnSub: 'টিস্যু ও গৃহস্থালি পণ্য',
    enSub: 'Tissues & household goods',
    accent: 'berry',
  },
];

export const AREAS = [
  'Dhanmondi',
  'Uttara',
  'Mirpur',
  'Gulshan & Banani',
  'Mohammadpur',
  'Bashundhara R/A',
  'Savar',
];

export const DELIVERY_SLOTS = [
  { id: 'today-pm', bn: 'আজ বিকাল ৪:০০ - ৬:০০', en: 'Today 4:00 PM - 6:00 PM' },
  { id: 'today-night', bn: 'আজ রাত ৮:০০ - ১০:০০', en: 'Tonight 8:00 PM - 10:00 PM' },
  { id: 'tomorrow-am', bn: 'আগামীকাল সকাল ৯:০০ - ১১:০০', en: 'Tomorrow 9:00 AM - 11:00 AM' },
];

export const PAYMENT_METHODS = [
  {
    id: 'cod',
    bn: 'ক্যাশ অন ডেলিভারি',
    en: 'Cash on Delivery',
    bnSub: 'পণ্য হাতে পেয়ে ক্যাশ পেমেন্ট',
    enSub: 'Pay cash when the goods arrive',
    badgeBn: 'সবচেয়ে জনপ্রিয়',
    badgeEn: 'Most popular',
  },
  {
    id: 'mobile',
    bn: 'বিকাশ / নগদ (মোবাইল ব্যাংকিং)',
    en: 'bKash / Nagad (Mobile Banking)',
    bnSub: 'মোবাইল ব্যাংকিংয়ে পেমেন্ট করুন',
    enSub: 'Pay instantly via mobile banking',
    badgeBn: '',
    badgeEn: '',
  },
  {
    id: 'card',
    bn: 'কার্ড পেমেন্ট',
    en: 'Card Payment',
    bnSub: 'ভিসা, মাস্টারকার্ড ও অন্যান্য কার্ড',
    enSub: 'Visa, Mastercard and other cards',
    badgeBn: '',
    badgeEn: '',
  },
];

/**
 * 12 authentic Bangladeshi grocery SKUs.
 * Each product owns one SVG illustration key (see components/icons/ProductArt.jsx).
 */
export const PRODUCTS = [
  {
    id: 'miniket-rice',
    nameBn: 'মিনিকেট চাল (প্রিমিয়াম)',
    nameEn: 'Premium Miniket Rice',
    category: 'rice-dal',
    needs: ['monthly'],
    art: 'rice',
    keywords: ['chal', 'rice', 'miniket', 'minikate', 'চাল', 'মিনিকেট'],
    variants: [
      { id: '1kg', label: '1kg', labelBn: '১ কেজি', price: 78, reg: 82 },
      { id: '5kg', label: '5kg', labelBn: '৫ কেজি', price: 375, reg: 410, badge: 'savings', badgeValue: 35 },
      { id: '25kg', label: '25kg', labelBn: '২৫ কেজি', price: 1820, reg: 1950, badge: 'savings', badgeValue: 130 },
    ],
  },
  {
    id: 'rupchanda-oil',
    nameBn: 'রূপচাঁদা ফর্টিফাইড সয়াবিন তেল',
    nameEn: 'Rupchanda Fortified Soybean Oil',
    category: 'oil-spice',
    needs: ['monthly'],
    art: 'oil',
    keywords: ['tel', 'oil', 'soybean', 'rupchanda', 'তেল', 'সয়াবিন', 'রূপচাঁদা'],
    variants: [
      { id: '1L', label: '1L', labelBn: '১ লিটার', price: 175 },
      { id: '2L', label: '2L', labelBn: '২ লিটার', price: 348, reg: 355 },
      { id: '5L', label: '5L', labelBn: '৫ লিটার', price: 845, reg: 880, badge: 'savings', badgeValue: 35 },
    ],
  },
  {
    id: 'mosur-dal',
    nameBn: 'দেশি মসুর ডাল (বাছাইকৃত)',
    nameEn: 'Deshi Mosur Dal',
    category: 'rice-dal',
    needs: ['monthly'],
    art: 'dal',
    keywords: ['dal', 'mosur', 'moshur', 'lentil', 'ডাল', 'মসুর'],
    variants: [
      { id: '500g', label: '500g', labelBn: '৫০০ গ্রাম', price: 72 },
      { id: '1kg', label: '1kg', labelBn: '১ কেজি', price: 138, reg: 145, badge: 'savings', badgeValue: 7 },
      { id: '2kg', label: '2kg', labelBn: '২ কেজি', price: 270, reg: 290 },
    ],
  },
  {
    id: 'farm-eggs',
    nameBn: 'ফার্মের তাজা লাল ডিম',
    nameEn: 'Farm Fresh Red Eggs',
    category: 'fresh-veg',
    needs: ['breakfast', 'fresh'],
    art: 'eggs',
    keywords: ['dim', 'egg', 'eggs', 'lal dim', 'ডিম'],
    variants: [
      { id: '12pcs', label: '12 pcs', labelBn: '১ ডজন', price: 148, badge: 'fresh' },
      { id: '30pcs', label: '30 pcs', labelBn: '১ ট্রে', price: 360, reg: 375, badge: 'savings', badgeValue: 15 },
    ],
  },
  {
    id: 'deshi-potato',
    nameBn: 'দেশি আলু (বাছাইকৃত)',
    nameEn: 'Deshi Potato',
    category: 'fresh-veg',
    needs: ['fresh', 'monthly'],
    art: 'potato',
    keywords: ['alu', 'aloo', 'potato', 'আলু'],
    variants: [
      { id: '1kg', label: '1kg', labelBn: '১ কেজি', price: 48, badge: 'fresh' },
      { id: '3kg', label: '3kg', labelBn: '৩ কেজি', price: 138, reg: 144 },
      { id: '5kg', label: '5kg', labelBn: '৫ কেজি', price: 225, reg: 240 },
    ],
  },
  {
    id: 'deshi-onion',
    nameBn: 'দেশি পেঁয়াজ (ফরিদপুরী)',
    nameEn: 'Deshi Onion',
    category: 'fresh-veg',
    needs: ['fresh', 'monthly'],
    art: 'onion',
    keywords: ['peyaj', 'piaj', 'onion', 'পেঁয়াজ', 'পিয়াজ'],
    variants: [
      { id: '1kg', label: '1kg', labelBn: '১ কেজি', price: 85, badge: 'fresh' },
      { id: '2kg', label: '2kg', labelBn: '২ কেজি', price: 165, reg: 170 },
      { id: '5kg', label: '5kg', labelBn: '৫ কেজি', price: 405, reg: 425 },
    ],
  },
  {
    id: 'aarong-milk',
    nameBn: 'আড়ং ডেইরি ইউএইচটি তরল দুধ',
    nameEn: 'Aarong Dairy UHT Milk',
    category: 'dairy-breakfast',
    needs: ['breakfast'],
    art: 'milk',
    keywords: ['dudh', 'milk', 'aarong', 'দুধ', 'আড়ং'],
    variants: [
      { id: '500ml', label: '500ml', labelBn: '৫০০ মিলি', price: 55 },
      { id: '1L', label: '1L', labelBn: '১ লিটার', price: 98, reg: 105, badge: 'popular' },
    ],
  },
  {
    id: 'teer-sugar',
    nameBn: 'তীর রিফাইন্ড চিনি',
    nameEn: 'Teer Refined Sugar',
    category: 'rice-dal',
    needs: ['monthly', 'breakfast'],
    art: 'sugar',
    keywords: ['chini', 'sugar', 'teer', 'চিনি', 'তীর'],
    variants: [
      { id: '1kg', label: '1kg', labelBn: '১ কেজি', price: 128 },
      { id: '2kg', label: '2kg', labelBn: '২ কেজি', price: 252, reg: 256 },
    ],
  },
  {
    id: 'aci-spice',
    nameBn: 'এসিআই পিওর হলুদ ও মরিচ গুঁড়া কম্বো',
    nameEn: 'ACI Pure Turmeric & Chili Powder',
    category: 'oil-spice',
    needs: ['monthly'],
    art: 'spice',
    keywords: ['holud', 'morich', 'mosla', 'spice', 'aci', 'হলুদ', 'মরিচ', 'মসলা'],
    variants: [
      { id: '200gx2', label: '200g x 2', labelBn: '২০০ গ্রাম × ২', price: 165, reg: 180, badge: 'savings', badgeValue: 15 },
      { id: '500gx2', label: '500g x 2', labelBn: '৫০০ গ্রাম × ২', price: 395, reg: 430 },
    ],
  },
  {
    id: 'ispahani-tea',
    nameBn: 'ইস্পাহানি মির্জাপুর বেস্ট লিফ চা',
    nameEn: 'Ispahani Mirzapore Best Leaf Tea',
    category: 'dairy-breakfast',
    needs: ['breakfast'],
    art: 'tea',
    keywords: ['cha', 'tea', 'ispahani', 'চা', 'ইস্পাহানি'],
    variants: [
      { id: '200g', label: '200g', labelBn: '২০০ গ্রাম', price: 115 },
      { id: '400g', label: '400g', labelBn: '৪০০ গ্রাম', price: 220, reg: 230, badge: 'bestseller' },
    ],
  },
  {
    id: 'radhuni-mustard-oil',
    nameBn: 'রসুই খাঁটি সরিষার তেল',
    nameEn: 'Radhuni Pure Mustard Oil',
    category: 'oil-spice',
    needs: ['monthly'],
    art: 'mustard',
    keywords: ['sorishar tel', 'mustard oil', 'tel', 'সরিষার তেল'],
    variants: [
      { id: '500ml', label: '500ml', labelBn: '৫০০ মিলি', price: 160 },
      { id: '1L', label: '1L', labelBn: '১ লিটার', price: 310, reg: 325, badge: 'savings', badgeValue: 15 },
    ],
  },
  {
    id: 'bashundhara-tissue',
    nameBn: 'বসুন্ধরা কিচেন টাওয়েল ও টিস্যু প্যাক',
    nameEn: 'Bashundhara Household Tissue Pack',
    category: 'homecare',
    needs: ['homecare'],
    art: 'tissue',
    keywords: ['tissue', 'towel', 'bashundhara', 'টিস্যু', 'পরিষ্কার'],
    variants: [
      { id: '2roll', label: '2 Rolls', labelBn: '২ রোল', price: 135 },
      { id: '4roll', label: '4 Rolls', labelBn: '৪ রোল', price: 255, reg: 270, badge: 'savings', badgeValue: 15 },
    ],
  },
];

/** The one-tap "repeat last month's basket" bundle. */
export const REPEAT_BASKET = [
  { productId: 'miniket-rice', variantId: '5kg' },
  { productId: 'rupchanda-oil', variantId: '5L' },
  { productId: 'mosur-dal', variantId: '1kg' },
  { productId: 'farm-eggs', variantId: '12pcs' },
  { productId: 'deshi-potato', variantId: '3kg' },
];

export const FREE_DELIVERY_THRESHOLD = 999;
export const DELIVERY_FEE = 50;

export const SEARCH_SUGGESTIONS = [
  { label: 'মিনিকেট চাল', query: 'চাল' },
  { label: 'সয়াবিন তেল', query: 'সয়াবিন তেল' },
  { label: 'ডিম', query: 'ডিম' },
  { label: 'পেঁয়াজ', query: 'পেঁয়াজ' },
  { label: 'আলু', query: 'আলু' },
  { label: 'চিনি', query: 'চিনি' },
];

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);
export const getVariant = (product, variantId) =>
  product?.variants.find((v) => v.id === variantId) ?? product?.variants[0];

/** Savings for a variant against its regular price. */
export const variantSavings = (variant) =>
  variant.reg ? variant.reg - variant.price : 0;
