import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import FadeIn from '../motion/FadeIn'
import Button from '../ui/Button'
import { blogPosts } from '../../data/content'

export default function BlogPreview() {
  const latest = blogPosts.slice(0, 3)
  return (
    <section id="blog" className="section-pad">
      <div className="container-v">
        <SectionHeading
          eyebrow="Resources"
          title="Expert Tips & Insights"
          intro="Explore the latest marketing strategies, trends, and insights to help you stay ahead of the competition and grow your business."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {latest.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.07} className="h-full">
              <Link to={`/blog/${post.slug}`} className="glass glow-hover group flex h-full flex-col overflow-hidden">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex items-center gap-1.5 text-xs text-ink-tertiary">
                    <CalendarDays size={13} /> {post.date} · {post.readMins} min read
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-white">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary line-clamp-3">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-bright">
                    Read more
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 flex justify-center" delay={0.1}>
          <Button to="/blog" variant="ghost">
            View All Resources <ArrowRight size={17} />
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
