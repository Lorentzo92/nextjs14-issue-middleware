import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	console.log("middleware");
	return NextResponse.next();
}

// Applying the middleware to all routes except the ones specified
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - login
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico|sesamo.png).*)",
	],
};
