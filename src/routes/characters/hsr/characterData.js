const charData = [
  { name: "Arlan", rarity: 0 },
  { name: "Asta", rarity: 0 },
  { name: "Bailu", rarity: 1 },
  { name: "Blade", rarity: 1 },
  { name: "Bronya", rarity: 1 },
  { name: "Clara", rarity: 1 },
  { name: "Dan Heng", rarity: 0 },
  { name: "Fu Xuan", rarity: 1 },
  { name: "Gepard", rarity: 1 },
  { name: "Himeko", rarity: 1,},
  { name: "Hook", rarity: 0 },
  { name: "Herta", rarity: 0 },
  { name: "Inbibitor Lunae", rarity: 1 },
  { name: "Jing Yuan", rarity: 1 },
  { name: "Kafka", rarity: 1 },
  { name: "Luka", rarity: 0 },
  { name: "Luocha", rarity: 1 },
  { name: "Lynx", rarity: 0 },
  { name: "March 7th", rarity: 0 },
  { name: "Trailblazer", rarity: 1 },
  { name: "Natasha", rarity: 0 },
  { name: "Pela", rarity: 0 },
  { name: "Qingque", rarity: 0 },
  { name: "Sampo", rarity: 0 },
  { name: "Seele", rarity: 1 },
  { name: "Serval", rarity: 0 },
  { name: "Silver Wolf", rarity: 1 },
  { name: "Sushang", rarity: 0 },
  { name: "Tingyun", rarity: 0 },
  { name: "Welt", rarity: 1 },
  { name: "Yanqing", rarity: 1 },
  { name: "Yukong", rarity: 0 },
  { name: "Guinaifen", rarity: 0},
  { name: "Topaz", rarity: 1},
  { name: "Jingliu", rarity: 1}
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

export default charData;
