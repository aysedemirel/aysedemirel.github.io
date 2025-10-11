import { Typography } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import ArticleCard from './ArticleCard';
import type { ArticlesByYear } from '../../types/blog.types';

const { Text } = Typography;

interface ArticlesTimelineProps {
  articlesByYear: ArticlesByYear[];
  onArticleClick: (articleName: string) => void;
}

const ArticlesTimeline = ({ articlesByYear, onArticleClick }: ArticlesTimelineProps) => {
  if (articlesByYear.length === 0) {
    return (
      <div className="articles-timeline">
        <div className="no-results">
          <Text type="secondary" style={{ fontSize: 16 }}>
            No articles found matching your criteria
          </Text>
        </div>
      </div>
    );
  }

  return (
    <div className="articles-timeline">
      {articlesByYear.map(({ year, articles }) => (
        <div key={year} className="year-section">
          <div className="year-header">
            <div className="year-badge">
              <CalendarOutlined />
              <span>{year}</span>
            </div>
            <div className="year-line" />
          </div>

          <div className="articles-list">
            {articles.map((article, index) => (
              <ArticleCard
                key={`${article.name}-${index}`}
                article={article}
                onClick={() => onArticleClick(article.contentFile)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesTimeline;
