// src/components/work/WorkFilter.tsx
// Created: Filter tabs for portfolio grid

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Category {
  value: string;
  label: string;
}

interface WorkFilterProps {
  categories: readonly Category[];
  initialCategory?: string;
  onFilterChange: (category: string) => void;
}

export default function WorkFilter({
  categories,
  initialCategory = 'all',
  onFilterChange,
}: WorkFilterProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    onFilterChange(category);
    
    // Emit custom event for Astro page to listen
    window.dispatchEvent(new CustomEvent('filterChange', { detail: { category } }));
    
    // Update URL without page reload
    const url = new URL(window.location.href);
    if (category === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', category);
    }
    window.history.pushState({}, '', url.toString());
  };

  // Read initial category from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');
    if (categoryParam && categories.some(c => c.value === categoryParam)) {
      setActiveCategory(categoryParam);
      onFilterChange(categoryParam);
    }
  }, []);

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => handleCategoryChange(category.value)}
          className={`
            relative px-4 py-2 text-sm font-medium rounded-full
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)] focus:ring-offset-2
            ${activeCategory === category.value
              ? 'text-white'
              : 'text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-bg-secondary)]'
            }
          `}
          aria-pressed={activeCategory === category.value}
        >
          {activeCategory === category.value && (
            <motion.span
              layoutId="activeFilter"
              className="absolute inset-0 bg-[color:var(--color-accent)] rounded-full"
              transition={{ type: 'spring' as const, stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{category.label}</span>
        </button>
      ))}
    </div>
  );
}