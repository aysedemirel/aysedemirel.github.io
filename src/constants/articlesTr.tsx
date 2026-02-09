import type { Article } from '../types/blog.types';

export const ARTICLE_LIST_TR: { year: number; articles: Article[] }[] = [
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
        name: "HTTP'nin Evrimi: HTTP/0.9'dan HTTP/2'ye",
        contentFile: 'http-journey',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-26',
        description: 'HTTP Nedir? HTTP/1.0, HTTP/1.1 ve HTTP/2 Arasındaki Farklar',
        image: '/img/http-https.png',
        mediumLink: 'https://aysedemirel.medium.com/http-yolculu%C4%9Fu-49b0634c565f'
      },
      {
        name: 'URL-URN -URI',
        contentFile: 'url-urn-uri',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-23',
        description: 'URL, URN ve URN ifadelerinin ne olduğuna dair kısa bir özet',
        image: '/img/url-uri-urn.png',
        mediumLink: 'https://aysedemirel.medium.com/url-urn-uri-12c21ad0dc20'
      },
      {
        name: 'TCP(Transmission Control Protocol)',
        contentFile: 'tcp',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-23',
        description:
          'TCP (Transmission Control Protocol), güvenilir veri iletimini nasıl sağlar? Bağlantı kurulumu ve temel mekanizmalar bu yazıda',
        image: '/img/tcp.png',
        mediumLink: 'https://aysedemirel.medium.com/tcp-transmission-control-protocol-f9f4c3db0641'
      },
      {
        name: 'HTTP Nedir?',
        contentFile: 'what-is-http',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-23',
        description:
          'HTTP’nin nasıl çalıştığını, istek–cevap yapısını ve web trafiğinin perde arkasında neler döndüğünü öğrenin',
        image: '/img/http.png',
        mediumLink: 'https://aysedemirel.medium.com/http-nedir-bcf2cc9b3a25'
      },
      {
        name: 'IP(Internet Protocol)',
        contentFile: 'internet-protocol',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-22',
        description: 'IP kavramına detaylı bir bakış…',
        image: '/img/ip-2.png',
        mediumLink: 'https://aysedemirel.medium.com/ip-internet-protocol-8417d9f2ea5b'
      },
      {
        name: 'Hosting',
        contentFile: 'hosting',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-22',
        description:
          'Hosting nedir? Neden kullanılır? Hosting seçenekleri nedir ve farkları nedir? Yazımızda bu sorulara cevap arayacağız.',
        image: '/img/hosting.png',
        mediumLink: 'https://aysedemirel.medium.com/hosting-ce4d5fa5a20d'
      },
      {
        name: 'Domain Name (Alan Adı)',
        contentFile: 'domain-name',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-22',
        description:
          'Alan adları neden var ? IP adres ile ilişkisi ne? Web sitesi oluşturmak için illa gerekli bir şey mi? Alan adında yer alan uzantıların anlamları neler? Yazımızda bu sorulara cevap vereceğiz…',
        image: '/img/domain-name.png',
        mediumLink: 'https://aysedemirel.medium.com/domain-name-alan-ad%C4%B1-56a1746871f6'
      },
      {
        name: 'DNS(Domain Name System)',
        contentFile: 'domain-name-system',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-11',
        description: 'IP adres ezberlemeden nasıl internette gezinebildiğimizi inceleyeceğiz.',
        image: '/img/dns.png',
        mediumLink: 'https://aysedemirel.medium.com/dns-domain-name-system-c0818a0777af'
      },
      {
        name: 'Neden Interface kullanalım?',
        contentFile: 'why-should-we-use-interface',
        topic: 'OOP',
        year: 2021,
        date: '2021-05-11',
        description:
          'Bu yazımızda Java’da interface kavramını inceleyeceğiz. Nedir, ne değildir, neden kullanmalıyız sorularına cevap arayacağız.',
        image: '/img/interface.png',
        mediumLink: 'https://aysedemirel.medium.com/neden-interface-kullanal%C4%B1m-2852b276bae4'
      },
      {
        name: 'Bir web sitesinin IP adresi nasıl bulunur?',
        contentFile: 'how-find-website-ip',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-10',
        description:
          'Web sitesinin alan adını biliyorsanız, komut satırından IP adres nasıl bulunur hızlıca bakalım…',
        image: '/img/ip.png',
        mediumLink:
          'https://aysedemirel.medium.com/bir-web-sitesinin-ip-adresi-nas%C4%B1l-bulunur-8f23611ddd2b'
      },
      {
        name: 'İnternet 101 - Şifreleme ve Güvenlik',
        contentFile: 'encryption-security',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-08',
        description: 'Simetrik ve asimetrik şifreleme kavramları, en bilinen siber suçlar…',
        image: '/img/encryption.png',
        mediumLink:
          'https://aysedemirel.medium.com/i%CC%87nternet-101-%C5%9Fifreleme-ve-g%C3%BCvenlik-c5d79b6acbd9'
      },
      {
        name: 'İnternet 101- Veri nasıl iletilir?',
        contentFile: 'how-to-transfer-data',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-08',
        description:
          'Yönlendiriciler, HTML, HTTP, TCP, isteklerin gönderilme şekilleri gibi kavramların özeti…',
        image: '/img/tcp.png',
        mediumLink:
          'https://aysedemirel.medium.com/i%CC%87nternet-101-veri-nas%C4%B1l-iletilir-5553f1103e40'
      },
      {
        name: 'İnternet 101 - IP ve DNS',
        contentFile: 'ip-dns',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-08',
        description: 'IP nedir, DNS nedir ? Aralarında ilişkinin kısaca özeti…',
        image: '/img/internet2.png',
        mediumLink: 'https://aysedemirel.medium.com/i%CC%87nternet-101-ip-ve-dns-b3610244f4ed'
      },
      {
        name: 'İnternet nedir, nasıl çalışır? Sahibi kimdir?',
        contentFile: 'what-is-the-internet',
        topic: 'Internet',
        year: 2021,
        date: '2021-05-03',
        description: 'İnternet hakkında bir özet…',
        image: '/img/internet.png',
        mediumLink:
          'https://aysedemirel.medium.com/i%CC%87nternet-nedir-nas%C4%B1l-%C3%A7al%C4%B1%C5%9F%C4%B1r-sahibi-kimdir-eb2431a5f3ca'
      }
    ]
  },
  {
    year: 2020,
    articles: [
      {
        name: 'JDK Kurulum Kılavuzu',
        contentFile: 'java-jdk-installation',
        topic: 'Java',
        year: 2020,
        date: '2020-11-09',
        description: 'JDK Nedir ve Neden Kurulması Gerekir? Nasıl Kurulum Yapılır?',
        image: '/img/java.png',
        mediumLink: 'https://aysedemirel.medium.com/jdk-15-kurulumu-c02680d7d9ea'
      }
    ]
  }
];
