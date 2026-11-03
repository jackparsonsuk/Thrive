import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { mentalStrengthClubSeo } from './src/seo/mentalStrengthClub'

const siteUrl = 'https://www.thrivecollectiveexeter.co.uk'

interface PageSeo {
  path: string
  title: string
  description: string
  keywords: string
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
}

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Link-preview bots (WhatsApp, Facebook, etc.) don't run JavaScript, so they only ever see
// index.html. This writes a copy per page with that page's tags baked in; Vercel serves it
// for the page's URL before falling back to the SPA rewrite. The SEO component then updates
// these same tags in place as the visitor navigates.
const prerenderSeo = (pages: PageSeo[]): Plugin => ({
  name: 'prerender-seo',
  apply: 'build',
  enforce: 'post',
  generateBundle(_, bundle) {
    const index = bundle['index.html']
    if (!index || index.type !== 'asset') return
    const html = String(index.source)

    for (const page of pages) {
      const title = `${page.title} | Thrive Collective`
      const url = `${siteUrl}${page.path}`
      const image = `${siteUrl}${page.image}`
      const meta = (attr: string, key: string, content: string | number) =>
        `<meta ${attr}="${key}" content="${escapeAttr(String(content))}" />`

      const tags = [
        `<title>${escapeAttr(title)}</title>`,
        meta('name', 'description', page.description),
        meta('name', 'keywords', page.keywords),
        `<link rel="canonical" href="${url}" />`,
        meta('property', 'og:type', 'website'),
        meta('property', 'og:url', url),
        meta('property', 'og:title', title),
        meta('property', 'og:description', page.description),
        meta('property', 'og:site_name', 'Thrive Collective'),
        meta('property', 'og:locale', 'en_GB'),
        meta('property', 'og:image', image),
        meta('property', 'og:image:width', page.imageWidth),
        meta('property', 'og:image:height', page.imageHeight),
        meta('property', 'og:image:alt', page.imageAlt),
        meta('property', 'twitter:card', 'summary_large_image'),
        meta('property', 'twitter:url', url),
        meta('property', 'twitter:title', title),
        meta('property', 'twitter:description', page.description),
        meta('property', 'twitter:image', image),
      ].join('\n    ')

      const pageHtml = html
        .replace(/\s*<title>[\s\S]*?<\/title>/, '')
        .replace(/\s*<meta (name="(description|keywords)"|property="og:[^"]*")[^>]*>/g, '')
        .replace(/\s*<\/head>/, `\n    ${tags}\n  </head>`)

      this.emitFile({ type: 'asset', fileName: `${page.path.slice(1)}/index.html`, source: pageHtml })
    }
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), prerenderSeo([mentalStrengthClubSeo])],
})
