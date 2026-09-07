"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, CreditCard, MessageCircle, Repeat2, UsersRound } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";

const steps = [
  { icon: MessageCircle, label: "Enquiry", text: "Website, WhatsApp or social lead" },
  { icon: Bot, label: "AI response", text: "Instant answers and qualification" },
  { icon: UsersRound, label: "CRM", text: "Lead captured and assigned" },
  { icon: CreditCard, label: "Payment", text: "Quote, M-PESA or checkout" },
  { icon: Repeat2, label: "Follow-up", text: "Automated reminders and handoff" },
];

export default function AutomationFlow() {
  return (
    <section id="automation" className="py-24 relative overflow-hidden" style={{ background: "#070D1E", color: "#fff" }}>
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(13,98,254,0.18) 0%, rgba(0,210,255,0.06) 45%, transparent 70%)",
          width: "680px",
          height: "680px",
          right: "-240px",
          top: "-220px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.3fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="section-tag mb-4" style={{ color: "#38BDF8" }}>Limitless Automate</p>
            <h2 className="font-display font-bold mb-5" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              Your team should not spend all day doing work software can do.
            </h2>
            <p className="text-base leading-relaxed mb-7" style={{ color: "rgba(255,255,255,0.62)" }}>
              We connect AI, messaging, CRM, payments and your existing systems to reduce repetitive work while keeping people in control of the moments that matter.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium no-underline" style={{ color: "#fff" }}>
              Find what your business can automate <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-3"
          >
            {steps.map((step, index) => (
              <motion.div key={step.label} variants={staggerItem} className="flex items-center gap-4 p-4 sm:p-5 rounded-[14px]" style={{ background: "rgba(255,255,255,0.055)", border: "0.5px solid rgba(255,255,255,0.12)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(13,98,254,0.2)" }}>
                  <step.icon className="w-5 h-5" style={{ color: "#38BDF8" }} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm mb-0.5">{step.label}</p>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.52)" }}>{step.text}</p>
                </div>
                <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.25)" }}>0{index + 1}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
