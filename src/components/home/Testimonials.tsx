// src/components/home/Testimonials.tsx
// Created: Homepage testimonials carousel with autoplay and smooth transitions

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

interface TestimonialsProps {
  testimonials: readonly Testimonial[];
  autoPlayInterval?: number;
}

export default function Testimonials({
  testimonials,
  autoPlayInterval = 6000,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPaused, goToNext, autoPlayInterval]);

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    const parts = name.split(' ');
    return parts.length >= 2
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : name.slice(0, 2).toUpperCase();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Quote icon */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="w-16 h-16 rounded-full bg-[color:var(--color-accent)] flex items-center justify-center shadow-lg">
          <Quote className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Testimonial card */}
      <div className="relative bg-[color:var(--color-bg-tertiary)] rounded-2xl pt-12 pb-8 px-6 md:px-12 border border-[color:var(--color-border)] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring' as const, stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="text-center"
          >
            {/* Quote text */}
            <blockquote className="text-lg md:text-xl lg:text-2xl text-[color:var(--color-text-secondary)] leading-relaxed mb-8 max-w-3xl mx-auto">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author info */}
            <div className="flex flex-col items-center">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-[color:var(--color-accent-subtle)] flex items-center justify-center mb-3 overflow-hidden">
                {currentTestimonial.image ? (
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-[color:var(--color-accent)] font-semibold text-lg">
                    {getInitials(currentTestimonial.author)}
                  </span>
                )}
              </div>

              {/* Name and role */}
              <cite className="not-italic">
                <div className="font-semibold text-[color:var(--color-text-primary)]">
                  {currentTestimonial.author}
                </div>
                <div className="text-sm text-[color:var(--color-text-muted)]">
                  {currentTestimonial.role} at {currentTestimonial.company}
                </div>
              </cite>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[color:var(--color-bg-secondary)] text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-subtle)] transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[color:var(--color-bg-secondary)] text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-subtle)] transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${currentIndex === index
                ? 'bg-[color:var(--color-accent)] w-6'
                : 'bg-[color:var(--color-border-strong)] hover:bg-[color:var(--color-text-muted)]'
              }
            `}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={currentIndex === index ? 'true' : 'false'}
          />
        ))}
      </div>

      {/* Progress bar */}
      {!isPaused && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[color:var(--color-border)] rounded-b-2xl overflow-hidden">
          <motion.div
            key={currentIndex}
            className="h-full bg-[color:var(--color-accent)]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: autoPlayInterval / 1000, ease: 'linear' }}
          />
        </div>
      )}
    </div>
  );
}