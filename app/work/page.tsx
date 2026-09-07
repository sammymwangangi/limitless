import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Selected software, automation, payment, marketplace, dashboard and customer-experience capabilities delivered by Limitless Softwares.",
  alternates: { canonical: "/work" },
};

const work = [
  {
    category: "Commerce & payments",
    title: "E-Commerce Operations with Local Payment Flows",
    problem: "Online retailers need more than a storefront when orders, payments and administration still require manual intervention.",
    built: ["Responsive commerce experience", "M-PESA/payment integration", "Order administration", "Customer and sales workflows"],
  },
  {
    category: "Platforms & marketplaces",
    title: "Multi-Sided Service and Marketplace Platforms",
    problem: "Marketplaces require careful coordination between customers, providers, bookings, payments, status changes and administration.",
    built: ["Role-based user journeys", "Booking and workflow states", "Payments and payouts", "Operational administration"],
  },
  {
    category: "Customer operations",
    title: "Call-Centre and AI-Assisted Communication Systems",
    problem: "High-volume customer operations need structured routing, visibility and automation rather than disconnected calls and notes.",
    built: ["Agent workflows", "Call and interaction tracking", "AI voice integrations", "Real-time operational reporting"],
  },
  {
    category: "Management visibility",
    title: "Real-Time Operational Dashboards",
    problem: "Leadership teams often wait for manually compiled reports even when the underlying data already exists in business systems.",
    built: ["KPI dashboards", "Multi-source data views", "Operational status monitoring", "Management reporting interfaces"],
  },
  {
    category: "Fintech & integrations",
    title: "Payment and External API Integrations",
    problem: "Core customer journeys break when payments, messaging, identity, CRM or third-party services are not connected reliably.",
    built: ["M-PESA Daraja", "Payment gateways", "Webhook processing", "API data synchronisation"],
  },
  {
    category: "Product engineering",
    title: "Web, Mobile and Administration Platforms",
    problem: "A customer-facing app is only useful when the backend, administration, permissions and integrations can support daily operations.",
    built: ["Modern web applications", "Cross-platform mobile apps", "Backend APIs", "Administration and operational tooling"],
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-36 pb-20" style={{ background: "var(--surface)" }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <div className="max-w-4xl">
              <p className="section-tag mb-5">Selected work</p>
              <h1 className="font-display font-extrabold mb-7" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.96, letterSpacing: "-0.04em", color: "var(--ink)" }}>
                Serious engineering for real operating businesses.
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed max-w-3xl" style={{ color: "var(--ink-muted)" }}>
                Our work spans customer-facing products, payments, automation, dashboards and internal operations. Where client confidentiality applies, we describe the system pattern rather than exposing private implementation details.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--bg)" }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-5">
            {work.map((item) => (
              <article key={item.title} className="p-7 sm:p-8 rounded-[16px]" style={{ background: "var(--surface)", border: "0.5px solid var(--border)" }}>
                <p className="text-xs uppercase tracking-[0.12em] font-medium mb-3" style={{ color: "var(--accent)" }}>{item.category}</p>
                <h2 className="font-display font-bold text-2xl mb-4" style={{ color: "var(--ink)" }}>{item.title}</h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--ink-muted)" }}>{item.problem}</p>
                <div className="flex flex-wrap gap-2">
                  {item.built.map((capability) => (
                    <span key={capability} className="text-xs rounded-full px-3 py-1.5" style={{ color: "var(--ink-muted)", border: "0.5px solid var(--border-strong)" }}>
                      {capability}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-20" style={{ background: "var(--surface)" }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-[1fr_auto] items-center gap-8">
            <div className="max-w-3xl">
              <p className="section-tag mb-4">Need relevant proof?</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4" style={{ color: "var(--ink)" }}>
                Tell us what you are planning and we will show the closest relevant capability.
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                The most useful comparison is not whether two projects look identical. It is whether we have solved the underlying engineering, payment, workflow or integration problem before.
              </p>
            </div>
            <Link href="/assessment" className="btn-primary">Discuss your project</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
