export interface FooterColumn {
  title: string;
  links: { label: string; href?: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Models", href: "/#models" },
      { label: "Preview", href: "/#preview" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Download", href: "/#download" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why EchoGPT", href: "/#why-echogpt" },
      { label: "Customers", href: "/#testimonials" },
      { label: "Careers" },
      { label: "Contact Sales" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/#faq" },
      { label: "Documentation" },
      { label: "Status Page" },
      { label: "Help Center" },
    ],
  },
  {
    title: "Legal",
    links: [{ label: "Privacy Policy" }, { label: "Terms of Service" }],
  },
];
