# Imagine Bank

A modern personal finance web application built with a production-oriented architecture.

## Overview

Imagine Bank is a full-stack web application that helps users manage their personal finances through a clean and intuitive interface.

The project is being developed as a collaborative learning experience while following industry best practices in software architecture, documentation, testing, and deployment.

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

### Backend

* Django
* Django REST Framework
* PostgreSQL
* Neon

### Development

* Docker
* Github Actions
* Oxlint

## Architecture

The application follows a **Modular Monolith** architecture.

```
┌─────────────────────┐
│   React Frontend    │
└──────────┬──────────┘
           │
       REST API
           │
┌──────────▼──────────┐
│     Django API      │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│    PostgreSQL DB    │
└─────────────────────┘
```

## Repository Structure

```text
.
├── backend/
├── frontend/
├── docs/
└── README.md
```

## Documentation

Project documentation can be found in the `docs/` directory.

* Architecture overview
* Architecture Decision Records (ADRs)
* Product requirements
* Backend documentation
* Frontend documentation
* Development references

The project documentation was created with the assistance of AI tools and reviewed/adapted by the development team.

## Development

Instructions for local development will be added as the project evolves.