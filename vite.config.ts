import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import fs from 'node:fs'

const DOMAIN = 'https://www.vaunt.co'

/** After SSG render, walk dist for prerendered pages and emit sitemap.xml. */
function generateSitemap() {
  const distDir = path.resolve(process.cwd(), 'dist')
  const urls: string[] = []

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        if (['assets', '.vite'].includes(entry.name)) continue
        walk(full)
      } else if (entry.name === 'index.html' || entry.name.endsWith('.html')) {
        let route = full.slice(distDir.length).replace(/\\/g, '/')
        route = route.replace(/\/index\.html$/, '').replace(/\.html$/, '')
        if (route === '') route = '/'
        if (route === '/404') continue
        if (!urls.includes(route)) urls.push(route)
      }
    }
  }

  if (!fs.existsSync(distDir)) return
  walk(distDir)
  urls.sort((a, b) => a.length - b.length)

  const today = new Date().toISOString().split('T')[0]
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url>\n    <loc>${DOMAIN}${u === '/' ? '' : u}</loc>\n    <lastmod>${today}</lastmod>\n` +
          `    <changefreq>${u === '/' ? 'weekly' : 'monthly'}</changefreq>\n    <priority>${u === '/' ? '1.0' : '0.7'}</priority>\n  </url>`,
      )
      .join('\n') +
    `\n</urlset>\n`

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml)
  // eslint-disable-next-line no-console
  console.log(`[sitemap] wrote ${urls.length} urls -> dist/sitemap.xml`)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  ssr: {
    // framer-motion ships ESM that needs bundling for the SSG render pass.
    noExternal: ['framer-motion'],
  },
  // vite-react-ssg options.
  ssgOptions: {
    dirStyle: 'nested', // /about -> about/index.html (universal clean URLs)
    formatting: 'minify',
    onFinished: () => generateSitemap(),
  },
} as Parameters<typeof defineConfig>[0])
