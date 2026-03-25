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
  /** Line 1: "Meet Swoop:" */
  headlineLine1: string;
  /** Line 2: "Eswatini's Super App" */
  headlineLine2: string;
  /** Plain part of the subheadline */
  subPre: string;
  /** Bold-highlighted part */
  subBold: string;
  /** Text after the bold part */
  subPost: string;
  appStoreUrl: string;
  playStoreUrl: string;
  /** Path to locale-specific phone mockup image (hero showcase) */
  mockupImage: string;
  /** Path to locale-specific hand-held phone mockup (download section) */
  handMockupImage: string;
  /** 'app-stores' = iOS + Android buttons; 'waitlist' = single waitlist button */
  ctaVariant: 'app-stores' | 'waitlist';
  waitlistUrl?: string;
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
// Join Swoop section
// ---------------------------------------------------------------------------
export interface JoinCard {
  title: string;
  subtitle: string;
  bullets: string[];
}

export interface JoinContent {
  headline: string;
  subheadline: string;
  merchant: JoinCard;
  rider: JoinCard;
  /** SZ: show app store buttons; NG: show a single contact CTA */
  ctaVariant: 'app-stores' | 'contact';
  contactLabel?: string;
  contactUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------
export interface FaqItem {
  question: string;
  answer: string;
}

// ---------------------------------------------------------------------------
// How to Order section
// ---------------------------------------------------------------------------
export interface HowToOrderStep {
  number: string;
  title: string;
  description: string;
  screenImage: string;
}

export interface HowToOrderContent {
  headline: string;
  steps: HowToOrderStep[];
}

// ---------------------------------------------------------------------------
// Full page content shape
// ---------------------------------------------------------------------------
export interface PageContent {
  locale: Locale;
  country: Country;
  strip: StripContent;
  hero: HeroContent;
  howToOrder: HowToOrderContent;
  /** Bold city names in the Food Delivery card */
  foodCities: string;
  categories: CategoryCard[];
  stats: Stat[];
  pricing: PricingContent;
  testimonials: Testimonial[];
  join: JoinContent;
  faqs: FaqItem[];
  /** Download / app section */
  downloadHeadline: string;
  downloadSubheadline: string;
  /** 'app-stores' = show iOS + Android buttons; 'waitlist' = show email input */
  downloadCtaVariant: 'app-stores' | 'waitlist';
  appStoreUrl?: string;
  playStoreUrl?: string;
}

// ---------------------------------------------------------------------------
// Shared FAQs (same across all locales)
// ---------------------------------------------------------------------------
const SHARED_FAQS: FaqItem[] = [
  {
    question: 'What is Swoop?',
    answer:   'Swoop is a super-app built for African cities — starting with food delivery. Order from your favourite restaurants and get it delivered fast. Stay tuned for more services.',
  },
  {
    question: 'Where is Swoop available?',
    answer:   "We're live across four regions in Eswatini — Mbabane, Ezulwini, Matsapha, and Manzini. Lagos, Nigeria to come very soon.",
  },
  {
    question: 'How do I order?',
    answer:   'Download the app and sign up with your phone number, choose your location, pick a restaurant, and check out. You can pay by card, or cash if in Eswatini. Your rider is tracked in real time.',
  },
  {
    question: "I'm in Lagos. When do you launch?",
    answer:   "We're launching in Lagos very soon. Join the waitlist to be first in line and get early access deals when we go live.",
  },
  {
    question: 'How do I partner with Swoop?',
    answer:   "Whether you're a restaurant owner or want to ride with us, you can download the app in Eswatini or use the Contact Us button in Nigeria. We're actively open to self-onboarding across Eswatini and assisting riders and merchants to come online with us for our Lagos launch.",
  },
];

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
    headlineLine1: 'Something big is',
    headlineLine2: 'coming to Lagos!',
    subPre:      'The super app Lagos is waiting for, ',
    subBold:     '',
    subPost:     'starting with food delivery',
    appStoreUrl:  'https://apps.apple.com/us/app/thumo/id6749094829',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.thumoapp.users&pcampaignid=web_share',
    mockupImage:     '/assets/Mockup-ng.png',
    handMockupImage: '/assets/hand-mockup-ng.png',
    ctaVariant:      'waitlist',
    waitlistUrl:     '#contact-us',
  },

  foodCities: 'Lagos, Abuja, and Port Harcourt',

  howToOrder: {
    headline: 'How to order',
    steps: [
      {
        number: '1',
        title: 'Browse your favourites',
        description: 'Explore nearby restaurants, check menus, and find exactly what you\'re craving. See it all before you order.',
        screenImage: '/assets/NG-step-1.png',
      },
      {
        number: '2',
        title: 'Add to cart & order',
        description: 'Pick your meals, customise if needed, and checkout in seconds. Fast, simple, no stress.',
        screenImage: '/assets/NG-step-2.png',
      },
      {
        number: '3',
        title: 'Track it to your doorstep',
        description: 'Watch your order move in real time—from the kitchen to your location. No guessing, just live updates.',
        screenImage: '/assets/NG-step-3.png',
      },
    ],
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

  join: {
    headline:    'Be Part of the Movement',
    subheadline: 'Whether you want to earn or grow your business — Swoop is your partner.',
    merchant: {
      title:    'Partner as a Merchant',
      subtitle: 'No upfront costs and guaranteed weekly payouts.',
      bullets:  ['White-glove onboarding', 'Transparent pricing – no price manipulation', 'Completely free to start!'],
    },
    rider: {
      title:    'Become a rider',
      subtitle: 'The best earning rates of any food delivery app',
      bullets:  ['Instant payouts', 'Flexible working', 'Incentive bonuses'],
    },
    ctaVariant:   'contact',
    contactLabel: 'Contact Us',
    contactUrl:   '#contact-us',
  },

  faqs: SHARED_FAQS,
  downloadHeadline:    'Join the waitlist!',
  downloadSubheadline: 'Sign up now and be the first to know when we go live —with exclusive early bird deals for customers!',
  downloadCtaVariant:  'waitlist',
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
    headlineLine1: 'Meet Swoop:',
    headlineLine2: "Eswatini's Super App",
    subPre:      'Discover Swoop, the super-app that delivers food right to your door! ',
    subBold:     'New features, new regions, superior experience.',
    subPost:     ' Try food delivery like never before below:',
    appStoreUrl:  'https://apps.apple.com/us/app/thumo/id6749094829',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.thumoapp.users&pcampaignid=web_share',
    mockupImage:     '/assets/Mockup-sz.png',
    handMockupImage: '/assets/hand-mockup-sz.png',
    ctaVariant:      'app-stores',
  },

  foodCities: 'Mbabane, Matsapha, Ezulwini, and Manzini',

  howToOrder: {
    headline: 'How to order',
    steps: [
      {
        number: '1',
        title: 'Browse your favourites',
        description: 'Explore nearby restaurants, check menus, and find exactly what you\'re craving. See it all before you order.',
        screenImage: '/assets/SZ-step-1.png',
      },
      {
        number: '2',
        title: 'Add to cart & order',
        description: 'Pick your meals, customise if needed, and checkout in seconds. Fast, simple, no stress.',
        screenImage: '/assets/SZ-step-2.png',
      },
      {
        number: '3',
        title: 'Track it to your doorstep',
        description: 'Watch your order move in real time—from the kitchen to your location. No guessing, just live updates.',
        screenImage: '/assets/SZ-step-3.png',
      },
    ],
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

  join: {
    headline:    'Be Part of the Movement',
    subheadline: 'Whether you want to earn or grow your business — Swoop is your partner.',
    merchant: {
      title:    'Partner as a Merchant',
      subtitle: 'No upfront costs and guaranteed weekly payouts.',
      bullets:  ['White-glove onboarding', 'Transparent pricing – no price manipulation', 'Completely free to start!'],
    },
    rider: {
      title:    'Become a rider',
      subtitle: 'The best earning rates of any food delivery app',
      bullets:  ['Instant payouts', 'Flexible working', 'Incentive bonuses'],
    },
    ctaVariant:   'app-stores',
    appStoreUrl:  'https://apps.apple.com/us/app/thumo/id6749094829',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.thumoapp.users&pcampaignid=web_share',
  },

  faqs: SHARED_FAQS,
  downloadHeadline:    'Experience Swoop!',
  downloadSubheadline: 'From your favorite local spots to hidden gems, get hot meals brought straight to your door—no stress, no waiting.',
  downloadCtaVariant:  'app-stores',
  appStoreUrl:         'https://apps.apple.com/us/app/thumo/id6749094829',
  playStoreUrl:        'https://play.google.com/store/apps/details?id=com.thumoapp.users&pcampaignid=web_share',
};

// ---------------------------------------------------------------------------
// Exported map — use this in pages/hooks
// ---------------------------------------------------------------------------
export const CONTENT_MAP: Record<Locale, PageContent> = {
  NG: NG_CONTENT,
  SZ: SZ_CONTENT,
};
