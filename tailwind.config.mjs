// tailwind.config.mjs
// Created: Tailwind configuration extending design tokens from tokens.css

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      /* ============================================
         COLORS - Reference CSS custom properties
         This ensures single source of truth in tokens.css
         ============================================ */
      colors: {
        // Background colors
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
          elevated: 'var(--color-bg-elevated)',
          inverse: 'var(--color-bg-inverse)',
        },
        // Text colors
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          muted: 'var(--color-text-muted)',
          inverse: 'var(--color-text-inverse)',
        },
        // Accent colors
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          light: 'var(--color-accent-light)',
          subtle: 'var(--color-accent-subtle)',
        },
        // Brand colors
        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
        },
        // Semantic colors
        success: {
          DEFAULT: 'var(--color-success)',
          light: 'var(--color-success-light)',
          bg: 'var(--color-success-bg)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          light: 'var(--color-warning-light)',
          bg: 'var(--color-warning-bg)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          light: 'var(--color-error-light)',
          bg: 'var(--color-error-bg)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          light: 'var(--color-info-light)',
          bg: 'var(--color-info-bg)',
        },
        // Border colors
        border: {
          DEFAULT: 'var(--color-border)',
          strong: 'var(--color-border-strong)',
          focus: 'var(--color-border-focus)',
        },
      },

      /* ============================================
         TYPOGRAPHY
         ============================================ */
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        display: ['var(--text-display)', { lineHeight: 'var(--leading-none)' }],
        h1: ['var(--text-h1)', { lineHeight: 'var(--leading-tight)' }],
        h2: ['var(--text-h2)', { lineHeight: 'var(--leading-tight)' }],
        h3: ['var(--text-h3)', { lineHeight: 'var(--leading-snug)' }],
        h4: ['var(--text-h4)', { lineHeight: 'var(--leading-snug)' }],
        'body-lg': ['var(--text-body-lg)', { lineHeight: 'var(--leading-relaxed)' }],
        body: ['var(--text-body)', { lineHeight: 'var(--leading-relaxed)' }],
        small: ['var(--text-small)', { lineHeight: 'var(--leading-normal)' }],
        xs: ['var(--text-xs)', { lineHeight: 'var(--leading-normal)' }],
      },
      fontWeight: {
        light: 'var(--font-light)',
        normal: 'var(--font-normal)',
        medium: 'var(--font-medium)',
        semibold: 'var(--font-semibold)',
        bold: 'var(--font-bold)',
        extrabold: 'var(--font-extrabold)',
      },
      lineHeight: {
        none: 'var(--leading-none)',
        tight: 'var(--leading-tight)',
        snug: 'var(--leading-snug)',
        normal: 'var(--leading-normal)',
        relaxed: 'var(--leading-relaxed)',
        loose: 'var(--leading-loose)',
      },
      letterSpacing: {
        tighter: 'var(--tracking-tighter)',
        tight: 'var(--tracking-tight)',
        normal: 'var(--tracking-normal)',
        wide: 'var(--tracking-wide)',
        wider: 'var(--tracking-wider)',
        widest: 'var(--tracking-widest)',
      },

      /* ============================================
         SPACING
         ============================================ */
      spacing: {
        px: 'var(--space-px)',
        0: 'var(--space-0)',
        0.5: 'var(--space-0-5)',
        1: 'var(--space-1)',
        1.5: 'var(--space-1-5)',
        2: 'var(--space-2)',
        2.5: 'var(--space-2-5)',
        3: 'var(--space-3)',
        3.5: 'var(--space-3-5)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)',
        7: 'var(--space-7)',
        8: 'var(--space-8)',
        9: 'var(--space-9)',
        10: 'var(--space-10)',
        11: 'var(--space-11)',
        12: 'var(--space-12)',
        14: 'var(--space-14)',
        16: 'var(--space-16)',
        20: 'var(--space-20)',
        24: 'var(--space-24)',
        28: 'var(--space-28)',
        32: 'var(--space-32)',
        36: 'var(--space-36)',
        40: 'var(--space-40)',
        44: 'var(--space-44)',
        48: 'var(--space-48)',
        // Section spacing
        'section-sm': 'var(--section-sm)',
        'section-md': 'var(--section-md)',
        'section-lg': 'var(--section-lg)',
        'section-xl': 'var(--section-xl)',
        // Header height
        header: 'var(--header-height)',
        'header-scrolled': 'var(--header-height-scrolled)',
      },

      /* ============================================
         CONTAINER
         ============================================ */
      maxWidth: {
        'container-sm': 'var(--container-sm)',
        'container-md': 'var(--container-md)',
        'container-lg': 'var(--container-lg)',
        'container-xl': 'var(--container-xl)',
        'container-2xl': 'var(--container-2xl)',
        'container-max': 'var(--container-max)',
      },

      /* ============================================
         BORDER RADIUS
         ============================================ */
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        full: 'var(--radius-full)',
      },

      /* ============================================
         SHADOWS
         ============================================ */
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        inner: 'var(--shadow-inner)',
        accent: 'var(--shadow-accent)',
        'accent-lg': 'var(--shadow-accent-lg)',
        none: 'none',
      },

      /* ============================================
         TRANSITIONS
         ============================================ */
      transitionDuration: {
        instant: 'var(--duration-instant)',
        fast: 'var(--duration-fast)',
        DEFAULT: 'var(--duration-normal)',
        normal: 'var(--duration-normal)',
        moderate: 'var(--duration-moderate)',
        slow: 'var(--duration-slow)',
        slower: 'var(--duration-slower)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--ease-out)',
        linear: 'var(--ease-linear)',
        in: 'var(--ease-in)',
        out: 'var(--ease-out)',
        'in-out': 'var(--ease-in-out)',
        bounce: 'var(--ease-bounce)',
        elastic: 'var(--ease-elastic)',
        smooth: 'var(--ease-smooth)',
        spring: 'var(--ease-spring)',
      },

      /* ============================================
         Z-INDEX
         ============================================ */
      zIndex: {
        below: 'var(--z-below)',
        base: 'var(--z-base)',
        raised: 'var(--z-raised)',
        dropdown: 'var(--z-dropdown)',
        sticky: 'var(--z-sticky)',
        overlay: 'var(--z-overlay)',
        modal: 'var(--z-modal)',
        popover: 'var(--z-popover)',
        tooltip: 'var(--z-tooltip)',
        toast: 'var(--z-toast)',
        max: 'var(--z-max)',
      },

      /* ============================================
         ANIMATIONS
         ============================================ */
      animation: {
        'fade-in': 'fade-in var(--duration-normal) var(--ease-out) forwards',
        'fade-up': 'fade-up var(--duration-normal) var(--ease-out) forwards',
        'fade-down': 'fade-down var(--duration-normal) var(--ease-out) forwards',
        'fade-left': 'fade-left var(--duration-normal) var(--ease-out) forwards',
        'fade-right': 'fade-right var(--duration-normal) var(--ease-out) forwards',
        'scale-in': 'scale-in var(--duration-normal) var(--ease-out) forwards',
        'scale-up': 'scale-up var(--duration-normal) var(--ease-spring) forwards',
        float: 'float 3s ease-in-out infinite',
        'float-subtle': 'float-subtle 3s ease-in-out infinite',
        spin: 'spin 1s linear infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        bounce: 'bounce 1s infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        shimmer: 'shimmer 1.5s infinite',
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'scroll-indicator': 'scroll-indicator 2s ease-in-out infinite',
        shake: 'shake 0.5s ease-in-out',
      },

      /* ============================================
         ASPECT RATIOS
         ============================================ */
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        'video-vertical': '9 / 16',
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
      },

      /* ============================================
         BACKDROP BLUR
         ============================================ */
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '12px',
        md: '12px',
        lg: '24px',
        xl: '40px',
      },
    },
  },
  plugins: [
    // Custom plugin for fluid typography
    function ({ addUtilities }) {
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.text-pretty': {
          'text-wrap': 'pretty',
        },
      });
    },
    // Custom plugin for touch targets
    function ({ addUtilities }) {
      addUtilities({
        '.touch-target': {
          'min-width': 'var(--touch-target-min)',
          'min-height': 'var(--touch-target-min)',
        },
      });
    },
  ],
};
