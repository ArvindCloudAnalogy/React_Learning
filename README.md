# React Learning Repository

This repository contains multiple React learning projects demonstrating core concepts, component architecture, props management, Tailwind integration, and UI variants.

## Projects included
- `Ui_Project`: Customer segmentation UI with card components, responsive layout, and image overlays.
- `props`: Simple props demonstration with reusable Card components.
- `my-react-app`: Starter Vite + React app.
- `CSS`: CSS-first React project with component-scoped styling.
- `card_mni_project`: Card mini-project buildout.
- `Function_with_React` (current working area): minimal function component scaffold.
-`count App`
-`Notes app`
-`Gallery Project`

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

## Completed Projects
Below is a quick tour of each project folder in this workspace and what was implemented so far.

- `00_JS DOM`: Vanilla JavaScript examples covering DOM targeting, event listeners, form handling, and dynamic UI updates.
  - `DOM` folder: basic DOM traversal, manipulation, class management.
  - `Events` folder: click, mouse, keyboard, and form event patterns.
  - `ToDoList` folder: add/remove tasks, mark complete, persistence logic practice.
- `01_my-react-app`: Vite + React starter template with component structure and basic CSS.
- `02_props`: reusable Card component + props drilling examples, layout using flexbox and card styling.
- `03_card_mni_project/01_card_project`: small card UI project with dynamic data mapping and responsive cards.
- `04_Ui_Project`: full UI build with user segmentation cards, overlays, color themes, and horizontal scrolling.
- `05_Hooks_React`: hooks practice (useState/useEffect/useReducer patterns), derived state and side effects.
- `06_UseState_basic`: building block useState examples, controlled inputs, toggles, and counters.
- `07_counter_App`: interactive counter app with increment/decrement/reset flows and style variations.
- `08_Form_Handling_React`: form fields, validation, controlled components, and submit handling.
- `09_Notes_App`: note creation, edit and delete actions, ideally ready for localStorage integration.
- `10_LocalStorage_React`: state persistence demo using localStorage, load/save lifecycle.
- `11_Api_Calling`: data fetch examples with `fetch` / axios, loading states, and async handling.
- `12_UseEffect_Understandings`: effect hooks deep dive, dependency arrays, and cleanup semantics.
- `13_Gallery_Project`: image gallery components with filters, search, and grid layout.
- `14_React_Router_DOM`: route setup, include layout components like Header.
- `15_Advance_React_Routing`: advanced routing patterns including parameterized routes (`:id`), nested routes, layout persistence across pages, and wildcard 404 handling. Features Home, About, Courses with details view, and Product categories (Men, Women, Kids).
- `16_UseContext_Hook`: Context API deep dive with ThemeContext implementation for global state management, demonstrating how to share data across component trees without prop drilling.


# Basics of react completed going for project with typescript

# Maintainer: `CA` (local workspace)

