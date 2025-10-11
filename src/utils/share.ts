import type { Article } from '../types/blog.types';

interface ShareData {
  title?: string;
  text?: string;
  url: string;
}

/**
 * Share article using Web Share API or fallback to clipboard
 */
export const shareArticle = async (article: Article): Promise<void> => {
  const shareData: ShareData = {
    title: article.name,
    text: article.description,
    url: window.location.href
  };

  try {
    if (navigator.share && navigator.canShare?.(shareData)) {
      await navigator.share(shareData);
    } else {
      await copyToClipboard(window.location.href);
      alert('Link copied to clipboard!');
    }
  } catch (err) {
    if (err instanceof Error && err.name !== 'AbortError') {
      console.error('Error sharing:', err);
      throw err;
    }
  }
};

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Error copying to clipboard:', err);
    throw err;
  }
};

/**
 * Check if Web Share API is available
 */
export const isShareSupported = (): boolean => {
  return typeof navigator.share === 'function';
};
