import charData from "./routes/characters/hsr/characterData";
import { readable } from "svelte/store";

export function load() {
  return {
    characters: charData.map((char) => ({
      slug: char.name.toLowerCase(),
      name: char.name,
      id: char.id,
      intro: char.intro,
      what_they_do: char.what_they_do,
      skill: char.skill,
      ultimate: char.ultimate,
      talent: char.talent,
      traces: char.traces,
      wrap_up: char.wrap_up,
      skill_priority: char.skill_priority,
      eidolons: char.eidolons,
      relics: char.relics,
      stat_priority: char.stat_priority,
      light_cones: char.light_cones,
      team_comps: char.team_comps,
      outro: char.outro,
    })),
  };
}
