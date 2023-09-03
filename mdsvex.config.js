import { defineMDSveXConfig as defineConfig } from "mdsvex";
const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  layout:{
    review: "./src/components/reviewLayout.svelte"
  },

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
