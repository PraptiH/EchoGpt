const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (vercelUrl ? `https://${vercelUrl}` : process.env.NODE_ENV === "production" ? "https://echogpt.ai" : "http://localhost:3000");
export const siteConfig = {
  name: "EchoGPT",
  url: siteUrl,
  title: "EchoGPT: Every leading AI model in one sidebar",
  description:
    "Chat, write, translate and research with GPT, Claude, Gemini and more from a single AI sidebar that works on every website and on your desktop.",
  links: {
    sales: "mailto:sales@echogpt.ai",
  },
};

export interface DownloadTarget {
  label: string;
  platform: string;
}

export const downloads: DownloadTarget[] = [
  { label: "Add to Chrome", platform: "Chrome extension" },
  { label: "Add to Edge", platform: "Edge add-on" },
  { label: "Windows", platform: "Desktop app" },
  { label: "macOS", platform: "Desktop app" },
];

export const isExternalHref = (href: string) => /^(https?:|mailto:)/.test(href);
