import { Button, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { MailOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import useScrollToSection from '../hooks/useScrollToSection';
import profilPicture from '../assets/img/profile_img.png';

const { Title, Text } = Typography;

const HeroSection = () => {
  const { scrollToSection } = useScrollToSection();
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Full Stack Developer', 'Mobile App Developer', 'Desktop App Developer'];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 50 : 120;

    const handleTyping = () => {
      setTypedText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          const updated = currentRole.slice(0, prev.length + 1);
          return updated;
        }
      });

      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      }

      if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRoleIndex]);

  return (
    <div
      id="home"
      className="hero-container"
      style={{
        transform: 'translateY(0)',
        opacity: 1
      }}>
      <div className="hero-content">
        <div className="hero-text-part">
          <Title level={1} className="hello-text">
            Hi There,
          </Title>
          <Title level={2} className="name-container">
            I'm <Text className="name-txt">Ayşe Demirel Deniz</Text>
          </Title>

          <div className="into-container">
            I am a <span className="into-txt">{typedText}</span>
            <span className="text-cursor">|</span>
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
        </div>
        <div className="hero-img-part">
          <img src={profilPicture} alt={'profile picture'} />
        </div>
      </div>

      <div className="down-btn-container">
        <Button
          type="text"
          onClick={() => scrollToSection('about')}
          className="down-btn"
          icon={<DownOutlined style={{ fontSize: '32px' }} />}
        />
      </div>
    </div>
  );
};

export default HeroSection;
