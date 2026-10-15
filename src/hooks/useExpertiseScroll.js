import { useEffect, useRef } from 'react';

// One controller owns entry, slide transitions, and exit. No body overflow
// toggles: changing the scrollbar or sticky containing block causes layout jumps.
export default function useExpertiseScroll(containerRef, indexRef, setIndex, count) {
  const busyUntil = useRef(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    let mode = 'outside';
    let anchor = 0;
    let lastWheel = -Infinity;
    let wheelUsed = false;
    let wheelEndTimer = null;
    let wheelDirection = 0;
    const WHEEL_SETTLE_MS = 150;
    let touchY = null;
    let touchUsed = false;
    let previousY = window.scrollY;
    let frame = 0;
    let pendingStep = null;
    const header = () => parseFloat(getComputedStyle(element.firstElementChild).top) || 80;
    const entry = () => element.getBoundingClientRect().top + window.scrollY - header();
    const movePage = (top) => window.scrollTo({ top, behavior: 'instant' });
    const editable = (target) => target instanceof Element &&
      Boolean(target.closest('input, textarea, select, [contenteditable="true"]'));

    const capture = (direction) => {
      anchor = entry();
      mode = 'inside';
      // Enter from either side at the appropriate end of the presentation.
      const next = direction > 0 ? 0 : count - 1;
      indexRef.current = next;
      setIndex(next);
      movePage(anchor);
    };

    const reachesPanel = (direction, distance) => {
      if (mode === 'inside') return true;
      if (mode === 'leaving') return false;
      const gap = entry() - window.scrollY;
      if ((direction > 0 && gap >= -2 && gap <= distance) ||
          (direction < 0 && gap <= 2 && -gap <= distance)) {
        capture(direction);
        return true;
      }
      return false;
    };

    const step = (direction, queueDuringTransition = true) => {
      if (performance.now() < busyUntil.current) {
        if (!queueDuringTransition) return;
        // Retain one intentional gesture during the animation rather than
        // making the visitor scroll again. Never queue a run of slides.
        if (pendingStep === null) pendingStep = setTimeout(() => {
          pendingStep = null;
          if (mode === 'inside') step(direction);
        }, busyUntil.current - performance.now() + 1);
        return;
      }
      const next = indexRef.current + direction;
      busyUntil.current = performance.now() + 600;
      if (next < 0 || next >= count) {
        mode = 'leaving';
        // Leave to the actual neighbouring page content, not a hard-coded ID.
        movePage(direction > 0 ? anchor + element.offsetHeight : anchor - innerHeight + header());
        return;
      }
      indexRef.current = next;
      setIndex(next);
    };

    const wheel = (event) => {
      if (event.ctrlKey || !event.deltaY || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const now = performance.now();
      const direction = Math.sign(event.deltaY);
      const distance = Math.abs(event.deltaY) * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1);
      // A trackpad's wheel stream includes the entire inertial tail. Commit
      // once at the end, rather than advancing while momentum is still arriving.
      const fresh = now - lastWheel > WHEEL_SETTLE_MS;
      lastWheel = now;
      if (fresh) {
        wheelUsed = false;
        wheelDirection = direction;
        if (mode === 'leaving') mode = 'outside';
      }
      const wasInside = mode === 'inside';
      if (mode === 'leaving') { event.preventDefault(); return; }
      if (!reachesPanel(direction, distance + 2)) return;
      event.preventDefault();
      // Consume the arrival gesture so the first slide can actually be read.
      if (!wasInside) wheelUsed = true;
      if (!wheelDirection) wheelDirection = direction;
      clearTimeout(wheelEndTimer);
      wheelEndTimer = setTimeout(() => {
        wheelEndTimer = null;
        const shouldStep = !wheelUsed && mode === 'inside';
        const gestureDirection = wheelDirection;
        wheelUsed = true;
        wheelDirection = 0;
        if (shouldStep) step(gestureDirection);
      }, WHEEL_SETTLE_MS);
    };

    const touchStart = (event) => {
      touchY = event.touches.length === 1 ? event.touches[0].clientY : null;
      touchUsed = false;
      if (mode === 'leaving') mode = 'outside';
    };
    const touchMove = (event) => {
      if (touchY === null || event.touches.length !== 1) return;
      const delta = touchY - event.touches[0].clientY;
      if (mode === 'leaving' || (mode === 'inside' && touchUsed)) { event.preventDefault(); return; }
      const wasInside = mode === 'inside';
      if (!reachesPanel(Math.sign(delta), Math.abs(delta) + 2)) return;
      event.preventDefault();
      if (!wasInside) { touchUsed = true; return; }
      if (Math.abs(delta) < 8) return;
      touchUsed = true;
      step(Math.sign(delta));
    };
    const touchEnd = () => { touchY = null; };
    const key = (event) => {
      if (editable(event.target)) return;
      const direction = ['ArrowDown', 'PageDown', ' '].includes(event.key) ? (event.shiftKey ? -1 : 1)
        : ['ArrowUp', 'PageUp'].includes(event.key) ? -1 : 0;
      if (!direction) return;
      if (mode === 'leaving' && !event.repeat) mode = 'outside';
      const wasInside = mode === 'inside';
      if (!reachesPanel(direction, innerHeight)) return;
      event.preventDefault();
      if (wasInside && !event.repeat) step(direction);
    };

    // Catch native touch inertia or a large page scroll crossing the entry
    // between input events. While captured, keep a single stable anchor.
    const scroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        const target = entry();
        if (mode === 'inside') {
          anchor = target;
          if (Math.abs(y - anchor) > 1) movePage(anchor);
        } else if (mode === 'outside') {
          if (previousY < target && y >= target) { capture(1); wheelUsed = true; }
          else if (previousY > target && y <= target) { capture(-1); wheelUsed = true; }
        }
        previousY = window.scrollY;
      });
    };
    window.addEventListener('wheel', wheel, { passive: false });
    window.addEventListener('touchstart', touchStart, { passive: true });
    window.addEventListener('touchmove', touchMove, { passive: false });
    window.addEventListener('touchend', touchEnd);
    window.addEventListener('touchcancel', touchEnd);
    window.addEventListener('keydown', key);
    window.addEventListener('scroll', scroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(pendingStep);
      clearTimeout(wheelEndTimer);
      window.removeEventListener('wheel', wheel);
      window.removeEventListener('touchstart', touchStart);
      window.removeEventListener('touchmove', touchMove);
      window.removeEventListener('touchend', touchEnd);
      window.removeEventListener('touchcancel', touchEnd);
      window.removeEventListener('keydown', key);
      window.removeEventListener('scroll', scroll);
    };
  }, [containerRef, indexRef, setIndex, count]);

  return (index) => {
    indexRef.current = Math.max(0, Math.min(count - 1, index));
    busyUntil.current = performance.now() + 600;
    setIndex(indexRef.current);
  };
}
