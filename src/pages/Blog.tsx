import { useNavigate } from 'react-router-dom';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import { Card, Input, Layout, Tag, Typography } from 'antd';
import {
  CalendarOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  SearchOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import { getTopicColor } from '../utils/blogHelper';
import { useArticles } from '../hooks/useArticles';

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

interface Props {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Blog = ({ activeSection, scrollToSection }: Props) => {
  const navigate = useNavigate();
  const {
    articlesByYear,
    topicData,
    totalArticles,
    searchTerm,
    selectedTopic,
    setSearchTerm,
    setSelectedTopic
  } = useArticles();

  const handleArticleClick = (articleName: string) => {
    navigate(`/article/${articleName}`);
  };

  return (
    <div id="blog" className="blog-container">
      <HeaderComponent activeSection={activeSection} scrollToSection={scrollToSection} />
      <Content className="blog-content">
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
            <div className="stat-item">
              <Text className="stat-number">{totalArticles}</Text>
              <Text className="stat-label">Articles</Text>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <Text className="stat-number">{topicData.length}</Text>
              <Text className="stat-label">Topics</Text>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <Text className="stat-number">{articlesByYear.length}</Text>
              <Text className="stat-label">Years</Text>
            </div>
          </div>
        </div>

        <div className="filter-section">
          <Input
            placeholder="Search articles by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            allowClear
            size="large"
            prefix={<SearchOutlined />}
            className="search-input"
          />

          <div className="topic-filters">
            <Tag
              className={`topic-tag ${!selectedTopic ? 'active' : ''}`}
              color={!selectedTopic ? 'orange' : 'default'}
              onClick={() => setSelectedTopic(null)}>
              All Topics
            </Tag>
            {topicData.map((topic) => (
              <Tag
                key={topic.name}
                color={selectedTopic === topic.name ? getTopicColor(topic.name) : 'default'}
                className={`topic-tag ${selectedTopic === topic.name ? 'active' : ''}`}
                onClick={() => setSelectedTopic(topic.name === selectedTopic ? null : topic.name)}>
                {topic.name} ({topic.value})
              </Tag>
            ))}
          </div>
        </div>

        <div className="articles-timeline">
          {articlesByYear.length === 0 ? (
            <div className="no-results">
              <Text type="secondary" style={{ fontSize: 16 }}>
                No articles found matching your criteria
              </Text>
            </div>
          ) : (
            articlesByYear.map(({ year, articles }) => (
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
                    <Card
                      key={`${article.name}-${index}`}
                      className="article-card"
                      hoverable
                      onClick={() => handleArticleClick(article.contentFile)}>
                      <div className="article-content">
                        <div className="article-header">
                          <Tag color={getTopicColor(article.topic)} className="article-topic">
                            {article.topic}
                          </Tag>
                          <Text type="secondary" className="article-date">
                            <ClockCircleOutlined />
                            {new Date(article.date).toLocaleDateString(undefined, {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
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
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </Content>
      <FooterComponent scrollToSection={scrollToSection} />
    </div>
  );
};

export default Blog;
