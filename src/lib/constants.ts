// src/lib/constants.ts
// Created: Site configuration, navigation, and app-wide constants

export const SITE_CONFIG = {
  name: 'Algan Studio',
  tagline: 'Smart Digital Solutions. World-Class Execution.',
  description:
    'The go-to digital partner for ambitious brands who refuse to settle for mediocre. We combine consultancy-level strategy with execution that actually works.',
  url: 'https://algan.id',
  email: 'hello@algan.id',
  phone: '+62 21 1234 5678',
  whatsapp: '+6281234567890',
  address: {
    street: 'Jl. Sudirman No. 123, Level 15',
    city: 'Jakarta Selatan',
    state: 'DKI Jakarta',
    country: 'Indonesia',
    zip: '12190',
  },
  social: {
    instagram: 'https://instagram.com/alganstudio',
    linkedin: 'https://linkedin.com/company/alganstudio',
    twitter: 'https://twitter.com/alganstudio',
    youtube: 'https://youtube.com/@alganstudio',
    tiktok: 'https://tiktok.com/@alganstudio',
  },
  businessHours: {
    weekdays: '09:00 - 18:00 WIB',
    saturday: '09:00 - 14:00 WIB',
    sunday: 'Closed',
  },
  founded: 2018,
} as const;

export const NAVIGATION = {
  main: [
    {
      label: 'Services',
      href: '/services',
      megaMenu: true,
      children: [
        {
          category: 'Digital Marketing',
          items: [
            {
              label: 'Google Ads',
              href: '/services/google-ads',
              description: 'Full-funnel PPC campaigns with guaranteed ROAS',
              icon: 'google',
            },
            {
              label: 'Meta Ads',
              href: '/services/meta-ads',
              description: 'Facebook & Instagram advertising',
              icon: 'meta',
            },
            {
              label: 'eCommerce Ads',
              href: '/services/ecommerce-ads',
              description: 'Shopee, TikTok Shop, Tokopedia',
              icon: 'shopping',
            },
            {
              label: 'KOL Marketing',
              href: '/services/kol-marketing',
              description: 'Influencer partnerships that convert',
              icon: 'users',
            },
            {
              label: 'SEO',
              href: '/services/seo',
              description: 'Organic growth & search dominance',
              icon: 'search',
            },
            {
              label: 'Social Media',
              href: '/services/social-media-marketing',
              description: 'Content & community management',
              icon: 'share',
            },
          ],
        },
        {
          category: 'Technology',
          items: [
            {
              label: 'Web Development',
              href: '/services/web-development',
              description: 'Astro, Next.js, React websites',
              icon: 'code',
            },
            {
              label: 'App Development',
              href: '/services/app-development',
              description: 'Flutter iOS & Android apps',
              icon: 'smartphone',
            },
          ],
        },
        {
          category: 'Creative',
          items: [
            {
              label: 'Design Services',
              href: '/services/design-services',
              description: 'Branding, graphics, video production',
              icon: 'palette',
            },
          ],
        },
      ],
    },
    {
      label: 'Work',
      href: '/work',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
  footer: {
    services: [
      { label: 'Google Ads', href: '/services/google-ads' },
      { label: 'Meta Ads', href: '/services/meta-ads' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'App Development', href: '/services/app-development' },
      { label: 'Design Services', href: '/services/design-services' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Work', href: '/work' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Resources', href: '/resources' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
} as const;

export const SERVICES = [
  {
    id: 'google-ads',
    title: 'Google Ads',
    shortDescription: 'Full-funnel PPC campaigns with guaranteed ROAS improvement',
    category: 'Digital Marketing',
    icon: 'google',
    href: '/services/google-ads',
    features: [
      'Performance Max campaigns',
      'Search & Display advertising',
      'YouTube video campaigns',
      'Advanced audience targeting',
      'Real-time reporting dashboards',
    ],
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    shortDescription: 'Facebook & Instagram advertising that converts',
    category: 'Digital Marketing',
    icon: 'meta',
    href: '/services/meta-ads',
    features: [
      'Advantage+ campaigns',
      'Dynamic product ads',
      'Lookalike audiences',
      'Retargeting funnels',
      'Creative A/B testing',
    ],
  },
  {
    id: 'ecommerce-ads',
    title: 'eCommerce Ads',
    shortDescription: 'Dominate Shopee, TikTok Shop, and Tokopedia',
    category: 'Digital Marketing',
    icon: 'shopping',
    href: '/services/ecommerce-ads',
    features: [
      'Shopee Ads optimization',
      'TikTok Shop campaigns',
      'Tokopedia Top Ads',
      'Cross-platform strategy',
      'Inventory integration',
    ],
  },
  {
    id: 'kol-marketing',
    title: 'KOL Marketing',
    shortDescription: 'Influencer partnerships that actually work',
    category: 'Digital Marketing',
    icon: 'users',
    href: '/services/kol-marketing',
    features: [
      'Data-driven KOL selection',
      'Campaign management',
      'Content collaboration',
      'Performance tracking',
      'Affiliate programs',
    ],
  },
  {
    id: 'seo',
    title: 'SEO',
    shortDescription: 'Organic search dominance for long-term growth',
    category: 'Digital Marketing',
    icon: 'search',
    href: '/services/seo',
    features: [
      'Technical SEO audits',
      'Content strategy',
      'Link building',
      'Local SEO',
      'International SEO',
    ],
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media',
    shortDescription: 'Content that engages and communities that grow',
    category: 'Digital Marketing',
    icon: 'share',
    href: '/services/social-media-marketing',
    features: [
      'Viral content creation',
      'Community management',
      'Social listening',
      'Trend-jacking',
      'Analytics & reporting',
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'Lightning-fast websites that convert visitors',
    category: 'Technology',
    icon: 'code',
    href: '/services/web-development',
    features: [
      'Astro & Next.js',
      'React applications',
      'WordPress (Headless)',
      'eCommerce platforms',
      'API integrations',
    ],
  },
  {
    id: 'app-development',
    title: 'App Development',
    shortDescription: 'Native-quality Flutter apps for iOS & Android',
    category: 'Technology',
    icon: 'smartphone',
    href: '/services/app-development',
    features: [
      'Cross-platform Flutter',
      'Native performance',
      'App Store submission',
      'Push notifications',
      'Ongoing support',
    ],
  },
  {
    id: 'design-services',
    title: 'Design Services',
    shortDescription: 'Brand identities and creative that stand out',
    category: 'Creative',
    icon: 'palette',
    href: '/services/design-services',
    features: [
      'Brand identity design',
      'Social media graphics',
      'Video production',
      'Motion graphics',
      'Print design',
    ],
  },
] as const;

export const STATS = [
  {
    value: 500,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successful campaigns and websites launched',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Retention',
    description: 'Clients who continue working with us',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Years Combined Experience',
    description: 'Across our leadership team',
  },
  {
    value: 1,
    prefix: 'Rp',
    suffix: 'B+',
    label: 'Revenue Generated',
    description: 'For our clients through digital marketing',
  },
] as const;

export const BLOG_CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Digital Marketing', value: 'digital-marketing' },
  { label: 'Web Development', value: 'web-development' },
  { label: 'Design', value: 'design' },
  { label: 'Case Studies', value: 'case-studies' },
  { label: 'Company News', value: 'company-news' },
] as const;

export const PORTFOLIO_CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Digital Marketing', value: 'digital-marketing' },
  { label: 'Web Development', value: 'web-development' },
  { label: 'App Development', value: 'app-development' },
  { label: 'Design', value: 'design' },
] as const;

export const PRICING_TIERS = {
  'google-ads': [
    {
      name: 'Starter',
      price: 'Rp 5.000.000',
      period: '/month',
      description: 'Perfect for small businesses starting with Google Ads',
      features: [
        'Up to Rp 10M ad spend/month',
        'Search campaigns',
        '1 campaign type',
        'Weekly reporting',
        'Email support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Growth',
      price: 'Rp 10.000.000',
      period: '/month',
      description: 'For growing businesses ready to scale',
      features: [
        'Up to Rp 50M ad spend/month',
        'Search + Display campaigns',
        '3 campaign types',
        'Bi-weekly strategy calls',
        'Performance Max setup',
        'Priority support',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large businesses with complex needs',
      features: [
        'Unlimited ad spend',
        'All campaign types',
        'Dedicated account manager',
        'Weekly strategy sessions',
        'Custom reporting',
        'SLA guarantees',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ],
} as const;

export const TEAM_MEMBERS = [
  {
    name: 'Andi Wijaya',
    role: 'Founder & CEO',
    bio: 'Former Google Ads specialist with 10+ years in digital marketing. Built Algan Studio to bridge the gap between strategy and execution.',
    image: '/images/team/andi.jpg',
    linkedin: 'https://linkedin.com/in/andiwijaya',
  },
  {
    name: 'Sarah Chen',
    role: 'Creative Director',
    bio: 'Award-winning designer with experience at top agencies in Singapore and Jakarta. Passionate about brands that make a difference.',
    image: '/images/team/sarah.jpg',
    linkedin: 'https://linkedin.com/in/sarahchen',
  },
  {
    name: 'Budi Hartono',
    role: 'Lead Developer',
    bio: 'Full-stack engineer specializing in performance-first web development. Previously built platforms handling millions of users.',
    image: '/images/team/budi.jpg',
    linkedin: 'https://linkedin.com/in/budihartono',
  },
  {
    name: 'Maya Putri',
    role: 'Marketing Director',
    bio: 'Data-driven marketer who has managed over Rp 10B in ad spend. Obsessed with ROAS optimization and creative testing.',
    image: '/images/team/maya.jpg',
    linkedin: 'https://linkedin.com/in/mayaputri',
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Algan Studio transformed our digital presence completely. Our ROAS increased from 2x to 7x in just 3 months. They don't just run ads—they build growth engines.",
    author: 'David Susanto',
    role: 'CEO',
    company: 'LuxeStyle Fashion',
    image: '/images/testimonials/david.jpg',
  },
  {
    quote:
      "The website they built for us loads in under 2 seconds and converts 3x better than our old site. Technical excellence combined with beautiful design.",
    author: 'Linda Tan',
    role: 'Marketing Director',
    company: 'TechFlow Solutions',
    image: '/images/testimonials/linda.jpg',
  },
  {
    quote:
      "Working with Algan Studio feels like having an in-house team but better. They understand our business and deliver results consistently.",
    author: 'Rahman Hakim',
    role: 'Founder',
    company: 'GreenMart Indonesia',
    image: '/images/testimonials/rahman.jpg',
  },
  {
    quote:
      "Our app downloads increased 89% after Algan rebuilt our Flutter app. The user experience is now world-class.",
    author: 'Jessica Wong',
    role: 'Product Lead',
    company: 'FoodieApp',
    image: '/images/testimonials/jessica.jpg',
  },
  {
    quote:
      "The rebrand Algan created for us positioned us as a premium player in fintech. Our social engagement increased 4x overnight.",
    author: 'Michael Santoso',
    role: 'CMO',
    company: 'FinanceFirst',
    image: '/images/testimonials/michael.jpg',
  },
] as const;

export const CLIENT_LOGOS = [
  { name: 'LuxeStyle', logo: '/images/clients/luxestyle.svg' },
  { name: 'TechFlow', logo: '/images/clients/techflow.svg' },
  { name: 'GreenMart', logo: '/images/clients/greenmart.svg' },
  { name: 'BaliVillas', logo: '/images/clients/balivillas.svg' },
  { name: 'FinanceFirst', logo: '/images/clients/financefirst.svg' },
  { name: 'FoodieApp', logo: '/images/clients/foodieapp.svg' },
  { name: 'EduLearn', logo: '/images/clients/edulearn.svg' },
  { name: 'PropertyPro', logo: '/images/clients/propertypro.svg' },
  { name: 'BeautyBox', logo: '/images/clients/beautybox.svg' },
  { name: 'AutoParts', logo: '/images/clients/autoparts.svg' },
] as const;

export const ANIMATION_CONFIG = {
  // GSAP ScrollTrigger defaults
  scrollTrigger: {
    start: 'top 85%',
    end: 'bottom 15%',
    toggleActions: 'play none none reverse',
  },
  // Stagger timing
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
  // Duration
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
  },
  // Easing
  ease: {
    out: 'power2.out',
    inOut: 'power2.inOut',
    bounce: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.5)',
  },
} as const;

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Algan Studio',
  defaultTitle: 'Algan Studio - Smart Digital Solutions. World-Class Execution.',
  defaultDescription:
    'The go-to digital partner for ambitious brands. We combine consultancy-level strategy with world-class execution in digital marketing, web development, app development, and design.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Algan Studio',
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@alganstudio',
  },
} as const;