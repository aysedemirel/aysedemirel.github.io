import { Layout } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import HeroSection from '../components/HeroSection';
const { Content } = Layout;

const Home = () => {
  return (
    <Layout style={{ background: 'linear-gradient(135deg, #ffffff, #fff8f3)' }}>
      <HeaderComponent />
      <Content>
        <HeroSection />
      </Content>
    </Layout>
  );
};

export default Home;
