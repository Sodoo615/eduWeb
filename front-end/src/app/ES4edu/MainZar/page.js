"use client";
import { useState, useEffect } from "react";
import style from "../../header/style.css";
import styles from "../es-header/profile.css";
import AdminZar from "../AdminZar/page";
import Zarr from "../../ES4edu/zar/page";
import axios from "axios";
import Link from "next/link";
export default function Header() {
   const [user, setUser] = useState([]);
  
  const [role, setRole] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/${role}`, {
          headers: { "x-access-token": token },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
 
  return user.role === "admin" ? (
    <div>
      <AdminZar />
    </div>
  ) : (
    <Zarr />
  );
}
