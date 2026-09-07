"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";

const offers = [
  { name: "Business Website", price: "From KES 35,000", desc: "Professional, conversion-focused websites for growing businesses.", slug: "websites" },
  { name: "E-Commerce", price: "From KES 150,000", desc: "Online stores with payments, order management and admin tools.", slug: "ecommerce" },
  { name: "Business Automation", price: "From KES 75,000", desc: "Automate repetitive workflows across sales and operations.", slug: "business-automation" },
  { name: "AI Receptionist", price: "From KES 95,000 + monthly", desc: "Handle enquiries, qualify leads, book appointments and escalate to staff.", slug: "ai-receptionist" },
  { name: "AI Sales Agent", price: "From KES 180,000 + monthly", desc: "Qualify, follow up and move prospects toward payment automatically.", slug: "ai-sales-agent" },
  { name: "M-PESA & API Integrations", price: "From KES 45,000", desc: "Connect payments and third-party platforms into your business systems.", slug: "mpesa-integration" },
  { name: "Custom Software", price: "From KES 300,000", desc: "Purpose-built platforms, dashboards, apps and internal systems.", slug: "custom-software" },
  { name: "Technology Partner", price: "From KES 75,000/month", desc: "Ongoing technical leadership, support, integrations and improvements.", slug: "technology-partner" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="section-tag mb-4">Starting investments</p>
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--ink)" }}
            >
              Clear enough to qualify. Flexible enough to fit the right solution.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--ink-muted)" }}>
              These are starting prices for well-defined engagements. Complex projects are scoped after discovery.
            </p>
            <a href="/pricing" className="text-sm font-semibold underline underline-offset-4" style={{ color: "var(--accent)" }}>
              View full pricing →
            </a>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {offers.map((offer) => (
            <motion.a
              key={offer.name}
              href={`/solutions/${offer.slug}`}
              variants={staggerItem}
              className="p-6 rounded-[14px] card-hover no-underline"
              style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
            >
              <h3 className="font-display font-bold text-base mb-2" style={{ color: "var(--ink)" }}>{offer.name}</h3>
              <p className="text-sm font-medium mb-3" style={{ color: "var(--accent)" }}>{offer.price}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>{offer.desc}</p>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 rounded-[16px] p-7" style={{ background: "#070D1E", color: "#ffffff" }}>
          <div>
            <p className="font-display font-bold text-xl mb-1" style={{ color: "#ffffff" }}>Not sure which solution fits?</p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.76)" }}>We will assess the problem first and recommend the smallest sensible solution.</p>
          </div>
          <a href="/assessment" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold no-underline whitespace-nowrap" style={{ background: "#ffffff", color: "#06102B" }}>
            Get a free assessment <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
