import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PolicyShellProps {
  eyebrow: string;
  title: string;
  summary: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function PolicyShell({
  eyebrow,
  title,
  summary,
  lastUpdated,
  children,
}: PolicyShellProps) {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="pt-36 pb-16" style={{ background: "var(--surface)" }}>
          <div className="max-w-4xl mx-auto px-6 sm:px-10">
            <p className="section-tag mb-5">{eyebrow}</p>
            <h1
              className="font-display font-extrabold mb-6"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.04em",
                color: "var(--ink)",
              }}
            >
              {title}
            </h1>
            <p className="text-lg leading-relaxed max-w-3xl mb-5" style={{ color: "var(--ink-muted)" }}>
              {summary}
            </p>
            <p className="text-sm font-medium" style={{ color: "var(--ink-faint)" }}>
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        <section className="py-16" style={{ background: "var(--bg)" }}>
          <article className="legal-copy max-w-4xl mx-auto px-6 sm:px-10">
            {children}
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
