import { NextResponse, NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { verifyToken } from "./lib/verifyToken";

const PROTECTED_ROUTES = ["/clients-dashboard", "/suppliers-dashboard"];
const AUTH_ROUTES = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
];

function isProtectedRoute(pathname: string) {
  return PROTECTED_ROUTES.some((route) => pathname.includes(route));
}

function isAuthorizedRoute(pathname: string) {
  return AUTH_ROUTES.some((route) => pathname.includes(route));
}

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  // Step 1: run intl
  let response = intlMiddleware(request) ?? NextResponse.next();

  // Step 2: run auth checks
  const pathname = request.nextUrl.pathname;
  const token = await verifyToken(request.cookies.get("token")?.value);

  if (isProtectedRoute(pathname) && !token) {
    response = NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthorizedRoute(pathname) && token) {
    if (
      token.payload[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ] === "Clients"
    ) {
      response = NextResponse.redirect(
        new URL("/clients-dashboard/overview", request.url)
      );
    } else {
      response = NextResponse.redirect(
        new URL("/suppliers-dashboard/orders", request.url)
      );
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
