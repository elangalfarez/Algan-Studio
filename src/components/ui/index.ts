// src/components/ui/index.ts
// Created: Central export for all UI components

// ============================================
// ASTRO COMPONENTS (Static, no JS)
// Import directly from individual files
// ============================================

// Usage: import Avatar from '@/components/ui/Avatar.astro'
// - Avatar.astro
// - Badge.astro
// - Breadcrumb.astro
// - Button.astro
// - Card.astro
// - Checkbox.astro
// - Divider.astro
// - Input.astro
// - Marquee.astro
// - ProcessStep.astro
// - ProgressBar.astro
// - Radio.astro
// - SectionHeader.astro
// - Select.astro
// - ServiceCard.astro
// - Skeleton.astro
// - TestimonialCard.astro
// - Textarea.astro

// ============================================
// REACT COMPONENTS (Interactive)
// Can be exported from this file
// ============================================

export { default as Accordion } from './Accordion.tsx';
export type { AccordionItemData, AccordionProps } from './Accordion.tsx';

export { default as Carousel } from './Carousel.tsx';
export type { CarouselProps } from './Carousel.tsx';

export { default as Lightbox, LightboxTrigger } from './Lightbox.tsx';
export type { LightboxImage, LightboxProps } from './Lightbox.tsx';

export { default as Modal, ModalFooter } from './Modal.tsx';

export { default as StatsCounter, StatsGrid } from './StatsCounter.tsx';
export type { StatsCounterProps, StatsGridProps } from './StatsCounter.tsx';

export { default as Switch } from './Switch.tsx';
export type { SwitchProps } from './Switch.tsx';

export { default as Tabs } from './Tabs.tsx';
export type { TabItem, TabsProps } from './Tabs.tsx';

export { ToastProvider, useToast, useToastActions } from './Toast.tsx';
export type { Toast, ToastType } from './Toast.tsx';

export { default as Tooltip } from './Tooltip.tsx';
export type { TooltipProps } from './Tooltip.tsx';

// ============================================
// COMPONENT INVENTORY
// ============================================

/*
UI Components Summary:

FORMS:
- Input.astro          - Text input with validation
- Textarea.astro       - Multi-line text input
- Select.astro         - Dropdown select
- Checkbox.astro       - Checkbox input
- Radio.astro          - Radio button
- Switch.tsx           - Toggle switch (React)
- Button.astro         - Multi-variant button

LAYOUT:
- Card.astro           - Content card with variants
- Divider.astro        - Visual separator
- SectionHeader.astro  - Section title block
- ProcessStep.astro    - Workflow step

DISPLAY:
- Avatar.astro         - User avatar with fallback
- Badge.astro          - Status/category badge
- Skeleton.astro       - Loading placeholder
- ProgressBar.astro    - Progress indicator
- Marquee.astro        - Infinite scroll content

NAVIGATION:
- Breadcrumb.astro     - Breadcrumb navigation
- Tabs.tsx             - Tabbed content (React)

FEEDBACK:
- Modal.tsx            - Dialog modal (React)
- Toast.tsx            - Toast notifications (React)
- Tooltip.tsx          - Hover tooltip (React)

CONTENT:
- TestimonialCard.astro - Testimonial display
- ServiceCard.astro     - Service card
- Accordion.tsx         - Expandable content (React)
- Carousel.tsx          - Image/content carousel (React)
- Lightbox.tsx          - Image lightbox (React)
- StatsCounter.tsx      - Animated number counter (React)
*/