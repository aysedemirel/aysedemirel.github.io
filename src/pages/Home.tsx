import { Layout } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import useScrollToSection from '../hooks/useScrollToSection';

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
      </Content>
    </Layout>
  );
};

export default Home;
