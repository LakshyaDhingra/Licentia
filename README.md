# Licentia

Your personalized path to a driver's license — built for international drivers.

## The Problem

50 million immigrants in the US need a driver's license. No app exists that teaches the _transition_ — what's different between your home country and the US. Existing apps treat everyone like a beginner. We don't.

## What Licentia Does

- **Knowledge test** — figures out what you already know and what you don't
- **Country-pair learning** — teaches exactly what's different for your specific home country → US state
- **Driving simulator** — browser-based 3D scenarios targeting what international drivers fail at
- **Instructor marketplace** — peer mentors, bilingual instructors, certified schools, and retired DMV examiners

## Tech Stack

- React + Vite
- Tailwind CSS v4
- Three.js + React Three Fiber (simulator)
- Supabase (auth + database)
- React Router

## Getting Started

```bash
npm install
npm run dev
```

Add a `.env.local` file with your Supabase credentials:

```
VITE_SUPABASE_URL=your_url_here
VITE_SUPABASE_ANON_KEY=your_key_here
```
