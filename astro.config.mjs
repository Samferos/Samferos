// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    locales: ["fr", "en", "pt-pt"],
    defaultLocale: "en",
    fallback: { "fr": "en", "pt-pt": "en" }
  },
  site: "https://samferos.github.io",
  base: "Samferos",
  trailingSlash: "always"
});