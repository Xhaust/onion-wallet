# ADR-001: Use React for the Frontend

- **Status:** Accepted
- **Date:** 2026-08-05

## Context

Imagine Bank requires a modern single-page application (SPA) with strong TypeScript support, maintainability, and a mature ecosystem.

## Decision

The frontend will be built using the following stack:

- React
- TypeScript
- React Compiler
- Vite
- Tailwind CSS
- Oxlint

## Rationale

The selected stack provides:

- A mature and widely adopted frontend ecosystem.
- Excellent TypeScript support.
- Fast development through Vite.
- Automatic optimizations provided by React Compiler.
- High-performance linting with Oxlint.
- Flexibility to define an architecture suitable for the project's needs.

## Consequences

### Positive

- Fast development.
- Excellent developer experience.
- Strong TypeScript support.
- Modern React optimizations.
- Fast linting.

### Negative

- React requires defining project conventions.
- React Compiler is relatively new compared to the traditional React toolchain.

## Alternatives considered

### Angular

Angular was initially considered due to its opinionated architecture and integrated tooling.

However, React was ultimately chosen because the team has greater experience with it, allowing faster development while still meeting the project's architectural requirements.

## References

- React Documentation:
  https://react.dev
- Vite Documentation:
  https://vite.dev