# ADR-002: Use Django for the Backend

- **Status:** Accepted
- **Date:** 2026-08-05

## Context

Onion Wallet requires a secure and maintainable backend that exposes a REST API for the frontend.

The backend should provide:

- Authentication and authorization.
- Database access through an ORM.
- Input validation.
- Scalability for future features.
- A mature ecosystem.

## Decision

The backend will be built using:

- Django
- Django REST Framework

## Rationale

Django was selected because:

- The team is already familiar with Python.
- The project is an opportunity to learn Django.
- Django provides a mature and secure framework.
- It includes a powerful ORM and authentication system.
- Django REST Framework simplifies the development of REST APIs.

## Consequences

### Positive

- Rapid development.
- Built-in authentication.
- Mature ecosystem.
- Excellent ORM.
- Strong security defaults.

### Negative

- Heavier than minimal frameworks.
- Higher initial learning curve compared to lightweight alternatives.

## References

- Django Documentation:
  https://docs.djangoproject.com
- Django REST Framework:
  https://www.django-rest-framework.org