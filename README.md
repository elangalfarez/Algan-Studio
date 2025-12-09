# Algan Studio Website

> Production-ready digital agency website built with Astro, React, Tailwind CSS, and Framer Motion.

![Algan Studio](https://algan.id/images/og-image.jpg)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/alganstudio/website.git
cd website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see the site.

## 📦 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Astro](https://astro.build) v4.x |
| UI Library | [React](https://react.dev) v18.x |
| Styling | [Tailwind CSS](https://tailwindcss.com) v3.x |
| Animations | [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://greensock.com/gsap/) |
| Icons | [Lucide React](https://lucide.dev) |
| Build | [Vite](https://vitejs.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |

## 📁 Project Structure

```
algan-studio/
├── public/                 # Static assets
│   ├── fonts/             # Custom fonts (Inter, Space Grotesk)
│   ├── images/            # Images organized by section
│   └── robots.txt         # SEO robots configuration
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # Base UI components (29)
│   │   ├── global/       # Header, Footer, SEO (6)
│   │   ├── home/         # Homepage sections (9)
│   │   ├── services/     # Service page components (9)
│   │   ├── work/         # Portfolio components (10)
│   │   ├── blog/         # Blog components (10)
│   │   ├── about/        # About page components (4)
│   │   └── contact/      # Contact form (1)
│   ├── layouts/          # Page layouts
│   │   └── BaseLayout.astro
│   ├── lib/              # Utilities and data
│   │   ├── constants.ts  # Site configuration
│   │   ├── services-data.ts
│   │   ├── case-studies-data.ts
│   │   ├── blog-data.ts
│   │   ├── team-data.ts
│   │   └── pricing-data.ts
│   ├── pages/            # File-based routing
│   │   ├── index.astro   # Homepage
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── pricing.astro
│   │   ├── 404.astro
│   │   ├── services/     # 9 service pages
│   │   ├── work/         # 10 case study pages
│   │   ├── blog/         # 20 blog post pages
│   │   └── legal/        # Privacy, Terms
│   └── styles/           # Global styles
│       ├── global.css    # Base styles
│       ├── tokens.css    # Design tokens
│       └── animations.css # Animation utilities
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## 🎨 Design System

### Color Tokens

```css
/* Primary Brand Colors */
--color-brand-primary: #1e3a5f;    /* Deep blue */
--color-accent: #ff6b35;           /* Vibrant orange */

/* Semantic Colors */
--color-text-primary: #0f172a;
--color-text-secondary: #334155;
--color-bg-primary: #ffffff;
--color-bg-secondary: #f8fafc;
```

### Typography

- **Headings:** Space Grotesk (700)
- **Body:** Inter (400, 500, 600)
- **Monospace:** SF Mono, Monaco

### Spacing Scale

Uses Tailwind's default spacing with custom section utilities:
- `.section` — `py-16 md:py-24`
- `.section-sm` — `py-12 md:py-16`
- `.container` — Max-width 1280px with responsive padding

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, services, work, testimonials, stats |
| Services | `/services` | Services listing |
| Service Detail | `/services/[slug]` | 9 individual service pages |
| Portfolio | `/work` | Filterable case studies |
| Case Study | `/work/[slug]` | 10 detailed case studies |
| Blog | `/blog` | Filterable blog listing |
| Blog Post | `/blog/[slug]` | 20 blog posts with TOC |
| About | `/about` | Team, values, timeline |
| Contact | `/contact` | Contact form with validation |
| Pricing | `/pricing` | 9 plans across 3 categories |
| Privacy | `/legal/privacy-policy` | Privacy policy |
| Terms | `/legal/terms-of-service` | Terms of service |
| 404 | `/404` | Custom error page |

**Total Pages:** 52+

## 🧩 Components

### UI Components (29)

| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, ghost, outline variants |
| `Badge` | Status and category badges |
| `Card` | Flexible card container |
| `Input` | Form input with validation states |
| `Textarea` | Multi-line text input |
| `Select` | Custom dropdown select |
| `Checkbox` | Custom checkbox |
| `Radio` | Radio button group |
| `Switch` | Toggle switch |
| `Avatar` | User avatar with fallback |
| `Accordion` | Collapsible content |
| `Tabs` | Tab navigation |
| `Modal` | Dialog overlay |
| `Tooltip` | Hover tooltips |
| `Toast` | Notification messages |
| `Skeleton` | Loading placeholders |
| `ProgressBar` | Progress indicator |
| `Carousel` | Image/content slider |
| `Lightbox` | Image gallery viewer |
| `Divider` | Content separator |
| `Breadcrumb` | Navigation breadcrumbs |
| `SectionHeader` | Consistent section titles |
| `ServiceCard` | Service feature cards |
| `TestimonialCard` | Client testimonials |
| `ProcessStep` | Step-by-step process |
| `StatsCounter` | Animated statistics |
| `Marquee` | Scrolling content |
| And more... |

### Interactive Components (React)

- `MobileMenu` — Slide-out mobile navigation
- `BlogFilter` — Category filter with animations
- `WorkFilter` — Portfolio filter
- `TableOfContents` — Scroll spy TOC
- `ContactForm` — Form validation
- `Carousel` — Touch-friendly slider

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Required
PUBLIC_SITE_URL=https://algan.id
PUBLIC_WHATSAPP_NUMBER=6281234567890
PUBLIC_CONTACT_EMAIL=hello@algan.id

# Analytics (optional)
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
PUBLIC_GTM_ID=GTM-XXXXXXX
PUBLIC_FB_PIXEL_ID=XXXXXXXX
```

### Site Configuration

Edit `src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Algan Studio',
  tagline: 'Digital Agency',
  // ... more config
};
```

## 🛠️ Scripts

```bash
# Development
npm run dev           # Start dev server at localhost:4321
npm run dev:host      # Expose to network

# Build
npm run build         # Production build
npm run preview       # Preview production build

# Quality
npm run lint          # Run ESLint
npm run lint:fix      # Fix lint errors
npm run typecheck     # TypeScript check
npm run format        # Prettier format

# Testing
npm run test          # Run tests
npm run test:e2e      # End-to-end tests
```

## 📱 Responsive Breakpoints

```css
/* Tailwind Defaults */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Skip links
- Reduced motion support
- Color contrast 4.5:1+ for text

## ⚡ Performance

### Optimizations

- Static site generation (SSG)
- Image optimization with Sharp
- CSS minification with LightningCSS
- Code splitting (React, Framer Motion, GSAP)
- Prefetching with viewport strategy
- Font subsetting and preloading
- Lazy loading for below-fold content

### Target Metrics

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.5s |
| Cumulative Layout Shift | < 0.1 |
| Performance Score | 90+ |

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist/
```

### Manual/VPS

```bash
# Build
npm run build

# The dist/ folder can be served by any static host
# nginx, Apache, Caddy, etc.
```

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
```

## 📋 Checklist

### Pre-Launch

- [ ] Update all placeholder content
- [ ] Replace placeholder images
- [ ] Configure environment variables
- [ ] Test all forms
- [ ] Test all links
- [ ] Verify analytics tracking
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Test in multiple browsers
- [ ] Verify SEO meta tags
- [ ] Check Open Graph previews
- [ ] Test 404 page
- [ ] Verify sitemap generation
- [ ] Check robots.txt

### Post-Launch

- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Set up uptime monitoring
- [ ] Configure error tracking (Sentry)
- [ ] Set up analytics goals
- [ ] Monitor Core Web Vitals

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow existing component patterns
- Use theme tokens, never hardcode colors
- Mobile-first responsive design
- Include accessibility attributes

## 📄 License

This project is proprietary software owned by Algan Studio.

## 📞 Support

- **Email:** dev@algan.id
- **Documentation:** https://docs.algan.id
- **Issues:** https://github.com/alganstudio/website/issues

---

Built with ❤️ by Algan Studio