import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://mckenzi84.github.io',
  base: '/Portfolio/',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
})
