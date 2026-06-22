import Seo from '../lib/Seo'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" path="/404" />
      <section className="flex min-h-[70vh] items-center justify-center px-6 pt-20 text-center">
        <div>
          <p className="font-display text-7xl font-bold text-glow sm:text-8xl">404</p>
          <h1 className="mt-4 font-display text-2xl font-bold text-white">This page drifted off into the starfield.</h1>
          <p className="mx-auto mt-3 max-w-md text-ink-secondary">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/">Back Home</Button>
            <Button to="/contact" variant="ghost">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  )
}
