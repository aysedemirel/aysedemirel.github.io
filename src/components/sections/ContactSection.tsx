import React from 'react';
import { Typography } from 'antd';
import { ContactsOutlined } from '@ant-design/icons';
import ContactForm from '../ContactForm';
import ContactCard from '../ContactCard';

const { Title } = Typography;

const ContactSection: React.FC = () => {
  return (
    <div id="contact">
      <div className="contact-title">
        <ContactsOutlined className="title-icon" />
        <Title level={2} className="title-txt">
          Let's Get In Touch
        </Title>
      </div>
      <ContactCard />
      <ContactForm />
    </div>
  );
};

export default ContactSection;
