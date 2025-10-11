import { Button, Breadcrumb } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { Article } from '../../types/blog.types';

interface ArticleNavigationProps {
  article: Article;
  onBack: () => void;
}

const ArticleNavigation = ({ article, onBack }: ArticleNavigationProps) => {
  const navigate = useNavigate();

  return (
    <div className="article-navigation">
      <Button type="text" icon={<ArrowLeftOutlined />} onClick={onBack} className="back-button">
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
  );
};

export default ArticleNavigation;
