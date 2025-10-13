import { useState, useEffect } from 'react';
import { calculateReadTime } from '../utils/markdown';

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface UseTableOfContentsReturn {
  tableOfContents: TOCItem[];
  estimatedReadTime: number;
}

export const useTableOfContents = (markdownContent: string): UseTableOfContentsReturn => {
  const [tableOfContents, setTableOfContents] = useState<TOCItem[]>([]);
  const [estimatedReadTime, setEstimatedReadTime] = useState(0);

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

      const readTime = calculateReadTime(markdownContent);
      setEstimatedReadTime(readTime);
    }
  }, [markdownContent]);

  return { tableOfContents, estimatedReadTime };
};
