# Development Environment Setup

## Prerequisites

- Git
- Node.js
- Python

## Clone the Repository

```bash
git clone https://github.com/Xhaust/onion-wallet
cd onion-wallet
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

## Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate    # Linux/macOS
pip install -r requirements.txt
python manage.py runserver
```

## Docker

Docker support is planned but not yet configured.