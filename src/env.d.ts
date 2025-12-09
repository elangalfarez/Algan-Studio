/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// src/env.d.ts
// Created: Environment and global type declarations

// Extend Window interface for GSAP
declare global {
  interface Window {
    gsap: typeof import('gsap').gsap;
    ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
  }
}

// Image imports
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

export {};