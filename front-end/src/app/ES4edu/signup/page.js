"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import style from "./signup.css";

export default function Home() {
  const [signData, setSignData] = useState({});
  const [showPass, setShowPass] = useState();
  const pressShow = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };
  const router = useRouter();

  const handleSignup = async () => {
    const { data } = await axios.post(`http://localhost:8000/user`, {
      phone: signData.phone,
      name: signData.name,
      email: signData.email,
      password: signData.password,
    });
    if (data?.user) {
      localStorage.setItem("uid", data.user.id);
    }
  };
  return (
    <div className="etseg-login">
      <img
        src="https://miro.medium.com/v2/resize:fit:1060/1*YX-M4g7d3mLIzpUf7CSfHA.jpeg"
        alt=""
      />

      <div className="main-login-card">
        <div className="login-card">
          <h1>Бүртгүүлэх</h1>
          <br />
          <div className="signUP">
            <input
              type="text"
              name=""
              required=""
              placeholder="Утасны дугаар"
              onChange={(e) =>
                setSignData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
            <input
              type="text"
              name=""
              required=""
              placeholder="Нэр"
              onChange={(e) =>
                setSignData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              type="text"
              name=""
              required=""
              placeholder="И-мэйл"
              onChange={(e) =>
                setSignData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
              <p onClick={e => pressShow(e)} className="show">{showPass ? "hide" : "show"}</p>
            <input
             type={showPass ? "text" : "password"}
              name=""
              required=""
              placeholder="Нууц үг"
              onChange={(e) =>
                setSignData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
            <Link href="../../ES4edu/login">
              <button className="signup-button" onClick={() => handleSignup()}>Бүртгүүлэх</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
