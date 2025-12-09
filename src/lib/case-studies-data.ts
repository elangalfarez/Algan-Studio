// src/lib/case-studies-data.ts
// Created: Comprehensive case study data for portfolio section

export interface CaseStudyMetric {
  label: string;
  value: string;
  description?: string;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  excerpt: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: CaseStudyMetric[];
  testimonial?: CaseStudyTestimonial;
  images: {
    hero: string;
    thumbnail: string;
    gallery: CaseStudyImage[];
  };
  services: string[];
  timeline: string;
  year: number;
  featured: boolean;
  relatedCaseStudies: string[];
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'luxestyle-fashion': {
    id: 'luxestyle-fashion',
    title: 'LuxeStyle Fashion: 340% ROAS Increase',
    client: 'LuxeStyle Fashion',
    category: 'digital-marketing',
    tags: ['Google Ads', 'Meta Ads', 'eCommerce'],
    excerpt: 'How we transformed a struggling fashion brand\'s digital advertising into a growth engine generating Rp 2.4B in revenue.',
    description: 'LuxeStyle Fashion is a premium Indonesian fashion brand targeting urban professionals. They came to us with decent products but disappointing digital marketing results—high ad spend with minimal returns.',
    challenge: `LuxeStyle was spending Rp 200M monthly on digital advertising but seeing only 2x ROAS. Their campaigns were poorly structured, targeting was too broad, and creative assets weren't resonating with their target audience.

Key issues we identified:
- Campaign structure mixing cold and warm audiences
- No proper conversion tracking or attribution
- Generic ad creative that didn't stand out
- Landing pages with 8+ second load times
- No retargeting funnel in place`,
    solution: `We implemented a complete digital advertising overhaul:

**Google Ads Restructuring**
- Created separate campaigns for branded, competitor, and generic terms
- Implemented Performance Max for shopping with optimized feed
- Set up proper conversion tracking with enhanced e-commerce

**Meta Ads Full-Funnel**
- Built awareness campaigns targeting lookalike audiences
- Created engagement campaigns for social proof
- Implemented dynamic product ads for retargeting
- Developed a creative testing framework

**Technical Improvements**
- Optimized landing pages (load time reduced to 1.8s)
- Implemented Conversions API for accurate tracking
- Set up cross-platform attribution model`,
    results: `Within 90 days, LuxeStyle saw transformative results:

The combination of proper campaign structure, compelling creative, and technical optimization created a sustainable growth engine. We continue to work with LuxeStyle on ongoing optimization and expansion into new markets.`,
    metrics: [
      { label: 'ROAS Increase', value: '340%', description: 'From 2x to 7x ROAS' },
      { label: 'Revenue Generated', value: 'Rp 2.4B', description: 'In first 6 months' },
      { label: 'Cost Per Acquisition', value: '-45%', description: 'Lower CPA' },
      { label: 'Conversion Rate', value: '+89%', description: 'Website CVR improvement' },
    ],
    testimonial: {
      quote: 'Algan Studio transformed our digital presence completely. Our ROAS increased from 2x to 7x in just 3 months. They don\'t just run ads—they build growth engines.',
      author: 'David Susanto',
      role: 'CEO, LuxeStyle Fashion',
      image: '/images/testimonials/david.jpg',
    },
    images: {
      hero: '/images/work/luxestyle/hero.jpg',
      thumbnail: '/images/work/luxestyle/thumbnail.jpg',
      gallery: [
        { src: '/images/work/luxestyle/dashboard.jpg', alt: 'Performance dashboard showing ROAS growth', caption: 'Real-time performance dashboard' },
        { src: '/images/work/luxestyle/ads.jpg', alt: 'Sample ad creative', caption: 'High-performing ad creative' },
        { src: '/images/work/luxestyle/landing.jpg', alt: 'Optimized landing page', caption: 'Redesigned product landing page' },
        { src: '/images/work/luxestyle/results.jpg', alt: 'Campaign results overview', caption: 'Monthly performance report' },
      ],
    },
    services: ['google-ads', 'meta-ads', 'web-development'],
    timeline: '3 months initial, ongoing retainer',
    year: 2024,
    featured: true,
    relatedCaseStudies: ['greenmart-indonesia', 'beautybox-cosmetics'],
  },

  'techflow-solutions': {
    id: 'techflow-solutions',
    title: 'TechFlow: Website That Converts 3x Better',
    client: 'TechFlow Solutions',
    category: 'web-development',
    tags: ['Web Development', 'SEO', 'Conversion Optimization'],
    excerpt: 'A complete website rebuild that achieved sub-2-second load times and tripled conversion rates for this B2B SaaS company.',
    description: 'TechFlow Solutions is a B2B SaaS company providing project management tools for Indonesian enterprises. Their legacy WordPress site was slow, outdated, and converting poorly.',
    challenge: `TechFlow's existing website had multiple critical issues affecting both user experience and business results:

- Average page load time of 8+ seconds
- Mobile experience was nearly unusable
- Conversion rate of only 0.8% (industry average: 2.5%)
- Outdated design that didn't reflect their modern product
- SEO issues causing poor organic visibility
- No clear user journey or call-to-action hierarchy`,
    solution: `We rebuilt TechFlow's entire web presence using modern technologies and conversion-focused design:

**Technical Stack**
- Migrated to Astro for blazing-fast static pages
- React components for interactive elements
- Tailwind CSS for consistent, maintainable styling
- Headless CMS for easy content management

**Design & UX**
- Complete visual redesign aligned with brand
- Mobile-first responsive approach
- Clear information architecture
- Strategic CTA placement throughout
- Trust signals and social proof integration

**SEO & Performance**
- Core Web Vitals optimization
- Schema markup implementation
- Content optimization for target keywords
- Technical SEO audit and fixes`,
    results: `The new website launched to immediate positive feedback and measurable business impact:

The improved user experience directly translated to higher quality leads and shorter sales cycles. TechFlow's sales team reported that prospects arriving from the new website were better informed and further along in their buying journey.`,
    metrics: [
      { label: 'Load Time', value: '1.2s', description: 'Down from 8+ seconds' },
      { label: 'Conversion Rate', value: '+156%', description: 'From 0.8% to 2.1%' },
      { label: 'Organic Traffic', value: '+78%', description: 'Within 4 months' },
      { label: 'Bounce Rate', value: '-42%', description: 'Improved engagement' },
    ],
    testimonial: {
      quote: 'The website they built for us loads in under 2 seconds and converts 3x better than our old site. Technical excellence combined with beautiful design.',
      author: 'Linda Tan',
      role: 'Marketing Director, TechFlow Solutions',
      image: '/images/testimonials/linda.jpg',
    },
    images: {
      hero: '/images/work/techflow/hero.jpg',
      thumbnail: '/images/work/techflow/thumbnail.jpg',
      gallery: [
        { src: '/images/work/techflow/homepage.jpg', alt: 'New homepage design', caption: 'Redesigned homepage' },
        { src: '/images/work/techflow/mobile.jpg', alt: 'Mobile responsive design', caption: 'Mobile-first experience' },
        { src: '/images/work/techflow/performance.jpg', alt: 'Performance metrics', caption: 'Core Web Vitals scores' },
        { src: '/images/work/techflow/comparison.jpg', alt: 'Before and after comparison', caption: 'Before vs. after redesign' },
      ],
    },
    services: ['web-development', 'seo', 'design-services'],
    timeline: '8 weeks',
    year: 2024,
    featured: true,
    relatedCaseStudies: ['propertypro-platform', 'edulearn-academy'],
  },

  'greenmart-indonesia': {
    id: 'greenmart-indonesia',
    title: 'GreenMart: 89% More App Downloads',
    client: 'GreenMart Indonesia',
    category: 'app-development',
    tags: ['Flutter', 'App Development', 'UX Design'],
    excerpt: 'How we rebuilt GreenMart\'s mobile app from scratch, achieving 89% more downloads and a 4.8★ app store rating.',
    description: 'GreenMart Indonesia is an organic grocery delivery service operating in Jakarta, Bandung, and Surabaya. Their existing app was built with an outdated framework, causing performance issues and poor user reviews.',
    challenge: `GreenMart's original app was holding back their growth:

- Built with React Native 0.59 (severely outdated)
- Average app rating of 3.2★ with complaints about crashes
- Checkout abandonment rate of 67%
- No offline support or push notifications
- Slow load times and laggy scrolling
- Poor integration with their inventory system`,
    solution: `We rebuilt the entire app using Flutter for cross-platform excellence:

**Complete Rebuild**
- Flutter framework for native performance
- Clean architecture for maintainability
- Riverpod state management
- Offline-first data layer

**UX Improvements**
- Redesigned user flows based on analytics
- Streamlined checkout (reduced to 3 steps)
- Smart search with filters and suggestions
- Personalized recommendations

**Technical Features**
- Real-time inventory sync
- Push notifications with FCM
- In-app promotions system
- Deep linking for marketing campaigns
- Crash-free analytics implementation`,
    results: `The new app transformed GreenMart's mobile business:

The improved app experience directly contributed to higher customer lifetime value and reduced customer support tickets by 60%. GreenMart has since expanded to two additional cities, powered by the scalable app architecture we built.`,
    metrics: [
      { label: 'App Downloads', value: '+89%', description: 'Year-over-year growth' },
      { label: 'App Store Rating', value: '4.8★', description: 'Up from 3.2★' },
      { label: 'Checkout Completion', value: '+52%', description: 'Reduced abandonment' },
      { label: 'Daily Active Users', value: '+134%', description: 'Engagement increase' },
    ],
    testimonial: {
      quote: 'Our app downloads increased 89% after Algan rebuilt our Flutter app. The user experience is now world-class.',
      author: 'Rahman Hakim',
      role: 'Founder, GreenMart Indonesia',
      image: '/images/testimonials/rahman.jpg',
    },
    images: {
      hero: '/images/work/greenmart/hero.jpg',
      thumbnail: '/images/work/greenmart/thumbnail.jpg',
      gallery: [
        { src: '/images/work/greenmart/screens.jpg', alt: 'App screen designs', caption: 'Key app screens' },
        { src: '/images/work/greenmart/checkout.jpg', alt: 'Streamlined checkout', caption: '3-step checkout flow' },
        { src: '/images/work/greenmart/reviews.jpg', alt: 'App store reviews', caption: 'Improved user reviews' },
        { src: '/images/work/greenmart/analytics.jpg', alt: 'Usage analytics', caption: 'User engagement metrics' },
      ],
    },
    services: ['app-development', 'design-services', 'ecommerce-ads'],
    timeline: '12 weeks',
    year: 2024,
    featured: true,
    relatedCaseStudies: ['foodieapp-delivery', 'luxestyle-fashion'],
  },

  'financefirst-fintech': {
    id: 'financefirst-fintech',
    title: 'FinanceFirst: Brand That Commands Premium',
    client: 'FinanceFirst',
    category: 'design',
    tags: ['Branding', 'Design', 'Social Media'],
    excerpt: 'A complete rebrand that repositioned FinanceFirst as a premium fintech player, increasing social engagement by 4x.',
    description: 'FinanceFirst is an Indonesian fintech company offering personal finance management tools. They needed a brand refresh to compete with well-funded competitors and appeal to a more affluent user base.',
    challenge: `FinanceFirst's existing brand felt dated and didn't reflect their product quality:

- Visual identity from 2018 looked amateur
- Brand inconsistency across touchpoints
- Poor differentiation from competitors
- Low social media engagement (avg 50 likes)
- No cohesive brand guidelines
- Marketing team struggled with content creation`,
    solution: `We developed a comprehensive brand system that elevates FinanceFirst's market position:

**Brand Strategy**
- Positioning workshops and competitor analysis
- New brand messaging framework
- Tone of voice guidelines
- Target audience personas

**Visual Identity**
- Modern logo with fintech credibility
- Sophisticated color palette (navy, gold, white)
- Premium typography system
- Iconography and illustration style

**Brand Applications**
- Social media templates
- Presentation deck templates
- Marketing collateral designs
- App UI style guide alignment
- Website design direction`,
    results: `The rebrand had immediate and measurable impact on FinanceFirst's market position:

The new brand identity gave FinanceFirst's team confidence in their marketing efforts and attracted attention from investors. Within 3 months of the rebrand, they closed a Series A funding round with brand perception cited as a key factor.`,
    metrics: [
      { label: 'Social Engagement', value: '+4x', description: 'Average post engagement' },
      { label: 'Brand Recall', value: '+67%', description: 'In target audience surveys' },
      { label: 'App Downloads', value: '+45%', description: 'Post-rebrand period' },
      { label: 'Media Mentions', value: '+180%', description: 'PR coverage increase' },
    ],
    testimonial: {
      quote: 'The rebrand Algan created for us positioned us as a premium player in fintech. Our social engagement increased 4x overnight.',
      author: 'Michael Santoso',
      role: 'CMO, FinanceFirst',
      image: '/images/testimonials/michael.jpg',
    },
    images: {
      hero: '/images/work/financefirst/hero.jpg',
      thumbnail: '/images/work/financefirst/thumbnail.jpg',
      gallery: [
        { src: '/images/work/financefirst/logo.jpg', alt: 'New logo design', caption: 'Redesigned logo' },
        { src: '/images/work/financefirst/colors.jpg', alt: 'Brand color palette', caption: 'Premium color system' },
        { src: '/images/work/financefirst/social.jpg', alt: 'Social media templates', caption: 'Social media content' },
        { src: '/images/work/financefirst/collateral.jpg', alt: 'Marketing collateral', caption: 'Brand applications' },
      ],
    },
    services: ['design-services', 'social-media-marketing'],
    timeline: '6 weeks',
    year: 2024,
    featured: true,
    relatedCaseStudies: ['techflow-solutions', 'balivillas-luxury'],
  },

  'foodieapp-delivery': {
    id: 'foodieapp-delivery',
    title: 'FoodieApp: KOL Campaign That Went Viral',
    client: 'FoodieApp',
    category: 'digital-marketing',
    tags: ['KOL Marketing', 'Social Media', 'Meta Ads'],
    excerpt: 'An influencer marketing campaign that generated 2.5M views and 45,000 app downloads in just 2 weeks.',
    description: 'FoodieApp is a food discovery and delivery platform launching in Jakarta. They needed to create buzz and drive app downloads quickly to compete with established players.',
    challenge: `FoodieApp was entering a crowded market dominated by GoFood and GrabFood:

- Zero brand awareness in target market
- Limited marketing budget (Rp 150M total)
- Need for immediate traction to satisfy investors
- No existing user base for word-of-mouth
- Skeptical audience tired of food delivery apps`,
    solution: `We designed a multi-tiered influencer campaign that created authentic buzz:

**KOL Strategy**
- Identified 50 food-focused micro-influencers (10K-50K followers)
- Partnered with 5 mid-tier food reviewers (100K-500K)
- Secured 2 macro influencers for campaign anchoring

**Campaign Mechanics**
- "Hidden Gems Challenge" encouraging discovery
- Exclusive discount codes for each influencer
- User-generated content contest
- Coordinated launch timing for maximum impact

**Amplification**
- Meta Ads boosting best-performing organic content
- Retargeting website visitors with app download CTAs
- PR outreach to food and tech media`,
    results: `The campaign exceeded all targets and created lasting brand awareness:

The organic buzz generated continued well past the paid campaign period. FoodieApp achieved their 6-month download target in just 6 weeks, leading to an accelerated Series A fundraise.`,
    metrics: [
      { label: 'Total Views', value: '2.5M', description: 'Across all platforms' },
      { label: 'App Downloads', value: '45,000', description: 'In 2-week campaign' },
      { label: 'Cost Per Install', value: 'Rp 3,333', description: '67% below target' },
      { label: 'Earned Media Value', value: 'Rp 890M', description: 'PR and organic reach' },
    ],
    testimonial: {
      quote: 'Working with Algan Studio feels like having an in-house team but better. They understand our business and deliver results consistently.',
      author: 'Jessica Wong',
      role: 'Product Lead, FoodieApp',
      image: '/images/testimonials/jessica.jpg',
    },
    images: {
      hero: '/images/work/foodieapp/hero.jpg',
      thumbnail: '/images/work/foodieapp/thumbnail.jpg',
      gallery: [
        { src: '/images/work/foodieapp/influencers.jpg', alt: 'KOL content examples', caption: 'Influencer content' },
        { src: '/images/work/foodieapp/ugc.jpg', alt: 'User generated content', caption: 'UGC submissions' },
        { src: '/images/work/foodieapp/metrics.jpg', alt: 'Campaign metrics', caption: 'Performance dashboard' },
        { src: '/images/work/foodieapp/coverage.jpg', alt: 'Media coverage', caption: 'Press mentions' },
      ],
    },
    services: ['kol-marketing', 'social-media-marketing', 'meta-ads'],
    timeline: '4 weeks (2 weeks prep, 2 weeks live)',
    year: 2024,
    featured: false,
    relatedCaseStudies: ['greenmart-indonesia', 'beautybox-cosmetics'],
  },

  'balivillas-luxury': {
    id: 'balivillas-luxury',
    title: 'BaliVillas: SEO That Drives Bookings',
    client: 'BaliVillas Luxury',
    category: 'digital-marketing',
    tags: ['SEO', 'Content Marketing', 'Google Ads'],
    excerpt: 'How we achieved #1 rankings for high-value keywords, driving $2M in direct bookings within 12 months.',
    description: 'BaliVillas Luxury is a premium villa rental company managing 50+ luxury properties across Bali. They were overly dependent on OTAs (Airbnb, Booking.com) and wanted to increase direct bookings.',
    challenge: `BaliVillas was losing 15-20% of revenue to OTA commissions:

- 85% of bookings came through OTAs
- Website had minimal organic visibility
- No ranking for high-value keywords like "luxury villa bali"
- Thin content that didn't showcase properties well
- Technical SEO issues preventing proper indexing
- Competitors dominated search results`,
    solution: `We implemented a comprehensive SEO and content strategy:

**Technical SEO**
- Complete technical audit and fixes
- Site speed optimization (Core Web Vitals)
- Schema markup for vacation rentals
- XML sitemap and indexation fixes

**Content Strategy**
- Created 100+ location and property pages
- Developed "Bali Guide" content hub
- Built out villa comparison content
- Guest blog outreach program

**Link Building**
- Digital PR for travel publications
- Partnerships with travel bloggers
- Local business citations
- High-authority guest posting`,
    results: `The SEO program transformed BaliVillas' booking mix and profitability:

By reducing OTA dependency, BaliVillas significantly improved their margins. The direct booking rate continues to grow as SEO compounds over time.`,
    metrics: [
      { label: 'Direct Bookings', value: '$2M', description: 'In first 12 months' },
      { label: 'Organic Traffic', value: '+340%', description: 'Year-over-year' },
      { label: '#1 Rankings', value: '23', description: 'High-value keywords' },
      { label: 'OTA Dependency', value: '-35%', description: 'Booking mix shift' },
    ],
    testimonial: {
      quote: 'Algan\'s SEO work has fundamentally changed our business model. Direct bookings now account for 50% of our revenue, up from 15%.',
      author: 'Made Wirawan',
      role: 'Owner, BaliVillas Luxury',
    },
    images: {
      hero: '/images/work/balivillas/hero.jpg',
      thumbnail: '/images/work/balivillas/thumbnail.jpg',
      gallery: [
        { src: '/images/work/balivillas/rankings.jpg', alt: 'Search rankings', caption: 'Keyword rankings growth' },
        { src: '/images/work/balivillas/traffic.jpg', alt: 'Traffic growth', caption: 'Organic traffic increase' },
        { src: '/images/work/balivillas/content.jpg', alt: 'Content examples', caption: 'Bali Guide content hub' },
        { src: '/images/work/balivillas/bookings.jpg', alt: 'Booking data', caption: 'Direct booking growth' },
      ],
    },
    services: ['seo', 'google-ads', 'web-development'],
    timeline: '12 months ongoing',
    year: 2023,
    featured: false,
    relatedCaseStudies: ['techflow-solutions', 'propertypro-platform'],
  },

  'beautybox-cosmetics': {
    id: 'beautybox-cosmetics',
    title: 'BeautyBox: Marketplace Domination',
    client: 'BeautyBox Cosmetics',
    category: 'digital-marketing',
    tags: ['eCommerce Ads', 'Shopee', 'TikTok Shop'],
    excerpt: 'From new seller to category leader on Shopee and TikTok Shop in 6 months, with Rp 3.2B in marketplace sales.',
    description: 'BeautyBox Cosmetics is an Indonesian skincare brand that wanted to expand from their D2C website to major marketplaces. They had no presence on Shopee or TikTok Shop.',
    challenge: `BeautyBox faced significant barriers to marketplace entry:

- Zero reviews or sales history on marketplaces
- Competitors with years of established presence
- No understanding of marketplace algorithms
- Limited budget for marketplace advertising
- Counterfeit products affecting brand search
- Need to maintain brand positioning on price-competitive platforms`,
    solution: `We developed a marketplace launch and growth strategy:

**Store Setup & Optimization**
- Professional store decoration and branding
- Optimized product listings with keyword research
- Competitive pricing strategy analysis
- Review generation campaign

**Advertising Strategy**
- Shopee Ads: Search, discovery, and shop ads
- TikTok Shop: In-feed ads and LIVE shopping
- Campaign scheduling around flash sales
- Bid optimization based on performance

**Content & Community**
- TikTok content strategy for organic reach
- Shopee Feed engagement program
- KOL seeding on both platforms
- Customer service excellence program`,
    results: `BeautyBox became a category leader faster than anyone expected:

The marketplace success also drove awareness that benefited their D2C business. BeautyBox is now expanding into Tokopedia and Lazada using the same playbook.`,
    metrics: [
      { label: 'Marketplace Sales', value: 'Rp 3.2B', description: 'In first 6 months' },
      { label: 'Shopee Rating', value: '4.9★', description: 'With 15K+ reviews' },
      { label: 'TikTok Shop Rank', value: '#3', description: 'In skincare category' },
      { label: 'ROAS', value: '5.2x', description: 'Marketplace advertising' },
    ],
    testimonial: {
      quote: 'We went from zero to category leader in 6 months. Algan\'s marketplace expertise gave us the edge we needed.',
      author: 'Sinta Dewi',
      role: 'Founder, BeautyBox Cosmetics',
    },
    images: {
      hero: '/images/work/beautybox/hero.jpg',
      thumbnail: '/images/work/beautybox/thumbnail.jpg',
      gallery: [
        { src: '/images/work/beautybox/shopee.jpg', alt: 'Shopee store', caption: 'Shopee official store' },
        { src: '/images/work/beautybox/tiktok.jpg', alt: 'TikTok Shop', caption: 'TikTok Shop presence' },
        { src: '/images/work/beautybox/reviews.jpg', alt: 'Customer reviews', caption: 'Customer testimonials' },
        { src: '/images/work/beautybox/sales.jpg', alt: 'Sales dashboard', caption: 'Sales performance' },
      ],
    },
    services: ['ecommerce-ads', 'kol-marketing', 'social-media-marketing'],
    timeline: '6 months',
    year: 2024,
    featured: false,
    relatedCaseStudies: ['luxestyle-fashion', 'foodieapp-delivery'],
  },

  'edulearn-academy': {
    id: 'edulearn-academy',
    title: 'EduLearn: EdTech Platform Launch',
    client: 'EduLearn Academy',
    category: 'web-development',
    tags: ['Web Development', 'App Development', 'UI/UX'],
    excerpt: 'Built a complete learning management system that scaled to 50,000 students with 99.9% uptime.',
    description: 'EduLearn Academy is an online education platform offering professional certification courses. They needed a custom LMS that could handle video streaming, assessments, and certification.',
    challenge: `EduLearn's off-the-shelf LMS wasn't meeting their needs:

- Poor video streaming experience
- No support for their certification workflow
- Limited analytics and reporting
- Couldn't handle traffic spikes during live events
- Mobile experience was broken
- Integration issues with payment gateways`,
    solution: `We built a custom learning platform from the ground up:

**Platform Development**
- Next.js frontend for fast, SEO-friendly pages
- Node.js backend with PostgreSQL database
- Video streaming via Mux with adaptive bitrate
- Custom assessment engine with anti-cheating

**Mobile Apps**
- Flutter apps for iOS and Android
- Offline video download capability
- Push notifications for course reminders
- In-app purchase integration

**Infrastructure**
- Deployed on AWS with auto-scaling
- CDN for global video delivery
- Real-time analytics dashboard
- Automated certificate generation`,
    results: `The platform launched successfully and scaled rapidly:

EduLearn has since expanded to corporate training partnerships, with the platform handling enterprise clients seamlessly.`,
    metrics: [
      { label: 'Active Students', value: '50,000+', description: 'Within 12 months' },
      { label: 'Uptime', value: '99.9%', description: 'Platform reliability' },
      { label: 'Course Completion', value: '+67%', description: 'Vs. previous platform' },
      { label: 'Video Load Time', value: '<2s', description: 'Globally' },
    ],
    testimonial: {
      quote: 'The platform Algan built handles 50,000 students without breaking a sweat. Their technical expertise saved us years of development time.',
      author: 'Dr. Anita Wijaya',
      role: 'CEO, EduLearn Academy',
    },
    images: {
      hero: '/images/work/edulearn/hero.jpg',
      thumbnail: '/images/work/edulearn/thumbnail.jpg',
      gallery: [
        { src: '/images/work/edulearn/dashboard.jpg', alt: 'Student dashboard', caption: 'Learning dashboard' },
        { src: '/images/work/edulearn/course.jpg', alt: 'Course interface', caption: 'Course player' },
        { src: '/images/work/edulearn/mobile.jpg', alt: 'Mobile apps', caption: 'iOS and Android apps' },
        { src: '/images/work/edulearn/admin.jpg', alt: 'Admin panel', caption: 'Instructor admin panel' },
      ],
    },
    services: ['web-development', 'app-development', 'design-services'],
    timeline: '16 weeks',
    year: 2023,
    featured: false,
    relatedCaseStudies: ['techflow-solutions', 'greenmart-indonesia'],
  },

  'propertypro-platform': {
    id: 'propertypro-platform',
    title: 'PropertyPro: Lead Gen Machine',
    client: 'PropertyPro',
    category: 'digital-marketing',
    tags: ['Google Ads', 'Meta Ads', 'Landing Pages'],
    excerpt: 'Built a lead generation system that delivers 500+ qualified property leads monthly at 40% below industry CPA.',
    description: 'PropertyPro is a real estate agency specializing in premium properties in Jakarta and BSD. They needed a predictable stream of qualified buyer leads.',
    challenge: `PropertyPro's lead generation was inconsistent and expensive:

- Relying on referrals and walk-ins
- Previous agency delivered low-quality leads
- High cost per qualified lead (Rp 850K+)
- No lead tracking or attribution
- Sales team wasting time on unqualified prospects
- Competitors outbidding on key search terms`,
    solution: `We built a comprehensive lead generation ecosystem:

**Landing Page System**
- Property-specific landing pages
- Development project microsites
- Lead qualification forms
- WhatsApp integration for instant response

**Google Ads**
- Search campaigns for high-intent keywords
- Display remarketing for property viewers
- YouTube ads for development launches
- Local campaigns for office locations

**Meta Ads**
- Lookalike audiences from buyer data
- Carousel ads showcasing properties
- Lead form ads for mobile users
- Retargeting across the buyer journey

**Lead Management**
- CRM integration (Hubspot)
- Lead scoring based on behavior
- Automated follow-up sequences
- Sales team training on lead handling`,
    results: `The lead generation system transformed PropertyPro's sales pipeline:

The quality of leads improved dramatically, with sales team reporting 3x higher close rates on Algan-generated leads vs. other sources.`,
    metrics: [
      { label: 'Monthly Leads', value: '500+', description: 'Qualified prospects' },
      { label: 'Cost Per Lead', value: '-40%', description: 'Below industry average' },
      { label: 'Lead Quality Score', value: '8.2/10', description: 'Sales team rating' },
      { label: 'Revenue Attributed', value: 'Rp 45B', description: 'In closed deals' },
    ],
    testimonial: {
      quote: 'Our sales team finally has more leads than they can handle. The quality is outstanding—these are real buyers, not tire-kickers.',
      author: 'Hendry Tanoto',
      role: 'Sales Director, PropertyPro',
    },
    images: {
      hero: '/images/work/propertypro/hero.jpg',
      thumbnail: '/images/work/propertypro/thumbnail.jpg',
      gallery: [
        { src: '/images/work/propertypro/landing.jpg', alt: 'Landing page', caption: 'Property landing page' },
        { src: '/images/work/propertypro/ads.jpg', alt: 'Ad examples', caption: 'High-performing ads' },
        { src: '/images/work/propertypro/crm.jpg', alt: 'CRM dashboard', caption: 'Lead management system' },
        { src: '/images/work/propertypro/results.jpg', alt: 'Results dashboard', caption: 'Monthly performance' },
      ],
    },
    services: ['google-ads', 'meta-ads', 'web-development'],
    timeline: '3 months setup, ongoing',
    year: 2024,
    featured: false,
    relatedCaseStudies: ['balivillas-luxury', 'luxestyle-fashion'],
  },

  'autoparts-wholesale': {
    id: 'autoparts-wholesale',
    title: 'AutoParts: B2B Digital Transformation',
    client: 'AutoParts Indonesia',
    category: 'web-development',
    tags: ['Web Development', 'SEO', 'B2B eCommerce'],
    excerpt: 'Transformed a traditional wholesaler into a digital-first business with a B2B eCommerce platform.',
    description: 'AutoParts Indonesia is a wholesale distributor of automotive parts serving workshops across Java. They wanted to modernize their ordering process and expand their customer base.',
    challenge: `AutoParts was losing ground to more digitally savvy competitors:

- Orders still processed via phone and WhatsApp
- No online product catalog
- Inventory management was manual
- Customers couldn't check stock availability
- Limited reach beyond existing relationships
- No data on customer purchasing patterns`,
    solution: `We built a complete B2B digital commerce solution:

**B2B Platform**
- Custom eCommerce platform with B2B features
- Tiered pricing based on customer level
- Bulk ordering and quick reorder
- Credit limit management
- Invoice and payment tracking

**Product Catalog**
- 15,000+ SKU digital catalog
- Part number and vehicle search
- Cross-reference database
- Technical specifications

**Integrations**
- ERP integration for real-time inventory
- Automated order processing
- Delivery tracking integration
- Accounting system sync

**SEO & Marketing**
- Product pages optimized for part searches
- Technical content for mechanics
- Email marketing automation
- WhatsApp Business integration`,
    results: `The digital transformation exceeded expectations:

AutoParts has since expanded to serve customers in Sumatra and Kalimantan, which wouldn't have been possible with their old manual process.`,
    metrics: [
      { label: 'Online Orders', value: '65%', description: 'Of total orders now digital' },
      { label: 'New Customers', value: '+180', description: 'In first 6 months' },
      { label: 'Order Processing', value: '-75%', description: 'Time reduction' },
      { label: 'Revenue Growth', value: '+34%', description: 'Year-over-year' },
    ],
    testimonial: {
      quote: 'Our customers love being able to order 24/7 and check stock in real-time. We should have done this years ago.',
      author: 'Bambang Sutrisno',
      role: 'Director, AutoParts Indonesia',
    },
    images: {
      hero: '/images/work/autoparts/hero.jpg',
      thumbnail: '/images/work/autoparts/thumbnail.jpg',
      gallery: [
        { src: '/images/work/autoparts/catalog.jpg', alt: 'Product catalog', caption: 'Digital product catalog' },
        { src: '/images/work/autoparts/ordering.jpg', alt: 'Ordering interface', caption: 'B2B ordering portal' },
        { src: '/images/work/autoparts/mobile.jpg', alt: 'Mobile interface', caption: 'Mobile ordering' },
        { src: '/images/work/autoparts/dashboard.jpg', alt: 'Admin dashboard', caption: 'Business dashboard' },
      ],
    },
    services: ['web-development', 'seo', 'design-services'],
    timeline: '14 weeks',
    year: 2023,
    featured: false,
    relatedCaseStudies: ['techflow-solutions', 'edulearn-academy'],
  },
};

// Helper functions
export function getCaseStudy(id: string): CaseStudy | undefined {
  return CASE_STUDIES[id];
}

export function getAllCaseStudyIds(): string[] {
  return Object.keys(CASE_STUDIES);
}

export function getCaseStudiesByCategory(category: string): CaseStudy[] {
  if (category === 'all') return Object.values(CASE_STUDIES);
  return Object.values(CASE_STUDIES).filter(cs => cs.category === category);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return Object.values(CASE_STUDIES).filter(cs => cs.featured);
}

export function getRelatedCaseStudies(id: string): CaseStudy[] {
  const caseStudy = CASE_STUDIES[id];
  if (!caseStudy) return [];
  return caseStudy.relatedCaseStudies
    .map(relatedId => CASE_STUDIES[relatedId])
    .filter(Boolean);
}

// Category labels
export const WORK_CATEGORIES = [
  { value: 'all', label: 'All Work' },
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'web-development', label: 'Web Development' },
  { value: 'app-development', label: 'App Development' },
  { value: 'design', label: 'Design' },
] as const;