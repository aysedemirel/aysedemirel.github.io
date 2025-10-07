import { GithubOutlined, LinkedinOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button, Space, Typography } from 'antd';
const { Paragraph } = Typography;

const ContactCard = () => {
  return (
    <div className="contact-card">
      <Paragraph className="cta-txt">
        I'm always open to discussing new opportunities, interesting projects, questions, or just a
        friendly chat.
      </Paragraph>

      <Space size="large" wrap align="center" direction="vertical">
        <a href="mailto:aysedemireldeniz@gmail.com" className="email-link">
          <MailOutlined className="social-icon" />
          aysedemireldeniz@gmail.com
        </a>
        <Space size="middle">
          <Button
            shape="circle"
            size="large"
            href="https://github.com/aysedemirel"
            target="_blank"
            className="social-icon"
            icon={<GithubOutlined />}
          />
          <Button
            shape="circle"
            size="large"
            href="https://www.linkedin.com/in/ayse-demirel/"
            target="_blank"
            className="social-icon"
            icon={<LinkedinOutlined />}
          />
          <Button
            shape="circle"
            size="large"
            href="https://x.com/aysdemireldeniz"
            target="_blank"
            className="social-icon"
            icon={<TwitterOutlined />}
          />
        </Space>
      </Space>
    </div>
  );
};

export default ContactCard;
