import { NextResponse } from "next/server";
import { auth } from "./app/api/auth/[...nextauth]/route";

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const isAuth = await auth();
  const protectedRoutes = ["/products", "/cart", "/favorites"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  console.log("test");
  

  if (!isAuth && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/products/:path*", "/cart", "/favorites", "/login"],
};