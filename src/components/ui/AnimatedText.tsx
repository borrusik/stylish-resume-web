
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number; // delay in ms
  speed?: number; // speed in ms per character
  once?: boolean; // whether to animate only once
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
  speed = 50,
  once = true
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    let currentIndex = 0;

    if (!isAnimating) {
      timeout = setTimeout(() => {
        setIsAnimating(true);
        setDisplayedText('');
        
        interval = setInterval(() => {
          if (currentIndex < text.length) {
            setDisplayedText(prev => prev + text[currentIndex]);
            currentIndex++;
          } else {
            clearInterval(interval);
            setIsAnimating(false);
          }
        }, speed);
      }, delay);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay, speed, isAnimating, once]);

  return <span className={cn('', className)}>{displayedText}</span>;
};

export default AnimatedText;
