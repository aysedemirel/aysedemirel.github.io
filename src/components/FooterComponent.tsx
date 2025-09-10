import React from 'react';
import { Layout, Typography, Row, Col, Space } from 'antd';
import {
  AndroidOutlined,
  CoffeeOutlined,
  GithubOutlined,
  HeartFilled,
  InstagramOutlined,
  LinkedinOutlined,
  LinkOutlined,
  MailOutlined,
  MediumOutlined,
  MessageOutlined,
  TwitterOutlined
} from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Text, Title, Link } = Typography;

const FooterComponent: React.FC = () => {
  return (
    <AntFooter id="footer" className="footer">
      <Row gutter={[32, 16]} justify="space-between" align="top">
        <Col xs={24} sm={24} md={12} lg={8}>
          <Title level={2} className="name">
            <CoffeeOutlined className="name-icon" />
            Ayşe's Portfolio
          </Title>
          <Text className="name-desc content">Thank you for visiting </Text>
          <br />
          <Text className="name-desc content">Connect with me over socials</Text>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8}>
          <Title level={3} className="title">
            <LinkOutlined className="title-icon" />
            Quick Links
          </Title>
          <Space direction="vertical" className="content">
            <Link className="link" href="/#home">
              Home
            </Link>
            <Link className="link" href="/#about">
              About
            </Link>
            <Link className="link" href="/#skills">
              Skills
            </Link>
            <Link className="link" href="/#experience">
              Experience
            </Link>
            <Link className="link" href="/#education">
              Education
            </Link>
            <Link className="link" href="/#projects">
              Projects
            </Link>
            <Link className="link" href="/#contact">
              Contact
            </Link>
            <Link className="link" href="/blog">
              Blog
            </Link>
          </Space>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8}>
          <Title level={3} className="title">
            <MessageOutlined className="title-icon" />
            Contact Info
          </Title>
          <Space direction="vertical">
            <Text className="contact-txt">
              <MailOutlined /> aysedemireldeniz@gmail.com
            </Text>

            <Space size="middle" wrap>
              <a
                href="https://github.com/aysedemirel"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon">
                <GithubOutlined />
              </a>
              <a
                href="https://www.linkedin.com/in/ayse-demirel/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon">
                <LinkedinOutlined />
              </a>
              <a
                href="https://x.com/aysdemireldeniz"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon">
                <TwitterOutlined />
              </a>
              <a
                href="https://www.instagram.com/aysedemireldeniz"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon">
                <InstagramOutlined />
              </a>
              <a
                href="https://aysedemirel.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon">
                <MediumOutlined />
              </a>
              <a
                href="https://play.google.com/store/apps/developer?id=AllroundMate"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon">
                <AndroidOutlined />
              </a>
            </Space>
          </Space>
        </Col>
      </Row>

      <div className="footer-bottom">
        <Text className="copyright-txt">© 2021 - ∞ Designed & Coded with</Text>
        <HeartFilled className="copyright-icon" />
        <Text className="copyright-txt">by </Text>
        <Text className="copyright-name-txt">Ayşe Demirel Deniz</Text>
      </div>
    </AntFooter>
  );
};

export default FooterComponent;
