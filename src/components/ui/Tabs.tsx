// src/components/ui/Tabs.tsx
// Created: Accessible tabs with animated indicator and keyboard navigation

import { useState, useRef, useEffect, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  variant?: 'default' | 'pills' | 'underline' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onChange?: (tabId: string) => void;
  className?: string;
}

export default function Tabs({
  items,
  defaultTab,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  onChange,
  className = '',
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Update indicator position
  useEffect(() => {
    const activeTabElement = tabRefs.current.get(activeTab);
    if (activeTabElement && tabsRef.current) {
      const tabsRect = tabsRef.current.getBoundingClientRect();
      const tabRect = activeTabElement.getBoundingClientRect();
      setIndicatorStyle({
        left: tabRect.left - tabsRect.left,
        width: tabRect.width,
      });
    }
  }, [activeTab, items]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    const enabledItems = items.filter((item) => !item.disabled);
    const currentEnabledIndex = enabledItems.findIndex(
      (item) => item.id === items[currentIndex].id
    );

    let nextIndex: number | null = null;

    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = currentEnabledIndex > 0 ? currentEnabledIndex - 1 : enabledItems.length - 1;
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = currentEnabledIndex < enabledItems.length - 1 ? currentEnabledIndex + 1 : 0;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = enabledItems.length - 1;
    }

    if (nextIndex !== null) {
      const nextItem = enabledItems[nextIndex];
      handleTabChange(nextItem.id);
      tabRefs.current.get(nextItem.id)?.focus();
    }
  };

  // Size styles
  const sizeStyles = {
    sm: { tab: 'px-3 py-2 text-sm', gap: 'gap-1' },
    md: { tab: 'px-4 py-2.5 text-sm', gap: 'gap-2' },
    lg: { tab: 'px-5 py-3 text-base', gap: 'gap-2' },
  };

  // Variant styles
  const variantStyles = {
    default: {
      list: 'bg-[color:var(--color-bg-secondary)] rounded-xl p-1',
      tab: 'rounded-lg',
      activeTab: 'bg-[color:var(--color-bg-elevated)] shadow-sm',
      indicator: false,
    },
    pills: {
      list: '',
      tab: 'rounded-full',
      activeTab: 'bg-[color:var(--color-brand-primary)] text-[color:var(--color-text-inverse)]',
      indicator: false,
    },
    underline: {
      list: 'border-b border-[color:var(--color-border)]',
      tab: '',
      activeTab: '',
      indicator: true,
    },
    bordered: {
      list: 'border border-[color:var(--color-border)] rounded-xl p-1',
      tab: 'rounded-lg',
      activeTab: 'bg-[color:var(--color-accent-subtle)]',
      indicator: false,
    },
  };

  const styles = variantStyles[variant];
  const sizes = sizeStyles[size];
  const activeContent = items.find((item) => item.id === activeTab)?.content;

  return (
    <div className={className}>
      {/* Tab List */}
      <div
        ref={tabsRef}
        role="tablist"
        aria-label="Tabs"
        className={`
          relative flex ${sizes.gap}
          ${fullWidth ? 'w-full' : 'w-fit'}
          ${styles.list}
        `}
      >
        {items.map((item, index) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              ref={(el) => {
                if (el) tabRefs.current.set(item.id, el);
              }}
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.id}`}
              aria-disabled={item.disabled}
              tabIndex={isActive ? 0 : -1}
              onClick={() => !item.disabled && handleTabChange(item.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              disabled={item.disabled}
              className={`
                relative flex items-center justify-center gap-2
                ${sizes.tab}
                ${fullWidth ? 'flex-1' : ''}
                font-medium whitespace-nowrap
                transition-all duration-[var(--duration-fast)]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2
                ${styles.tab}
                ${
                  isActive
                    ? `${styles.activeTab} text-[color:var(--color-text-primary)]`
                    : 'text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text-primary)]'
                }
                ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
              <span>{item.label}</span>
            </button>
          );
        })}

        {/* Animated Indicator for underline variant */}
        {styles.indicator && (
          <motion.div
            className="absolute bottom-0 h-0.5 bg-[color:var(--color-accent)]"
            layoutId="tab-indicator"
            initial={false}
            animate={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
          />
        )}
      </div>

      {/* Tab Panels */}
      <div className="mt-6">
        {items.map((item) => (
          <div
            key={item.id}
            role="tabpanel"
            id={`tabpanel-${item.id}`}
            aria-labelledby={`tab-${item.id}`}
            hidden={activeTab !== item.id}
            tabIndex={0}
            className="focus:outline-none"
          >
            {activeTab === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.content}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export type { TabItem, TabsProps };