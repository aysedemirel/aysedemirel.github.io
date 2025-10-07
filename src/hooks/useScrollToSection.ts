import { useState } from 'react';

const useScrollToSection = () => {
  const [activeSection, setActiveSection] = useState('home');
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
