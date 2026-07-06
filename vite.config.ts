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
        const contents = fs.readFileSync(full, 'utf8')
        // Skip prerendered redirect stubs (meta-refresh pages) — they aren't canonical content.
        if (contents.includes('http-equiv="refresh"')) continue
        // Skip noindex pages (e.g. the unlisted /book page) — they must not be in the sitemap.
        if (/name="robots"\s+content="noindex/.test(contents)) continue
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

  // serve-handler renders /404.html for unknown paths; mirror the nested SSG page.
  const notFound = path.join(distDir, '404', 'index.html')
  if (fs.existsSync(notFound)) fs.copyFileSync(notFound, path.join(distDir, '404.html'))
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split heavy, rarely-changing deps into their own long-cache chunks so
        // an app-code edit doesn't re-bust the whole vendor bundle.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (/[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id))
            return 'react-vendor'
          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils'))
            return 'framer'
          if (id.includes('lucide-react') || id.includes('simple-icons')) return 'icons'
          return 'vendor'
        },
      },
    },
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  server: {
    // Honor a harness/host-assigned port (e.g. Claude preview) when present.
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
  preview: {
    // Hosts allowed to reach `vite preview` (e.g. behind the vaunt.co domain).
    allowedHosts: ['www.vaunt.co', 'vaunt.co'],
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
