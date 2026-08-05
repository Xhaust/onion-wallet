# Architecture Overview

## Architecture Style

Imagine Bank follows a modular monolith architecture.

## Components

### Frontend

React SPA responsible for the user interface.

### Backend

Django REST API responsible for:

- Business logic
- Authentication
- Data access

### Database

PostgreSQL database storing application data.

## Communication

The frontend communicates with the backend through REST APIs.