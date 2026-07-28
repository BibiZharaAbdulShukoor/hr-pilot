HR Pilot

HR Pilot is an AI-powered recruitment and candidate management system designed to simplify the hiring process. The application enables recruiters to manage candidates and job positions, upload resumes, analyze skills using AI embeddings, and match candidates with suitable jobs based on semantic similarity.

Features

Authentication

* User registration and login
* Secure authentication using JWT
* Protected routes
* Logout functionality

Dashboard

* Overview of recruitment statistics
* Candidate and job summaries
* Notification panel
* Real-time system insights

Candidate Management

* Upload candidate resumes in PDF and DOCX formats
* Extract text from uploaded resumes
* Generate AI embeddings
* View candidate profiles
* Delete candidates

Job Management

* Create new job positions
* Edit existing jobs
* Delete jobs
* View detailed job descriptions

AI Matching

* Semantic matching between candidates and jobs
* AI-generated compatibility scores
* AI explanation for each recommendation

Search and Filtering

* Search candidates
* Search jobs
* Filter recruitment data

User Interface

* Responsive design
* Dark and Light mode
* Modern dashboard layout
* Sidebar navigation
* Notification system

Technologies Used

Frontend

* React
* React Router
* Tailwind CSS
* Lucide React
* Axios

Backend

* Node.js
* Express.js
* JWT Authentication
* Multer
* PDF Parse
* Mammoth

Database

* Supabase
* PostgreSQL
* pgvector

Artificial Intelligence

* OpenRouter Embeddings
* Semantic Similarity Matching

Project Structure

frontend/
backend/

Installation

Clone the repository.

git clone <repository-url>

Install dependencies.

Frontend:

cd frontend
npm install

Backend:

cd backend
npm install

Create a .env file in the backend directory and configure the required environment variables.

Run the backend server.

npm start

Run the frontend.

npm run dev

Environment Variables

The backend requires the following environment variables:

PORT=5000

SUPABASE_URL=your_supabase_url

SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

OPENROUTER_API_KEY=your_openrouter_api_key

EMBEDDING_MODEL=openai/text-embedding-3-small

CHAT_MODEL=openai/gpt-4o-mini

JWT_SECRET=HR_PILOT_SECRET_KEY


Future Improvements

* Candidate ranking improvements
* Email notifications
* Interview scheduling
* Advanced analytics
* Multi-user support
* Resume history
* Company management

Author

Developed as an AI-powered recruitment management system using React, Node.js, Express, Supabase, PostgreSQL, pgvector, and OpenRouter AI.