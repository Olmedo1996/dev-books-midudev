// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  env: {
    schema: {
      SHOW_BY_BUTTON: envField.boolean({ context:'server', access:'public'}),
      SCORE_API_BUTTON: envField.string({ context:'server', access:'public'})
    }
  }
});