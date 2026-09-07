import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getSolution, solutions } from "@/lib/commercial";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) return {};

  return {
    title: solution.title,
    description: solution.summary,
    alternates: { canonical: `/solutions/${solution.slug}` },
    openGraph: {
      title: `${solution.title} | Limitless Softwares`,
      description: solution.summary,
      url: `/solutions/${solution.slug}`,
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const related = solution.related
    .map((relatedSlug) => getSolution(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-36 pb-20" style={{ background: "var(--surface)" }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="max-w-4xl">
              <p className="section-tag mb-5">{solution.eyebrow}</p>
              <h1
                className="font-display font-extrabold mb-7"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.04em",
                  color: "var(--ink)",
                }}
              >
                {solution.title}
              </h1>
              <p
                className="text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl"
                style={{ color: "var(--ink-muted)" }}
              >
                {solution.summary}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Link href="/assessment" className="btn-primary">
                  Discuss this solution
                </Link>
                <span className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                  {solution.price}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--bg)" }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
            <div>
              <p className="section-tag mb-4">Business outcomes</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-7" style={{ color: "var(--ink)" }}>
                What this should change for the business
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {solution.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="p-5 rounded-[14px]"
                    style={{ background: "var(--surface)", border: "0.5px solid var(--border)" }}
                  >
                    <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside
              className="rounded-[18px] p-7 sm:p-8 h-fit"
              style={{ background: "var(--ink)", color: "#fff" }}
            >
              <p className="text-xs uppercase tracking-[0.12em] mb-3" style={{ color: "var(--accent-light)" }}>
                Best fit
              </p>
              <p className="text-base leading-relaxed mb-7" style={{ color: "rgba(255,255,255,0.72)" }}>
                {solution.bestFor}
              </p>
              <p className="text-xs uppercase tracking-[0.12em] mb-3" style={{ color: "var(--accent-light)" }}>
                Starting investment
              </p>
              <p className="font-display font-bold text-2xl mb-7">{solution.price}</p>
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium no-underline"
                style={{ background: "#fff", color: "#06102B" }}
              >
                Get a free assessment
              </Link>
            </aside>
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--surface)" }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14">
            <div>
              <p className="section-tag mb-4">Capabilities</p>
              <h2 className="font-display font-bold text-3xl mb-7" style={{ color: "var(--ink)" }}>
                What can be included
              </h2>
              <ul className="space-y-3">
                {solution.capabilities.map((capability) => (
                  <li key={capability} className="flex gap-3 text-sm" style={{ color: "var(--ink-muted)" }}>
                    <span style={{ color: "var(--accent)" }}>✓</span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-tag mb-4">How we deliver</p>
              <h2 className="font-display font-bold text-3xl mb-7" style={{ color: "var(--ink)" }}>
                A focused implementation process
              </h2>
              <div className="space-y-3">
                {solution.process.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 p-4 rounded-[12px]"
                    style={{ background: "var(--bg)", border: "0.5px solid var(--border)" }}
                  >
                    <span className="font-display font-bold" style={{ color: "var(--accent)" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-20" style={{ background: "var(--bg)" }}>
            <div className="max-w-6xl mx-auto px-6 sm:px-10">
              <div className="flex items-end justify-between gap-5 mb-8">
                <div>
                  <p className="section-tag mb-3">Related solutions</p>
                  <h2 className="font-display font-bold text-3xl" style={{ color: "var(--ink)" }}>
                    Often combined with
                  </h2>
                </div>
                <Link href="/#solutions" className="text-sm no-underline" style={{ color: "var(--accent)" }}>
                  View all solutions
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/solutions/${item.slug}`}
                    className="p-6 rounded-[14px] no-underline card-hover"
                    style={{ background: "var(--surface)", border: "0.5px solid var(--border)" }}
                  >
                    <p className="text-xs uppercase tracking-[0.1em] mb-3" style={{ color: "var(--accent)" }}>
                      {item.eyebrow}
                    </p>
                    <h3 className="font-display font-bold text-lg mb-2" style={{ color: "var(--ink)" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
                      {item.price}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
