import { Layout } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ContactSection from '../components/sections/ContactSection';
import FooterComponent from '../components/FooterComponent';
import EducationSection from '../components/sections/EducationSection';
import BackToTop from '../components/BackToTop';
import SocialSidebar from '../components/SocialSidebar';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const { Content } = Layout;

interface Props {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Home = ({ activeSection, scrollToSection }: Props) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <SEO
        title="Ayşe Demirel Deniz - Software engineer"
        description="Software Engineer based in Ankara, Turkey. Specializing in Spring Boot, Java, React, and React Native. Building mobile, web, and desktop applications that solve real problems."
        keywords="Ayşe Demirel, Ayşe Demirel Deniz, Full Stack Developer, React Developer, React Native, Spring Boot, Java, Software Engineer, Ankara, Turkey"
        url="https://aysedemirel.github.io/"
        image="https://aysedemirel.github.io/og-image.png"
      />
      <StructuredData />
      <Layout style={{ background: 'linear-gradient(135deg, #ffffff, #fff8f3)' }}>
        <HeaderComponent activeSection={activeSection} scrollToSection={scrollToSection} />
        <Content>
          <HeroSection scrollToSection={scrollToSection} />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
        </Content>

        <FooterComponent scrollToSection={scrollToSection} />

        <BackToTop showProgress={false} scrollDuration={100} />
        <SocialSidebar />
      </Layout>
    </>
  );
};

export default Home;
