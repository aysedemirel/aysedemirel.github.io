import { useNavigate } from 'react-router-dom';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import { Layout } from 'antd';
import { useArticles } from '../hooks/useArticles';
import BlogHero from '../components/blog/BlogHero';
import BlogFilters from '../components/blog/BlogFilters';
import ArticlesTimeline from '../components/blog/ArticlesTimeline';
import BackToTop from '../components/BackToTop';
import { useEffect } from 'react';

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleArticleClick = (articleName: string) => {
    navigate(`/article/${articleName}`);
  };

  return (
    <div id="blog" className="blog-container">
      <HeaderComponent activeSection={activeSection} scrollToSection={scrollToSection} />
      <Content className="blog-content">
        <BlogHero
          totalArticles={totalArticles}
          topicsCount={topicData.length}
          yearsCount={articlesByYear.length}
        />

        <BlogFilters
          searchTerm={searchTerm}
          selectedTopic={selectedTopic}
          topicData={topicData}
          onSearchChange={setSearchTerm}
          onTopicSelect={setSelectedTopic}
        />

        <ArticlesTimeline articlesByYear={articlesByYear} onArticleClick={handleArticleClick} />
      </Content>

      <FooterComponent scrollToSection={scrollToSection} />

      <BackToTop showProgress={false} scrollDuration={100} />
    </div>
  );
};

export default Blog;
