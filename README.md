# 🧠 Next.js PokéAPI Exploration 🐾
Welcome! This repo is a structured journey to refresh and deepen Next.js skills by building a Pokémon-themed app powered by [PokéAPI](https://pokeapi.co/). Each stage introduces new concepts and features to level up understanding of modern web development.

---

## 🔰 Stage 1: Basics & Routing

**Goals:**
- Grasp CSR vs SSR in Next.js
- Practice dynamic routing

**Features:**
- Search Pokémon by name
- Dynamic profile page at `/pokemon/[name]` via `getServerSideProps`
- Simple navbar with links to Home / About

---

## 🧱 Stage 2: Component Composition & Layout

**Goals:**
- Build modular, reusable components
- Implement global layout

**Features:**
- `PokemonCard`, `TypeBadge`, and `SearchBar` components
- Shared layout with header and footer
- Tailwind CSS or HeroUI integration

---

## ⚙️ Stage 3: State Management & Async Logic

**Goals:**
- Handle asynchronous fetch flow
- Experiment with global state

**Features:**
- Pokémon global state using Zustand or `useReducer`
- Search history sidebar
- Loading & error UI states

---

## 🧭 Stage 4: Pagination & Dynamic Routing

**Goals:**
- Create paginated listing views
- Deepen dynamic path techniques

**Features:**
- `/pokemon/page/[number]` listing via `getStaticPaths`
- PokéAPI's paginated endpoint
- HeroUI-powered pagination controls

---

## 🌀 Stage 5: Animation & Interactivity

**Goals:**
- Add life to the UI with motion
- Explore user interactions

**Features:**
- GSAP or Framer Motion sprite animations
- Animated search suggestions
- Interactive type glow effects

---

## 🚀 Bonus Stage: Caching & Performance

**Goals:**
- Master `getStaticProps` and ISR
- Optimize data fetching

**Features:**
- Pre-render top 100 Pokémon with revalidation
- On-demand fetch for less common Pokémon

---

## 🧭 Progress Tracker (Gym Badge Style 💪)

| Stage | Badge | Completed |
|-------|-------|-----------|
| Stage 1 | 🟢 Routing Rookie | ☑ |
| Stage 2 | 🔵 Layout Artisan | in progress |
| Stage 3 | 🟠 State Sage | ☐ |
| Stage 4 | 🟣 Pagination Pro | ☐ |
| Stage 5 | 🔴 Motion Master | ☐ |
| Bonus | 🟡 Cache Commander | ☐ |

---

## 📘 Resources & Inspiration

- [PokéAPI Docs](https://pokeapi.co/docs/v2)
- [Next.js Documentation](https://nextjs.org/docs)
- [HeroUI Components](https://www.herouikit.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP Animations](https://greensock.com/gsap/)

---

# Next.js & HeroUI Template

This is base on the template for creating applications using Next.js 14 (app directory) and HeroUI (v2).

[Try it on CodeSandbox](https://githubbox.com/heroui-inc/heroui/next-app-template)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [HeroUI v2](https://heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-app-template/blob/main/LICENSE).
