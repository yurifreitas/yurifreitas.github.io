import type { Category, T } from "./types";

export const categoryLabel: Record<Category, T> = {
  ai: { pt: "IA & agentes", en: "AI & agents", es: "IA y agentes" },
  research: { pt: "Pesquisa & competições", en: "Research & competitions", es: "Investigación y competencias" },
  science: { pt: "Ciência & matemática", en: "Science & math", es: "Ciencia y matemática" },
  climate: { pt: "Clima, geo & cívico", en: "Climate, geo & civic", es: "Clima, geo y cívico" },
  finance: { pt: "Quant & finanças", en: "Quant & finance", es: "Quant y finanzas" },
  a11y: { pt: "Acessibilidade", en: "Accessibility", es: "Accesibilidad" },
  creative: { pt: "Áudio, jogos & visual", en: "Audio, games & visual", es: "Audio, juegos y visual" },
  product: { pt: "Produto & ferramentas", en: "Product & tools", es: "Producto y herramientas" },
};

/** Hue OKLCH por categoria — usado só em pontos e bordas finas, nunca em texto. */
export const categoryHue: Record<Category, number> = {
  ai: 72,
  research: 30,
  science: 290,
  climate: 190,
  finance: 150,
  a11y: 340,
  creative: 250,
  product: 100,
};
