import { Button, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { MailOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import useScrollToSection from '../hooks/useScrollToSection';

const { Title, Text } = Typography;

const HeroSection = () => {
  const { scrollToSection } = useScrollToSection();
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Desktop App Development',
    'Mobile App Development'
  ];

  useEffect(() => {
    setIsVisible(true);

    const typeText = () => {
      const currentRole = roles[currentRoleIndex];
      let currentText = '';
      let i = 0;

      const typeInterval = setInterval(() => {
        if (i < currentRole.length) {
          currentText += currentRole[i];
          setTypedText(currentText);
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            const eraseInterval = setInterval(() => {
              if (currentText.length > 0) {
                currentText = currentText.slice(0, -1);
                setTypedText(currentText);
              } else {
                clearInterval(eraseInterval);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
              }
            }, 50);
          }, 2000);
        }
      }, 100);
    };

    typeText();
    const roleChangeInterval = setInterval(typeText, 4000);

    return () => clearInterval(roleChangeInterval);
  }, [currentRoleIndex, roles]);

  return (
    <div
      id="home"
      className="hero-container"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        opacity: isVisible ? 1 : 0
      }}>
      <Title level={1} className="hello-text">
        Hi There,
      </Title>
      <Title level={2} className="name-container">
        I'm <Text className="name-txt">Ayşe Demirel Deniz</Text>
      </Title>

      <div className="into-container">
        I am a <Text className="into-txt">{typedText}</Text>
        <Text className="text-cursor">|</Text>
      </div>

      <Space size="large" wrap className="button-area">
        <Button
          type="primary"
          size="large"
          className="about-me"
          onClick={() => scrollToSection('about')}
          icon={<UserOutlined />}>
          About Me
        </Button>
        <Button
          size="large"
          onClick={() => scrollToSection('contact')}
          className="contact-me"
          icon={<MailOutlined />}>
          Contact Me
        </Button>
      </Space>

      <div className="down-btn-container">
        <Button
          type="text"
          onClick={() => scrollToSection('about')}
          className="down-btn"
          icon={<DownOutlined style={{ fontSize: '24px' }} />}
        />
      </div>
    </div>
  );
};

export default HeroSection;
