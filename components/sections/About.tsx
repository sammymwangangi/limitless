"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "Projects delivered" },
  { value: "5+", label: "Industries served" },
  { value: "6", label: "Countries with clients" },
  { value: "100%", label: "Client retention rate" },
];

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left */}
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
              A boutique software firm that delivers.
            </h2>
            <p
              className="text-base font-light leading-relaxed mb-8"
              style={{ color: "var(--ink-muted)", maxWidth: "480px" }}
            >
              We work with startups, SMEs, and enterprises across Africa and
              beyond — building the systems they actually need, not what&rsquo;s
              easiest to sell.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-[14px]"
                  style={{
                    background: "var(--bg)",
                    border: "0.5px solid var(--border)",
                  }}
                >
                  <div
                    className="font-display font-extrabold text-[2.25rem] leading-none mb-1"
                    style={{ color: "var(--ink)", letterSpacing: "-0.03em" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-medium"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: accent box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[14px] p-10 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #071E54 0%, #0D62FE 60%, #0099FF 100%)",
              color: "#ffffff",
              boxShadow: "0 20px 50px rgba(13, 98, 254, 0.2)",
            }}
          >
            {/* Decorative circles */}
            <div
              className="absolute rounded-full pointer-events-none"
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
              style={{
                top: "-40px",
                right: "60px",
                width: "120px",
                height: "120px",
                background: "rgba(255,255,255,0.08)",
              }}
            />

            <p
              className="font-display font-bold text-2xl leading-snug mb-6 relative z-10"
              style={{ lineHeight: 1.3 }}
            >
              &ldquo;We don&rsquo;t just write code. We solve problems that
              happen to require code.&rdquo;
            </p>
            <p
              className="text-sm font-light leading-relaxed relative z-10"
              style={{ opacity: 0.8 }}
            >
              Every engagement starts with understanding your business — the
              workflows, the pain points, the goals. We design systems that fit
              you, build them to last, and support you beyond launch.
            </p>
            <p
              className="text-sm font-light leading-relaxed relative z-10 mt-4"
              style={{ opacity: 0.7 }}
            >
              Registered with the Business Registration Service (BRS) under
              Kenyan law. Compliant, accountable, built for long-term
              partnerships.
            </p>
            <span
              className="inline-flex items-center gap-2 mt-6 px-4 py-1.5 rounded-full text-xs font-medium relative z-10"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0"
                style={{ background: "#4ade80" }}
              />
              Available for new projects
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
