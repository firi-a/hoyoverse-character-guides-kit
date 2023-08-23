import charData from "./characterData";

export function load() {
  return {
    summaries: charData.map((post) => ({
      slug: post.name.toLowerCase(),
      title: post.name,
      id: post.id,
    })),
  };
}
