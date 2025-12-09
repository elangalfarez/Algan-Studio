// src/components/ui/Accordion.tsx
// Created: Accessible accordion with smooth animations for FAQs and expandable content

import { useState, useRef, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  variant?: 'default' | 'bordered' | 'separated';
  className?: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
  variant: 'default' | 'bordered' | 'separated';
}

function AccordionItem({ item, isOpen, onToggle, variant }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [item.content]);

  const variantStyles = {
    default: {
      wrapper: 'border-b border-[color:var(--color-border)]',
      button: 'py-5',
      content: 'pb-5',
    },
    bordered: {
      wrapper: 'border border-[color:var(--color-border)] rounded-xl mb-3 last:mb-0 overflow-hidden',
      button: 'p-5',
      content: 'px-5 pb-5',
    },
    separated: {
      wrapper: 'bg-[color:var(--color-bg-tertiary)] rounded-xl mb-3 last:mb-0 overflow-hidden',
      button: 'p-5',
      content: 'px-5 pb-5',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={styles.wrapper}>
      <button
        onClick={onToggle}
        className={`
          w-full flex items-center justify-between gap-4 text-left
          ${styles.button}
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-inset
          group
        `}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
        id={`accordion-trigger-${item.id}`}
      >
        <span className="text-base md:text-lg font-semibold text-[color:var(--color-text-primary)] group-hover:text-[color:var(--color-accent)] transition-colors">
          {item.title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="flex-shrink-0 text-[color:var(--color-text-muted)]"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${item.id}`}
            role="region"
            aria-labelledby={`accordion-trigger-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: contentHeight,
              opacity: 1,
              transition: {
                height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.25, delay: 0.05 },
              },
            }}
            exit={{ 
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden"
          >
            <div ref={contentRef} className={styles.content}>
              <div className="text-[color:var(--color-text-tertiary)] leading-relaxed prose prose-sm max-w-none">
                {item.content}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Accordion({
  items,
  allowMultiple = false,
  variant = 'default',
  className = '',
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    const defaultOpen = new Set<string>();
    items.forEach((item) => {
      if (item.defaultOpen) {
        defaultOpen.add(item.id);
      }
    });
    return defaultOpen;
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={className} role="region" aria-label="Accordion">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
          variant={variant}
        />
      ))}
    </div>
  );
}

// Export single item for custom compositions
export { AccordionItem };
export type { AccordionItemData, AccordionProps };