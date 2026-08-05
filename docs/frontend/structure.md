# Frontend Structure

## Overview

The frontend is a React application built with TypeScript and Vite.

The application follows a feature-oriented structure to keep related components, logic and styles close together.

## Project Structure

```text
frontend/
├── src/
│   ├── assets/
│   ├── components/
│   ├── features/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── services/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── public/
└── package.json
```

## Directory Responsibilities

### components/

Reusable UI components shared across different features.

Examples:

- Button
- Modal
- Input

### features/

Feature-specific modules containing business-related frontend logic.

Examples:

- authentication
- transactions
- accounts

### pages/

Application routes and page-level components.

Examples:

- Login page
- Dashboard page
- Transactions page

### services/

Communication with external services.

Examples:

- API client
- Authentication requests

### hooks/

Reusable React hooks.

Examples:

- useAuth
- useTransactions

### types/

Shared TypeScript types and interfaces.

### utils/

Generic helper functions.

## Naming Conventions

- Components: PascalCase

Example:

```
TransactionCard.tsx
```

- Hooks: camelCase with `use` prefix

Example:

```
useAuth.ts
```

- Utilities: camelCase

Example:

```
formatCurrency.ts
```