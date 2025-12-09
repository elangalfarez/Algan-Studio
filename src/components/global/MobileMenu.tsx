// src/components/global/MobileMenu.tsx
// Created: Mobile navigation menu with slide-in animation (React island)

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  megaMenu?: boolean;
  children?: readonly {
    category: string;
    items: readonly {
      label: string;
      href: string;
      description: string;
      icon: string;
    }[];
  }[];
}

interface MobileMenuProps {
  navigation: readonly NavItem[];
}

export default function MobileMenu({ navigation }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    document.addEventListener('astro:page-load', handleRouteChange);
    return () => document.removeEventListener('astro:page-load', handleRouteChange);
  }, []);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden relative z-10 p-2 -mr-2 text-text-primary hover:text-accent transition-colors touch-target"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-overlay lg:hidden"
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.nav
              id="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-bg-primary z-modal lg:hidden overflow-y-auto"
              aria-label="Mobile navigation"
            >
              {/* Header */}
              <div className="sticky top-0 flex items-center justify-between p-4 border-b border-border bg-bg-primary">
                <span className="text-h4 font-bold text-text-primary">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 text-text-primary hover:text-accent transition-colors touch-target"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="p-4 space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    custom={index}
                    initial="closed"
                    animate="open"
                    variants={itemVariants}
                  >
                    {item.megaMenu && item.children ? (
                      <div>
                        <button
                          onClick={() => toggleExpanded(item.label)}
                          className="w-full flex items-center justify-between p-3 text-body font-medium text-text-primary hover:bg-bg-secondary rounded-lg transition-colors"
                          aria-expanded={expandedItems.includes(item.label)}
                        >
                          {item.label}
                          <ChevronDown
                            size={20}
                            className={`text-text-muted transition-transform ${
                              expandedItems.includes(item.label)
                                ? 'rotate-180'
                                : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {expandedItems.includes(item.label) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-4">
                                {item.children.map((category) => (
                                  <div key={category.category}>
                                    <span className="block px-3 py-1 text-xs font-semibold text-text-muted uppercase tracking-wider">
                                      {category.category}
                                    </span>
                                    <div className="mt-1 space-y-0.5">
                                      {category.items.map((subItem) => (
                                        <a
                                          key={subItem.href}
                                          href={subItem.href}
                                          className="flex items-center gap-2 p-3 text-small text-text-secondary hover:text-text-primary hover:bg-bg-secondary rounded-lg transition-colors"
                                        >
                                          <ChevronRight
                                            size={14}
                                            className="text-accent"
                                          />
                                          {subItem.label}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block p-3 text-body font-medium text-text-primary hover:bg-bg-secondary rounded-lg transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="p-4 mt-4 border-t border-border">
                <a
                  href="/contact"
                  className="block w-full py-3 px-4 bg-brand-primary text-text-inverse font-medium text-center rounded-lg hover:bg-accent transition-colors"
                >
                  Get a Quote
                </a>
                <p className="mt-4 text-center text-small text-text-muted">
                  Or call us:{' '}
                  <a
                    href="tel:+6221123456789"
                    className="text-accent hover:text-accent-hover"
                  >
                    +62 21 1234 5678
                  </a>
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}