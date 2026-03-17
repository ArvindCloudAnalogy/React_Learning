# React Learning Repository

This repository contains multiple React learning projects demonstrating core concepts, component architecture, props management, Tailwind integration, and UI variants.

## Projects included
- `Ui_Project`: Customer segmentation UI with card components, responsive layout, and image overlays.
- `props`: Simple props demonstration with reusable Card components.
- `my-react-app`: Starter Vite + React app.
- `CSS`: CSS-first React project with component-scoped styling.
- `card_mni_project`: Card mini-project buildout.
- `Function_with_React` (current working area): minimal function component scaffold.

## System requirements
- Node.js >= 18 (recommended)
- npm >= 9
- Git

## Install and run each project
1. `cd <project-folder>`
2. `npm install`
3. `npm run dev`

Example from workspace root:
```bash
cd Ui_Project
npm install
npm run dev
```

## Features implemented in `Ui_Project`
- Dynamic `users` array feeding cards
- image cards, overlay text, tag button
- dark gradient for readability
- per-card theme color via `color` property
- hover brightness effect on theme button
- hidden scrollbar style in horizontal carousel

## How to customize
- edit `src/App.jsx` for user data and tags
- edit `src/components/Section1/RightCardContent.jsx` for overlay styles
- adjust `src/index.css` for Tailwind and custom scrollbar behavior

## Troubleshooting
- If app fails to start, delete `node_modules` and reinstall
- For image load issues, ensure URLs are valid and CORS allows access
- Use browser console to inspect CSS class conflicts

## Notes
- This repo is for learning and experimentation.
- Avoid committing large production assets.

---

Maintainer: `CA` (local workspace)

