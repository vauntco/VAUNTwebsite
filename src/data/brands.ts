import {
  siWordpress,
  siWebflow,
  siFigma,
  siShopify,
  siInstagram,
  siTiktok,
  siZapier,
  siFacebook,
  siClickup,
  siMailchimp,
  siN8n,
  siMake,
  siGoogle,
  siGoogleads,
  siMeta,
  siYelp,
  siNextdoor,
  siYoutube,
  siGoogleanalytics,
  siGooglesearchconsole,
  siVite,
  siNextdotjs,
  siReplit,
  siReact,
} from 'simple-icons'

export interface Brand {
  name: string
  /** SVG path data (24x24 viewBox unless `viewBox` overrides). */
  path?: string
  viewBox?: string
  /** Two-letter monogram fallback when no glyph exists. */
  monogram?: string
}

// Adobe / OpenAI / LinkedIn were removed from simple-icons (trademark); inline them.
const OPENAI_PATH =
  'M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z'

const LINKEDIN_PATH =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

// Spec §12 — tech stack marquee, in order.
export const techBrands: Brand[] = [
  { name: 'WordPress', path: siWordpress.path },
  { name: 'Webflow', path: siWebflow.path },
  { name: 'Figma', path: siFigma.path },
  { name: 'Photoshop', monogram: 'Ps' },
  { name: 'Illustrator', monogram: 'Ai' },
  { name: 'ChatGPT', path: OPENAI_PATH, viewBox: '0 0 256 260' },
  { name: 'n8n', path: siN8n.path },
  { name: 'GoHighLevel', monogram: 'GHL' },
  { name: 'Make', path: siMake.path },
  { name: 'ClickUp', path: siClickup.path },
  { name: 'Constant Contact', monogram: 'CC' },
  { name: 'Shopify', path: siShopify.path },
  { name: 'LinkedIn', path: LINKEDIN_PATH },
  { name: 'Instagram', path: siInstagram.path },
  { name: 'TikTok', path: siTiktok.path },
  { name: 'Zapier', path: siZapier.path },
  { name: 'Facebook', path: siFacebook.path },
]

/**
 * Named brand glyphs reused across service pages (channel / platform logos).
 * Rendered monochrome by <BrandGlyph> so they stay cohesive on the dark UI.
 */
export const brand: Record<string, Brand> = {
  google: { name: 'Google', path: siGoogle.path },
  googleAds: { name: 'Google Ads', path: siGoogleads.path },
  googleLSA: { name: 'Google LSA', path: siGoogle.path },
  googleBusiness: { name: 'Google Business', path: siGoogle.path },
  searchConsole: { name: 'Search Console', path: siGooglesearchconsole.path },
  analytics: { name: 'Analytics', path: siGoogleanalytics.path },
  meta: { name: 'Meta', path: siMeta.path },
  facebook: { name: 'Facebook', path: siFacebook.path },
  instagram: { name: 'Instagram', path: siInstagram.path },
  tiktok: { name: 'TikTok', path: siTiktok.path },
  youtube: { name: 'YouTube', path: siYoutube.path },
  linkedin: { name: 'LinkedIn', path: LINKEDIN_PATH },
  yelp: { name: 'Yelp', path: siYelp.path },
  nextdoor: { name: 'Nextdoor', path: siNextdoor.path },
  wordpress: { name: 'WordPress', path: siWordpress.path },
  webflow: { name: 'Webflow', path: siWebflow.path },
  shopify: { name: 'Shopify', path: siShopify.path },
  figma: { name: 'Figma', path: siFigma.path },
  vite: { name: 'Vite', path: siVite.path },
  nextjs: { name: 'Next.js', path: siNextdotjs.path },
  react: { name: 'React', path: siReact.path },
  replit: { name: 'Replit', path: siReplit.path },
  lovable: { name: 'Lovable', monogram: 'Lv' },
  photoshop: { name: 'Photoshop', monogram: 'Ps' },
  illustrator: { name: 'Illustrator', monogram: 'Ai' },
  chatgpt: { name: 'ChatGPT', path: OPENAI_PATH, viewBox: '0 0 256 260' },
  n8n: { name: 'n8n', path: siN8n.path },
  make: { name: 'Make', path: siMake.path },
  zapier: { name: 'Zapier', path: siZapier.path },
  clickup: { name: 'ClickUp', path: siClickup.path },
  mailchimp: { name: 'Mailchimp', path: siMailchimp.path },
  ghl: { name: 'GoHighLevel', monogram: 'GHL' },
}
