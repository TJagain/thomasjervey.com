import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const allowedOrigins = new Set([
  "https://thomasjervey.com",
  "https://www.thomasjervey.com",
  ...(process.env.NODE_ENV === "development"
    ? ["http://localhost:3000"]
    : []),
]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (!origin || !allowedOrigins.has(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { error: "Expected JSON" },
      { status: 415 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 },
    );
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json(
      { error: "Invalid form fields" },
      { status: 400 },
    );
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanMessage = message.trim();

  if (
    cleanName.length < 1 ||
    cleanName.length > 100 ||
    cleanEmail.length > 254 ||
    !emailPattern.test(cleanEmail) ||
    cleanMessage.length < 1 ||
    cleanMessage.length > 5000
  ) {
    return NextResponse.json(
      { error: "Invalid form fields" },
      { status: 400 },
    );
  }

  const account = process.env.MY_EMAIL;
  const password = process.env.MY_PASSWORD;

  if (!account || !password) {
    console.error("Email service is not configured");
    return NextResponse.json(
      { error: "Email service unavailable" },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: account,
      pass: password,
    },
  });

  try {
    await transporter.sendMail({
      from: account,
      to: account,
      replyTo: cleanEmail,
      subject: `Website message from ${cleanName}`.replace(/[\r\n]/g, " "),
      text: `From: ${cleanName} <${cleanEmail}>\n\n${cleanMessage}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    console.error("Email delivery failed");
    return NextResponse.json(
      { error: "Email delivery failed" },
      { status: 500 },
    );
  }
}