import { Card, Tag, Typography } from 'antd';
import { ClockCircleOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { getTopicColor } from '../../utils/blogHelper';
import type { Article } from '../../types/blog.types';

const { Title, Paragraph, Text } = Typography;

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

const ArticleCard = ({ article, onClick }: ArticleCardProps) => {
  const formattedDate = new Date(article.date).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Card className="article-card" hoverable onClick={onClick}>
      <div className="article-content">
        <div className="article-header">
          <Tag color={getTopicColor(article.topic)} className="article-topic">
            {article.topic}
          </Tag>
          <Text type="secondary" className="article-date">
            <ClockCircleOutlined />
            {formattedDate}
          </Text>
        </div>

        <Title level={3} className="article-title">
          {article.name}
        </Title>

        <Paragraph className="article-description">{article.description}</Paragraph>

        <div className="article-footer">
          <span className="read-more">
            Read article <ArrowRightOutlined />
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ArticleCard;
