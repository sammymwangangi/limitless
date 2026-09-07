import Logo from "@/components/Logo";

const primaryLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Assessment", href: "/assessment" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export default function Footer() {
  return (
    <footer
      className="px-6 sm:px-10 py-10"
      style={{
        background: "#060B18",
        borderTop: "1px solid rgba(255,255,255,0.14)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.14)" }}>
          <div className="max-w-md">
            <a
              href="/"
              aria-label="Limitless Softwares home"
              className="inline-flex items-center gap-2.5 font-display font-bold text-sm no-underline transition-opacity hover:opacity-90 mb-3"
              style={{ color: "#ffffff" }}
            >
              <Logo size={22} />
              <span>Limitless Softwares</span>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.74)" }}>
              Limitless Software Solutions · Nairobi, Kenya · BRS BN-AYSMPR9Y
            </p>
            <a href="mailto:info@limitlesssolutions.co.ke" className="text-sm underline underline-offset-4" style={{ color: "#7DD3FC" }}>
              info@limitlesssolutions.co.ke
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <nav aria-label="Footer navigation">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "rgba(255,255,255,0.82)" }}>Explore</p>
              <div className="flex flex-wrap gap-x-5 gap-y-3 max-w-md">
                {primaryLinks.map((link) => (
                  <a key={link.href} href={link.href} className="footer-nav-link text-sm no-underline transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            <nav aria-label="Legal and accessibility">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "rgba(255,255,255,0.82)" }}>Legal</p>
              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {legalLinks.map((link) => (
                  <a key={link.href} href={link.href} className="footer-nav-link text-sm no-underline transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <p className="text-xs pt-6" style={{ color: "rgba(255,255,255,0.7)" }}>
          &copy; {new Date().getFullYear()} Limitless Software Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
