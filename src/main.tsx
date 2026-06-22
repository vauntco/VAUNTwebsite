import './index.css'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App'

// vite-react-ssg statically prerenders every route to real HTML, then
// hydrates on the client. Per-page <Head> handles titles/meta (Spec §15).
export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
})
