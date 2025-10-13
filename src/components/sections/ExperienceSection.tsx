import React from 'react';
import { Grid, Timeline, Typography } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import { EXPERIENCE } from '../../constants/experience';
import { motion } from 'framer-motion';

const { useBreakpoint } = Grid;
const { Title } = Typography;

const ExperienceSection: React.FC = () => {
  const screens = useBreakpoint();

  return (
    <div id="experience">
      <div className="experience-container">
        <div className="exp-title">
          <RocketOutlined className="title-icon" />
          <Title level={2} className="title-txt">
            Experience
          </Title>
        </div>
        {!screens.md ? (
          <Timeline
            mode={'left'}
            items={EXPERIENCE.map((item, index) => ({
              children: (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08,
                    ease: 'easeOut'
                  }}
                  viewport={{ once: true, margin: '-50px' }}>
                  {item.label}
                  {item.children}
                </motion.div>
              )
            }))}
          />
        ) : (
          <Timeline
            mode={'left'}
            items={EXPERIENCE.map((item, index) => ({
              label: (
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.06,
                    ease: 'easeOut'
                  }}
                  viewport={{ once: true, margin: '-50px' }}>
                  {item.label}
                </motion.div>
              ),
              children: (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08,
                    ease: 'easeOut'
                  }}
                  viewport={{ once: true, margin: '-50px' }}>
                  {item.children}
                </motion.div>
              )
            }))}
          />
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;
