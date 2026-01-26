# Repository Guidelines

## Project Structure & Module Organization

- `index.html` is the single-page entry point for the site layout and section structure.
- `assets/css/styles.css` holds all styling, including CSS variables and responsive rules.
- `assets/js/main.js` contains behavior, rendering, and UI interactions; `assets/js/translations.js` stores bilingual content.
- `assets/images/` stores all icons and imagery; `test-icons.html` is a local icon debug page.
- `deploy.sh` and `update-cloudfront.sh` automate S3/CloudFront deployment tasks.

## Build, Test, and Development Commands

- `python3 -m http.server 8000` runs a local static server at `http://localhost:8000` for development and QA.
- `npx http-server -p 8000` is an alternative local server if Node.js is available.
- `./deploy.sh` syncs the site to S3, sets cache headers, and invalidates CloudFront.

## Coding Style & Naming Conventions

- Indentation uses 4 spaces in HTML, CSS, and JavaScript.
- Keep HTML semantic and match existing section IDs/classes used by JS selectors.
- Use kebab-case for CSS class names (e.g., `.contact-info-card`) and descriptive IDs (e.g., `#portfolioTrack`).
- Images and icons are named with clear intent (e.g., `icon-lock.svg`, `hero-background.png`).

## Testing Guidelines

- There is no automated test suite; use manual testing.
- Verify language switching, responsive breakpoints, and form validation in a local server session.
- For UI changes, check at least one mobile and one desktop browser.

## Commit & Pull Request Guidelines

- Commit messages are short, sentence-case summaries (e.g., "Clean landing page and align with Figma").
- PRs should include a concise summary, testing notes (local server command), and screenshots for visual changes.

## Deployment & Configuration Tips

- AWS configuration details live in `aws-config.txt` and `bucket-policy.json`.
- If adding new file types, update `deploy.sh` to set correct MIME types and cache headers.
