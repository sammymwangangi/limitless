"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-end relative overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Decorative ambient tech glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 210, 255, 0.14) 0%, rgba(13, 98, 254, 0.08) 45%, transparent 70%)",
          top: "-180px",
          right: "-180px",
          width: "750px",
          height: "750px",
          zIndex: 0,
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(13, 98, 254, 0.06) 0%, transparent 70%)",
          bottom: "-100px",
          left: "-100px",
          width: "500px",
          height: "500px",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-10 pb-20 pt-32">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-tag mb-6"
        >
          Nairobi, Kenya &mdash; Serving clients globally
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="font-display font-extrabold mb-10"
          style={{
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            maxWidth: "900px",
            color: "var(--ink)",
          }}
        >
          Software
          <br />
          built to{" "}
          <span className="gradient-text font-extrabold not-italic">scale.</span>
        </motion.h1>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8"
        >
          <p
            className="text-base font-light leading-relaxed"
            style={{ maxWidth: "420px", color: "var(--ink-muted)" }}
          >
            We design, build, and integrate software systems that power real
            businesses — from e-commerce platforms and ISP billing to AI
            automation and payment integrations. Delivered with precision, on
            time.
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <a href="#services" className="btn-primary">
              Explore services
            </a>
            <a href="#contact" className="btn-ghost">
              Let&rsquo;s talk
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "var(--border)" }}
      />
    </section>
  );
}
