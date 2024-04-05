"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "./login.css";
import Link from "next/link";

export default function Home() {
  const [loginData, setLoginData] = useState({});
  const [errorMessage, setErrorMessage] = useState(""); 
  const [emailError, setEmailError] = useState(""); // State to hold email error message
  const [passwordError, setPasswordError] = useState("");
  const [showPass, setShowPass] = useState();
  const pressShow = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(`http://localhost:8000/login`, {
        email: loginData.email,
        password: loginData.password,
      });

      if (data?.token) {
        localStorage.setItem("token", data.token);
        router.push("../../ES4edu/es4");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) { // Unauthorized status code
        setErrorMessage("Invalid email or password. Please try again."); // Set error message
      } else {
        setErrorMessage("Invalid email or password. Please try again."); // Set error message
      }
    }
  };
  const validateEmail = () => {
    if (!loginData.email) {
      setEmailError("Email is required.");
      return false;
    } else if (!loginData.email.endsWith("@gmail.com")) {
      setEmailError("Email must end with @gmail.com."); // Validation for email ending with @gmail.com
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (!loginData.password) {
      setPasswordError("Password is required.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = () => {
    if (validateEmail() && validatePassword()) {
      handleLogin();
    }
  };
  return (
    <div className="etseg-login">
      <img src="https://miro.medium.com/v2/resize:fit:1060/1*YX-M4g7d3mLIzpUf7CSfHA.jpeg" alt="" />

      <div className="main-login-card">
        <div className="login-card">
          <h1>Нэвтрэх</h1>
          <br />
          <div>
            <input
              type="text"
              name="email"
              required="и-мэйл"
              placeholder="и-мэйл"
              onChange={(e) =>
                setLoginData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            {emailError && <p className="error-message">{emailError}</p>}
            <p onClick={e => pressShow(e)} className="hide">{showPass ? "hide" : "show"}</p>
            <input
               type={showPass ? "text" : "password"}
              name="password"
              required=""
              placeholder="нууц үг "
              onChange={(e) =>
                setLoginData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
            <button className="login-button" onClick={() => handleSubmit()}>
            нэвтрэх
            </button>
          </div>
          
          {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}

          <div className="login-help">
            <Link href="../../ES4edu/signup">
              <p>Бүртгүүлэх</p>
            </Link>
            <br />
            <Link href="../../ES4edu/login/forgotPassword">Нууц үг сэргээх?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
