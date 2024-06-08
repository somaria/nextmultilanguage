import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "fi"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  // if you have like to show '/en/about' you can comment out the line below
  defaultLocale: "en",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
