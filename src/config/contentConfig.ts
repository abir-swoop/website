/**
 * contentConfig.ts
 *
 * Single source of truth for all locale-specific content.
 * Components receive a `content` prop derived from this config —
 * no duplicate components, no inline copy.
 *
 * Locale keys: "NG" (Nigeria, route "/") | "SZ" (Eswatini, route "/sz")
 */

export type Locale = 'NG' | 'SZ';

export interface Country {
  code: Locale;
  name: string;
  /** Unicode flag emoji */
  flag: string;
  route: string;
}

export const COUNTRIES: Country[] = [
  { code: 'NG', name: 'Nigeria',   flag: '🇳🇬', route: '/'   },
  { code: 'SZ', name: 'Eswatini',  flag: '🇸🇿', route: '/sz' },
];

// ---------------------------------------------------------------------------
// Announcement strip (non-sticky bar above navbar)
// ---------------------------------------------------------------------------
export interface StripContent {
  /** 'rebrand' = "THUMO is now Swoop" | 'launch' = launch announcement */
  variant: 'rebrand' | 'launch';
  /** Text shown for the 'launch' variant */
  launchText?: string;
}

// ---------------------------------------------------------------------------
// Hero section
// ---------------------------------------------------------------------------
export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /** Path relative to /public */
  heroImage: string;
  appStoreUrl: string;
  playStoreUrl: string;
}

// ---------------------------------------------------------------------------
// Features / categories
// ---------------------------------------------------------------------------
export interface CategoryCard {
  id: string;
  title: string;
  description: string;
  /** Tailwind bg color class from design system */
  color: 'food' | 'grocery' | 'pharmacy';
  icon: string; // lucide icon name or asset path
}

// ---------------------------------------------------------------------------
// Pricing / plans
// ---------------------------------------------------------------------------
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface PricingContent {
  headline: string;
  subheadline: string;
  plans: PricingPlan[];
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------
export interface Testimonial {
  name: string;
  role: string;
  body: string;
  avatar: string;
}

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------
export interface Stat {
  value: string;
  label: string;
}

// ---------------------------------------------------------------------------
// Full page content shape
// ---------------------------------------------------------------------------
export interface PageContent {
  locale: Locale;
  country: Country;
  strip: StripContent;
  hero: HeroContent;
  categories: CategoryCard[];
  stats: Stat[];
  pricing: PricingContent;
  testimonials: Testimonial[];
  /** Download / app section headline */
  downloadHeadline: string;
  downloadSubheadline: string;
}

// ---------------------------------------------------------------------------
// Nigeria (NG) content
// ---------------------------------------------------------------------------
const NG_CONTENT: PageContent = {
  locale: 'NG',
  country: COUNTRIES[0],

  strip: {
    variant: 'launch',
    launchText: '🎉 Launching soon in Lagos, Nigeria',
  },

  hero: {
    headline: 'Delivered to your door in minutes',
    subheadline:
      'Food, groceries, and pharmacy essentials — all on one app. Available across major Nigerian cities.',
    ctaPrimary:  'Get the App',
    ctaSecondary: 'Learn More',
    heroImage:    '/images/hero-ng.png',
    appStoreUrl:  '#',
    playStoreUrl: '#',
  },

  categories: [
    {
      id:          'food',
      title:       'Food Delivery',
      description: 'Order from thousands of restaurants near you. Hot meals, fast delivery.',
      color:       'food',
      icon:        'UtensilsCrossed',
    },
    {
      id:          'grocery',
      title:       'Groceries',
      description: 'Fresh produce, pantry staples, and household items delivered in under 30 min.',
      color:       'grocery',
      icon:        'ShoppingBasket',
    },
    {
      id:          'pharmacy',
      title:       'Pharmacy',
      description: 'Prescription and OTC medicines delivered safely to your door.',
      color:       'pharmacy',
      icon:        'Pill',
    },
  ],

  stats: [
    { value: '500K+', label: 'Happy Customers' },
    { value: '10K+',  label: 'Partner Restaurants' },
    { value: '25+',   label: 'Cities in Nigeria' },
    { value: '4.8★',  label: 'App Store Rating' },
  ],

  pricing: {
    headline:    'Simple, transparent pricing',
    subheadline: 'No hidden fees. Cancel anytime.',
    plans: [
      {
        name:        'Basic',
        price:       '₦0',
        period:      'forever',
        features:    ['3 free deliveries/month', 'Standard delivery speed', 'Email support'],
        highlighted: false,
        cta:         'Get Started',
      },
      {
        name:        'Pro',
        price:       '₦2,500',
        period:      'per month',
        features:    ['Unlimited deliveries', 'Priority delivery', 'Live chat support', 'Exclusive deals'],
        highlighted: true,
        cta:         'Start Free Trial',
      },
      {
        name:        'Business',
        price:       '₦8,000',
        period:      'per month',
        features:    ['Everything in Pro', 'Team accounts', 'Dedicated account manager', 'API access'],
        highlighted: false,
        cta:         'Contact Sales',
      },
    ],
  },

  testimonials: [
    {
      name:   'Adaeze Okonkwo',
      role:   'Busy mum in Lagos',
      body:   'Thumo saves me at least two hours every week. Groceries and school lunch — sorted!',
      avatar: '/images/avatar-ng-1.png',
    },
    {
      name:   'Emeka Nwachukwu',
      role:   'Software Engineer, Abuja',
      body:   'The pharmacy delivery is a lifesaver. No more queues for routine medication.',
      avatar: '/images/avatar-ng-2.png',
    },
    {
      name:   'Funmi Adesanya',
      role:   'Restaurant owner, Lagos',
      body:   'Our orders tripled within the first month on Thumo. Best decision we ever made.',
      avatar: '/images/avatar-ng-3.png',
    },
  ],

  downloadHeadline:    'Get Thumo on your phone',
  downloadSubheadline: 'Available on iOS and Android. Start your first delivery today.',
};

// ---------------------------------------------------------------------------
// Eswatini (SZ) content
// ---------------------------------------------------------------------------
const SZ_CONTENT: PageContent = {
  locale: 'SZ',
  country: COUNTRIES[1],

  strip: {
    variant: 'rebrand',
  },

  hero: {
    headline: 'Fast delivery across Eswatini',
    subheadline:
      'Food, groceries, and pharmacy essentials delivered to your door across Mbabane and Manzini.',
    ctaPrimary:  'Download the App',
    ctaSecondary: 'How It Works',
    heroImage:    '/images/hero-sz.png',
    appStoreUrl:  '#',
    playStoreUrl: '#',
  },

  categories: [
    {
      id:          'food',
      title:       'Food Delivery',
      description: 'Local favourites and international cuisines delivered fast across Eswatini.',
      color:       'food',
      icon:        'UtensilsCrossed',
    },
    {
      id:          'grocery',
      title:       'Groceries',
      description: 'Fresh, local produce and daily essentials — delivered within the hour.',
      color:       'grocery',
      icon:        'ShoppingBasket',
    },
    {
      id:          'pharmacy',
      title:       'Pharmacy',
      description: 'Trusted medicines and health products dispatched from licensed pharmacies.',
      color:       'pharmacy',
      icon:        'Pill',
    },
  ],

  stats: [
    { value: '50K+', label: 'Happy Customers' },
    { value: '500+', label: 'Partner Restaurants' },
    { value: '2',    label: 'Major Cities' },
    { value: '4.9★', label: 'App Store Rating' },
  ],

  pricing: {
    headline:    'Simple, transparent pricing',
    subheadline: 'No hidden fees. Cancel anytime.',
    plans: [
      {
        name:        'Basic',
        price:       'E0',
        period:      'forever',
        features:    ['3 free deliveries/month', 'Standard delivery speed', 'Email support'],
        highlighted: false,
        cta:         'Get Started',
      },
      {
        name:        'Pro',
        price:       'E99',
        period:      'per month',
        features:    ['Unlimited deliveries', 'Priority delivery', 'Live chat support', 'Exclusive deals'],
        highlighted: true,
        cta:         'Start Free Trial',
      },
      {
        name:        'Business',
        price:       'E350',
        period:      'per month',
        features:    ['Everything in Pro', 'Team accounts', 'Dedicated account manager', 'API access'],
        highlighted: false,
        cta:         'Contact Sales',
      },
    ],
  },

  testimonials: [
    {
      name:   'Nompumelelo Dlamini',
      role:   'Teacher, Mbabane',
      body:   'Thumo changed how I shop. Groceries at my door before I even finish work.',
      avatar: '/images/avatar-sz-1.png',
    },
    {
      name:   'Sibusiso Nxumalo',
      role:   'Entrepreneur, Manzini',
      body:   'Incredibly fast delivery. The app is super smooth — I recommend it to everyone.',
      avatar: '/images/avatar-sz-2.png',
    },
    {
      name:   'Lindiwe Maseko',
      role:   'Restaurant owner, Mbabane',
      body:   'Joining Thumo gave our small restaurant national visibility. Game changer!',
      avatar: '/images/avatar-sz-3.png',
    },
  ],

  downloadHeadline:    'Get Thumo on your phone',
  downloadSubheadline: 'Available on iOS and Android. First delivery on us.',
};

// ---------------------------------------------------------------------------
// Exported map — use this in pages/hooks
// ---------------------------------------------------------------------------
export const CONTENT_MAP: Record<Locale, PageContent> = {
  NG: NG_CONTENT,
  SZ: SZ_CONTENT,
};
