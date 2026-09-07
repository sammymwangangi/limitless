import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getIndustry, getSolution, industries } from "@/lib/commercial";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) return {};

  return {
    title: `${industry.name} Software & Automation Solutions`,
    description: industry.summary,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.headline} | Limitless Softwares`,
      description: industry.summary,
      url: `/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const recommended = industry.recommendedSolutions
    .map((solutionSlug) => getSolution(solutionSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-36 pb-20" style={{ background: "var(--surface)" }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="max-w-4xl">
              <p className="section-tag mb-5">Solutions for {industry.name}</p>
              <h1
                className="font-display font-extrabold mb-7"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.04em",
                  color: "var(--ink)",
                }}
              >
                {industry.headline}
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl" style={{ color: "var(--ink-muted)" }}>
                {industry.summary}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/assessment" className="btn-primary">
                  Assess my workflow
                </Link>
                <Link href="/#pricing" className="btn-ghost">
                  View starting prices
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--bg)" }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-12">
            <div>
              <p className="section-tag mb-4">Common friction</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-7" style={{ color: "var(--ink)" }}>
                Where growth usually starts to break
              </h2>
              <div className="space-y-3">
                {industry.problems.map((problem) => (
                  <div key={problem} className="p-5 rounded-[14px]" style={{ background: "var(--surface)", border: "0.5px solid var(--border)" }}>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="section-tag mb-4">What we automate</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-7" style={{ color: "var(--ink)" }}>
                Practical opportunities to improve the customer and operating flow
              </h2>
              <div className="space-y-3">
                {industry.opportunities.map((opportunity) => (
                  <div key={opportunity} className="p-5 rounded-[14px]" style={{ background: "var(--surface)", border: "0.5px solid var(--border)" }}>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>{opportunity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--surface)" }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="max-w-2xl mb-10">
              <p className="section-tag mb-4">Recommended stack</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4" style={{ color: "var(--ink)" }}>
                Start with the business bottleneck, then combine only what is needed.
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                These are common starting points for {industry.name.toLowerCase()} businesses. The assessment determines the smallest sensible implementation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {recommended.map((solution) => (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="p-6 rounded-[14px] no-underline card-hover"
                  style={{ background: "var(--bg)", border: "0.5px solid var(--border)" }}
                >
                  <p className="text-xs uppercase tracking-[0.1em] mb-3" style={{ color: "var(--accent)" }}>
                    {solution.eyebrow}
                  </p>
                  <h3 className="font-display font-bold text-lg mb-3" style={{ color: "var(--ink)" }}>
                    {solution.title}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                    {solution.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "#070D1E" }}>
          <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
            <p className="text-xs uppercase tracking-[0.14em] mb-4" style={{ color: "#38BDF8" }}>
              Free technology assessment
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-5xl mb-5" style={{ color: "#fff" }}>
              Show us the workflow that is slowing your team down.
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.62)" }}>
              We will identify the most practical next step before recommending software, automation or AI.
            </p>
            <Link href="/assessment" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium no-underline" style={{ background: "#fff", color: "#06102B" }}>
              Start the assessment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
