# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Algan Studio is a production-ready digital agency website built with Astro 4.x, leveraging React islands for interactivity, Tailwind CSS with a custom design token system, and GSAP/Framer Motion for animations.

**Core Tech Stack:**
- **Framework:** Astro 4.x (Static Site Generation)
- **UI Library:** React 18.x (Islands Architecture)
- **Styling:** Tailwind CSS 3.x + Custom Design Tokens
- **Animations:** GSAP 3.x + Framer Motion
- **Language:** TypeScript (Strict mode)
- **Build:** Vite with LightningCSS

## Development Commands

```bash
# Development
npm run dev              # Start dev server at localhost:4321
npm start               # Alias for npm run dev

# Building & Preview
npm run build           # Type-check with astro check, then build for production
npm run preview         # Preview production build locally

# Code Quality
npm run typecheck       # Run Astro check + TypeScript compiler (no emit)
npm run lint            # ESLint check (.ts, .tsx, .astro files)
npm run lint:fix        # Auto-fix ESLint issues
npm run format          # Format with Prettier

# Maintenance
npm run clean           # Remove dist, .astro, and Vite cache
```

**Important:** Always run `npm run build` before committing to catch type errors. The build command includes `astro check` which validates both Astro and TypeScript files.

## Architecture

### Islands Architecture

Astro uses "Islands Architecture" - the site is predominantly static HTML with interactive React components ("islands") hydrated only where needed:

- **Static Components:** `.astro` files for mostly-static UI (layouts, pages, presentational components)
- **Interactive Islands:** `.tsx` React components for interactivity (forms, carousels, filters, modals)
- Components in `src/components/` are automatically discovered and can be imported directly

**When to use React vs Astro:**
- Use `.astro` for static content, layouts, and components that don't need client-side interactivity
- Use `.tsx` for components requiring state, effects, or event handlers
- React components need `client:*` directives in Astro files to hydrate (e.g., `client:load`, `client:visible`)

### Component Organization

```
src/components/
├── ui/              # Reusable UI primitives (29 components)
│                    # Button, Input, Card, Modal, Accordion, Carousel, etc.
├── global/          # Site-wide components (Header, Footer, SEO, WhatsAppButton)
├── home/            # Homepage-specific sections
├── services/        # Service pages components
├── work/            # Portfolio/case study components
├── blog/            # Blog listing and post components
├── about/           # About page components
└── contact/         # Contact form components
```

**Key Patterns:**
- UI components in `ui/` are generic and reusable across the site
- Page-specific components are organized by route (home, services, work, etc.)
- All UI components are exported from `src/components/ui/index.ts` for convenient imports

### Design System: Single Source of Truth

The design system follows a strict "tokens-first" approach:

1. **Design Tokens** (`src/styles/tokens.css`) - All design values (colors, spacing, typography, shadows, etc.) are defined as CSS custom properties
2. **Tailwind Config** (`tailwind.config.mjs`) - References CSS custom properties from tokens.css (not duplicating values)
3. **Global Styles** (`src/styles/global.css`) - Imports tokens and applies base styles
4. **Components** - Use Tailwind utility classes that reference the tokens

**Critical Rule:** Never hardcode colors, spacing values, or other design values in components. Always use:
- Tailwind utilities (e.g., `bg-bg-primary`, `text-accent`, `rounded-lg`)
- Or CSS custom properties directly if needed (e.g., `var(--color-accent)`)

**Color System:**
- `bg-*` - Background colors (primary, secondary, tertiary, elevated, inverse)
- `text-*` - Text colors (primary, secondary, tertiary, muted, inverse)
- `accent-*` - Accent colors for CTAs and highlights
- `brand-*` - Brand colors
- Semantic colors: `success-*`, `warning-*`, `error-*`, `info-*`

### Path Aliases

TypeScript path aliases configured in `tsconfig.json`:

```typescript
@/*                  → src/*
@/components/*       → src/components/*
@/layouts/*          → src/layouts/*
@/lib/*              → src/lib/*
@/styles/*           → src/styles/*
```

Always use path aliases for cleaner imports:
```typescript
// Good
import { Button } from '@/components/ui';
import { SITE_CONFIG } from '@/lib/constants';

// Avoid
import { Button } from '../../../components/ui';
```

### Data Layer

All content data is centralized in `src/lib/`:

- `constants.ts` - Site config, navigation, services list, stats, testimonials, client logos, animation config, SEO defaults
- `services-data.ts` - Detailed service information (56KB - comprehensive content)
- `case-studies-data.ts` - Portfolio case studies (36KB)
- `blog-data.ts` - Blog posts content (78KB)
- `team-data.ts` - Team member information
- `pricing-data.ts` - Pricing tiers for services

**Pattern:** Content is stored as TypeScript objects with `as const` for type inference. Import from these files rather than hardcoding content in components.

### Layout System

`BaseLayout.astro` is the root layout wrapping all pages:

- Handles SEO meta tags via the `SEO` component
- Includes global Header and Footer
- Sets up View Transitions for SPA-like navigation
- Initializes GSAP ScrollTrigger for scroll animations
- Preloads critical fonts
- Respects `prefers-reduced-motion`

**Props interface:**
```typescript
{
  title?: string;           // Page title (auto-appends site name)
  description?: string;      // Meta description
  image?: string;            // OG image
  canonicalUrl?: string;     // Canonical URL
  noIndex?: boolean;         // Robots noindex
  type?: 'website' | 'article';
  publishedTime?: string;    // For articles
  modifiedTime?: string;     // For articles
  author?: string;           // For articles
  section?: string;          // For articles
  tags?: string[];           // For articles
}
```

### Animation System

Two animation libraries are used strategically:

**GSAP (ScrollTrigger):**
- Initialized globally in BaseLayout.astro
- Use `data-animate` attribute for declarative scroll animations
- Supported animations: `fade-up`, `fade-down`, `fade-left`, `fade-right`, `scale`, `fade` (default)
- Add `data-delay="0.2"` for staggered delays
- For groups: `data-stagger="0.1"` on parent, `data-stagger-item` on children
- Config in `ANIMATION_CONFIG` in constants.ts

**Framer Motion:**
- Used for React component animations (hover effects, page transitions, complex interactions)
- Import only in React `.tsx` files that need it
- Code-split automatically by Vite (see `astro.config.mjs` manual chunks)

**Performance:** Both libraries are code-split in production. GSAP bundle includes only core + ScrollTrigger plugin.

## Code Style & Conventions

### TypeScript

- **Strict mode enabled** - `strictNullChecks`, `noImplicitAny` enforced
- Use `interface` for component props, `type` for unions/utilities
- Prefer `const` assertions for data objects (`as const`)
- Unused variables starting with `_` are allowed (e.g., `_props`)

### ESLint Rules (Key Highlights)

From `eslint.config.js`:

- `@typescript-eslint/consistent-type-imports: 'warn'` - Use `import type` for type-only imports
- `no-console: ['warn', { allow: ['warn', 'error'] }]` - Only console.warn and console.error allowed
- Accessibility rules enforced (`jsx-a11y/*`) - alt text, anchor content, ARIA props required
- `astro/no-set-html-directive: 'off'` - `set:html` is allowed when used safely

### Component Patterns

**Astro Components:**
```astro
---
// Props with TypeScript interface
interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
}

const { title, variant = 'primary' } = Astro.props;
---

<div class="component">
  {title}
</div>
```

**React Components:**
```tsx
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
```

### Styling Conventions

1. Use Tailwind utilities following mobile-first approach
2. Reference design tokens via Tailwind classes
3. Use semantic color names (e.g., `bg-primary` not `bg-white`)
4. Responsive: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px), `2xl:` (1536px)
5. Custom utilities available: `.text-balance`, `.text-pretty`, `.touch-target`

### Accessibility

Site targets WCAG 2.1 AA compliance:
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Skip links (implemented in BaseLayout)
- Color contrast ratios: 4.5:1+ for text
- Reduced motion support (GSAP respects `prefers-reduced-motion`)

## Configuration Files

### astro.config.mjs

- **Output:** `static` (SSG - all pages pre-rendered)
- **Site URL:** https://algan.id (used for sitemap generation)
- **Integrations:** React, Tailwind (custom base styles disabled), Sitemap
- **Prefetch:** Enabled with viewport strategy for faster navigation
- **Image Service:** Sharp for optimization
- **CSS Minification:** LightningCSS (faster than cssnano)
- **Code Splitting:** Manual chunks for react-vendor, framer-motion, gsap
- **Redirects:** `/home → /`, `/services/ads → /services/google-ads`

### tailwind.config.mjs

- **Content:** Scans all `.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}` in src/
- **Theme Extensions:** All reference CSS custom properties from tokens.css
- **Custom Plugins:** Fluid typography utilities, touch target sizing

### tsconfig.json

- Extends `astro/tsconfigs/strict`
- JSX configured for React (`react-jsx`)
- Path aliases configured (see "Path Aliases" section)
- `verbatimModuleSyntax: true` - Import/export syntax preserved

## Performance Targets

From README.md - these are the goals:

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Lighthouse Performance Score: 90+

**Optimization strategies already implemented:**
- Static site generation
- Image optimization with Sharp
- CSS minification with LightningCSS
- Code splitting (React, Framer Motion, GSAP)
- Prefetching with viewport strategy
- Font preloading (Inter Variable)
- Lazy loading for below-fold content

## Deployment

The site is configured for multiple platforms:

- **Vercel:** `vercel.json` present (recommended platform)
- **Netlify:** `netlify.toml` present
- **Build Output:** `dist/` directory (static files)
- **Build Command:** `npm run build`
- **Node Version:** >= 18.17.0 (specified in package.json engines)

## Common Workflows

### Adding a New Page

1. Create `.astro` file in `src/pages/` (file-based routing)
2. Import and wrap with BaseLayout
3. Pass SEO props (title, description, etc.)
4. Use existing components from `src/components/`

### Adding a New Component

1. Decide: Astro (static) or React (interactive)?
2. Place in appropriate directory (ui/ for generic, page-specific for others)
3. Follow TypeScript interface pattern for props
4. Use design tokens via Tailwind utilities
5. Export from `src/components/ui/index.ts` if it's a UI component

### Modifying Site Config

- Site-wide settings: `src/lib/constants.ts` (SITE_CONFIG)
- Navigation: `src/lib/constants.ts` (NAVIGATION)
- Meta tags: `src/layouts/BaseLayout.astro` and `src/components/global/SEO.astro`
- Build settings: `astro.config.mjs`

### Adding Animation

**For scroll-triggered animations:**
```astro
<div data-animate="fade-up" data-delay="0.2">
  Content
</div>
```

**For stagger groups:**
```astro
<div data-stagger="0.1">
  <div data-stagger-item>Item 1</div>
  <div data-stagger-item>Item 2</div>
</div>
```

**For React component animations:**
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Known Patterns

### Environment Variables

Expected environment variables (from README):
```env
PUBLIC_SITE_URL=https://algan.id
PUBLIC_WHATSAPP_NUMBER=6281234567890
PUBLIC_CONTACT_EMAIL=hello@algan.id
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Optional
PUBLIC_GTM_ID=GTM-XXXXXXX              # Optional
PUBLIC_FB_PIXEL_ID=XXXXXXXX            # Optional
```

Access in code: `import.meta.env.PUBLIC_*`

### Form Handling

Contact form uses:
- `react-hook-form` for form state management
- `zod` with `@hookform/resolvers` for validation
- Client-side validation with error messages

### Icon System

Uses `lucide-react` for icons. Import icons individually:
```tsx
import { Search, Menu, X } from 'lucide-react';
```

## Troubleshooting

**Type errors in Astro files:**
- Run `npm run typecheck` to see all type errors
- Astro components use frontmatter TypeScript - errors show as `astro check` output

**Build fails:**
- Ensure all imports are valid (check path aliases)
- Run `npm run clean` then `npm install` to clear caches
- Check for missing environment variables if build references them

**Animation not working:**
- Verify GSAP script loads (check browser console)
- Check `data-animate` attribute spelling
- Ensure element is in viewport when scrolling (start: 'top 85%')
- Check browser dev tools for `prefers-reduced-motion` (disables GSAP globally)

**Styles not applying:**
- Verify Tailwind class names match config
- Check tokens.css for custom property values
- Run `npm run build` - some issues only appear in production builds
- Ensure `global.css` imports tokens.css (already configured)
