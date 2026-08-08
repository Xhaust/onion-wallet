# Development Environment Setup

## Prerequisites

- Git
- Node.js
- Python
- Docker

## Clone the Repository

```bash
git clone https://github.com/Xhaust/onion-wallet
cd onion-wallet
```

## Docker

Start the development environment:

```bash
docker compose up --build
```

The services are available at:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8000`
- PostgreSQL: `localhost:5432`

To stop the environment:

```bash
docker compose down
```

## Manual Setup

Docker is the recommended development environment. The frontend and backend can also be run directly on the host.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate    # Linux/macOS
pip install -r requirements.txt
python manage.py runserver
```

## Environment Variables

Create a local `.env` file from the example:

```bash
cp .env.example .env
```

Update the values in `.env` with your local configuration.

The `.env` file contains local configuration and secrets and must not be committed to the repository.

`.env.example` contains the required environment variables without real secrets and is committed to the repository as a template.