import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const defaultSEO = {
  title: 'Ayşe Demirel Deniz - Software Engineer | Full Stack Developer',
  description:
    'Software Engineer specializing in Java, Spring Boot, React, and React Native. Building mobile, web, and desktop applications in Ankara, Turkey.',
  keywords: 'Ayşe Demirel, Software Engineer, Full Stack Developer, React, Spring Boot, Java',
  image: 'https://aysedemirel.github.io/og-image.png',
  url: 'https://aysedemirel.github.io/',
  type: 'website',
  author: 'Ayşe Demirel Deniz'
};

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime
}: SEOProps) {
  useEffect(() => {
    const seo = {
      title: title || defaultSEO.title,
      description: description || defaultSEO.description,
      keywords: keywords || defaultSEO.keywords,
      image: image || defaultSEO.image,
      url: url || defaultSEO.url,
      type: type,
      author: author || defaultSEO.author
    };

    // Update title
    document.title = seo.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Basic meta tags
    updateMetaTag('description', seo.description);
    updateMetaTag('keywords', seo.keywords);
    updateMetaTag('author', seo.author);

    // Open Graph
    updateMetaTag('og:type', seo.type, true);
    updateMetaTag('og:url', seo.url, true);
    updateMetaTag('og:title', seo.title, true);
    updateMetaTag('og:description', seo.description, true);
    updateMetaTag('og:image', seo.image, true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seo.title);
    updateMetaTag('twitter:description', seo.description);
    updateMetaTag('twitter:image', seo.image);

    // Article meta (for blog posts)
    if (type === 'article') {
      if (publishedTime) {
        updateMetaTag('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, true);
      }
      updateMetaTag('article:author', seo.author, true);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = seo.url;
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = seo.url;
      document.head.appendChild(canonical);
    }
  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime]);

  return null;
}
