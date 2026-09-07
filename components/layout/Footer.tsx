import Logo from "@/components/Logo";

const links = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Assessment", href: "/assessment" },
];

export default function Footer() {
  return (
    <footer
      className="px-6 sm:px-10 py-8"
      style={{
        background: "#060B18",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
        <a
          href="/"
          className="flex items-center gap-2.5 font-display font-bold text-sm no-underline transition-opacity hover:opacity-90"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          <Logo size={22} />
          <span>Limitless Softwares</span>
        </a>

        <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          &copy; {new Date().getFullYear()} Limitless Software Solutions. Registered in Kenya (BRS).
        </p>

        <nav className="flex gap-5 flex-wrap justify-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="footer-nav-link text-xs no-underline transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
