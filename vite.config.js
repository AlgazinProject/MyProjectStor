import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  base: '', // ИСПРАВЛЕНО: Этот параметр делает все пути относительными, убирая белый экран на любом хостинге!
})