import { id } from "date-fns/locale";
import type { NextApiRequest, NextApiResponse } from "next";
import { QUIZ_MOCK_DATA } from "./quizes";
// import { QUIZ_MOCK_DATA } from "./quizes";

type QUIZ_MOCK_DATA = {
  id: string;
  title: string;
  description: string;
  questions: string[];
  results: string[];
  user: string;
}[];
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QUIZ_MOCK_DATA>
) {
  const { method, body } = req;
  const { id } = req.query;
  const { _id, title, description, questions, results, user } = body;
  if (req.method === "GET") {
    res.status(200).json(QUIZ_MOCK_DATA);
  } else if (req.method === "POST") {
    const newQuiz: any = {
      id: Date.now(),
      title,
      description,
      questions,
      results,
      user
    };
    QUIZ_MOCK_DATA.push(newQuiz);
    res.status(201).json(newQuiz);
  }
}
