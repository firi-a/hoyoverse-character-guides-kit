import {charData} from "$lib/characterData";

export function load() {
  return {
    characters: charData.map((char) => ({
      name: char.name.toLowerCase(),
      rarity: char.rarity,
      id: char.id,
    })),
  };
}
