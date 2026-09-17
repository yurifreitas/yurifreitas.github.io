import type { T } from "./types";

export type EvidenceKind = "work" | "competition" | "project";
export type Evidence = { kind: EvidenceKind; name: string; detail: T };

export type Domain = {
  id: string;
  title: T;
  summary: T;
  evidence: Evidence[];
  stack: (string | T)[];
  /** Linha do tempo — só no domínio de engenharia. */
  timeline?: { year: string; text: T }[];
  /** Tipos de documento processados — só no domínio de documentos. */
  documents?: { group: T; items: T[] }[];
};

const same = (s: string): T => ({ pt: s, en: s, es: s });

export const domains: Domain[] = [
  {
    id: "engineering",
    title: { pt: "Engenharia e sustentação em produção", en: "Engineering & production support", es: "Ingeniería y sostenimiento en producción" },
    summary: {
      pt: "A base que veio antes da IA generativa: desde 2017 construindo e mantendo Python e JavaScript em produção — automação bancária, apps financeiros, telemedicina, APIs e pipelines de dados — com correções emergenciais, migrações de legado, otimização de performance e a gestão de repositórios e esteiras que mantém tudo vivo por anos.",
      en: "The foundation that came before generative AI: building and maintaining Python and JavaScript in production since 2017 — banking automation, financial apps, telemedicine, APIs and data pipelines — with emergency fixes, legacy migrations, performance tuning and the repository and pipeline management that keeps it all alive for years.",
      es: "La base que vino antes de la IA generativa: desde 2017 construyendo y manteniendo Python y JavaScript en producción — automatización bancaria, apps financieras, telemedicina, APIs y pipelines de datos — con correcciones de emergencia, migraciones de legado, optimización de rendimiento y la gestión de repositorios y pipelines que lo mantiene vivo por años.",
    },
    timeline: [
      { year: "2017", text: { pt: "Faculdade: estruturas de dados em C, Java e PHP; primeiros sistemas web", en: "University: data structures in C, Java and PHP; first web systems", es: "Universidad: estructuras de datos en C, Java y PHP; primeros sistemas web" } },
      { year: "2018", text: { pt: "Python + Selenium: RPA de cobrança bancária integrado a call center; integrações JavaScript com CRMs", en: "Python + Selenium: banking collections RPA wired into a call center; JavaScript CRM integrations", es: "Python + Selenium: RPA de cobranza bancaria integrado a call center; integraciones JavaScript con CRMs" } },
      { year: "2019", text: { pt: "Full stack JavaScript: carrinho e checkout; app bancário completo em React Native", en: "Full-stack JavaScript: cart and checkout; a complete React Native banking app", es: "Full stack JavaScript: carrito y checkout; app bancaria completa en React Native" } },
      { year: "2020", text: { pt: "Node.js + React para distribuidores; APIs e rastreamento de encomendas", en: "Node.js + React for distributors; APIs and parcel tracking", es: "Node.js + React para distribuidores; APIs y seguimiento de envíos" } },
      { year: "2021", text: { pt: "AWS Lambda em crédito consignado; migração de legado com Jest e Sonar; APIs Python em previdência", en: "AWS Lambda for payroll loans; legacy migration with Jest and Sonar; Python APIs for pensions", es: "AWS Lambda en crédito consignado; migración de legado con Jest y Sonar; APIs Python en previsión" } },
      { year: "2022", text: { pt: "Django em telemedicina sobre AWS, pipelines assíncronos e otimização de queries PostgreSQL", en: "Django telemedicine on AWS, async pipelines and PostgreSQL query optimization", es: "Django en telemedicina sobre AWS, pipelines asíncronos y optimización de queries PostgreSQL" } },
      { year: "2023", text: { pt: "Pipelines de dados geoespaciais em GCP; instrutor de JavaScript formando novos devs", en: "Geospatial data pipelines on GCP; JavaScript instructor training new developers", es: "Pipelines de datos geoespaciales en GCP; instructor de JavaScript formando nuevos devs" } },
    ],
    evidence: [
      { kind: "work", name: "Replikante · Itaú", detail: { pt: "RPA em Python e Selenium simulando dezenas de atendentes no sistema de cobrança", en: "Python and Selenium RPA simulating dozens of agents in the collections system", es: "RPA en Python y Selenium simulando decenas de agentes en el sistema de cobranza" } },
      { kind: "work", name: "Labsit · Credz", detail: { pt: "App bancário em React Native com pagamentos e recarga", en: "React Native banking app with payments and top-ups", es: "App bancaria en React Native con pagos y recargas" } },
      { kind: "work", name: "Everis · Riachuelo", detail: { pt: "Migração de legado com cobertura de testes em Jest e qualidade no Sonar", en: "Legacy migration with Jest test coverage and Sonar quality gates", es: "Migración de legado con cobertura de tests en Jest y calidad en Sonar" } },
      { kind: "work", name: "DevSkin", detail: { pt: "Correções emergenciais, performance e estabilidade em vários sistemas críticos de clientes", en: "Emergency fixes, performance and stability across multiple critical client systems", es: "Correcciones de emergencia, rendimiento y estabilidad en varios sistemas críticos de clientes" } },
      { kind: "work", name: "Capitani · Brasilprev · Doutor123", detail: { pt: "APIs Python, AWS Lambda, Django e otimização de PostgreSQL em serviços críticos", en: "Python APIs, AWS Lambda, Django and PostgreSQL tuning in critical services", es: "APIs Python, AWS Lambda, Django y optimización de PostgreSQL en servicios críticos" } },
      { kind: "work", name: "Ada Tech", detail: { pt: "Instrutor de JavaScript: módulos inteiros e mentoria para o primeiro emprego", en: "JavaScript instructor: full modules and mentoring toward first jobs", es: "Instructor de JavaScript: módulos completos y mentoría hacia el primer empleo" } },
      { kind: "work", name: "MAG Seguros · Tetris", detail: { pt: "Repositórios e pipelines em Azure DevOps com SonarQube, cobertura de testes e padrões para o time", en: "Azure DevOps repositories and pipelines with SonarQube, test coverage and team standards", es: "Repositorios y pipelines en Azure DevOps con SonarQube, cobertura de tests y estándares para el equipo" } },
    ],
    stack: ["Python", "JavaScript", "TypeScript", "Node.js", "Django", "React", "React Native", "Selenium", "Jest", "pytest", "SonarQube", "Azure DevOps", "Git", "Docker"],
  },
  {
    id: "documents",
    title: { pt: "Documentos, OCR e extração", en: "Documents, OCR & extraction", es: "Documentos, OCR y extracción" },
    summary: {
      pt: "Extração e validação de documentos brasileiros em escala, de identidade a laudo médico, com gabarito por campo, baterias com distratores e várias execuções por modelo para medir estabilidade — não só acerto.",
      en: "Large-scale extraction and validation of Brazilian documents, from IDs to medical reports, with per-field ground truth, distractor batteries and repeated runs per model to measure stability — not just accuracy.",
      es: "Extracción y validación de documentos brasileños a escala, de identidad a informes médicos, con ground truth por campo, baterías con distractores y varias ejecuciones por modelo para medir estabilidad — no solo acierto.",
    },
    documents: [
      {
        group: { pt: "Identificação", en: "Identity", es: "Identificación" },
        items: [
          { pt: "RG — frente, verso e aberto", en: "RG (ID) — front, back and open", es: "RG — frente, dorso y abierto" },
          { pt: "CNH — frente, verso e aberta", en: "CNH (driver’s license) — front, back and open", es: "CNH — frente, dorso y abierta" },
          { pt: "CPF — frente e verso", en: "CPF — front and back", es: "CPF — frente y dorso" },
          { pt: "CIN (nova identidade)", en: "CIN (new national ID)", es: "CIN (nueva identidad)" },
        ],
      },
      {
        group: { pt: "Certidões e comprovantes", en: "Certificates & proofs", es: "Certificados y comprobantes" },
        items: [
          { pt: "Comprovante de residência", en: "Proof of address", es: "Comprobante de domicilio" },
          { pt: "Certidão de óbito", en: "Death certificate", es: "Certificado de defunción" },
          { pt: "Certidão de casamento", en: "Marriage certificate", es: "Certificado de matrimonio" },
          { pt: "Comprovação de vínculo", en: "Proof of relationship to policyholder", es: "Comprobante de vínculo" },
        ],
      },
      {
        group: { pt: "Saúde e seguros", en: "Health & insurance", es: "Salud y seguros" },
        items: [
          { pt: "Laudo de exames", en: "Medical exam reports", es: "Informes de exámenes" },
          { pt: "Laudos radiológicos multilíngues", en: "Multilingual radiology reports", es: "Informes radiológicos multilingües" },
        ],
      },
      {
        group: { pt: "Financeiro e bancário", en: "Financial & banking", es: "Financiero y bancario" },
        items: [
          { pt: "Boletos", en: "Boletos (payment slips)", es: "Boletos" },
          { pt: "Boletos DDA", en: "DDA direct-debit slips", es: "Boletos DDA" },
          { pt: "Comprovantes e faturas de clientes", en: "Customer receipts and invoices", es: "Comprobantes y facturas de clientes" },
          { pt: "Faturas", en: "Invoices and bills", es: "Facturas" },
        ],
      },
      {
        group: { pt: "Frota e manutenção", en: "Fleet & maintenance", es: "Flota y mantenimiento" },
        items: [
          { pt: "Orçamentos de oficina", en: "Workshop quotes", es: "Presupuestos de taller" },
          { pt: "Ordens de serviço", en: "Work orders", es: "Órdenes de servicio" },
          { pt: "Fotos de evidência", en: "Evidence photos", es: "Fotos de evidencia" },
        ],
      },
    ],
    evidence: [
      { kind: "work", name: "Energisa", detail: { pt: "Leitura de orçamentos, ordens de serviço e imagens na manutenção de frota", en: "Reading quotes, work orders and images in fleet maintenance", es: "Lectura de presupuestos, órdenes de servicio e imágenes en el mantenimiento de flota" } },
      { kind: "work", name: "MAG Seguros · Tetris", detail: { pt: "Extração e validação de documentos com OCR + LLM em produção", en: "Document extraction and validation with OCR + LLM in production", es: "Extracción y validación de documentos con OCR + LLM en producción" } },
      { kind: "work", name: "ASA Bank · Sciensa", detail: { pt: "Leitura e validação de boletos e tratamento de boletos DDA no WhatsApp", en: "Payment-slip reading and validation and DDA handling on WhatsApp", es: "Lectura y validación de boletos y gestión de DDA en WhatsApp" } },
      { kind: "work", name: "Cogni2", detail: { pt: "Documentos enviados por clientes nos agentes de atendimento", en: "Customer-submitted documents in support agents", es: "Documentos enviados por clientes en los agentes de atención" } },
      { kind: "project", name: "document-generator", detail: { pt: "Documentos sintéticos marcados SPECIMEN com cadeia de degradação para treinar qualidade de imagem em KYC", en: "SPECIMEN-marked synthetic documents with a degradation chain to train KYC image quality", es: "Documentos sintéticos SPECIMEN con cadena de degradación para entrenar calidad de imagen en KYC" } },
    ],
    stack: ["Azure Document Intelligence", "Content Understanding", "GPT-5 · 5-mini · 5-nano", "OCR + LLM", "Pillow", "OpenCV"],
  },
  {
    id: "vision",
    title: { pt: "Visão computacional e imagem médica", en: "Computer vision & medical imaging", es: "Visión computacional e imagen médica" },
    summary: {
      pt: "Do exame de ressonância com quase nenhum rótulo à foto de documento amassada: extrair sinal de imagem quando o dado é escasso, ruidoso ou precisa ser gerado.",
      en: "From an MRI study with almost no labels to a crumpled document photo: pulling signal from images when data is scarce, noisy or has to be generated.",
      es: "Del estudio de resonancia casi sin etiquetas a la foto de un documento arrugado: extraer señal de imágenes cuando el dato es escaso, ruidoso o hay que generarlo.",
    },
    evidence: [
      { kind: "competition", name: "RSNA Knee · Kaggle", detail: { pt: "Ressonância de joelho com 58 de 4.407 estudos rotulados; rótulos extraídos de laudos em vários idiomas, encoder DINOv2 2.5D — LB 0,858", en: "Knee MRI with 58 of 4,407 studies labeled; labels mined from multilingual reports, DINOv2 2.5D encoder — LB 0.858", es: "Resonancia de rodilla con 58 de 4.407 estudios etiquetados; etiquetas de informes multilingües, encoder DINOv2 2.5D — LB 0,858" } },
      { kind: "work", name: "MAG Seguros · Tetris", detail: { pt: "Documentos fotografados em frente, verso e aberto, com distratores para medir falso positivo", en: "Documents photographed front, back and open, with distractors to measure false positives", es: "Documentos fotografiados en frente, dorso y abierto, con distractores para medir falsos positivos" } },
      { kind: "project", name: "document-generator", detail: { pt: "Painel humano 2-AFC para ranquear qualidade de imagem", en: "Human 2-AFC panel to rank image quality", es: "Panel humano 2-AFC para ranquear calidad de imagen" } },
      { kind: "project", name: "Image-Editor · pipelines de difusão", detail: { pt: "Filtros em OpenCV/scikit-image, SDXL + ControlNet + IP-Adapter e upscaling com Real-ESRGAN", en: "OpenCV/scikit-image filters, SDXL + ControlNet + IP-Adapter and Real-ESRGAN upscaling", es: "Filtros en OpenCV/scikit-image, SDXL + ControlNet + IP-Adapter y upscaling con Real-ESRGAN" } },
      { kind: "project", name: "MiLens · Quadro", detail: { pt: "Processamento de imagem no celular: HDR, night stack, CLAHE e shaders AGSL", en: "On-device image processing: HDR, night stacking, CLAHE and AGSL shaders", es: "Procesamiento de imagen en el teléfono: HDR, night stack, CLAHE y shaders AGSL" } },
      { kind: "project", name: "classify-img", detail: { pt: "Classificação de imagens em lote com modelo de visão local (Llama 3.2 Vision)", en: "Batch image classification with a local vision model (Llama 3.2 Vision)", es: "Clasificación de imágenes en lote con modelo de visión local (Llama 3.2 Vision)" } },
    ],
    stack: ["PyTorch", "DINOv2", "OpenCV", "scikit-image", "diffusers", "SDXL", "ControlNet", "Real-ESRGAN"],
  },
  {
    id: "llm",
    title: { pt: "LLM, agentes e avaliação", en: "LLMs, agents & evaluation", es: "LLM, agentes y evaluación" },
    summary: {
      pt: "Agentes que rodam em produção todo dia — atendimento, cobrança, documentos — com a disciplina de medir qualidade, custo e latência e de manter o sistema estável depois do lançamento.",
      en: "Agents running in production every day — support, collections, documents — with the discipline to measure quality, cost and latency and keep the system stable after launch.",
      es: "Agentes que funcionan en producción todos los días — atención, cobranza, documentos — con la disciplina de medir calidad, costo y latencia y mantener el sistema estable después del lanzamiento.",
    },
    evidence: [
      { kind: "work", name: "Energisa", detail: { pt: "Agentes neuro-simbólicos em AWS Bedrock, padrões para tools MCP e observabilidade de LLM", en: "Neuro-symbolic agents on AWS Bedrock, MCP tool standards and LLM observability", es: "Agentes neuro-simbólicos en AWS Bedrock, estándares para tools MCP y observabilidad de LLM" } },
      { kind: "work", name: "MAG Seguros · Tetris", detail: { pt: "Plataforma corporativa de IA e ferramentas de avaliação de modelos", en: "Corporate AI platform and model evaluation tooling", es: "Plataforma corporativa de IA y herramientas de evaluación de modelos" } },
      { kind: "work", name: "ASA Bank · Cogni2", detail: { pt: "Plataforma completa de agentes para clientes e agente bancário em produção, sobre RAG e LangGraph", en: "A complete agents platform for clients and a production banking agent, on RAG and LangGraph", es: "Plataforma completa de agentes para clientes y agente bancario en producción, sobre RAG y LangGraph" } },
      { kind: "competition", name: "ARC Prize · Kaggle", detail: { pt: "Agente híbrido LLM + motor causal para raciocínio abstrato", en: "Hybrid LLM + causal-engine agent for abstract reasoning", es: "Agente híbrido LLM + motor causal para razonamiento abstracto" } },
      { kind: "project", name: "Oráculo · thisisrealtest", detail: { pt: "Bancada de avaliação de prompts e 5 frameworks de agentes comparados com OpenTelemetry", en: "Prompt evaluation bench and 5 agent frameworks compared with OpenTelemetry", es: "Banco de evaluación de prompts y 5 frameworks de agentes comparados con OpenTelemetry" } },
      { kind: "project", name: "ycode · autoIA · kalinew · MCP", detail: { pt: "Agente de código local, loop autônomo com revisor, OSINT com lastro e agentes com ferramentas via MCP", en: "Local coding agent, autonomous loop with reviewer, evidence-backed OSINT and MCP tool agents", es: "Agente de código local, loop autónomo con revisor, OSINT con respaldo y agentes con herramientas vía MCP" } },
    ],
    stack: ["Azure AI Foundry", "LangGraph", "LangChain", "PydanticAI", "MCP", "Databricks", "Ollama", "OpenTelemetry"],
  },
  {
    id: "timeseries",
    title: { pt: "Séries temporais e finanças quantitativas", en: "Time series & quantitative finance", es: "Series temporales y finanzas cuantitativas" },
    summary: {
      pt: "Previsão probabilística, detecção de mudança de regime e estratégias com validação sem vazamento — onde errar a definição do alvo custa mais que escolher o modelo errado.",
      en: "Probabilistic forecasting, regime-change detection and leak-free strategy validation — where getting the target wrong costs more than picking the wrong model.",
      es: "Pronóstico probabilístico, detección de cambios de régimen y validación sin fuga — donde errar la definición del objetivo cuesta más que elegir mal el modelo.",
    },
    evidence: [
      { kind: "competition", name: "ADIA Lab · CrunchDAO", detail: { pt: "Gradient boosting em streaming + TCN causal em numpy puro — 178º de 1.603", en: "Streaming gradient boosting + causal TCN in pure numpy — 178th of 1,603", es: "Gradient boosting en streaming + TCN causal en numpy puro — 178º de 1.603" } },
      { kind: "competition", name: "Synth · CrunchDAO", detail: { pt: "Distribuições completas de retorno por CRPS, volatilidade EWMA e t de Student", en: "Full return distributions scored by CRPS, EWMA volatility and Student-t", es: "Distribuciones completas de retorno por CRPS, volatilidad EWMA y t de Student" } },
      { kind: "project", name: "EtherSym Finance", detail: { pt: "Dueling DQN para BTC/USDT com simulador em tempo real e análise fractal (MFDFA)", en: "Dueling DQN for BTC/USDT with a real-time simulator and fractal analysis (MFDFA)", es: "Dueling DQN para BTC/USDT con simulador en tiempo real y análisis fractal (MFDFA)" } },
      { kind: "project", name: "markov-bots · binance-chart", detail: { pt: "Funding carry cross-sectional com model card; Hurst, Markov e quebras estruturais", en: "Cross-sectional funding carry with a model card; Hurst, Markov and structural breaks", es: "Funding carry cross-sectional con model card; Hurst, Markov y quiebres estructurales" } },
    ],
    stack: ["scikit-learn", "numpy", "PyTorch", "CRPS", "TS-AUC", "WebSocket"],
  },
  {
    id: "bio",
    title: { pt: "Genômica e ciência aberta", en: "Genomics & open science", es: "Genómica y ciencia abierta" },
    summary: {
      pt: "Transformar triagens enormes e confundidas em listas curtas que um laboratório consegue testar — e dizer com número onde a evidência para.",
      en: "Turning huge, confounded screens into short lists a lab can actually test — and saying with numbers where the evidence stops.",
      es: "Convertir cribados enormes y confundidos en listas cortas que un laboratorio puede probar — y decir con números dónde termina la evidencia.",
    },
    evidence: [
      { kind: "competition", name: "Broad Institute · CrunchDAO", detail: { pt: "2º lugar: 4,47 milhões de pares de genes priorizados para teste em laboratório", en: "2nd place: 4.47 million gene pairs prioritized for wet-lab testing", es: "2º lugar: 4,47 millones de pares de genes priorizados para laboratorio" } },
      { kind: "project", name: "yachay · sieve", detail: { pt: "Atlas de doenças raras sobre ClinVar, DepMap e HPO, com 37 afirmações verificadas automaticamente", en: "Rare-disease atlas over ClinVar, DepMap and HPO, with 37 automatically verified claims", es: "Atlas de enfermedades raras sobre ClinVar, DepMap y HPO, con 37 afirmaciones verificadas automáticamente" } },
      { kind: "project", name: "nominator", detail: { pt: "Método reutilizável de shortlist a partir de ensaios esparsos", en: "Reusable shortlisting method from sparse assays", es: "Método reutilizable de shortlist a partir de ensayos escasos" } },
    ],
    stack: ["Python", "pandas", { pt: "Validação aninhada", en: "Nested validation", es: "Validación anidada" }, { pt: "Calibração", en: "Calibration", es: "Calibración" }, "LaTeX"],
  },
  {
    id: "audio",
    title: { pt: "Áudio, voz e DSP", en: "Audio, voice & DSP", es: "Audio, voz y DSP" },
    summary: {
      pt: "Da transcrição em produção à síntese de som em C++: fala, reconhecimento de locutor, fonemas e instrumentos nativos.",
      en: "From production transcription to C++ sound synthesis: speech, speaker recognition, phonemes and native instruments.",
      es: "De la transcripción en producción a la síntesis de sonido en C++: voz, reconocimiento de hablante, fonemas e instrumentos nativos.",
    },
    evidence: [
      { kind: "work", name: "MAG Seguros · Tetris", detail: { pt: "Transcrição de áudio no mesmo contrato do gateway de IA", en: "Audio transcription in the same AI gateway contract", es: "Transcripción de audio en el mismo contrato del gateway de IA" } },
      { kind: "project", name: "ingles", detail: { pt: "Pronúncia avaliada por alinhamento de fonemas (faster-whisper + CMUdict)", en: "Pronunciation scored by phoneme alignment (faster-whisper + CMUdict)", es: "Pronunciación evaluada por alineación de fonemas (faster-whisper + CMUdict)" } },
      { kind: "project", name: "EtherVoice · whisper", detail: { pt: "Redução de ruído, VAD, voiceprint e APIs de fala para texto e texto para fala", en: "Noise reduction, VAD, voiceprints and speech-to-text / text-to-speech APIs", es: "Reducción de ruido, VAD, voiceprint y APIs de voz a texto y texto a voz" } },
      { kind: "project", name: "loveturing · BeatBe VST", detail: { pt: "Instrumentos CLAP/VST3 em C++23 e JUCE com SIMD e build WASM", en: "CLAP/VST3 instruments in C++23 and JUCE with SIMD and a WASM build", es: "Instrumentos CLAP/VST3 en C++23 y JUCE con SIMD y build WASM" } },
    ],
    stack: ["faster-whisper", "Web Audio", "JUCE", "CLAP", "VST3", "C++23", "WASM"],
  },
  {
    id: "science",
    title: { pt: "Clima, geo e computação científica", en: "Climate, geo & scientific computing", es: "Clima, geo y computación científica" },
    summary: {
      pt: "Dados públicos transformados em decisão e experimentos numéricos rigorosos — do risco de enchente no RS a um computador quântico real.",
      en: "Public data turned into decisions and rigorous numerical experiments — from flood risk in southern Brazil to a real quantum computer.",
      es: "Datos públicos convertidos en decisión y experimentos numéricos rigurosos — del riesgo de inundación en el sur de Brasil a una computadora cuántica real.",
    },
    evidence: [
      { kind: "project", name: "van-den-climate · geodata", detail: { pt: "Central de risco climático com 497 municípios e rasters de risco de enchente", en: "Climate risk hub across 497 municipalities and flood-risk rasters", es: "Central de riesgo climático con 497 municipios y rasters de riesgo de inundación" } },
      { kind: "project", name: "real-search", detail: { pt: "Grover no ibm_marrakesh de 156 qubits", en: "Grover on the 156-qubit ibm_marrakesh", es: "Grover en el ibm_marrakesh de 156 qubits" } },
      { kind: "project", name: "particles · HoloOcean", detail: { pt: "Colisões reais do ATLAS/LHC e geofísica marinha da NOAA em 3D", en: "Real ATLAS/LHC collisions and NOAA marine geophysics in 3D", es: "Colisiones reales del ATLAS/LHC y geofísica marina de la NOAA en 3D" } },
      { kind: "project", name: "riemann-zero-lab · simulation", detail: { pt: "Zeros da zeta validados por Turing; Navier-Stokes espectral e ETDRK4", en: "Zeta zeros validated by Turing's method; spectral Navier-Stokes and ETDRK4", es: "Ceros de zeta validados por Turing; Navier-Stokes espectral y ETDRK4" } },
    ],
    stack: ["Qiskit", "mpmath", "SciPy", "Spark", "GeoTIFF", "Plotly"],
  },
  {
    id: "android",
    title: { pt: "Android nativo com Kotlin", en: "Native Android with Kotlin", es: "Android nativo con Kotlin" },
    summary: {
      pt: "Apps em Kotlin e Jetpack Compose que descem até o metal quando precisam: C++ com NEON via JNI para imagem, áudio de baixa latência, modelos ONNX no aparelho e simulação determinística testável.",
      en: "Kotlin and Jetpack Compose apps that go down to the metal when needed: C++ with NEON via JNI for imaging, low-latency audio, on-device ONNX models and testable deterministic simulation.",
      es: "Apps en Kotlin y Jetpack Compose que bajan al metal cuando hace falta: C++ con NEON vía JNI para imagen, audio de baja latencia, modelos ONNX en el dispositivo y simulación determinista testeable.",
    },
    evidence: [
      { kind: "project", name: "MiLens", detail: { pt: "CameraX com frames YUV zero-copy para C++: HDR Mertens com pirâmide laplaciana, night stack com alinhamento sub-pixel, denoise bilateral e correção de lente", en: "CameraX with zero-copy YUV frames into C++: Mertens HDR with Laplacian pyramids, night stacking with sub-pixel alignment, bilateral denoise and lens correction", es: "CameraX con frames YUV zero-copy a C++: HDR Mertens con pirámide laplaciana, night stack con alineación sub-píxel, denoise bilateral y corrección de lente" } },
      { kind: "project", name: "Quadro", detail: { pt: "Edição não destrutiva por camadas renderizada na GPU com AGSL/RenderEffect, 115 presets e exportação para impressão", en: "Non-destructive layered editing rendered on the GPU with AGSL/RenderEffect, 115 presets and print export", es: "Edición no destructiva por capas renderizada en GPU con AGSL/RenderEffect, 115 presets y exportación para impresión" } },
      { kind: "project", name: "BeatBe Android", detail: { pt: "Oboe/AAudio em modo exclusivo a 48 kHz, mixer de 16 vozes e Demucs quantizado em INT8 com ONNX Runtime", en: "Oboe/AAudio in exclusive mode at 48 kHz, a 16-voice mixer and INT8-quantized Demucs on ONNX Runtime", es: "Oboe/AAudio en modo exclusivo a 48 kHz, mixer de 16 voces y Demucs cuantizado INT8 con ONNX Runtime" } },
      { kind: "project", name: "Serpente", detail: { pt: "Engine em Kotlin/JVM puro, ponto fixo Q16.16, PRNG com streams nomeados e golden replay como suíte de cada commit", en: "Pure Kotlin/JVM engine, Q16.16 fixed point, named-stream PRNG and golden replay as a per-commit test suite", es: "Engine en Kotlin/JVM puro, punto fijo Q16.16, PRNG con streams nombrados y golden replay como suite de cada commit" } },
      { kind: "project", name: "JustAfileManager · Barata", detail: { pt: "Motor de arquivos em NEON com Room e Media3; jogo C++/raylib empacotado com Android NDK", en: "NEON file engine with Room and Media3; C++/raylib game packaged with the Android NDK", es: "Motor de archivos en NEON con Room y Media3; juego C++/raylib empaquetado con Android NDK" } },
      { kind: "work", name: "Labsit · Credz", detail: { pt: "App bancário completo em React Native", en: "Complete banking app in React Native", es: "App bancaria completa en React Native" } },
    ],
    stack: ["Kotlin 2", "Jetpack Compose", "Hilt", "Room", "CameraX", "Media3", "AGSL", "NDK · JNI", "C++ NEON", "Oboe", "ONNX Runtime"],
  },
  {
    id: "product",
    title: { pt: "Produto, plataforma e acessibilidade", en: "Product, platform & accessibility", es: "Producto, plataforma y accesibilidad" },
    summary: {
      pt: "Sistemas completos que alguém usa todo dia: app bancário, telemedicina, ferramentas internas e tecnologia assistiva offline.",
      en: "Complete systems people use every day: banking app, telemedicine, internal tools and offline assistive technology.",
      es: "Sistemas completos que alguien usa cada día: app bancaria, telemedicina, herramientas internas y tecnología asistiva offline.",
    },
    evidence: [
      { kind: "work", name: "Labsit (Credz) · Doutor123 · Riachuelo", detail: { pt: "App bancário em React Native, telemedicina em Django/AWS e migração de legado com testes", en: "React Native banking app, Django/AWS telemedicine and tested legacy migration", es: "App bancaria en React Native, telemedicina en Django/AWS y migración de legado con tests" } },
      { kind: "work", name: "MAG Seguros · Tetris", detail: { pt: "Ferramentas internas em React, FastAPI e C# para o time de IA", en: "Internal tools in React, FastAPI and C# for the AI team", es: "Herramientas internas en React, FastAPI y C# para el equipo de IA" } },
      { kind: "project", name: "Universal-Language", detail: { pt: "Prancha de CAA offline com 13.801 pictogramas e 325 testes", en: "Offline AAC board with 13,801 pictograms and 325 tests", es: "Tablero de CAA offline con 13.801 pictogramas y 325 tests" } },
      { kind: "project", name: "enigma · Barata", detail: { pt: "IDE web com Monaco e JSON-RPC; jogo em C++/raylib rodando no Android", en: "Web IDE with Monaco and JSON-RPC; C++/raylib game running on Android", es: "IDE web con Monaco y JSON-RPC; juego en C++/raylib en Android" } },
    ],
    stack: ["React 19", "React Native", "FastAPI", "Django", "PWA", "a11y"],
  },
];

export type TechGroup = { id: string; title: T; items: { name: string | T; where?: string }[] };

export const techGroups: TechGroup[] = [
  {
    id: "engineering",
    title: { pt: "Engenharia e repositórios", en: "Engineering & repositories", es: "Ingeniería y repositorios" },
    items: [
      { name: "Git · branching · code review", where: "2017+" },
      { name: "Pull requests", where: "MAG" },
      { name: "Azure DevOps Repos · Pipelines", where: "MAG · Cogni2" },
      { name: "SonarQube · quality gates", where: "MAG · Riachuelo" },
      { name: { pt: "Cobertura de testes no pipeline", en: "Test coverage in the pipeline", es: "Cobertura de tests en el pipeline" }, where: "MAG" },
      { name: "pytest · Jest", where: "MAG · Riachuelo" },
      { name: { pt: "Monorepo (uv workspaces · Turborepo · pnpm)", en: "Monorepos (uv workspaces · Turborepo · pnpm)", es: "Monorepo (uv workspaces · Turborepo · pnpm)" }, where: "MAG" },
      { name: "ruff · Typer · Rich", where: "MAG" },
      { name: "Docker Compose" },
      { name: { pt: "Templates e padrões para o time", en: "Team templates and standards", es: "Templates y estándares para el equipo" }, where: "MAG" },
      { name: { pt: "Documentação técnica", en: "Technical documentation", es: "Documentación técnica" }, where: "MAG" },
      { name: "RPA · Selenium", where: "Itaú" },
    ],
  },
  {
    id: "lang",
    title: { pt: "Linguagens", en: "Languages", es: "Lenguajes" },
    items: [
      { name: "Python", where: "MAG · ASA · Cogni2 · CrunchDAO · Kaggle" },
      { name: "C# / .NET 10", where: "MAG · ASA" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "C++23", where: "VST · raylib" },
      { name: "SQL" },
      { name: "C" },
      { name: "Rust", where: "Tauri" },
      { name: "Kotlin", where: "Android" },
      { name: "Java" },
      { name: "PHP" },
      { name: "Dart" },
      { name: "GLSL" },
    ],
  },
  {
    id: "llm",
    title: { pt: "LLM e agentes", en: "LLMs & agents", es: "LLM y agentes" },
    items: [
      { name: "AWS Bedrock", where: "Energisa" },
      { name: "Claude Haiku · Opus", where: "Energisa" },
      { name: "Agno", where: "Energisa" },
      { name: "Azure AI Foundry", where: "MAG" },
      { name: "Azure OpenAI" },
      { name: "GPT-5 · 5-mini · 5-nano", where: "MAG" },
      { name: "Databricks Agent Bricks", where: "MAG" },
      { name: "LangGraph", where: "ASA · Energisa" },
      { name: "LangChain", where: "Cogni2" },
      { name: "PydanticAI" },
      { name: "smolagents" },
      { name: "MCP", where: "Energisa" },
      { name: "Ollama" },
      { name: "Qwen · Phi-4 · Llama" },
      { name: "Claude" },
    ],
  },
  {
    id: "docs",
    title: { pt: "Documentos e visão", en: "Documents & vision", es: "Documentos y visión" },
    items: [
      { name: "Azure Document Intelligence", where: "MAG" },
      { name: "Azure Content Understanding", where: "MAG" },
      { name: "OCR + LLM", where: "MAG · ASA" },
      { name: "DINOv2", where: "RSNA Knee" },
      { name: "OpenCV" },
      { name: "scikit-image" },
      { name: "Pillow" },
      { name: "diffusers · SDXL · ControlNet" },
      { name: "Real-ESRGAN" },
      { name: "Llama 3.2 Vision" },
    ],
  },
  {
    id: "rag",
    title: { pt: "RAG e busca", en: "RAG & search", es: "RAG y búsqueda" },
    items: [
      { name: { pt: "Busca vetorial e semântica", en: "Vector & semantic search", es: "Búsqueda vectorial y semántica" } },
      { name: "Embeddings" },
      { name: "Azure AI Search" },
      { name: "FAISS" },
      { name: { pt: "Memória em Redis", en: "Redis memory", es: "Memoria en Redis" } },
      { name: { pt: "Scoring e ranking", en: "Scoring & ranking", es: "Scoring y ranking" } },
    ],
  },
  {
    id: "eval",
    title: { pt: "Avaliação e qualidade", en: "Evaluation & quality", es: "Evaluación y calidad" },
    items: [
      { name: { pt: "F1 micro/macro por campo", en: "Per-field micro/macro F1", es: "F1 micro/macro por campo" }, where: "MAG" },
      { name: { pt: "Latência P50/P95", en: "P50/P95 latency", es: "Latencia P50/P95" }, where: "MAG" },
      { name: { pt: "Custo real por token", en: "Real per-token cost", es: "Costo real por token" }, where: "MAG" },
      { name: { pt: "Testes adversariais e guardrail", en: "Adversarial & guardrail testing", es: "Pruebas adversariales y guardrails" }, where: "MAG" },
      { name: "CRPS", where: "Synth" },
      { name: "TS-AUC", where: "ADIA" },
      { name: { pt: "Validação cruzada aninhada", en: "Nested cross-validation", es: "Validación cruzada anidada" }, where: "Broad" },
      { name: "Langfuse", where: "Energisa" },
      { name: "OpenTelemetry · Arize Phoenix" },
      { name: "SonarQube", where: "MAG" },
          ],
  },
  {
    id: "ml",
    title: { pt: "ML e ciência", en: "ML & science", es: "ML y ciencia" },
    items: [
      { name: "PyTorch" },
      { name: "scikit-learn" },
      { name: "Gradient boosting", where: "ADIA" },
      { name: "TCN causal", where: "ADIA" },
      { name: "Dueling DQN" },
      { name: "numpy · SciPy · pandas" },
      { name: "Qiskit · IBM Quantum" },
      { name: "mpmath" },
      { name: "UMAP · HDBSCAN · t-SNE" },
      { name: "spaCy · networkx" },
      { name: "CuPy" },
      { name: "faster-whisper" },
    ],
  },
  {
    id: "cloud",
    title: { pt: "Cloud e infraestrutura", en: "Cloud & infrastructure", es: "Cloud e infraestructura" },
    items: [
      { name: "Azure Functions (Isolated)", where: "MAG · ASA" },
      { name: "Service Bus", where: "MAG" },
      { name: "Entra ID · JWT/OIDC", where: "MAG" },
      { name: "Azure DevOps" },
      { name: "AWS Lambda · EC2 · S3 · RDS", where: "Doutor123 · Brasilprev" },
      { name: "GCP" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "CI/CD" },
      { name: "uv · vcpkg · CMake" },
    ],
  },
  {
    id: "data",
    title: { pt: "Dados e mensageria", en: "Data & messaging", es: "Datos y mensajería" },
    items: [
      { name: "Cosmos DB", where: "MAG" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "SQLite" },
      { name: "RabbitMQ" },
      { name: "Spark · Parquet" },
      { name: "Databricks" },
    ],
  },
  {
    id: "backend",
    title: { pt: "Backend e arquitetura", en: "Backend & architecture", es: "Backend y arquitectura" },
    items: [
      { name: { pt: "Arquitetura hexagonal", en: "Hexagonal architecture", es: "Arquitectura hexagonal" }, where: "MAG" },
      { name: "Clean Architecture" },
      { name: { pt: "Orientada a eventos", en: "Event-driven", es: "Orientada a eventos" } },
      { name: "FastAPI" },
      { name: "Django · DRF · Celery" },
      { name: "Node · Express" },
      { name: "Flask · Tornado" },
      { name: "WebSocket · SSE · JSON-RPC" },
      { name: "WhatsApp Business API", where: "ASA · Cogni2" },
    ],
  },
  {
    id: "front",
    title: { pt: "Frontend e apps", en: "Frontend & apps", es: "Frontend y apps" },
    items: [
      { name: "React 19 · Vite" },
      { name: "Next.js" },
      { name: "Angular" },
      { name: "Svelte" },
      { name: "Tauri" },
      { name: "Zustand · Tailwind" },
      { name: "Monaco Editor" },
      { name: "PWA · Service Worker" },
      { name: "Canvas · WebGL · WASM" },
    ],
  },
  {
    id: "android",
    title: { pt: "Android e mobile", en: "Android & mobile", es: "Android y mobile" },
    items: [
      { name: "Kotlin 2 · Coroutines · Flow", where: "5 apps" },
      { name: "Jetpack Compose · Material 3" },
      { name: "Hilt · Room · DataStore" },
      { name: "CameraX · Camera2", where: "MiLens · Quadro" },
      { name: "AGSL · RenderEffect", where: "Quadro" },
      { name: "NDK · JNI · C++17 NEON", where: "MiLens" },
      { name: "Oboe · AAudio", where: "BeatBe" },
      { name: "ONNX Runtime Mobile", where: "Demucs" },
      { name: "Media3 · ExoPlayer · Coil" },
      { name: "AGP 9 · convention plugins", where: "Serpente" },
      { name: "React Native", where: "Credz" },
    ],
  },
  {
    id: "native",
    title: { pt: "Áudio e nativo", en: "Audio & native", es: "Audio y nativo" },
    items: [
      { name: "JUCE 8" },
      { name: "CLAP · VST3" },
      { name: "DSP · SIMD" },
      { name: "Web Audio" },
      { name: "raylib" },
      { name: "Android NDK" },
    ],
  },
];

export const evidenceLabel: Record<EvidenceKind, T> = {
  work: { pt: "Empresa", en: "Client work", es: "Empresa" },
  competition: { pt: "Competição", en: "Competition", es: "Competencia" },
  project: { pt: "Projeto", en: "Project", es: "Proyecto" },
};

export { same };
