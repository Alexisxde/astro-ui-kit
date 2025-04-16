// @ts-check
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import addClasses from "rehype-add-classes"

import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [
      react(),
      mdx({
          syntaxHighlight: "shiki",
          shikiConfig: { theme: "catppuccin-macchiato" },
          rehypePlugins: [
              [
                  addClasses,
                  {
                      h1: "text-4xl font-bold",
                      h2: "text-3xl font-bold !my-7",
                      h3: "text-2xl font-bold",
                      h4: "text-xl font-bold",
                      h5: "text-lg font-bold",
                      h6: "text-base font-bold",
                      p: "text-sm !my-2"
                  }
              ]
          ]
      })
	],

  trailingSlash: "never",
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
  adapter: vercel()
})