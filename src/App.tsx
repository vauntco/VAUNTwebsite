import type { RouteRecord } from 'vite-react-ssg'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Portfolio from './pages/Portfolio'
import Vms from './pages/Vms'
import Blog from './pages/Blog'
import TestimonialsPage from './pages/TestimonialsPage'
import Work from './pages/Work'
import Partner from './pages/Partner'
import Contact from './pages/Contact'
import { Terms, Privacy } from './pages/Legal'
import NotFound from './pages/NotFound'
import { services } from './data/services'

// One explicit, prerendered route per service (Spec §6 — 10 detail pages).
const serviceRoutes: RouteRecord[] = services.map((s) => ({
  path: `services/${s.slug}`,
  element: <ServiceDetail slug={s.slug} />,
}))

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <ServicesPage /> },
      ...serviceRoutes,
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'vms', element: <Vms /> },
      { path: 'blog', element: <Blog /> },
      { path: 'testimonials', element: <TestimonialsPage /> },
      { path: 'work', element: <Work /> },
      { path: 'partner-program', element: <Partner /> },
      { path: 'contact', element: <Contact /> },
      { path: 'terms', element: <Terms /> },
      { path: 'privacy', element: <Privacy /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
