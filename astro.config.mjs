import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  experimental: {
    serverIslands: true,
  },
  output: "server",
  adapter: vercel()
});