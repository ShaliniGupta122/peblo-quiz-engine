# Peblo AI Quiz Engine

This project implements a backend system that ingests educational PDF content and converts it into interactive quizzes using AI.

The system extracts text from PDFs, structures the content into manageable chunks, generates quiz questions using a Large Language Model, and serves quizzes through API endpoints.

---

# Architecture Overview

The system pipeline works as follows:

PDF Upload  
↓  
Text Extraction  
↓  
Content Chunking  
↓  
MongoDB Storage  
↓  
LLM Quiz Generation  
↓  
Quiz API  
↓  
Student Answer Evaluation  
↓  
Adaptive Difficulty Logic

---

# Tech Stack

Backend
- Node.js
- Express.js

Database
- MongoDB Atlas
- Mongoose

AI Integration
- Ollama
- Llama3 model

Libraries
- pdf-parse
- axios
- multer

---

# Project Structure

# Peblo AI Quiz Engine

This project implements a backend system that ingests educational PDF content and converts it into interactive quizzes using AI.

The system extracts text from PDFs, structures the content into manageable chunks, generates quiz questions using a Large Language Model, and serves quizzes through API endpoints.

---

# Architecture Overview

The system pipeline works as follows:

PDF Upload  
↓  
Text Extraction  
↓  
Content Chunking  
↓  
MongoDB Storage  
↓  
LLM Quiz Generation  
↓  
Quiz API  
↓  
Student Answer Evaluation  
↓  
Adaptive Difficulty Logic

---

# Tech Stack

Backend
- Node.js
- Express.js

Database
- MongoDB Atlas
- Mongoose

AI Integration
- Ollama
- Llama3 model

Libraries
- pdf-parse
- axios
- multer

---

# Project Structure
peblo-quiz-engine
│
├── backend
│ ├── controllers
│ │ ├── ingestController.js
│ │ └── quizController.js
│ │
│ ├── models
│ │ ├── Chunk.js
│ │ ├── Question.js
│ │ └── Submission.js
│ │
│ ├── routes
│ │ ├── ingestRoutes.js
│ │ └── quizRoutes.js
│ │
│ ├── services
│ │ └── aiService.js
│ │
│ ├── uploads
│ ├── server.js
│ └── package.json
│
├── .env.example
├── .gitignore
└── README.md

---

# Setup Instructions

## 1 Install Dependencies

Navigate to backend folder:


cd backend
npm install


---

## 2 Setup Environment Variables

Create a `.env` file using `.env.example`

Example:


PORT=5000
MONGO_URI=your_mongodb_connection_string
OLLAMA_URL=http://localhost:11434


---

## 3 Run Ollama Model

Install Ollama and run:


ollama run llama3


This starts the local LLM server.

---

## 4 Run Backend Server


node server.js


Server runs on:


http://localhost:5000


---

# API Endpoints

## 1 Content Ingestion

Upload a PDF file and extract structured content.

POST /api/ingest

Example response:


{
"message": "PDF processed successfully"
}


---

## 2 Generate Quiz

Generate quiz questions from stored content chunks.

POST /api/generate-quiz

Question types generated:

- Multiple Choice
- True/False
- Fill in the blank

---

## 3 Fetch Quiz

Retrieve generated quiz questions.

GET /api/quiz

Example response:


[
{
"question": "Which part of a plant helps it to move?",
"type": "MCQ",
"options": ["Leaf","Root","Stem","Flower"],
"difficulty": "1"
}
]


---

## 4 Submit Student Answer

POST /api/submit-answer

Example request:


{
"studentId": "S1",
"questionId": "69b801546049d52520d85272",
"selectedAnswer": "Stem"
}


Example response:


{
"correct": true
}


---

# Database Collections

The system uses MongoDB with the following collections:

### chunks
Stores extracted PDF text segments.

### questions
Stores AI-generated quiz questions.

### submissions
Stores student answers and evaluation results.

---

# Adaptive Difficulty

The system adjusts quiz difficulty based on student performance.

Rules implemented:

- Correct answer → increase difficulty
- Incorrect answer → decrease difficulty

This allows personalized learning experiences.

---

# Sample Workflow

1 Upload PDF using `/api/ingest`

2 Extracted content stored in `chunks`

3 Generate quiz using `/api/generate-quiz`

4 Questions stored in `questions`

5 Student fetches quiz via `/api/quiz`

6 Student submits answers via `/api/submit-answer`

7 Difficulty adjusts based on performance

---

# Notes

- The system uses Ollama with the Llama3 model for local AI inference.
- Sensitive environment variables are excluded from the repository using `.gitignore`.