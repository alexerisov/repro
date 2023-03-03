export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/((?!static|favicon.ico|login|promo).*)"]
};
