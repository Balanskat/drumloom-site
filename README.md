# Drumloom site

This repository contains the Drumloom launch site as a static Next.js export.

It is prepared for a GitHub Pages project site at
`https://balanskat.github.io/drumloom-site/`. GitHub Pages is intentionally not
enabled yet, and the deployment workflow runs only when triggered manually.

## Local development

```sh
pnpm install
pnpm dev
```

## Static build

```sh
NEXT_PUBLIC_BASE_PATH=/drumloom-site \
NEXT_PUBLIC_SITE_URL=https://balanskat.github.io/drumloom-site \
pnpm build
```

The generated files are written to `out/` and are ignored by Git.
