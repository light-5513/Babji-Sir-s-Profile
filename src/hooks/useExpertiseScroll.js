import { useEffect, useRef } from 'react';

/**
 * useExpertiseScroll
 * Silky-smooth wheel and touch gesture controller for the Expertise presentation.
 * 
 * Key Architecture Highlights:
 * 1. Zero rAF scroll-locking loops: Eliminates page shaking/jitter completely.
 * 2. Natural boundary passthrough: Smoothly hands scroll control back to the browser
 *    when reaching the first (0) or last (count - 1) slide.
 * 3. Directional intent: Passes +1 (forward) or -1 (backward) to setIndex for fluid animations.
 * 4. Gesture cooldown: Absorbs trackpad inertia tails so one swipe = one clean slide change.
 */
export default function useExpertiseScroll(containerRef, indexRef, setIndex, count) {
  const isCooldownRef = useRef(false);
  const cooldownTimerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // Determine if the expertise section is actively in view
    const isInView = () => {
      const rect = element.getBoundingClientRect();
      const topThreshold = window.innerHeight * 0.45;
      const bottomThreshold = window.innerHeight * 0.55;
      return rect.top <= topThreshold && rect.bottom >= bottomThreshold;
    };

    const triggerStep = (direction) => {
      const current = indexRef.current;
      const next = current + direction;

      if (next < 0 || next >= count) {
        return false; // Boundary reached, do not prevent default scroll
      }

      indexRef.current = next;
      setIndex(next, direction);

      isCooldownRef.current = true;
      clearTimeout(cooldownTimerRef.current);
      cooldownTimerRef.current = setTimeout(() => {
        isCooldownRef.current = false;
      }, 380);

      return true; // Stepped successfully
    };

    // --- MOUSE WHEEL & TRACKPAD ---
    const handleWheel = (event) => {
      if (event.ctrlKey) return;
      if (!isInView()) return;

      const deltaY = event.deltaY;
      const deltaX = event.deltaX;

      // Ignore horizontal or tiny micro-movements
      if (Math.abs(deltaX) > Math.abs(deltaY) || Math.abs(deltaY) < 10) {
        return;
      }

      const direction = deltaY > 0 ? 1 : -1;
      const current = indexRef.current;

      // If at boundaries and moving outward, allow natural browser page scroll
      if ((direction > 0 && current >= count - 1) || (direction < 0 && current <= 0)) {
        return;
      }

      // Inside presentation: prevent window scroll jitter and step slide
      event.preventDefault();

      if (isCooldownRef.current) {
        return; // Absorb inertial wheel momentum
      }

      triggerStep(direction);
    };

    // --- TOUCH GESTURES (MOBILE / TABLET) ---
    let touchStartY = null;
    let touchStartX = null;
    let touchHandled = false;

    const handleTouchStart = (event) => {
      if (event.touches.length !== 1) return;
      touchStartY = event.touches[0].clientY;
      touchStartX = event.touches[0].clientX;
      touchHandled = false;
    };

    const handleTouchMove = (event) => {
      if (touchStartY === null || event.touches.length !== 1) return;
      if (!isInView()) return;

      const currentY = event.touches[0].clientY;
      const currentX = event.touches[0].clientX;
      const deltaY = touchStartY - currentY;
      const deltaX = touchStartX - currentX;

      // Check for predominantly vertical swipe
      if (Math.abs(deltaY) < 30 || Math.abs(deltaY) < Math.abs(deltaX) * 1.2) {
        return;
      }

      const direction = deltaY > 0 ? 1 : -1; // swipe up = next slide (1), swipe down = prev slide (-1)
      const current = indexRef.current;

      // At boundaries, release touch to allow normal page scroll
      if ((direction > 0 && current >= count - 1) || (direction < 0 && current <= 0)) {
        return;
      }

      // Inside presentation: prevent default browser scroll bounce
      if (event.cancelable) {
        event.preventDefault();
      }

      if (touchHandled || isCooldownRef.current) {
        return;
      }

      touchHandled = true;
      triggerStep(direction);
    };

    const handleTouchEnd = () => {
      touchStartY = null;
      touchStartX = null;
      touchHandled = false;
    };

    // --- KEYBOARD ARROWS ---
    const handleKeyDown = (event) => {
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea' || document.activeElement?.isContentEditable) {
        return;
      }

      if (!isInView()) return;

      let direction = 0;
      if (['ArrowDown', 'PageDown'].includes(event.key)) direction = 1;
      else if (['ArrowUp', 'PageUp'].includes(event.key)) direction = -1;

      if (!direction) return;

      const current = indexRef.current;
      if ((direction > 0 && current >= count - 1) || (direction < 0 && current <= 0)) {
        return;
      }

      event.preventDefault();
      if (!isCooldownRef.current) {
        triggerStep(direction);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(cooldownTimerRef.current);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [containerRef, indexRef, setIndex, count]);

  // Programmatic jump (for pill clicks and arrows)
  return (targetIndex) => {
    const clamped = Math.max(0, Math.min(count - 1, targetIndex));
    const direction = clamped >= indexRef.current ? 1 : -1;
    indexRef.current = clamped;
    setIndex(clamped, direction);
  };
}
