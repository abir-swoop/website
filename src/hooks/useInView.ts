import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, inView] — attach ref to the element you want to observe.
 * inView flips to true once the element enters the viewport (stays true).
 */
export function useInView(threshold = 0.15): [React.RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
