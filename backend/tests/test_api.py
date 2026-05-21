import pytest
from unittest.mock import patch, AsyncMock
from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)

def test_health_check():
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok", "service": "CTSMedia API"}

@patch("backend.routers.contact.FastMail.send_message", new_callable=AsyncMock)
def test_contact_success(mock_send_message):
    payload = {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "platform": "YouTube",
        "budget": "$1000 - $5000",
        "message": "Hello, I am interested in video editing services."
    }
    response = client.post("/api/contact", json=payload)
    assert response.status_code == 200
    assert response.json() == {"status": "success", "message": "We'll be in touch within 24 hours."}
    
    # Check that mock was called
    mock_send_message.assert_called_once()
    # Check details of arguments passed to it
    call_args = mock_send_message.call_args[0][0]
    assert call_args.subject == "New Contact Inquiry - CTSMedia"
    assert call_args.recipients == ["hello@ctsmedia.in"]

def test_contact_invalid_email():
    payload = {
        "name": "John Doe",
        "email": "invalid-email",
        "platform": "YouTube",
        "budget": "$1000 - $5000",
        "message": "Hello, I am interested in video editing services."
    }
    response = client.post("/api/contact", json=payload)
    assert response.status_code == 422

def test_contact_message_too_short():
    payload = {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "platform": "YouTube",
        "budget": "$1000 - $5000",
        "message": "Short" # Less than 10 characters
    }
    response = client.post("/api/contact", json=payload)
    assert response.status_code == 422

@patch("backend.routers.contact.FastMail.send_message", new_callable=AsyncMock)
def test_contact_smtp_failure(mock_send_message):
    mock_send_message.side_effect = Exception("SMTP Connection Timeout")
    
    payload = {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "platform": "YouTube",
        "budget": "$1000 - $5000",
        "message": "Hello, I am interested in video editing services."
    }
    response = client.post("/api/contact", json=payload)
    assert response.status_code == 500
    assert "Failed to send email" in response.json()["detail"]

def test_newsletter_success():
    payload = {
        "email": "subscriber@example.com"
    }
    response = client.post("/api/newsletter", json=payload)
    assert response.status_code == 200
    assert response.json() == {"status": "success", "message": "You're on the list."}

def test_newsletter_invalid_email():
    payload = {
        "email": "invalid-email"
    }
    response = client.post("/api/newsletter", json=payload)
    assert response.status_code == 422
