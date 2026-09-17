import type { T } from "./types";

export type Writing = {
  id: string;
  kind: "article" | "post";
  title: string;
  lang: "pt" | "en";
  summary: T;
  meta: T;
  href: string;
};

const post = (id: string) => `https://www.linkedin.com/feed/update/urn:li:activity:${id}/`;

export const writing: Writing[] = [
  {
    id: "yachay-article",
    kind: "article",
    lang: "en",
    title: "Yachay: an atlas that has to say where it stops",
    summary: {
      pt: "Por que um atlas genômico precisa declarar onde a evidência acaba — e como isso vira regra de código.",
      en: "Why a genomic atlas must declare where the evidence ends — and how that becomes a code rule.",
      es: "Por qué un atlas genómico debe declarar dónde termina la evidencia — y cómo eso se vuelve regla de código.",
    },
    meta: { pt: "Artigo · 6 min", en: "Article · 6 min", es: "Artículo · 6 min" },
    href: "https://www.linkedin.com/pulse/yachay-atlas-has-say-where-stops-yuri-freitas-p0juf",
  },
  {
    id: "lhc",
    kind: "article",
    lang: "pt",
    title: "Análise de Eventos do LHC: Investigação de Discrepâncias Estatísticas",
    summary: {
      pt: "Testes estatísticos e redução de dimensionalidade sobre colisões reais do ATLAS.",
      en: "Statistical tests and dimensionality reduction on real ATLAS collisions.",
      es: "Pruebas estadísticas y reducción de dimensionalidad sobre colisiones reales del ATLAS.",
    },
    meta: { pt: "Artigo · 8 min", en: "Article · 8 min", es: "Artículo · 8 min" },
    href: "https://www.linkedin.com/pulse/an%C3%A1lise-de-eventos-do-lhc-investiga%C3%A7%C3%A3o-discrep%C3%A2ncias-yuri-freitas-lfezf",
  },
  {
    id: "uncle-bob",
    kind: "article",
    lang: "pt",
    title: "Uncle Bob e a Crise do Movimento Ágil: Uma Reflexão",
    summary: {
      pt: "O que se perdeu entre o Manifesto Ágil e a prática nas empresas.",
      en: "What got lost between the Agile Manifesto and how companies practice it.",
      es: "Lo que se perdió entre el Manifiesto Ágil y la práctica en las empresas.",
    },
    meta: { pt: "Artigo · 3 min", en: "Article · 3 min", es: "Artículo · 3 min" },
    href: "https://www.linkedin.com/pulse/uncle-bob-e-crise-do-movimento-%C3%A1gil-uma-reflex%C3%A3o-yuri-freitas-kjfbf",
  },
  {
    id: "ia-sociedade",
    kind: "article",
    lang: "pt",
    title: "Reflexões sobre a Inteligência Artificial e a Sociedade",
    summary: {
      pt: "A relação entre IA e humanidade e a busca por um novo paradigma.",
      en: "The relationship between AI and humanity, and the search for a new paradigm.",
      es: "La relación entre IA y humanidad y la búsqueda de un nuevo paradigma.",
    },
    meta: { pt: "Artigo · 3 min", en: "Article · 3 min", es: "Artículo · 3 min" },
    href: "https://www.linkedin.com/pulse/reflex%C3%B5es-sobre-intelig%C3%AAncia-artificial-e-sociedade-em-yuri-freitas",
  },
  {
    id: "stable-diffusion",
    kind: "article",
    lang: "pt",
    title: "Como o stable-diffusion gera imagens com aprendizado profundo",
    summary: {
      pt: "Introdução prática à geração de imagens com modelos de difusão.",
      en: "A practical introduction to image generation with diffusion models.",
      es: "Introducción práctica a la generación de imágenes con modelos de difusión.",
    },
    meta: { pt: "Artigo · 2 min", en: "Article · 2 min", es: "Artículo · 2 min" },
    href: "https://www.linkedin.com/pulse/descubra-como-o-reposit%C3%B3rio-stable-diffusion-pode-gerar-yuri-freitas",
  },
  {
    id: "obesity-post",
    kind: "post",
    lang: "pt",
    title: "2º lugar no Obesity ML Challenge Part 3",
    summary: {
      pt: "O resultado no desafio do Broad Institute e o pipeline por trás dele.",
      en: "The result in the Broad Institute challenge and the pipeline behind it.",
      es: "El resultado en el desafío del Broad Institute y el pipeline detrás.",
    },
    meta: { pt: "Post", en: "Post", es: "Post" },
    href: post("7498473569719582721"),
  },
  {
    id: "climate-post",
    kind: "post",
    lang: "pt",
    title: "Central de Risco Climático para o Rio Grande do Sul",
    summary: {
      pt: "Todo número tem que dizer de onde veio e onde deixa de valer.",
      en: "Every number has to say where it came from and where it stops holding.",
      es: "Cada número debe decir de dónde viene y dónde deja de valer.",
    },
    meta: { pt: "Post", en: "Post", es: "Post" },
    href: post("7492572972071854081"),
  },
  {
    id: "caa-post",
    kind: "post",
    lang: "pt",
    title: "Por que ainda é tão difícil acessar ferramentas de CAA?",
    summary: {
      pt: "A origem do Universal-Language: tecnologia existe, falta acesso.",
      en: "The origin of Universal-Language: the technology exists, access doesn't.",
      es: "El origen de Universal-Language: la tecnología existe, falta acceso.",
    },
    meta: { pt: "Post", en: "Post", es: "Post" },
    href: post("7488356590723698688"),
  },
];
