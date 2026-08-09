const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteConfig = {
  basePath,
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://balanskat.github.io/drumloom-site",
  asset: (path: `/${string}`) => `${basePath}${path}`,
  appStoreUrl:
    process.env.NEXT_PUBLIC_APP_STORE_URL ??
    "https://apps.apple.com/app/idREPLACE_ME",
  // Keep in sync with `AppLinks.supportEmail` / `AppLegal` in the iOS app.
  supportEmail: "haid.creative@gmail.com",
  price: "19,99 €",
  exerciseCount: "1.267",
  legalName: "haid.creative · Eugen Schott",
  legalAddress: "Birkenweg 40 · 94405 Landau an der Isar · Germany"
} as const;
