
# Quiz Engine 

Backend system that:
- Ingests PDF learning content
- Extracts text and chunks it
- Generates quiz questions using a local LLM (Ollama)
- Stores data in MongoDB
- Serves quiz 


## Setup

Install dependencies

npm install

## Environment

Create .env file

MONGO_URI=mongodb://localhost:27017/peblo
PORT=5000


## Endpoints

Upload PDF
POST /api/ingest  

Generate quiz questions by ollama
POST /api/generate-quiz

fetch quiz
GET /api/quiz

Submission of answers
POST /api/submit-answer

## Ollama

Install Ollama and pull model

ollama pull llama3:latest

Start Ollama before running backend.

## Run

node server.js