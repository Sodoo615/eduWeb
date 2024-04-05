import { Result } from "../models/questionResult-model.js";

export const getAllQuestionsResult = async (req, res) => {
  try {
    const results = await Result.find();

    const formattedResults = results.map(result => ({
      phone: result.phone,
      username: result.username,
      result: result.result ,
      typeLessons: result.typeLessons
    }));  
    res.status(200).json({ results: formattedResults });
  } catch (error) {
    console.error('Error in getAllQuestions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
export const createResult = async (req, res) => {

  try {
    const { username, result , typeLessons , phone} = req.body;
  
    const user = await Result.create({ username: username, result: result , typeLessons : typeLessons, phone : phone});
    if (user) {
      res.status(200).json({ data: user, message: "success" });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
