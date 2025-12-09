// src/components/global/Newsletter.tsx
// Created: Newsletter signup form with validation and animations

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NewsletterProps {
  variant?: 'default' | 'minimal';
  className?: string;
}

export default function Newsletter({ variant = 'default', className = '' }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call - replace with actual newsletter service
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // TODO: Replace with actual API call
      // await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const inputVariants = {
    focus: { scale: 1.01 },
    blur: { scale: 1 },
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
    loading: { scale: 1 },
  };

  const successVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  if (variant === 'minimal') {
    return (
      <div className={className}>
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              variants={successVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex items-center gap-2 text-[color:var(--color-success)]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium">You&apos;re subscribed!</span>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex gap-2"
            >
              <motion.input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-4 py-2.5 text-sm bg-[color:var(--color-bg-tertiary)] border border-[color:var(--color-border)] rounded-lg text-[color:var(--color-text-primary)] placeholder:text-[color:var(--color-text-muted)] focus:outline-none focus:border-[color:var(--color-accent)] focus:ring-1 focus:ring-[color:var(--color-accent)] transition-all duration-[var(--duration-fast)]"
                variants={inputVariants}
                whileFocus="focus"
                aria-label="Email address"
                aria-invalid={status === 'error'}
                aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
              />
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className="px-5 py-2.5 text-sm font-medium text-[color:var(--color-text-inverse)] bg-[color:var(--color-brand-primary)] rounded-lg hover:bg-[color:var(--color-accent)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-[var(--duration-fast)]"
                variants={buttonVariants}
                initial="idle"
                whileHover={status !== 'loading' ? 'hover' : 'loading'}
                whileTap={status !== 'loading' ? 'tap' : 'loading'}
              >
                {status === 'loading' ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  'Subscribe'
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {status === 'error' && (
            <motion.p
              id="newsletter-error"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="mt-2 text-xs text-[color:var(--color-error)]"
              role="alert"
            >
              {errorMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className={`p-6 bg-[color:var(--color-bg-secondary)] rounded-2xl ${className}`}>
      <h3 className="text-lg font-semibold text-[color:var(--color-text-primary)] mb-2">
        Stay in the loop
      </h3>
      <p className="text-sm text-[color:var(--color-text-tertiary)] mb-4">
        Get digital marketing tips, industry insights, and agency updates delivered to your inbox.
      </p>
      
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            variants={successVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-center py-4 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="w-12 h-12 mb-3 rounded-full bg-[color:var(--color-success-bg)] flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-[color:var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <p className="font-medium text-[color:var(--color-text-primary)]">You&apos;re on the list!</p>
            <p className="text-sm text-[color:var(--color-text-tertiary)] mt-1">
              Check your inbox for a welcome email.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            <div>
              <motion.input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="your@email.com"
                className="w-full px-4 py-3 text-sm bg-[color:var(--color-bg-tertiary)] border border-[color:var(--color-border)] rounded-xl text-[color:var(--color-text-primary)] placeholder:text-[color:var(--color-text-muted)] focus:outline-none focus:border-[color:var(--color-accent)] focus:ring-2 focus:ring-[color:var(--color-accent-subtle)] transition-all duration-[var(--duration-fast)]"
                variants={inputVariants}
                whileFocus="focus"
                aria-label="Email address"
                aria-invalid={status === 'error'}
                aria-describedby={status === 'error' ? 'newsletter-error-default' : undefined}
              />
              <AnimatePresence>
                {status === 'error' && (
                  <motion.p
                    id="newsletter-error-default"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 text-xs text-[color:var(--color-error)]"
                    role="alert"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-5 py-3 text-sm font-semibold text-[color:var(--color-text-inverse)] bg-[color:var(--color-brand-primary)] rounded-xl hover:bg-[color:var(--color-accent)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-[var(--duration-fast)] flex items-center justify-center gap-2"
              variants={buttonVariants}
              initial="idle"
              whileHover={status !== 'loading' ? 'hover' : 'loading'}
              whileTap={status !== 'loading' ? 'tap' : 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
      
      <p className="mt-4 text-xs text-[color:var(--color-text-muted)] text-center">
        No spam, unsubscribe anytime.
      </p>
    </div>
  );
}