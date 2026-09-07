"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/types/contact";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/motion";

const contactLinks = [
  {
    label: "Email us",
    value: "info@limitlesssolutions.co.ke",
    href: "mailto:info@limitlesssolutions.co.ke",
  },
  {
    label: "WhatsApp",
    value: "+254 798 489 573",
    href: "https://wa.me/254798489573",
  },
  {
    label: "Call us",
    value: "+254 798 489 573",
    href: "tel:+254798489573",
  },
];

const serviceOptions = [
  "Get my business online",
  "Generate more customers",
  "Automate a business process",
  "Deploy AI in my business",
  "Integrate M-PESA or payments",
  "Build custom software",
  "Build a mobile app",
  "Get ongoing technology support",
  "Not sure — advise me",
];

const budgetOptions = [
  "KES 35K–75K",
  "KES 75K–150K",
  "KES 150K–300K",
  "KES 300K–500K",
  "KES 500K+",
  "Need guidance",
];

const timelineOptions = [
  "As soon as possible",
  "Within 30 days",
  "1–3 months",
  "3–6 months",
  "Still exploring",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.07)",
    border: "0.5px solid rgba(255,255,255,0.15)",
    color: "#ffffff",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "#070D1E", color: "#ffffff" }}>
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(13, 98, 254, 0.15) 0%, rgba(0, 210, 255, 0.05) 50%, transparent 70%)",
          top: "10%",
          right: "-15%",
          width: "600px",
          height: "600px",
          zIndex: 0,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="max-w-2xl mb-14">
          <p className="section-tag mb-4" style={{ color: "var(--accent-light)" }}>
            Free technology assessment
          </p>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em", color: "#ffffff" }}>
            Tell us what you are trying to improve.
          </h2>
          <p className="text-base font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            We will look at the problem first, then recommend the smallest sensible solution. No generic technology pitch.
          </p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-4 mb-16">
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={staggerItem}
              href={link.href}
              className="flex flex-col rounded-[14px] no-underline transition-all"
              style={{ background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.15)", padding: "1rem 1.5rem", minWidth: "200px", color: "#ffffff" }}
            >
              <span className="text-[0.7rem] font-medium uppercase mb-1" style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em" }}>{link.label}</span>
              <span className="text-sm font-medium">{link.value}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl">
          <div className="rounded-[14px] p-8" style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)" }}>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(74,222,128,0.1)" }}>
                  <CheckCircle className="w-7 h-7" style={{ color: "#4ade80" }} />
                </div>
                <h3 className="text-lg font-display font-bold mb-2">Assessment request received.</h3>
                <p className="text-sm font-light mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>We will review the details and get back to you within 24 hours.</p>
                <button onClick={() => setStatus("idle")} className="btn-primary text-sm" style={{ background: "rgba(255,255,255,0.12)", color: "#ffffff", padding: "0.6rem 1.5rem" }}>Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 mb-6 rounded-[8px]" style={{ background: "rgba(239,68,68,0.1)", border: "0.5px solid rgba(239,68,68,0.2)" }}>
                    <AlertCircle className="w-4 h-4 shrink-0" style={{ color: "#ef4444" }} />
                    <p className="text-sm" style={{ color: "#ef4444" }}>Something went wrong. Please try again or contact us directly.</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.55)" }}>Name *</label>
                    <input id="name" type="text" placeholder="Your full name" style={inputStyle} {...register("name")} />
                    {errors.name && <p className="mt-1 text-xs" style={{ color: "#ef4444" }}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.55)" }}>Work email *</label>
                    <input id="email" type="email" placeholder="you@company.com" style={inputStyle} {...register("email")} />
                    {errors.email && <p className="mt-1 text-xs" style={{ color: "#ef4444" }}>{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.55)" }}>Phone / WhatsApp</label>
                    <input id="phone" type="tel" placeholder="+254 7XX XXX XXX" style={inputStyle} {...register("phone")} />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.55)" }}>Company</label>
                    <input id="company" type="text" placeholder="Business name" style={inputStyle} {...register("company")} />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="service" className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.55)" }}>What would you like to improve?</label>
                  <select id="service" style={{ ...inputStyle, appearance: "none" }} {...register("service")}>
                    <option value="" style={{ background: "#070D1E" }}>Select an outcome...</option>
                    {serviceOptions.map((s) => <option key={s} value={s} style={{ background: "#070D1E" }}>{s}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="budget" className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.55)" }}>Approximate budget</label>
                    <select id="budget" style={{ ...inputStyle, appearance: "none" }} {...register("budget")}>
                      <option value="" style={{ background: "#070D1E" }}>Select a range...</option>
                      {budgetOptions.map((option) => <option key={option} value={option} style={{ background: "#070D1E" }}>{option}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.55)" }}>When would you like to start?</label>
                    <select id="timeline" style={{ ...inputStyle, appearance: "none" }} {...register("timeline")}>
                      <option value="" style={{ background: "#070D1E" }}>Select a timeline...</option>
                      {timelineOptions.map((option) => <option key={option} value={option} style={{ background: "#070D1E" }}>{option}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-xs font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.55)" }}>What problem are you facing? *</label>
                  <textarea id="message" rows={5} placeholder="Tell us what is happening today, what is manual or inefficient, and what you would like to improve..." style={{ ...inputStyle, resize: "none" }} {...register("message")} />
                  {errors.message && <p className="mt-1 text-xs" style={{ color: "#ef4444" }}>{errors.message.message}</p>}
                </div>

                <button type="submit" disabled={status === "submitting"} className="inline-flex items-center gap-2 rounded-full font-medium text-sm transition-all" style={{ padding: "0.8rem 1.75rem", background: "var(--accent)", color: "#ffffff", boxShadow: "0 4px 20px rgba(13, 98, 254, 0.35)", opacity: status === "submitting" ? 0.6 : 1, cursor: status === "submitting" ? "not-allowed" : "pointer" }}>
                  {status === "submitting" ? <><Loader2 className="w-4 h-4 animate-spin" />Sending...</> : <><Send className="w-4 h-4" />Request free assessment</>}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
