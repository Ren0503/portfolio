import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4231',
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  })]
});