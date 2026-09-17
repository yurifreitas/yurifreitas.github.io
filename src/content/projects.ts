import type { Mention, Project, T, Work } from "./types";

const gh = (repo: string) => `https://github.com/yurifreitas/${repo}`;
const pages = (repo: string) => `https://yurifreitas.github.io/${repo}/`;

/** Texto idêntico nos três idiomas (nomes próprios, números). */
const same = (s: string): T => ({ pt: s, en: s, es: s });

type PublicInput = Omit<Project, "kind" | "facts" | "description"> & Partial<Pick<Project, "facts" | "description">>;
const pub = (p: PublicInput): Project => ({ kind: "public", facts: [], description: p.tagline, ...p });
const mention = (m: Omit<Mention, "kind">): Mention => ({ kind: "mention", ...m });

/* ─────────────────────────── Destaques públicos ─────────────────────────── */

export const featured: Project[] = [
  pub({
    id: "yachay",
    name: "yachay",
    year: 2026,
    category: "science",
    featured: true,
    tagline: {
      pt: "Atlas de doenças raras que diz onde a evidência para.",
      en: "A rare-disease atlas that says where the evidence stops.",
      es: "Un atlas de enfermedades raras que dice dónde termina la evidencia.",
    },
    description: {
      pt: "E sieve, um método para transformar triagens grandes, ruidosas e confundidas em uma shortlist defensável. Todo número é gerado, nunca digitado: 37 afirmações são verificadas automaticamente contra os artefatos, e o build quebra quando o texto diverge.",
      en: "And sieve, a method for turning large, noisy, confounded screens into a shortlist you can defend. Every number is generated, never typed: 37 claims are checked automatically against their artifacts, and the build breaks when prose drifts.",
      es: "Y sieve, un método para convertir cribados grandes, ruidosos y confundidos en una shortlist defendible. Cada número se genera, nunca se escribe: 37 afirmaciones se verifican automáticamente contra sus artefactos y el build falla si el texto diverge.",
    },
    facts: [
      { pt: "6,4 M submissões ClinVar", en: "6.4 M ClinVar submissions", es: "6,4 M envíos ClinVar" },
      { pt: "1.178 linhagens × 17.916 genes", en: "1,178 cell lines × 17,916 genes", es: "1.178 líneas × 17.916 genes" },
      { pt: "40 achados de auditoria", en: "40 audit findings", es: "40 hallazgos de auditoría" },
    ],
    stack: ["Python", "TypeScript", "LaTeX"],
    repo: gh("yachay"),
    live: pages("yachay"),
  }),
  pub({
    id: "van-den-climate",
    name: "van-den-climate",
    year: 2026,
    category: "climate",
    featured: true,
    tagline: {
      pt: "Central de risco climático do Rio Grande do Sul.",
      en: "Climate risk hub for Rio Grande do Sul, Brazil.",
      es: "Central de riesgo climático de Rio Grande do Sul, Brasil.",
    },
    description: {
      pt: "Só 36 anos de avaliação: o erro padrão é do tamanho do sinal. Por isso não há busca de hiperparâmetro contra a métrica — a escolha é física, parcimônia e pré-registro. Todo valor tem selo de procedência e todo modelo, uma seção “como me derrubar”.",
      en: "Only 36 evaluation years: the standard error is the size of the signal. So there is no hyperparameter search against the metric — selection is physics, parsimony and pre-registration. Every value has a provenance seal and every model a “how to break me” section.",
      es: "Solo 36 años de evaluación: el error estándar es del tamaño de la señal. Por eso no hay búsqueda de hiperparámetros contra la métrica — la elección es física, parsimonia y pre-registro. Cada valor tiene sello de procedencia y cada modelo una sección “cómo refutarme”.",
    },
    facts: [
      { pt: "497 municípios", en: "497 municipalities", es: "497 municipios" },
      { pt: "~93 decisões registradas", en: "~93 recorded decisions", es: "~93 decisiones registradas" },
      same("NOAA · IBGE · ANA · JRC"),
    ],
    stack: ["Python", "FastAPI", "React"],
    repo: gh("van-den-climate"),
    live: pages("van-den-climate"),
  }),
  pub({
    id: "universal-language",
    name: "Universal-Language",
    year: 2026,
    category: "a11y",
    featured: true,
    tagline: {
      pt: "Prancha de comunicação aumentativa, gratuita e offline.",
      en: "A free, offline augmentative communication board.",
      es: "Tablero de comunicación aumentativa, gratuito y offline.",
    },
    description: {
      pt: "Toque nos cards e o app fala. Um motor de frases transforma EU · QUERER · ÁGUA em “Eu quero água”, respeita regionalismos e funciona por varredura com switch. Nada sai do aparelho.",
      en: "Tap the cards and the app speaks. A phrase engine turns I · WANT · WATER into “I want water”, respects regional vocabulary and works with switch scanning. Nothing leaves the device.",
      es: "Toca las tarjetas y la app habla. Un motor de frases convierte YO · QUERER · AGUA en “Yo quiero agua”, respeta regionalismos y funciona con barrido por switch. Nada sale del dispositivo.",
    },
    facts: [
      { pt: "13.801 pictogramas", en: "13,801 pictograms", es: "13.801 pictogramas" },
      { pt: "800 mil casos auditados", en: "800k audited cases", es: "800 mil casos auditados" },
      { pt: "325 testes", en: "325 tests", es: "325 tests" },
    ],
    stack: ["TypeScript", "React", "PWA"],
    repo: gh("Universal-Language"),
    live: pages("Universal-Language"),
  }),
  pub({
    id: "real-search",
    name: "real-search",
    year: 2026,
    category: "science",
    featured: true,
    tagline: {
      pt: "Busca de Grover em hardware quântico real da IBM.",
      en: "Grover search on real IBM quantum hardware.",
      es: "Búsqueda de Grover en hardware cuántico real de IBM.",
    },
    description: {
      pt: "Da matemática exata do vetor de estado ao circuito Qiskit e ao ibm_marrakesh de 156 qubits. Simulação e circuito concordam em 10⁻¹³; no hardware, o ruído derruba a probabilidade de 0,95 para 0,82 — e o alvo ainda é encontrado.",
      en: "From exact statevector math to a Qiskit circuit and the 156-qubit ibm_marrakesh. Simulation and circuit agree to 10⁻¹³; on hardware, noise drops the probability from 0.95 to 0.82 — and the target is still found.",
      es: "De la matemática exacta del vector de estado al circuito Qiskit y al ibm_marrakesh de 156 qubits. Simulación y circuito coinciden en 10⁻¹³; en hardware, el ruido baja la probabilidad de 0,95 a 0,82 — y el objetivo se encuentra igual.",
    },
    facts: [
      { pt: "652× menos consultas", en: "652× fewer queries", es: "652× menos consultas" },
      { pt: "49 testes", en: "49 tests", es: "49 tests" },
    ],
    stack: ["Python", "Qiskit", "IBM Quantum"],
    repo: gh("real-search"),
  }),
  pub({
    id: "shape-code",
    name: "shape-code",
    year: 2026,
    category: "creative",
    featured: true,
    tagline: {
      pt: "Desenhos para colorir gerados por matemática.",
      en: "Colouring pages generated by mathematics.",
      es: "Dibujos para colorear generados con matemática.",
    },
    description: {
      pt: "Penrose, quasicristais, L-systems, vitrais de Voronoi e labirintos em SVG, com editor de blocos estilo Scratch para crianças e exportação em PDF. Sem build, funciona offline.",
      en: "Penrose tilings, quasicrystals, L-systems, Voronoi stained glass and mazes in SVG, with a Scratch-like block studio for kids and PDF export. No build step, works offline.",
      es: "Penrose, cuasicristales, L-systems, vitrales de Voronoi y laberintos en SVG, con un estudio de bloques estilo Scratch para niños y exportación a PDF. Sin build, funciona offline.",
    },
    facts: [{ pt: "26 geradores", en: "26 generators", es: "26 generadores" }],
    stack: ["JavaScript", "SVG"],
    repo: gh("shape-code"),
    live: pages("shape-code"),
  }),
];

/* ─────────────────────────── Demais públicos ─────────────────────────── */

const publicWork: Project[] = [
  pub({ id: "particles", name: "particles", year: 2025, category: "science", stack: ["Python", "Spark", "UMAP"], repo: gh("particles"),
    tagline: { pt: "Análise exploratória de colisões reais do ATLAS/LHC.", en: "Exploratory analysis of real ATLAS/LHC collisions.", es: "Análisis exploratorio de colisiones reales del ATLAS/LHC." } }),
  pub({ id: "riemann", name: "riemann-zero-lab", year: 2025, category: "science", stack: ["Python", "mpmath"], repo: gh("riemann-zero-lab"),
    tagline: { pt: "230 zeros da zeta validados pelo método de Turing.", en: "230 zeta zeros validated with Turing's method.", es: "230 ceros de zeta validados con el método de Turing." } }),
  pub({ id: "holoocean", name: "HoloOcean", year: 2025, category: "climate", stack: ["Python", "SciPy", "Plotly"], repo: gh("HoloOcean"),
    tagline: { pt: "Geofísica marinha da NOAA reconstruída em volumes 3D.", en: "NOAA marine geophysics rebuilt as 3D volumes.", es: "Geofísica marina de la NOAA reconstruida en volúmenes 3D." } }),
  pub({ id: "ethersym-finance", name: "EtherSym Finance", year: 2025, category: "finance", stack: ["PyTorch", "FastAPI", "React"], repo: gh("Financial_networkj"),
    tagline: { pt: "Dueling DQN para BTC/USDT com simulador em tempo real.", en: "Dueling DQN for BTC/USDT with a real-time simulator.", es: "Dueling DQN para BTC/USDT con simulador en tiempo real." } }),
  pub({ id: "ethersym-v9", name: "EtherSym v9", year: 2025, category: "ai", stack: ["PyTorch", "pygame"], repo: gh("EtherSym-v9"),
    tagline: { pt: "Agente de RL treinado num ambiente de física próprio.", en: "RL agent trained in a custom physics environment.", es: "Agente de RL entrenado en un entorno de física propio." } }),
  pub({ id: "core-layer", name: "Core_Layer", year: 2025, category: "ai", stack: ["LangChain", "FAISS", "Ollama"], repo: gh("Core_Layer"),
    tagline: { pt: "Memória RAG em camadas bronze, prata e ouro.", en: "RAG memory in bronze, silver and gold layers.", es: "Memoria RAG en capas bronce, plata y oro." } }),
  pub({ id: "tot-agent", name: "tot-agent", year: 2025, category: "ai", stack: ["LangGraph", "MCP", "Azure"], repo: gh("tot-agent"),
    tagline: { pt: "Agente Tree-of-Thoughts com ferramentas via MCP.", en: "Tree-of-Thoughts agent with tools over MCP.", es: "Agente Tree-of-Thoughts con herramientas vía MCP." } }),
  pub({ id: "coreflow", name: "coreflow", year: 2025, category: "ai", stack: ["React", "Python"], repo: gh("coreflow"),
    tagline: { pt: "Editor visual de fluxos multiagente sobre máquina de estados.", en: "Visual multi-agent flow editor on a state machine.", es: "Editor visual de flujos multiagente sobre máquina de estados." } }),
  pub({ id: "b-indicator", name: "b-indicator", year: 2025, category: "finance", stack: ["smolagents", "MCP", "Ollama"], repo: gh("b-indicator"),
    tagline: { pt: "Agente financeiro local com ferramentas da Binance.", en: "Local finance agent with Binance tools.", es: "Agente financiero local con herramientas de Binance." } }),
  pub({ id: "binance-chart", name: "binance-chart", year: 2025, category: "finance", stack: ["React", "FastAPI", "FAISS"], repo: gh("binance-chart"),
    tagline: { pt: "Painel de sinais: Hurst, Markov e quebras estruturais.", en: "Signal dashboard: Hurst, Markov and structural breaks.", es: "Panel de señales: Hurst, Markov y quiebres estructurales." } }),
  pub({ id: "circuit-breaker", name: "product-circuit-breaker", year: 2025, category: "product", stack: ["FastAPI", "MongoDB", "Prometheus"], repo: gh("product-circuit-breaker"),
    tagline: { pt: "API com circuit breaker e observabilidade completa.", en: "API with circuit breaker and full observability.", es: "API con circuit breaker y observabilidad completa." } }),
  pub({ id: "gpt-preattention", name: "gpt-preattention", year: 2026, category: "ai", stack: ["Python", "Plotly"], repo: gh("gpt-preattention-visualization"),
    tagline: { pt: "Como um prompt se parece antes da atenção.", en: "What a prompt looks like before attention.", es: "Cómo se ve un prompt antes de la atención." } }),
  pub({ id: "gameoflife", name: "Game of Life", year: 2023, category: "creative", stack: ["JavaScript", "Canvas"], repo: gh("gameoflife"), live: "https://yurifreitas.github.io/gameoflife/#91651088029",
    tagline: { pt: "Universo emergente de partículas, reproduzível por seed.", en: "Emergent particle universe, reproducible by seed.", es: "Universo emergente de partículas, reproducible por semilla." } }),
  pub({ id: "geodata", name: "geodata", year: 2024, category: "climate", stack: ["Jupyter", "GeoTIFF"], repo: gh("geodata"),
    tagline: { pt: "Rasters de risco de enchente no RS a partir de DEM e rios.", en: "Flood-risk rasters for southern Brazil from DEM and rivers.", es: "Rasters de riesgo de inundación en el sur de Brasil a partir de DEM y ríos." } }),
  pub({ id: "kanban", name: "kanban-board", year: 2023, category: "product", stack: ["React", "Express", "Docker"], repo: gh("kanban-board"),
    tagline: { pt: "Kanban full-stack em containers.", en: "Containerized full-stack kanban.", es: "Kanban full-stack en contenedores." } }),
  pub({ id: "teaching", name: "Class_PJ · JS-Vanilla", year: 2023, category: "product", stack: ["JavaScript", "p5.js"], repo: gh("Class_PJ"),
    tagline: { pt: "Material das turmas que ensinei: jogos, SPA e APIs.", en: "Material from classes I taught: games, SPA and APIs.", es: "Material de las clases que di: juegos, SPA y APIs." } }),
  pub({ id: "correios", name: "rastreio-correios", year: 2020, category: "product", stack: ["Next.js", "Strapi"], repo: gh("front-end-rastreio-correios"),
    tagline: { pt: "Rastreamento de encomendas dos Correios.", en: "Brazilian postal parcel tracking.", es: "Seguimiento de envíos del correo brasileño." } }),
  pub({ id: "hackathon", name: "hackthon", year: 2019, category: "product", stack: ["React", "Socket.io", "Redux"], repo: gh("hackthon"),
    tagline: { pt: "Chat em tempo real construído em hackathon.", en: "Real-time chat built at a hackathon.", es: "Chat en tiempo real hecho en una hackathon." } }),
  pub({ id: "elevator", name: "Elevator", year: 2019, category: "science", stack: ["Python", "Flask"], repo: gh("Elevator"),
    tagline: { pt: "Simulação comparando algoritmos de elevador.", en: "Simulation comparing elevator algorithms.", es: "Simulación que compara algoritmos de ascensor." } }),
  pub({ id: "university", name: "ED · Neander · Reversi", year: 2017, category: "science", stack: ["C", "Java", "PHP"], repo: gh("ED"),
    tagline: { pt: "Onde começou: estruturas de dados, CPU didática e jogos.", en: "Where it started: data structures, a teaching CPU and games.", es: "Donde empezó: estructuras de datos, CPU didáctica y juegos." } }),
];

/* ─────────────────── Privados e locais — só comentados ─────────────────── */

const mentions: Mention[] = [
  /* competições — só a experiência adquirida, sem publicar código */
  mention({ id: "obesity", name: "Broad Obesity Challenge", year: 2026, category: "research", stack: ["Python", "Genômica"],
    line: { pt: "Experiência: priorizar 4,47 M de pares de genes para laboratório e descartar o que não reproduz em validação aninhada.", en: "Experience: prioritizing 4.47 M gene pairs for the wet lab and dropping what doesn't reproduce under nested validation.", es: "Experiencia: priorizar 4,47 M de pares de genes para laboratorio y descartar lo que no se reproduce en validación anidada." } }),
  mention({ id: "nominator", name: "nominator", year: 2026, category: "research", stack: ["Python"],
    line: { pt: "Experiência: transformar o que aprendi em triagens de perturbação em um método reutilizável de shortlist.", en: "Experience: turning lessons from perturbation screens into a reusable shortlisting method.", es: "Experiencia: convertir lo aprendido en cribados de perturbación en un método reutilizable de shortlist." } }),
  mention({ id: "synth", name: "CrunchDAO Synth", year: 2026, category: "research", stack: ["Python", "CRPS"],
    line: { pt: "Experiência: previsão probabilística em tempo real — e como um erro de definição do alvo muda tudo.", en: "Experience: real-time probabilistic forecasting — and how a target-definition mistake changes everything.", es: "Experiencia: pronóstico probabilístico en tiempo real — y cómo un error en la definición del objetivo lo cambia todo." } }),
  mention({ id: "adia", name: "ADIA Lab Structural Break", year: 2026, category: "research", stack: ["scikit-learn", "numpy"],
    line: { pt: "Experiência: detecção de mudança de regime em streaming com submissões reproduzíveis bit a bit.", en: "Experience: streaming regime-shift detection with bit-for-bit reproducible submissions.", es: "Experiencia: detección de cambio de régimen en streaming con envíos reproducibles bit a bit." } }),
  mention({ id: "arc", name: "ARC Prize · ARC-AGI-3", year: 2026, category: "research", stack: ["Python", "LLM"],
    line: { pt: "Experiência: agente híbrido LLM + motor causal e medir se o ganho local se transfere ao leaderboard.", en: "Experience: a hybrid LLM + causal-engine agent, and measuring whether local gains transfer to the leaderboard.", es: "Experiencia: agente híbrido LLM + motor causal y medir si la mejora local se transfiere al leaderboard." } }),
  mention({ id: "knee", name: "RSNA Knee (Kaggle)", year: 2026, category: "research", stack: ["PyTorch", "DINOv2"],
    line: { pt: "Experiência: imagem médica com só 58 estudos rotulados, extraindo rótulos de laudos em vários idiomas (LB 0,858).", en: "Experience: medical imaging with only 58 labeled studies, extracting labels from multilingual reports (LB 0.858).", es: "Experiencia: imagen médica con solo 58 estudios etiquetados, extrayendo etiquetas de informes multilingües (LB 0,858)." } }),

  /* privados no GitHub */
  mention({ id: "oraculo", name: "Oráculo", year: 2026, category: "ai", stack: ["FastAPI", "React 19"],
    line: { pt: "Bancada local de avaliação de prompts: N execuções, versões por hash, acurácia contra gabarito.", en: "Local prompt evaluation bench: N runs, hash-versioned prompts, accuracy against ground truth.", es: "Banco local de evaluación de prompts: N ejecuciones, versiones por hash, precisión contra ground truth." } }),
  mention({ id: "atendefrota", name: "AtendeFrota", year: 2026, category: "ai", stack: ["PydanticAI", "Docker"],
    line: { pt: "Gestão de frota com agentes de IA: o modelo sugere, o código decide, o humano aprova.", en: "Fleet management with AI agents: the model suggests, code decides, a human approves.", es: "Gestión de flotas con agentes de IA: el modelo sugiere, el código decide, un humano aprueba." } }),
  mention({ id: "whisper", name: "whisper", year: 2025, category: "ai", stack: ["FastAPI", "React"],
    line: { pt: "App de fala para texto e texto para fala com API de vozes.", en: "Speech-to-text and text-to-speech app with a voices API.", es: "App de voz a texto y texto a voz con API de voces." } }),
  mention({ id: "chat-llm", name: "chat-llm", year: 2024, category: "ai", stack: ["LangChain", "Redis", "Ollama"],
    line: { pt: "Chatbot em tempo real com memória de conversa, local ou Azure OpenAI.", en: "Real-time chatbot with conversation memory, local or Azure OpenAI.", es: "Chatbot en tiempo real con memoria de conversación, local o Azure OpenAI." } }),
  mention({ id: "loveturing", name: "loveturing", year: 2026, category: "creative", stack: ["C++23", "CLAP", "WASM"],
    line: { pt: "Instrumento nativo CLAP/VST3 sem JUCE, laboratório de som em WASM e estúdio vocal.", en: "JUCE-free native CLAP/VST3 instrument, a WASM sound lab and a vocal studio.", es: "Instrumento nativo CLAP/VST3 sin JUCE, laboratorio de sonido en WASM y estudio vocal." } }),
  mention({ id: "beatbe", name: "BeatBe VST", year: 2026, category: "creative", stack: ["C++", "JUCE"],
    line: { pt: "Sintetizador de bateria VST3: 5 vozes, 3 pads e FX de master.", en: "VST3 drum synth: 5 voices, 3 pads and master FX.", es: "Sintetizador de batería VST3: 5 voces, 3 pads y FX de master." } }),

  /* apps Android (Kotlin) — locais */
  mention({ id: "milens", name: "MiLens", year: 2026, category: "creative", stack: ["Kotlin", "CameraX", "C++ NEON"],
    line: { pt: "Câmera Android com motor nativo: HDR por fusão Mertens, empilhamento noturno sub-pixel, CLAHE e tonemap ACES.", en: "Android camera with a native engine: Mertens HDR fusion, sub-pixel night stacking, CLAHE and ACES tonemapping.", es: "Cámara Android con motor nativo: HDR por fusión Mertens, apilado nocturno sub-píxel, CLAHE y tonemap ACES." } }),
  mention({ id: "quadro", name: "Quadro", year: 2026, category: "creative", stack: ["Kotlin", "Compose", "AGSL"],
    line: { pt: "Editor de fotos não destrutivo por camadas com shaders AGSL na GPU, 115 looks e compositor para impressão.", en: "Non-destructive layered photo editor with GPU AGSL shaders, 115 looks and a print compositor.", es: "Editor de fotos no destructivo por capas con shaders AGSL en GPU, 115 looks y compositor para impresión." } }),
  mention({ id: "beatbe-android", name: "BeatBe Android", year: 2026, category: "creative", stack: ["Kotlin", "Oboe", "ONNX Runtime"],
    line: { pt: "Sampler de baixa latência (Oboe/AAudio, 16 vozes via JNI) com separação de faixas Demucs rodando no celular.", en: "Low-latency sampler (Oboe/AAudio, 16 voices via JNI) with on-device Demucs stem separation.", es: "Sampler de baja latencia (Oboe/AAudio, 16 voces vía JNI) con separación de pistas Demucs en el teléfono." } }),
  mention({ id: "justafilemanager", name: "JustAfileManager", year: 2026, category: "product", stack: ["Kotlin", "Room", "Media3"],
    line: { pt: "Gerenciador de arquivos Android com motor nativo NEON, busca, favoritos e Material You.", en: "Android file manager with a NEON native engine, search, favorites and Material You.", es: "Gestor de archivos Android con motor nativo NEON, búsqueda, favoritos y Material You." } }),
  mention({ id: "serpente", name: "Serpente", year: 2026, category: "creative", stack: ["Kotlin", "Compose", "AGP 9"],
    line: { pt: "Jogo com simulação determinística em ponto fixo Q16.16, testes de golden replay e módulos com convention plugins.", en: "Game with deterministic Q16.16 fixed-point simulation, golden-replay tests and convention-plugin modules.", es: "Juego con simulación determinista en punto fijo Q16.16, tests de golden replay y módulos con convention plugins." } }),

  /* projetos locais */
  mention({ id: "ingles", name: "ingles", year: 2026, category: "ai", stack: ["faster-whisper", "Claude"],
    line: { pt: "Coach de entrevista em inglês: fonemas decidem o erro, o LLM só explica.", en: "English interview coach: phonemes decide the error, the LLM only explains.", es: "Coach de entrevistas en inglés: los fonemas deciden el error, el LLM solo explica." } }),
  mention({ id: "kalinew", name: "kalinew", year: 2026, category: "ai", stack: ["FastAPI", "React"],
    line: { pt: "OSINT com lastro: cada achado traz fonte, confiança e o que não prova.", en: "OSINT with receipts: every finding carries source, confidence and what it doesn't prove.", es: "OSINT con respaldo: cada hallazgo trae fuente, confianza y lo que no prueba." } }),
  mention({ id: "ycode", name: "ycode", year: 2026, category: "ai", stack: ["Ollama", "Monaco", "tree-sitter"],
    line: { pt: "Agente de código 100% local com IDE, AST e git.", en: "Fully local coding agent with IDE, AST and git.", es: "Agente de código 100% local con IDE, AST y git." } }),
  mention({ id: "autoia", name: "autoIA", year: 2026, category: "ai", stack: ["Python", "Claude Code"],
    line: { pt: "Loop autônomo planejador → executor → testes → revisor, com commit ou reset.", en: "Autonomous planner → executor → tests → reviewer loop, commit or reset.", es: "Loop autónomo planificador → ejecutor → tests → revisor, con commit o reset." } }),
  mention({ id: "agent-lab", name: "thisisrealtest", year: 2026, category: "ai", stack: ["OpenTelemetry", "Phoenix"],
    line: { pt: "Cinco frameworks de agentes na mesma tarefa, com tracing ponta a ponta.", en: "Five agent frameworks on the same task, traced end to end.", es: "Cinco frameworks de agentes en la misma tarea, con tracing de punta a punta." } }),
  mention({ id: "ethervoice", name: "EtherVoice", year: 2026, category: "ai", stack: ["Python", "audio"],
    line: { pt: "Assistente de voz local com reconhecimento de locutor e memória.", en: "Local voice assistant with speaker recognition and memory.", es: "Asistente de voz local con reconocimiento de hablante y memoria." } }),
  mention({ id: "document-generator", name: "document-generator", year: 2026, category: "ai", stack: ["Python", "Pillow"],
    line: { pt: "Documentos sintéticos marcados como SPECIMEN para treinar qualidade de imagem em KYC.", en: "SPECIMEN-marked synthetic documents to train KYC image-quality models.", es: "Documentos sintéticos marcados SPECIMEN para entrenar calidad de imagen en KYC." } }),
  mention({ id: "enigma", name: "enigma", year: 2026, category: "product", stack: ["React 19", "Monaco", "WebSocket"],
    line: { pt: "IDE web com painéis, JSON-RPC e registro de comandos.", en: "Web IDE with docked panels, JSON-RPC and a command registry.", es: "IDE web con paneles, JSON-RPC y registro de comandos." } }),
  mention({ id: "markov-bots", name: "markov-bots", year: 2026, category: "finance", stack: ["Python"],
    line: { pt: "Estratégia cross-sectional de funding carry com model card.", en: "Cross-sectional funding-carry strategy with a model card.", es: "Estrategia cross-sectional de funding carry con model card." } }),
  mention({ id: "brt", name: "Barata", year: 2026, category: "creative", stack: ["C++", "raylib", "Android NDK"],
    line: { pt: "Jogo de sobrevivência com morfologia procedural e campos de Gray-Scott, rodando no Android.", en: "Survival game with procedural morphology and Gray-Scott fields, running on Android.", es: "Juego de supervivencia con morfología procedural y campos de Gray-Scott, corriendo en Android." } }),
  mention({ id: "simulation", name: "simulation · tetramath", year: 2025, category: "science", stack: ["JavaScript", "Python"],
    line: { pt: "Campos acoplados em tempo real, Navier-Stokes espectral e ETDRK4.", en: "Real-time coupled fields, spectral Navier-Stokes and ETDRK4.", es: "Campos acoplados en tiempo real, Navier-Stokes espectral y ETDRK4." } }),
  mention({ id: "image-editor", name: "Image-Editor", year: 2026, category: "product", stack: ["React", "OpenCV"],
    line: { pt: "Editor de fotos local com filtros e exportação para Reels.", en: "Local photo editor with filters and Reels export.", es: "Editor de fotos local con filtros y exportación a Reels." } }),
  mention({ id: "process-manager", name: "process-manager", year: 2026, category: "product", stack: ["Node", "WebSocket"],
    line: { pt: "Painel em tempo real de processos, portas e servidores de dev.", en: "Real-time dashboard of processes, ports and dev servers.", es: "Panel en tiempo real de procesos, puertos y servidores de dev." } }),
  mention({ id: "coruja", name: "Coruja", year: 2026, category: "product", stack: ["FastAPI", "React"],
    line: { pt: "Inteligência de marcas e patentes com prazos do INPI.", en: "Trademark and patent intelligence with INPI deadlines.", es: "Inteligencia de marcas y patentes con plazos del INPI." } }),
];

export const allWork: Work[] = [...featured, ...publicWork, ...mentions].sort((a, b) => b.year - a.year);
export const workCount = { public: featured.length + publicWork.length, mention: mentions.length };
