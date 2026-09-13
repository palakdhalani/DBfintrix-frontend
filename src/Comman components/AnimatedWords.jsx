import React from 'react';

/**
 * AnimatedWords:
 * Takes text and renders it with a staggered word-by-word reveal effect.
 * Key words or highlighted words get dynamic flowing text gradient animations.
 */
const AnimatedWords = ({
  text = '',
  className = '',
  highlightWords = [],
  highlightClassName = 'animate-text-gradient font-extrabold',
  baseDelay = 0,
  delayStep = 70,
  as: Component = 'span'
}) => {
  if (!text) return null;

  const words = text.split(' ');

  return (
    <Component className={`inline-block ${className}`}>
      {words.map((word, index) => {
        // Clean word of punctuation to check if it should be highlighted
        const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <span
            key={index}
            className={`word-animate ${isHighlighted ? highlightClassName : ''}`}
            style={{
              animationDelay: `${baseDelay + index * delayStep}ms`
            }}
          >
            {word}
            {index < words.length - 1 ? '\u00A0' : ''}
          </span>
        );
      })}
    </Component>
  );
};

export default AnimatedWords;
