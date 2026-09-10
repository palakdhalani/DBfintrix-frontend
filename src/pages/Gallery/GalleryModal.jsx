import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';

const GalleryModal = ({
  isOpen,
  currentImage,
  currentIndex,
  totalCount,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentImage) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div 
        className="absolute top-4 left-4 right-4 flex items-center justify-between z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs sm:text-sm font-medium border border-white/10">
            {currentIndex + 1} / {totalCount}
          </span>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#0f9d27]/80 text-white text-xs font-semibold uppercase tracking-wider">
            {currentImage.category}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-white transition-all border border-white/10 shadow-lg focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons (Desktop) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-6 md:left-10 z-20 p-3 rounded-full bg-white/10 hover:bg-[#0f9d27] text-white transition-all duration-300 backdrop-blur-sm border border-white/10 shadow-xl focus:outline-none hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-6 md:right-10 z-20 p-3 rounded-full bg-white/10 hover:bg-[#0f9d27] text-white transition-all duration-300 backdrop-blur-sm border border-white/10 shadow-xl focus:outline-none hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div 
        className="relative max-w-5xl w-full max-h-[88vh] flex flex-col items-center justify-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0a1d42]/60 border border-white/10 max-h-[72vh] flex items-center justify-center">
          <img
            src={currentImage.image}
            alt={currentImage.title}
            className="max-h-[72vh] w-auto max-w-full object-contain select-none"
          />
        </div>

        {/* Caption Bar */}
        <div className="w-full mt-4 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/15 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 shadow-xl">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
              {currentImage.title}
            </h3>
            {currentImage.description && (
              <p className="text-gray-300 text-xs sm:text-sm mt-0.5 line-clamp-2">
                {currentImage.description}
              </p>
            )}
          </div>
          
          <div className="flex items-center gap-3 text-xs text-gray-300 flex-shrink-0">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#0f9d27]" />
              {currentImage.date}
            </span>
            <span className="sm:hidden flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-[#0f9d27]" />
              {currentImage.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
