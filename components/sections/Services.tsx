"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

const services = [
  {
    emoji: "🤖",
    title: "AI Integration & Automation",
    desc: "Embed AI into your systems to automate tasks, generate insights, and reduce manual overhead.",
    tags: ["AI Agents", "LLM Integration", "Workflow Automation", "Data Pipelines"],
    featured: true,
  },
  {
    emoji: "🛒",
    title: "E-Commerce Platforms",
    desc: "Full-featured online stores with inventory, multi-currency support, and local payment methods.",
    tags: ["Multi-vendor", "M-Pesa Ready", "Admin Panels"],
  },
  {
    emoji: "💳",
    title: "Payment Integration",
    desc: "Connect to M-Pesa, Stripe, Paystack, and more. We handle STK push, webhooks, and reconciliation.",
    tags: ["M-Pesa STK", "Stripe", "Paystack"],
  },
  {
    emoji: "📊",
    title: "Business Systems",
    desc: "Custom platforms for ISP billing, call center management, POS, and real-time dashboards.",
    tags: ["ISP Billing", "POS", "Call Center"],
  },
  {
    emoji: "🌐",
    title: "Web & Mobile Development",
    desc: "Modern websites and cross-platform mobile apps — fast, accessible, and designed to convert.",
    tags: ["Next.js", "React Native", "Flutter"],
  },
  {
    emoji: "📈",
    title: "SEO & Digital Growth",
    desc: "Technical SEO, social media management, and content strategy to grow your brand online.",
    tags: ["Technical SEO", "SMM", "Analytics"],
  },
  {
    emoji: "🔧",
    title: "System Management & Support",
    desc: "Ongoing support, server management, API development, and integrations.",
    tags: ["VPS Management", "API Development", "Maintenance"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <p className="section-tag mb-4">What we build</p>
            <h2
              className="font-display font-bold"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "var(--ink)",
              }}
            >
              Our services
            </h2>
          </div>
          <p
            className="text-base font-light leading-relaxed sm:text-right"
            style={{ color: "var(--ink-muted)", maxWidth: "260px" }}
          >
            Full stack — backend systems to polished interfaces.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={staggerItem}
              className="p-8 rounded-[14px] card-hover"
              style={
                svc.featured
                  ? { background: "var(--ink)" }
                  : {
                      background: "var(--surface)",
                      border: "0.5px solid var(--border)",
                    }
              }
            >
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-5 text-xl"
                style={{
                  background: svc.featured
                    ? "rgba(255,255,255,0.12)"
                    : "var(--accent-pale)",
                }}
              >
                {svc.emoji}
              </div>
              <h3
                className="font-display font-bold text-lg mb-2"
                style={{ color: svc.featured ? "#ffffff" : "var(--ink)" }}
              >
                {svc.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5 font-light"
                style={{
                  color: svc.featured ? "rgba(255,255,255,0.7)" : "var(--ink-muted)",
                }}
              >
                {svc.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.68rem] font-medium uppercase tracking-wide rounded-full px-3 py-1"
                    style={
                      svc.featured
                        ? {
                            background: "rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.7)",
                          }
                        : {
                            background: "var(--bg)",
                            color: "var(--ink-muted)",
                            border: "0.5px solid var(--border)",
                          }
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
