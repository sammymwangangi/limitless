"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";

const reasons = [
  "Custom-built solutions tailored to each business",
  "Experience across business systems, websites, automation, and integrations",
  "Support for local and international clients",
  "Clean, modern, and scalable technology",
  "Practical problem-solving from planning to deployment",
  "Ongoing technical support and system management",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-[#070D1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl bg-[#0C152B] border border-[#1e293b] p-8 relative overflow-hidden">
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, #0D62FE 0%, transparent 70%)",
                  opacity: 0.12,
                  filter: "blur(30px)",
                }}
              />
              <div className="relative">
                <div className="text-6xl font-black text-[#0D62FE] mb-2">100%</div>
                <div className="text-white font-semibold text-xl mb-1">Custom Solutions</div>
                <div className="text-[#64748b] text-sm mb-8">No templates. No shortcuts. Built for your business.</div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "13+", label: "Service Areas" },
                    { value: "KE", label: "Based in Kenya" },
                    { value: "24/7", label: "Support Available" },
                    { value: "Global", label: "Client Reach" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-4 rounded-xl bg-[#070D1E] border border-[#1e293b] text-center"
                    >
                      <div className="text-2xl font-bold text-[#38BDF8] mb-1">{stat.value}</div>
                      <div className="text-[#64748b] text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Reasons */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={staggerItem} className="text-[#38BDF8] font-semibold text-sm uppercase tracking-widest mb-4">
              Why Choose Us
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight"
            >
              The Right Partner for Your Digital Journey
            </motion.h2>
            <motion.ul variants={staggerContainer} className="space-y-5">
              {reasons.map((reason) => (
                <motion.li
                  key={reason}
                  variants={staggerItem}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-[#0D62FE]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                  <span className="text-[#94a3b8] text-base leading-relaxed">{reason}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
