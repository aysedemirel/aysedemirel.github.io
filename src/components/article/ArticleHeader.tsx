import { Tag, Typography, Button } from 'antd';
import { CalendarOutlined, ShareAltOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { getTopicColor } from '../../utils/blogHelper';
import type { Article } from '../../types/blog.types';

const { Title, Paragraph, Text } = Typography;

interface ArticleHeaderProps {
  article: Article;
  onShare: () => void;
  estimatedReadTime: number;
}

const ArticleHeader = ({ article, onShare, estimatedReadTime }: ArticleHeaderProps) => {
  return (
    <header className="article-header">
      <div className="article-meta-top">
        <Tag color={getTopicColor(article.topic)} className="article-topic-tag">
          {article.topic}
        </Tag>

        <div className="action-buttons">
          {(article.mediumLink || article.substackLink) && (
            <div className="external-links">
              {article.mediumLink && (
                <a
                  href={article.mediumLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-badge medium-badge"
                  aria-label="Read on Medium">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                  Also on Medium
                </a>
              )}
              {article.substackLink && (
                <a
                  href={article.substackLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-badge substack-badge"
                  aria-label="Read on Substack">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                  </svg>
                  Also on Substack
                </a>
              )}
            </div>
          )}

          <Button
            type="primary"
            icon={<ShareAltOutlined />}
            onClick={onShare}
            className="share-button"
            aria-label="Share article">
            Share
          </Button>
        </div>
      </div>

      <Title level={1} className="article-title">
        {article.name}
      </Title>

      <Paragraph className="article-description">{article.description}</Paragraph>

      <div className="article-meta-bottom">
        <div className="meta-item">
          <CalendarOutlined aria-hidden="true" />
          <Text>
            {new Date(article.date).toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </Text>
        </div>
        {estimatedReadTime > 0 && (
          <div className="meta-item">
            <ClockCircleOutlined aria-hidden="true" />
            <Text>{estimatedReadTime} min read</Text>
          </div>
        )}
      </div>
    </header>
  );
};

export default ArticleHeader;
