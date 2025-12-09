// src/lib/services-data.ts
// Created: Comprehensive service data including pricing, FAQs, process, and features

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  cta: string;
  popular: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  duration?: string;
}

export interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  icon: string;
  heroImage: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits: string[];
  pricing: PricingTier[];
  faqs: FAQ[];
  process: ProcessStep[];
  relatedServices: string[];
  caseStudies?: string[];
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  'google-ads': {
    id: 'google-ads',
    title: 'Google Ads',
    tagline: 'Full-Funnel PPC Campaigns with Guaranteed ROAS',
    description: 'Data-driven Google Ads management that turns clicks into customers. We optimize every rupiah of your ad spend for maximum ROI.',
    longDescription: `Our Google Ads specialists have managed over Rp 10 billion in ad spend across Search, Display, YouTube, and Performance Max campaigns. We don't just set up campaigns—we build comprehensive acquisition engines that scale with your business.

Every campaign starts with deep audience research, competitive analysis, and conversion tracking setup. We then continuously optimize based on real performance data, not assumptions.`,
    category: 'Digital Marketing',
    icon: 'trending-up',
    heroImage: '/images/services/google-ads-hero.jpg',
    features: [
      {
        title: 'Search Campaigns',
        description: 'Capture high-intent customers actively searching for your products or services.',
        icon: 'search',
      },
      {
        title: 'Display & Remarketing',
        description: 'Stay top-of-mind with visual ads across millions of websites and apps.',
        icon: 'monitor',
      },
      {
        title: 'YouTube Advertising',
        description: 'Engage audiences with compelling video content on the world\'s second-largest search engine.',
        icon: 'play-circle',
      },
      {
        title: 'Performance Max',
        description: 'AI-powered campaigns that optimize across all Google properties automatically.',
        icon: 'zap',
      },
      {
        title: 'Shopping Campaigns',
        description: 'Showcase your products directly in search results with rich product listings.',
        icon: 'shopping-bag',
      },
      {
        title: 'Advanced Analytics',
        description: 'Real-time dashboards and weekly reports with actionable insights.',
        icon: 'bar-chart-2',
      },
    ],
    benefits: [
      'Average 340% ROAS improvement in first 90 days',
      'Dedicated Google-certified account manager',
      'Weekly performance reports with clear insights',
      'Conversion tracking and attribution setup included',
      'A/B testing for ads and landing pages',
      'Competitor analysis and market research',
    ],
    pricing: [
      {
        name: 'Starter',
        price: 'Rp 5.000.000',
        period: '/month',
        description: 'Perfect for small businesses starting with Google Ads',
        features: [
          'Up to Rp 10M ad spend/month',
          'Search campaigns only',
          '1 campaign type',
          'Weekly reporting',
          'Email support',
          'Basic conversion tracking',
        ],
        notIncluded: [
          'Display/YouTube campaigns',
          'Performance Max',
          'Strategy calls',
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
          'Advanced conversion tracking',
          'Competitor monitoring',
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
          'Custom reporting dashboard',
          'SLA guarantees',
          'Multi-account management',
          'International campaigns',
        ],
        cta: 'Contact Sales',
        popular: false,
      },
    ],
    faqs: [
      {
        question: 'How long before I see results from Google Ads?',
        answer: 'Most clients see initial results within 2-4 weeks. However, optimal performance typically develops over 2-3 months as we gather data, refine targeting, and optimize campaigns. We focus on sustainable growth rather than quick wins that don\'t last.',
      },
      {
        question: 'What\'s the minimum budget I need for Google Ads?',
        answer: 'We recommend a minimum ad spend of Rp 5 million per month to gather meaningful data. However, the ideal budget depends on your industry, competition, and goals. During our discovery call, we\'ll help you determine the right investment level.',
      },
      {
        question: 'Do you require long-term contracts?',
        answer: 'We start with a 3-month initial term to allow proper optimization cycles. After that, you can continue on a month-to-month basis. We believe our results should earn your continued business, not a contract.',
      },
      {
        question: 'How do you measure and report on performance?',
        answer: 'You get access to a real-time dashboard showing all key metrics. We also send weekly email summaries and conduct bi-weekly or weekly strategy calls (depending on your plan) to discuss performance and next steps.',
      },
      {
        question: 'Can you work with our existing Google Ads account?',
        answer: 'Absolutely. We can audit and optimize your existing account or build a new one from scratch—whichever makes more sense for your situation. We\'ll provide recommendations during our initial audit.',
      },
    ],
    process: [
      {
        title: 'Discovery & Audit',
        description: 'We analyze your business, competitors, and existing campaigns (if any) to identify opportunities.',
        duration: 'Week 1',
      },
      {
        title: 'Strategy & Setup',
        description: 'We develop a comprehensive strategy, set up tracking, create campaigns, and write ad copy.',
        duration: 'Week 2',
      },
      {
        title: 'Launch & Monitor',
        description: 'Campaigns go live with close monitoring. We make daily optimizations based on initial data.',
        duration: 'Week 3-4',
      },
      {
        title: 'Optimize & Scale',
        description: 'With enough data, we aggressively optimize and begin scaling what works best.',
        duration: 'Ongoing',
      },
    ],
    relatedServices: ['meta-ads', 'seo', 'web-development'],
    caseStudies: ['luxestyle-fashion', 'techflow-solutions'],
  },

  'meta-ads': {
    id: 'meta-ads',
    title: 'Meta Ads',
    tagline: 'Facebook & Instagram Advertising That Converts',
    description: 'Strategic Meta advertising that reaches the right audience with the right message at the right time.',
    longDescription: `Meta\'s advertising platform offers unparalleled targeting capabilities and creative formats. Our team specializes in building full-funnel campaigns that nurture cold audiences into loyal customers.

We leverage Advantage+ automation, dynamic creative testing, and advanced audience strategies to maximize your return on ad spend while maintaining creative excellence.`,
    category: 'Digital Marketing',
    icon: 'share-2',
    heroImage: '/images/services/meta-ads-hero.jpg',
    features: [
      {
        title: 'Advantage+ Campaigns',
        description: 'AI-powered campaigns that optimize delivery across placements and audiences.',
        icon: 'cpu',
      },
      {
        title: 'Dynamic Product Ads',
        description: 'Automatically show the right products to people who\'ve shown interest.',
        icon: 'package',
      },
      {
        title: 'Lookalike Audiences',
        description: 'Find new customers similar to your best existing ones.',
        icon: 'users',
      },
      {
        title: 'Retargeting Funnels',
        description: 'Re-engage website visitors and cart abandoners with personalized messaging.',
        icon: 'refresh-cw',
      },
      {
        title: 'Creative Testing',
        description: 'Systematic A/B testing to find winning creatives and copy combinations.',
        icon: 'layers',
      },
      {
        title: 'Cross-Platform Strategy',
        description: 'Seamless campaigns across Facebook, Instagram, Messenger, and WhatsApp.',
        icon: 'share',
      },
    ],
    benefits: [
      'Access to 175+ million Indonesian Meta users',
      'Advanced interest and behavior targeting',
      'Creative production support available',
      'Pixel and Conversions API setup included',
      'Weekly creative refresh recommendations',
      'Full-funnel campaign architecture',
    ],
    pricing: [
      {
        name: 'Starter',
        price: 'Rp 5.000.000',
        period: '/month',
        description: 'For businesses new to Meta advertising',
        features: [
          'Up to Rp 10M ad spend/month',
          'Facebook & Instagram ads',
          '2 campaign objectives',
          'Weekly reporting',
          'Email support',
          'Basic pixel setup',
        ],
        notIncluded: [
          'Dynamic product ads',
          'Advantage+ campaigns',
          'Strategy calls',
        ],
        cta: 'Get Started',
        popular: false,
      },
      {
        name: 'Growth',
        price: 'Rp 10.000.000',
        period: '/month',
        description: 'For scaling businesses',
        features: [
          'Up to Rp 50M ad spend/month',
          'All placements',
          'Advantage+ campaigns',
          'Dynamic product ads',
          'Bi-weekly strategy calls',
          'Lookalike audience creation',
          'Conversions API setup',
          'Priority support',
        ],
        cta: 'Get Started',
        popular: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For high-volume advertisers',
        features: [
          'Unlimited ad spend',
          'Full creative support',
          'Dedicated account team',
          'Weekly strategy sessions',
          'Custom attribution modeling',
          'Catalog management',
          'Multi-brand management',
          'SLA guarantees',
        ],
        cta: 'Contact Sales',
        popular: false,
      },
    ],
    faqs: [
      {
        question: 'What\'s the difference between Meta Ads and boosted posts?',
        answer: 'Boosted posts are a simplified form of advertising with limited targeting and optimization options. Meta Ads Manager gives us access to advanced features like custom audiences, conversion optimization, A/B testing, and detailed analytics that dramatically improve performance.',
      },
      {
        question: 'Do you create the ad creatives?',
        answer: 'Our standard packages include ad copywriting and creative direction. For custom graphics and video production, we offer creative add-on packages or can work with your existing creative team.',
      },
      {
        question: 'How do you handle iOS privacy changes?',
        answer: 'We\'ve adapted our strategies to work effectively in the post-iOS 14 landscape. This includes Conversions API integration, first-party data strategies, and broader targeting approaches that Meta\'s AI can optimize effectively.',
      },
      {
        question: 'Can you run ads on WhatsApp?',
        answer: 'Yes! Click-to-WhatsApp ads are highly effective for Indonesian businesses. We can set up campaigns that drive conversations directly to your WhatsApp Business account.',
      },
      {
        question: 'What results can I expect?',
        answer: 'Results vary by industry and offer, but our e-commerce clients typically see 3-5x ROAS, while lead generation campaigns often achieve 30-50% lower cost per lead compared to industry averages.',
      },
    ],
    process: [
      {
        title: 'Account Audit & Strategy',
        description: 'Review existing setup, analyze competitors, and develop a tailored campaign strategy.',
        duration: 'Week 1',
      },
      {
        title: 'Technical Setup',
        description: 'Configure pixel, Conversions API, audiences, and catalog (if applicable).',
        duration: 'Week 1-2',
      },
      {
        title: 'Creative Development',
        description: 'Create ad copy, select/produce creatives, and set up A/B tests.',
        duration: 'Week 2',
      },
      {
        title: 'Launch & Optimize',
        description: 'Launch campaigns with close monitoring and daily optimization.',
        duration: 'Week 3+',
      },
    ],
    relatedServices: ['google-ads', 'kol-marketing', 'social-media-marketing'],
    caseStudies: ['luxestyle-fashion', 'greenmart-indonesia'],
  },

  'ecommerce-ads': {
    id: 'ecommerce-ads',
    title: 'eCommerce Ads',
    tagline: 'Dominate Shopee, TikTok Shop & Tokopedia',
    description: 'Marketplace advertising expertise that drives sales on Indonesia\'s biggest eCommerce platforms.',
    longDescription: `Indonesia\'s eCommerce landscape is unique, with marketplace-native advertising being essential for success. Our team has deep expertise in Shopee Ads, TikTok Shop campaigns, and Tokopedia Top Ads.

We understand the nuances of each platform—from keyword bidding strategies to flash sale optimization—and we integrate marketplace advertising with your broader digital marketing strategy.`,
    category: 'Digital Marketing',
    icon: 'shopping-cart',
    heroImage: '/images/services/ecommerce-ads-hero.jpg',
    features: [
      {
        title: 'Shopee Ads',
        description: 'Search ads, discovery ads, and shop ads optimized for maximum visibility.',
        icon: 'shopping-bag',
      },
      {
        title: 'TikTok Shop',
        description: 'In-feed ads, LIVE shopping, and creator partnerships that drive sales.',
        icon: 'video',
      },
      {
        title: 'Tokopedia Top Ads',
        description: 'Headline, product, and shop ads across Indonesia\'s trusted marketplace.',
        icon: 'star',
      },
      {
        title: 'Lazada Sponsored',
        description: 'Product discovery and search ads for the Alibaba-backed platform.',
        icon: 'box',
      },
      {
        title: 'Campaign Optimization',
        description: 'Flash sale strategy, campaign scheduling, and bid optimization.',
        icon: 'trending-up',
      },
      {
        title: 'Cross-Platform Strategy',
        description: 'Unified approach across marketplaces for maximum market share.',
        icon: 'globe',
      },
    ],
    benefits: [
      'Platform-certified advertising specialists',
      'Integration with inventory management',
      'Flash sale and mega campaign strategy',
      'Competitor price monitoring',
      'Keyword research and optimization',
      'Shop decoration and optimization included',
    ],
    pricing: [
      {
        name: 'Single Platform',
        price: 'Rp 4.000.000',
        period: '/month',
        description: 'Focus on one marketplace',
        features: [
          '1 marketplace platform',
          'Up to Rp 10M ad spend/month',
          'Keyword optimization',
          'Weekly reporting',
          'Email support',
          'Basic shop optimization',
        ],
        cta: 'Get Started',
        popular: false,
      },
      {
        name: 'Multi-Platform',
        price: 'Rp 8.000.000',
        period: '/month',
        description: 'Dominate multiple marketplaces',
        features: [
          'Up to 3 platforms',
          'Up to Rp 30M ad spend/month',
          'Cross-platform strategy',
          'Bi-weekly strategy calls',
          'Flash sale management',
          'Competitor monitoring',
          'Priority support',
        ],
        cta: 'Get Started',
        popular: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For major sellers and brands',
        features: [
          'All major platforms',
          'Unlimited ad spend',
          'Dedicated account team',
          'Weekly strategy sessions',
          'Custom reporting',
          'Inventory integration',
          'Brand protection',
          'SLA guarantees',
        ],
        cta: 'Contact Sales',
        popular: false,
      },
    ],
    faqs: [
      {
        question: 'Which marketplace should I focus on first?',
        answer: 'It depends on your product category and target audience. Shopee leads in fashion and beauty, Tokopedia is strong in electronics and home goods, while TikTok Shop excels for viral and impulse purchases. We\'ll recommend based on your specific situation.',
      },
      {
        question: 'How do marketplace ads differ from Google/Meta ads?',
        answer: 'Marketplace ads reach customers who are already in shopping mode with high purchase intent. The advertising mechanics are different—focusing on keywords, product visibility, and shop metrics rather than audience targeting.',
      },
      {
        question: 'Do you help with shop setup and optimization?',
        answer: 'Yes! Proper shop setup is crucial for ad performance. We include basic shop optimization in all packages and offer comprehensive shop overhaul services as an add-on.',
      },
      {
        question: 'Can you manage our flash sale campaigns?',
        answer: 'Absolutely. Flash sale and mega campaign participation (9.9, 11.11, 12.12) is included in our Growth and Enterprise packages. We handle registration, inventory planning, and advertising strategy.',
      },
      {
        question: 'How do you handle multiple SKUs?',
        answer: 'We use data-driven approaches to prioritize your best-performing and highest-margin products. Not every SKU needs advertising—we focus budget where it generates the best returns.',
      },
    ],
    process: [
      {
        title: 'Store Audit',
        description: 'Analyze your current store performance, listings, and competitive positioning.',
        duration: 'Week 1',
      },
      {
        title: 'Optimization',
        description: 'Improve product listings, shop decoration, and set up proper tracking.',
        duration: 'Week 1-2',
      },
      {
        title: 'Campaign Launch',
        description: 'Set up and launch advertising campaigns with optimized keywords and bids.',
        duration: 'Week 2-3',
      },
      {
        title: 'Scale & Expand',
        description: 'Optimize based on data and expand to additional platforms or campaigns.',
        duration: 'Ongoing',
      },
    ],
    relatedServices: ['meta-ads', 'kol-marketing', 'social-media-marketing'],
    caseStudies: ['greenmart-indonesia'],
  },

  'kol-marketing': {
    id: 'kol-marketing',
    title: 'KOL Marketing',
    tagline: 'Influencer Partnerships That Actually Work',
    description: 'Data-driven influencer marketing that connects your brand with the right creators for authentic engagement.',
    longDescription: `Influencer marketing in Indonesia requires more than just sending products to popular accounts. Our KOL (Key Opinion Leader) marketing service combines data analysis, relationship management, and campaign strategy to deliver measurable results.

We work with creators across TikTok, Instagram, YouTube, and Twitter—from mega influencers to authentic micro-creators—always matching the right voices to your brand values and objectives.`,
    category: 'Digital Marketing',
    icon: 'users',
    heroImage: '/images/services/kol-marketing-hero.jpg',
    features: [
      {
        title: 'Data-Driven Selection',
        description: 'We analyze engagement rates, audience demographics, and authenticity before recommending creators.',
        icon: 'pie-chart',
      },
      {
        title: 'Campaign Management',
        description: 'End-to-end management from briefing to content approval and posting.',
        icon: 'clipboard',
      },
      {
        title: 'Content Collaboration',
        description: 'Creative briefing that balances brand messaging with creator authenticity.',
        icon: 'edit-3',
      },
      {
        title: 'Performance Tracking',
        description: 'Detailed reporting on reach, engagement, and conversion attribution.',
        icon: 'activity',
      },
      {
        title: 'Affiliate Programs',
        description: 'Performance-based partnerships with trackable affiliate links and codes.',
        icon: 'link',
      },
      {
        title: 'Long-term Partnerships',
        description: 'Ambassador programs for sustained brand advocacy and loyalty.',
        icon: 'heart',
      },
    ],
    benefits: [
      'Database of 10,000+ vetted Indonesian creators',
      'Audience authenticity verification',
      'Negotiated rates below market average',
      'Content rights management included',
      'FTC/BPOM compliance guidance',
      'Performance benchmarking by industry',
    ],
    pricing: [
      {
        name: 'Campaign',
        price: 'Rp 15.000.000',
        period: '/campaign',
        description: 'Single campaign with 5-10 creators',
        features: [
          '5-10 KOL activations',
          'Creator research & vetting',
          'Campaign brief development',
          'Content review & approval',
          'Performance report',
          'One revision round',
        ],
        cta: 'Get Started',
        popular: false,
      },
      {
        name: 'Monthly',
        price: 'Rp 25.000.000',
        period: '/month',
        description: 'Ongoing KOL partnerships',
        features: [
          '15-20 KOL activations/month',
          'Dedicated KOL manager',
          'Ambassador program setup',
          'Bi-weekly reporting',
          'Affiliate tracking',
          'Crisis management',
          'Priority support',
        ],
        cta: 'Get Started',
        popular: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Large-scale influencer programs',
        features: [
          'Unlimited activations',
          'Mega influencer access',
          'Exclusive partnerships',
          'Weekly strategy sessions',
          'Content production support',
          'Event integration',
          'Multi-platform campaigns',
          'SLA guarantees',
        ],
        cta: 'Contact Sales',
        popular: false,
      },
    ],
    faqs: [
      {
        question: 'How do you select the right influencers for my brand?',
        answer: 'We use a combination of data analysis and human review. We look at engagement rates (not just follower counts), audience demographics, content quality, brand safety, and past performance. We also verify for fake followers and engagement.',
      },
      {
        question: 'What platforms do your influencers cover?',
        answer: 'We work with creators across TikTok, Instagram, YouTube, Twitter, and even niche platforms like LinkedIn for B2B campaigns. TikTok and Instagram currently offer the best ROI for most consumer brands in Indonesia.',
      },
      {
        question: 'Is the KOL fee included in your pricing?',
        answer: 'No, our pricing covers campaign management and strategy. KOL fees are separate and depend on the creators selected. We negotiate rates on your behalf and often secure 15-25% below market rates through our relationships.',
      },
      {
        question: 'How do you measure KOL campaign success?',
        answer: 'We track both awareness metrics (reach, impressions, engagement) and conversion metrics (link clicks, promo code usage, sales attribution). For e-commerce, we set up proper tracking to attribute sales to specific creators.',
      },
      {
        question: 'Can you help with user-generated content beyond influencers?',
        answer: 'Yes! We can set up UGC campaigns, branded hashtag challenges, and community seeding programs that generate authentic content from regular customers.',
      },
    ],
    process: [
      {
        title: 'Strategy Development',
        description: 'Define campaign objectives, target audience, and creator criteria.',
        duration: 'Week 1',
      },
      {
        title: 'Creator Selection',
        description: 'Research, vet, and recommend creators that align with your brand.',
        duration: 'Week 1-2',
      },
      {
        title: 'Outreach & Briefing',
        description: 'Negotiate terms, sign contracts, and brief creators on campaign requirements.',
        duration: 'Week 2-3',
      },
      {
        title: 'Execution & Reporting',
        description: 'Manage content creation, approvals, posting, and compile performance reports.',
        duration: 'Week 3-4+',
      },
    ],
    relatedServices: ['social-media-marketing', 'meta-ads', 'ecommerce-ads'],
    caseStudies: ['luxestyle-fashion'],
  },

  'seo': {
    id: 'seo',
    title: 'SEO',
    tagline: 'Organic Search Dominance for Long-Term Growth',
    description: 'Technical SEO, content strategy, and link building that drives sustainable organic traffic growth.',
    longDescription: `Search engine optimization is a marathon, not a sprint. Our SEO service focuses on building a strong technical foundation, creating valuable content, and earning authoritative backlinks that compound over time.

We specialize in both English and Bahasa Indonesia SEO, understanding the nuances of Google's search algorithms in the Indonesian market while following global best practices.`,
    category: 'Digital Marketing',
    icon: 'search',
    heroImage: '/images/services/seo-hero.jpg',
    features: [
      {
        title: 'Technical SEO',
        description: 'Site speed, crawlability, indexation, and Core Web Vitals optimization.',
        icon: 'code',
      },
      {
        title: 'Content Strategy',
        description: 'Keyword research, content planning, and optimization for search intent.',
        icon: 'file-text',
      },
      {
        title: 'Link Building',
        description: 'Quality backlink acquisition through outreach, digital PR, and content marketing.',
        icon: 'link-2',
      },
      {
        title: 'Local SEO',
        description: 'Google Business Profile optimization and local search visibility.',
        icon: 'map-pin',
      },
      {
        title: 'International SEO',
        description: 'Multi-language and multi-region SEO strategies.',
        icon: 'globe',
      },
      {
        title: 'Analytics & Reporting',
        description: 'Search Console integration, rank tracking, and monthly performance reports.',
        icon: 'trending-up',
      },
    ],
    benefits: [
      'Sustainable traffic that doesn\'t disappear when you stop spending',
      'Higher trust and credibility vs. paid advertising',
      'Compound returns over time',
      'Full technical audit and roadmap',
      'Content optimization for existing pages',
      'Competitor backlink analysis',
    ],
    pricing: [
      {
        name: 'Foundation',
        price: 'Rp 8.000.000',
        period: '/month',
        description: 'For businesses starting with SEO',
        features: [
          'Technical SEO audit & fixes',
          'On-page optimization (10 pages)',
          'Keyword research',
          'Monthly reporting',
          'Email support',
          'Google Business Profile setup',
        ],
        notIncluded: [
          'Link building',
          'Content creation',
          'Strategy calls',
        ],
        cta: 'Get Started',
        popular: false,
      },
      {
        name: 'Growth',
        price: 'Rp 15.000.000',
        period: '/month',
        description: 'For competitive markets',
        features: [
          'Everything in Foundation',
          'Monthly content (4 articles)',
          'Link building (10 links/month)',
          'Bi-weekly strategy calls',
          'Competitor monitoring',
          'Priority support',
          'Local SEO optimization',
        ],
        cta: 'Get Started',
        popular: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For aggressive growth goals',
        features: [
          'Unlimited page optimization',
          'Weekly content production',
          'Premium link building',
          'Weekly strategy sessions',
          'Custom reporting dashboard',
          'Dedicated SEO specialist',
          'International SEO',
          'SLA guarantees',
        ],
        cta: 'Contact Sales',
        popular: false,
      },
    ],
    faqs: [
      {
        question: 'How long does SEO take to show results?',
        answer: 'SEO is a long-term strategy. Technical improvements can show results in 4-8 weeks. Content and link building typically take 3-6 months to significantly impact rankings. We set realistic expectations and provide monthly progress updates.',
      },
      {
        question: 'Do you guarantee first page rankings?',
        answer: 'No reputable SEO agency can guarantee specific rankings—anyone who does is not being honest. We guarantee our work quality, transparency, and a systematic approach that has consistently delivered results for our clients.',
      },
      {
        question: 'What\'s included in your technical SEO audit?',
        answer: 'Our audit covers site speed, mobile-friendliness, crawlability, indexation, site architecture, URL structure, internal linking, schema markup, Core Web Vitals, and more. You receive a prioritized action plan with clear next steps.',
      },
      {
        question: 'Do you write the content or do we?',
        answer: 'Both options are available. Our Growth package includes content creation by our team. Alternatively, you can create content with our guidance—we provide briefs, keyword targets, and optimization feedback.',
      },
      {
        question: 'How do you approach link building?',
        answer: 'We focus on earning quality links through valuable content, digital PR, and genuine outreach. We never buy links from sketchy networks or use tactics that could result in Google penalties.',
      },
    ],
    process: [
      {
        title: 'Technical Audit',
        description: 'Comprehensive analysis of your site\'s technical SEO health.',
        duration: 'Week 1-2',
      },
      {
        title: 'Keyword Strategy',
        description: 'Research target keywords and develop content strategy.',
        duration: 'Week 2-3',
      },
      {
        title: 'On-Page Optimization',
        description: 'Implement technical fixes and optimize existing content.',
        duration: 'Week 3-4',
      },
      {
        title: 'Content & Links',
        description: 'Ongoing content creation and link building campaigns.',
        duration: 'Ongoing',
      },
    ],
    relatedServices: ['web-development', 'google-ads', 'social-media-marketing'],
    caseStudies: ['techflow-solutions'],
  },

  'social-media-marketing': {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    tagline: 'Content That Engages, Communities That Grow',
    description: 'Strategic social media management that builds brand awareness, engagement, and community.',
    longDescription: `Social media is where brands become human. Our social media marketing service goes beyond just posting content—we develop comprehensive strategies that build genuine connections with your audience.

From content creation and community management to trend-jacking and crisis response, we handle every aspect of your social media presence across Instagram, TikTok, Facebook, LinkedIn, Twitter, and YouTube.`,
    category: 'Digital Marketing',
    icon: 'share-2',
    heroImage: '/images/services/social-media-hero.jpg',
    features: [
      {
        title: 'Content Strategy',
        description: 'Tailored content calendars aligned with your brand voice and business goals.',
        icon: 'calendar',
      },
      {
        title: 'Content Creation',
        description: 'Original graphics, videos, and copy that resonate with your audience.',
        icon: 'image',
      },
      {
        title: 'Community Management',
        description: 'Responsive engagement with comments, DMs, and mentions.',
        icon: 'message-circle',
      },
      {
        title: 'Social Listening',
        description: 'Monitor brand mentions, industry trends, and competitor activity.',
        icon: 'headphones',
      },
      {
        title: 'Trend-Jacking',
        description: 'Quick-turn content that capitalizes on viral moments and trends.',
        icon: 'zap',
      },
      {
        title: 'Analytics & Insights',
        description: 'Data-driven optimization based on performance metrics.',
        icon: 'bar-chart',
      },
    ],
    benefits: [
      'Consistent brand presence across platforms',
      'Faster response times than in-house teams',
      'Access to professional design and video tools',
      'Trend awareness and quick content pivots',
      'Monthly content performance reports',
      'Crisis communication support',
    ],
    pricing: [
      {
        name: 'Essentials',
        price: 'Rp 5.000.000',
        period: '/month',
        description: 'For consistent brand presence',
        features: [
          '2 platforms',
          '12 posts/month',
          'Content calendar',
          'Basic graphics',
          'Monthly reporting',
          'Email support',
        ],
        notIncluded: [
          'Video content',
          'Community management',
          'Strategy calls',
        ],
        cta: 'Get Started',
        popular: false,
      },
      {
        name: 'Professional',
        price: 'Rp 12.000.000',
        period: '/month',
        description: 'For active brand building',
        features: [
          '4 platforms',
          '24 posts/month',
          'Video content (4/month)',
          'Community management',
          'Bi-weekly strategy calls',
          'Trend monitoring',
          'Priority support',
        ],
        cta: 'Get Started',
        popular: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For brands that dominate social',
        features: [
          'All major platforms',
          'Daily posting',
          'Full video production',
          '24/7 community management',
          'Weekly strategy sessions',
          'Crisis management',
          'Influencer coordination',
          'SLA guarantees',
        ],
        cta: 'Contact Sales',
        popular: false,
      },
    ],
    faqs: [
      {
        question: 'Which social media platforms should my brand be on?',
        answer: 'It depends on your target audience and business type. B2C brands typically focus on Instagram and TikTok. B2B brands often see better results on LinkedIn. We\'ll recommend the right platform mix based on where your audience spends time.',
      },
      {
        question: 'How often should we post?',
        answer: 'Consistency matters more than frequency. For most brands, 3-5 posts per week per platform is optimal. More important than quantity is quality—posts that provide value and encourage engagement.',
      },
      {
        question: 'Do you handle negative comments and complaints?',
        answer: 'Yes, community management includes handling negative feedback professionally and escalating issues as needed. We can develop response guidelines with you and integrate with your customer service team.',
      },
      {
        question: 'Can we approve content before it goes live?',
        answer: 'Absolutely. We use collaborative tools where you can review and approve all content before publication. We typically share content calendars 1-2 weeks in advance for your review.',
      },
      {
        question: 'Do you create the visual content or do we provide it?',
        answer: 'Our packages include content creation—graphics and video. However, we always appreciate raw materials like product photos, team photos, and behind-the-scenes content that we can polish and use.',
      },
    ],
    process: [
      {
        title: 'Brand Audit',
        description: 'Analyze current presence, competitors, and opportunities.',
        duration: 'Week 1',
      },
      {
        title: 'Strategy Development',
        description: 'Define content pillars, voice guidelines, and posting schedule.',
        duration: 'Week 1-2',
      },
      {
        title: 'Content Creation',
        description: 'Develop initial content batch and approval workflow.',
        duration: 'Week 2-3',
      },
      {
        title: 'Launch & Optimize',
        description: 'Begin posting, monitor performance, and refine approach.',
        duration: 'Week 3+',
      },
    ],
    relatedServices: ['meta-ads', 'kol-marketing', 'design-services'],
    caseStudies: ['greenmart-indonesia'],
  },

  'web-development': {
    id: 'web-development',
    title: 'Web Development',
    tagline: 'Lightning-Fast Websites That Convert Visitors',
    description: 'Modern web development with Astro, Next.js, and React for blazing-fast, conversion-optimized websites.',
    longDescription: `Your website is often the first impression potential customers have of your brand. We build websites that load instantly, look stunning, and guide visitors toward taking action.

Our tech stack prioritizes performance and developer experience. We primarily use Astro for marketing sites (like this one!), Next.js for dynamic applications, and can work with WordPress for content-heavy sites that need frequent updates.`,
    category: 'Technology',
    icon: 'code',
    heroImage: '/images/services/web-development-hero.jpg',
    features: [
      {
        title: 'Astro Sites',
        description: 'Ultra-fast static sites with minimal JavaScript for marketing pages.',
        icon: 'zap',
      },
      {
        title: 'Next.js Applications',
        description: 'Full-featured React applications with SSR and API routes.',
        icon: 'layers',
      },
      {
        title: 'WordPress (Headless)',
        description: 'Easy content management with modern frontend performance.',
        icon: 'edit',
      },
      {
        title: 'eCommerce Platforms',
        description: 'Custom storefronts with Shopify, WooCommerce, or headless solutions.',
        icon: 'shopping-cart',
      },
      {
        title: 'API Integrations',
        description: 'Connect your website to CRMs, payment gateways, and third-party services.',
        icon: 'link',
      },
      {
        title: 'Performance Optimization',
        description: 'Core Web Vitals optimization for better user experience and SEO.',
        icon: 'gauge',
      },
    ],
    benefits: [
      'Sub-2-second load times on 3G connections',
      'Mobile-first, responsive designs',
      'Built-in SEO best practices',
      'Accessibility compliance (WCAG 2.1)',
      'Analytics and conversion tracking',
      '30-day post-launch support included',
    ],
    pricing: [
      {
        name: 'Landing Page',
        price: 'Rp 15.000.000',
        period: 'one-time',
        description: 'Single high-converting page',
        features: [
          '1 page design & development',
          'Mobile responsive',
          'Basic SEO setup',
          'Contact form',
          'Analytics integration',
          '30-day support',
        ],
        cta: 'Get Started',
        popular: false,
      },
      {
        name: 'Business Website',
        price: 'Rp 35.000.000',
        period: 'one-time',
        description: 'Complete company website',
        features: [
          'Up to 10 pages',
          'Custom design',
          'CMS integration',
          'Blog setup',
          'Advanced SEO',
          'Performance optimization',
          '60-day support',
        ],
        cta: 'Get Started',
        popular: true,
      },
      {
        name: 'Custom Project',
        price: 'Custom',
        period: '',
        description: 'Complex web applications',
        features: [
          'Unlimited pages',
          'Custom functionality',
          'API development',
          'Third-party integrations',
          'User authentication',
          'Admin dashboard',
          'Extended support options',
          'SLA available',
        ],
        cta: 'Contact Sales',
        popular: false,
      },
    ],
    faqs: [
      {
        question: 'What technology do you use for websites?',
        answer: 'Our primary stack includes Astro for marketing sites (excellent performance), Next.js for dynamic applications, and React for interactive components. We choose the best tool for each project\'s requirements.',
      },
      {
        question: 'Can you redesign my existing website?',
        answer: 'Absolutely. We can either redesign on your current platform or migrate to a new, more modern stack. We\'ll recommend the best approach based on your current setup and goals.',
      },
      {
        question: 'How long does a website project take?',
        answer: 'A landing page typically takes 2-3 weeks. A full business website takes 4-8 weeks depending on complexity. We\'ll provide a detailed timeline during our proposal phase.',
      },
      {
        question: 'Do you provide hosting?',
        answer: 'We deploy to modern platforms like Vercel, Netlify, or Cloudflare Pages which offer excellent performance and are often free for most sites. We can also deploy to your preferred hosting provider.',
      },
      {
        question: 'What about ongoing maintenance?',
        answer: 'All projects include 30-60 days of post-launch support. For ongoing maintenance, we offer monthly retainer packages that include updates, security patches, and minor enhancements.',
      },
    ],
    process: [
      {
        title: 'Discovery & Strategy',
        description: 'Understand your goals, audience, and requirements. Define project scope.',
        duration: 'Week 1',
      },
      {
        title: 'Design',
        description: 'Create wireframes and visual designs. Iterate based on your feedback.',
        duration: 'Week 2-3',
      },
      {
        title: 'Development',
        description: 'Build the website with all features and integrations.',
        duration: 'Week 3-6',
      },
      {
        title: 'Launch',
        description: 'Testing, optimization, and deployment to production.',
        duration: 'Week 6-8',
      },
    ],
    relatedServices: ['seo', 'design-services', 'app-development'],
    caseStudies: ['techflow-solutions'],
  },

  'app-development': {
    id: 'app-development',
    title: 'App Development',
    tagline: 'Native-Quality Flutter Apps for iOS & Android',
    description: 'Cross-platform mobile app development with Flutter for beautiful, performant apps from a single codebase.',
    longDescription: `Flutter allows us to build iOS and Android apps from a single codebase without sacrificing performance or native feel. This means faster development, lower costs, and easier maintenance compared to building separate native apps.

Our Flutter development team has shipped apps across fintech, e-commerce, health, and lifestyle categories—handling everything from MVP builds to enterprise-grade applications with complex backends.`,
    category: 'Technology',
    icon: 'smartphone',
    heroImage: '/images/services/app-development-hero.jpg',
    features: [
      {
        title: 'Cross-Platform Flutter',
        description: 'One codebase for iOS and Android, reducing cost and development time.',
        icon: 'smartphone',
      },
      {
        title: 'Native Performance',
        description: 'Compiled to native code for smooth 60fps animations and fast load times.',
        icon: 'zap',
      },
      {
        title: 'Backend Integration',
        description: 'Connect to Firebase, Supabase, or your custom API backend.',
        icon: 'server',
      },
      {
        title: 'Push Notifications',
        description: 'Engage users with targeted push notifications via FCM.',
        icon: 'bell',
      },
      {
        title: 'App Store Submission',
        description: 'We handle the submission process for both Apple App Store and Google Play.',
        icon: 'upload-cloud',
      },
      {
        title: 'Ongoing Support',
        description: 'Post-launch maintenance, updates, and feature additions.',
        icon: 'life-buoy',
      },
    ],
    benefits: [
      'Single codebase for both platforms',
      'Faster time-to-market vs native development',
      '30-40% cost savings compared to separate native apps',
      'Beautiful, customizable UI components',
      'Easy updates and maintenance',
      'Access to native device features',
    ],
    pricing: [
      {
        name: 'MVP',
        price: 'Rp 75.000.000',
        period: 'one-time',
        description: 'Validate your app idea',
        features: [
          'Up to 5 core features',
          'Simple UI design',
          'Firebase backend',
          'User authentication',
          'Push notifications',
          'App Store submission',
          '30-day support',
        ],
        cta: 'Get Started',
        popular: false,
      },
      {
        name: 'Standard',
        price: 'Rp 150.000.000',
        period: 'one-time',
        description: 'Full-featured application',
        features: [
          'Up to 15 features',
          'Custom UI/UX design',
          'Custom backend',
          'Admin dashboard',
          'Payment integration',
          'Analytics integration',
          '60-day support',
        ],
        cta: 'Get Started',
        popular: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Complex, scalable applications',
        features: [
          'Unlimited features',
          'Scalable architecture',
          'Advanced security',
          'Third-party integrations',
          'Dedicated team',
          'Extended support',
          'SLA guarantees',
        ],
        cta: 'Contact Sales',
        popular: false,
      },
    ],
    faqs: [
      {
        question: 'Why Flutter over native iOS/Android development?',
        answer: 'Flutter allows us to maintain a single codebase for both platforms, reducing development time by 30-40% and making future updates easier. Performance is nearly identical to native, and the UI is indistinguishable from native apps.',
      },
      {
        question: 'Can you work with my existing backend?',
        answer: 'Yes, we can integrate with any backend that exposes an API. We\'ve worked with REST APIs, GraphQL, Firebase, Supabase, and custom backends in various languages.',
      },
      {
        question: 'How long does app development take?',
        answer: 'An MVP typically takes 6-10 weeks. A full-featured app takes 12-20 weeks depending on complexity. We provide detailed timelines during our proposal phase.',
      },
      {
        question: 'Do you handle App Store submissions?',
        answer: 'Yes, we handle the entire submission process including app store optimization, screenshots, and descriptions. We also navigate the review process and handle any rejections.',
      },
      {
        question: 'What about ongoing maintenance after launch?',
        answer: 'All projects include post-launch support (30-60 days). We offer monthly maintenance packages for ongoing bug fixes, OS updates compatibility, and feature additions.',
      },
    ],
    process: [
      {
        title: 'Discovery & Planning',
        description: 'Define requirements, user flows, and technical architecture.',
        duration: 'Week 1-2',
      },
      {
        title: 'UI/UX Design',
        description: 'Create wireframes, prototypes, and final visual designs.',
        duration: 'Week 2-4',
      },
      {
        title: 'Development',
        description: 'Build the app with regular demos and feedback cycles.',
        duration: 'Week 4-12',
      },
      {
        title: 'Launch',
        description: 'Testing, App Store submission, and production deployment.',
        duration: 'Week 12-14',
      },
    ],
    relatedServices: ['web-development', 'design-services', 'meta-ads'],
    caseStudies: ['greenmart-indonesia'],
  },

  'design-services': {
    id: 'design-services',
    title: 'Design Services',
    tagline: 'Brand Identities and Creative That Stand Out',
    description: 'From brand strategy to daily content creation, we deliver design that differentiates and converts.',
    longDescription: `Great design is the difference between being noticed and being ignored. Our design team combines strategic thinking with creative execution to build brand identities and produce content that captures attention and drives action.

We work across brand identity, social media graphics, video production, motion graphics, and print design—ensuring visual consistency across every touchpoint.`,
    category: 'Creative',
    icon: 'palette',
    heroImage: '/images/services/design-services-hero.jpg',
    features: [
      {
        title: 'Brand Identity',
        description: 'Logo design, color systems, typography, and brand guidelines.',
        icon: 'award',
      },
      {
        title: 'Social Media Graphics',
        description: 'Scroll-stopping content for Instagram, TikTok, and beyond.',
        icon: 'instagram',
      },
      {
        title: 'Video Production',
        description: 'Product videos, testimonials, and promotional content.',
        icon: 'video',
      },
      {
        title: 'Motion Graphics',
        description: 'Animated logos, explainer videos, and dynamic content.',
        icon: 'play-circle',
      },
      {
        title: 'Print Design',
        description: 'Packaging, brochures, business cards, and marketing collateral.',
        icon: 'printer',
      },
      {
        title: 'Presentation Design',
        description: 'Investor decks, sales presentations, and company profiles.',
        icon: 'monitor',
      },
    ],
    benefits: [
      'Consistent brand expression across all channels',
      'Quick turnaround times',
      'Unlimited revisions on approved projects',
      'Source files always delivered',
      'Brand guideline documentation',
      'Flexible monthly packages available',
    ],
    pricing: [
      {
        name: 'Brand Package',
        price: 'Rp 25.000.000',
        period: 'one-time',
        description: 'Complete brand identity',
        features: [
          'Logo design (3 concepts)',
          'Color palette',
          'Typography selection',
          'Brand guidelines PDF',
          'Business card design',
          'Social media templates',
          'Unlimited revisions',
        ],
        cta: 'Get Started',
        popular: false,
      },
      {
        name: 'Creative Retainer',
        price: 'Rp 10.000.000',
        period: '/month',
        description: 'Ongoing design support',
        features: [
          '40 design hours/month',
          'Social media graphics',
          'Ad creatives',
          'Presentation design',
          'Minor video edits',
          '48-hour turnaround',
          'Priority support',
        ],
        cta: 'Get Started',
        popular: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Dedicated design team',
        features: [
          'Unlimited design hours',
          'Dedicated designer(s)',
          'Video production',
          'Motion graphics',
          '24-hour turnaround option',
          'Brand management',
          'SLA guarantees',
        ],
        cta: 'Contact Sales',
        popular: false,
      },
    ],
    faqs: [
      {
        question: 'What\'s included in a brand identity project?',
        answer: 'A full brand identity includes logo design (with variations), color palette, typography system, and a brand guidelines document. We can also include business cards, letterhead, social media templates, and other collateral as needed.',
      },
      {
        question: 'How many revisions do you allow?',
        answer: 'For one-time projects, we include unlimited revisions on the final concept direction. For retainer clients, reasonable revisions are included within your monthly hours.',
      },
      {
        question: 'Do you provide source files?',
        answer: 'Yes, you receive all source files upon project completion. This includes AI/PSD/Figma files, fonts (or font names for licensed fonts), and all exported formats you need.',
      },
      {
        question: 'What\'s your design process like?',
        answer: 'We start with a creative brief to understand your needs. Then we present initial concepts, gather feedback, refine, and finalize. You\'re involved at every step to ensure the result matches your vision.',
      },
      {
        question: 'Can you match our existing brand style?',
        answer: 'Absolutely. We can work within your existing brand guidelines to create new assets that feel cohesive with your current visual identity.',
      },
    ],
    process: [
      {
        title: 'Creative Brief',
        description: 'Understand your brand, audience, and design objectives.',
        duration: 'Day 1-2',
      },
      {
        title: 'Concept Development',
        description: 'Create initial design concepts and directions.',
        duration: 'Week 1',
      },
      {
        title: 'Refinement',
        description: 'Refine chosen direction based on your feedback.',
        duration: 'Week 2',
      },
      {
        title: 'Delivery',
        description: 'Finalize designs and deliver all files and assets.',
        duration: 'Week 2-3',
      },
    ],
    relatedServices: ['social-media-marketing', 'web-development', 'kol-marketing'],
    caseStudies: ['luxestyle-fashion', 'techflow-solutions'],
  },
};

// Helper to get service by ID
export function getServiceData(id: string): ServiceData | undefined {
  return SERVICES_DATA[id];
}

// Get all service IDs
export function getAllServiceIds(): string[] {
  return Object.keys(SERVICES_DATA);
}

// Get services by category
export function getServicesByCategory(category: string): ServiceData[] {
  return Object.values(SERVICES_DATA).filter(
    (service) => service.category === category
  );
}