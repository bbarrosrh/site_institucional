import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import path from "path";
import { sanityConfig } from "./src/sanity/config";

export default defineConfig({
  site: "https://www.bbarros.com.br",
  output: "server",
  adapter: vercel(),
  integrations: [
    react(),
    sanity({
      ...sanityConfig,
      studioBasePath: "/studio",
    }),
    sitemap({
      filter: (page) => !page.includes("/studio") && !page.includes("/404"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(new URL(".", import.meta.url).pathname, "./src"),
      },
    },
  },
});
