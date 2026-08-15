# Drumloom site

This repository contains the Drumloom launch site as a static Next.js export.

The public site is English-only and uses real current Drumloom app screens for
the Rudiments/Library, Practice, Beat Builder, Metronome and Drum Tuner
sections. The exercise image is a real Reverse Paradiddle with sticking and
notation, and the Beat Builder image is captured from the actual Kick & Snare
foundation step, so the patterns shown on the page are real app content rather
than a CSS mockup.

The Rudiments section also includes a lightweight looping preview: it keeps the
real Reverse Paradiddle screen visible and moves a playback head across the
notation, so the exercise reads as a repeating bar without adding a heavy
video download. It is intentionally muted and visual-only for the launch page.

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

## Release checklist

The deployment workflow is manual, so pushing to `main` does not publish the
site by itself. The ready-to-use workflow is stored at
`deployment/deploy-pages.yml` because the current repository token cannot
create files inside `.github/workflows`.

1. In GitHub, open `deployment/deploy-pages.yml`, copy its contents, choose
   **Add file → Create new file**, and save it as
   `.github/workflows/deploy-pages.yml` on `main`. Do not run it yet.
2. In App Store Connect, copy Drumloom's numeric Apple ID and form the public
   URL `https://apps.apple.com/app/idAPPLE_ID`.
3. In the GitHub repository, open **Settings → Secrets and variables → Actions
   → Variables** and create `APP_STORE_URL` with that full URL. Until this is
   set, the site safely shows a non-clickable “Coming soon” button.
4. Open **Settings → Pages** and choose **GitHub Actions** as the source.
5. Open **Actions → Deploy GitHub Pages → Run workflow** and run it from
   `main`. This is the first step that publishes the site.
6. Verify the home page, `/privacy/` and `/legal/` on the published URL, then
   test the App Store button on an iPhone.

For a pre-release check without publishing:

```sh
pnpm install --frozen-lockfile
pnpm run check
NEXT_PUBLIC_BASE_PATH=/drumloom-site \
NEXT_PUBLIC_SITE_URL=https://balanskat.github.io/drumloom-site \
pnpm run build
```
