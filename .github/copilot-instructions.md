# Copilot instructions for this repository

Purpose
- This is a tiny static website (single page) for "Okike PLC". The repository currently contains `index.html` which links to `styles.css`.
- These notes give an AI coding agent the immediately useful, discoverable facts to be productive editing this site.

Big picture (what you'll work with)
- Project type: static HTML/CSS. No build system, no package manifests, no tests found in the workspace.
- Primary file: `index.html` (root). It references `styles.css` with:
  - `<link rel="stylesheet" href="styles.css">`
- The site is a single-page navigation skeleton: a header with a `<nav>` containing a simple `<ul>` of `<li><a>` links.

Key files and patterns to reference
- `index.html` — main entry. Look for:
  - lang attribute: `html lang="en"`
  - meta viewport and charset are present (UTF-8). Keep these intact when editing.
  - Navigation uses placeholder links (`href="#"`). Replace with real paths only when corresponding pages/assets are added.
- `styles.css` — expected stylesheet (not present in this snapshot). If you add or modify styles, put them in `styles.css` and keep `index.html`'s link unchanged.

Conventions and constraints (discoverable)
- Single-page layout: avoid adding complex build tooling; prefer simple, discoverable changes (HTML and CSS edits). If you introduce tooling, document it in a new `README.md`.
- Keep filenames lowercase and flat in the repository root (current structure implies no nested assets folder yet).
- Navigation links are intentionally placeholders. Do not assume other pages exist unless you create them and update links accordingly.

Developer workflows (how to run/debug locally)
- No build step. To preview locally, open `index.html` in a browser directly.
- For a quick local HTTP server (recommended for working with relative paths), run (PowerShell):

```powershell
# from repository root
python -m http.server 8000
# or, if using Node.js and `http-server` is installed:
# npx http-server -p 8000
```

- Use the browser DevTools (Console/Network) to debug CSS/asset loading or JS (if added).

When editing
- Small changes: edit `index.html` and `styles.css` in place and preview in browser.
- Larger changes: add new files in the repo root (e.g., `about.html`) and update the nav links in `index.html`.
- If you add JS/CSS frameworks or build tools, include a short `README.md` describing install and run commands.

Examples from this repo
- Header/nav skeleton to preserve when refactoring:
  - `<header>\n  <nav>\n    <p>Okike Plc</p>\n    <ul> ... </ul>\n  </nav>\n</header>`
- Stylesheet reference to keep: `<link rel="stylesheet" href="styles.css">`

What NOT to change without context
- Do not remove the `<meta charset>` or `<meta name="viewport">` tags.
- Do not change `lang="en"` unless you also internationalize content and add proper lang-specific attributes.

If you add features
- Add a `README.md` at repo root documenting any new build steps, dependencies, or local-run commands.
- If introducing tests or linters, include `package.json` or `requirements.txt` and document commands in the `README.md`.

Questions for the human maintainer
- Where should new assets live (root, `assets/`, `css/`)? Current repo implies root; confirm preferred structure.
- Is there an intended design system or brand colors to follow (no stylesheet present here)?

Finish
- If you want, I can scaffold a minimal `styles.css`, a README, or a local-server task in `package.json`. Tell me what to add next or confirm the asset layout and I will proceed.
