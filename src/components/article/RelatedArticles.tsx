import { Card, Tag, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getTopicColor } from '../../utils/blogHelper';
import type { Article } from '../../types/blog.types';

const { Title, Paragraph, Text } = Typography;

interface RelatedArticlesProps {
  articles: Article[];
  onNavigate: (contentFile: string) => void;
}

const RelatedArticles = ({ articles, onNavigate }: RelatedArticlesProps) => {
  if (articles.length === 0) return null;

  return (
    <section className="related-articles-section" aria-labelledby="related-articles-title">
      <Title level={2} id="related-articles-title" className="related-title">
        Related Articles
      </Title>
      <div className="related-articles-grid">
        {articles.map((article) => (
          <Card
            key={article.name}
            hoverable
            className="related-article-card"
            onClick={() => onNavigate(article.contentFile)}
            tabIndex={0}
            role="article">
            <Tag color={getTopicColor(article.topic)} className="related-tag">
              {article.topic}
            </Tag>
            <Title level={4} className="related-article-title">
              {article.name}
            </Title>
            <Paragraph className="related-article-description" ellipsis={{ rows: 3 }}>
              {article.description}
            </Paragraph>
            <div className="related-article-date">
              <ClockCircleOutlined aria-hidden="true" />
              <Text type="secondary">
                {new Date(article.date).toLocaleDateString(undefined, {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </Text>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
