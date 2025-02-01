import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
    , tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // Make the server accessible externally
    port: 3000, // You can set any port
  },
})
