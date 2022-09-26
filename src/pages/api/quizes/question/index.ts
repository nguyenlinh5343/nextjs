import { id } from "date-fns/locale";
import type { NextApiRequest, NextApiResponse } from "next";
import { QUESTION_MOCK_DATA } from "./question";

// import { QUIZ_MOCK_DATA } from "./quizes";

// type QUESTION_MOCK_DATA = {
// 	_id: number
// 	title: string,
// 	description: string,
// 	answers: string[]
// }[];
export default function handler(req, res) {
  const { method, body } = req;
  const { _id, title, description, answers } = body;
  if (req.method === "GET") {
    res.status(200).json(QUESTION_MOCK_DATA);
  } else if (req.method === "POST") {
    // const title = req.body.title;
    // const description = req.body.pages;
    // const questions = req.body.language;
    // const results = req.body.language;
    // const user = req.body.language;
    const newQuiz: any = {
      _id: Date.now(),
      title,
      description,
      answers: [
        {
          id: Date.now(),
          title
        }
      ]
    };
    QUESTION_MOCK_DATA.push(newQuiz);
    res.status(201).json(newQuiz);
  }
}
