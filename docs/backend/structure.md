# Backend Structure

## Overview

The backend is a Django application exposing a REST API using Django REST Framework.

The project follows a modular monolith architecture, where each Django app represents a specific business domain.

## Project Structure

```text
backend/
├── core/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── apps/
│   ├── users/
│   ├── accounts/
│   ├── transactions/
│   └── budgets/
│
├── manage.py
└── requirements.txt
```

## Directory Responsibilities

### core/

Contains the global Django configuration.

Responsibilities:

- Application settings.
- Root URL configuration.
- ASGI/WSGI configuration.
- Global middleware configuration.

### apps/

Contains business domain modules.

Each app should represent a specific domain and contain its own logic.

Example:

```text
transactions/
├── models.py
├── serializers.py
├── views.py
├── urls.py
├── services.py
└── tests.py
```

### models.py

Defines database entities and relationships.

### serializers.py

Defines API data validation and representation using Django REST Framework.

### views.py

Contains API endpoints and request handling.

### services.py

Contains business logic that should remain independent from HTTP concerns.

### tests.py

Contains automated tests for the module.

## Design Principles

- Organize code by business domain.
- Keep business logic separated from API views.
- Avoid unnecessary coupling between modules.
- Keep shared functionality explicit and minimal.