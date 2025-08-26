import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Layout, Menu, Typography } from 'antd';
import { useEffect, useState } from 'react';
import useScrollToSection from '../hooks/useScrollToSection';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const menuItems = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'skills', label: 'Skills' },
  { key: 'education', label: 'Education' },
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'contact', label: 'Contact' },
  { key: 'blog', label: 'Blog' }
];

const MOBILE_WIDTH_THRESHOLD = 1100;

const HeaderComponent = () => {
  const { activeSection, scrollToSection } = useScrollToSection();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_WIDTH_THRESHOLD);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH_THRESHOLD);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderMobile = () => (
    <>
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={() => setDrawerVisible(true)}
        style={{ color: '#000', marginLeft: 'auto' }}
      />
      <Drawer placement="right" onClose={() => setDrawerVisible(false)} open={drawerVisible}>
        <Menu
          selectedKeys={[activeSection]}
          onClick={({ key }) => {
            scrollToSection(key);
            setDrawerVisible(false);
          }}
          className="links"
          mode={'vertical'}
          theme="light"
          items={menuItems}
        />
      </Drawer>
    </>
  );

  const renderDesktop = () => (
    <Menu
      selectedKeys={[activeSection]}
      onClick={({ key }) => scrollToSection(key)}
      className="header-menu"
      mode={'horizontal'}
      theme={'light'}
      items={menuItems}
    />
  );

  return (
    <AntHeader className="layout-header">
      <Title className="header-title" level={3}>
        Ayşe Demirel Deniz
      </Title>
      {isMobile ? renderMobile() : renderDesktop()}
    </AntHeader>
  );
};

export default HeaderComponent;
