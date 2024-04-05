// controllers/fileController.js
import { File } from "../models/zar-models.js";



export const uploadImage = async (req, res) => {
  try {
    const { originalname, path } = req.file;
    const { description,ZarId } = req.body; 
    const image = new File({
      name: originalname,
      path: path,
      description: description,
      ZarId: ZarId,
    }); 
    await image.save();
    res.status(201).json({ message: 'Image uploaded successfully', image });
  } catch (error) {
    res.status(500).json({ message: 'Failed to upload image', error: error.message });
  }
};
export const getAllImages = async (req, res) => {
  try {
    const images = await File.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch images', error: error.message });
  }
};
export const deleteZar = async (req, res) => {
  const zarId = req.params.ZarId;

  try {
      const quizExists = await File.findOne({ ZarId: zarId });

      if (!quizExists) {
          return res.status(404).json({ success: false, message: 'Quiz not found' });
      }

      const result = await File.deleteOne({ ZarId: zarId });
      if (result.deletedCount > 0) {
          res.json({ success: true, message: 'Quiz delete success' });
      } else {
          res.status(404).json({ success: false, message: 'No quizzes found or unable to delete' });
      }
  } catch (error) {
      console.error('Error deleting quizzes:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
