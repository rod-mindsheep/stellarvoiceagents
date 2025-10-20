'use client';
import React, { useRef, useEffect, forwardRef } from 'react';

type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

/**
 * MagneticButton (Full Button Version)
 * Moves the entire button, not just the inner text.
 */
export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, className = '', style = {}, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    // Allow parent ref to point to the button
    useEffect(() => {
      if (!ref) return;
      if (typeof ref === 'function') ref(buttonRef.current);
      else if ('current' in ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = buttonRef.current;
    }, [ref]);

    useEffect(() => {
      const button = buttonRef.current;
      if (!button) return;

      // Configurable motion parameters
      const magnetism = 0.35; // how far the button moves toward the cursor
      const springStrength = 0.22;
      const damping = 0.78;
      const elasticity = 1.25;

      let currentX = 0;
      let currentY = 0;
      let velocityX = 0;
      let velocityY = 0;
      let rafId: number | null = null;

      const setTransform = () => {
        button.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      };

      const animate = () => {
        velocityX *= damping;
        velocityY *= damping;

        const springX = -currentX * springStrength;
        const springY = -currentY * springStrength;
        velocityX += springX;
        velocityY += springY;

        currentX += velocityX;
        currentY += velocityY;

        setTransform();

        const dist = Math.hypot(currentX, currentY);
        if (dist < 0.02 && Math.abs(velocityX) < 0.02 && Math.abs(velocityY) < 0.02) {
          currentX = 0;
          currentY = 0;
          velocityX = 0;
          velocityY = 0;
          setTransform();
          if (rafId) cancelAnimationFrame(rafId);
          rafId = null;
          return;
        }
        rafId = requestAnimationFrame(animate);
      };

      const onPointerMove = (e: PointerEvent) => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        const rect = button.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        currentX = offsetX * magnetism;
        currentY = offsetY * magnetism;

        velocityX = 0;
        velocityY = 0;

        setTransform();
      };

      const onPointerLeave = (e: PointerEvent) => {
        const rect = button.getBoundingClientRect();
        const exitX = e.clientX - rect.left - rect.width / 2;
        const exitY = e.clientY - rect.top - rect.height / 2;

        velocityX = -exitX * magnetism * elasticity;
        velocityY = -exitY * magnetism * elasticity;

        if (!rafId) rafId = requestAnimationFrame(animate);
      };

      button.addEventListener('pointermove', onPointerMove);
      button.addEventListener('pointerleave', onPointerLeave);
      button.addEventListener('pointercancel', onPointerLeave);

      return () => {
        button.removeEventListener('pointermove', onPointerMove);
        button.removeEventListener('pointerleave', onPointerLeave);
        button.removeEventListener('pointercancel', onPointerLeave);
        if (rafId) cancelAnimationFrame(rafId);
      };
    }, []);

    return (
      <button
        ref={buttonRef}
        {...props}
        className={`relative inline-flex items-center justify-center transition-transform duration-100 ${className}`}
        style={{ willChange: 'transform', ...style }}
      >
        {children}
      </button>
    );
  }
);

MagneticButton.displayName = 'MagneticButton';
