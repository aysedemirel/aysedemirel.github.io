import { useEffect } from 'react';

interface PersonStructuredDataProps {
  name?: string;
  jobTitle?: string;
  url?: string;
  image?: string;
  email?: string;
  location?: {
    city: string;
    country: string;
  };
  sameAs?: string[];
  skills?: string[];
  description?: string;
}

interface ArticleStructuredDataProps {
  type: 'article';
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}

type StructuredDataProps = PersonStructuredDataProps | ArticleStructuredDataProps;

// Type guard function
function isArticleProps(props: StructuredDataProps): props is ArticleStructuredDataProps {
  return 'type' in props && props.type === 'article';
}

const defaultPersonData: PersonStructuredDataProps = {
  name: 'Ayşe Demirel Deniz',
  jobTitle: 'Software Engineer',
  url: 'https://aysedemirel.github.io',
  image: 'https://aysedemirel.github.io/og-image.png',
  email: 'aysedemireldeniz@gmail.com',
  location: {
    city: 'Ankara',
    country: 'Turkey'
  },
  sameAs: [
    'https://www.linkedin.com/in/ayse-demirel/',
    'https://github.com/aysedemirel',
    'https://aysedemirel.medium.com/',
    'https://x.com/aysdemireldeniz'
  ],
  skills: [
    'Java',
    'Spring Boot',
    'React',
    'React Native',
    'JavaScript',
    'TypeScript',
    'Mobile Development',
    'Web Development'
  ],
  description:
    'Software Engineer specializing in Java, Spring Boot, React, and React Native. Building mobile, web, and desktop applications.'
};

export default function StructuredData(props: StructuredDataProps) {
  useEffect(() => {
    let structuredData: any;

    if (isArticleProps(props)) {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: props.headline,
        description: props.description,
        image: props.image,
        datePublished: props.datePublished,
        dateModified: props.dateModified || props.datePublished,
        author: {
          '@type': 'Person',
          name: props.author,
          url: 'https://aysedemirel.github.io'
        },
        publisher: {
          '@type': 'Person',
          name: props.author,
          logo: {
            '@type': 'ImageObject',
            url: 'https://aysedemirel.github.io/og-image.png'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': props.url
        }
      };
    } else {
      const data = { ...defaultPersonData, ...props };

      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: data.name,
        jobTitle: data.jobTitle,
        url: data.url,
        image: data.image,
        email: data.email,
        description: data.description,
        address: {
          '@type': 'PostalAddress',
          addressLocality: data.location?.city,
          addressCountry: data.location?.country
        },
        sameAs: data.sameAs,
        knowsAbout: data.skills
      };
    }

    let scriptElement = document.querySelector(
      'script[type="application/ld+json"]'
    ) as HTMLScriptElement;

    if (scriptElement) {
      scriptElement.textContent = JSON.stringify(structuredData);
    } else {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      scriptElement.textContent = JSON.stringify(structuredData);
      document.head.appendChild(scriptElement);
    }
  }, [props]);

  return null;
}
