import { useMemo, useState } from 'react';
import { ARTICLE_LIST } from '../constants/articles';
import type { Article, ArticlesByYear, TopicData } from '../types/blog.types';

export const useArticles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const allArticles = useMemo(() => {
    return ARTICLE_LIST.flatMap((item) => item.articles);
  }, []);

  const totalArticles = allArticles.length;

  const topicData = useMemo((): TopicData[] => {
    const topicCount: { [key: string]: number } = {};
    allArticles.forEach((article) => {
      topicCount[article.topic] = (topicCount[article.topic] || 0) + 1;
    });
    return Object.entries(topicCount).map(([name, value]) => ({ name, value }));
  }, [allArticles]);

  const articlesByYear = useMemo((): ArticlesByYear[] => {
    const grouped: { [year: number]: Article[] } = {};
    let filtered = allArticles;

    if (searchTerm) {
      filtered = filtered.filter(
        (a) =>
          a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          a.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTopic) {
      filtered = filtered.filter((a) => a.topic === selectedTopic);
    }

    filtered.forEach((article) => {
      if (!grouped[article.year]) {
        grouped[article.year] = [];
      }
      grouped[article.year].push(article);
    });

    // Sort by year (newest first) and articles within year (newest first)
    return Object.entries(grouped)
      .sort(([a], [b]) => Number(b) - Number(a))
      .map(([year, articles]) => ({
        year: Number(year),
        articles: articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      }));
  }, [allArticles, searchTerm, selectedTopic]);

  const filteredArticlesCount = useMemo(() => {
    return articlesByYear.reduce((sum, year) => sum + year.articles.length, 0);
  }, [articlesByYear]);

  return {
    allArticles,
    articlesByYear,
    topicData,
    totalArticles,
    filteredArticlesCount,
    searchTerm,
    selectedTopic,
    setSearchTerm,
    setSelectedTopic,
    clearFilters: () => {
      setSearchTerm('');
      setSelectedTopic(null);
    }
  };
};
