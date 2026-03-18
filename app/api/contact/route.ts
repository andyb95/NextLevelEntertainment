import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const PROJECT_TYPE_LABELS: Record<string, string> = {
  dedicated: "Dedicated Theater Room",
  basement: "Basement Build-out",
  "living-room": "Living Room Upgrade",
  "media-room": "Media / Multi-Use Room",
  upgrade: "Existing System Upgrade",
  other: "Other",
};

const BUDGET_LABELS: Record<string, string> = {
  "under-25k": "Under $25,000",
  "25-50k": "$25,000 – $50,000",
  "50-100k": "$50,000 – $100,000",
  "100k-plus": "$100,000+",
  unsure: "Not sure yet",
};

const HEAR_ABOUT_LABELS: Record<string, string> = {
  google: "Google Search",
  referral: "Friend / Referral",
  social: "Social Media",
  houzz: "Houzz",
  yelp: "Yelp",
  other: "Other",
};

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, email, projectType, budget, message, hearAbout } = body;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#111;border:1px solid #2a2a2a;border-bottom:none;border-radius:12px 12px 0 0;padding:32px 36px;text-align:center;">
              <p style="margin:0 0 6px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#b8965a;">New Lead</p>
              <h1 style="margin:0;font-size:26px;color:#fff;font-weight:700;">Next Level Entertainment</h1>
              <div style="margin:16px auto 0;width:60px;height:2px;background:linear-gradient(90deg,transparent,#b8965a,transparent);"></div>
            </td>
          </tr>

          <!-- Gold bar -->
          <tr>
            <td style="background:linear-gradient(90deg,#8a6a2a,#c9a84c,#8a6a2a);height:3px;"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#111;border:1px solid #2a2a2a;border-top:none;border-bottom:none;padding:32px 36px;">

              <!-- Alert badge -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background:#1a1a1a;border:1px solid #b8965a33;border-radius:8px;padding:14px 20px;">
                    <p style="margin:0;font-size:13px;color:#b8965a;font-family:Arial,sans-serif;letter-spacing:1px;text-transform:uppercase;font-weight:600;">
                      &#9733; New consultation request received
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Contact Info -->
              <h2 style="margin:0 0 16px;font-size:14px;letter-spacing:2px;text-transform:uppercase;color:#888;font-family:Arial,sans-serif;font-weight:600;">Contact Details</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                ${row("Name", name)}
                ${row("Phone", `<a href="tel:${phone}" style="color:#b8965a;text-decoration:none;">${phone}</a>`)}
                ${row("Email", `<a href="mailto:${email}" style="color:#b8965a;text-decoration:none;">${email}</a>`)}
              </table>

              <!-- Project Details -->
              <h2 style="margin:0 0 16px;font-size:14px;letter-spacing:2px;text-transform:uppercase;color:#888;font-family:Arial,sans-serif;font-weight:600;">Project Details</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                ${row("Project Type", projectType ? PROJECT_TYPE_LABELS[projectType] ?? projectType : "—")}
                ${row("Budget", budget ? BUDGET_LABELS[budget] ?? budget : "—")}
                ${row("How They Found Us", hearAbout ? HEAR_ABOUT_LABELS[hearAbout] ?? hearAbout : "—")}
              </table>

              <!-- Message -->
              ${
                message
                  ? `<h2 style="margin:0 0 12px;font-size:14px;letter-spacing:2px;text-transform:uppercase;color:#888;font-family:Arial,sans-serif;font-weight:600;">Their Message</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:8px;padding:16px 20px;">
                    <p style="margin:0;color:#ccc;font-size:15px;line-height:1.7;font-family:Arial,sans-serif;">${message.replace(/\n/g, "<br/>")}</p>
                  </td>
                </tr>
              </table>`
                  : ""
              }

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Your Next Level Entertainment Consultation Request"
                       style="display:inline-block;background:linear-gradient(135deg,#b8965a,#d4af7a);color:#0a0a0a;font-family:Arial,sans-serif;font-size:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:14px 32px;border-radius:6px;">
                      Reply to ${name.split(" ")[0]}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0d0d0d;border:1px solid #2a2a2a;border-top:none;border-radius:0 0 12px 12px;padding:20px 36px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#555;font-family:Arial,sans-serif;">
                Next Level Entertainment &nbsp;·&nbsp; nextlevelavutah@gmail.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  try {
    await resend.emails.send({
      from: "Next Level Entertainment <onboarding@resend.dev>",
      to: "nextlevelavutah@gmail.com",
      replyTo: email,
      subject: `New Consultation Request — ${name}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid #1e1e1e;vertical-align:top;width:38%;">
        <span style="font-size:12px;color:#666;font-family:Arial,sans-serif;text-transform:uppercase;letter-spacing:1px;">${label}</span>
      </td>
      <td style="padding:8px 0 8px 16px;border-bottom:1px solid #1e1e1e;vertical-align:top;">
        <span style="font-size:15px;color:#e5e5e5;font-family:Arial,sans-serif;">${value}</span>
      </td>
    </tr>
  `;
}
