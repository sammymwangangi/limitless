"use client";

import { motion } from "framer-motion";
import { Wifi, Store, Building2, ShoppingBag, HeadphonesIcon, Megaphone } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";

const solutions = [
  {
    icon: Wifi,
    label: "For ISPs",
    title: "ISP Billing & Network Management",
    desc: "Automated subscriber management, bandwidth tracking, billing, and payment collection for internet service providers.",
    tags: ["Billing System", "M-Pesa", "Dashboard", "API"],
  },
  {
    icon: Store,
    label: "For Retailers",
    title: "POS & E-commerce Solutions",
    desc: "Integrated point-of-sale systems, inventory management, and online storefronts with full payment processing.",
    tags: ["POS System", "E-commerce", "Payments", "Analytics"],
  },
  {
    icon: Building2,
    label: "For Enterprises",
    title: "Custom Business Systems",
    desc: "Bespoke ERP, CRM, and workflow systems that automate operations and give leadership real-time visibility.",
    tags: ["Custom Software", "Automation", "Dashboards", "Integrations"],
  },
  {
    icon: HeadphonesIcon,
    label: "For Call Centers",
    title: "Call Center Platforms",
    desc: "Multi-agent platforms with real-time dashboards, call logging, ticket management, and CRM integration.",
    tags: ["Call Center", "CRM", "Real-time", "Reporting"],
  },
  {
    icon: ShoppingBag,
    label: "For Startups",
    title: "MVP & Product Development",
    desc: "Rapid MVP development, mobile apps, and scalable platforms that get your product to market fast.",
    tags: ["Mobile App", "Web App", "AI", "Payments"],
  },
  {
    icon: Megaphone,
    label: "For Growth",
    title: "Digital Marketing & SEO",
    desc: "SEO, paid ads, social media management, and content strategy to attract customers and grow your brand online.",
    tags: ["SEO", "Meta Ads", "Google Ads", "Analytics"],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-[#0f1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#3b82f6] font-semibold text-sm uppercase tracking-widest mb-4">
            Tailored Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Built for Your Industry
          </h2>
          <p className="text-[#94a3b8] text-lg">
            We understand that every business has unique needs. Here&rsquo;s how we deliver value across different industries and use cases.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((sol) => (
            <motion.div
              key={sol.title}
              variants={staggerItem}
              className="group p-7 rounded-2xl bg-[#0a1628] border border-[#1e293b] card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#2563eb]/10 flex items-center justify-center group-hover:bg-[#2563eb]/20 transition-colors">
                  <sol.icon className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <span className="text-[#3b82f6] text-xs font-semibold uppercase tracking-widest">
                  {sol.label}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{sol.title}</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{sol.desc}</p>
              <div className="flex flex-wrap gap-2">
                {sol.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#2563eb]/10 text-[#3b82f6] text-xs font-medium border border-[#2563eb]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
