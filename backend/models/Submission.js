
import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema({
  studentId: String,
  questionId: mongoose.Schema.Types.ObjectId,
  selectedAnswer: String,
  correct: Boolean
});

export default mongoose.model("Submission", SubmissionSchema);
