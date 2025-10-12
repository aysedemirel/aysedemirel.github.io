import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import { generateHeadingId } from '../../utils/markdown';
import type { RefObject } from 'react';

interface ArticleBodyProps {
  content: string;
  contentRef: RefObject<HTMLDivElement | null>;
}

const ArticleBody = ({ content, contentRef }: ArticleBodyProps) => {
  return (
    <div className="article-body" ref={contentRef}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          h1: ({ node, ...props }) => <h2 {...props} />,
          h2: ({ node, children, ...props }) => {
            const id = generateHeadingId(children?.toString() || '');
            return (
              <h2 id={id} {...props}>
                {children}
              </h2>
            );
          },
          h3: ({ node, children, ...props }) => {
            const id = generateHeadingId(children?.toString() || '');
            return (
              <h3 id={id} {...props}>
                {children}
              </h3>
            );
          },
          table: ({ node, ...props }) => (
            <div className="table-wrapper">
              <table {...props} />
            </div>
          ),
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
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default ArticleBody;
