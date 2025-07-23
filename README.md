# MANDLACX– Fullstack Developer Intern Technical Assessment

A sleek, responsive incident dashboard built with **Next.js**, **TypeScript**, and **PostgreSQL**. It monitors security camera feeds and lists incidents (e.g., Unauthorised Access, Gun Threat) with real-time resolution functionality.

## ✨ Features

- View recorded incident thumbnails and types
- Camera location context with time-range metadata
- Optimistic UI for quick "Resolve" interaction
- Uses Prisma ORM with seed data

## 🔧 Tech Stack

| Layer        | Tech                     |
|--------------|--------------------------|
| Frontend     | Next.js (App Router)     |
| Styling      | Tailwind CSS + shadcn/ui |
| Language     | TypeScript               |
| Backend      | Server Actions (Next.js) |
| Database     | PostgreSQL + Prisma ORM  |

## Deployment Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/VishalChaudhary01/mandlacx.git
cd mandlacx
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

Create a .env file in the root with the following:

```bash
DATABASE_URL=postgresql://username:password@localhost:5432/mandlacx
```

> 💡 You can also use free DBs like Neon or Supabase.

### 4. Setup Database

Run migrations:

```bash
npx prisma migrate dev --name init
```

Seed the data

```bash
npx prisma db seed
```

### 5. Run the Dev Server

```bash
npm run dev
```

Visit http://localhost:3000

## Tech Decisions

- App Router (Next.js 13+): enables server components and server actions

- Optimistic UI + revalidatePath(): best balance of performance and instant feedback

- shadcn/ui: for prebuilt, accessible UI components (Sheet, Dropdowns)

- TailwindCSS: fast, consistent styling in dark mode

- PostgreSQL: robust open-source relational DB

- Prisma ORM: for type-safe queries, migrations, and seeding
