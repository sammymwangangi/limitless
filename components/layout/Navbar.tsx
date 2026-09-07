"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Process", href: "/#process" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(var(--bg-raw) / 0.92)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "0.5px solid var(--border)",
            }
          : { background: "transparent" }
      }
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <a
            href="/"
            className="flex items-center gap-2.5 font-display font-bold text-[0.95rem] no-underline group"
            style={{ color: "var(--ink)" }}
          >
            <Logo size={28} className="transition-transform group-hover:scale-105" />
            <span>Limitless Softwares</span>
          </a>

          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm transition-colors no-underline"
                style={{ color: "var(--ink-muted)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-3">
            <ThemeToggle />
            <a href="/assessment" className="btn-primary text-sm" style={{ padding: "0.5rem 1.25rem" }}>
              Free assessment
            </a>
          </div>

          <div className="xl:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "var(--ink-muted)" }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div style={{ background: "var(--surface)", borderBottom: "0.5px solid var(--border)" }}>
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg text-sm no-underline transition-colors"
                style={{ color: "var(--ink-muted)" }}
              >
                {link.label}
              </a>
            ))}
            <a href="/assessment" onClick={() => setIsOpen(false)} className="btn-primary mt-2 text-center text-sm">
              Get a free assessment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
