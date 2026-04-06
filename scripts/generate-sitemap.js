import { readFileSync, readdirSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE_URL = 'https://uetistack.dev'
const postsDir = join(__dirname, '../src/posts')
const outputPath = join(__dirname, '../public/sitemap.xml')

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.5', changefreq: 'monthly' },
]

const postFiles = readdirSync(postsDir).filter((f) => f.endsWith('.md'))

const postEntries = postFiles
  .map((file) => {
    const raw = readFileSync(join(postsDir, file), 'utf-8')
    const { data } = matter(raw)
    return data
  })
  .filter((data) => data.published !== false && data.slug && data.date)
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .map((data) => ({
    url: `/post/${data.slug}`,
    lastmod: data.date,
    priority: '0.8',
    changefreq: 'monthly',
  }))

const allEntries = [...staticPages, ...postEntries]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (entry) => `  <url>
    <loc>${SITE_URL}${entry.url}</loc>${entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ''}
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

writeFileSync(outputPath, xml, 'utf-8')
console.log(`sitemap.xml gerado com ${allEntries.length} entradas.`)
