# Next

Next is a simple decentralized application that creates an Ethereum wallet for each user who signs in with Google. It uses Next.js App Router, Prisma and PostgreSQL.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deploying to Vercel](#deploying-to-vercel)
- [Contributing](#contributing)
- [License](#license)

## Features
- Google OAuth authentication with **next-auth**
- Automatic Ethereum wallet generation
- Prisma ORM with PostgreSQL
- Tailwind CSS for styling

## Tech Stack
- **Framework:** Next.js 14 with TypeScript
- **Database:** PostgreSQL & Prisma
- **Auth:** Google OAuth via next-auth
- **Blockchain:** ethers.js

## Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Copy the sample environment file**
   ```bash
   cp .env.sample .env
   ```
   Fill in the required variables described below.
3. **Generate Prisma client**
   ```bash
   npx prisma generate
   ```
4. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Environment Variables
The application uses the following variables:
- `CLIENT_ID` – Google OAuth client ID
- `CLIENT_SECRET` – Google OAuth client secret
- `NEXTAUTH_SECRET` – Secret used by next-auth
- `NEXTAUTH_URL` – Base URL of your deployed site
- `DATABASE_URL` – PostgreSQL connection string

## Deploying to Vercel
1. Push the repository to GitHub.
2. In Vercel, create a new project from your GitHub repo.
3. Set the environment variables listed above in your Vercel project settings.
4. Deploy. Vercel will automatically install dependencies and run `next build`.

## Contributing
See [`contributing.md`](contributing.md) for guidelines.

## License
This project is licensed under the [MIT License](LICENSE).
