import { Layout } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ContactSection from '../components/sections/ContactSection';
import FooterComponent from '../components/FooterComponent';
import useScrollToSection from '../hooks/useScrollToSection';
import EducationSection from '../components/sections/EducationSection';

const { Content } = Layout;

const Home = () => {
  const { activeSection, scrollToSection } = useScrollToSection();

  return (
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

      <FooterComponent />
    </Layout>
  );
};

export default Home;
