const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const appStoreUrl =
  process.env.NEXT_PUBLIC_APP_STORE_URL ||
  "https://apps.apple.com/app/idREPLACE_ME";
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
  price: "14,99 €",
  exerciseCount: "1,594",
  legalName: "haid.creative · Eugen Schott",
  legalAddress: "Birkenweg 40 · 94405 Landau an der Isar · Germany"
} as const;
