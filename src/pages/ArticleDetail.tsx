import 'highlight.js/styles/github-dark.css';
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import { ARTICLE_LIST } from '../constants/articles';
import { Layout, Tag, Typography, Button, Divider, Card, Spin, Breadcrumb, Anchor } from 'antd';
import {
  CalendarOutlined,
  ArrowLeftOutlined,
  ShareAltOutlined,
  LoadingOutlined,
  ClockCircleOutlined,
  MenuOutlined
} from '@ant-design/icons';
import { getTopicColor } from '../utils/blogHelper';
import type { Article } from '../types/blog.types';

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

interface Props {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const ArticleDetail = ({ activeSection, scrollToSection }: Props) => {
  const { articleName } = useParams<{ articleName: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const [tableOfContents, setTableOfContents] = useState<TOCItem[]>([]);
  const [showTOC, setShowTOC] = useState(false);
  const [estimatedReadTime, setEstimatedReadTime] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extract table of contents from markdown
  useEffect(() => {
    if (markdownContent) {
      const headings = markdownContent.match(/^#{2,3}\s+.+$/gm) || [];
      const toc: TOCItem[] = headings.map((heading) => {
        const level = heading.match(/^#+/)?.[0].length || 2;
        const text = heading.replace(/^#+\s+/, '');
        const id = text
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]/g, '');
        return { id, text, level };
      });
      setTableOfContents(toc);

      // Calculate estimated read time (average 200 words per minute)
      const wordCount = markdownContent.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / 200);
      setEstimatedReadTime(readTime);
    }
  }, [markdownContent]);

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

        const response = await fetch(`/content/articles/en/${foundArticle.contentFile}.md`);

        if (!response.ok) {
          throw new Error(`Failed to load article: ${response.statusText}`);
        }

        const text = await response.text();
        setMarkdownContent(text);

        const related = allArticles
          .filter((a) => a.topic === foundArticle.topic && a.name !== foundArticle.name)
          .slice(0, 2);
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

  const handleShare = async () => {
    const shareData = {
      title: article?.name,
      text: article?.description,
      url: window.location.href
    };

    if (navigator.share && navigator.canShare?.(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          console.log('Error sharing:', err);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (err) {
        console.log('Error copying:', err);
      }
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
            <div className="loading-spinner">
              <Spin indicator={<LoadingOutlined style={{ fontSize: 64 }} spin />} />
            </div>
            <Title level={3} className="loading-title">
              Loading article...
            </Title>
            <Text type="secondary">Please wait while we fetch the content</Text>
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
            <div className="error-icon">404</div>
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
      <div className="reading-progress-bar" style={{ width: `${readingProgress}%` }} />

      <HeaderComponent activeSection={activeSection} scrollToSection={scrollToSection} />

      <Content className="article-detail-content">
        <div className="article-wrapper">
          <div className="article-navigation">
            <Button
              type="text"
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate('/blog')}
              className="back-button">
              Back to Blog
            </Button>
            <Breadcrumb className="article-breadcrumb" separator="›">
              <Breadcrumb.Item>
                <a onClick={() => navigate('/')}>Home</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a onClick={() => navigate('/blog')}>Blog</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{article.topic}</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div className="article-container">
            {tableOfContents.length > 0 && (
              <aside className="table-of-contents desktop-toc">
                <div className="toc-header">
                  <MenuOutlined />
                  <Text strong>Table of Contents</Text>
                </div>
                <Anchor
                  offsetTop={100}
                  items={tableOfContents.map((item) => ({
                    key: item.id,
                    href: `#${item.id}`,
                    title: item.text,
                    className: `toc-level-${item.level}`
                  }))}
                />
              </aside>
            )}

            <article className="article-main">
              {/* Mobile TOC Toggle */}
              {tableOfContents.length > 0 && (
                <Button
                  className="mobile-toc-toggle"
                  icon={<MenuOutlined />}
                  onClick={() => setShowTOC(!showTOC)}>
                  {showTOC ? 'Hide' : 'Show'} Table of Contents
                </Button>
              )}

              {/* Mobile TOC */}
              {tableOfContents.length > 0 && showTOC && (
                <Card className="mobile-toc-card">
                  <Anchor
                    offsetTop={80}
                    items={tableOfContents.map((item) => ({
                      key: item.id,
                      href: `#${item.id}`,
                      title: item.text,
                      className: `toc-level-${item.level}`
                    }))}
                  />
                </Card>
              )}

              <Card className="article-card">
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
                        onClick={handleShare}
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
                <Divider className="content-divider" />
                <div className="article-body" ref={contentRef}>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeHighlight]}
                    components={{
                      h1: ({ node, ...props }) => <h2 {...props} />,
                      h2: ({ node, children, ...props }) => {
                        const id =
                          children
                            ?.toString()
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .replace(/[^\w-]/g, '') || '';
                        return (
                          <h2 id={id} {...props}>
                            {children}
                          </h2>
                        );
                      },
                      h3: ({ node, children, ...props }) => {
                        const id =
                          children
                            ?.toString()
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .replace(/[^\w-]/g, '') || '';
                        return (
                          <h3 id={id} {...props}>
                            {children}
                          </h3>
                        );
                      },
                      a: ({ node, href, children, ...props }) => {
                        const isExternal = href?.startsWith('http');
                        return (
                          <a
                            href={href}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            {...props}>
                            {children}
                            {isExternal && (
                              <span className="external-link-icon" aria-hidden="true">
                                ↗
                              </span>
                            )}
                          </a>
                        );
                      },
                      img: ({ node, alt, ...props }) => (
                        <figure className="article-image">
                          <img {...props} loading="lazy" alt={alt || 'Article image'} />
                          {alt && <figcaption>{alt}</figcaption>}
                        </figure>
                      )
                    }}>
                    {markdownContent}
                  </ReactMarkdown>
                </div>
              </Card>
              {relatedArticles.length > 0 && (
                <section
                  className="related-articles-section"
                  aria-labelledby="related-articles-title">
                  <Title level={2} id="related-articles-title" className="related-title">
                    Related Articles
                  </Title>
                  <div className="related-articles-grid">
                    {relatedArticles.map((relatedArticle) => (
                      <Card
                        key={relatedArticle.name}
                        hoverable
                        className="related-article-card"
                        onClick={() => navigateToRelatedArticle(relatedArticle.contentFile)}
                        tabIndex={0}
                        role="article"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            navigateToRelatedArticle(relatedArticle.contentFile);
                          }
                        }}>
                        <Tag color={getTopicColor(relatedArticle.topic)} className="related-tag">
                          {relatedArticle.topic}
                        </Tag>
                        <Title level={4} className="related-article-title">
                          {relatedArticle.name}
                        </Title>
                        <Paragraph className="related-article-description" ellipsis={{ rows: 3 }}>
                          {relatedArticle.description}
                        </Paragraph>
                        <div className="related-article-date">
                          <ClockCircleOutlined aria-hidden="true" />
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
                </section>
              )}
            </article>
          </div>
        </div>
      </Content>

      <FooterComponent scrollToSection={scrollToSection} />
    </div>
  );
};

export default ArticleDetail;
