export const LOCALES = ["pt", "en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

/** Texto traduzido: toda string visível passa por aqui. */
export type T = Record<Locale, string>;

export const CATEGORIES = ["ai", "research", "science", "climate", "finance", "a11y", "creative", "product"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Ranking = {
  id: string;
  platform: "CrunchDAO" | "Kaggle";
  competition: string;
  host: string;
  /** posição numérica; null quando o resultado não é uma colocação (ex.: em andamento) */
  place: number | null;
  /** total de participantes, quando conhecido — alimenta o percentil */
  field?: number;
  placeLabel: T;
  metric: T;
  summary: T;
  date: string;
  status: "final" | "live";
  highlight?: boolean;
};

/** Projeto público: tem card, link e detalhe. */
export type Project = {
  kind: "public";
  id: string;
  name: string;
  year: number;
  category: Category;
  tagline: T;
  description: T;
  facts: T[];
  stack: string[];
  repo: string;
  live?: string;
  featured?: boolean;
};

/** Projeto privado ou local: só é comentado — uma linha, sem link. */
export type Mention = {
  kind: "mention";
  id: string;
  name: string;
  year: number;
  category: Category;
  line: T;
  stack: string[];
};

export type Work = Project | Mention;

export type Job = {
  company: string;
  client?: string;
  role: T;
  period: string;
  highlights: T[];
};
