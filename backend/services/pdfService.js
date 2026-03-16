
import pdfParse from "pdf-parse";
import fs from "fs";

export const extractText = async (path) => {
  const data = await pdfParse(fs.readFileSync(path));
  return data.text;
};
