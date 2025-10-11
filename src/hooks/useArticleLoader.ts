import { useState, useEffect } from 'react';
import { ARTICLE_LIST } from '../constants/articles';
import type { Article } from '../types/blog.types';

interface UseArticleLoaderReturn {
  article: Article | null;
  markdownContent: string;
  relatedArticles: Article[];
  loading: boolean;
  error: string | null;
}

export const useArticleLoader = (articleName: string | undefined): UseArticleLoaderReturn => {
  const [article, setArticle] = useState<Article | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      if (!articleName) {
        setError('No article name provided');
        setLoading(false);
        return;
      }

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

  return { article, markdownContent, relatedArticles, loading, error };
};
