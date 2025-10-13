import React, { useState, useEffect } from 'react';
import { Button, Tooltip } from 'antd';
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  GithubFilled,
  LinkedinFilled,
  MailFilled
} from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

const SocialSidebar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const socialLinks = [
    {
      icon: <LinkedinFilled />,
      url: 'https://www.linkedin.com/in/ayse-demirel/',
      label: 'LinkedIn',
      color: '#333'
    },
    {
      icon: <GithubFilled />,
      url: 'https://github.com/aysedemirel',
      label: 'GitHub',
      color: '#333'
    },
    {
      icon: <MailFilled />,
      url: 'mailto:aysedemireldeniz@gmail.com',
      label: 'Mail',
      color: '#333'
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`social-sidebar ${isCollapsed ? 'collapsed' : ''}`}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ transform: 'translateY(-50%)' }}>
          <div className="social-sidebar-content">
            <Tooltip title={isCollapsed ? 'Expand' : 'Collapse'} placement="left">
              <Button
                type="text"
                shape="circle"
                size="large"
                icon={isCollapsed ? <DoubleLeftOutlined /> : <DoubleRightOutlined />}
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="social-sidebar-btn toggle-btn"
              />
            </Tooltip>

            <AnimatePresence>
              {!isCollapsed && (
                <>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ x: 50, opacity: 0, height: 0 }}
                      animate={{ x: 0, opacity: 1, height: 'auto' }}
                      exit={{ x: 50, opacity: 0, height: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}>
                      <Tooltip title={social.label} placement="left">
                        <Button
                          type="text"
                          shape="circle"
                          size="large"
                          icon={social.icon}
                          onClick={() => {
                            if (social.url.startsWith('mailto:')) {
                              window.location.href = social.url;
                            } else {
                              window.open(social.url, '_blank');
                            }
                          }}
                          className="social-sidebar-btn"
                          style={{ '--hover-color': social.color } as React.CSSProperties}
                        />
                      </Tooltip>
                    </motion.div>
                  ))}
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialSidebar;
