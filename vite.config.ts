import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   envDir: './src/config',
//   envPrefix: 'M',
// })

export default defineConfig(async () => {
  const config = {
    plugins: [react()],
    envDir: './src/config',
    envPrefix: 'M',
  }

  return {
    ...config,
    server: {
      watch: {
        usePolling: true,
      },
    },
  }
})
