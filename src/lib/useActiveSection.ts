"use client";

import { useEffect, useRef, useState } from "react";

export const useActiveSection = (
  sectionIds: string[],
  rootMargin = "-20% 0px -60% 0px"
) => {
  const [activeSection, setActiveSection] = useState<string>(
    `#${sectionIds[0] || "home"}`
  );
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    // Disconectar observer existente
    if (observer.current) {
      observer.current.disconnect();
    }

    // Configurar o Intersection Observer
    const options = {
      rootMargin,
      threshold: 0.2,
    };

    observer.current = new IntersectionObserver((entries) => {
      let newActiveSection = activeSection;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          newActiveSection = `#${entry.target.id}`;
        }
      });

      // Atualizar apenas se mudou
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    }, options);

    // Observar todas as seções
    const timer = setTimeout(() => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.current?.observe(element);
        }
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [sectionIds, rootMargin, activeSection]);

  return activeSection;
};
