export type ProductModule = {
  id: string;
  label: string;
  title: string;
  pages: number;
  image: string;
  description: string;
  highlights: string[];
};

export const PRODUCT = {
  name: "Protocolo 4 Semanas",
  price: "R$ 97,00",
  priceCents: 9700,
  guaranteeDays: 7,
  totalPages: 79,
  totalPdfs: 4,
  recipeCount: 50,
  modules: [
    {
      id: "fundamentos",
      label: "Parte 1",
      title: "Fundamentos e mapa do processo",
      pages: 9,
      image: "/previews/apresentacao-capa.jpg",
      description:
        "A base para entender o método, organizar a execução e visualizar as quatro etapas do protocolo.",
      highlights: ["Três pilares do método", "Mentalidade e constância", "Mapa das quatro semanas"],
    },
    {
      id: "treino",
      label: "Parte 2",
      title: "Treino progressivo em casa",
      pages: 29,
      image: "/previews/treino-capa.jpg",
      description:
        "Um calendário diário com circuitos, cardio, core, progressão semanal e adaptações de execução.",
      highlights: ["15 exercícios explicados", "Sessões de 25 a 50 minutos", "Variações para diferentes níveis"],
    },
    {
      id: "alimentacao",
      label: "Parte 3",
      title: "Plano alimentar sem improviso",
      pages: 19,
      image: "/previews/dieta-capa.jpg",
      description:
        "Orientações para organizar calorias e refeições, com cardápio de sete dias e lista de compras.",
      highlights: ["Cardápio de 7 dias", "Substituições e lista de compras", "8 preparos rápidos"],
    },
    {
      id: "receitas",
      label: "Expansão",
      title: "50 Receitas Fit",
      pages: 22,
      image: "/previews/receitas-capa.jpg",
      description:
        "Uma expansão com cafés, almoços, jantares, lanches, doces, marmitas e molhos para variar a rotina.",
      highlights: ["50 receitas numeradas", "Tempo de preparo", "Calorias e macros estimados"],
    },
  ] satisfies ProductModule[],
} as const;

const configuredCheckoutUrl = import.meta.env.VITE_CAKTO_CHECKOUT_URL?.trim() ?? "";

export const DELIVERY_READY = import.meta.env.VITE_DELIVERY_READY === "true";
export const SUPPORT_EMAIL = import.meta.env.VITE_SUPPORT_EMAIL?.trim() ?? "";

export function normalizeCheckoutUrl(value = configuredCheckoutUrl): string | null {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

export function buildCheckoutUrl(
  value = configuredCheckoutUrl,
  currentSearch = typeof window === "undefined" ? "" : window.location.search,
): string | null {
  const normalized = normalizeCheckoutUrl(value);
  if (!normalized) {
    return null;
  }

  const checkout = new URL(normalized);
  const source = new URLSearchParams(currentSearch);
  const allowedTrackingKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "src",
  ];

  for (const key of allowedTrackingKeys) {
    const trackingValue = source.get(key);
    if (trackingValue && !checkout.searchParams.has(key)) {
      checkout.searchParams.set(key, trackingValue);
    }
  }

  if (!checkout.searchParams.has("src")) {
    checkout.searchParams.set("src", "site-protocolo-4-semanas");
  }

  return checkout.toString();
}
