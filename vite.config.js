import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: './resources',
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'ui/index.js'),
            name: 'UIExample',
            // the proper extensions will be added
            fileName: 'ui-example',
          },
          rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
              // Provide global variables to use in the UMD build
              // for externalized deps
              globals: {
                vue: 'Vue',
              },
            },
          }
    },
    base: '/dashboard/'
})
