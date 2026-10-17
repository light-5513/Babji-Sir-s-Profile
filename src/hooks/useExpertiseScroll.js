import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';

/**
 * useExpertiseScroll
 * Scroll-native controller for the Expertise presentation.
 *
 * Architecture (replaces the old wheel/touch capture model):
 * 1. No wheel or touch events are ever captured — the page scrolls natively at
 *    all times. The section is a tall wrapper whose height represents every
 *    stage (height = 100svh + (count - 1) * EXPERTISE_STAGE_TRAVEL_SVH). Scroll
 *    progress through the wrapper maps 1:1 onto the active stage index.
 * 2. Free, uninterrupted scrolling: the active stage is simply the nearest
 *    stage offset to the current scroll position. (CSS proximity snap was
 *    removed after live feedback — small wheel strokes were being snapped
 *    back, which felt like the old trap. Scroll now rests exactly where the
 *    user leaves it.)
 * 3. Programmatic jumps (trait pills, stage rail, arrows, keyboard, swipe)
 *    smooth-scroll to the stage's exact offset. While that glide is in flight,
 *    scroll-driven index updates are suppressed, so the panel switches once
 *    instead of once per passed stage. Any real wheel/touch input releases the
 *    suppression immediately.
 */

export const EXPERTISE_STAGE_TRAVEL_SVH = 45;

export default function useExpertiseScroll(sectionRef, stageCount) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const [state, setState] = useState({ index: 0, direction: 1 });
  const indexRef = useRef(0);
  const jumpLockRef = useRef(false);
  const jumpTimerRef = useRef(null);
  const lastKeyRef = useRef(0);

  const applyIndex = (next, direction) => {
    if (next === indexRef.current) return;
    indexRef.current = next;
    setState({ index: next, direction });
  };

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (jumpLockRef.current) return;
    const max = stageCount - 1;
    const clamped = Math.min(1, Math.max(0, progress));
    const next = Math.round(clamped * max);
    applyIndex(next, next >= indexRef.current ? 1 : -1);
  });

  // Sync once on mount, in case the browser restored the scroll position
  // somewhere inside the (very tall) section.
  useEffect(() => {
    const progress = Math.min(1, Math.max(0, scrollYProgress.get()));
    applyIndex(Math.round(progress * (stageCount - 1)), 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Programmatic jump: smooth-scrolls to exactly where the stage maps to.
  const jumpToStage = (target) => {
    const element = sectionRef.current;
    if (!element) return;
    const max = stageCount - 1;
    const next = Math.max(0, Math.min(max, target));
    applyIndex(next, next >= indexRef.current ? 1 : -1);

    const sectionTop = window.scrollY + element.getBoundingClientRect().top;
    const distance = element.offsetHeight - window.innerHeight;
    const top = sectionTop + (next / max) * distance;

    jumpLockRef.current = true;
    clearTimeout(jumpTimerRef.current);
    jumpTimerRef.current = setTimeout(() => {
      jumpLockRef.current = false;
    }, 1500);
    window.scrollTo({ top, behavior: prefersReducedMotion ? 'instant' : 'smooth' });
  };

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return undefined;

    const isInView = () => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.4;
    };

    const releaseJumpLock = () => {
      jumpLockRef.current = false;
      clearTimeout(jumpTimerRef.current);
    };

    const handleKeyDown = (event) => {
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea' || document.activeElement?.isContentEditable) {
        return;
      }

      let direction = 0;
      if (['ArrowDown', 'PageDown'].includes(event.key)) direction = 1;
      else if (['ArrowUp', 'PageUp'].includes(event.key)) direction = -1;
      if (!direction) return;
      if (!isInView()) return;

      event.preventDefault();
      if (Date.now() - lastKeyRef.current < 320) return;
      lastKeyRef.current = Date.now();
      jumpToStage(indexRef.current + direction);
    };

    window.addEventListener('keydown', handleKeyDown);
    // Any genuine user scroll input releases a programmatic jump's suppression.
    window.addEventListener('wheel', releaseJumpLock, { passive: true });
    window.addEventListener('touchmove', releaseJumpLock, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', releaseJumpLock);
      window.removeEventListener('touchmove', releaseJumpLock);
      clearTimeout(jumpTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionRef, stageCount]);

  return { activeIndex: state.index, direction: state.direction, jumpToStage };
}
