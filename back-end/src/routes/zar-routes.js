import express from "express";
import multer from "multer";
import { uploadImage, getAllImages, deleteZar } from "../controllers/zar-controller.js";
export const imageRouter = express.Router();
import fs from 'fs';
import { verify } from "crypto";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = "./uploads/";
    fs.mkdirSync(uploadPath, { recursive: true }); // Ensure directory exists
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use only the original name of the file
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/avif" ||
    file.mimetype === "image/webp" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("File type not supported"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

imageRouter.post("/", upload.single("image"), uploadImage);
imageRouter.get("/", getAllImages);
imageRouter.delete("/:ZarId", deleteZar);
