export interface AIModel {
  name: string;
  provider: string;
  logo: string;
  monochromeLogo?: boolean;
  badge?: string;
  status: "available" | "coming-soon";
}

export const models: AIModel[] = [
  {
    name: "GPT-6 Astra",
    provider: "OpenAI",
    logo: "/assets/icons/models/openai.svg",
    monochromeLogo: true,
    badge: "Best for Reasoning",
    status: "available",
  },
  {
    name: "Claude Opus 5.5",
    provider: "Anthropic",
    logo: "/assets/icons/models/claude.svg",
    badge: "Best for Coding & Writing",
    status: "available",
  },
  {
    name: "Gemini 3.8 Flash",
    provider: "Google",
    logo: "/assets/icons/models/gemini.svg",
    badge: "Best for Multi-modal",
    status: "available",
  },
  {
    name: "DeepSeek V4 Pro",
    provider: "DeepSeek",
    logo: "/assets/icons/models/deepseek.svg",
    badge: "Best Open Weights",
    status: "coming-soon",
  },
  {
    name: "Mistral Large 3",
    provider: "Mistral AI",
    logo: "/assets/icons/models/mistral.svg",
    badge: "Best Speed-to-Cost",
    status: "coming-soon",
  },
];
