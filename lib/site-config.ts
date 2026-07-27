export const siteConfig = {
  appStoreUrl:
    process.env.NEXT_PUBLIC_APP_STORE_URL ??
    "https://apps.apple.com/app/idREPLACE_ME",
  supportEmail: "support@drumloom.app",
  price: "19,99 €",
  exerciseCount: "1.267",
  legalName: "[Rechtlichen Namen ergänzen]",
  legalAddress: "[Ladungsfähige Anschrift ergänzen]"
} as const;

