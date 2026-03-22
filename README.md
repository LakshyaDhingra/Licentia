# Licentia

> Your personalized path to a driver's license — built for international drivers.

## The Problem

International people need a driver's license. No app exists that teaches the _transition_ — what's different between your home country and the destination country. Existing apps treat everyone like a beginner. We don't.

## What Licentia Does

- **Knowledge test** — AI-generated questions specific to your home country → destination state
- **Country-pair learning** — teaches exactly what's different for your specific transition
- **Driving simulator** — browser-based 3D scenarios targeting what international drivers fail at
- **Instructor marketplace** — peer mentors, bilingual instructors, certified schools, retired DMV examiners
- **DMV booking** — AI agent finds the exact booking page for your state's learner's permit and road test

## Tech Stack

- React + Vite
- Tailwind CSS v4
- Three.js + PlayCanvas (simulator)
- Supabase → InsForge (database)
- Clerk (authentication)
- Claude API (AI question generation)
- TinyFish (DMV web automation)
- Vercel (deployment + serverless functions)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root:

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_INSFORGE_URL=https://z45ybdz7.us-east.insforge.app
VITE_INSFORGE_KEY=your_insforge_anon_key
VITE_CLAUDE_API_KEY=your_claude_api_key
TINYFISH_KEY=your_tinyfish_key
```

### 3. Run the development server

```bash
vercel dev
```

Use `localhost:3000` — this runs both the frontend and the serverless API functions.

> Do NOT use `npm run dev` for the full experience — TinyFish requires the Vercel serverless function which only runs with `vercel dev`.

## Project Structure

```
licentia/
├── api/
│   └── bookdmv.js          ← TinyFish serverless function
├── src/
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── SignIn.jsx
│   │   ├── Onboarding.jsx
│   │   ├── KnowledgeTest.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Simulator.jsx
│   │   ├── Marketplace.jsx
│   │   └── About.jsx
│   ├── components/
│   │   └── Navbar.jsx
│   ├── lib/
│   │   ├── insforge.js      ← InsForge client
│   │   ├── claude.js        ← Claude API question generation
│   │   └── tinyfish.js      ← TinyFish DMV booking
│   ├── main.jsx
│   ├── index.css
│   └── App.jsx
├── public/
│   ├── hero.svg
│   └── logo.svg
├── .env.local               ← never commit this
├── vite.config.js
└── package.json
```

## User Flow

```
Landing → Sign In (Google or username) → Onboarding (country + state)
→ Knowledge Test (AI-generated, 10 questions) → Dashboard (3 curriculum types)
→ Simulator → Marketplace → DMV Booking (TinyFish)
```

## Curriculum Types

- **Beginner** — full curriculum, starts from scratch
- **Hybrid** — blended, fills knowledge gaps
- **Experienced** — gap only, shows what's different from home country

## Database Schema (InsForge)

```sql
CREATE TABLE user_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  clerk_id TEXT UNIQUE NOT NULL,
  home_country TEXT,
  destination_country TEXT,
  destination_state TEXT,
  curriculum_path TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Team

- Lakshya Dhingra — Lead Full Stack Developer
- Daniel Ortiz — Full Stack Developer
