"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

const steps = [
  {
    num: "01",
    title: "Discovery & scoping",
    desc: "We understand your business, users, and needs. We produce a requirements document and project quotation — no surprises later.",
  },
  {
    num: "02",
    title: "Design & architecture",
    desc: "We design the system and UI before writing production code. You see what you're getting, and we align on technical decisions upfront.",
  },
  {
    num: "03",
    title: "Build & test",
    desc: "Development in structured phases with regular check-ins. Every feature is tested before it ships. You're never left wondering what's happening.",
  },
  {
    num: "04",
    title: "Deploy & hand over",
    desc: "Full deployment to your server, secure configuration, and proper documentation. You leave with something you own and understand.",
  },
  {
    num: "05",
    title: "Ongoing support",
    desc: "Retainer-based support and maintenance for clients who need it. Updates, new features, integrations — we're available as you grow.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24" style={{ background: "var(--surface)" }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <p className="section-tag mb-4">How we work</p>
        <h2
          className="font-display font-bold mb-4"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "var(--ink)",
          }}
        >
          Our process
        </h2>
        <p className="text-base font-light leading-relaxed mb-14" style={{ color: "var(--ink-muted)", maxWidth: "520px" }}>
          A structured approach that keeps projects on track and clients informed at every step.
        </p>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={staggerItem}
              className="grid py-10"
              style={{
                gridTemplateColumns: "80px 1fr",
                gap: "2rem",
                borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none",
                alignItems: "start",
              }}
            >
              <span
                className="font-display font-extrabold leading-none"
                aria-label={`Step ${i + 1}`}
                style={{
                  fontSize: "3.5rem",
                  letterSpacing: "-0.04em",
                  color: "var(--ink-faint)",
                  paddingTop: "0.2rem",
                }}
              >
                {step.num}
              </span>
              <div>
                <h3 className="font-display font-bold text-xl mb-2" style={{ color: "var(--ink)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed font-light" style={{ color: "var(--ink-muted)" }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
