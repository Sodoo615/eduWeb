import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  path: String,
  description: String,
  ZarId: {
    type: String,
    unique: true,
    default: () => Math.floor(10000 + Math.random() * 90000).toString(),
    required: true
},
});

export const File = mongoose.model("file", userSchema);
