from pydantic import BaseModel, EmailStr, Field


class ContactFormRequest(BaseModel):
    """Contact form submission request model."""

    name: str = Field(
        ...,
        min_length=2,
        max_length=100,
        description="Name of the person submitting the form"
    )
    email: EmailStr = Field(
        ...,
        description="Valid email address for contact"
    )
    subject: str = Field(
        ...,
        min_length=3,
        max_length=200,
        description="Subject of the message"
    )
    message: str = Field(
        ...,
        min_length=10,
        max_length=2000,
        description="Message content"
    )

    class Config:
        json_schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "john.doe@example.com",
                "subject": "Project Inquiry",
                "message": "I would like to discuss a potential project collaboration."
            }
        }


class ContactFormResponse(BaseModel):
    """Contact form submission response model."""

    success: bool = Field(..., description="Whether the submission was successful")
    message: str = Field(..., description="Response message")

    class Config:
        json_schema_extra = {
            "example": {
                "success": True,
                "message": "Thank you for your message! I'll get back to you soon."
            }
        }


class HealthCheckResponse(BaseModel):
    """Health check response model."""

    status: str = Field(..., description="Service status")
    message: str = Field(..., description="Health check message")

    class Config:
        json_schema_extra = {
            "example": {
                "status": "healthy",
                "message": "Backend service is running"
            }
        }
