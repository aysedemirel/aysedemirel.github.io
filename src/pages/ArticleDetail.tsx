import 'highlight.js/styles/github-dark.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import { ARTICLE_LIST } from '../constants/articles';
import { Layout, Tag, Typography, Button, Divider, Card, Spin } from 'antd';
import {
  CalendarOutlined,
  ArrowLeftOutlined,
  ShareAltOutlined,
  LoadingOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import { getTopicColor } from '../utils/blogHelper';
import type { Article } from '../types/blog.types';

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

interface Props {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const ArticleDetail = ({ activeSection, scrollToSection }: Props) => {
  const { articleName } = useParams<{ articleName: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);
      setError(null);

      try {
        const allArticles = ARTICLE_LIST.flatMap((item) => item.articles);
        const foundArticle = allArticles.find((a) => a.contentFile === articleName);

        if (!foundArticle) {
          setError('Article not found');
          setLoading(false);
          return;
        }
        setArticle(foundArticle);
        // FIXME: en
        const response = await fetch(`/content/articles/en/${foundArticle.contentFile}.md`);

        if (!response.ok) {
          throw new Error(`Failed to load article: ${response.statusText}`);
        }

        const text = await response.text();
        setMarkdownContent(text);

        const related = allArticles
          .filter((a) => a.topic === foundArticle.topic && a.name !== foundArticle.name)
          .slice(0, 3);
        setRelatedArticles(related);
      } catch (err) {
        console.error('Error loading article:', err);
        setError('Failed to load article content. Please check if the markdown file exists.');
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [articleName]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: article?.name,
          text: article?.description,
          url: window.location.href
        })
        .catch((err) => console.log('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const navigateToRelatedArticle = (articleName: string) => {
    navigate(`/article/${articleName}`);
  };

  if (loading) {
    return (
      <div className="article-detail-container">
        <HeaderComponent activeSection={activeSection} scrollToSection={scrollToSection} />
        <Content className="article-detail-content">
          <div className="article-loading">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
            <Title level={3} style={{ marginTop: 24, color: '#6b7280' }}>
              Loading article...
            </Title>
          </div>
        </Content>
        <FooterComponent scrollToSection={scrollToSection} />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="article-detail-container">
        <HeaderComponent activeSection={activeSection} scrollToSection={scrollToSection} />
        <Content className="article-detail-content">
          <div className="article-not-found">
            <Title level={2}>{error || 'Article Not Found'}</Title>
            <Paragraph type="secondary">
              {error || 'The article you are looking for does not exist or has been moved.'}
            </Paragraph>
            <Button
              type="primary"
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate('/blog')}
              size="large">
              Back to Blog
            </Button>
          </div>
        </Content>
        <FooterComponent scrollToSection={scrollToSection} />
      </div>
    );
  }

  return (
    <div className="article-detail-container">
      <HeaderComponent activeSection={activeSection} scrollToSection={scrollToSection} />
      <Content className="article-detail-content">
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate('/blog')}
          className="back-button">
          Back to Blog
        </Button>

        <div className="article-header">
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
                      className="external-badge medium-badge">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ marginRight: '6px' }}>
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
                      className="external-badge substack-badge">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ marginRight: '6px' }}>
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
                onClick={handleShare}
                className="share-button">
                Share
              </Button>
            </div>
          </div>

          <Title level={1} className="article-title">
            {article.name}
          </Title>

          <Paragraph className="article-description">{article.description}</Paragraph>

          <div className="article-meta-bottom">
            <div className="meta-date">
              <CalendarOutlined />
              <Text>
                {new Date(article.date).toLocaleDateString(undefined, {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </Text>
            </div>
          </div>
        </div>

        <Divider />

        <Card className="article-content-card">
          <div className="article-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeHighlight]}
              components={{
                // Map h1 to h2 for better hierarchy (h1 is used for article title)
                h1: ({ node, ...props }) => <h2 {...props} />,
                // Add IDs to headings for potential anchor links
                h2: ({ node, children, ...props }) => {
                  const id = children?.toString().toLowerCase().replace(/\s+/g, '-') || '';
                  return (
                    <h2 id={id} {...props}>
                      {children}
                    </h2>
                  );
                },
                h3: ({ node, children, ...props }) => {
                  const id = children?.toString().toLowerCase().replace(/\s+/g, '-') || '';
                  return (
                    <h3 id={id} {...props}>
                      {children}
                    </h3>
                  );
                },
                // Handle external links - open in new tab
                a: ({ node, href, children, ...props }) => {
                  const isExternal = href?.startsWith('http');
                  return (
                    <a
                      href={href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      {...props}>
                      {children}
                    </a>
                  );
                },
                // Optimize images with lazy loading
                img: ({ node, ...props }) => (
                  <img {...props} loading="lazy" alt={props.alt || 'Article image'} />
                )
              }}>
              {markdownContent}
            </ReactMarkdown>
          </div>
        </Card>

        {relatedArticles.length > 0 && (
          <div className="related-articles-section">
            <Title level={2} className="related-title">
              Related Articles
            </Title>
            <div className="related-articles-grid">
              {relatedArticles.map((relatedArticle) => (
                <Card
                  key={relatedArticle.name}
                  hoverable
                  className="related-article-card"
                  onClick={() => navigateToRelatedArticle(relatedArticle.contentFile)}>
                  <Tag color={getTopicColor(relatedArticle.topic)} className="related-tag">
                    {relatedArticle.topic}
                  </Tag>
                  <Title level={4} className="related-article-title">
                    {relatedArticle.name}
                  </Title>
                  <Paragraph className="related-article-description">
                    {relatedArticle.description}
                  </Paragraph>
                  <div className="related-article-date">
                    <ClockCircleOutlined />
                    <Text type="secondary">
                      {new Date(relatedArticle.date).toLocaleDateString(undefined, {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </Text>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </Content>
      <FooterComponent scrollToSection={scrollToSection} />
    </div>
  );
};

export default ArticleDetail;
