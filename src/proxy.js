
import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname, search } = request.nextUrl;

  const protectedRoutes = [
    "/profile",
    "/profile-update",
    "/products",
  ];

  const requiresLogin = protectedRoutes.some(
    (route) =>
      pathname === route ||
      pathname.startsWith(`${route}/`)
  );

  const cookies = request.cookies.getAll();

  const sessionCookie = cookies.some(
    ({ name }) =>
      name === "better-auth.session_token" ||
      name === "__Secure-better-auth.session_token"
  );

  if (requiresLogin && !sessionCookie) {
    const loginUrl = new URL("/sign-in", request.url);

    loginUrl.searchParams.set(
      "callbackURL",
      `${pathname}${search}`
    );

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/profile-update/:path*",
    "/products/:path*",
    
  ],
};