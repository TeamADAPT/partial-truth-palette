# GEMINI.md

## Project Overview

This is a Next.js SaaS boilerplate project named "Saasfly". It is built with a monorepo architecture using Turborepo. The primary technologies used are:

*   **Framework:** Next.js (with App Directory)
*   **Authentication:** Clerk and NextAuth.js
*   **Database:** PostgreSQL with Prisma (for schema management) and Kysely (for type-safe queries)
*   **UI:** Tailwind CSS with Shadcn/ui and Framer Motion
*   **API:** tRPC
*   **State Management:** Zustand
*   **Email:** React-email and Resend

The project is structured as a monorepo with the main Next.js application in `apps/nextjs` and several shared packages in the `packages` directory, including `api`, `auth`, `db`, `stripe`, and `ui`.

## Building and Running

### Prerequisites

*   [Bun](https://bun.sh/)
*   [Node.js](https://nodejs.org/)
*   [Git](https://git-scm.com/)
*   [PostgreSQL](https://www.postgresql.org/)

### Setup

1.  Install dependencies:
    ```bash
    bun install
    ```
2.  Set up environment variables by copying `.env.example` to `.env.local` and filling in the required values.
    ```bash
    cp .env.example .env.local
    ```
3.  Push the database schema:
    ```bash
    bun db:push
    ```

### Development

To run the development server:

```bash
bun run dev:web
```

This will start the Next.js application, which will be available at [http://localhost:3000](http://localhost:3000).

### Build

To build the project for production:

```bash
bun run build
```

## Development Conventions

*   **Monorepo:** The project uses a monorepo structure managed by Turborepo.
*   **Code Quality:** ESLint and Prettier are used for code linting and formatting.
*   **Type Safety:** TypeScript is used throughout the project for end-to-end type safety.
*   **Git Hooks:** Husky is used to enforce code quality with Git hooks.
*   **Environment Variables:** T3 Env is used for environment variable management.
*   **Internationalization (i18n):** The project has support for internationalization.
*   **SEO:** The project is optimized for search engines.
