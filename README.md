# Abdul Saboor Arif - Professional Portfolio Website

A modern, premium portfolio website showcasing expertise in Full-Stack Development, Agentic AI, and Web Technologies. Built with Next.js 15, TypeScript, Tailwind CSS, and FastAPI.

![Portfolio Preview](./design.md)

## 🚀 Live Demo

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8001
- **API Docs:** http://localhost:8001/docs

## ✨ Features

- **Premium Futuristic Design** - Dark theme with cyan-blue gradient accents
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Animations** - Framer Motion animations throughout
- **Contact Form** - Functional contact form with FastAPI backend
- **SEO Optimized** - Comprehensive meta tags and semantic HTML
- **Type-Safe** - Full TypeScript implementation
- **Docker Ready** - Complete Docker setup with docker-compose

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Advanced scroll animations
- **Lucide React** - Icon library

### Backend
- **Python 3.11+** - Modern Python
- **FastAPI** - High-performance API framework
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📦 Project Structure

```
Portfolio_Website/
├── frontend/                 # Next.js frontend application
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── layout/          # Layout components (Navbar, Footer)
│   │   ├── sections/        # Page sections (Hero, About, Skills, etc.)
│   │   └── ui/              # Reusable UI components
│   ├── lib/                 # Utilities and constants
│   ├── public/              # Static assets
│   ├── Dockerfile           # Frontend Docker configuration
│   └── package.json         # Frontend dependencies
├── backend/                 # FastAPI backend application
│   ├── main.py             # FastAPI application
│   ├── requirements.txt    # Python dependencies
│   ├── Dockerfile          # Backend Docker configuration
│   └── .env.example        # Environment variables template
├── docker-compose.yml      # Docker Compose configuration
├── design.md              # Design specifications
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** and npm
- **Python 3.11+** and pip
- **Docker** and Docker Compose (optional)

### Option 1: Run with Docker (Recommended)

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Portfolio_Website
   ```

2. **Start both services:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8001
   - API Docs: http://localhost:8001/docs

### Option 2: Run Locally

#### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

#### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   ```

3. **Activate virtual environment:**
   - Windows: `venv\Scripts\activate`
   - Linux/Mac: `source venv/bin/activate`

4. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Create .env file:**
   ```bash
   cp .env.example .env
   ```

6. **Run the server:**
   ```bash
   python main.py
   ```

## 🎨 Customization

### Update Personal Information

Edit `frontend/lib/constants.ts` to update:
- Personal details (name, bio, location)
- Social media links
- Projects and skills
- Experience timeline

### Modify Theme Colors

Edit `frontend/tailwind.config.ts` to customize:
- Color palette
- Gradients
- Animations
- Spacing

### Configure Backend

Edit `backend/.env` to configure:
- CORS origins
- Email settings (for contact form)
- API host and port

## 📱 Sections

1. **Hero** - Eye-catching introduction with status badge and CTAs
2. **Stats Bar** - Key metrics and achievements
3. **About** - Professional background and services
4. **Skills** - Technology stack with animated marquee
5. **AI Lab** - AI projects and experiments
6. **Work** - Portfolio projects showcase
7. **Journey** - Experience and education timeline
8. **Contact** - Functional contact form
9. **Footer** - Contact information and social links

## 🔧 Development

### Frontend Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Backend Commands

```bash
python main.py                    # Run with auto-reload
uvicorn main:app --reload        # Alternative run command
pytest                           # Run tests (if configured)
```

### Docker Commands

```bash
docker-compose up                # Start services
docker-compose up --build        # Rebuild and start
docker-compose down              # Stop services
docker-compose logs -f           # View logs
```

## 🌐 Deployment

### Vercel (Frontend)

1. Push code to GitHub
2. Import project in Vercel
3. Configure build settings:
   - Framework: Next.js
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Railway/Render (Backend)

1. Push code to GitHub
2. Create new service
3. Configure:
   - Root Directory: `backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

### Docker Deployment

Deploy the entire stack using docker-compose on any VPS:

```bash
docker-compose -f docker-compose.yml up -d
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Abdul Saboor Arif**

- GitHub: [@AbdulSaboorArif](https://github.com/AbdulSaboorArif)
- LinkedIn: [Abdul Saboor Arif](https://www.linkedin.com/in/abdulsaboor-arif/)
- Location: Karachi, Sindh, Pakistan

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Built with Claude Code and specialized AI agents
- Icons by Lucide React
- Fonts by Google Fonts (Inter)

---

**© 2026 Abdul Saboor Arif. Crafted with intent in Karachi.**
