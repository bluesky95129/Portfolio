import { useState, useEffect, useRef } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Disconnect previous observer if it exists
    if (observer.current) {
      observer.current.disconnect();
    }

    // Create new intersection observer
    observer.current = new IntersectionObserver(
      (entries) => {
        // Find the first entry that is intersecting
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null, // Use viewport as root
        rootMargin: `-${offset}px 0px -${window.innerHeight - offset - 100}px 0px`,
        threshold: 0, // Trigger as soon as even 1px is visible
      }
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [sectionIds, offset]);

  return activeSection;
}

export default useScrollSpy;