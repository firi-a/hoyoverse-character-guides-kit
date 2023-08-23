import charData from "./characterData";

export function load() {
  return {
    characters: charData.map((char) => ({
      name: char.name.toLowerCase(),
    })),
  };
}
