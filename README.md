# Ojasvi Energy Group — two-section website

This version contains **only PRD section 1 (Executive Summary) and section 2 (Company Positioning)**. It is one English-language page with two main sections and anchor navigation.

Included content: company introduction, headquarters, the three intended first impressions, all 13 audiences, corporate identity and positioning, the proposition, mission, vision, six principles, and three brand-personality characteristics. Strategic positioning is labeled as a direction and ambition, with no fabricated operating history or achievements.

## Architecture

- Next.js App Router with TypeScript and server-rendered content.
- Shared responsive header/footer and modular structured company-profile content.
- Static generation with five-minute revalidation for optional Sanity content.
- A single Sanity company-profile schema and singleton editor.
- Vercel-compatible production build, metadata, organization structured data, robots policy, and homepage-only sitemap.
- No projects, business hubs, investor pages, news, careers, inquiry forms, tracking, or other PRD sections are exposed.

Historical Ask Jeeves files remain untouched at the repository root. They are not served by Next.js. The root index.html now contains the Ojasvi static export for GitHub Pages. The original archived index is recoverable from Git history. The broader previous Ojasvi implementation was preserved outside the checkout in `/workspace/ojasvi-full-site-before-simplification.tar.gz`.

## Run

Use Node 24 (see `.nvmrc`; Node 22.12+ is supported).

```sh
npm ci --cache /tmp/ojasvi-npm-cache
npm run dev
```

For production:

```sh
npm run build
npm run start -- --port 3000
```

## Validate

```sh
npm run typecheck
npm run build
npx playwright install chromium
npm test
```

This cloud image already has Chromium. Use `BROWSER_EXECUTABLE=/usr/bin/chromium npm test`. The browser suite checks the two-section scope, content, desktop/mobile anchor navigation, removed routes, sitemap, overflow, and automated WCAG 2.2 AA accessibility. Manual accessibility and production review remain separate.

## Optional Sanity

The website works immediately using the uploaded PRD content without CMS credentials. To connect a real public Sanity dataset, set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in the web environment.

For the separate Studio:

```sh
npm ci --prefix sanity --cache /tmp/ojasvi-npm-cache
export SANITY_STUDIO_PROJECT_ID=YOUR_REAL_PROJECT_ID
export SANITY_STUDIO_DATASET=production
XDG_CONFIG_HOME=/tmp/ojasvi-config npm run dev --prefix sanity
```

The editor uses the singleton document ID `ojasvi-company-profile`. Only approved, public profile content is read. Invalid responses fall back to the PRD content. Configure permissions and publication approvals in Sanity; the approval field alone is not role enforcement. No Sanity project or live publishing credentials are configured here.

The Studio dependency audit previously reported upstream vulnerabilities in CLI/tooling dependencies. Studio is separate from the web application's deployment; do not consider it security-cleared for publication. Do not disable integrity checks or force transitive version overrides. The public website has no need to run Studio tooling.

## Deploy publicly

From this checkout, authenticate to your Vercel account and deploy:

```sh
npx vercel login
npx vercel --prod
```

Use the repository root and the detected Next.js framework. Set `NEXT_PUBLIC_SITE_URL` to the actual HTTPS deployment origin, then redeploy for correct canonical and sitemap URLs. CMS variables are optional. No personal data is collected.

This repository includes a generated static export at its root for GitHub Pages. In repository Settings → Pages, choose Deploy from a branch, main, / (root), then Save. Its expected address is https://poerbaya.github.io/. Public availability must be checked after GitHub completes deployment. This cloud onboarding interface does not provide a live browser preview. Environment publication saves the development environment; it does not publish the website to Vercel. Local code changes must be pushed before deploying through GitHub-based Vercel import.

## Refresh the GitHub Pages export

Run `NEXT_PUBLIC_SITE_URL=https://poerbaya.github.io npm run build:pages`, copy the generated contents of `out/` to the repository root, and retain `.nojekyll`. Commit those generated files together with the source changes. Sanity content is evaluated at build time in the static version and requires a rebuild to update. Custom Next.js response headers are available on Vercel, not the static GitHub Pages export.
