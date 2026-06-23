import Seo from '../lib/Seo'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" path="/404" />
      <section className="flex min-h-[78vh] items-center px-6 pt-24 pb-16">
        <div className="container-v">
          <p className="font-display text-7xl font-bold uppercase leading-none text-glow sm:text-8xl lg:text-9xl">
            SH*T
          </p>
          <h1 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-ink-secondary sm:text-3xl">
            404 Error — Looks like we lost this page
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-tertiary sm:text-lg">
            It&apos;s either hiding, never existed, or we pressed the wrong button.
            <br className="hidden sm:block" /> Either way, someone&apos;s getting fired… probably.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button to="/">Back Home</Button>
            <Button to="/contact" variant="ghost">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  )
}
