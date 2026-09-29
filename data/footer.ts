import { siteConfig } from "@/data/site";

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
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
      { label: "Careers", href: siteConfig.links.careers },
      { label: "Contact Sales", href: siteConfig.links.sales },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/#faq" },
      { label: "Documentation", href: siteConfig.links.docs },
      { label: "Status Page", href: siteConfig.links.status },
      { label: "Help Center", href: siteConfig.links.support },
    ],
  },
];
