import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { ACCESS_TOKEN } from "@/constants/index";

export function middleware(request: NextRequest) {
  const token = cookies().get(ACCESS_TOKEN)?.value;

  if (token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register"],
};
