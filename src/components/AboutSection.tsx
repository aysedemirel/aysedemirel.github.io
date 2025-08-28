import React from 'react';
import { Typography, Space, Button } from 'antd';
import {
  MailOutlined,
  LinkedinFilled,
  GithubFilled,
  MediumCircleFilled,
  UserOutlined
} from '@ant-design/icons';
import profilePicture from '../assets/img/me.jpeg';

const { Title, Paragraph, Link } = Typography;

const AboutSection: React.FC = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-title">
        <UserOutlined className="title-icon" />
        <Title level={2} className="title-txt">
          About Me
        </Title>
      </div>

      <div className="about-content">
        <div className="about-img-col">
          <img src={profilePicture} alt="me" />
        </div>
        <div className="about-text-col">
          <Paragraph className="about-name">I'm Ayşe</Paragraph>
          <Paragraph className="about-job">Software Engineer</Paragraph>

          <Paragraph className="about-me">
            I’m a Software Engineer based in Ankara, Türkiye. I craft mobile apps with React Native,
            web apps with React & Spring Boot, and desktop apps with Java. I enjoy building
            open-source projects, sharing my knowledge through my blog, and designing scalable
            software systems. My passion is creating impactful applications that solve real
            problems.
          </Paragraph>

          <Space direction="vertical" size="middle" className="about-contact">
            <Space className="about-mail">
              <MailOutlined className="mail-icon" />
              <Link href="mailto:aysedemireldeniz@gmail.com" className="mail-txt">
                aysedemireldeniz@gmail.com
              </Link>
            </Space>
            <div className="btn-area">
              <Button
                type="text"
                icon={<LinkedinFilled />}
                onClick={() => {
                  window.open('https://www.linkedin.com/in/ayse-demirel/', '_blank');
                }}
                className="social-btn"
              />
              <Button
                type="text"
                icon={<GithubFilled />}
                onClick={() => {
                  window.open('https://github.com/aysedemirel', '_blank');
                }}
                className="social-btn"
              />
              <Button
                type="text"
                icon={<MediumCircleFilled />}
                onClick={() => {
                  window.open('https://aysedemirel.medium.com/', '_blank');
                }}
                className="social-btn"
              />
              <Button
                type="text"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    width="1em"
                    height="1em"
                    viewBox="0 0 32 32">
                    <path d="M16 0c1.714 0 13 6.516 13.854 8 0.859 1.484 0.859 14.516 0 16s-12.141 8-13.854 8c-1.714 0-13-6.516-13.859-8-0.854-1.484-0.854-14.516 0-16 0.859-1.484 12.146-8 13.859-8zM19.063 9.068c-0.193 0-0.349 0.151-0.349 0.344v5.167h-5.427v-5.37h0.932c0.188 0 0.339-0.151 0.339-0.344 0-0.125-0.068-0.234-0.161-0.292l-2.099-2.010c-0.063-0.089-0.188-0.146-0.302-0.146-0.109 0-0.214 0.057-0.276 0.141l-2.24 2.016c-0.094 0.063-0.161 0.167-0.161 0.292 0 0.188 0.151 0.344 0.344 0.344h0.938l0.010 13.38c0 0.193 0.146 0.344 0.339 0.344h1.99c0.188 0 0.344-0.151 0.344-0.344v-5.339h5.432v5.536h-0.932c-0.193 0-0.344 0.156-0.344 0.344 0 0.125 0.068 0.234 0.161 0.292l2.104 2.016c0.057 0.083 0.188 0.146 0.302 0.146s0.208-0.063 0.276-0.146l2.24-2.016c0.094-0.057 0.161-0.167 0.161-0.292 0-0.188-0.156-0.344-0.344-0.344h-0.938l-0.010-13.375c0-0.198-0.151-0.349-0.339-0.349h-1.99z" />
                  </svg>
                }
                onClick={() => {
                  window.open('https://www.hackerrank.com/profile/aysedemirel', '_blank');
                }}
                className="social-btn"
              />
              <Button
                type="text"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    width="1em"
                    height="1em"
                    viewBox="0 0 32 32">
                    <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z" />
                  </svg>
                }
                onClick={() => {
                  window.open('https://leetcode.com/u/aysedemirel/', '_blank');
                }}
                className="social-btn"
              />
            </div>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
