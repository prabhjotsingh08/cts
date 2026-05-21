# CTSMedia Website

This is the complete codebase for the **CTSMedia** website—an AI-powered video scripting and editing agency for content creators (YouTubers, podcasters, influencers). The stack comprises a **React (Vite) + Tailwind CSS** frontend and a **FastAPI (Python)** backend.

## Prerequisites
- Python 3.11+
- Node.js 20+
- uv (install: `pip install uv` or `curl -Lsf https://astral.sh/uv/install.sh | sh`)

## Backend Setup
```bash
cd backend
cp .env.example .env          # fill in your SMTP credentials
uv venv --python 3.12
.venv\Scripts\activate
uv pip install -r requirements.txt
uv pip install pytest pytest-asyncio
python -m pytest -v           # runs the backend unit tests
uvicorn main:app --reload --port 8000
```

## Frontend Setup
```bash
cd frontend
npm install
npm run dev                   # runs on http://localhost:5173
```

## Asset Directories
Place your media files in:
- `frontend/src/assets/hero/`           → `hero-reel.mp4`, `hero-reel-poster.jpg`
- `frontend/src/assets/portfolio/`      → 6 × portfolio screenshots
- `frontend/src/assets/about/`          → `team-editing-studio.jpg`
- `frontend/src/assets/testimonials/`   → 3 × creator avatar photos

## API Endpoints
- `POST /api/contact`      → contact form handler
- `POST /api/newsletter`   → newsletter signup
- `GET  /api/health`       → health check
