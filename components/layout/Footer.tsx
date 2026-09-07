import Logo from "@/components/Logo";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
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
          href="#top"
          className="flex items-center gap-2.5 font-display font-bold text-sm no-underline transition-opacity hover:opacity-90"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          <Logo size={22} />
          <span>Limitless Software Solutions</span>
        </a>

        <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          &copy; {new Date().getFullYear()} Limitless Software Solutions.
          Registered in Kenya (BRS).
        </p>

        <nav className="flex gap-6">
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
