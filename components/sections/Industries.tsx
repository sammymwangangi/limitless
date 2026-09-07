"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Hotel, ShoppingBag, BriefcaseBusiness } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";

const industries = [
  { icon: Building2, name: "Real Estate", text: "Lead qualification, property enquiries, CRM, follow-up and sales dashboards." },
  { icon: GraduationCap, name: "Education & Training", text: "Course enquiries, admissions, applications, payments and learner communication." },
  { icon: ShoppingBag, name: "E-Commerce & Retail", text: "Online selling, M-PESA, order workflows, customer support and inventory integrations." },
  { icon: Hotel, name: "Hospitality & Travel", text: "Bookings, availability, quotations, payments and customer communication." },
  { icon: BriefcaseBusiness, name: "Professional Services", text: "Lead capture, booking, proposals, CRM workflows and client portals." },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mb-14">
          <p className="section-tag mb-4">Who we help</p>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: "clamp(2.2rem, 4vw, 3.3rem)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--ink)" }}>
            Built around the way your business actually operates.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            We work best with growing businesses where customer demand and internal operations are starting to outgrow manual processes.
          </p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((industry) => (
            <motion.article key={industry.name} variants={staggerItem} className="p-6 rounded-[14px] card-hover" style={{ background: "var(--surface)", border: "0.5px solid var(--border)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--accent-pale)" }}>
                <industry.icon className="w-5 h-5" style={{ color: "var(--accent)" }} />
              </div>
              <h3 className="font-display font-bold text-base mb-2" style={{ color: "var(--ink)" }}>{industry.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>{industry.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
