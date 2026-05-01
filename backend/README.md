# Portfolio Backend API

FastAPI backend for Abdul Saboor Arif's portfolio website contact form.

## Setup

1. **Activate virtual environment:**
   - Windows: `venv\Scripts\activate`
   - Linux/Mac: `source venv/bin/activate`

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Create .env file:**
   ```bash
   cp .env.example .env
   ```

4. **Run the server:**
   ```bash
   python main.py
   ```

## API Endpoints

- **GET /** - API information
- **GET /health** - Health check
- **POST /api/contact** - Submit contact form
- **GET /docs** - Interactive API documentation

## Contact Form Payload

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a potential project."
}
```
