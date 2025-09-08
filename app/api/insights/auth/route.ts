import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";

// Server-side only password (NOT exposed to client)
const INSIGHTS_PASSWORD = process.env.INSIGHTS_PASSWORD;

// Generate secure session token
function generateSessionToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

// Validate session token
function validateSessionToken(token: string): boolean {
  // In production, validate against database or secure storage
  // For now, we'll use a simple format check
  return /^[a-f0-9]{64}$/.test(token);
}

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    // Validate password server-side
    if (password !== INSIGHTS_PASSWORD) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Generate secure session token
    const sessionToken = generateSessionToken();

    // Set secure HTTP-only cookie
    const response = NextResponse.json(
      { success: true, message: "Authentication successful" },
      { status: 200 }
    );

    // Set secure cookie with session token
    response.cookies.set("insights_session", sessionToken, {
      httpOnly: true, // Not accessible via JavaScript
      secure: process.env.NODE_ENV === "production", // HTTPS only in production
      sameSite: "strict", // CSRF protection
      maxAge: 60 * 60 * 8, // 8 hours
      path: "/", // Available for all routes
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get("insights_session")?.value;

    if (!sessionToken || !validateSessionToken(sessionToken)) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({ authenticated: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  // Logout - clear session cookie
  const response = NextResponse.json(
    { success: true, message: "Logged out successfully" },
    { status: 200 }
  );

  response.cookies.delete("insights_session");

  return response;
}
