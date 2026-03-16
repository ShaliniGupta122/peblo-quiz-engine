
import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  chunkId: mongoose.Schema.Types.ObjectId,
  question: String,
  type: String,
  options: [String],
  answer: String,
  difficulty: String
});

export default mongoose.model("Question", QuestionSchema);
