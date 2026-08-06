# ADR-003: Use PostgreSQL as the Primary Database

- **Status:** Accepted
- **Date:** 2026-08-05

## Context

Onion Wallet requires a relational database to store users, accounts, transactions, budgets and other financial data.

The solution should support local development and cloud deployment.

## Decision

The application will use:

- PostgreSQL as the relational database.
- Neon as the managed PostgreSQL provider in production.

## Rationale

PostgreSQL was selected because:

- It is mature and highly reliable.
- It offers excellent relational data support.
- It integrates seamlessly with Django.
- It is well suited for financial applications.

Neon was selected because:

- It provides managed PostgreSQL.
- It offers automatic scaling.
- It has a generous free tier suitable for personal projects.

## Consequences

### Positive

- Reliable relational database.
- Excellent Django integration.
- Easy migration from local PostgreSQL to Neon.

### Negative

- Dependence on an external managed database in production.

## Alternatives Considered

### Supabase

Supabase was considered because it also provides managed PostgreSQL and additional backend services.

However, the project already uses Django for authentication and the application backend, making Supabase's additional features unnecessary.

## References

- Neon Documentation
  https://neon.com/