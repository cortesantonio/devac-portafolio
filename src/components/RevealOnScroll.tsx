import React, { useRef, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import '../styles/custom.css';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${isVisible ? 'reveal-visible' : ''} ${className || ''}`.trim()}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll; 