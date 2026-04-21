export const PLANT_KEYWORDS = [
  "plant",
  "plants",
  "tree",
  "trees",
  "forest",
  "botany",
  "tropical",
  "soil",
  "carbon",
  "biodiversity",
  "ecosystem",
  "climate",
  "horticulture",
  "orchid",
  "agriculture",
];

export function isPlantArticle(text: string) {
  const lower = text.toLowerCase();
  return PLANT_KEYWORDS.some((word) => lower.includes(word));
}
