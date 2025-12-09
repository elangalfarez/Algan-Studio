// src/components/ui/Switch.tsx
// Created: Animated toggle switch with label support

import { useState, useId } from 'react';
import { motion } from 'framer-motion';

interface SwitchProps {
  name?: string;
  label?: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onChange?: (checked: boolean) => void;
  className?: string;
}

export default function Switch({
  name,
  label,
  description,
  checked: controlledChecked,
  defaultChecked = false,
  disabled = false,
  size = 'md',
  onChange,
  className = '',
}: SwitchProps) {
  const id = useId();
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  
  // Support both controlled and uncontrolled modes
  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    
    const newValue = !isChecked;
    
    if (!isControlled) {
      setInternalChecked(newValue);
    }
    
    onChange?.(newValue);
  };

  // Size styles
  const sizeStyles = {
    sm: {
      track: 'w-8 h-5',
      thumb: 'w-3.5 h-3.5',
      translate: 14,
      label: 'text-sm',
    },
    md: {
      track: 'w-11 h-6',
      thumb: 'w-4.5 h-4.5',
      translate: 20,
      label: 'text-base',
    },
    lg: {
      track: 'w-14 h-8',
      thumb: 'w-6 h-6',
      translate: 24,
      label: 'text-lg',
    },
  };

  const sizes = sizeStyles[size];

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <button
        type="button"
        role="switch"
        id={id}
        name={name}
        aria-checked={isChecked}
        aria-describedby={description ? `${id}-description` : undefined}
        disabled={disabled}
        onClick={handleToggle}
        className={`
          relative inline-flex flex-shrink-0 items-center
          ${sizes.track}
          rounded-full
          transition-colors duration-[var(--duration-fast)]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--color-accent)]
          ${isChecked 
            ? 'bg-[color:var(--color-accent)]' 
            : 'bg-[color:var(--color-bg-tertiary)] border border-[color:var(--color-border)]'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <motion.span
          className={`
            ${sizes.thumb}
            bg-white rounded-full shadow-sm
            pointer-events-none
          `}
          initial={false}
          animate={{
            x: isChecked ? sizes.translate : 4,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
        />
        
        {/* Hidden input for form submission */}
        {name && (
          <input
            type="hidden"
            name={name}
            value={isChecked ? 'on' : 'off'}
          />
        )}
      </button>

      {(label || description) && (
        <div className="flex-1 min-w-0">
          {label && (
            <label
              htmlFor={id}
              className={`
                block font-medium text-[color:var(--color-text-primary)]
                ${sizes.label}
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
              onClick={handleToggle}
            >
              {label}
            </label>
          )}
          
          {description && (
            <p
              id={`${id}-description`}
              className="text-sm text-[color:var(--color-text-muted)] mt-0.5"
            >
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export type { SwitchProps };