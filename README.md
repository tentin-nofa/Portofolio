# Tentin Nofa Tuzika — Portfolio (React + Vite)

## Setup
```
npm install
npm run dev
```
Open the local URL Vite prints (usually http://localhost:5173).

## Build for production
```
npm run build
```
This outputs a `dist/` folder you can deploy to Netlify, Vercel, GitHub Pages, etc.

## Notes
- The "Projects" page (no navbar) is reached via the hash route `#/projects`, triggered by the "View All" button. No extra router library is needed.
- `public/cv.pdf` is served at the root — replace this file any time to update the downloadable CV.
- All project cards link out to GitHub. Edit `src/data/projects.js` to add, remove, or relink projects (homepage shows the first 4, the Projects page shows all of them).
- Global styles live in `src/styles.css`.
