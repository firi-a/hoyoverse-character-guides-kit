import { defineMDSveXConfig as defineConfig } from "mdsvex";
const dirname = path.resolve(
  fileURLToPath(import.meta.url),
  "./characterScripts"
);
const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
