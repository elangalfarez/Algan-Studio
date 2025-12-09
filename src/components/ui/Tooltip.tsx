// src/components/ui/Tooltip.tsx
// Created: Accessible tooltip with positioning and hover/focus trigger

import { useState, useRef, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export default function Tooltip({
  content,
  children,
  position = 'top',
  delay = 300,
  className = '',
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [adjustedPosition, setAdjustedPosition] = useState(position);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  // Adjust position if tooltip would overflow viewport
  useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let newPosition = position;

      // Check boundaries and adjust
      if (position === 'top' && triggerRect.top - tooltipRect.height < 8) {
        newPosition = 'bottom';
      } else if (position === 'bottom' && triggerRect.bottom + tooltipRect.height > viewportHeight - 8) {
        newPosition = 'top';
      } else if (position === 'left' && triggerRect.left - tooltipRect.width < 8) {
        newPosition = 'right';
      } else if (position === 'right' && triggerRect.right + tooltipRect.width > viewportWidth - 8) {
        newPosition = 'left';
      }

      if (newPosition !== adjustedPosition) {
        setAdjustedPosition(newPosition);
      }
    }
  }, [isVisible, position, adjustedPosition]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const positionStyles = {
    top: {
      container: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      initial: { opacity: 0, y: 8, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      arrow: 'top-full left-1/2 -translate-x-1/2 border-t-[color:var(--color-bg-inverse)]',
    },
    bottom: {
      container: 'top-full left-1/2 -translate-x-1/2 mt-2',
      initial: { opacity: 0, y: -8, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      arrow: 'bottom-full left-1/2 -translate-x-1/2 border-b-[color:var(--color-bg-inverse)]',
    },
    left: {
      container: 'right-full top-1/2 -translate-y-1/2 mr-2',
      initial: { opacity: 0, x: 8, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 },
      arrow: 'left-full top-1/2 -translate-y-1/2 border-l-[color:var(--color-bg-inverse)]',
    },
    right: {
      container: 'left-full top-1/2 -translate-y-1/2 ml-2',
      initial: { opacity: 0, x: -8, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 },
      arrow: 'right-full top-1/2 -translate-y-1/2 border-r-[color:var(--color-bg-inverse)]',
    },
  };

  const styles = positionStyles[adjustedPosition];

  return (
    <div
      ref={triggerRef}
      className={`relative inline-flex ${className}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            role="tooltip"
            initial={styles.initial}
            animate={styles.animate}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`
              absolute z-[var(--z-tooltip)]
              ${styles.container}
              px-3 py-2
              bg-[color:var(--color-bg-inverse)]
              text-[color:var(--color-text-inverse)]
              text-sm
              rounded-lg
              shadow-lg
              whitespace-nowrap
              pointer-events-none
            `}
          >
            {content}
            {/* Arrow */}
            <span
              className={`
                absolute w-0 h-0
                border-4 border-transparent
                ${styles.arrow}
              `}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export type { TooltipProps };