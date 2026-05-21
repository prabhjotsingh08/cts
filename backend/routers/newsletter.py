import sys
from fastapi import APIRouter
from backend.schemas.forms import NewsletterSignup

router = APIRouter()

@router.post("/newsletter")
async def newsletter_signup(signup: NewsletterSignup):
    print(f"NEWSLETTER SIGNUP: {signup.email}", flush=True)
    return {"status": "success", "message": "You're on the list."}
