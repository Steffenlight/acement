import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      tailwindcss(),
      svgr({
        svgrOptions: {
          typescript: false,
        },
      }),
      react(),
    ],
    // Must be absolute. With './' the bundle is requested relative to the
    // current path, so on a two-segment route such as /products/x or
    // /blog/x the browser asks for /products/index-*.js, the SPA rewrite
    // answers with index.html, and the page renders blank.
    base: '/',
    build: {
      // Alloy ships this project unminified for prototype editing. In
      // production it means shipping and parsing ~1.3MB of JS.
      minify: 'esbuild',
      cssMinify: true,
      sourcemap: false,
      target: 'esnext',
      rollupOptions: {
        treeshake: false,
        output: {
          manualChunks: undefined,
          inlineDynamicImports: true,
        },
      },
      reportCompressedSize: false,
      chunkSizeWarningLimit: 10000,
      assetsDir: '',
    },
    esbuild: {
      target: 'esnext',
    },
    optimizeDeps: {
      force: true,
      include: ['react', 'react-dom'],
    },
  }
})
