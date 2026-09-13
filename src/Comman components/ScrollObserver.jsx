import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollObserver:
 * High-performance scroll-triggered animation controller.
 * Automatically animates sections, section headers, subtitles,
 * paragraphs, and cards as the user scrolls down any page.
 */
const ScrollObserver = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Respect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal, .reveal-text, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
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
      rootMargin: '0px 0px -50px 0px',
    });

    const initAnimations = () => {
      // 1. Observe any element explicitly marked with reveal classes
      const explicitElements = document.querySelectorAll(
        '.reveal, .reveal-text, .reveal-left, .reveal-right, .reveal-scale'
      );
      explicitElements.forEach((el) => {
        // If already in viewport on initial load, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });

      // 2. Automatically select all Section Headings, Subtitles, Paragraphs & Cards
      // Excluding navbar, footer, modals, and admin sidebar
      const allSections = document.querySelectorAll('section, main > div, .container > div');
      
      allSections.forEach((sec) => {
        // Skip nav and footer and admin
        if (sec.closest('nav') || sec.closest('footer') || sec.closest('.admin-sidebar')) {
          return;
        }

        // Target section headers (h1, h2, h3)
        const headings = sec.querySelectorAll('h1, h2, h3:not(nav h3):not(footer h3)');
        headings.forEach((heading) => {
          if (!heading.closest('nav') && !heading.closest('footer') && !heading.classList.contains('is-revealed')) {
            if (!heading.classList.contains('reveal') && !heading.classList.contains('reveal-text') && !heading.classList.contains('animate-fade-in-up')) {
              heading.classList.add('reveal-text');
            }
            const rect = heading.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              heading.classList.add('is-revealed');
            } else {
              observer.observe(heading);
            }
          }
        });

        // Target section lead paragraphs and subtitles
        const paragraphs = sec.querySelectorAll('p.text-lg, p.text-gray-500, p.text-gray-600, p.leading-relaxed');
        paragraphs.forEach((p, pIdx) => {
          if (!p.closest('nav') && !p.closest('footer') && !p.classList.contains('is-revealed')) {
            if (!p.classList.contains('reveal') && !p.classList.contains('reveal-text') && !p.classList.contains('animate-fade-in-up')) {
              p.classList.add('reveal-text');
              p.classList.add(pIdx % 2 === 0 ? 'delay-100' : 'delay-150');
            }
            const rect = p.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              p.classList.add('is-revealed');
            } else {
              observer.observe(p);
            }
          }
        });

        // Target grid cards (cards in 2, 3, or 4 columns)
        const cards = sec.querySelectorAll('.grid > div');
        cards.forEach((card, cIdx) => {
          if (!card.closest('nav') && !card.closest('footer') && !card.classList.contains('is-revealed')) {
            if (!card.classList.contains('reveal') && !card.classList.contains('reveal-left') && !card.classList.contains('reveal-right')) {
              card.classList.add('reveal');
              const stagger = (cIdx % 4) + 1;
              card.classList.add(`delay-${stagger * 100}`);
            }
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              card.classList.add('is-revealed');
            } else {
              observer.observe(card);
            }
          }
        });
      });
    };

    // Small delay to let React finish rendering components after navigation
    const timer = setTimeout(initAnimations, 80);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

export default ScrollObserver;
