import fs from "fs";
import pdf from "pdf-parse";
import Chunk from "../models/Chunk.js";

export const ingestPDF = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        error: "No PDF uploaded"
      });
    }

    const dataBuffer = fs.readFileSync(req.file.path);

    const pdfData = await pdf(dataBuffer);

    const text = pdfData.text;

    
    const chunkSize = 500;
    const chunks = [];

    for (let i = 0; i < text.length; i += chunkSize) {
      chunks.push(text.slice(i, i + chunkSize));
    }

    for (const chunk of chunks) {
      await Chunk.create({
        text: chunk
      });
    }

    
    res.json({
      message: "PDF processed successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "PDF ingestion failed"
    });

  }
};