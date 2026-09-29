import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How EchoGPT collects, uses and protects your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 1, 2026"
      intro="EchoGPT is built privacy-first. This policy explains what we collect when you use the EchoGPT sidebar, desktop app and website, and the choices you have."
      sections={[
        {
          heading: "Information we collect",
          body: "Account details you provide (such as your email address), the prompts and files you send to AI models, and basic usage diagnostics that help us keep the service reliable.",
        },
        {
          heading: "How we use your information",
          body: "We use your data only to provide and improve EchoGPT, secure your account and communicate with you about the product. We never train models on your prompts or files.",
        },
        {
          heading: "Model providers",
          body: "Prompts are forwarded to the model provider you choose (for example OpenAI, Anthropic or Google) under agreements that prohibit them from training on your data.",
        },
        {
          heading: "Security and retention",
          body: "Data is encrypted in transit and at rest with AES-256. You can export or permanently delete your conversation history at any time from your account settings.",
        },
        {
          heading: "Contact",
          body: "Questions about privacy? Email privacy@echogpt.ai and our team will respond within two business days.",
        },
      ]}
    />
  );
}
