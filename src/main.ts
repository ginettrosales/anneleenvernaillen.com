import { ViteSSG } from 'vite-ssg'
import 'virtual:windi-devtools'
import 'virtual:windi.css'
import 'animate.css/animate.compat.css'
import '@/css/markdown.css'
import '@/css/main.css'
import '@/css/prose.css'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import routes from '~pages'

const scrollBehavior = (
  _to: unknown,
  _from: unknown,
  _savedPosition: unknown,
) => {
  return { top: 0 }
}
const head = createHead({
  titleTemplate: '%s | Anneleen Vernaillen',
})

export const createApp = ViteSSG(App, { routes, scrollBehavior }, ({ app }) => {
  app.use(head)
})
