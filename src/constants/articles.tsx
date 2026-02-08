import type { Article } from '../types/blog.types';

export const ARTICLE_LIST: { year: number; articles: Article[] }[] = [
  /*{
    year: 2024,
    articles: [
      {
        name: 'Understanding React Hooks',
        contentFile: 'understanding-react-hooks',
        topic: 'React',
        year: 2024,
        date: '2024-03-15',
        description:
          'A comprehensive guide to React Hooks and how to use them effectively in modern React applications'
      },
      {
        name: 'TypeScript Best Practices',
        contentFile: 'typescript-best-practices',
        topic: 'TypeScript',
        year: 2024,
        date: '2024-02-20',
        description: 'Learn the best practices for writing clean, maintainable TypeScript code'
      },
      {
        name: 'CSS Grid Layout Mastery',
        contentFile: 'css-grid-layout',
        topic: 'CSS',
        year: 2024,
        date: '2024-01-10',
        description: 'Master CSS Grid and create complex layouts with ease'
      }
    ]
  },
  {
    year: 2023,
    articles: [
      {
        name: 'Modern JavaScript Features',
        contentFile: 'modern-javascript-features',
        topic: 'JavaScript',
        year: 2023,
        date: '2023-11-05',
        description: 'Explore the latest JavaScript features and how to use them in your projects'
      },
      {
        name: 'Node.js Performance Tips',
        contentFile: 'nodejs-performance',
        topic: 'Node.js',
        year: 2023,
        date: '2023-09-22',
        description: 'Optimize your Node.js applications for better performance'
      }
    ]
  },*/
  {
    year: 2021,
    articles: [
      {
        name: 'URL-URN -URI',
        contentFile: 'url-urn-uri',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-23',
        description: 'Brief summary of what URL, URN, and URI mean',
        image: '/img/url-uri-urn.png',
        substackLink:
          'https://open.substack.com/pub/aysedemireldeniz/p/url-urn-uri?r=1mqt9c&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true'
      },
      {
        name: 'TCP(Transmission Control Protocol)',
        contentFile: 'tcp',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-23',
        description:
          'How does TCP (Transmission Control Protocol) ensure reliable data transmission? Connection establishment and basic mechanisms are covered in this article',
        image: '/img/tcp.png',
        substackLink:
          'https://open.substack.com/pub/aysedemireldeniz/p/tcptransmission-control-protocol?r=1mqt9c&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true'
      },
      {
        name: 'What is HTTP?',
        contentFile: 'what-is-http',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-23',
        description:
          'Learn how HTTP works, the request-response structure, and what goes on behind the scenes of web traffic',
        image: '/img/http.png',
        substackLink:
          'https://open.substack.com/pub/aysedemireldeniz/p/what-is-http?utm_campaign=post-expanded-share&utm_medium=web'
      },
      {
        name: 'IP (Internet Protocol)',
        contentFile: 'internet-protocol',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-22',
        description: 'A detailed look at the concept of IP...',
        image: '/img/ip-2.png',
        substackLink:
          'https://open.substack.com/pub/aysedemireldeniz/p/ip-internet-protocol?r=1mqt9c&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true'
      },
      {
        name: 'Hosting',
        contentFile: 'hosting',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-22',
        description:
          'What is hosting? Why is it used? What are the hosting options and what are their differences? We will seek answers to these questions in our article.',
        image: '/img/hosting.png',
        substackLink:
          'https://open.substack.com/pub/aysedemireldeniz/p/hosting?r=1mqt9c&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true'
      },
      {
        name: 'Domain Name',
        contentFile: 'domain-name',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-22',
        description:
          'Why do domain names exist? What is their relationship with IP addresses? Are they absolutely necessary for creating a website? What do the extensions in domain names mean? We will answer these questions in our article...',
        image: '/img/domain-name.png',
        substackLink:
          'https://open.substack.com/pub/aysedemireldeniz/p/domain-name?r=1mqt9c&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true'
      },
      {
        name: 'DNS (Domain Name System)',
        contentFile: 'domain-name-system',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-11',
        description:
          'We will examine how we can browse the internet without memorizing IP addresses.',
        image: '/img/dns.png',
        substackLink:
          'https://open.substack.com/pub/aysedemireldeniz/p/dns-domain-name-system?r=1mqt9c&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true'
      },
      {
        name: 'Why should we use Interface?',
        contentFile: 'why-should-we-use-interface',
        topic: 'OOP',
        year: 2021,
        date: '2021-05-11',
        description:
          'In this article, we will examine the concept of interfaces in Java. We will seek answers to the questions: What are they? What are they not? Why should we use them?',
        image: '/img/interface.png',
        substackLink:
          'https://open.substack.com/pub/aysedemireldeniz/p/why-should-we-use-interface?r=1mqt9c&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true'
      },
      {
        name: "How do you find a website's IP address?",
        contentFile: 'how-find-website-ip',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-10',
        description:
          "If you know the domain name of the website, let's quickly see how to find the IP address from the command line...",
        image: '/img/ip.png',
        substackLink:
          'https://open.substack.com/pub/aysedemireldeniz/p/how-do-you-find-a-websites-ip-address?r=1mqt9c&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false'
      },
      {
        name: 'Internet 101 - Encryption and Security',
        contentFile: 'encryption-security',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-08',
        description:
          'The concepts of symmetric and asymmetric encryption, the most common cybercrimes...',
        image: '/img/encryption.png',
        substackLink:
          'https://open.substack.com/pub/aysedemireldeniz/p/internet-101-encryption-and-security?r=1mqt9c&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true'
      },
      {
        name: 'Internet 101 - How is data transmitted?',
        contentFile: 'how-to-transfer-data',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-08',
        description:
          'A summary of concepts such as routers, HTML, HTTP, TCP, and how requests are sent...',
        image: '/img/tcp.png',
        substackLink:
          'https://open.substack.com/pub/aysedemireldeniz/p/internet-101-how-is-data-transmitted?r=1mqt9c&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true'
      },
      {
        name: 'Internet 101 - IP and DNS',
        contentFile: 'ip-dns',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-08',
        description: 'What is IP? What is DNS? A brief summary of the relationship between them...',
        image: '/img/internet2.png',
        substackLink:
          'https://open.substack.com/pub/aysedemireldeniz/p/internet-101-ip-and-dns?r=1mqt9c&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true'
      },
      {
        name: 'What is the internet, how does it work? Who owns it?',
        contentFile: 'what-is-the-internet',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-03',
        description: 'A summary about the internet...',
        image: '/img/internet.png',
        substackLink:
          'https://open.substack.com/pub/aysedemireldeniz/p/what-is-the-internet-how-does-it?r=1mqt9c&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true'
      }
    ]
  },
  {
    year: 2020,
    articles: [
      {
        name: 'Java Development Kit (JDK) Installation Guide',
        contentFile: 'java-jdk-installation',
        topic: 'Java',
        year: 2020,
        date: '2020-11-09',
        description: 'What is JDK and Why Should It Be Installed? How to Install It?',
        image: '/img/java.png',
        substackLink:
          'https://open.substack.com/pub/aysedemireldeniz/p/java-development-kit-jdk-installation?r=1mqt9c&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true'
      }
    ]
  }
];
