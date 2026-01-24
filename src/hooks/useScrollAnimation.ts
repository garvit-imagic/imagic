import { useEffect, useState, RefObject } from 'react';

export function useScrollAnimation(
  ref: RefObject<HTMLElement>,
  options?: IntersectionObserverInit
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, options]);

  return isInView;
}
