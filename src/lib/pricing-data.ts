// src/lib/pricing-data.ts
// Created: Pricing plans and features data

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  currency: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  cta: string;
  ctaLink: string;
}

export interface PricingCategory {
  id: string;
  name: string;
  description: string;
  plans: PricingPlan[];
}

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'Paket digital marketing untuk berbagai kebutuhan bisnis.',
    plans: [
      {
        id: 'starter',
        name: 'Starter',
        description: 'Cocok untuk bisnis yang baru memulai digital marketing.',
        price: { monthly: 5000000, yearly: 50000000 },
        currency: 'IDR',
        features: [
          'Google Ads management',
          'Monthly ad spend up to Rp 10 juta',
          'Bi-weekly performance report',
          'Basic keyword research',
          'Ad copy creation (2 variants)',
          'Landing page review',
          'Email support',
        ],
        notIncluded: [
          'Meta Ads management',
          'Advanced analytics',
          'A/B testing',
          'Dedicated account manager',
        ],
        cta: 'Get Started',
        ctaLink: '/contact?plan=starter',
      },
      {
        id: 'growth',
        name: 'Growth',
        description: 'Untuk bisnis yang ingin scale digital marketing.',
        price: { monthly: 12000000, yearly: 120000000 },
        currency: 'IDR',
        popular: true,
        features: [
          'Google Ads + Meta Ads management',
          'Monthly ad spend up to Rp 30 juta',
          'Weekly performance report',
          'Comprehensive keyword research',
          'Ad copy creation (5 variants)',
          'Landing page optimization',
          'A/B testing',
          'Conversion tracking setup',
          'Dedicated account manager',
          'Priority support',
        ],
        notIncluded: [
          'TikTok Ads',
          'Creative production',
        ],
        cta: 'Most Popular',
        ctaLink: '/contact?plan=growth',
      },
      {
        id: 'scale',
        name: 'Scale',
        description: 'Full-service untuk bisnis dengan budget besar.',
        price: { monthly: 25000000, yearly: 250000000 },
        currency: 'IDR',
        features: [
          'All platforms (Google, Meta, TikTok)',
          'Unlimited ad spend management',
          'Daily performance monitoring',
          'Advanced keyword strategy',
          'Unlimited ad variants',
          'Landing page creation (2/month)',
          'Advanced A/B testing',
          'Full analytics setup',
          'Senior account manager',
          '24/7 support',
          'Quarterly strategy review',
          'Competitor analysis',
        ],
        cta: 'Contact Sales',
        ctaLink: '/contact?plan=scale',
      },
    ],
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Paket pengembangan website untuk berbagai kebutuhan.',
    plans: [
      {
        id: 'basic-web',
        name: 'Basic Website',
        description: 'Website sederhana untuk company profile.',
        price: { monthly: 15000000, yearly: 15000000 },
        currency: 'IDR',
        features: [
          'Up to 5 pages',
          'Responsive design',
          'Contact form',
          'Basic SEO setup',
          'CMS integration',
          'SSL certificate',
          '1 month support',
          'Hosting setup assistance',
        ],
        notIncluded: [
          'Custom features',
          'eCommerce functionality',
          'Advanced animations',
        ],
        cta: 'Get Started',
        ctaLink: '/contact?plan=basic-web',
      },
      {
        id: 'professional-web',
        name: 'Professional',
        description: 'Website lengkap dengan custom features.',
        price: { monthly: 35000000, yearly: 35000000 },
        currency: 'IDR',
        popular: true,
        features: [
          'Up to 15 pages',
          'Custom UI/UX design',
          'Advanced animations',
          'Blog system',
          'Advanced SEO setup',
          'Speed optimization',
          'Analytics integration',
          'Social media integration',
          '3 months support',
          'Training session',
        ],
        notIncluded: [
          'eCommerce functionality',
          'Custom web app features',
        ],
        cta: 'Most Popular',
        ctaLink: '/contact?plan=professional-web',
      },
      {
        id: 'enterprise-web',
        name: 'Enterprise',
        description: 'Custom web application untuk kebutuhan kompleks.',
        price: { monthly: 0, yearly: 0 },
        currency: 'IDR',
        features: [
          'Unlimited pages',
          'Full custom design',
          'Web application development',
          'API integrations',
          'Database design',
          'User authentication',
          'Admin dashboard',
          'Performance optimization',
          '6 months support',
          'Dedicated team',
          'SLA guarantee',
        ],
        cta: 'Custom Quote',
        ctaLink: '/contact?plan=enterprise-web',
      },
    ],
  },
  {
    id: 'seo',
    name: 'SEO',
    description: 'Paket optimasi mesin pencari untuk meningkatkan organic traffic.',
    plans: [
      {
        id: 'local-seo',
        name: 'Local SEO',
        description: 'Untuk bisnis yang ingin mendominasi pencarian lokal.',
        price: { monthly: 3500000, yearly: 35000000 },
        currency: 'IDR',
        features: [
          'Google Business Profile optimization',
          'Local citation building (20/month)',
          'Review management strategy',
          'Local keyword optimization',
          'Monthly ranking report',
          'Competitor tracking (3 competitors)',
        ],
        notIncluded: [
          'National SEO',
          'Link building',
          'Content creation',
        ],
        cta: 'Get Started',
        ctaLink: '/contact?plan=local-seo',
      },
      {
        id: 'national-seo',
        name: 'National SEO',
        description: 'SEO komprehensif untuk visibility nasional.',
        price: { monthly: 8000000, yearly: 80000000 },
        currency: 'IDR',
        popular: true,
        features: [
          'Full technical SEO audit',
          'On-page optimization',
          'Keyword research & strategy',
          'Content optimization (10 pages)',
          'Link building (5 backlinks/month)',
          'Weekly ranking report',
          'Competitor analysis',
          'Google Search Console management',
        ],
        notIncluded: [
          'Content writing',
          'eCommerce SEO',
        ],
        cta: 'Most Popular',
        ctaLink: '/contact?plan=national-seo',
      },
      {
        id: 'ecommerce-seo',
        name: 'eCommerce SEO',
        description: 'SEO khusus untuk online store.',
        price: { monthly: 15000000, yearly: 150000000 },
        currency: 'IDR',
        features: [
          'Product page optimization',
          'Category page optimization',
          'Technical SEO for eCommerce',
          'Schema markup implementation',
          'Link building (10 backlinks/month)',
          'Content strategy & creation',
          'Daily ranking monitoring',
          'Conversion optimization',
          'Dedicated SEO specialist',
        ],
        cta: 'Contact Sales',
        ctaLink: '/contact?plan=ecommerce-seo',
      },
    ],
  },
];

export const PRICING_FAQ = [
  {
    question: 'Apakah ada kontrak minimum?',
    answer: 'Untuk layanan digital marketing dan SEO, kami merekomendasikan minimum 3 bulan untuk hasil optimal. Untuk web development, pembayaran dilakukan per project.',
  },
  {
    question: 'Bagaimana sistem pembayaran?',
    answer: 'Untuk retainer (bulanan), pembayaran di muka setiap bulan. Untuk project, biasanya 50% di muka dan 50% setelah selesai.',
  },
  {
    question: 'Apakah bisa custom paket?',
    answer: 'Tentu! Kami bisa menyesuaikan paket sesuai kebutuhan spesifik bisnis Anda. Hubungi tim kami untuk diskusi.',
  },
  {
    question: 'Apakah harga sudah termasuk PPN?',
    answer: 'Harga yang tertera belum termasuk PPN 11%. Invoice akan mencantumkan harga + PPN.',
  },
  {
    question: 'Apa yang terjadi jika saya tidak puas?',
    answer: 'Kami berkomitmen pada kepuasan client. Jika ada masalah, tim kami akan bekerja untuk menyelesaikannya. Untuk kasus tertentu, refund sebagian bisa dipertimbangkan.',
  },
];

export function formatPrice(price: number): string {
  if (price === 0) return 'Custom';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}