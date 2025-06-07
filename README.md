# Next

Next is a sleek decentralized app that instantly spins up an Ethereum wallet every time you sign in with Google. Powered by Next.js App Router, Prisma and PostgreSQL, it makes exploring Web3 effortless.

## About
Next generates a fresh Ethereum wallet whenever you authenticate with Google. It keeps wallet creation simple by storing account details in a PostgreSQL database through Prisma and safeguarding sign-in with next-auth. The project demonstrates how modern Web3 tooling can provide a smooth on-ramp for newcomers.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
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

## Contributing
See [`contributing.md`](contributing.md) for guidelines.

## License
This project is licensed under the [MIT License](LICENSE).
