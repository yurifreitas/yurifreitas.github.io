import type { T } from "./types";

export type Service = { id: string; title: T; summary: T; deliverables: T[] };
export type Case = { id: string; sector: T; client: string; via?: string; title: T; outcome: T; metrics: { value: string; label: T }[]; stack: string[] };
export type Engagement = { id: string; name: T; fit: T; points: T[]; highlight?: boolean };
export type Step = { title: T; body: T };

export const services: Service[] = [
  {
    id: "rag",
    title: { pt: "Assistentes e agentes com IA", en: "AI assistants & agents", es: "Asistentes y agentes con IA" },
    summary: {
      pt: "Atendimento, agendamento, cobrança e FAQ sobre a base de conhecimento da sua empresa — no WhatsApp ou no seu sistema.",
      en: "Support, scheduling, collections and FAQ grounded in your company’s knowledge — on WhatsApp or inside your product.",
      es: "Atención, agenda, cobranza y FAQ sobre el conocimiento de su empresa — en WhatsApp o dentro de su sistema.",
    },
    deliverables: [
      { pt: "RAG com busca vetorial e semântica", en: "RAG with vector and semantic search", es: "RAG con búsqueda vectorial y semántica" },
      { pt: "Orquestração de agentes (LangGraph)", en: "Agent orchestration (LangGraph)", es: "Orquestación de agentes (LangGraph)" },
      { pt: "Integração com WhatsApp e APIs internas", en: "WhatsApp and internal API integration", es: "Integración con WhatsApp y APIs internas" },
    ],
  },
  {
    id: "docs",
    title: { pt: "IA documental", en: "Document AI", es: "IA documental" },
    summary: {
      pt: "Extração e validação automática de RG, CNH, comprovantes, boletos e certidões, com custo por documento conhecido.",
      en: "Automated extraction and validation of IDs, proofs of address, payment slips and certificates, with a known cost per document.",
      es: "Extracción y validación automática de documentos de identidad, comprobantes, boletos y certificados, con costo por documento conocido.",
    },
    deliverables: [
      { pt: "OCR + LLM para documentos brasileiros", en: "OCR + LLM for Brazilian documents", es: "OCR + LLM para documentos brasileños" },
      { pt: "Pipelines serverless em Azure ou AWS", en: "Serverless pipelines on Azure or AWS", es: "Pipelines serverless en Azure o AWS" },
      { pt: "Fila, reprocessamento e rastreabilidade", en: "Queueing, reprocessing and traceability", es: "Colas, reprocesamiento y trazabilidad" },
    ],
  },
  {
    id: "sustain",
    title: { pt: "Sustentação e evolução", en: "Maintenance & evolution", es: "Sostenimiento y evolución" },
    summary: {
      pt: "Sistemas que já estão no ar e precisam continuar de pé: correções, performance, migrações e novas funcionalidades sem parar a operação.",
      en: "Systems already live that need to stay up: fixes, performance, migrations and new features without stopping operations.",
      es: "Sistemas ya en vivo que necesitan seguir de pie: correcciones, rendimiento, migraciones y nuevas funcionalidades sin detener la operación.",
    },
    deliverables: [
      { pt: "Correções e estabilidade em sistemas críticos", en: "Fixes and stability in critical systems", es: "Correcciones y estabilidad en sistemas críticos" },
      { pt: "Migração de legado e de versões de plataforma", en: "Legacy and platform-version migrations", es: "Migración de legado y de versiones de plataforma" },
      { pt: "Observabilidade, qualidade e documentação para o time", en: "Observability, quality and team documentation", es: "Observabilidad, calidad y documentación para el equipo" },
    ],
  },
  {
    id: "automation",
    title: { pt: "Automação e integração", en: "Automation & integration", es: "Automatización e integración" },
    summary: {
      pt: "Processos manuais e repetitivos viram fluxos automáticos, integrados aos sistemas que a empresa já usa.",
      en: "Manual, repetitive processes become automated flows wired into the systems you already run.",
      es: "Procesos manuales y repetitivos se convierten en flujos automáticos integrados a los sistemas que ya usa.",
    },
    deliverables: [
      { pt: "RPA e integrações bancárias", en: "RPA and banking integrations", es: "RPA e integraciones bancarias" },
      { pt: "APIs em Python, C# e Node", en: "APIs in Python, C# and Node", es: "APIs en Python, C# y Node" },
      { pt: "Arquitetura orientada a eventos", en: "Event-driven architecture", es: "Arquitectura orientada a eventos" },
    ],
  },
  {
    id: "data",
    title: { pt: "Ciência de dados e previsão", en: "Data science & forecasting", es: "Ciencia de datos y pronóstico" },
    summary: {
      pt: "Modelos de previsão, ranking e detecção de mudança validados com rigor — o mesmo rigor que aplico em competições internacionais.",
      en: "Forecasting, ranking and change-detection models validated rigorously — the same rigor I apply in international competitions.",
      es: "Modelos de pronóstico, ranking y detección de cambios validados con rigor — el mismo rigor que aplico en competencias internacionales.",
    },
    deliverables: [
      { pt: "Séries temporais e modelos probabilísticos", en: "Time series and probabilistic models", es: "Series temporales y modelos probabilísticos" },
      { pt: "Validação sem vazamento de dados", en: "Leak-free validation", es: "Validación sin fuga de datos" },
      { pt: "Dashboards e APIs de previsão", en: "Forecast dashboards and APIs", es: "Dashboards y APIs de pronóstico" },
    ],
  },
  {
    id: "product",
    title: { pt: "Produto web e mobile", en: "Web & mobile product", es: "Producto web y mobile" },
    summary: {
      pt: "Do backend ao app: sistemas completos em FastAPI, Django, React e React Native, prontos para operar.",
      en: "Backend to app: complete systems in FastAPI, Django, React and React Native, ready to operate.",
      es: "Del backend a la app: sistemas completos en FastAPI, Django, React y React Native, listos para operar.",
    },
    deliverables: [
      { pt: "MVP e evolução de produto", en: "MVP and product evolution", es: "MVP y evolución de producto" },
      { pt: "Cloud, Docker e CI/CD", en: "Cloud, Docker and CI/CD", es: "Cloud, Docker y CI/CD" },
      { pt: "Acessibilidade e performance", en: "Accessibility and performance", es: "Accesibilidad y rendimiento" },
    ],
  },
];

export const cases: Case[] = [
  {
    id: "energisa",
    client: "Energisa",
    sector: { pt: "Energia", en: "Energy", es: "Energía" },
    title: { pt: "Agentes de IA para gestão de frotas", en: "AI agents for fleet management", es: "Agentes de IA para gestión de flotas" },
    outcome: {
      pt: "Sistema em desenvolvimento que leva IA à manutenção da frota: atendimento conversacional, integração com a plataforma de frota, leitura de documentos e imagens e parecer completo da ordem de serviço — com regra de negócio em código e aprovação humana nas exceções.",
      en: "A system in development bringing AI to fleet maintenance: conversational intake, integration with the fleet platform, document and image reading, and a complete work-order assessment — with business rules in code and human approval for exceptions.",
      es: "Sistema en desarrollo que lleva IA al mantenimiento de flota: atención conversacional, integración con la plataforma de flota, lectura de documentos e imágenes y dictamen completo de la orden de servicio — con reglas de negocio en código y aprobación humana en las excepciones.",
    },
    metrics: [
      { value: "LLM", label: { pt: "agentes conversacionais e de análise", en: "conversational and analytical agents", es: "agentes conversacionales y de análisis" } },
      { value: "OCR", label: { pt: "documentos e imagens", en: "documents and images", es: "documentos e imágenes" } },
      { value: "HITL", label: { pt: "humano aprova a exceção", en: "human approves exceptions", es: "humano aprueba la excepción" } },
    ],
    stack: ["AWS Bedrock", "Claude", "FastAPI", "Next.js", "Python"],
  },
  {
    id: "mag",
    client: "MAG Seguros",
    via: "Tetris",
    sector: { pt: "Seguros", en: "Insurance", es: "Seguros" },
    title: { pt: "Plataforma corporativa de IA", en: "Corporate AI platform", es: "Plataforma corporativa de IA" },
    outcome: {
      pt: "Evolução e sustentação da camada pela qual a seguradora usa modelos de linguagem — agentes, IA documental e transcrição — e das ferramentas que medem qualidade, custo e desempenho dos modelos para apoiar decisões técnicas.",
      en: "Evolving and sustaining the layer through which the insurer uses language models — agents, document AI and transcription — and the tooling that measures model quality, cost and performance to support technical decisions.",
      es: "Evolución y sostenimiento de la capa por la cual la aseguradora usa modelos de lenguaje — agentes, IA documental y transcripción — y de las herramientas que miden calidad, costo y rendimiento de los modelos para apoyar decisiones técnicas.",
    },
    metrics: [
      { value: "LLM", label: { pt: "agentes e IA documental", en: "agents and document AI", es: "agentes e IA documental" } },
      { value: ".NET · Python", label: { pt: "plataforma e ferramentas", en: "platform and tooling", es: "plataforma y herramientas" } },
      { value: "Azure", label: { pt: "serverless em produção", en: "serverless in production", es: "serverless en producción" } },
    ],
    stack: [".NET", "Azure Functions", "Azure AI Foundry", "Cosmos DB", "Python"],
  },
  {
    id: "asa",
    client: "ASA Bank",
    via: "Sciensa",
    sector: { pt: "Banco", en: "Banking", es: "Banca" },
    title: { pt: "Agente bancário no WhatsApp com boletos e DDA", en: "WhatsApp banking agent with payment slips and DDA", es: "Agente bancario en WhatsApp con boletos y DDA" },
    outcome: {
      pt: "Atendimento automatizado do banco no WhatsApp: leitura e validação de boletos por OCR, consulta e tratamento de boletos DDA, análise de documentos e integração com os sistemas bancários — fluxos que antes exigiam conferência manual.",
      en: "The bank’s automated WhatsApp service: OCR reading and validation of payment slips, DDA (direct debit) slip lookup and handling, document analysis and integration with core banking systems — flows that used to require manual checks.",
      es: "Atención automatizada del banco por WhatsApp: lectura y validación de boletos por OCR, consulta y gestión de boletos DDA, análisis de documentos e integración con los sistemas bancarios — flujos que antes requerían revisión manual.",
    },
    metrics: [
      { value: "DDA", label: { pt: "boletos consultados e tratados", en: "slips looked up and handled", es: "boletos consultados y gestionados" } },
      { value: "OCR", label: { pt: "leitura e validação", en: "reading and validation", es: "lectura y validación" } },
      { value: "RAG", label: { pt: "orquestrado com LangGraph", en: "orchestrated with LangGraph", es: "orquestado con LangGraph" } },
    ],
    stack: ["LangGraph", "Azure Functions", "Python", "C#", "WhatsApp API"],
  },
  {
    id: "cogni2",
    client: "Cogni2",
    sector: { pt: "IA generativa", en: "Generative AI", es: "IA generativa" },
    title: { pt: "Plataforma de agentes de IA", en: "AI agents platform", es: "Plataforma de agentes de IA" },
    outcome: {
      pt: "Plataforma completa para criar e operar agentes conversacionais para clientes de diferentes segmentos: bases de conhecimento com RAG, atendimento, agendamento e prospecção, integração com WhatsApp e APIs externas e processamento assíncrono em escala.",
      en: "A complete platform to build and run conversational agents for clients across industries: RAG knowledge bases, support, scheduling and prospecting, WhatsApp and external API integrations, and asynchronous processing at scale.",
      es: "Plataforma completa para crear y operar agentes conversacionales para clientes de distintos segmentos: bases de conocimiento con RAG, atención, agenda y prospección, integración con WhatsApp y APIs externas y procesamiento asíncrono a escala.",
    },
    metrics: [
      { value: "RAG", label: { pt: "bases de conhecimento por cliente", en: "knowledge bases per client", es: "bases de conocimiento por cliente" } },
      { value: "Multi", label: { pt: "agentes e clientes na mesma plataforma", en: "agents and clients on one platform", es: "agentes y clientes en una plataforma" } },
      { value: "WhatsApp", label: { pt: "e APIs externas integradas", en: "and external APIs integrated", es: "y APIs externas integradas" } },
    ],
    stack: ["OpenAI", "LangChain", "RAG", "Azure Functions", "Django"],
  },
  {
    id: "itau",
    client: "Operações Itaú",
    sector: { pt: "Cobrança", en: "Collections", es: "Cobranza" },
    title: { pt: "RPA de cobrança em escala bancária", en: "Bank-scale collections RPA", es: "RPA de cobranza a escala bancaria" },
    outcome: {
      pt: "Automação operando o sistema de call center como dezenas de atendentes simultâneos, eliminando boa parte do esforço manual.",
      en: "Automation operating the call-center system like dozens of concurrent agents, removing much of the manual effort.",
      es: "Automatización que opera el sistema de call center como decenas de agentes simultáneos, eliminando gran parte del esfuerzo manual.",
    },
    metrics: [{ value: "dezenas", label: { pt: "de atendentes simulados", en: "of simulated agents", es: "de agentes simulados" } }],
    stack: ["Python", "Selenium"],
  },
];

export const engagements: Engagement[] = [
  {
    id: "project",
    name: { pt: "Projeto fechado", en: "Fixed-scope project", es: "Proyecto cerrado" },
    fit: { pt: "Escopo claro, prazo e valor definidos.", en: "Clear scope, fixed timeline and price.", es: "Alcance claro, plazo y valor definidos." },
    points: [
      { pt: "Diagnóstico e proposta", en: "Assessment and proposal", es: "Diagnóstico y propuesta" },
      { pt: "Entregas por etapa", en: "Milestone deliveries", es: "Entregas por etapa" },
      { pt: "Código e documentação são seus", en: "You own code and docs", es: "Código y documentación son suyos" },
    ],
  },
  {
    id: "contract",
    name: { pt: "Contrato PJ / alocação", en: "Contract / embedded", es: "Contrato / asignación" },
    fit: { pt: "Reforço sênior dentro do seu time.", en: "Senior reinforcement inside your team.", es: "Refuerzo sénior dentro de su equipo." },
    points: [
      { pt: "Mensal, remoto", en: "Monthly, remote", es: "Mensual, remoto" },
      { pt: "Rituais e ferramentas do seu time", en: "Your team’s rituals and tools", es: "Rituales y herramientas de su equipo" },
      { pt: "Referência técnica em IA", en: "Technical lead on AI", es: "Referente técnico en IA" },
    ],
    highlight: true,
  },
  {
    id: "consulting",
    name: { pt: "Consultoria e avaliação", en: "Consulting & assessment", es: "Consultoría y evaluación" },
    fit: { pt: "Decidir antes de investir.", en: "Decide before you invest.", es: "Decidir antes de invertir." },
    points: [
      { pt: "Viabilidade e arquitetura", en: "Feasibility and architecture", es: "Viabilidad y arquitectura" },
      { pt: "Auditoria de modelo em uso", en: "Audit of models in use", es: "Auditoría de modelos en uso" },
      { pt: "Relatório com recomendação", en: "Report with a recommendation", es: "Informe con recomendación" },
    ],
  },
];

export const process: Step[] = [
  {
    title: { pt: "Conversa", en: "Conversation", es: "Conversación" },
    body: { pt: "Entendo o problema, os dados e o que conta como sucesso.", en: "I learn the problem, the data and what success means.", es: "Entiendo el problema, los datos y qué cuenta como éxito." },
  },
  {
    title: { pt: "Proposta", en: "Proposal", es: "Propuesta" },
    body: { pt: "Escopo, prazo, formato de contratação e métricas de aceite.", en: "Scope, timeline, engagement model and acceptance metrics.", es: "Alcance, plazo, modelo de contratación y métricas de aceptación." },
  },
  {
    title: { pt: "Entrega", en: "Delivery", es: "Entrega" },
    body: { pt: "Ciclos curtos, com demonstração e número a cada etapa.", en: "Short cycles, with a demo and a number at each step.", es: "Ciclos cortos, con demo y número en cada etapa." },
  },
  {
    title: { pt: "Produção", en: "Production", es: "Producción" },
    body: { pt: "Monitoramento, custo sob controle e documentação para o seu time.", en: "Monitoring, controlled cost and documentation for your team.", es: "Monitoreo, costo bajo control y documentación para su equipo." },
  },
];

export const sectors: T[] = [
  { pt: "Bancos", en: "Banking", es: "Bancos" },
  { pt: "Seguros", en: "Insurance", es: "Seguros" },
  { pt: "Previdência", en: "Pensions", es: "Previsión" },
  { pt: "Saúde", en: "Healthcare", es: "Salud" },
  { pt: "Varejo", en: "Retail", es: "Retail" },
  { pt: "Meio ambiente", en: "Environment", es: "Medio ambiente" },
];
