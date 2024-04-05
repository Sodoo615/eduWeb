"use client";
import { useState } from "react";
import axios from "axios";
import Reset from "../resetPass/page.js";
import style from "./forgot-password.css";
import { FaLock } from "react-icons/fa";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/forgot-password",
        { email }
      );
      setSuccess(true);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };
  return (
    <div className="forgot-main">
      {!success ? (
        <div className="forgot">
          <div className="lock">
            <FaLock />
          </div>

          <h1>Forgot Password</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
            />
            <button type="submit" className="reset-button">
              Reset Password
            </button>
          </form>
        </div>
      ) : (
        <Reset />
      )}
    </div>
  );
};
export default ForgotPassword;
