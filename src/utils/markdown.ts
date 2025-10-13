/**
 * Generate a URL-friendly ID from heading text
 */
export const generateHeadingId = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
};

/**
 * Calculate estimated reading time based on word count
 * @param content - Markdown content
 * @param wordsPerMinute - Average reading speed (default: 200)
 */
export const calculateReadTime = (content: string, wordsPerMinute: number = 200): number => {
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

/**
 * Extract headings from markdown content
 */
export const extractHeadings = (markdown: string, levels: number[] = [2, 3]) => {
  const levelPattern = levels.join('|');
  const regex = new RegExp(`^#{${levelPattern}}\\s+.+$`, 'gm');
  return markdown.match(regex) || [];
};
