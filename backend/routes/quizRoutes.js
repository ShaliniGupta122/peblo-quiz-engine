import express from "express";
import { generateQuiz, getQuiz, submitAnswer } from "../controllers/quizController.js";

const router = express.Router();

router.post("/generate-quiz", generateQuiz);

router.get("/quiz", getQuiz);

router.post("/submit-answer", submitAnswer);

export default router;