## React State Checkpoint (Vite)

A small React app that demonstrates component state, conditional rendering, and serving static assets from Vite's `public/` folder.

### Features
- Class-based component with `state` (person profile: full name, bio, profession, image)
- Toggle button to show/hide profile content
- Image loaded from `public/` via root‑relative path

### Prerequisites
- Node.js 18+ (or a recent LTS)
- npm 9+ (bundled with Node)

### Getting Started
1) Install dependencies
```bash
npm install
```
2) Start the dev server (with HMR)
```bash
npm run dev
```
3) Open the app
- Vite prints a local URL, typically `http://localhost:5173`

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Production build to `dist/`
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint on JS/JSX files

### How State and Rendering Work
- `src/App.jsx` defines a class component that stores a `person` object in `state` and a boolean `shows` flag.
- Clicking the "Toggle shows" button flips `shows` and conditionally renders the profile block.
- The profile image is rendered from `state.person.imgSrc` when present.

### Using Images from `public/`
Vite serves everything in `public/` at the site root.
- Put your file at `public/Teeth.png`
- Reference it in code with a root‑relative path:
```jsx
imgSrc: "/Teeth.png"
```
Or directly in JSX (without state):
```jsx
<img src="/Teeth.png" alt="Teeth" />
```

### Troubleshooting (Images)
- Not showing? Open `http://localhost:5173/Teeth.png` directly in the browser:
  - If you see 404, the file isn’t in `public/` or the name/case doesn’t match.
- Paths must start with `/` (root‑relative). Do not use `./public/...`.
- URL paths are case‑sensitive even on Windows. Ensure `Teeth.png` vs `teeth.png` matches exactly.
- Hard refresh with `Ctrl+F5` to clear the cache after replacing an image.

### Project Structure (high level)
- `src/App.jsx` — Main component and UI
- `src/main.jsx` — App bootstrap (mounts React) + imports global CSS
- `src/index.css`, `src/App.css` — Global and component styles
- `public/` — Static files served at `/`
- `vite.config.js` — Vite configuration

### Tech Stack
- React 18, Vite, SWC (via `@vitejs/plugin-react-swc`)
- ESLint for linting

### Build and Preview
Create a production build and preview it locally:
```bash
npm run build
npm run preview
```
