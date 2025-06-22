import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "e592dc4f-0579-4dad-8bae-a136efbf5f90");
  requestHeaders.set("x-createxyz-project-group-id", "b9ce6721-c73d-40d2-b9d7-c035f36a14e3");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}