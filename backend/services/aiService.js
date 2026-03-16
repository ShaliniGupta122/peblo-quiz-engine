import axios from "axios";

export const generateQuestions = async (text) => {

  const prompt = `
You are a quiz generator.

From the following content generate:
- 1 MCQ
- 1 True/False
- 1 Fill in the blank

Return ONLY valid JSON.
Do not include explanations or extra text.

Format:

[
{
"question": "string",
"type": "MCQ",
"options": ["A","B","C","D"],
"answer": "correct option",
"difficulty": "1"
},
{
"question": "string",
"type": "True/False",
"options": ["True","False"],
"answer": "True",
"difficulty": "1"
},
{
"question": "string",
"type": "Fill",
"options": [],
"answer": "word",
"difficulty": "1"
}
]

Content:
${text}
`;

  const res = await axios.post("http://localhost:11434/api/generate", {
    model: "llama3:latest",
    prompt: prompt,
    stream: false
  });

  return res.data.response;
};