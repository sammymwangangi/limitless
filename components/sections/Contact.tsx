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
    value: "+254 712 345 678",
    href: "https://wa.me/254712345678",
  },
  {
    label: "Call us",
    value: "+254 712 345 678",
    href: "tel:+254712345678",
  },
];

const serviceOptions = [
  "Custom Software Development",
  "Website Design & Development",
  "Mobile App Development",
  "E-commerce Platform",
  "Call Center System",
  "ISP Billing System",
  "POS System",
  "Real-Time Dashboard",
  "AI Integration & Automation",
  "Payment Integration",
  "SEO Services",
  "Social Media Marketing",
  "System Management & Support",
  "Other",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

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
    <section
      id="contact"
      className="py-24"
      style={{ background: "#0D0D0D", color: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <p
            className="section-tag mb-4"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Get in touch
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#ffffff",
            }}
          >
            Let&rsquo;s build something together.
          </h2>
          <p className="text-base font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Tell us what you&rsquo;re working on. We&rsquo;ll get back to you
            within 24 hours.
          </p>
        </div>

        {/* Contact link cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 mb-16"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={staggerItem}
              href={link.href}
              className="flex flex-col rounded-[14px] no-underline transition-all"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "0.5px solid rgba(255,255,255,0.15)",
                padding: "1rem 1.5rem",
                minWidth: "200px",
                color: "#ffffff",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              <span
                className="text-[0.7rem] font-medium uppercase mb-1"
                style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em" }}
              >
                {link.label}
              </span>
              <span className="text-sm font-medium">{link.value}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div
            className="rounded-[14px] p-8"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "0.5px solid rgba(255,255,255,0.1)",
            }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(74,222,128,0.1)" }}
                >
                  <CheckCircle className="w-7 h-7" style={{ color: "#4ade80" }} />
                </div>
                <h3 className="text-lg font-display font-bold mb-2">
                  Message sent.
                </h3>
                <p
                  className="text-sm font-light mb-6"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  We&rsquo;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-primary text-sm"
                  style={{ background: "rgba(255,255,255,0.12)", color: "#ffffff", padding: "0.6rem 1.5rem" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {status === "error" && (
                  <div
                    className="flex items-center gap-3 p-4 mb-6 rounded-[8px]"
                    style={{
                      background: "rgba(239,68,68,0.1)",
                      border: "0.5px solid rgba(239,68,68,0.2)",
                    }}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" style={{ color: "#ef4444" }} />
                    <p className="text-sm" style={{ color: "#ef4444" }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      Name <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      style={inputStyle}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs" style={{ color: "#ef4444" }}>
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      Email <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      style={inputStyle}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs" style={{ color: "#ef4444" }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+254 7XX XXX XXX"
                      style={inputStyle}
                      {...register("phone")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      Service needed
                    </label>
                    <select
                      id="service"
                      style={{ ...inputStyle, appearance: "none" }}
                      {...register("service")}
                    >
                      <option value="" style={{ background: "#0D0D0D" }}>
                        Select a service...
                      </option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s} style={{ background: "#0D0D0D" }}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    Message <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    style={{ ...inputStyle, resize: "none" }}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs" style={{ color: "#ef4444" }}>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 rounded-full font-medium text-sm transition-all"
                  style={{
                    padding: "0.8rem 1.75rem",
                    background: "var(--accent)",
                    color: "#ffffff",
                    opacity: status === "submitting" ? 0.6 : 1,
                    cursor: status === "submitting" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
