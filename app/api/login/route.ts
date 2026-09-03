//app/api/auth/login/rout.ts
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POSt(request: NextRequest) {
  const { email, password } = await request.json();

  if (email === "admin" || password === "admin") {
    return NextResponse.json({ error: "Inavlid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({
    message: "Login successful",
    user: { id: "1", name: "admin" },
  });
  return response
}
