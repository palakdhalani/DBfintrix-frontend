import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollObserver:
 * High-performance global scroll-triggered animation controller.
 * Features:
 * 1. Global top reading/scroll progress bar.
 * 2. Automatic detection & staggered scroll-reveal animations across all pages.
 * 3. Smooth floating back-to-top button.
 * 4. MutationObserver support for dynamic content/tabs.
 */
const ScrollObserver = () => {
  const { pathname } = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 1. Scroll Progress & Back-to-Top monitor
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // 2. IntersectionObserver for Scroll Animations
  useEffect(() => {
    // Respect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal, .reveal-text, .reveal-left, .reveal-right, .reveal-scale, .reveal-card').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    });

    const observedSet = new WeakSet();

    const observeElement = (el, fallbackClass = 'reveal') => {
      if (!el || observedSet.has(el) || el.classList.contains('is-revealed')) return;
      if (el.closest('nav') || el.closest('footer') || el.closest('.admin-sidebar')) return;

      if (
        !el.classList.contains('reveal') &&
        !el.classList.contains('reveal-text') &&
        !el.classList.contains('reveal-left') &&
        !el.classList.contains('reveal-right') &&
        !el.classList.contains('reveal-scale') &&
        !el.classList.contains('reveal-card') &&
        !el.classList.contains('animate-fade-in-up')
      ) {
        el.classList.add(fallbackClass);
      }

      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50 && rect.bottom > 0) {
        el.classList.add('is-revealed');
      } else {
        observer.observe(el);
      }
      observedSet.add(el);
    };

    const initAnimations = () => {
      // 1. Explicitly marked reveal elements
      document.querySelectorAll('.reveal, .reveal-text, .reveal-left, .reveal-right, .reveal-scale, .reveal-card').forEach((el) => {
        observeElement(el);
      });

      // 2. Section Headings (h1, h2, h3)
      document.querySelectorAll('section h1, section h2, section h3, main h1, main h2, main h3').forEach((h) => {
        observeElement(h, 'reveal-text');
      });

      // 3. Section Lead Paragraphs & Subtitles
      document.querySelectorAll('section p.text-base, section p.text-lg, section p.text-gray-500, section p.text-gray-600, section p.leading-relaxed').forEach((p, idx) => {
        if (!p.classList.contains('delay-100') && !p.classList.contains('delay-150')) {
          p.classList.add(idx % 2 === 0 ? 'delay-75' : 'delay-150');
        }
        observeElement(p, 'reveal-text');
      });

      // 4. Section Header Badges
      document.querySelectorAll('section .inline-flex.rounded-full').forEach((badge) => {
        observeElement(badge, 'reveal-scale');
      });

      // 5. Grid Cards (3 cols, 2 cols, 4 cols) with stagger
      document.querySelectorAll('.grid > div, .grid > a, .grid > article').forEach((card, idx) => {
        const stagger = (idx % 6) + 1;
        const delayClass = `delay-${Math.min(stagger * 75, 400)}`;
        if (!card.className.includes('delay-')) {
          card.classList.add(delayClass);
        }
        observeElement(card, 'reveal-card');
      });

      // 6. Accordions & Vertical Lists (e.g. FAQs, Feature items)
      document.querySelectorAll('.space-y-4 > div, .space-y-3 > div').forEach((item, idx) => {
        const stagger = (idx % 4) + 1;
        const delayClass = `delay-${stagger * 75}`;
        if (!item.className.includes('delay-')) {
          item.classList.add(delayClass);
        }
        observeElement(item, 'reveal');
      });

      // 7. Split Columns (Two-column layouts like left image, right text)
      document.querySelectorAll('section .lg\\:w-1\\/2, section .lg\\:w-5\\/12, section .lg\\:w-6\\/12').forEach((col, idx) => {
        const isLeft = idx % 2 === 0;
        observeElement(col, isLeft ? 'reveal-left' : 'reveal-right');
      });

      // 8. Standalone Content Images
      document.querySelectorAll('section img:not(.no-reveal):not(nav img):not(footer img)').forEach((img) => {
        if (img.parentElement && !img.parentElement.closest('.grid')) {
          observeElement(img, 'reveal-scale');
        }
      });
    };

    // Staggered initialization to catch synchronous and lazy-rendered content
    initAnimations();
    const t1 = setTimeout(initAnimations, 100);
    const t2 = setTimeout(initAnimations, 350);
    const t3 = setTimeout(initAnimations, 800);

    // MutationObserver to auto-catch newly loaded or dynamically swapped tabs/cards
    const mutationObserver = new MutationObserver(() => {
      initAnimations();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return (
    <>
      {/* Dynamic Global Top Reading/Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3.5px] bg-gradient-to-r from-brand-green via-emerald-400 to-[#10b981] z-[9999] pointer-events-none transition-all duration-75 ease-out shadow-[0_0_12px_rgba(15,157,39,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Smooth Back-to-Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-7 right-7 z-50 w-11 h-11 rounded-full bg-brand-green text-white shadow-2xl hover:bg-green-700 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer border border-white/30 group animate-fade-in"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <svg 
            className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollObserver;
