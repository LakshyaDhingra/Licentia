# Setup Requirements

## Prerequisites

Make sure you have these installed on your machine:

- **Node.js** v18 or higher — https://nodejs.org
- **npm** v9 or higher (comes with Node)
- **Vercel CLI** — install globally:

```bash
  npm install -g vercel
```

## First Time Setup

### 1. Clone the repo and install packages

```bash
git clone https://github.com/your-repo/licentia.git
cd licentia
npm install
```

### 2. Create `.env.local` in the project root

Ask Lakshya for the API keys and add them:

```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_INSFORGE_URL=https://z45ybdz7.us-east.insforge.app
VITE_INSFORGE_KEY=...
VITE_CLAUDE_API_KEY=sk-ant-...
TINYFISH_KEY=sk-tinyfish-...
```

### 3. Log in to Vercel

```bash
vercel login
```

Use your GitHub account or email.

### 4. Link the project

```bash
vercel link
```

Select the existing `licentia` project.

### 5. Run the dev server

```bash
vercel dev
```

Open `localhost:3000` in your browser.

## Important Notes

- Always use `vercel dev` not `npm run dev` — the DMV booking feature needs the serverless function
- Never commit `.env.local` to git — it contains secret API keys
- The database is shared — don't delete other people's test rows in InsForge
- Clerk is in development mode — use Google sign in or the test username for demos

## Packages Used

| Package                                              | Purpose                           |
| ---------------------------------------------------- | --------------------------------- |
| `react` + `vite`                                     | Frontend framework                |
| `tailwindcss` + `@tailwindcss/vite`                  | Styling                           |
| `react-router-dom`                                   | Page routing                      |
| `@clerk/clerk-react`                                 | Authentication                    |
| `@insforge/sdk`                                      | Database                          |
| `three` + `@react-three/fiber` + `@react-three/drei` | 3D (future use)                   |
| `vercel`                                             | Deployment + serverless functions |
