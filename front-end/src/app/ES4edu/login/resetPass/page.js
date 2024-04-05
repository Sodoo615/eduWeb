"use client"
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { MdChangeCircle } from "react-icons/md";
import style from "./reset-password.css"
export default function ResetPasswordPage() {
  const router = useRouter();
  const [resetPasswordToken, setResetPasswordToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    if (newPassword.length < 6) {
      setMessage('Password must be at least 6 characters long');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/reset-password', {
        resetPasswordToken: resetPasswordToken,
        newPassword: newPassword,
      });
      console.log(response);
      router.push('../../../ES4edu/login');
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className='chnageEtseg'>
    <div className="change-password-container">
    <div className="icon-container">
      <MdChangeCircle className="change-icon" />
    </div>
    <h1>Reset Password</h1>
    <form  onSubmit={handleSubmit} className="password-form">
      <input
        type="password"
        value={resetPasswordToken}
        onChange={(e) => setResetPasswordToken(e.target.value)}
        placeholder="Enter reset password token"
        className="password-input"
      />
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Enter new password"
        className="password-input"
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm new password"
        className="password-input"
      />
      <button type="submit" className="submit-button">Submit</button>
    </form>
    {message && <p className="message">{message}</p>}
  </div>
  </div>
  );
}
