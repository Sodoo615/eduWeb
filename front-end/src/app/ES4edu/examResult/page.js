"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "./exam-result.css";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
export default function ResultShow() {
  const [resultShow, setResultShow] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/resultShow", {
          headers: { "x-access-token": token },
        });
        setResultShow(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Link href="../../ES4edu/es4">
        <button className="baaack">Back</button>
      </Link>


    <div className="mainResult">
    <div className="search-box">
    <button className="btn-search"><IoIosSearch/></button>
    <input  onChange={(e) => setSearch(e.target.value)} type="text" className="input-search" placeholder="Type to Search..."/>
  </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>LessonType</th>
            <th>Name</th>
            <th>Point</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {resultShow.filter((item) =>
            item.username.toLowerCase().includes(search.toLowerCase())
          ).map((item, index) => (
            <tr key={index}>
              <td>{item.typeLessons}</td>
              <td>{item.username}</td>
              <td>{item.result}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {resultShow.filter((item) =>
        item.username.toLowerCase().includes(search.toLowerCase())
      ).length === 0 && (
        <p className="noRes">No results found</p>
      )}
      </div>
      </div>
  );
}
