# Aamir Apps Privacy

This public repository contains only app privacy pages, public brand assets, and this site’s static listing. Never add app source code, signing keys, APKs, AABs, credentials, or private user data.

## Add a future app

1. Add a responsive policy page at `apps/<app-slug>/index.html`.
2. Add that app’s public icon under `assets/`.
3. Add an entry to the `apps` array in `apps.js`, with its actual `publishedAt` date, page URL, and icon path.
4. Keep the newest `publishedAt` entries first; the home page sorts them automatically and paginates six cards per page.
5. Verify the policy against the app’s current permissions, SDKs, data flows, Play Console Data safety answers, and support contact before publishing.

The GitHub Pages URL is set in the repository’s Pages settings. Each policy page can be linked directly from its own Play Console listing.
