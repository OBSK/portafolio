export interface ExperienceEntry {
  period: string;
  role: string;
  company: string;
  achievements: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  impact: string;
  year: string;
  link?: string;
  tags: string[];
}

export interface InsightEntry {
  title: string;
  metric: string;
  detail: string;
}

export const experience: ExperienceEntry[] = [
  {
    period: "2022 — Actualidad",
    role: "Head of Product Design",
    company: "Nebula Labs",
    achievements: [
      "Implementé un sistema de diseño cuantificable que redujo en 40% el tiempo de entrega",
      "Lideré squads remotos en 4 husos horarios con OKRs centrados en valor para el usuario",
      "Definí la estrategia UX de la plataforma insignia, alcanzando NPS 71"
    ]
  },
  {
    period: "2019 — 2022",
    role: "Lead UX Researcher",
    company: "Atlas Health",
    achievements: [
      "Orquesté investigaciones inmersivas en hospitales de 3 países",
      "Creé journey maps vivos que alinearon producto, marketing y operaciones",
      "Introduje métricas de experiencia clínica reduciendo errores de onboarding en 62%"
    ]
  },
  {
    period: "2015 — 2019",
    role: "Product Designer",
    company: "Freelance Studio",
    achievements: [
      "Diseñé lanzamientos digitales para startups con foco en impacto social",
      "Mentoricé a más de 50 diseñadores emergentes en comunidades LATAM",
      "Convertí ideas en MVPs funcionales en ciclos de menos de 6 semanas"
    ]
  }
];

export const projects: ProjectEntry[] = [
  {
    name: "Helix Navigator",
    description:
      "Plataforma de visualización que traduce datos biomédicos en historias accionables para equipos médicos multidisciplinarios.",
    impact: "Integración completa en 14 hospitales, reduciendo tiempos de diagnóstico en 22%.",
    year: "2024",
    tags: ["Estrategia", "Design Systems", "Visualización de datos"]
  },
  {
    name: "Savia Journey",
    description:
      "Servicio híbrido que acompaña a pacientes crónicos con coaching digital y módulos educativos personalizados.",
    impact: "Retención mensual superior al 93% y comunidad de 18K pacientes activos.",
    year: "2023",
    tags: ["Investigación", "UX Writing", "Servicio"]
  },
  {
    name: "Orbit Shift",
    description:
      "Framework para facilitar pivotes estratégicos en startups, combinando sesiones co-creativas y tableros de métricas vivas.",
    impact: "Adoptado por 12 compañías serie A con mejoras en revenue del 35% promedio.",
    year: "2022",
    tags: ["Facilitación", "Producto", "Estrategia"]
  }
];

export const insights: InsightEntry[] = [
  {
    title: "Diseño regenerativo",
    metric: "+18 KPI",
    detail: "Modelo de impacto que vincula bienestar del equipo con métricas de negocio tangibles."
  },
  {
    title: "Laboratorios de co-creación",
    metric: "72h",
    detail: "Prototipos funcionales validados en 3 días con stakeholders clave y usuarios reales."
  },
  {
    title: "Inteligencia aumentada",
    metric: "5 capas",
    detail: "Integración responsable de IA para potenciar decisiones éticas y centradas en las personas."
  }
];
