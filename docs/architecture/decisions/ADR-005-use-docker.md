# ADR-005: Use Docker for Development

- **Status:** Accepted
- **Date:** 2026-08-05

## Context

Imagine Bank consists of multiple services that need to run together during development, including the frontend, backend and database.

Developers should be able to run the project in a consistent environment without manually installing and configuring every dependency.

## Decision

Docker will be used to containerize the development environment.

Docker Compose will be used to orchestrate local services.

## Rationale

Docker was selected because:

- It provides a consistent development environment across different machines.
- It simplifies the setup process for new contributors.
- It isolates project dependencies from the host system.
- It allows running services such as PostgreSQL locally without manual installation.

## Consequences

### Positive

- Reproducible development environment.
- Easier onboarding for new contributors.
- Consistent dependency versions.
- Simplified local database setup.

### Negative

- Additional complexity in the development workflow.
- Developers need basic Docker knowledge.
- Container configuration requires maintenance.