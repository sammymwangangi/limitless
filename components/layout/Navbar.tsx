"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Tech", href: "#technologies" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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
      <div
        className="transition-all duration-300"
        style={
          scrolled
            ? { borderBottom: "0.5px solid var(--border)" }
            : {}
        }
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <a
              href="#top"
              className="flex items-center gap-2.5 font-display font-bold text-[0.95rem] no-underline group"
              style={{ color: "var(--ink)" }}
            >
              <Logo size={28} className="transition-transform group-hover:scale-105" />
              <span>Limitless Software Solutions</span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-lg text-sm transition-colors no-underline"
                  style={{
                    fontWeight: 400,
                    color:
                      activeSection === link.href.slice(1)
                        ? "var(--ink)"
                        : "var(--ink-muted)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#contact"
                className="btn-primary text-sm"
                style={{ padding: "0.5rem 1.25rem" }}
              >
                Get in touch
              </a>
            </div>

            {/* Mobile toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-lg transition-colors"
                style={{ color: "var(--ink-muted)" }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            style={{
              background: "var(--surface)",
              borderBottom: "0.5px solid var(--border)",
            }}
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm no-underline transition-colors"
                  style={{
                    fontWeight: 400,
                    color:
                      activeSection === link.href.slice(1)
                        ? "var(--accent)"
                        : "var(--ink-muted)",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-2 text-center text-sm"
              >
                Get in touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
