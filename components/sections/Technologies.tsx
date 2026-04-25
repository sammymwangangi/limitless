"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

const techs: { label: string; accent?: boolean }[] = [
  { label: "Laravel", accent: true },
  { label: "Next.js", accent: true },
  { label: "React", accent: true },
  { label: "Vue.js / Nuxt" },
  { label: "Flutter" },
  { label: "React Native" },
  { label: "Node.js" },
  { label: "MySQL", accent: true },
  { label: "PostgreSQL" },
  { label: "Redis" },
  { label: "Filament Admin" },
  { label: "Tailwind CSS" },
  { label: "M-Pesa API", accent: true },
  { label: "Paystack" },
  { label: "Stripe" },
  { label: "REST APIs" },
  { label: "GraphQL" },
  { label: "OpenAI / Claude API", accent: true },
  { label: "DigitalOcean" },
  { label: "Nginx" },
  { label: "Docker" },
  { label: "GitHub Actions" },
  { label: "WhatsApp Business API" },
  { label: "Google Analytics" },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <p className="section-tag mb-4">Technology</p>
        <h2
          className="font-display font-bold mb-4"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "var(--ink)",
          }}
        >
          What we build with
        </h2>
        <p
          className="text-base font-light leading-relaxed mb-14"
          style={{ color: "var(--ink-muted)", maxWidth: "520px" }}
        >
          Modern, proven tools — not whatever is trending. The right tool for
          the right job.
        </p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {techs.map((tech) => (
            <span
              key={tech.label}
              className="px-4 py-2 rounded-full text-sm font-medium cursor-default transition-colors"
              style={
                tech.accent
                  ? {
                      background: "var(--accent-pale)",
                      color: "var(--accent)",
                    }
                  : {
                      background: "var(--surface)",
                      color: "var(--ink-muted)",
                      border: "0.5px solid var(--border)",
                    }
              }
            >
              {tech.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
