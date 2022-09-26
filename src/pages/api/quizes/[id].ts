import { QUIZ_MOCK_DATA } from "./quizes";

export default function handler(req, res) {
  const { id } = req.query;
  const { method, body } = req;
  const { title, description, questions, results, user } = body;

  switch (method) {
    case "GET":
      const quizes: any = QUIZ_MOCK_DATA.find((quiz) => quiz.id === id);
      res.status(200).json(quizes);
      break;

    case "DELETE":
      const dataDelete = QUIZ_MOCK_DATA.filter((quiz) => quiz.id !== id);
      res.status(200).json(dataDelete);
      break;

    case "PUT":
      const editquiz: any = QUIZ_MOCK_DATA.map((quiz) =>
        quiz.id === id
          ? {
              ...quiz,
              title,
              description,
              questions,
              results,
              user
            }
          : { ...quiz }
      );
      res.status(200).json(editquiz);
      break;
  }
}
