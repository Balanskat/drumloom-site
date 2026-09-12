const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
// Drumloom is on the App Store, so the live listing is the default rather than
// a placeholder waiting on a repository variable. No country segment: Apple
// sends every visitor to their own storefront, and a hard-coded /us/ would show
// a German reader the wrong one. `NEXT_PUBLIC_APP_STORE_URL` still wins when a
// build needs to point somewhere else.
const appStoreUrl =
  process.env.NEXT_PUBLIC_APP_STORE_URL ||
  "https://apps.apple.com/app/id6797268266";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://balanskat.github.io/drumloom-site";

export const siteConfig = {
  basePath,
  siteUrl,
  asset: (path: `/${string}`) => `${basePath}${path}`,
  absoluteAsset: (path: `/${string}`) => `${siteUrl.replace(/\/$/, "")}${path}`,
  appStoreUrl,
  isAppStoreReady: !appStoreUrl.includes("REPLACE_ME"),
  // Keep in sync with `AppLinks.supportEmail` / `AppLegal` in the iOS app.
  supportEmail: "haid.creative@gmail.com",
  price: "4,99 €",
  exerciseCount: "1,601",
  legalName: "haid.creative · Eugen Schott",
  legalAddress: "Birkenweg 40 · 94405 Landau an der Isar · Germany"
} as const;
