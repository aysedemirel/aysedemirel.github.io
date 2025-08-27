import { Layout } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import HeroSection from '../components/HeroSection';
import useScrollToSection from '../hooks/useScrollToSection';

const { Content } = Layout;

const Home = () => {
  const { activeSection, scrollToSection } = useScrollToSection();

  return (
    <Layout style={{ background: 'linear-gradient(135deg, #ffffff, #fff8f3)' }}>
      <HeaderComponent activeSection={activeSection} scrollToSection={scrollToSection} />
      <Content>
        <HeroSection scrollToSection={scrollToSection} />
      </Content>
    </Layout>
  );
};

export default Home;
