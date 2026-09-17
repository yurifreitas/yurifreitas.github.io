import type { T } from "./types";

export const profile = {
  name: "Yuri Freitas",
  fullName: "Yuri Bezerra Freitas",
  avatar: "https://avatars.githubusercontent.com/u/18646401?v=4",
  location: { pt: "Garopaba, SC · remoto", en: "Garopaba, Brazil · remote", es: "Garopaba, Brasil · remoto" } satisfies T,
  role: {
    pt: "Engenheiro de software sênior — IA aplicada e sistemas com LLM",
    en: "Senior software engineer — applied AI and LLM systems",
    es: "Ingeniero de software sénior — IA aplicada y sistemas con LLM",
  } satisfies T,
  links: {
    github: "https://github.com/yurifreitas",
    linkedin: "https://www.linkedin.com/in/yuribzfreitas/",
    kaggle: "https://www.kaggle.com/yuribzfreitas",
    crunchdao: "https://hub.crunchdao.com/competitions/broad-obesity-3",
    crunchdaoUser: "yurinewturing",
    obesityPost: "https://www.linkedin.com/pulse/obesity-ml-challenge-part-3-peer-review-results-crunchlabhq-7slec",
  },
};

export const stats: { value: string; label: T }[] = [
  { value: "9+", label: { pt: "anos de Python e JavaScript em produção", en: "years of Python & JavaScript in production", es: "años de Python y JavaScript en producción" } },
  { value: "2º", label: { pt: "Broad Institute", en: "Broad Institute", es: "Broad Institute" } },
  { value: "top 11%", label: { pt: "ADIA Lab · 1.603 participantes", en: "ADIA Lab · 1,603 participants", es: "ADIA Lab · 1.603 participantes" } },
  { value: "15+", label: { pt: "empresas em que atuei", en: "companies I’ve worked with", es: "empresas en las que trabajé" } },
];

export const skills: { group: T; items: string[] }[] = [
  { group: { pt: "IA & LLM", en: "AI & LLM", es: "IA y LLM" }, items: ["RAG", "LangGraph", "LangChain", "Azure AI Foundry", "Content Understanding", "OpenAI", "Ollama", "Embeddings", "LLM eval", "Guardrails"] },
  { group: { pt: "ML & pesquisa", en: "ML & research", es: "ML e investigación" }, items: ["Séries temporais", "Modelagem probabilística", "CRPS", "scikit-learn", "Calibração", "Ranking"] },
  { group: { pt: "Linguagens", en: "Languages", es: "Lenguajes" }, items: ["Python", "C#", "TypeScript", "JavaScript", "C++", "Kotlin"] },
  { group: { pt: "Plataforma", en: "Platform", es: "Plataforma" }, items: ["Azure Functions", "Service Bus", "CosmosDB", "AWS", "GCP", "Docker", "Kubernetes", "PostgreSQL", "Redis"] },
  { group: { pt: "Produto", en: "Product", es: "Producto" }, items: ["FastAPI", "Django", "React", "React Native", "Vite", "JUCE"] },
];
