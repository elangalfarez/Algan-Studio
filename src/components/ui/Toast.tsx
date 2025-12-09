// src/components/ui/Toast.tsx
// Created: Toast notification system with auto-dismiss and animations

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
}

interface ToastContextValue {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

// Convenience methods
export function useToastActions() {
  const { addToast } = useToast();

  return {
    success: (title: string, description?: string) =>
      addToast({ type: 'success', title, description }),
    error: (title: string, description?: string) =>
      addToast({ type: 'error', title, description }),
    warning: (title: string, description?: string) =>
      addToast({ type: 'warning', title, description }),
    info: (title: string, description?: string) =>
      addToast({ type: 'info', title, description }),
  };
}

interface ToastProviderProps {
  children: ReactNode;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  maxToasts?: number;
}

export function ToastProvider({
  children,
  position = 'bottom-right',
  maxToasts = 5,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = `toast-${Math.random().toString(36).slice(2, 11)}`;
    const newToast = { ...toast, id, duration: toast.duration ?? 5000 };

    setToasts((prev) => {
      const updated = [newToast, ...prev];
      return updated.slice(0, maxToasts);
    });

    // Auto-dismiss
    if (newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, newToast.duration);
    }
  }, [maxToasts]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const positionStyles = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  };

  const isTop = position.startsWith('top');

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}

      {/* Toast Container */}
      <div
        className={`fixed z-[var(--z-toast)] ${positionStyles[position]} flex flex-col gap-3 pointer-events-none`}
        aria-live="polite"
        aria-label="Notifications"
      >
        <AnimatePresence initial={false}>
          {(isTop ? toasts : [...toasts].reverse()).map((toast) => (
            <ToastItem
              key={toast.id}
              toast={toast}
              onDismiss={() => removeToast(toast.id)}
              position={position}
            />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

interface ToastItemProps {
  toast: Toast;
  onDismiss: () => void;
  position: string;
}

function ToastItem({ toast, onDismiss, position }: ToastItemProps) {
  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <XCircle className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
  };

  const colorStyles = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-500',
      title: 'text-green-800',
      desc: 'text-green-700',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: 'text-red-500',
      title: 'text-red-800',
      desc: 'text-red-700',
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      icon: 'text-amber-500',
      title: 'text-amber-800',
      desc: 'text-amber-700',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-500',
      title: 'text-blue-800',
      desc: 'text-blue-700',
    },
  };

  const colors = colorStyles[toast.type];
  const isLeft = position.includes('left');
  const isCenter = position.includes('center');

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        x: isCenter ? 0 : isLeft ? -100 : 100,
        y: isCenter ? -20 : 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        x: isCenter ? 0 : isLeft ? -100 : 100,
        scale: 0.95,
        transition: { duration: 0.2 },
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
      className={`
        pointer-events-auto
        w-full max-w-sm
        ${colors.bg} ${colors.border}
        border rounded-xl
        shadow-lg
        overflow-hidden
      `}
      role="alert"
    >
      <div className="p-4 flex items-start gap-3">
        <span className={`flex-shrink-0 ${colors.icon}`}>
          {icons[toast.type]}
        </span>

        <div className="flex-1 min-w-0">
          <p className={`font-semibold ${colors.title}`}>
            {toast.title}
          </p>
          {toast.description && (
            <p className={`mt-1 text-sm ${colors.desc}`}>
              {toast.description}
            </p>
          )}
        </div>

        <button
          onClick={onDismiss}
          className={`
            flex-shrink-0 p-1 -m-1
            ${colors.icon} hover:opacity-70
            rounded-lg
            transition-opacity
            focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          `}
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

export type { Toast, ToastType };