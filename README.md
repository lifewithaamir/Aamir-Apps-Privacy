# Aamir Apps Privacy

This public repository hosts the privacy center for Aamir's apps. It contains only public policy text, the site and app logos intended for public display, and instructions. Never add app source code, signing keys, APK/AAB files, credentials, private user data, or unpublished business information.

## Shared site style and navigation

- Keep the existing dark teal, warm gold, rounded-card visual style in `site.css`.
- Use `assets/aamir-apps-privacy-logo.jpg` for the **Aamir Apps Privacy site identity** and show it clearly in the home-page hero. Use its cropped `assets/aamir-apps-privacy-mark.jpg` in the site header and favicon; the header logo and name must link home on every page.
- Keep each product's own icon and artwork separate. Use those only for its directory card and its own policy page.
- Load `site-interactions.js` on every page and include its shared controls: pull down at the top to refresh, and the floating back-to-top button after scrolling.
- Preserve the subtle logo/text animations and honor `prefers-reduced-motion`.
- Build with responsive HTML/CSS/vanilla JavaScript; do not add a framework or tracking script for a policy page.

## Add a future app

1. Confirm the app's exact name, public icon/logo, official Play Store listing, permissions, SDKs, data collection/sharing, local storage, retention/deletion controls, and privacy contact route from the current app—not from another app's policy.
2. Create a dedicated responsive page at `apps/<app-slug>/index.html`, using `apps/whatsweb-pro/index.html` as the structure and `site.css` as the shared design. Replace all app-specific text, title, links, dates, and artwork. Do not claim a feature or data practice that has not been verified.
3. Put that app's public icon/artwork in `assets/`. Keep it distinct from the Aamir Apps site logo.
4. Add one entry to the `apps` array in `apps.js` with its actual policy update date, description, icon path, and policy path. The home page sorts entries newest-first and shows six cards per page; retain that behavior.
5. Add a new entry's correct direct URL to that app's Play Console listing after publication. Check that its policy is public, mobile-friendly, and has a working privacy contact route.
6. Check both the home page and the new policy page at desktop and phone widths. Verify the logo links home, app cards open the correct page, pull-to-refresh and back-to-top controls are present, images load, and there are no broken links.

## Replit Agent instructions

Read `replit.md` before editing this repository. It gives the same design, privacy accuracy, navigation, interaction, and verification rules in a form intended for future Replit sessions.

The GitHub Pages URL is configured in this repository's Pages settings. The home page and each app policy have stable, direct URLs.
