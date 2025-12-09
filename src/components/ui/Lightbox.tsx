// src/components/ui/Lightbox.tsx
// Created: Image lightbox with keyboard navigation and swipe gestures

import { useState, useEffect, useCallback, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from 'lucide-react';

interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

interface LightboxProps {
  images: LightboxImage[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
  showThumbnails?: boolean;
  showCaption?: boolean;
  enableZoom?: boolean;
  enableDownload?: boolean;
}

export default function Lightbox({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
  showThumbnails = true,
  showCaption = true,
  enableZoom = true,
  enableDownload = false,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const currentImage = images[currentIndex];
  const hasMultiple = images.length > 1;

  // Reset index when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsZoomed(false);
    }
  }, [isOpen, initialIndex]);

  // Lock body scroll
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

  // Navigation
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setIsZoomed(false);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    setIsZoomed(false);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (hasMultiple) goToPrevious();
          break;
        case 'ArrowRight':
          if (hasMultiple) goToNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, hasMultiple, goToPrevious, goToNext, onClose]);

  // Touch gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart || !hasMultiple) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    setTouchStart(null);
  };

  // Download image
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentImage.src;
    link.download = currentImage.alt || 'image';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[var(--z-modal)] flex flex-col bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <div className="text-white/70 text-sm">
              {hasMultiple && `${currentIndex + 1} / ${images.length}`}
            </div>
            
            <div className="flex items-center gap-2">
              {enableZoom && (
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2 text-white/70 hover:text-white transition-colors"
                  aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
                >
                  {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
                </button>
              )}
              
              {enableDownload && (
                <button
                  onClick={handleDownload}
                  className="p-2 text-white/70 hover:text-white transition-colors"
                  aria-label="Download image"
                >
                  <Download size={20} />
                </button>
              )}
              
              <button
                onClick={onClose}
                className="p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Main image area */}
          <div
            className="flex-1 relative flex items-center justify-center overflow-hidden px-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Previous button */}
            {hasMultiple && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-full max-h-full"
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className={`
                    max-h-[70vh] w-auto object-contain
                    transition-transform duration-300
                    ${isZoomed ? 'cursor-zoom-out scale-150' : 'cursor-zoom-in'}
                  `}
                  onClick={() => enableZoom && setIsZoomed(!isZoomed)}
                />
              </motion.div>
            </AnimatePresence>

            {/* Next button */}
            {hasMultiple && (
              <button
                onClick={goToNext}
                className="absolute right-4 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          {/* Caption */}
          {showCaption && currentImage.caption && (
            <div className="text-center py-3 px-4">
              <p className="text-white/80 text-sm">{currentImage.caption}</p>
            </div>
          )}

          {/* Thumbnails */}
          {showThumbnails && hasMultiple && (
            <div className="flex justify-center gap-2 p-4 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`
                    flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all
                    ${index === currentIndex 
                      ? 'border-white opacity-100' 
                      : 'border-transparent opacity-50 hover:opacity-75'
                    }
                  `}
                  aria-label={`View image ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                >
                  <img
                    src={image.src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Trigger component for opening lightbox
interface LightboxTriggerProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export function LightboxTrigger({ children, onClick, className = '' }: LightboxTriggerProps) {
  return (
    <button
      onClick={onClick}
      className={`cursor-zoom-in ${className}`}
      aria-haspopup="dialog"
    >
      {children}
    </button>
  );
}

export type { LightboxImage, LightboxProps };