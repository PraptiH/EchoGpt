import { CircleIcon, type LucideIcon } from "lucide-react";

export interface AIModel {
  name: string;
  provider: string;
  icon: LucideIcon;
  iconColor: string;
  badge?: string;
  status: "available" | "coming-soon";
}

export const models: AIModel[] = [
  {
    name: "GPT-4o",
    provider: "OpenAI",
    icon: CircleIcon,
    iconColor: "#10A37F",
    badge: "Best for Logic",
    status: "available",
  },
  {
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    icon: CircleIcon,
    iconColor: "#D97706",
    badge: "Best for Writing",
    status: "available",
  },
  {
    name: "Gemini 1.5 Pro",
    provider: "Google",
    icon: CircleIcon,
    iconColor: "#4285F4",
    badge: "Best for Multi-modal",
    status: "coming-soon",
  },
  {
    name: "Llama 3.1",
    provider: "Meta",
    icon: CircleIcon,
    iconColor: "#059669",
    badge: "Best Open Source",
    status: "coming-soon",
  },
  {
    name: "Mistral Large",
    provider: "Mistral AI",
    icon: CircleIcon,
    iconColor: "#7C3AED",
    badge: "Best Speed-to-Cost",
    status: "coming-soon",
  },
];