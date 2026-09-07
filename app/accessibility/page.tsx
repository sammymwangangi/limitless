import type { Metadata } from "next";
import PolicyShell from "@/components/legal/PolicyShell";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Limitless Softwares accessibility statement and approach to WCAG 2.2 Level AA.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <PolicyShell
      eyebrow="Accessibility"
      title="Accessibility Statement"
      summary="We want limitlesssolutions.co.ke to be usable by as many people as possible, including people who use keyboards, screen readers, magnification or reduced-motion settings."
      lastUpdated="7 September 2026"
    >
      <h2>Our accessibility goal</h2>
      <p>
        Limitless Software Solutions aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA. We treat accessibility as an ongoing engineering requirement rather than a one-time certification.
      </p>

      <h2>Measures we take</h2>
      <p>Our current website includes measures intended to improve accessibility, including:</p>
      <ul>
        <li>semantic headings, landmarks, labels and navigation structures;</li>
        <li>a keyboard-accessible skip link to bypass repeated navigation;</li>
        <li>visible keyboard-focus indicators;</li>
        <li>minimum interactive target sizing for primary controls;</li>
        <li>form labels, validation messages and programmatic error states;</li>
        <li>colour choices designed to provide sufficient contrast for normal text;</li>
        <li>support for operating-system reduced-motion preferences;</li>
        <li>responsive layouts that support zoom and smaller screens; and</li>
        <li>descriptive text or accessible treatment for meaningful visual content.</li>
      </ul>

      <h2>Ongoing testing</h2>
      <p>
        Automated checks cannot identify every accessibility barrier. We therefore continue to review keyboard operation, focus order, zoom behaviour, screen-reader semantics, colour contrast and new content as the site evolves.
      </p>

      <h2>Third-party services</h2>
      <p>
        Some links may open third-party services such as WhatsApp. We do not control the accessibility of external platforms, although we try to select widely supported services and provide alternative contact methods where practical.
      </p>

      <h2>Report an accessibility problem</h2>
      <p>
        If you encounter an accessibility barrier, please tell us what page or feature caused the problem and, if useful, the browser or assistive technology you were using. We will review the issue and make reasonable efforts to provide the information or service through an accessible alternative while we address the underlying problem.
      </p>
      <p>
        Email <a href="mailto:info@limitlesssolutions.co.ke">info@limitlesssolutions.co.ke</a> or call/WhatsApp <a href="tel:+254798489573">+254 798 489 573</a>.
      </p>
    </PolicyShell>
  );
}
