import adapter from "@sveltejs/adapter-static";
const dev = process.argv.includes("dev");
/** @type {import('@sveltejs/kit').Config} */
const config = {
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
};

export default config;
