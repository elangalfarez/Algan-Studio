// astro.config.mjs
// Created: Astro configuration with React, Tailwind, sitemap, and optimizations

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { bundledLanguages } from 'shiki';

// https://astro.build/config
export default defineConfig({
  site: 'https://algan.id',
  
  integrations: [
    // React for interactive islands
    react(),
    
    // Tailwind CSS
    tailwind({
      applyBaseStyles: false, // We use our own global.css
    }),
    
    // Sitemap generation
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
    }),
  ],

  // Build output
  output: 'static',
  
  // Prefetch for faster navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    domains: [],
    remotePatterns: [],
  },

  // Vite configuration
  vite: {
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'framer-motion': ['framer-motion'],
            'gsap': ['gsap'],
          },
        },
      },
    },
    css: {
      transformer: 'lightningcss',
    },
    ssr: {
      noExternal: ['@gsap/react'],
    },
  },

  // Experimental features
  experimental: {
    clientPrerender: true,
  },

  // Markdown configuration (for blog)
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
      langs: Object.keys(bundledLanguages),
    },
  },

  // Redirects
  redirects: {
    '/home': '/',
    '/services/ads': '/services/google-ads',
  },
});