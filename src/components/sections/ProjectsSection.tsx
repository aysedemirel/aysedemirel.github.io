import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import { CodeOutlined } from '@ant-design/icons';
import { projects } from '../../constants/projects';
import ProjectCard from '../ProjectCard';
import { motion } from 'framer-motion';

const { Title } = Typography;

const ProjectsSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(9);

  return (
    <div id="projects">
      <div className="projects-title">
        <CodeOutlined className="title-icon" />
        <Title level={2} className="title-txt">
          Projects
        </Title>
      </div>

      <div className="projects-grid">
        {projects.slice(0, visibleCount).map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: idx * 0.02,
              ease: 'easeOut'
            }}
            viewport={{ once: true, margin: '-50px' }}
            className="project-grid-item">
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {visibleCount < projects.length && (
        <div className="load-div">
          <Button onClick={() => setVisibleCount(projects.length)} className="load-btn">
            Load All
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
