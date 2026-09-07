"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Code2, LineChart, ShieldCheck } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";

const pillars = [
  {
    icon: LineChart,
    eyebrow: "Get customers",
    title: "Turn your digital presence into a sales system.",
    description:
      "High-converting websites, e-commerce and lead-generation experiences designed around business outcomes, not just aesthetics.",
    items: ["Limitless Launch", "Business Websites", "Limitless Commerce"],
    cta: "Explore growth solutions",
    href: "/solutions/websites",
  },
  {
    icon: Bot,
    eyebrow: "Automate operations",
    title: "Remove repetitive work from sales and operations.",
    description:
      "Connect AI, WhatsApp, CRM, payments and workflows so your team can focus on decisions, relationships and growth.",
    items: ["AI Receptionist", "AI Sales Agent", "Business Automation"],
    cta: "Explore automation",
    href: "/solutions/business-automation",
  },
  {
    icon: Code2,
    eyebrow: "Build software",
    title: "Create the systems off-the-shelf tools cannot provide.",
    description:
      "Custom software, mobile apps, dashboards, marketplaces and integrations engineered for your specific operating model.",
    items: ["Custom Systems", "Mobile Apps", "M-PESA & APIs"],
    cta: "Explore custom software",
    href: "/solutions/custom-software",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Keep it running",
    title: "Get an ongoing technology partner, not a disappearing vendor.",
    description:
      "Monitoring, maintenance, technical leadership and continuous improvement for businesses that need dependable support after launch.",
    items: ["Limitless Care", "Technology Partner", "System Management"],
    cta: "Explore technology partnership",
    href: "/solutions/technology-partner",
  },
];

export default function CommercialPillars() {
  return (
    <section id="solutions" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mb-14">
          <p className="section-tag mb-4">What we solve</p>
          <h2
            className="font-display font-bold mb-5"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "var(--ink)",
            }}
          >
            Technology should create measurable business leverage.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            We organize our work around four business outcomes so it is clear
            what you are buying and why it matters.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-5"
        >
          {pillars.map((pillar) => (
            <motion.article
              key={pillar.eyebrow}
              variants={staggerItem}
              className="p-8 sm:p-9 rounded-[16px] card-hover flex flex-col"
              style={{
                background: "var(--surface)",
                border: "0.5px solid var(--border)",
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6" style={{ background: "var(--accent-pale)" }}>
                <pillar.icon className="w-5 h-5" style={{ color: "var(--accent)" }} />
              </div>
              <p className="text-xs uppercase tracking-[0.12em] font-medium mb-3" style={{ color: "var(--accent)" }}>
                {pillar.eyebrow}
              </p>
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-3" style={{ color: "var(--ink)" }}>
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--ink-muted)" }}>
                {pillar.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {pillar.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs rounded-full px-3 py-1.5"
                    style={{
                      color: "var(--ink-muted)",
                      border: "0.5px solid var(--border-strong)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a href={pillar.href} className="mt-auto inline-flex items-center gap-2 text-sm font-medium no-underline" style={{ color: "var(--ink)" }}>
                {pillar.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
