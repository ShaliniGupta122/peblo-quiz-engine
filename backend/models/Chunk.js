
import mongoose from "mongoose";

const ChunkSchema = new mongoose.Schema({
  sourceId: String,
  text: String,
  topic: String
});

export default mongoose.model("Chunk", ChunkSchema);
