"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { fadeInUp } from "@/lib/motion";

export default function CtaBanner() {
  return (
    <section className="py-24 bg-[#070D1E] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(13,98,254,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D62FE]/10 border border-[#0D62FE]/30 text-[#38BDF8] text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Ready to get started?
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="gradient-text block">Limitless Software Solutions</span>
          </h2>

          <p className="text-[#94a3b8] text-lg mb-10 max-w-2xl mx-auto">
            From a single integration to a full digital transformation — we have the expertise to build what your business needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0D62FE] hover:bg-[#094ec2] text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25 text-base"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all text-base"
            >
              View Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
