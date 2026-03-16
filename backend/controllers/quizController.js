import Chunk from "../models/Chunk.js";
import Question from "../models/Question.js";
import Submission from "../models/Submission.js";
import { generateQuestions } from "../services/aiService.js";



export const generateQuiz = async (req, res) => {

  try {

    const chunks = await Chunk.find().limit(3);

    for (const chunk of chunks) {

      const aiResponse = await generateQuestions(chunk.text);

      const jsonStart = aiResponse.indexOf("[");
      const jsonEnd = aiResponse.lastIndexOf("]") + 1;

      if (jsonStart === -1 || jsonEnd === -1) continue;

      const jsonString = aiResponse.slice(jsonStart, jsonEnd);

      const questions = JSON.parse(jsonString);

      for (const q of questions) {

        await Question.create({
          chunkId: chunk._id,
          question: q.question,
          type: q.type,
          options: q.options || [],
          answer: q.answer,
          difficulty: q.difficulty || "easy"
        });

      }

    }

    res.json({
      message: "Quiz generated successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Quiz generation failed"
    });

  }

};



export const getQuiz = async (req, res) => {

  try {

    const questions = await Question.find().limit(5);

    res.json(questions);

  } catch (error) {

    res.status(500).json({
      error: "Failed to fetch quiz"
    });

  }

};


export const submitAnswer = async (req, res) => {

  try {

    const { studentId, questionId, selectedAnswer } = req.body;

    const question = await Question.findById(questionId);

    if (!question) {
      return res.status(404).json({
        error: "Question not found"
      });
    }

    const correct = question.answer === selectedAnswer;

    await Submission.create({
      studentId,
      questionId,
      selectedAnswer,
      correct
    });

    res.json({
      correct
    });

  } catch (error) {

    res.status(500).json({
      error: "Submission failed"
    });

  }

};