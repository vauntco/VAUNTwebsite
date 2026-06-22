import Seo from '../lib/Seo'
import PageHero from '../components/layout/PageHero'
import FadeIn from '../components/motion/FadeIn'
import { CalendarDays } from 'lucide-react'
import { blogPosts } from '../data/content'

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog — Expert Tips & Resources"
        path="/blog"
        description="Explore the latest marketing strategies, trends, and insights to help you stay ahead of the competition and grow your business."
      />
      <PageHero
        eyebrow="Blog"
        title={<>Expert Tips &amp; <span className="text-glow">Resources</span></>}
        intro="Explore the latest marketing strategies, trends, and insights to help you stay ahead of the competition and grow your business."
      />
      <section className="section-pad pt-6">
        <div className="container-v">
          <div className="grid gap-5 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={(i % 3) * 0.07}>
                <article className="glass glow-hover flex h-full flex-col p-6">
                  <div
                    className="mb-5 aspect-[16/9] w-full rounded-xl border border-[var(--hairline)]"
                    style={{
                      background: `radial-gradient(120% 120% at 20% 0%, hsla(${205 + i * 14},80%,55%,0.25) 0%, transparent 55%), linear-gradient(160deg,#11151c,#0b0e14)`,
                    }}
                  />
                  <span className="inline-flex items-center gap-1.5 text-xs text-ink-tertiary">
                    <CalendarDays size={13} /> {post.date} · {post.author}
                  </span>
                  <h2 className="mt-3 flex-1 font-display text-lg font-semibold leading-snug text-white">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{post.excerpt}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
