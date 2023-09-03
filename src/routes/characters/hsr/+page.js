import charData from "./characterData";
import {base} from "$app/paths"

export function load() {
  return {
    characters: charData.map((char) => ({
      name: char.name.toLowerCase(),
      rarity: char.rarity,
    })),
  };
}
