import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import FadeIn from '../motion/FadeIn'
import { blogPosts } from '../../data/content'

export default function BlogPreview() {
  return (
    <section id="blog" className="section-pad">
      <div className="container-v">
        <SectionHeading
          eyebrow="Blog"
          title="Expert Tips & Resources"
          intro="Explore the latest marketing strategies, trends, and insights to help you stay ahead of the competition and grow your business."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.07}>
              <Link to="/blog" className="glass glow-hover group flex h-full flex-col p-6">
                <div
                  className="mb-5 aspect-[16/9] w-full rounded-xl border border-[var(--hairline)]"
                  style={{
                    background: `radial-gradient(120% 120% at 20% 0%, hsla(${205 + i * 14},80%,55%,0.25) 0%, transparent 55%), linear-gradient(160deg,#11151c,#0b0e14)`,
                  }}
                />
                <span className="inline-flex items-center gap-1.5 text-xs text-ink-tertiary">
                  <CalendarDays size={13} /> {post.date} · {post.author}
                </span>
                <h3 className="mt-3 flex-1 font-display text-lg font-semibold leading-snug text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary line-clamp-3">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-bright">
                  Read more
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
