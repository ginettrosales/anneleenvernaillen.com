import { ViteSSG } from 'vite-ssg'
import 'virtual:windi-devtools'
import 'virtual:windi.css'
import 'animate.css/animate.compat.css'
import '@/css/markdown.css'
import '@/css/main.css'
import '@/css/prose.css'
import { createHead } from '@vueuse/head'
import NProgress from 'nprogress'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import routes from '~pages'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css'
library.add(
  faInstagram,
  faLinkedin,
)
// Prevent fontawesome from adding its CSS since we did it manually above:
config.autoAddCss = false

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

export const createApp = ViteSSG(App, { routes, scrollBehavior }, ({ app, isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from) => {
      if (to.path !== from.path)
        NProgress.start()
    })
    router.afterEach(() => {
      NProgress.done()
    })
  }
  app.use(head)
  app.component('FontAwesomeIcon', FontAwesomeIcon)
})
