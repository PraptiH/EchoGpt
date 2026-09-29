export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Senior Staff Engineer, Linear Systems",
    quote:
      "EchoGPT completely changed my engineering workflow. Being able to run the same prompt side-by-side through Claude and GPT-4o saved me hours of code review.",
  },
  {
    name: "Marcus Thorne",
    role: "VP of Product Marketing, Verge Analytics",
    quote:
      "The custom personas are incredibly powerful. We built a specialized brand-voice editor in 10 minutes, and now our entire marketing team uses it daily.",
  },
  {
    name: "Aris Vance",
    role: "Principal Product Manager, Sentry Labs",
    quote:
      "As a product manager, I deal with endless requirements. Uploading 100-page specs into Gemini via EchoGPT to synthesize action plans has been pure magic.",
  },
  {
    name: "Priya Raman",
    role: "Head of Data Science, Northwind AI",
    quote:
      "Switching models mid-thread is a game changer. I prototype with Llama, then validate edge cases with Claude without losing any context.",
  },
  {
    name: "Daniel Okafor",
    role: "CTO, Brightpath Health",
    quote:
      "Security review was the easiest we've ever done. SOC2 policies, zero training on our data, and SSO out of the box got legal to sign off in a week.",
  },
  {
    name: "Elena Petrova",
    role: "Senior Content Strategist, Lumen Media",
    quote:
      "The browser sidebar lives next to every doc I write. Rewriting in a different tone or translating a draft takes two clicks instead of ten.",
  },
  {
    name: "James Whitaker",
    role: "Staff Backend Engineer, Cloudline",
    quote:
      "The API lets us pipe our shared personas straight into internal tools. Our support bot and our engineers now use the exact same prompts.",
  },
  {
    name: "Mei Lin",
    role: "Founder, Tandem Studio",
    quote:
      "As a solo founder, EchoGPT is basically my research team. I compare answers across models before making any big product decision.",
  },
  {
    name: "Rafael Costa",
    role: "Engineering Manager, Orbit Payments",
    quote:
      "Onboarding the whole team took an afternoon. Published personas mean new hires get the same high-quality answers from day one.",
  },
];
