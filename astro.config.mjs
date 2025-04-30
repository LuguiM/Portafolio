// @ts-check
import { defineConfig, envField } from "astro/config"
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://luguim.github.io',
  // base: 'Portafolio',
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true
    }
  },
  experimental: {
    env: {
      schema: {
        LINK_LINKEDIN: envField.string({ context: "client", access: "public", default: "https://www.linkedin.com/in/jose-luis-muñoz-padilla-92642133b" }),
        LINK_GITHUB : envField.string({ context: "client", access: "public", default: "https://github.com/LuguiM" }),
      }
    }
  }
});