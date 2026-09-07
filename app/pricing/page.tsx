import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { solutions } from "@/lib/commercial";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Starting prices for Limitless Softwares websites, automation, AI, M-PESA integrations, custom software and ongoing technology partnership services.",
  alternates: { canonical: "/pricing" },
};

const featuredSlugs = [
  "websites",
  "ecommerce",
  "business-automation",
  "ai-receptionist",
  "ai-sales-agent",
  "mpesa-integration",
  "custom-software",
  "technology-partner",
];

const pricingGroups = [
  {
    name: "Get customers",
    description: "Digital sales infrastructure for businesses that need to attract, convert and serve customers better.",
    slugs: ["websites", "ecommerce"],
  },
  {
    name: "Automate operations",
    description: "Automation and AI for repetitive customer, sales and operational workflows.",
    slugs: ["business-automation", "ai-automation", "ai-receptionist", "ai-sales-agent", "ai-voice-agent"],
  },
  {
    name: "Integrate & build",
    description: "Payments, APIs, dashboards and purpose-built software for more complex operating requirements.",
    slugs: ["mpesa-integration", "api-integration", "dashboards", "custom-software", "mobile-app-development", "technology-partner"],
  },
];

export default function PricingPage() {
  const featured = featuredSlugs
    .map((slug) => solutions.find((solution) => solution.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="pt-36 pb-20" style={{ background: "var(--surface)" }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="max-w-4xl">
              <p className="section-tag mb-5">Starting investments</p>
              <h1
                className="font-display font-extrabold mb-7"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.96, letterSpacing: "-0.04em", color: "var(--ink)" }}
              >
                Clear enough to qualify. Flexible enough to solve the right problem.
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed max-w-3xl" style={{ color: "var(--ink-muted)" }}>
                These are starting prices for well-defined engagements. Complex work is scoped after discovery so you pay for the solution your business actually needs.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--bg)" }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featured.map((solution) => (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="p-6 rounded-[14px] no-underline card-hover"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <p className="text-xs uppercase tracking-[0.1em] mb-3" style={{ color: "var(--accent)" }}>{solution.eyebrow}</p>
                  <h2 className="font-display font-bold text-lg mb-3" style={{ color: "var(--ink)" }}>{solution.title}</h2>
                  <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>{solution.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--surface)" }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="max-w-2xl mb-12">
              <p className="section-tag mb-4">Full public catalogue</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4" style={{ color: "var(--ink)" }}>
                Choose by business outcome, not by technology buzzword.
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                If the right starting point is unclear, use the free assessment and we will recommend the smallest sensible engagement.
              </p>
            </div>

            <div className="space-y-12">
              {pricingGroups.map((group) => {
                const groupSolutions = group.slugs
                  .map((slug) => solutions.find((solution) => solution.slug === slug))
                  .filter((item): item is NonNullable<typeof item> => Boolean(item));

                return (
                  <div key={group.name}>
                    <div className="mb-6">
                      <h3 className="font-display font-bold text-2xl mb-2" style={{ color: "var(--ink)" }}>{group.name}</h3>
                      <p className="text-sm" style={{ color: "var(--ink-muted)" }}>{group.description}</p>
                    </div>
                    <div className="divide-y" style={{ borderColor: "var(--border)" }}>
                      {groupSolutions.map((solution) => (
                        <Link
                          key={solution.slug}
                          href={`/solutions/${solution.slug}`}
                          className="grid md:grid-cols-[1fr_180px] gap-4 py-5 no-underline"
                        >
                          <div>
                            <p className="font-medium mb-1" style={{ color: "var(--ink)" }}>{solution.title}</p>
                            <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "var(--ink-muted)" }}>{solution.summary}</p>
                          </div>
                          <p className="text-sm font-medium md:text-right" style={{ color: "var(--accent)" }}>{solution.price}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--bg)" }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-3 gap-5">
            {[
              ["What changes the price?", "Scope, number of workflows or user roles, third-party integrations, data migration, infrastructure, compliance requirements and delivery urgency."],
              ["How do payments work?", "Smaller projects normally use a deposit and final payment. Larger projects use agreed milestones. Recurring services are paid in advance."],
              ["What is billed separately?", "Third-party costs such as domains, cloud hosting, AI usage, WhatsApp, SMS, payment-provider fees, licences and advertising spend unless explicitly included."],
            ].map(([title, text]) => (
              <div key={title} className="p-7 rounded-[14px]" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <h3 className="font-display font-bold text-lg mb-3" style={{ color: "var(--ink)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20" style={{ background: "#070D1E" }}>
          <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-5xl mb-5" style={{ color: "#fff" }}>Not sure where to start?</h2>
            <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.76)" }}>
              Tell us what is happening in the business and we will identify the most sensible first step.
            </p>
            <Link href="/assessment" className="inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold no-underline" style={{ background: "#fff", color: "#06102B" }}>
              Get a free assessment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
