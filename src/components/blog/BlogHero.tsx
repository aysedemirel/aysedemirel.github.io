import { Typography } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

interface BlogHeroProps {
  totalArticles: number;
  topicsCount: number;
  yearsCount: number;
}

const BlogHero = ({ totalArticles, topicsCount, yearsCount }: BlogHeroProps) => {
  const stats = [
    { number: totalArticles, label: 'Articles' },
    { number: topicsCount, label: 'Topics' },
    { number: yearsCount, label: 'Years' }
  ];

  return (
    <div className="blog-hero">
      <div className="hero-title-wrapper">
        <GlobalOutlined className="hero-icon" />
        <Title level={1} className="hero-title">
          Blog
        </Title>
      </div>
      <Paragraph className="hero-subtitle">
        Exploring ideas, sharing knowledge, and documenting my journey in software development
      </Paragraph>
      <div className="hero-stats">
        {stats.map((stat, index) => (
          <>
            {index > 0 && <div key={`divider-${index}`} className="stat-divider" />}
            <div key={stat.label} className="stat-item">
              <Text className="stat-number">{stat.number}</Text>
              <Text className="stat-label">{stat.label}</Text>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default BlogHero;
