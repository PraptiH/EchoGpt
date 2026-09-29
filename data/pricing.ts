export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}

export const plans: PricingPlan[] = [
  {
    name: "Free",
    description: "Perfect for exploring conversational AI.",
    price: "$0",
    period: "/ forever",
    features: [
      "50 messages per day",
      "Access to standard GPT-4o mini",
      "Web interface access",
      "Basic thread history (3 days)",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    description: "Unleash the full power of advanced models.",
    price: "$19",
    period: "/ per month",
    features: [
      "Unlimited messages & history",
      "Access to all premium models",
      "Create custom personas",
      "Advanced file & document analysis",
    ],
    cta: "Upgrade to Pro",
    recommended: true,
  },
  {
    name: "Enterprise",
    description: "Scale AI securely across your organization.",
    price: "Custom",
    period: "/ tailored billing",
    features: [
      "Dedicated, isolated server nodes",
      "Single Sign-On (SSO) & SAML",
      "Custom SLA & dedicated support",
      "API access with custom rate limits",
    ],
    cta: "Contact Sales",
  },
];
