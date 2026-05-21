import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

from backend.routers.contact import router as contact_router
from backend.routers.newsletter import router as newsletter_router

app = FastAPI(title="CTSMedia API")

frontend_origin = os.getenv("FRONTEND_ORIGIN", "http://localhost:5173")
origins = [frontend_origin]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact_router, prefix="/api")
app.include_router(newsletter_router, prefix="/api")

@app.get("/api/health")
async def health_check():
    return {"status": "ok", "service": "CTSMedia API"}
