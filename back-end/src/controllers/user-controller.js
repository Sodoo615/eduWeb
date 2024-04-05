import { request } from "express";
import { UserModel } from "../models/user-models.js";
import { sendResetCodeByEmail } from "../service/email.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const users = [
  {
    id: "sanoifhjsapomfp868",
    phone: 88997298,
    name: "bob",
    email: "bob",
    password: "bob",
    role: "admin",
  },
];

export const getAllUsers = async (req, res) => {
  const users_data = await UserModel.find({});
  res.status(200).json({ users: users_data });
};

export const getUser = async (req, res) => {
  // const params = req.params;
  const user = req.user;
  // const filteredUser = users.filter((cur) => cur.id === params.id);
  const oneUser = await UserModel.findById(user.user_id);

  if (!oneUser) {
    res.status(405).json({ message: "User not found" });
  } else {
    res.status(200).json({ user: oneUser });
  }
};

export const createUser = async (req, res) => {
  const body = req.body;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  await UserModel.create({
    phone: body.phone,
    name: body.name,
    password: hashedPassword,
    email: body.email,
    createdOn: new Date(),
  });
  // users.push(newUser);
  res.status(200).json({ users: "success" });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const resetToken = Math.floor(1000 + Math.random() * 9000).toString();
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();
    await sendResetCodeByEmail(email, resetToken);
    res.status(200).json({ message: "Reset token sent to your email" });
  } catch (error) {
    console.error("Error in forgot password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const resetPassword = async (req, res) => {
  const { resetPasswordToken, newPassword } = req.body;
  try {
    const user = await UserModel.findOne({ resetPasswordToken });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (Date.now() > user.resetPasswordExpires) {
      return res.status(400).json({ message: "Token expired" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Error in reset password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
