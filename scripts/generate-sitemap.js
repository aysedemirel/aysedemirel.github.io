import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getBlogPosts() {
  try {
    const articlesDir = path.resolve(__dirname, '../public/content/articles/en');

    if (!fs.existsSync(articlesDir)) {
      console.warn('⚠️  Blog directory not found:', articlesDir);
      return [];
    }

    const files = fs.readdirSync(articlesDir);
    const mdFiles = files.filter((file) => file.endsWith('.md'));

    console.log(`📚 Found ${mdFiles.length} blog posts`);

    return mdFiles.map((file) => {
      const slug = file.replace('.md', '');
      const filePath = path.join(articlesDir, file);
      const stats = fs.statSync(filePath);
      const lastModified = stats.mtime.toISOString().split('T')[0];

      return {
        slug,
        date: lastModified
      };
    });
  } catch (error) {
    console.error('❌ Error reading blog posts:', error);
    return [];
  }
}

const blogPosts = getBlogPosts();

const baseUrl = 'https://aysedemirel.github.io';
const today = new Date().toISOString().split('T')[0];

const pages = [
  { url: '/', changefreq: 'weekly', priority: '1.0', lastmod: today },
  { url: '/#about', changefreq: 'monthly', priority: '0.8', lastmod: today },
  { url: '/#skills', changefreq: 'monthly', priority: '0.7', lastmod: today },
  { url: '/#experience', changefreq: 'monthly', priority: '0.8', lastmod: today },
  { url: '/#education', changefreq: 'yearly', priority: '0.7', lastmod: '2025-01-01' },
  { url: '/#projects', changefreq: 'weekly', priority: '0.9', lastmod: today },
  { url: '/#contact', changefreq: 'monthly', priority: '0.6', lastmod: today },
  { url: '/#/blog', changefreq: 'daily', priority: '0.9', lastmod: today },
  ...blogPosts.map((post) => ({
    url: `/#/blog/${post.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: post.date
  }))
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log(`\n✅ Sitemap generated with ${pages.length} pages!`);
console.log(`📄 Location: public/sitemap.xml`);
console.log(`\nBlog posts:`);
blogPosts.forEach((post) => {
  console.log(`  - ${post.slug} (${post.date})`);
});
