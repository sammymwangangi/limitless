"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const proofPoints = [
  { value: "Kenya", label: "Nairobi-based engineering partner" },
  { value: "BRS", label: "Registered Kenyan business" },
  { value: "M-PESA", label: "Local payment integration capability" },
  { value: "Web + Mobile", label: "Multi-platform product delivery" },
];

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-tag mb-4">Who we are</p>
            <h2
              className="font-display font-bold mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "var(--ink)",
              }}
            >
              A boutique software firm built around practical outcomes.
            </h2>
            <p
              className="text-base font-light leading-relaxed mb-8"
              style={{ color: "var(--ink-muted)", maxWidth: "520px" }}
            >
              We build for startups, SMEs and established organisations —
              combining product engineering, automation, local payments and
              integrations around the way each business actually operates.
            </p>

            <div className="grid grid-cols-2 gap-4" aria-label="Company proof points">
              {proofPoints.map((point) => (
                <div
                  key={point.label}
                  className="p-5 rounded-[14px]"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="font-display font-extrabold text-2xl sm:text-[2rem] leading-none mb-2"
                    style={{ color: "var(--ink)", letterSpacing: "-0.03em" }}
                  >
                    {point.value}
                  </div>
                  <div className="text-xs font-medium leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                    {point.label}
                  </div>
                </div>
              ))}
            </div>

            <a href="/work" className="inline-flex items-center gap-2 mt-7 text-sm font-semibold underline underline-offset-4" style={{ color: "var(--accent)" }}>
              View selected work <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[14px] p-10 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #071E54 0%, #0D62FE 60%, #006FB8 100%)",
              color: "#ffffff",
              boxShadow: "0 20px 50px rgba(13, 98, 254, 0.2)",
            }}
          >
            <div
              className="absolute rounded-full pointer-events-none"
              aria-hidden="true"
              style={{
                bottom: "-60px",
                right: "-60px",
                width: "220px",
                height: "220px",
                background:
                  "radial-gradient(circle, rgba(0, 210, 255, 0.25) 0%, rgba(255,255,255,0.05) 60%, transparent 80%)",
              }}
            />
            <div
              className="absolute rounded-full pointer-events-none"
              aria-hidden="true"
              style={{
                top: "-40px",
                right: "60px",
                width: "120px",
                height: "120px",
                background: "rgba(255,255,255,0.08)",
              }}
            />

            <p className="font-display font-bold text-2xl leading-snug mb-6 relative z-10" style={{ lineHeight: 1.3 }}>
              &ldquo;We don&rsquo;t just write code. We solve problems that
              happen to require code.&rdquo;
            </p>
            <p className="text-sm font-light leading-relaxed relative z-10" style={{ color: "rgba(255,255,255,0.9)" }}>
              Every engagement starts with understanding your business — the
              workflows, the pain points and the goals. We design systems that
              fit the operation, build them to last and support them beyond launch.
            </p>
            <p className="text-sm font-light leading-relaxed relative z-10 mt-4" style={{ color: "rgba(255,255,255,0.86)" }}>
              Limitless Software Solutions is registered with Kenya&apos;s
              Business Registration Service under registration number
              BN-AYSMPR9Y and operates from Nairobi, Kenya.
            </p>
            <span
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full text-xs font-medium relative z-10"
              style={{ background: "rgba(255,255,255,0.14)", color: "#ffffff" }}
            >
              <span className="w-2 h-2 rounded-full inline-block flex-shrink-0" aria-hidden="true" style={{ background: "#86EFAC" }} />
              Available for new projects
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
