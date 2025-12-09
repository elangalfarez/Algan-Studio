// src/components/ui/Carousel.tsx
// Created: Accessible carousel with autoplay, swipe gestures, and smooth animations

import { useState, useEffect, useRef, useCallback, type ReactNode } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, type PanInfo } from 'framer-motion';

interface CarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  pauseOnHover?: boolean;
  loop?: boolean;
  slidesToShow?: number;
  gap?: number;
  className?: string;
}

export default function Carousel({
  children,
  autoPlay = false,
  autoPlayInterval = 5000,
  showArrows = true,
  showDots = true,
  pauseOnHover = true,
  loop = true,
  slidesToShow = 1,
  gap = 24,
  className = '',
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = children.length;
  const maxIndex = Math.max(0, totalSlides - slidesToShow);

  // Motion values for drag
  const dragX = useMotionValue(0);
  const dragProgress = useTransform(dragX, [-200, 0, 200], [-1, 0, 1]);

  // Navigate to specific slide
  const goToSlide = useCallback((index: number, dir?: number) => {
    let newIndex = index;
    
    if (loop) {
      if (index < 0) newIndex = maxIndex;
      if (index > maxIndex) newIndex = 0;
    } else {
      newIndex = Math.max(0, Math.min(index, maxIndex));
    }
    
    setDirection(dir ?? (newIndex > currentIndex ? 1 : -1));
    setCurrentIndex(newIndex);
  }, [currentIndex, maxIndex, loop]);

  const goToPrevious = useCallback(() => {
    goToSlide(currentIndex - 1, -1);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1, 1);
  }, [currentIndex, goToSlide]);

  // Handle drag end
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (offset < -threshold || velocity < -500) {
      goToNext();
    } else if (offset > threshold || velocity > 500) {
      goToPrevious();
    }
  };

  // Auto-play
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    autoPlayRef.current = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, isPaused, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  // Calculate visible slides for multi-slide carousel
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % totalSlides;
      slides.push({ index, child: children[index] });
    }
    return slides;
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
    >
      {/* Slides container */}
      <div className="overflow-hidden rounded-2xl">
        {slidesToShow === 1 ? (
          // Single slide mode with animations
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              style={{ x: dragX }}
              className="cursor-grab active:cursor-grabbing"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${currentIndex + 1} of ${totalSlides}`}
            >
              {children[currentIndex]}
            </motion.div>
          </AnimatePresence>
        ) : (
          // Multi-slide mode
          <motion.div
            className="flex"
            style={{ gap: `${gap}px` }}
            animate={{ x: `-${currentIndex * (100 / slidesToShow + gap / slidesToShow)}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            {children.map((child, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0"
                style={{ width: `calc(${100 / slidesToShow}% - ${(gap * (slidesToShow - 1)) / slidesToShow}px)` }}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${totalSlides}`}
              >
                {child}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Navigation arrows */}
      {showArrows && totalSlides > slidesToShow && (
        <>
          <button
            onClick={goToPrevious}
            disabled={!loop && currentIndex === 0}
            className="
              absolute left-2 md:left-4 top-1/2 -translate-y-1/2
              w-10 h-10 md:w-12 md:h-12
              flex items-center justify-center
              bg-[color:var(--color-bg-elevated)]/90 backdrop-blur-sm
              text-[color:var(--color-text-primary)]
              rounded-full shadow-[var(--shadow-lg)]
              transition-all duration-[var(--duration-fast)]
              hover:bg-[color:var(--color-bg-elevated)] hover:scale-110
              disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100
              focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]
              z-10
            "
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={!loop && currentIndex >= maxIndex}
            className="
              absolute right-2 md:right-4 top-1/2 -translate-y-1/2
              w-10 h-10 md:w-12 md:h-12
              flex items-center justify-center
              bg-[color:var(--color-bg-elevated)]/90 backdrop-blur-sm
              text-[color:var(--color-text-primary)]
              rounded-full shadow-[var(--shadow-lg)]
              transition-all duration-[var(--duration-fast)]
              hover:bg-[color:var(--color-bg-elevated)] hover:scale-110
              disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100
              focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]
              z-10
            "
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots navigation */}
      {showDots && totalSlides > slidesToShow && (
        <div
          className="flex items-center justify-center gap-2 mt-4"
          role="tablist"
          aria-label="Slide navigation"
        >
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-2 h-2 rounded-full
                transition-all duration-[var(--duration-fast)]
                focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)] focus:ring-offset-2
                ${currentIndex === index
                  ? 'bg-[color:var(--color-accent)] w-6'
                  : 'bg-[color:var(--color-border-strong)] hover:bg-[color:var(--color-text-muted)]'
                }
              `}
              role="tab"
              aria-selected={currentIndex === index}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress bar for autoplay */}
      {autoPlay && !isPaused && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[color:var(--color-border)]">
          <motion.div
            key={currentIndex}
            className="h-full bg-[color:var(--color-accent)]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: autoPlayInterval / 1000, ease: 'linear' }}
          />
        </div>
      )}

      {/* Screen reader announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        Slide {currentIndex + 1} of {totalSlides}
      </div>
    </div>
  );
}

export type { CarouselProps };