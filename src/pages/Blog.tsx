import { Link } from 'react-router-dom'
import { CalendarDays, ArrowUpRight } from 'lucide-react'
import Seo from '../lib/Seo'
import { webPage, breadcrumb } from '../lib/schema'
import PageHero from '../components/layout/PageHero'
import FadeIn from '../components/motion/FadeIn'
import { blogPosts } from '../data/content'

export default function Blog() {
  return (
    <>
      <Seo
        title="Resources — Marketing & Web Design Tips"
        path="/blog"
        description="Web design, SEO, and marketing strategies for Michigan small businesses. Explore the latest insights to stay ahead of the competition and grow your business."
        jsonLd={[
          webPage({
            title: 'Resources — Marketing & Web Design Tips | VAUNT',
            description:
              'Web design, SEO, and marketing strategies for Michigan small businesses.',
            path: '/blog',
            type: 'CollectionPage',
          }),
          breadcrumb([{ name: 'Resources', path: '/blog' }]),
        ]}
      />
      <PageHero
        eyebrow="Resources"
        title={<>Expert Tips &amp; <span className="text-glow">Insights</span></>}
        intro="Explore the latest marketing strategies, trends, and insights to help you stay ahead of the competition and grow your business."
      />
      <section className="section-pad pt-6">
        <div className="container-v">
          <div className="grid gap-5 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={(i % 3) * 0.07} className="h-full">
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
                    <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-white">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-bright">
                      Read more
                      <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
