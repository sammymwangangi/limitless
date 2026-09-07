const items = [
  "E-Commerce Platforms",
  "M-Pesa Integration",
  "AI Automation",
  "ISP Billing Systems",
  "Real-time Dashboards",
  "POS Systems",
  "Mobile Apps",
  "Call Center Software",
  "SEO & Growth",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div
      className="py-3.5 overflow-hidden"
      style={{
        background: "#060B18",
        color: "#ffffff",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}
      aria-hidden="true"
    >
      <div className="animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="text-[0.7rem] font-medium uppercase px-8"
              style={{ letterSpacing: "0.12em", opacity: 0.9 }}
            >
              {item}
            </span>
            <span style={{ color: "var(--cyan)", opacity: 0.6, fontSize: "1.2rem" }}>&middot;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
