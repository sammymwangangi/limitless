"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-end relative overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
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
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-tag mb-6"
        >
          Nairobi, Kenya &mdash; Serving Africa and global clients
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="font-display font-extrabold mb-8"
          style={{
            fontSize: "clamp(3rem, 7vw, 6.25rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            maxWidth: "1000px",
            color: "var(--ink)",
          }}
        >
          We build systems
          <br />
          that <span className="gradient-text">grow your business.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid lg:grid-cols-[1fr_auto] gap-10 lg:items-end"
        >
          <div>
            <p
              className="text-lg font-light leading-relaxed mb-5"
              style={{ maxWidth: "650px", color: "var(--ink-muted)" }}
            >
              Websites, AI automation, M-PESA integrations and custom software
              designed to help ambitious businesses win more customers, remove
              manual work and operate with better visibility.
            </p>
            <div className="flex flex-wrap gap-3 text-sm" style={{ color: "var(--ink-muted)" }}>
              <span>Get Customers.</span>
              <span aria-hidden="true">•</span>
              <span>Automate Operations.</span>
              <span aria-hidden="true">•</span>
              <span>Build Software.</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/assessment" className="btn-primary gap-2">
              Get a free technology assessment
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/254798489573?text=Hi%20Limitless%20Softwares%2C%20I%27d%20like%20to%20discuss%20a%20technology%20project."
              target="_blank"
              rel="noreferrer"
              className="btn-ghost gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp us
            </a>
          </div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "var(--border)" }}
      />
    </section>
  );
}
