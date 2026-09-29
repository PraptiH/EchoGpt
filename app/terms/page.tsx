import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of EchoGPT.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="September 1, 2026"
      intro="These terms govern your use of EchoGPT's browser sidebar, desktop apps, website and API. By creating an account you agree to them."
      sections={[
        {
          heading: "Your account",
          body: "You are responsible for keeping your credentials secure and for all activity under your account. You must be at least 16 years old to use EchoGPT.",
        },
        {
          heading: "Acceptable use",
          body: "Do not use EchoGPT to break the law, infringe on others' rights, generate malware or abuse the model providers' usage policies. We may suspend accounts that do.",
        },
        {
          heading: "Your content",
          body: "You own the prompts you send and the outputs you receive. You grant us only the limited rights needed to operate the service on your behalf.",
        },
        {
          heading: "Plans and billing",
          body: "Paid plans renew automatically until cancelled. You can cancel at any time and keep access until the end of the current billing period.",
        },
        {
          heading: "Changes to these terms",
          body: "If we make material changes we will notify you by email at least 30 days before they take effect.",
        },
      ]}
    />
  );
}
