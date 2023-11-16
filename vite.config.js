import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        // Don't minify the library
        minify: false,
        lib: {
            entry: resolve(__dirname, 'ui/index.js'),
            name: 'ui-example',
            formats: ['umd', 'es'],
            fileName: (format, entryName) => `node-red-dashboard.${format}.js`
        },
        rollupOptions: {
            // Don't rollup the Vue dependency into the build
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
