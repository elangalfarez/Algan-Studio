// src/components/ui/StatsCounter.tsx
// Created: Animated number counter with formatting and prefix/suffix support

import { useEffect, useRef, useState } from 'react';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';

interface StatsCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  separator?: string;
  label?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function StatsCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 2,
  decimals = 0,
  separator = ',',
  label,
  description,
  size = 'lg',
  align = 'center',
  className = '',
}: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState('0');

  // Spring animation for smooth counting
  const springValue = useSpring(0, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1000,
  });

  // Transform spring value to formatted string
  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  // Update display value
  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      const formatted = formatNumber(latest, decimals, separator);
      setDisplayValue(formatted);
    });

    return unsubscribe;
  }, [springValue, decimals, separator]);

  // Format number with decimals and separator
  function formatNumber(num: number, decimals: number, separator: string): string {
    const fixed = num.toFixed(decimals);
    const [intPart, decPart] = fixed.split('.');
    const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return decPart ? `${formatted}.${decPart}` : formatted;
  }

  // Size styles
  const sizeStyles = {
    sm: {
      value: 'text-2xl md:text-3xl',
      label: 'text-sm',
      description: 'text-xs',
    },
    md: {
      value: 'text-3xl md:text-4xl',
      label: 'text-base',
      description: 'text-sm',
    },
    lg: {
      value: 'text-4xl md:text-5xl lg:text-6xl',
      label: 'text-lg',
      description: 'text-base',
    },
    xl: {
      value: 'text-5xl md:text-6xl lg:text-7xl',
      label: 'text-xl',
      description: 'text-lg',
    },
  };

  // Alignment styles
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const styles = sizeStyles[size];

  return (
    <div
      ref={ref}
      className={`${alignStyles[align]} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className={`font-bold text-[color:var(--color-text-primary)] tracking-tight ${styles.value}`}>
          <span>{prefix}</span>
          <span>{displayValue}</span>
          <span className="text-[color:var(--color-accent)]">{suffix}</span>
        </div>

        {label && (
          <div className={`font-semibold text-[color:var(--color-text-secondary)] mt-2 ${styles.label}`}>
            {label}
          </div>
        )}

        {description && (
          <div className={`text-[color:var(--color-text-muted)] mt-1 ${styles.description}`}>
            {description}
          </div>
        )}
      </motion.div>
    </div>
  );
}

// Export a grid wrapper for multiple stats
interface StatsGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function StatsGrid({ children, columns = 4, className = '' }: StatsGridProps) {
  const columnStyles = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-8 md:gap-12 ${columnStyles[columns]} ${className}`}>
      {children}
    </div>
  );
}

export type { StatsCounterProps, StatsGridProps };