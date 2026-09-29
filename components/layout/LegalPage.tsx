import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export interface LegalSection {
  heading: string;
  body: string;
}

interface LegalPageProps {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export default function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <main id="main" className="w-full flex-1 bg-linear px-6 py-16 md:py-20">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to home
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink md:text-4xl">{title}</h1>
        <p className="mt-2 text-xs text-muted-foreground">Last updated {updated}</p>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{intro}</p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-bold text-ink">{section.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
