export const charData = [
  { id: 1, name: "Arlan", rarity: 0 },
  { id: 2, name: "Asta", rarity: 0 },
  { id: 3, name: "Bailu", rarity: 1, review: 'This is Bailu' },
  { id: 4, name: "Blade", rarity: 1, review: ""},
  { id: 5, name: "Bronya", rarity: 1 },
  { id: 6, name: "Clara", rarity: 1 },
  { id: 7, name: "Dan Heng", rarity: 0 },
  { id: 8, name: "Fu Xuan", rarity: 1 },
  { id: 9, name: "Gepard", rarity: 1 },
  { id: 10, name: "Himeko", rarity: 1,},
  { id: 11, name: "Hook", rarity: 0 },
  { id: 12, name: "Herta", rarity: 0 },
  { id: 13, name: "Inbibitor Lunae", rarity: 1 },
  { id: 14, name: "Jing Yuan", rarity: 1 },
  { id: 15, name: "Kafka", rarity: 1 },
  { id: 16, name: "Luka", rarity: 0 },
  { id: 17, name: "Luocha", rarity: 1 },
  { id: 18, name: "Lynx", rarity: 0 },
  { id: 19, name: "March 7th", rarity: 0 },
  { id: 20, name: "Trailblazer", rarity: 1 },
  { id: 21, name: "Natasha", rarity: 0 },
  { id: 22, name: "Pela", rarity: 0 },
  { id: 23, name: "Qingque", rarity: 0 },
  { id: 24, name: "Sampo", rarity: 0 },
  { id: 25, name: "Seele", rarity: 1 },
  { id: 26, name: "Serval", rarity: 0 },
  { id: 27, name: "Silver Wolf", rarity: 1 },
  { id: 28, name: "Sushang", rarity: 0 },
  { id: 29, name: "Tingyun", rarity: 0 },
  { id: 30, name: "Welt", rarity: 1 },
  { id: 31, name: "Yanqing", rarity: 1 },
  { id: 32, name: "Yukong", rarity: 0 },
  { id: 33, name: "Guinaifen", rarity: 0},
  { id: 34, name: "Topaz", rarity: 1},
  { id: 35, name: "Jingliu", rarity: 1}
  // { id: 33, name: "Placeholder" },
  // { id: 34, name: "Placeholder" },
  // { id: 35, name: "Placeholder" },
  // { id: 36, name: "Placeholder" },
];

charData.sort(function (a,b){
  if (a.name < b.name){
    return -1;
  }
  if (a.name > b.name){
    return 1;
  }
  return 0
});
