import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { Button, Card, Space, Tag, Typography, Divider } from 'antd';
import type { Project } from '../interfaces/Project';

const { Title, Paragraph } = Typography;

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card
      hoverable
      className="project-card"
      styles={{
        body: {
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }
      }}>
      <div className="card-content">
        <div>
          <Title level={4} className="card-title">
            {project.title}
          </Title>
          <Paragraph className="card-desc">{project.description}</Paragraph>
          <Space wrap>
            {project.tech.map((tech) => (
              <Tag key={tech} color="orange">
                {tech}
              </Tag>
            ))}
          </Space>
        </div>

        <div className="card-buttons">
          {project.github && (
            <>
              <Button
                type="link"
                icon={<GithubOutlined />}
                href={project.github}
                target="_blank"
                className="btn">
                Code
              </Button>
              <Divider type="vertical" className="btn-divider" />
            </>
          )}
          {project.demo && (
            <Button
              type="link"
              icon={<LinkOutlined />}
              href={project.demo}
              target="_blank"
              className="btn">
              Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
