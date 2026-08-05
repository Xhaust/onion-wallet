# ADR-004: Use a Modular Monolith

- **Status:** Accepted
- **Date:** 2026-08-05

## Context

Imagine Bank is a personal project developed by a two-person team.

The application is expected to grow over time with features such as authentication, accounts, transactions, budgets, analytics and reporting. The architecture should remain easy to understand, maintain and deploy while avoiding unnecessary complexity.

## Decision

The application will be implemented as a **modular monolith**.

The system will be deployed as a single application, while the codebase will be organized into independent modules with clear responsibilities.

## Rationale

A modular monolith was selected because:

- It provides a clear separation of concerns.
- It simplifies development and deployment.
- It avoids the operational complexity of microservices.
- It allows the application to evolve without premature architectural decisions.
- It is well suited for the project's current scope and team size.

## Consequences

### Positive

- Simpler architecture.
- Easier local development.
- Single deployment unit.
- Clear module boundaries.
- Lower operational overhead.

### Negative

- All modules share the same deployment lifecycle.
- Independent scaling of individual modules is not possible.
- Strong architectural discipline is required to prevent tight coupling between modules.