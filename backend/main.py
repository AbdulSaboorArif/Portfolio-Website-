from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
import logging
from datetime import datetime

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="Abdul Saboor Arif Portfolio API",
    description="Backend API for portfolio website contact form",
    version="1.0.0"
)

# CORS configuration
origins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class ContactFormRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, description="Sender's name")
    email: EmailStr = Field(..., description="Sender's email address")
    subject: str = Field(..., min_length=5, max_length=200, description="Message subject")
    message: str = Field(..., min_length=10, max_length=2000, description="Message content")

    class Config:
        json_schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "john@example.com",
                "subject": "Project Inquiry",
                "message": "I would like to discuss a potential project collaboration."
            }
        }

class ContactFormResponse(BaseModel):
    success: bool
    message: str
    timestamp: str

# Health check endpoint
@app.get("/health")
async def health_check():
    """Health check endpoint to verify API is running"""
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
        "service": "Portfolio API"
    }

# Contact form endpoint
@app.post("/api/contact", response_model=ContactFormResponse)
async def submit_contact_form(form_data: ContactFormRequest):
    """
    Handle contact form submissions
    """
    try:
        # Log the contact form submission
        logger.info(f"Contact form submission received from: {form_data.email}")
        logger.info(f"Name: {form_data.name}")
        logger.info(f"Subject: {form_data.subject}")
        logger.info(f"Message: {form_data.message[:100]}...")

        return ContactFormResponse(
            success=True,
            message="Thank you for your message! I'll get back to you soon.",
            timestamp=datetime.utcnow().isoformat()
        )

    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="An error occurred while processing your request. Please try again later."
        )

# Root endpoint
@app.get("/")
async def root():
    """Root endpoint with API information"""
    return {
        "message": "Abdul Saboor Arif Portfolio API",
        "version": "1.0.0",
        "docs": "/docs",
        "health": "/health"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001, reload=True)
