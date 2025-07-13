import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

async function getGeoInfo(ip: string) {
  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  const { userAgent, visitTime } = await req.json();
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const geo = await getGeoInfo(ip);
  const location = geo
    ? `${geo.city}, ${geo.region}, ${geo.country_name}`
    : 'Unknown';

  // Use the same transporter config as contact form
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'zaid.ch20@gmail.com',
    subject: 'New Portfolio Visit Notification',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00ff88;">New Portfolio Visit</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>User Agent:</strong> ${userAgent}</p>
          <p><strong>Time:</strong> ${visitTime}</p>
          <p><strong>IP:</strong> ${ip}</p>
          <p><strong>Location:</strong> ${location}</p>
        </div>
        <p style="color: #666; font-size: 12px;">
          This notification was sent automatically when someone visited your portfolio.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { success: false, error: errMsg },
      { status: 500 }
    );
  }
}
