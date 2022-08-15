import { defineConfig } from 'vite'
import { resolve } from 'path'
import { URL, fileURLToPath } from 'url'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-vue-markdown'
import LinkAttributes from 'markdown-it-link-attributes'
import Anchor from 'markdown-it-anchor'
import Prism from 'markdown-it-prism'
import generateSitemap from 'vite-plugin-pages-sitemap'
import fs from 'fs-extra'
import matter from 'gray-matter'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      wrapperComponent: 'markdown-wrapper',
      markdownItSetup(md) {
        md.use(Anchor)
        md.use(Prism)
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
      headEnabled: true,
    }),
    Pages({
      dirs: [
        { dir: 'src/pages', baseRoute: '' },
        { dir: 'content/en', baseRoute: '' },
      ],
      extensions: ['vue', 'md'],
      exclude: ['**/components/*.vue'],
      /*onRoutesGenerated: routes =>
        generateSitemap({
          hostname: 'https://anneleenvernaillen.com/',
          routes,
        }),*/
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))
        const md = fs.readFileSync(path, 'utf-8')
        const { data } = matter(md)
        route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        return route
      },
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head', 'vitest', 'vue-i18n'],
      dts: true, // generate TypeScript declaration
    }),
    Components({
      extensions: ['vue', 'md', 'svg', 'mock'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.svg$/, /\.mock$/],
    }),
    WindiCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    format: 'cjs',
  },
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /vue-i18n/],
  },
})
