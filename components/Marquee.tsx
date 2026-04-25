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
      style={{ background: "#0D0D0D", color: "#ffffff" }}
      aria-hidden="true"
    >
      <div className="animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="text-[0.7rem] font-medium uppercase px-10"
              style={{ letterSpacing: "0.1em", opacity: 0.85 }}
            >
              {item}
            </span>
            <span style={{ opacity: 0.35 }}>&middot;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
