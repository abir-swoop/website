/**
 * contentConfig.ts
 *
 * Single source of truth for all locale-specific content.
 * Components receive a `content` prop derived from this config  - 
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
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬', route: '/' },
  { code: 'SZ', name: 'Eswatini', flag: '🇸🇿', route: '/sz' },
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

export interface FaqSection {
  title: string;
  items: FaqItem[];
}

// ---------------------------------------------------------------------------
// Services section
// ---------------------------------------------------------------------------
export interface ServicesContent {
  headline: string;
  headline2: string;
  subheadline: string;
  foodDeliveryTitle: string;
  foodDeliveryDescription: string;
  features: string[];
  groceriesTitle: string;
  pharmacyTitle: string;
}

// ---------------------------------------------------------------------------
// Why Swoop section (3-column benefit cards)
// ---------------------------------------------------------------------------
export interface WhySwoopContent {
  pricingBoldText: string;
  pricingBodyText: string;
  trackingBoldText: string;
  trackingBodyText: string;
  supportBoldText: string;
  supportBodyText: string;
  currency: string;
  subtotal: string;
  deliveryFee: string;
  serviceFee: string;
  promoDiscount: string;
  total: string;
}

// ---------------------------------------------------------------------------
// Coverage Map section (NG only)
// ---------------------------------------------------------------------------
export interface CoverageMapContent {
  headlinePre: string;
  headlineAccent: string;
  headlineLine2: string;
  body: string;
  pinLabel: string;
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
  services: ServicesContent;
  whySwoop: WhySwoopContent;
  /** NG only */
  coverageMap?: CoverageMapContent;
  howToOrder: HowToOrderContent;
  /** Bold city names in the Food Delivery card */
  foodCities: string;
  categories: CategoryCard[];
  stats: Stat[];
  pricing: PricingContent;
  testimonials: Testimonial[];
  join: JoinContent;
  faqs: FaqSection[];
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
const SHARED_FAQS: FaqSection[] = [
  {
    title: 'About Swoop',
    items: [
      {
        question: 'What is Swoop?',
        answer: 'Swoop is a same-day food delivery app built for Nigerian cities. Order from your favourite local restaurants, get it delivered fast, and pay fair, transparent fees. No hidden charges, no checkout surprises.',
      },
      {
        question: 'Where does Swoop deliver?',
        answer: 'We are currently live in Yaba and environs. More Lagos locations are coming soon, and we will keep you posted.',
      },
      {
        question: 'Is Swoop available on my phone?',
        answer: 'Yes. Available on both iPhone and Android. Download it from the App Store or Google Play.',
      },
    ],
  },
  {
    title: 'Ordering',
    items: [
      {
        question: 'How do I place an order?',
        answer: 'Download the Swoop app, browse restaurants near you, add items to your cart, and checkout. The whole process takes about a minute.',
      },
      {
        question: 'Is there a minimum order?',
        answer: 'Yes. The minimum order amount is 3,500.',
      },
      {
        question: 'Can I order from more than one restaurant at a time?',
        answer: 'Not yet - but it is on the way. For now, each order is limited to one restaurant at a time.',
      },
    ],
  },
  {
    title: 'Pricing & Payment',
    items: [
      {
        question: 'How much does delivery cost?',
        answer: 'Delivery fees vary based on your location. You will always see the exact fee upfront before you confirm your order - no surprises at checkout.',
      },
      {
        question: 'How do I pay?',
        answer: 'We accept card payments, bank transfers, and OPay.',
      },
      {
        question: 'Is my payment secure?',
        answer: 'Yes. All payments are processed securely. We do not store your card details unless you choose to save them to your Swoop account.',
      },
    ],
  },
  {
    title: 'Delivery',
    items: [
      {
        question: 'How long does delivery take?',
        answer: 'Delivery times vary depending on the restaurant and your location. You will see an estimated delivery time after you place your order, so you always know what to expect.',
      },
      {
        question: 'Can I track my order?',
        answer: 'Yes. Swoop offers real-time tracking from the moment your order leaves the kitchen to the moment it arrives at your door.',
      },
      {
        question: 'What if my delivery is late?',
        answer: 'Reach out to us through the app, and we will look into it immediately and get it sorted.',
      },
    ],
  },
  {
    title: 'Issues & Support',
    items: [
      {
        question: 'What if something is wrong with my order?',
        answer: 'Contact us through the app, and we will resolve it as quickly as possible.',
      },
      {
        question: 'Can I cancel my order?',
        answer: 'Yes, as long as the restaurant has not started preparing your order. You can cancel directly through the app.',
      },
      {
        question: 'How do I contact support?',
        answer: 'Log in to the app and send us a message via the in-app chat. Our support team is on standby and ready to help - available daily from 9 am to 9 pm.',
      },
    ],
  },
  {
    title: 'For Vendors',
    items: [
      {
        question: 'How do I sell on Swoop?',
        answer: 'Fill out the vendor form on our website, and our team will reach out to walk you through the onboarding process.',
      },
      {
        question: 'Does it cost anything to join?',
        answer: 'There are no upfront costs to list your restaurant on Swoop.',
      },
      {
        question: 'How do payouts work?',
        answer: 'Payouts are fast and reliable. Full details will be shared with you during onboarding.',
      },
    ],
  },
  {
    title: 'For Riders',
    items: [
      {
        question: 'How do I become a Swoop rider?',
        answer: 'Fill out the rider application form on our website, and we will get back to you with next steps.',
      },
      {
        question: 'What do I need to get started?',
        answer: 'A valid ID, a smartphone, and a motorcycle or bicycle. Full requirements will be shared when you apply.',
      },
      {
        question: 'How do I get paid?',
        answer: 'Your earnings are tracked in real time through the app and paid out on a fast, regular schedule. Full payout details are shared during onboarding.',
      },
    ],
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
    launchText: '🎉 Swoop is now live in Yaba! Download now',
  },

  hero: {
    headlineLine1: 'Now you\'re eating.',
    headlineLine2: '',
    subPre: 'Food delivery in Yaba. Fast, transparent, and built for how you eat.',
    subBold: '',
    subPost: '',
    appStoreUrl: 'https://apps.apple.com/ng/app/swoop-food/id6749094829',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.thumoapp.users',
    mockupImage: '/assets/NG-step-1.png',
    handMockupImage: '/assets/hand-mockup-ng.png',
    ctaVariant: 'app-stores',
    waitlistUrl: '#contact-us',
  },

  services: {
    headline: 'Everything you want, ',
    headline2: 'Swoop it up.',
    subheadline: 'From breakfast to late night cravings, Swoop brings the best food in Yaba straight to you.',
    foodDeliveryTitle: 'Food Delivery',
    foodDeliveryDescription: 'Your favorite restaurants, delivered fast',
    features: ['Fast delivery', 'Honest pricing', 'Vendors you\'ll actually recognise'],
    groceriesTitle: 'Groceries',
    pharmacyTitle: 'Pharmacy',
  },

  whySwoop: {
    pricingBoldText: 'No hidden fees.',
    pricingBodyText: 'Transparent fees everytime.',
    trackingBoldText: 'Fast delivery you can track.',
    trackingBodyText: 'Real-time tracking from kitchen to doorstep.',
    supportBoldText: 'Support that actually responds.',
    supportBodyText: 'Something wrong with your order? Real people, real solutions. Not a bot.',
    currency: '₦',
    subtotal: '₦2,400',
    deliveryFee: '₦550',
    serviceFee: '₦240',
    promoDiscount: '-₦1,000',
    total: '₦2,190',
  },

  coverageMap: {
    headlinePre: 'Live in',
    headlineAccent: 'Yaba.',
    headlineLine2: 'Growing across Lagos.',
    body: 'Swoop delivers across Yaba - UNILAG, Yabatech, and surrounding areas. More locations launching soon.',
    pinLabel: 'Yaba',
  },

  foodCities: 'Lagos, Abuja, and Port Harcourt',

  howToOrder: {
    headline: 'How to order on Swoop',
    steps: [
      {
        number: '1',
        title: 'Browse restaurants near you.\n See menus, prices, and delivery times before you order.',
        description: 'Explore nearby restaurants, check menus, and find exactly what you\'re craving. See it all before you order.',
        screenImage: '/assets/NG-step-1.png',
      },
      {
        number: '2',
        title: 'Add to cart and checkout.\n Pick what you want. \n The price you see is the price you pay.',
        description: 'Pick your meals, customise if needed, and checkout in seconds. Fast, simple, no stress.',
        screenImage: '/assets/NG-step-2.png',
      },
      {
        number: '3',
        title: 'Track and receive your food. \n Watch your order in real time. \n Eat.',
        description: 'Watch your order move in real time - from the kitchen to your location. No guessing, just live updates.',
        screenImage: '/assets/NG-step-3.png',
      },
    ],
  },

  categories: [
    {
      id: 'food',
      title: 'Food Delivery',
      description: 'Order from thousands of restaurants near you. Hot meals, fast delivery.',
      color: 'food',
      icon: 'UtensilsCrossed',
    },
    {
      id: 'grocery',
      title: 'Groceries',
      description: 'Fresh produce, pantry staples, and household items delivered in under 30 min.',
      color: 'grocery',
      icon: 'ShoppingBasket',
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy',
      description: 'Prescription and OTC medicines delivered safely to your door.',
      color: 'pharmacy',
      icon: 'Pill',
    },
  ],

  stats: [
    { value: '500K+', label: 'Happy Customers' },
    { value: '10K+', label: 'Partner Restaurants' },
    { value: '25+', label: 'Cities in Nigeria' },
    { value: '4.8★', label: 'App Store Rating' },
  ],

  pricing: {
    headline: 'Simple, transparent pricing',
    subheadline: 'No hidden fees. Cancel anytime.',
    plans: [

    ],
  },

  testimonials: [
    {
      name: 'Adaeze Okonkwo',
      role: 'Busy mum in Lagos',
      body: 'Thumo saves me at least two hours every week. Groceries and school lunch  -  sorted!',
      avatar: '/images/avatar-ng-1.png',
    },
    {
      name: 'Emeka Nwachukwu',
      role: 'Software Engineer, Abuja',
      body: 'The pharmacy delivery is a lifesaver. No more queues for routine medication.',
      avatar: '/images/avatar-ng-2.png',
    },
    {
      name: 'Funmi Adesanya',
      role: 'Restaurant owner, Lagos',
      body: 'Our orders tripled within the first month on Thumo. Best decision we ever made.',
      avatar: '/images/avatar-ng-3.png',
    },
  ],

  join: {
    headline: 'Be Part of the Movement',
    subheadline: 'Whether you want to earn or grow your business  -  Swoop is your partner.',
    merchant: {
      title: 'Partner as a Merchant',
      subtitle: 'Reach more customers, get fast payouts, and grow your business with a platform that puts you first',
      bullets: ['No upfront costs', 'Fast, reliable payouts', 'Your own vendor profile', 'Marketing and visibility support'],
    },
    rider: {
      title: 'Become a rider',
      subtitle: 'Earn on your schedule. Get paid fast. Join a team that respects your time.',
      bullets: ['No upfront costs', 'Fast payouts', 'Performance bonuses', 'Flexible hours', 'Branded gear provided'],
    },
    ctaVariant: 'contact',
    contactLabel: 'Contact Us',
    contactUrl: '#contact-us',
  },

  faqs: SHARED_FAQS,
  downloadHeadline: 'Experience Swoop!',
  downloadSubheadline: 'From your favorite local spots to hidden gems, get hot meals brought straight to your doorstep; no stress, no waiting.',
  downloadCtaVariant: 'app-stores',
  appStoreUrl: 'https://apps.apple.com/ng/app/swoop-food/id6749094829',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.thumoapp.users',
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
    subPre: 'Discover Swoop, the super-app that delivers food right to your door! ',
    subBold: 'New features, new regions, superior experience.',
    subPost: ' Try food delivery like never before below:',
    appStoreUrl: 'https://apps.apple.com/ng/app/swoop-food/id6749094829',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.thumoapp.users',
    mockupImage: '/assets/SZ-step-1.png',
    handMockupImage: '/assets/hand-mockup-sz.png',
    ctaVariant: 'app-stores',
  },

  services: {
    headline: 'Everything you want, ',
    headline2: 'Swoop it up.',
    subheadline: 'From breakfast to late night cravings, Swoop brings the best food in Eswatini straight to you.',
    foodDeliveryTitle: 'Food Delivery',
    foodDeliveryDescription: 'Your favorite restaurants, delivered fast',
    features: ['Fast delivery', 'Honest pricing', 'Vendors you\'ll actually recognise'],
    groceriesTitle: 'Groceries',
    pharmacyTitle: 'Pharmacy',
  },

  whySwoop: {
    pricingBoldText: 'No hidden fees.',
    pricingBodyText: 'Transparent fees everytime.',
    trackingBoldText: 'Fast delivery you can track.',
    trackingBodyText: 'Real-time tracking from kitchen to doorstep.',
    supportBoldText: 'Support that actually responds.',
    supportBodyText: 'Something wrong with your order? Real people, real solutions. Not a bot.',
    currency: 'E',
    subtotal: 'E120',
    deliveryFee: 'E25',
    serviceFee: 'E12',
    promoDiscount: '-E50',
    total: 'E107',
  },

  foodCities: 'Mbabane, Matsapha, Ezulwini, and Manzini',

  howToOrder: {
    headline: 'How to order on Swoop',
    steps: [
      {
        number: '1',
        title: 'Browse restaurants near you See menus, prices, and delivery times before you order.',
        description: 'Explore nearby restaurants, check menus, and find exactly what you\'re craving. See it all before you order.',
        screenImage: '/assets/SZ-step-1.png',
      },
      {
        number: '2',
        title: 'Add to cart and checkout Pick what you want. The price you see is the price you pay.',
        description: 'Pick your meals, customise if needed, and checkout in seconds. Fast, simple, no stress.',
        screenImage: '/assets/SZ-step-2.png',
      },
      {
        number: '3',
        title: 'Track and receive your food Watch your order in real time. Eat.',
        description: 'Watch your order move in real time - from the kitchen to your location. No guessing, just live updates.',
        screenImage: '/assets/SZ-step-3.png',
      },
    ],
  },

  categories: [
    {
      id: 'food',
      title: 'Food Delivery',
      description: 'Local favourites and international cuisines delivered fast across Eswatini.',
      color: 'food',
      icon: 'UtensilsCrossed',
    },
    {
      id: 'grocery',
      title: 'Groceries',
      description: 'Fresh, local produce and daily essentials  -  delivered within the hour.',
      color: 'grocery',
      icon: 'ShoppingBasket',
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy',
      description: 'Trusted medicines and health products dispatched from licensed pharmacies.',
      color: 'pharmacy',
      icon: 'Pill',
    },
  ],

  stats: [
    { value: '50K+', label: 'Happy Customers' },
    { value: '500+', label: 'Partner Restaurants' },
    { value: '2', label: 'Major Cities' },
    { value: '4.9★', label: 'App Store Rating' },
  ],

  pricing: {
    headline: 'Simple, transparent pricing',
    subheadline: 'No hidden fees. Cancel anytime.',
    plans: [
      {
        name: 'Basic',
        price: 'E0',
        period: 'forever',
        features: ['3 free deliveries/month', 'Standard delivery speed', 'Email support'],
        highlighted: false,
        cta: 'Get Started',
      },
      {
        name: 'Pro',
        price: 'E99',
        period: 'per month',
        features: ['Unlimited deliveries', 'Priority delivery', 'Live chat support', 'Exclusive deals'],
        highlighted: true,
        cta: 'Start Free Trial',
      },
      {
        name: 'Business',
        price: 'E350',
        period: 'per month',
        features: ['Everything in Pro', 'Team accounts', 'Dedicated account manager', 'API access'],
        highlighted: false,
        cta: 'Contact Sales',
      },
    ],
  },

  testimonials: [
    {
      name: 'Nompumelelo Dlamini',
      role: 'Teacher, Mbabane',
      body: 'Thumo changed how I shop. Groceries at my door before I even finish work.',
      avatar: '/images/avatar-sz-1.png',
    },
    {
      name: 'Sibusiso Nxumalo',
      role: 'Entrepreneur, Manzini',
      body: 'Incredibly fast delivery. The app is super smooth  -  I recommend it to everyone.',
      avatar: '/images/avatar-sz-2.png',
    },
    {
      name: 'Lindiwe Maseko',
      role: 'Restaurant owner, Mbabane',
      body: 'Joining Thumo gave our small restaurant national visibility. Game changer!',
      avatar: '/images/avatar-sz-3.png',
    },
  ],

  join: {
    headline: 'Be Part of the Movement',
    subheadline: 'Whether you want to earn or grow your business  -  Swoop is your partner.',
    merchant: {
      title: 'Partner as a Merchant',
      subtitle: 'No upfront costs and guaranteed weekly payouts.',
      bullets: ['White-glove onboarding', 'Transparent pricing - no price manipulation', 'Completely free to start!'],
    },
    rider: {
      title: 'Become a rider',
      subtitle: 'The best earning rates of any food delivery app',
      bullets: ['Instant payouts', 'Flexible working', 'Incentive bonuses'],
    },
    ctaVariant: 'app-stores',
    appStoreUrl: 'https://apps.apple.com/ng/app/swoop-food/id6749094829',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.thumoapp.users',
  },

  faqs: SHARED_FAQS,
  downloadHeadline: 'Experience Swoop!',
  downloadSubheadline: 'From your favorite local spots to hidden gems, get hot meals brought straight to your door - no stress, no waiting.',
  downloadCtaVariant: 'app-stores',
  appStoreUrl: 'https://apps.apple.com/ng/app/swoop-food/id6749094829',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.thumoapp.users',
};

// ---------------------------------------------------------------------------
// Exported map  -  use this in pages/hooks
// ---------------------------------------------------------------------------
export const CONTENT_MAP: Record<Locale, PageContent> = {
  NG: NG_CONTENT,
  SZ: SZ_CONTENT,
};

