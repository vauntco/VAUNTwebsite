import { Link } from 'react-router-dom'
import { CalendarDays, Clock, ArrowLeft, ArrowRight, Check } from 'lucide-react'
import Seo from '../lib/Seo'
import { blogPostingSchema, breadcrumb } from '../lib/schema'
import FadeIn from '../components/motion/FadeIn'
import Button from '../components/ui/Button'
import ContactSection from '../components/sections/ContactSection'
import { blogPosts } from '../data/content'

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}

export default function BlogPost({ slug }: { slug: string }) {
  const post = getPost(slug)
  if (!post) return null
  const more = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)
  const published = (() => {
    const d = new Date(post.date)
    return Number.isNaN(d.getTime()) ? undefined : d.toISOString()
  })()

  return (
    <>
      <Seo
        title={post.title}
        path={`/blog/${post.slug}`}
        description={post.excerpt}
        ogType="article"
        ogImage={`https://www.vaunt.co${post.cover}`}
        ogImageAlt={post.title}
        article={{ published, modified: published, author: post.author }}
        jsonLd={[
          blogPostingSchema(post),
          breadcrumb([
            { name: 'Resources', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="relative overflow-hidden pb-4 pt-32 sm:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[360px] w-[760px] -translate-x-1/2 bg-glow-blob opacity-20 blur-3xl"
        />
        <div className="container-v relative">
          <div className="mx-auto max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-white">
              <ArrowLeft size={15} /> All Resources
            </Link>

            <FadeIn className="mt-6">
              <span className="eyebrow">Resources</span>
              <h1 className="text-hero mt-4 font-display font-bold" style={{ fontSize: 'clamp(2rem,4.5vw,3.4rem)', lineHeight: 1.08 }}>
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-tertiary">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={14} /> {post.date}
                </span>
                <span>By {post.author}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} /> {post.readMins} min read
                </span>
              </div>
            </FadeIn>

            <FadeIn className="mt-8 overflow-hidden rounded-2xl border border-[var(--glass-border)] shadow-glow" delay={0.05}>
              <img src={post.cover} alt={post.title} className="block w-full" />
            </FadeIn>

            <div className="mt-10 space-y-5 text-[1.0625rem] leading-relaxed text-ink-secondary">
              {post.body.map((block, i) => {
                if (block.type === 'h') {
                  return (
                    <h2 key={i} className="!mt-10 font-display text-2xl font-bold text-white">
                      {block.text}
                    </h2>
                  )
                }
                if (block.type === 'ul') {
                  return (
                    <ul key={i} className="space-y-2.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(29,155,240,0.15)] text-brand-bright">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
                }
                return (
                  <p key={i}>{block.text}</p>
                )
              })}
            </div>

            <div className="mt-12 flex flex-wrap gap-4 border-t border-[var(--hairline)] pt-8">
              <Button to="/contact">
                Start a Project <ArrowRight size={16} />
              </Button>
              <Button to="/work" variant="ghost">
                See Our Work
              </Button>
              <Button to="/web-design-michigan" variant="ghost">
                Website Design in Michigan
              </Button>
            </div>
          </div>

          {/* more resources */}
          <div className="mx-auto mt-16 max-w-5xl">
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-ink-tertiary">More resources</h3>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {more.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="glass glow-hover group flex h-full flex-col overflow-hidden">
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs text-ink-tertiary">{p.date}</span>
                    <h4 className="mt-2 font-display text-base font-semibold leading-snug text-white">{p.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <ContactSection />
    </>
  )
}
