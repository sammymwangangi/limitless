import { NextRequest } from "next/server";
import { contactSchema } from "@/types/contact";
import { Resend } from "resend";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count += 1;
  return true;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return Response.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, phone, company, service, budget, timeline, message } = parsed.data;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const toEmail = process.env.CONTACT_TO_EMAIL || "info@limitlesssolutions.co.ke";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "website@limitlesssolutions.co.ke";

  const fields = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Company", company || "—"],
    ["Business Goal", service || "—"],
    ["Budget", budget || "—"],
    ["Timeline", timeline || "—"],
  ];

  const html = `
    <div style="font-family:sans-serif;max-width:640px;margin:0 auto;background:#0a1628;color:#e2e8f0;border-radius:12px;overflow:hidden;">
      <div style="background:#2563eb;padding:24px 32px;">
        <h1 style="margin:0;font-size:20px;color:#fff;">New Technology Assessment Request</h1>
        <p style="margin:4px 0 0;color:#bfdbfe;font-size:14px;">Limitless Softwares</p>
      </div>
      <div style="padding:32px;">
        <table style="width:100%;border-collapse:collapse;">
          ${fields
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding:8px 0;color:#94a3b8;font-size:13px;width:130px;">${escapeHtml(label)}</td>
              <td style="padding:8px 0;color:#e2e8f0;font-size:14px;font-weight:500;">${escapeHtml(value)}</td>
            </tr>`
            )
            .join("")}
        </table>
        <div style="margin-top:24px;padding:16px;background:#0f1a2e;border-radius:8px;border:1px solid #1e293b;">
          <p style="margin:0 0 8px;color:#94a3b8;font-size:13px;">Business problem</p>
          <p style="margin:0;color:#e2e8f0;font-size:14px;line-height:1.6;">${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
        <p style="margin-top:24px;font-size:12px;color:#475569;">
          Reply directly to this email to respond to ${escapeHtml(name)} at ${escapeHtml(email)}
        </p>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: `Limitless Solutions Website <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `Assessment request from ${name}${company ? ` — ${company}` : ""}`.replace(/[\r\n]/g, " "),
      html,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
