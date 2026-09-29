const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (vercelUrl ? `https://${vercelUrl}` : process.env.NODE_ENV === "production" ? "https://echogpt.ai" : "http://localhost:3000");
const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.echogpt.ai";

export const siteConfig = {
  name: "EchoGPT",
  url: siteUrl,
  title: "EchoGPT: Every leading AI model in one sidebar",
  description:
    "Chat, write, translate and research with GPT, Claude, Gemini and more from a single AI sidebar that works on every website and on your desktop.",
  links: {
    webApp: appUrl,
    docs: `${appUrl}/docs`,
    status: `${appUrl}/status`,
    sales: "mailto:sales@echogpt.ai",
    support: "mailto:support@echogpt.ai",
    careers: "mailto:careers@echogpt.ai",
  },
  social: {
    x: "https://x.com/echogpt",
    github: "https://github.com/echogpt",
    community: `${appUrl}/community`,
  },
};

export interface DownloadTarget {
  label: string;
  platform: string;
  href: string;
}

export const downloads: DownloadTarget[] = [
  { label: "Add to Chrome", platform: "Chrome extension", href: `${appUrl}/download/chrome` },
  { label: "Add to Edge", platform: "Edge add-on", href: `${appUrl}/download/edge` },
  { label: "Windows", platform: "Desktop app", href: `${appUrl}/download/windows` },
  { label: "macOS", platform: "Desktop app", href: `${appUrl}/download/macos` },
];

export const isExternalHref = (href: string) => /^(https?:|mailto:)/.test(href);
