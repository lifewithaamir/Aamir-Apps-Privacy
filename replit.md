# Instructions for Replit Agent

This repository is the shared public privacy-policy site for Aamir's apps. When the user asks for a new app policy, add it to this site; do not create another repository or put the policy in an app's private source repository unless the user explicitly asks.

## Preserve the site's identity and layout

- Use the current dark teal and warm gold palette, typography, spacing, rounded panels, and responsive cards from `site.css`.
- The Aamir Apps Privacy identity is `assets/aamir-apps-privacy-logo.jpg`; it is not an individual app's logo. Show the full logo clearly in the home-page hero and use its cropped `assets/aamir-apps-privacy-mark.jpg` in the shared header and favicon.
- On every page, the animated site logo and “Aamir Apps / Privacy center” wordmark must be a working link to the home page.
- Use each app's own icon/artwork only for that app's home-directory card and policy page. Never replace the site's logo with an app icon.
- Keep the logo and wordmark animation subtle and disable it for users who request reduced motion.
- Every page must load the shared `site.css` and `site-interactions.js`. Include the floating back-to-top button and the top-of-page pull-to-refresh status element using the markup in the existing pages.
- Use plain, accessible, responsive HTML/CSS/JavaScript. Avoid frameworks, trackers, unnecessary external dependencies, and horizontal overflow.

## Add a policy for an app

1. Inspect the current app's actual source/configuration and user-provided details. Verify its developer name, permissions, third-party SDKs, data handled by the app and those SDKs, on-device storage, retention, deletion, and public contact route. Do not copy another app's data practices.
2. Create `apps/<app-slug>/index.html`. Follow the structure in `apps/whatsweb-pro/index.html`, keep the policy readable on phones, and make all relative links work from the new folder depth.
3. Add the app's approved public icon/artwork to `assets/`, with a clear filename. Keep it separate from `aamir-apps-privacy-logo.jpg`.
4. Add the app's name, accurate `publishedAt` date, short description, icon path, and policy URL to the `apps` array in `apps.js`. The directory must remain newest-first and paginated at six cards per page.
5. Keep the public repository limited to the privacy site, policy copy, and explicitly public brand assets. Never commit app source, APK/AAB builds, keystores, passwords, credentials, private data, or unapproved images.
6. Check factual claims against the current app, its Play Console Data safety answers, and third-party SDK disclosures. Do not invent a contact email or claim a contact route exists unless it has been confirmed.
7. Verify the home page and policy page are publicly reachable, test app-card and home links, inspect images and browser errors, and review the layout at desktop and phone widths. Confirm the shared pull-to-refresh and back-to-top controls exist on both pages.
8. Give the user the home URL and that app's direct policy URL. Mention any unverified Play Store contact or policy details instead of implying the page guarantees store approval.

## Existing page paths

- Home page: `index.html`
- Directory data and six-card pagination: `apps.js`
- Shared styles: `site.css`
- Shared interactions: `site-interactions.js`
- App-specific policies: `apps/<app-slug>/index.html`
- Public assets: `assets/`
