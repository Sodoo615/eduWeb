import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  phone: { type: Number, required: true },
  username: { type: String, required: true },
  result: { type: Number, required: true },
  typeLessons: { type: String, required: true },
});

export const Result = mongoose.model("result", userSchema);
