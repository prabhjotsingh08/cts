from typing import Literal
from pydantic import BaseModel, EmailStr, Field

class ContactForm(BaseModel):
    name: str = Field(..., min_length=1)
    email: EmailStr
    platform: Literal["YouTube", "Podcast", "Instagram", "Other"]
    budget: str = Field(..., min_length=1)
    message: str = Field(..., min_length=10)

class NewsletterSignup(BaseModel):
    email: EmailStr
