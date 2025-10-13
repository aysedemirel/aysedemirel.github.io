import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToSection = () => {
  const location = useLocation();

  const [activeSection, setActiveSection] = useState(() => {
    if (
      window.location.pathname.includes('/blog') ||
      window.location.pathname.includes('/article')
    ) {
      return 'blog';
    }
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });

  useEffect(() => {
    if (location.pathname.includes('/blog') || location.pathname.includes('/article')) {
      setActiveSection('blog');
    } else if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      setActiveSection(sectionId);
    } else if (location.pathname === '/') {
      setActiveSection('home');
    }
  }, [location]);

  useEffect(() => {
    if (
      location.pathname !== '/' ||
      location.pathname.includes('/blog') ||
      location.pathname.includes('/article')
    ) {
      return;
    }

    const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    activeSection,
    scrollToSection
  };
};

export default useScrollToSection;
