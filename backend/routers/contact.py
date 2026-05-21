import os
from fastapi import APIRouter, HTTPException, status
from fastapi_mail import ConnectionConfig, FastMail, MessageSchema, MessageType
from backend.schemas.forms import ContactForm

router = APIRouter()

def get_mail_config() -> ConnectionConfig:
    return ConnectionConfig(
        MAIL_USERNAME=os.getenv("MAIL_USERNAME", "hello@ctsmedia.in"),
        MAIL_PASSWORD=os.getenv("MAIL_PASSWORD", "your_smtp_password"),
        MAIL_FROM=os.getenv("MAIL_FROM", "hello@ctsmedia.in"),
        MAIL_PORT=int(os.getenv("MAIL_PORT", "587")),
        MAIL_SERVER=os.getenv("MAIL_SERVER", "smtp.gmail.com"),
        MAIL_FROM_NAME=os.getenv("MAIL_FROM_NAME", "CTSMedia"),
        MAIL_STARTTLS=True,
        MAIL_SSL_TLS=False,
        USE_CREDENTIALS=True,
        VALIDATE_CERTS=True
    )

@router.post("/contact")
async def contact_form_submit(form: ContactForm):
    mail_to = os.getenv("MAIL_FROM", "hello@ctsmedia.in")
    
    html = f"""
    <h3>New Contact Form Submission</h3>
    <p><b>Name:</b> {form.name}</p>
    <p><b>Email:</b> {form.email}</p>
    <p><b>Platform:</b> {form.platform}</p>
    <p><b>Budget:</b> {form.budget}</p>
    <p><b>Message:</b> {form.message}</p>
    """
    
    message = MessageSchema(
        subject="New Contact Inquiry - CTSMedia",
        recipients=[mail_to],
        body=html,
        subtype=MessageType.html
    )
    
    try:
        conf = get_mail_config()
        fm = FastMail(conf)
        await fm.send_message(message)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to send email: {str(e)}"
        )
        
    return {"status": "success", "message": "We'll be in touch within 24 hours."}
