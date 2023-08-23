import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";
const dev = process.argv.includes("dev");
/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    paths: {
      base: dev ? "" : "/hoyoverse-character-guides-kit",
    },
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
  },

  preprocess: [mdsvex(mdsvexConfig), vitePreprocess({})],
};

export default config;
