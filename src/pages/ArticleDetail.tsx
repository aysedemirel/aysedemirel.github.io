import { useState, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout, Card, Divider } from 'antd';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import BackToTop from '../components/BackToTop';
import ArticleHeader from '../components/article/ArticleHeader';
import ArticleBody from '../components/article/ArticleBody';
import ArticleNavigation from '../components/article/ArticleNavigation';
import TableOfContents from '../components/article/TableOfContents';
import MobileTableOfContents from '../components/article/MobileTableOfContents';
import RelatedArticles from '../components/article/RelatedArticles';
import LoadingState from '../components/article/LoadingState';
import ErrorState from '../components/article/ErrorState';
import { useArticleLoader } from '../hooks/useArticleLoader';
import { useReadingProgress } from '../hooks/useReadingProgress';
import { useTableOfContents } from '../hooks/useTableOfContents';

import { shareArticle } from '../utils/share';

const { Content } = Layout;

interface Props {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const ArticleDetail = ({ activeSection, scrollToSection }: Props) => {
  const { articleName } = useParams<{ articleName: string }>();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [showTOC, setShowTOC] = useState(false);
  const { article, markdownContent, relatedArticles, loading, error } =
    useArticleLoader(articleName);
  const readingProgress = useReadingProgress();
  const { tableOfContents, estimatedReadTime } = useTableOfContents(markdownContent);

  const handleShare = useCallback(async () => {
    if (!article) return;

    try {
      await shareArticle(article);
    } catch (err) {
      console.error('Share failed:', err);
    }
  }, [article]);

  const handleNavigateToRelated = useCallback(
    (contentFile: string) => {
      navigate(`/article/${contentFile}`);
    },
    [navigate]
  );

  const handleBack = useCallback(() => {
    navigate('/blog');
  }, [navigate]);

  if (loading) {
    return (
      <div className="article-detail-container">
        <HeaderComponent activeSection={activeSection} scrollToSection={scrollToSection} />
        <Content className="article-detail-content">
          <LoadingState />
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
          <ErrorState error={error} onBack={handleBack} />
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
          <ArticleNavigation article={article} onBack={handleBack} />

          <div className="article-container">
            {tableOfContents.length > 0 && <TableOfContents items={tableOfContents} />}

            <article className="article-main">
              {tableOfContents.length > 0 && (
                <MobileTableOfContents
                  items={tableOfContents}
                  show={showTOC}
                  onToggle={() => setShowTOC(!showTOC)}
                />
              )}

              <Card className="article-card">
                <ArticleHeader
                  article={article}
                  onShare={handleShare}
                  estimatedReadTime={estimatedReadTime}
                />
                <Divider className="content-divider" />
                <ArticleBody content={markdownContent} contentRef={contentRef} />
              </Card>

              <RelatedArticles articles={relatedArticles} onNavigate={handleNavigateToRelated} />
            </article>
          </div>
        </div>
      </Content>

      <FooterComponent scrollToSection={scrollToSection} />
      <BackToTop showProgress={false} scrollDuration={100} />
    </div>
  );
};

export default ArticleDetail;
