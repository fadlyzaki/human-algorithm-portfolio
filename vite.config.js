import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: 'pre', ...mdx({
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
        rehypePlugins: [rehypeSlug]
      })
    },
    react()
  ],
  build: {
    sourcemap: false,
    assetsInlineLimit: 4096, // Inline assets smaller than 4KB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/framer-motion')) {
            return 'animations'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons'
          }
          if (
            id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-router') ||
            id.includes('node_modules/scheduler') ||
            id.includes('node_modules/react-helmet-async') ||
            id.includes('node_modules/react-fast-compare') ||
            id.includes('node_modules/invariant') ||
            id.includes('node_modules/shallowequal')
          ) {
            return 'vendor'
          }
        }
      }
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
    globals: true
  }
})
